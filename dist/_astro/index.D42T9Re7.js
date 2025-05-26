const t="sinconhardwarekampung/index.md",a="post",o="sinconhardwarekampung",i=`\r
![](./assets/header.jpg)\r
I participated in the SinCon 2025 Hardware Hacking Kampung CTF and tackled challenges across multiple hardware security categories. Here are my writeups for the challenges I solved:\r
\r
## Challenge Solutions\r
\r
### 📡 NFC/RFID Exploitation\r
\r
#### RFID-1\r
\r
**Challenge Description:**\r
NFC card cloning challenge that teaches the difference between NFC and RFID technologies. The task involves reading data from one NFC card and writing it to another card.\r
\r
**Solution:**\r
This was straightforward to solve using the TagWriter mobile app. The process involved:\r
1. Reading the original NFC card using a smartphone\r
2. Writing the cloned data to a blank NFC card\r
3. Key learning: Mobile phones can handle NFC but not RFID frequencies\r
\r
---\r
\r
### ⚡ Side Channel & Fault Injection\r
\r
#### Fault Injection\r
\r
**Challenge Description:**\r
Electromagnetic Fault Injection challenge using the ChipSHOUTER (CW520) platform. This tool injects electromagnetic pulses to disrupt microcontroller operations and potentially bypass security mechanisms.\r
\r
**Solution:**\r
We used the ChipSHOUTER to perform privilege escalation on a target microcontroller. The process involved:\r
\r
![Fault Injection Setup](./assets/usingfault.jpg)\r
\r
1. **Understanding the mechanism**: Microcontrollers operate with specific voltage thresholds for logic states (0s and 1s)\r
2. **Applying electromagnetic interference**: The injector sends targeted EM pulses to disrupt normal operation\r
3. **Finding the sweet spot**: Through trial and error, we located the precise timing and position where the fault injection successfully altered the execution flow\r
4. **Avoiding false states**: We had to be careful not to crash the system while searching for the correct fault conditions\r
\r
The challenge was completed when we successfully triggered the fault injection at the right moment to achieve the desired privilege escalation state.\r
\r
**Flag:** \`flag{its_easy_to_fault}\`\r
\r
---\r
\r
### 🛂 Firmware Extraction & Analysis\r
\r
#### Reversing Master\r
\r
**Challenge Description:**\r
Smart lock firmware reverse engineering challenge that requires privilege escalation through multiple authentication layers. The goal is to analyze a binary to understand its authentication mechanisms and find ways to access hidden debug functionality.\r
\r
**Solution:**\r
This challenge involved reverse engineering a smart lock firmware binary to uncover hidden debug functionality and escalate privileges. The key was understanding the authentication flow and memory structure to find the master code and debug commands.\r
\r
![Privilege Analysis](./assets/privilleges.png)\r
![Privilege Escalation](./assets/crackprivilleges.png)\r
\r
1. **Performed initial file analysis** to understand the binary format:\r
   - Used \`file\` command to identify binary type:  \r
   ![File Analysis](./assets/filetype.png)\r
   - Identified as MIPS architecture requiring emulation\r
   - Set up \`qemu-mipsel-static\` plugin to emulate the MIPS executable on x86 system\r
\r
2. **Analyzed the \`main\` function** to understand program flow:\r
![](./assets/mainfunc.png)  \r
   - Prompts for username and password with \`fgets()\`2. **Analyzed the \`main\` function** to understand program flow:\r
   - Prompts for username and password with \`fgets()\`\r
   - Calls \`authenticate_user()\` with credentials\r
   - If authentication succeeds (privilege > 0), enters \`main_menu()\`\r
\r
3. **Examined \`authenticate_user\` function** to understand credential validation:\r
![](./assets/authenticate_user.png)\r
   - Checks credentials against in-memory \`users\` array with \`strcmp()\`\r
   - Each user record is 68 bytes: 32-byte username + 32-byte password + 4-byte privilege\r
   ![](./assets/credentialsInMemory.png)  \r
   - Found valid credentials in the users array:\r
     - \`guest\` : \`guest123\` → privilege level 1\r
     - \`user\` : \`password\` → privilege level 2  \r
     - \`tech\` : \`support\` → privilege level 3\r
\r
4. **Analyzed \`main_menu\` function** for privilege escalation:\r
![](./assets/mainMenu.png)  \r
   - Normal menu provides basic lock operations (Lock/Unlock/View Log/System Settings)\r
   - Contains hidden master code check: \`check_master_code(input)\`\r
   - If master code is correct, elevates privilege to level 99\r
   - At privilege 99, commands starting with \`!\` are passed to \`handle_debug_command()\`\r
\r
5. **Reverse engineered \`check_master_code\` function**:\r
![](./assets/checkMasterCode.png)  \r
   - XOR-decrypts two 32-bit values with key \`171\`(\`0xAB\`)\r
   ![](./assets/globalmastercode.png)  \r
   - \`master_code: 0x9C98989A\` and \`dword_4A0028: 0x9BD39FC3\`\r
   - Decrypted master code: \`1337h4x0\`\r
\r
6. **Discovered \`handle_debug_command\` functionality**:\r
![](./assets/handleDebugCommand.png)  \r
![](./assets/debugcmd.png)  \r
   - Two encrypted debug commands: \`!debug\` and \`!dump\`\r
   - \`!dump\` displays memory contents via \`dump_memory()\`\r
   - \`!debug\` calls \`secret_debug_mode()\` revealing firmware info and the flag\r
\r
7. **Executed the exploit**:\r
   - Logged in with \`tech:support\` to get privilege level 3\r
   - Entered master code \`1337h4x0\` to escalate to privilege 99\r
   - Used \`!debug\` command to retrieve the flag\r
\r
**Flag:** \`flag{r3v3rs3_3ng1n33r1ng_m4st3r}\`\r
\r
---\r
\r
### 🔌 Hardware Protocol Analysis\r
\r
These challenges utilize the CompatrIoT Board to explore various hardware communication protocols and analysis techniques.\r
\r
#### UART1\r
**Category:** Hardware Protocol Analysis\r
\r
**Challenge Description:**\r
UART (Universal Asynchronous Receiver-Transmitter) communication challenge using the CompatrIoT board. This challenge introduces serial communication protocols and teaches how to establish communication between microcontrollers and host systems.\r
\r
**Solution:**\r
This challenge provided an excellent introduction to UART communication and serial terminal tools. The setup involved establishing two separate communication channels with the CompatrIoT board.\r
\r
![Wire Connection Setup](./assets/protocolone/wireconnection.jpg)\r
\r
1. **Initial board connection and challenge access**:\r
   - Connected the CompatrIoT board to laptop via USB-C to USB cable\r
   - This established the primary communication channel for challenge navigation\r
   \r
   ![Initial Connection](./assets/protocolone/Connection1compatriot.png)\r
   \r
   - Accessed the challenge selection interface on the board\r
   \r
   ![Challenge Menu](./assets/protocolone/question.png)\r
   \r
   - Selected UART1 challenge by pressing \`Enter\` to activate it\r
   \r
   ![Challenge Activated](./assets/protocolone/session1.png)\r
\r
2. **UART communication setup**:\r
   - **Why FTDI is required**: The FTDI (Future Technology Devices International) chip serves as a USB-to-serial converter. While the CompatrIoT board's USB-C connection provides power and basic communication, the UART challenge requires direct access to the board's TX (transmit) and RX (receive) pins. The FTDI adapter converts these 3.3V/5V serial signals to USB, allowing the laptop to communicate with the UART interface.\r
   \r
   - Connected UART pins with crossover wiring:\r
     - Board TX → FTDI RX  \r
     - Board RX → FTDI TX\r
     - This crossover connection ensures proper bidirectional communication\r
   \r
   ![UART Connection](./assets/protocolone/connection2.png)\r
\r
3. **Serial communication with PuTTY**:\r
   - Used PuTTY terminal emulator for serial communication\r
   - Configuration settings:\r
     - Connection type: Serial\r
     - Baud rate: 9600 (standard default for UART communication)\r
     - COM port: COM7 (as detected in Windows Device Manager)\r
   \r
   ![Challenge Interface](./assets/protocolone/sessionCOM7.png)\r
\r
4. **Challenge completion**:\r
   - The challenge presented a simple riddle\r
   - Answer: \`keyboard\`\r
   - Successfully retrieved the flag upon correct answer\r
\r
**Flag:** \`compatrIoT{B4s1c_UART_C0mmun1cat10n}\`\r
\r
---\r
\r
#### UART2\r
\r
**Challenge Description:**\r
UART communication challenge requiring baud rate discovery and mathematical problem solving.\r
\r
**Solution:**\r
This challenge required finding the correct baud rate to establish communication, then solving a numerical puzzle.\r
\r
![Challenge Interface](./assets/protocoltwo/question.png)\r
\r
1. **Baud rate discovery**:\r
   - Tested standard baud rates systematically\r
   \r
   ![Standard Baud Rates](./assets/protocoltwo/standardbaudrates.png)\r
   \r
   - Found correct baud rate: **57600**\r
   \r
   ![Correct Baud Rate](./assets/protocoltwo/correctbaudrate.png)\r
\r
2. **Mathematical puzzle**:\r
   - Challenge presented a numerical calculation\r
   \r
   ![Challenge Prompt](./assets/protocoltwo/correctprompt.png)\r
   \r
   - Answer: \`194\`\r
\r
**Flag:** \`compatrIoT{U4RT_Bl4ckH4t_4s14}\`\r
\r
\r
#### Logic Analyser 1\r
\r
**Challenge Description:**\r
Logic analyzer challenge requiring custom baud rate determination using signal analysis.\r
\r
**Solution:**\r
Used Saleae Logic Analyzer to determine non-standard baud rate through timing analysis.\r
\r
![Challenge Interface](./assets/protocolthree/question.png)\r
\r
1. **Signal capture**:\r
   - Connected TX and GND to logic analyzer\r
   \r
   ![Physical Connection](./assets/protocolthree/logicanalyser.jpg)\r
   \r
   - Captured UART transmission in Saleae Logic software\r
   \r
   ![Timing Analysis](./assets/protocolthree/determinebaudrate.png)\r
\r
2. **Baud rate calculation**:\r
   - Used fastest 2-bit method: measure time between opposite bits (1→0)\r
   - Applied formula: Baud rate = 1 / bit time\r
   - Result: **4000 baud**\r
   \r
   ![Signal Measurement](./assets/protocolthree/determinebaudratefreqtimes2.png)\r
   \r
   *Reference: [Saleae Logic Documentation](https://support.saleae.com/protocol-analyzers/analyzer-user-guides/using-async-serial#determining-the-proper-bit-rate-baud-rate)*\r
\r
3. **Challenge completion**:\r
   - Connected with PuTTY using baud rate 4000\r
   \r
   ![PuTTY Connection](./assets/protocolthree/correctbaudrate.png)\r
   \r
   - Flag provided immediately upon connection\r
   \r
   ![Flag Retrieved](./assets/protocolthree/baudratefoundflag.png)\r
\r
**Flag:** \`compatrIoT{sniffing_is_fun}\`\r
\r
#### Logic Analyser 2\r
\r
**Challenge Description:**\r
I2C protocol analysis challenge requiring password extraction through EEPROM signal monitoring using logic analyzer.\r
\r
**Solution:**\r
Used Saleae Logic Analyzer to monitor I2C communication and extract password from EEPROM reads during authentication.\r
\r
![Challenge Interface](./assets/protocolfour/question.png)\r
\r
1. **I2C connection setup**:\r
   - Connected SDA, SCL, and GND pins to logic analyzer based on provided schematic\r
   \r
   ![Schematic Documentation](./assets/protocolfour/documentation.jpg)\r
\r
2. **Signal monitoring**:\r
   - Accessed challenge login page requiring password input\r
   - Entered random input to trigger authentication process\r
   \r
   ![Challenge Behavior](./assets/protocolfour/behaviour.png)\r
   \r
   - Observed I2C signal activity in Saleae Logic during authentication\r
   \r
   ![I2C Signal Analysis](./assets/protocolfour/logicssdascl.png)\r
\r
3. **Password extraction**:\r
   - Analyzed I2C communication to extract comparison string\r
   - Identified password: \`BHA2025!\`\r
   - Successfully authenticated with extracted password\r
   \r
   ![Flag Retrieved](./assets/protocolfour/finalflag.png)\r
\r
**Flag:** \`CTF{EEPROM_Sn1ff_Ch4llenge}\`\r
\r
---\r
\r
## Challenges Not Attempted\r
\r
### 📶 BLE (Bluetooth Low Energy)\r
\r
#### BLE-Device 1\r
\r
**Challenge Description:**\r
Introduction to Bluetooth Low Energy (BLE) hacking using mobile analysis tools.\r
\r
**Solution:**\r
I didn't fully attempt this challenge. Started exploring with nRF Connect mobile app but didn't complete the challenge requirements.\r
\r
#### BLE-Device 2\r
\r
**Challenge Description:**\r
Advanced BLE exploitation challenge requiring programmatic GATT characteristic enumeration and manipulation using Python scripting.\r
\r
**Solution:**\r
I didn't complete this challenge. The author provided a Python script template using the \`bleak\` library for BLE communication, but I didn't successfully implement the solution to extract the flag from the target device.\r
\r
---\r
\r
### 🔧 Soldering & PCB Reversing\r
\r
#### Solder Says\r
\r
**Challenge Description:**\r
Basic soldering challenge on the SinCon badge (SGD 40). Requires soldering through-hole LEDs.\r
\r
**Solution:**\r
I didn't attempt this challenge as it required purchasing the SGD 40 badge. The challenge would involve soldering the provided LEDs into the designated through-hole positions on the badge.\r
\r
---\r
\r
### 📡 RFID\r
\r
#### RFID-2\r
\r
**Challenge Description:**\r
Advanced RFID challenge requiring specialized hardware to read RFID card information using tools like Proxmark3.\r
\r
**Solution:**\r
I didn't attempt this challenge due to time constraints. The solution would involve using an RFID card reader and working with Proxmark3 to extract information from the RFID card.\r
\r
---\r
\r
### 📻 Wireless Protocol Exploitation\r
\r
#### BPSK Challenge\r
\r
**Challenge Description:**\r
Wireless protocol exploitation challenge involving Binary Phase Shift Keying (BPSK) modulated signals. Requires analyzing and exploiting wireless communication protocols to extract hidden information or gain unauthorized access.\r
\r
**Solution:**\r
I didn't attempt this challenge due to unfamiliarity with wireless protocol exploitation and BPSK demodulation techniques.\r
\r
#### Pager Challenge\r
\r
**Challenge Description:**\r
Wireless protocol exploitation challenge focusing on pager communication systems. Involves intercepting, analyzing, and potentially manipulating pager protocol communications.\r
\r
**Solution:**\r
I didn't attempt this challenge due to unfamiliarity with pager protocol exploitation techniques.`,s={title:"The SinCon 2025 Hardware Hacking Kampung",description:"Writeups for SinCon 2025 Hardware Hacking Kampung CTF Challenges",publishDate:new Date(17480448e5),heroImage:{src:new Proxy({src:"/_astro/hardwarebanner.F2ciWu6y.jpg",width:1080,height:1350,format:"jpg",fsPath:"C:/Users/gr1d/Documents/gr1d-init/gr1d-init.github.io/src/content/post/sinconhardwarekampung/assets/hardwarebanner.jpg"},{get(n,e,r){return e==="clone"?structuredClone(n):e==="fsPath"?"C:/Users/gr1d/Documents/gr1d-init/gr1d-init.github.io/src/content/post/sinconhardwarekampung/assets/hardwarebanner.jpg":(n[e]!==void 0&&globalThis.astroAsset&&globalThis.astroAsset?.referencedImages.add("C:/Users/gr1d/Documents/gr1d-init/gr1d-init.github.io/src/content/post/sinconhardwarekampung/assets/hardwarebanner.jpg"),n[e])}}),color:"#ffe5d4"},draft:!1,tags:["conference","sincon 2025","hardware"],language:"English"},l={type:"content",filePath:"C:/Users/gr1d/Documents/gr1d-init/gr1d-init.github.io/src/content/post/sinconhardwarekampung/index.md",rawData:void 0};export{l as _internal,i as body,a as collection,s as data,t as id,o as slug};
