import requests
import time
from itertools import islice

def get_dictionary_words():
    # Source: Public domain English word list (3-4 letters)
    url = "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt"
    response = requests.get(url)
    words = response.text.splitlines()
    
    # Filter 3-4 letter words and format for Minecraft (a-z only)
    valid_words = [
        word.lower() for word in words
        if len(word) in {3, 4} and word.isalpha()
    ]
    return valid_words

def check_minecraft_username(username):
    url = f"https://api.mojang.com/users/profiles/minecraft/{username}"
    response = requests.get(url)
    return response.status_code == 404  # 404 = available

# Generate dictionary words (3-4 letters)
all_words = get_dictionary_words()

# Check availability in batches (to avoid rate limits)
available = []
BATCH_SIZE = 600  # Mojang's rate limit: ~600 requests per 10 mins

for i in range(0, len(all_words), BATCH_SIZE):
    batch = all_words[i:i+BATCH_SIZE]
    for username in batch:
        if check_minecraft_username(username):
            available.append(username)
            print(f"{username}: Available ✅")
        else:
            print(f"{username}: Taken ❌")
    
    # Wait 10 minutes between batches
    if i + BATCH_SIZE < len(all_words):
        print("\nWaiting 10 minutes to avoid rate limits...")
        time.sleep(600)  # 10 minutes

# Save results
with open("available.txt", "w") as f:
    f.write("\n".join(available))

print(f"\nDone! Found {len(available)} available names.")