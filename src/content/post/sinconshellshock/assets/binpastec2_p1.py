# THIS IS THE SERVER

import requests
import re
import urllib3
import random
import base64
import argparse

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# Function to get username and password from command-line arguments
def get_user_credentials():
    parser = argparse.ArgumentParser(description='Process username and password.')
    parser.add_argument('-u', '--username', type=str, required=True, help='The username of the user')
    parser.add_argument('-p', '--password', type=str, required=True, help='The password of the user')
    
    args = parser.parse_args()
    return args.username, args.password


# Main function
def main():
    username, password = get_user_credentials()

    # Define login URL and credentials
    login_url = "https://binpaste.siminet-c2.org/login"
    poll_url = "https://binpaste.siminet-c2.org/"
    paste_url = "https://binpaste.siminet-c2.org/paste"

    # Headers (customize as needed)
    # -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:136.0) Gecko/20100101 Firefox/136.0' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' -H 'Accept-Language: en-US,en;q=0.5' -H 'Accept-Encoding: gzip, deflate, br, zstd' -H 'Content-Type: application/x-www-form-urlencoded' -H 'Origin: https://binpaste.siminet-c2.org' -H 'Connection: keep-alive' -H 'Referer: https://binpaste.siminet-c2.org/' -H 'Upgrade-Insecure-Requests: 1' -H 'Sec-Fetch-Dest: document' -H 'Sec-Fetch-Mode: navigate' -H 'Sec-Fetch-Site: same-origin' -H 'Sec-Fetch-User: ?1' -H 'Priority: u=0, i'

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:136.0) Gecko/20100101 Firefox/136.0",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Content-Type": "application/x-www-form-urlencoded",
        "Origin": "https://binpaste.siminet-c2.org",
        "Connection": "keep-alive",
        "Referer": "https://binpaste.siminet-c2.org/",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1",
        "Priority": "u=0, i"
    }

    # Session to persist cookies
    session = requests.Session()
    session.verify = False

    # Login payload (adjust based on site's login form)
    payload = {
        "username": username,
        "password": password
    }

    # Perform login request
    response = session.post(login_url, data=payload, headers=headers)

    # Check login success
    if response.status_code == 200:
        print("Login successful!")
        
        runloop = True
        while runloop:
            # Check the main URL for paste links
            response = session.get(poll_url, headers=headers)
            paste_links = re.findall(r'href="(/paste/\d+)"', response.text)
            if paste_links:
                for link in paste_links:
                    full_url = f"https://binpaste.siminet-c2.org{link}"
                    # Fetch paste content
                    paste_response = session.get(full_url, headers=headers)
                    if paste_response.status_code == 200:                    
                        # show output of paste
                        print(paste_response)
                        # (your code here)
                        # delete the result?

            # Prompt user for new paste content
            new_paste_content = input(f"binpaste [{username}]> ")
            if new_paste_content != "":
                print("")
                # send the paste content to binpaste
                # (your code here)
                # post_response = session.post(paste_url, data=post_payload, headers=headers)
    else:
        print("Login failed!", response.status_code, response.text)

if __name__ == "__main__":
    main()
