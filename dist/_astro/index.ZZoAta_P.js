const t="kalmarctf2025/index.md",a="post",s="kalmarctf2025",i=`\r
## Misc\r
\r
## babyKalmarCTF  \r
\r
\`\`\`\r
Question: Ever played a CTF inside a CTF?\r
\r
We were looking for a new scoring algorithm which would both reward top teams for solving super hard challenges, but also ensure that the easiest challenges wouldn't go to minimum straight away if more people played than we expected.\r
\r
Thats when we came across this ingenious suggestion! sigpwny/ctfd-dynamic-challenges-mod#1\r
\r
We've implemented it this scoring idea(see here: https://github.com/blatchley/ctfd-dynamic-challenges-mod ) and spun up a small test ctf to test it out.\r
\r
If you manage to win babykalmarCTF, we'll even give you a flag at /flag!\r
\r
Spin up your own personal babykalmarCTF here: https://lab1.kalmarc.tf/\r
\`\`\`\r
---\r
### Goals\r
1. Trick the dynamic CTF scoring system.\r
2. Solve all the solvable CTF challenges.\r
3. Spam fake team registrations on the platform.\r
4. Outperform Kalmarunionen\r
---\r
### Solution:\r
Credit: @OS1R1S _for babyKalmarCTF challenges_\r
1. Within babyKalmarCTF there are several categories of challenges:\r
	- Baby's first RSA adventure (Crypto)\r
	- My First Flagchecker (Reverse)\r
	- THE OSINT CHALLENGE (OSINT)\r
	- Baffling, Ridiculous And Intriguing Letters, Laughter Ensues! (Misc)\r
	- Welcome Flag (Welcome)\r
	- Simple  Math Challenge (Impossible)\r
	- Baby's Second RSA (Impossible)\r
	- A randcrack challenge (Impossible)\r
	- The Last Step (Impossible)\r
	\r
2. Welcome Flag:   \r
	**Flag:** \`babykalmar{welcome_to_babykalmar_CTF}\`\r
	\r
3. My First Flagchecker:  \r
	**Flag:** \`babykalmar{string_compare_rev_ayoooooooo}\`\r
	\r
4. THE OSINT CHALLENGE:  \r
    **Flag:** \`babykalmar{aarhus}\`\r
	\r
5. Baffling, Ridiculous And Intriguing Letters, Laughter Ensues:  \r
	**Flag:** \`BABYKALMAR{SUPERORIGINALMORSECODECHALLENGE}\`\r
	\r
6. Baby's first RSA adventure:  \r
	**Flag**: \`babykalmar{wow_you_are_an_rsa_master!!!!!}\`\r
\r
\r
### Final Result\r
---\r
After solving all the challenges, we have to trick the scoring system. The script as below, to spam fake team registration, we designed an Auto Webform Filler.\r
\`\`\`python\r
from selenium import webdriver\r
from selenium.webdriver.common.by import By\r
import time\r
\r
# Set up Firefox WebDriver\r
options = webdriver.FirefoxOptions()\r
options.headless = False\r
\r
driver = webdriver.Firefox(options=options)\r
\r
register_url = "https://45d9cb6b475c2631a4b32ccd8e0bcf6a-59591.inst1.chal-kalmarc.tf/register"\r
team_url = "https://45d9cb6b475c2631a4b32ccd8e0bcf6a-59591.inst1.chal-kalmarc.tf/teams/new"\r
logout_url = "https://45d9cb6b475c2631a4b32ccd8e0bcf6a-59591.inst1.chal-kalmarc.tf/logout"\r
\r
for i in range(100): \r
    driver.get(register_url)\r
    \r
    username = f"FakeUser{i}"\r
    email = f"fakeuser{i}@example.com"\r
    password = "P@ssw0rd123"\r
\r
    driver.find_element(By.ID, "name").send_keys(username)\r
    driver.find_element(By.ID, "email").send_keys(email)\r
    driver.find_element(By.ID, "password").send_keys(password)\r
\r
    driver.find_element(By.ID, "_submit").click()\r
\r
    time.sleep(2)\r
\r
    driver.get(team_url)\r
    \r
    team_name = f"FakeTeam{i}"\r
    driver.find_element(By.ID, "name").send_keys(team_name)\r
    driver.find_element(By.ID, "password").send_keys("TeamP@ssw0rd")\r
\r
    driver.find_element(By.ID, "_submit").click()\r
\r
    print(f"Registered {username} & Created Team {team_name}")\r
\r
    driver.get(logout_url)\r
    time.sleep(2) \r
\r
driver.quit()\r
\`\`\`\r
![](./assets/webform.gif)  \r
![](./assets/result.gif)  \r
**Flag:** \`kalmar{w0w_y0u_b34t_k4lm4r_1n_4_c7f?!?}\`\r
`,l={title:"KalmarCTF 2025",description:"Writeups for kalmarCTF 2025",publishDate:new Date(17416512e5),heroImage:{src:new Proxy({src:"/_astro/kalmarCTFbanner.k231OVd_.png",width:2699,height:756,format:"png",fsPath:"C:/Users/gr1d/Documents/gr1d-init/gr1d-init.github.io/src/content/post/kalmarctf2025/assets/kalmarCTFbanner.png"},{get(r,e,n){return e==="clone"?structuredClone(r):e==="fsPath"?"C:/Users/gr1d/Documents/gr1d-init/gr1d-init.github.io/src/content/post/kalmarctf2025/assets/kalmarCTFbanner.png":(r[e]!==void 0&&globalThis.astroAsset&&globalThis.astroAsset?.referencedImages.add("C:/Users/gr1d/Documents/gr1d-init/gr1d-init.github.io/src/content/post/kalmarctf2025/assets/kalmarCTFbanner.png"),r[e])}}),color:"#c5d6fe"},draft:!1,tags:["ctf","misc"],language:"English"},o={type:"content",filePath:"C:/Users/gr1d/Documents/gr1d-init/gr1d-init.github.io/src/content/post/kalmarctf2025/index.md",rawData:void 0};export{o as _internal,i as body,a as collection,l as data,t as id,s as slug};
