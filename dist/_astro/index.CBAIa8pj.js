const t="sinconrfidkampung/index.md",a="post",s="sinconrfidkampung",o=`\r
\r
The RFID Research Kampung at SINCON 2025 was a hands-on workshop where we could explore various RFID security tools and learn about real-world attack scenarios. Here's what went down during the session.\r
\r
![RFID Research Kampung Banner](./assets/banner.jpg)  \r
*The RFID Research Kampung setup at SINCON 2025*\r
\r
## RFID Tools Available\r
\r
The kampung featured several professional RFID security tools:\r
\r
- **Proxmark3** — A powerful RFID tool for reading, cloning, and emulating access cards\r
- **Flipper Zero** — A multi-functional pentesting device for NFC, RFID, and wireless systems\r
- **ChameleonUltra** — An advanced RFID card emulation and cloning device\r
- **RFID Detectors** — Including the Proxgrind signal sniffer for real-time RFID signal analysis\r
\r
## RFID Card Cloning Demonstration\r
\r
### Basic RFID Attack Workflow\r
\r
The first demonstration covered a straightforward RFID attack process:\r
\r
1. **Reading the UID**: Using Proxmark3 CLI to extract the card's UID\r
2. **Cloning with Flipper Zero**: Copying the UID and configuring the Flipper Zero to emulate the original card\r
3. **Testing**: Attempting to unlock an RFID-protected lock with the emulated card\r
\r
![UID Reading Process](./assets/uid.jpg)  \r
*Reading RFID card UID using Proxmark3*\r
\r
![Successful Unlock](./assets/unlock.gif)  \r
*Successfully unlocking RFID lock with Flipper Zero as cloned card medium*\r
\r
### Touch 'n Go Card Analysis\r
\r
We also observed participants working with Touch 'n Go RFID cards (SMART Tag MaxTag), demonstrating how Proxmark3 can analyze and potentially modify the stored balance on these contactless payment cards.\r
\r
![Touch 'n Go Card](./assets/tng.jpg)  \r
*Touch 'n Go RFID card analysis session*\r
\r
## BadMouse Demonstration\r
\r
### Hardware Modification Process\r
\r
The BadMouse demonstration showed how everyday USB devices can be weaponized. The process involved:\r
\r
1. **Installing USB Ninja Module**: The module acts as a wireless receiver inside the mouse\r
2. **Wireless Control Setup**: A separate transmitter device enables remote control of the compromised mouse\r
\r
![USB Ninja Receiver](./assets/receiver.jpg)  \r
*USB Ninja module installed as receiver in the mouse*\r
\r
![Wireless Transmitter](./assets/transmitter.jpg)  \r
*Wireless transmitter device for remote control*\r
\r
### Attack Execution Methods\r
\r
The attack can be executed in two different modes:\r
\r
- **Live Attack Mode**: Real-time command execution\r
- **Scripted Attack Mode**: Pre-programmed payload execution for more complex attacks\r
\r
![Attacker Interface](./assets/attacker.jpg)  \r
*Attacker interface showing command queuing and execution options*\r
\r
The demonstration showed how an attacker can remotely execute commands on a victim's machine through what appears to be an ordinary mouse.\r
\r
![Victim Machine](./assets/client.jpg)  \r
*Victim machine being controlled through the BadMouse attack*\r
\r
## Key Observations\r
\r
- **RFID systems are vulnerable** — Simple UID-based authentication can be easily cloned\r
- **Physical access = game over** — Direct device access enables sophisticated attacks\r
- **Trust your hardware sources** — Common USB devices can be weaponized with minimal effort`,i={title:"The SinCon RFID Research Kampung",description:"Writeups for SinCon RFID Research Kampung",publishDate:new Date(17482176e5),heroImage:{src:new Proxy({src:"/_astro/tag.BkQ6lB73.jpg",width:480,height:360,format:"jpg",fsPath:"C:/Users/gr1d/Documents/gr1d-init/gr1d-init.github.io/src/content/post/sinconrfidkampung/assets/tag.jpg"},{get(n,e,r){return e==="clone"?structuredClone(n):e==="fsPath"?"C:/Users/gr1d/Documents/gr1d-init/gr1d-init.github.io/src/content/post/sinconrfidkampung/assets/tag.jpg":(n[e]!==void 0&&globalThis.astroAsset&&globalThis.astroAsset?.referencedImages.add("C:/Users/gr1d/Documents/gr1d-init/gr1d-init.github.io/src/content/post/sinconrfidkampung/assets/tag.jpg"),n[e])}}),color:"#ffe5d4"},draft:!1,tags:["conference","sincon 2025","hardware"],language:"English"},c={type:"content",filePath:"C:/Users/gr1d/Documents/gr1d-init/gr1d-init.github.io/src/content/post/sinconrfidkampung/index.md",rawData:void 0};export{c as _internal,o as body,a as collection,i as data,t as id,s as slug};
