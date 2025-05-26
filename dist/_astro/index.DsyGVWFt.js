import{s as g,g as l}from"./_astro_assets.CNHm1UWu.js";import{c as p,r as h,m,u}from"./hoisted.CGQOMQz9.js";import"./astro/assets-service.BySn2Lc7.js";const x={src:"/_astro/banner.DiBgdpU_.jpg",width:2469,height:4488,format:"jpg",orientation:1},f={src:"/_astro/uid.BybD2m9A.jpg",width:3024,height:4032,format:"jpg",orientation:1},w={src:"/_astro/unlock.DDaxbO88.gif",width:320,height:180,format:"gif"},_={src:"/_astro/tng.D77zMwgS.jpg",width:4032,height:3024,format:"jpg",orientation:1},R={src:"/_astro/receiver.BODWrdUg.jpg",width:3024,height:4032,format:"jpg",orientation:1},I={src:"/_astro/transmitter.Bc98HVu9.jpg",width:3024,height:4032,format:"jpg",orientation:1},k={src:"/_astro/attacker.CDhFr02W.jpg",width:4032,height:3024,format:"jpg",orientation:1},A={src:"/_astro/client.Bh3Ap-aW.jpg",width:4032,height:3024,format:"jpg",orientation:1},D=async function(i){const r={};{const a=new RegExp('__ASTRO_IMAGE_="([^"]*\\./assets/banner\\.jpg[^"]*)"',"g");let t,e=0;for(;(t=a.exec(i))!==null;){const n="./assets/banner.jpg_"+e,s=JSON.parse(t[1].replace(/&#x22;/g,'"')),{src:c,...o}=s;r[n]=await l({src:x,...o}),e++}}{const a=new RegExp('__ASTRO_IMAGE_="([^"]*\\./assets/uid\\.jpg[^"]*)"',"g");let t,e=0;for(;(t=a.exec(i))!==null;){const n="./assets/uid.jpg_"+e,s=JSON.parse(t[1].replace(/&#x22;/g,'"')),{src:c,...o}=s;r[n]=await l({src:f,...o}),e++}}{const a=new RegExp('__ASTRO_IMAGE_="([^"]*\\./assets/unlock\\.gif[^"]*)"',"g");let t,e=0;for(;(t=a.exec(i))!==null;){const n="./assets/unlock.gif_"+e,s=JSON.parse(t[1].replace(/&#x22;/g,'"')),{src:c,...o}=s;r[n]=await l({src:w,...o}),e++}}{const a=new RegExp('__ASTRO_IMAGE_="([^"]*\\./assets/tng\\.jpg[^"]*)"',"g");let t,e=0;for(;(t=a.exec(i))!==null;){const n="./assets/tng.jpg_"+e,s=JSON.parse(t[1].replace(/&#x22;/g,'"')),{src:c,...o}=s;r[n]=await l({src:_,...o}),e++}}{const a=new RegExp('__ASTRO_IMAGE_="([^"]*\\./assets/receiver\\.jpg[^"]*)"',"g");let t,e=0;for(;(t=a.exec(i))!==null;){const n="./assets/receiver.jpg_"+e,s=JSON.parse(t[1].replace(/&#x22;/g,'"')),{src:c,...o}=s;r[n]=await l({src:R,...o}),e++}}{const a=new RegExp('__ASTRO_IMAGE_="([^"]*\\./assets/transmitter\\.jpg[^"]*)"',"g");let t,e=0;for(;(t=a.exec(i))!==null;){const n="./assets/transmitter.jpg_"+e,s=JSON.parse(t[1].replace(/&#x22;/g,'"')),{src:c,...o}=s;r[n]=await l({src:I,...o}),e++}}{const a=new RegExp('__ASTRO_IMAGE_="([^"]*\\./assets/attacker\\.jpg[^"]*)"',"g");let t,e=0;for(;(t=a.exec(i))!==null;){const n="./assets/attacker.jpg_"+e,s=JSON.parse(t[1].replace(/&#x22;/g,'"')),{src:c,...o}=s;r[n]=await l({src:k,...o}),e++}}{const a=new RegExp('__ASTRO_IMAGE_="([^"]*\\./assets/client\\.jpg[^"]*)"',"g");let t,e=0;for(;(t=a.exec(i))!==null;){const n="./assets/client.jpg_"+e,s=JSON.parse(t[1].replace(/&#x22;/g,'"')),{src:c,...o}=s;r[n]=await l({src:A,...o}),e++}}return r};async function b(i){return D(i).then(r=>i.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(a,t)=>{const e=JSON.parse(t.replace(/&#x22;/g,'"')),n=e.src+"_"+e.index;r[n].srcSet&&r[n].srcSet.values.length>0&&(r[n].attributes.srcset=r[n].srcSet.attribute);const{index:s,...c}=r[n].attributes;return g({src:r[n].src,...c})}))}const d=await b(`<p>The RFID Research Kampung at SINCON 2025 was a hands-on workshop where we could explore various RFID security tools and learn about real-world attack scenarios. Here’s what went down during the session.</p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./assets/banner.jpg&#x22;,&#x22;alt&#x22;:&#x22;RFID Research Kampung Banner&#x22;,&#x22;index&#x22;:0}"><br>
<em>The RFID Research Kampung setup at SINCON 2025</em></p>
<h2 id="rfid-tools-available">RFID Tools Available<a class="anchor" href="#rfid-tools-available">#</a></h2>
<p>The kampung featured several professional RFID security tools:</p>
<ul>
<li><strong>Proxmark3</strong> — A powerful RFID tool for reading, cloning, and emulating access cards</li>
<li><strong>Flipper Zero</strong> — A multi-functional pentesting device for NFC, RFID, and wireless systems</li>
<li><strong>ChameleonUltra</strong> — An advanced RFID card emulation and cloning device</li>
<li><strong>RFID Detectors</strong> — Including the Proxgrind signal sniffer for real-time RFID signal analysis</li>
</ul>
<h2 id="rfid-card-cloning-demonstration">RFID Card Cloning Demonstration<a class="anchor" href="#rfid-card-cloning-demonstration">#</a></h2>
<h3 id="basic-rfid-attack-workflow">Basic RFID Attack Workflow<a class="anchor" href="#basic-rfid-attack-workflow">#</a></h3>
<p>The first demonstration covered a straightforward RFID attack process:</p>
<ol>
<li><strong>Reading the UID</strong>: Using Proxmark3 CLI to extract the card’s UID</li>
<li><strong>Cloning with Flipper Zero</strong>: Copying the UID and configuring the Flipper Zero to emulate the original card</li>
<li><strong>Testing</strong>: Attempting to unlock an RFID-protected lock with the emulated card</li>
</ol>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./assets/uid.jpg&#x22;,&#x22;alt&#x22;:&#x22;UID Reading Process&#x22;,&#x22;index&#x22;:0}"><br>
<em>Reading RFID card UID using Proxmark3</em></p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./assets/unlock.gif&#x22;,&#x22;alt&#x22;:&#x22;Successful Unlock&#x22;,&#x22;index&#x22;:0}"><br>
<em>Successfully unlocking RFID lock with Flipper Zero as cloned card medium</em></p>
<h3 id="touch-n-go-card-analysis">Touch ‘n Go Card Analysis<a class="anchor" href="#touch-n-go-card-analysis">#</a></h3>
<p>We also observed participants working with Touch ‘n Go RFID cards (SMART Tag MaxTag), demonstrating how Proxmark3 can analyze and potentially modify the stored balance on these contactless payment cards.</p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./assets/tng.jpg&#x22;,&#x22;alt&#x22;:&#x22;Touch &#x27;n Go Card&#x22;,&#x22;index&#x22;:0}"><br>
<em>Touch ‘n Go RFID card analysis session</em></p>
<h2 id="badmouse-demonstration">BadMouse Demonstration<a class="anchor" href="#badmouse-demonstration">#</a></h2>
<h3 id="hardware-modification-process">Hardware Modification Process<a class="anchor" href="#hardware-modification-process">#</a></h3>
<p>The BadMouse demonstration showed how everyday USB devices can be weaponized. The process involved:</p>
<ol>
<li><strong>Installing USB Ninja Module</strong>: The module acts as a wireless receiver inside the mouse</li>
<li><strong>Wireless Control Setup</strong>: A separate transmitter device enables remote control of the compromised mouse</li>
</ol>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./assets/receiver.jpg&#x22;,&#x22;alt&#x22;:&#x22;USB Ninja Receiver&#x22;,&#x22;index&#x22;:0}"><br>
<em>USB Ninja module installed as receiver in the mouse</em></p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./assets/transmitter.jpg&#x22;,&#x22;alt&#x22;:&#x22;Wireless Transmitter&#x22;,&#x22;index&#x22;:0}"><br>
<em>Wireless transmitter device for remote control</em></p>
<h3 id="attack-execution-methods">Attack Execution Methods<a class="anchor" href="#attack-execution-methods">#</a></h3>
<p>The attack can be executed in two different modes:</p>
<ul>
<li><strong>Live Attack Mode</strong>: Real-time command execution</li>
<li><strong>Scripted Attack Mode</strong>: Pre-programmed payload execution for more complex attacks</li>
</ul>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./assets/attacker.jpg&#x22;,&#x22;alt&#x22;:&#x22;Attacker Interface&#x22;,&#x22;index&#x22;:0}"><br>
<em>Attacker interface showing command queuing and execution options</em></p>
<p>The demonstration showed how an attacker can remotely execute commands on a victim’s machine through what appears to be an ordinary mouse.</p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./assets/client.jpg&#x22;,&#x22;alt&#x22;:&#x22;Victim Machine&#x22;,&#x22;index&#x22;:0}"><br>
<em>Victim machine being controlled through the BadMouse attack</em></p>
<h2 id="key-observations">Key Observations<a class="anchor" href="#key-observations">#</a></h2>
<ul>
<li><strong>RFID systems are vulnerable</strong> — Simple UID-based authentication can be easily cloned</li>
<li><strong>Physical access = game over</strong> — Direct device access enables sophisticated attacks</li>
<li><strong>Trust your hardware sources</strong> — Common USB devices can be weaponized with minimal effort</li>
</ul>`),y={title:"The SinCon RFID Research Kampung",publishDate:"2025-05-26T00:00:00.000Z",description:"Writeups for SinCon RFID Research Kampung",tags:["Conference","SINCON 2025","Hardware"],heroImage:{src:"./assets/tag.jpg",color:"#ffe5d4"},language:"English",minutesRead:"2 min read"},T="C:/Users/gr1d/Documents/gr1d-init/gr1d-init.github.io/src/content/post/sinconrfidkampung/index.md",v=void 0;function C(){return`\r
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
- **Trust your hardware sources** — Common USB devices can be weaponized with minimal effort`}function M(){return d}function O(){return[{depth:2,slug:"rfid-tools-available",text:"RFID Tools Available"},{depth:2,slug:"rfid-card-cloning-demonstration",text:"RFID Card Cloning Demonstration"},{depth:3,slug:"basic-rfid-attack-workflow",text:"Basic RFID Attack Workflow"},{depth:3,slug:"touch-n-go-card-analysis",text:"Touch ‘n Go Card Analysis"},{depth:2,slug:"badmouse-demonstration",text:"BadMouse Demonstration"},{depth:3,slug:"hardware-modification-process",text:"Hardware Modification Process"},{depth:3,slug:"attack-execution-methods",text:"Attack Execution Methods"},{depth:2,slug:"key-observations",text:"Key Observations"}]}const E=p((i,r,a)=>{const{layout:t,...e}=y;return e.file=T,e.url=v,h`${m()}${u(d)}`});export{E as Content,M as compiledContent,E as default,T as file,y as frontmatter,O as getHeadings,C as rawContent,v as url};
