import requests
import concurrent.futures

# Curated meaningful names list (same as before)
USERNAMES = [
    "Aether", "Zephyr", "Cove", "Thal", "Onyx", "Vexel", "Nyx", "Wynter", "Sylph",
    "Kestrel", "Briar", "Cairn", "Eclipse", "Fable", "Gryph", "Haven", "Iris", "Juniper",
    # ... (keep the rest of the list as provided earlier)
]

def check_minecraft_username(username):
    """Check username availability."""
    url = f"https://api.mojang.com/users/profiles/minecraft/{username}"
    try:
        response = requests.get(url, timeout=5)
        return username if response.status_code == 404 else None
    except requests.exceptions.RequestException:
        return None

def main():
    available = []
    print("Checking usernames... (FASTER MODE)\n")
    
    # Use 5-10 threads for concurrent checks
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        futures = {executor.submit(check_minecraft_username, name): name for name in USERNAMES}
        
        for future in concurrent.futures.as_completed(futures):
            result = future.result()
            if result:
                available.append(result)
                print(f"{result}: Available ✅")
            else:
                username = futures[future]
                print(f"{username}: Taken ❌")
    
    # Save results
    with open("available_names.txt", "w") as f:
        f.write("\n".join(available))
    
    print(f"\nDone! Found {len(available)} available names.")

if __name__ == "__main__":
    main()