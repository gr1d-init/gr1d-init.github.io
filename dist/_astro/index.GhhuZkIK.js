const a="sincondragonbadge/index.md",s="post",t="sincondragonbadge",i=`\r
SinCon 2025's hardware badge reimagines Singapore's iconic Dragon Playground as an interactive CTF challenge. This nostalgic tribute to the Dragon Playground at Toa Payoh, Singapore.\r
![Dragon Playground](./assets/playground.jpg)\r
\r
## Getting Started\r
\r
### Badge Assembly\r
\r
First, you'll need to solder the badge with 8 LEDs. Follow the comprehensive assembly guide:\r
- 📄 [Assembly Guide](https://github.com/gr1d-init/gr1d-init.github.io/blob/a6a38534c63f7162651ea4e7ad0ca0fd554bcb4d/src/content/post/sincondragonbadge/assets/sincon-dragon-solder.pdf)\r
\r
### Environment Setup\r
\r
Once your badge is assembled, set up the CTF environment:\r
- 📄 [CTF Setup Guide](https://github.com/gr1d-init/gr1d-init.github.io/blob/a6a38534c63f7162651ea4e7ad0ca0fd554bcb4d/src/content/post/sincondragonbadge/assets/sincon-dragon-ctf.pdf)\r
\r
## Challenge Writeups\r
\r
### Challenge 1\r
\r
**Question:**\r
\`\`\`\r
baaba abaaa abbab aaaba abbba abbab\r
aaabb baaab aaaaa aabba abbba abbab\r
\`\`\`\r
\r
**Solution:**\r
\r
This is a Bacon cipher. The pattern uses two different characters (represented by 'a' and 'b') to encode letters.\r
\r
Decoding the cipher gives us: \`SINCONDRAGON\`\r
\r
Since the flag format requires all lowercase.\r
\r
The flag is: **sincondragon**\r
\r
---\r
\r
### Challenge 2\r
\r
**Question:**\r
\`\`\`\r
That's one beautiful lanyard, innit?\r
\`\`\`\r
\r
**Solution:**\r
\r
The challenge references a physical lanyard with runic symbols. Using Google Lens to scan the symbols reveals they correspond to RUNE fonts.\r
\r
![Lanyard with Runic Symbols](./assets/lanyard.jpg)\r
\r
By decoding each runic character individually and converting to lowercase as required by the flag format.\r
\r
The flag is: **sinconparc**\r
\r
---\r
\r
### Challenge 3\r
\r
**Question:**\r
\`\`\`\r
aGFja2Vyd2FyZS5pby9zaW5jb24yMDI1LWNoYWxsZW5nZS1h\r
\`\`\`\r
\r
**Solution:**\r
\r
First, decode the Base64 string to reveal a website URL:\r
\`\`\`\r
https://hackerware.io/sincon2025-challenge-a\r
\`\`\`\r
\r
Visiting the website reveals two split pieces of a QR code:\r
\r
![Website Preview](./assets/website1.png)\r
\r
To solve this:\r
\r
1. **Assemble the QR code** - Combine both pieces\r
2. **Invert colors** - The second piece needs color inversion (can be done in PowerPoint or image editor)\r
\r
![Original QR Before Inversion](./assets/firstqr.png)\r
\r
3. **Scan the assembled QR** - This gives us the encoded message:\r
\r
![Complete QR Code](./assets/completeqr.png)\r
\r
   \`\`\`\r
   jrypbzr gb gur cnex g0n-c4l0u\r
   \`\`\`\r
\r
Using a cipher identifier, this appears to be ROT13. Decoding it reveals:\r
\`\`\`\r
welcome to the park t0a-p4y0h\r
\`\`\`\r
\r
The flag is: **t0a-p4y0h**\r
\r
---\r
\r
### Challenge 4\r
\r
**Question:**\r
\`\`\`\r
aGFja2Vyd2FyZS5pby9zaW5jb24yMDI1LWdlcmJlci56aXA=\r
\`\`\`\r
\r
**Solution:**\r
\r
First, decode the Base64 string to reveal a download URL:\r
\`\`\`\r
https://hackerware.io/sincon2025-gerber.zip\r
\`\`\`\r
\r
Download and extract the ZIP file containing Gerber files (PCB design files for the dragon badge). Among the various Gerber files, examine \`SINCON-copper3.gbr\` which contains the hidden message.\r
\r
![Challenge 4 Message](./assets/chall4.png)\r
\r
The message indicates to "zigzag through the rails," suggesting this is a Rail Fence cipher. Decoding the ciphertext from the last line using a Rail Fence decoder reveals the hidden message.\r
\r
![Rail Fence Decoder Result](./assets/decoderrail.png)\r
\r
The flag is: **dr4g0n-c1ty**\r
\r
\r
---\r
\r
### Challenge 5\r
\r
**Question:**\r
\`\`\`\r
aGFja2Vyd2FyZS5pby9zaW5jb24yMDI1LWRyYWdvbi1yb2Fy\r
\`\`\`\r
\r
**Solution:**\r
\r
First, decode the Base64 string to reveal a website URL:\r
\`\`\`\r
https://hackerware.io/sincon2025-dragon-roar\r
\`\`\`\r
\r
Visiting the website shows an audio-related challenge. The audio file can be accessed by appending \`.wav\` to the URL:\r
\`\`\`\r
https://hackerware.io/sincon2025-dragon-roar.wav\r
\`\`\`\r
\r
Listening to the audio reveals it's a rickroll. The website contains a hint: "if anyone asks: the meme is the secret to the universe!" This suggests using steganography with "rickroll" as the password.\r
\r
Using steghide to extract hidden data from the audio file with the password \`rickroll\` reveals a hidden text file \`dragonsecret.txt\`:\r
\r
![Steghide Extraction](./assets/steghide.png)\r
\r
The extracted file contains:\r
\r
\`\`\`\r
The dragon will... bre4th-f1r3\r
\`\`\`\r
\r
The flag is: **bre4th-f1r3**\r
\r
---\r
\r
### Challenge 6\r
\r
**Question:**\r
\`\`\`\r
aGFja2Vyd2FyZS5pby9zaW5jb24yMDI1LWNoYWxsZW5nZS1i\r
\`\`\`\r
\r
**Solution:**\r
\r
Decoding the Base64 string reveals a URL:\r
\`\`\`\r
https://hackerware.io/sincon2025-challenge-b\r
\`\`\`\r
\r
The website contains another hidden challenge similar to the previous one:\r
\r
![Website Preview](./assets/chall6.png)\r
\r
Following the same pattern as Challenge 3, I appended \`.png\` to the URL to access the challenge image directly:\r
\`\`\`\r
https://hackerware.io/sincon2025-challenge-b.png\r
\`\`\`\r
\r
The image displays a series of semaphore flag positions:\r
\r
![Semaphore Flags](./assets/chall6pic.png)\r
\r
Using a semaphore decoder, each flag position corresponds to a letter:\r
\r
![Semaphore Decoder](./assets/dcodesemaphore.webp)\r
\r
The flag is: **dr4gon-fru1t**\r
\r
---\r
\r
### Challenge 7\r
\r
**Question:**\r
\`\`\`\r
g13 f4 -16 e3 g7 t1 d10 014 419 h2\r
s9 p17 i8 412 l5 y20 r11 118 a6 n15\r
\`\`\`\r
\r
**Solution:**\r
\r
This cipher uses character-index pairs where each number represents a positional index. Extract the first character of each pair and sort by their numerical values.\r
\r
Extracting character-index pairs:\r
\`\`\`\r
g13, f4, -16, e3, g7, t1, d10, 014, 419, h2, s9, p17, i8, 412, l5, y20, r11, 118, a6, n15\r
\`\`\`\r
\r
Sorting by index values (1→20):\r
\`\`\`\r
t1, h2, e3, f4, l5, a6, g7, i8, s9, d10, r11, 412, g13, 014, n15, -16, p17, 118, 419, y20\r
\`\`\`\r
\r
Reading the characters in order: **theflagisdr4g0n-p14y**\r
\r
The flag is: **dr4g0n-p14y**\r
\r
---\r
\r
### Challenge 8\r
\r
**Question:**\r
\`\`\`\r
aGFja2Vyd2FyZS5pby9zaW5jb24yMDI1LWNoYWxsZW5nZS1j\r
\`\`\`\r
\r
**Solution:**\r
\r
Decoding the Base64 string reveals another URL:\r
\`\`\`\r
https://hackerware.io/sincon2025-challenge-c\r
\`\`\`\r
\r
Following the established pattern, accessing the challenge image reveals a T9 keypad cipher:\r
\r
![Challenge 8 Preview](./assets/chall8.png)\r
\r
The cipher text is: \`3 777 2 4 (0) 66 - 66 (3) 7777 8\`\r
\r
Using T9 keypad decoding (where numbers correspond to multiple key presses):\r
- 3 = d\r
- 777 = r  \r
- 2 = a\r
- 4 = g\r
- (0) = 0 (unchanged)\r
- 66 = n\r
- \\- = - (unchanged)\r
- 66 = n\r
- (3) = 3 (unchanged)\r
- 7777 = s\r
- 8 = t\r
\r
The flag is: **drag0n-n3st**\r
\r
![Champion Badge](./assets/champion.png)\r
\r
This completes the SinCon 2025 Dragon Badge CTF series - all 8 LEDs on the dragon badge are now successfully lit!`,o={title:"The SinCon 2025 Dragon Badge",description:"Writeups for SinCon Dragon Badge Challenges",publishDate:new Date(17480448e5),heroImage:{src:new Proxy({src:"/_astro/badge.BDPx4pJs.png",width:839,height:548,format:"png",fsPath:"C:/Users/gr1d/Documents/gr1d-init/gr1d-init.github.io/src/content/post/sincondragonbadge/assets/badge.png"},{get(e,n,r){return n==="clone"?structuredClone(e):n==="fsPath"?"C:/Users/gr1d/Documents/gr1d-init/gr1d-init.github.io/src/content/post/sincondragonbadge/assets/badge.png":(e[n]!==void 0&&globalThis.astroAsset&&globalThis.astroAsset?.referencedImages.add("C:/Users/gr1d/Documents/gr1d-init/gr1d-init.github.io/src/content/post/sincondragonbadge/assets/badge.png"),e[n])}}),color:"#ffe5d4"},draft:!1,tags:["conference","sincon 2025","hardware"],language:"English"},g={type:"content",filePath:"C:/Users/gr1d/Documents/gr1d-init/gr1d-init.github.io/src/content/post/sincondragonbadge/index.md",rawData:void 0};export{g as _internal,i as body,s as collection,o as data,a as id,t as slug};
