import requests
import concurrent.futures
import time

# Fetch a curated English dictionary (nouns, verbs, adjectives)
def get_filtered_dictionary():
    url = "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt"
    response = requests.get(url)
    words = response.text.splitlines()
    
    # Filter for meaningful, common words (customize these rules)
    filtered = [
        word.lower() for word in words
        if 3 <= len(word) <= 12  # Minecraft allows 3-16 characters
        and word.isalpha()
        and not word.endswith(('ing', 'ed', 'ly', 's'))  # Remove verb forms
        and word not in [
            'the', 'and', 'you', 'for', 'are', 'but', 'not', 'all', 'any', 'its'
        ]  # Exclude common articles
        # Optional: Add allowed categories (e.g., animals, tools)
        # and word in ANIMAL_WORDS  # (you can load a custom list)
    ]
    return filtered[:5000]  # Test first 5000 words for speed

def check_minecraft_username(username):
    url = f"https://api.mojang.com/users/profiles/minecraft/{username}"
    try:
        response = requests.get(url, timeout=5)
        return username if response.status_code == 404 else None
    except requests.exceptions.RequestException:
        return None

def main():
    print("Loading meaningful dictionary...")
    words = get_filtered_dictionary()
    print(f"Checking {len(words)} words...")
    
    available = []
    BATCH_SIZE = 600  # Mojang's rate limit: 600 requests/10 mins
    total_batches = (len(words) // BATCH_SIZE) + 1
    
    for batch_num in range(total_batches):
        start = batch_num * BATCH_SIZE
        end = start + BATCH_SIZE
        batch = words[start:end]
        
        # Check 10 names concurrently (adjust max_workers)
        with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
            futures = {executor.submit(check_minecraft_username, word): word for word in batch}
            for future in concurrent.futures.as_completed(futures):
                result = future.result()
                word = futures[future]
                if result:
                    available.append(result)
                    print(f"{word}: Available ✅")
                else:
                    print(f"{word}: Taken ❌")
        
        # Respect rate limits (wait 10 mins after each batch)
        if batch_num < total_batches - 1:
            print(f"\nWaiting 10 minutes to avoid rate limits (batch {batch_num + 1}/{total_batches})...")
            time.sleep(600)  # 10 minutes
    
    # Save results
    with open("available_names.txt", "w") as f:
        f.write("\n".join(available))
    
    print(f"\nDone! Found {len(available)} available names.")

if __name__ == "__main__":
    main()