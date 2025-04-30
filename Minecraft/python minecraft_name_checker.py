import requests
import time

# Fetch a curated list of meaningful English words (3-16 letters)
def get_meaningful_words():
    url = "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt"
    response = requests.get(url)
    words = response.text.splitlines()
    
    # Filter words with 3-16 letters and common meanings
    meaningful_words = [
        word.lower() for word in words
        if 3 <= len(word) <= 16 and word.isalpha()
    ]
    return meaningful_words

def check_minecraft_username(username):
    url = f"https://api.mojang.com/users/profiles/minecraft/{username}"
    try:
        response = requests.get(url, timeout=10)
        return response.status_code == 404  # 404 = available
    except requests.exceptions.RequestException:
        return False  # Skip if connection fails

def main():
    words = get_meaningful_words()
    available = []
    
    # Rate limit: 600 requests every 10 minutes (Mojang's rule)
    BATCH_SIZE = 600
    total_batches = (len(words) // BATCH_SIZE) + 1

    for batch_num in range(total_batches):
        start = batch_num * BATCH_SIZE
        end = start + BATCH_SIZE
        batch = words[start:end]
        
        for username in batch:
            if check_minecraft_username(username):
                available.append(username)
                print(f"{username}: Available ✅")
            else:
                print(f"{username}: Taken ❌")
            time.sleep(1)  # Add delay to avoid spamming
        
        # Wait 10 minutes after each batch
        if batch_num < total_batches - 1:
            print("\nWaiting 10 minutes to avoid rate limits...")
            time.sleep(600)
    
    # Save results
    with open("available_names.txt", "w") as f:
        f.write("\n".join(available))
    print(f"Found {len(available)} available names!")

if __name__ == "__main__":
    main()