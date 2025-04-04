const i="pingctf2025/index.md",s="post",r="pingctf2025",o=`\r
## Misc\r
\r
## ones-and-zeroes  \r
\r
![Question](./assets/question.png)\r
---\r
### Goals\r
1. Download PulseView to decode the I2C signal\r
2. Identify the SDA and SCL, decode the signal, focus on DATA WRITE hexdump.  \r
![hexdump](./assets/hexdump.png)\r
3. Research on connection between I2C port, how it communicate with LCD pane.\r
4. From LCD pane datasheet, decode the message.\r
https://cdn.sparkfun.com/assets/9/5/f/7/b/HD44780.pdf\r
---\r
\r
### Solution:\r
1. Identify the pinouts and we realise that the focus is only on I2C outputs SDA and SCL, at the end passing to HD44780 LCD Pane, so we don't bother anything on breadboard.\r
![](./assets/setup1.png)   \r
![](./assets/ref.webp)  \r
\r
2. Since we are the LED controller is PCF8574, we are going to operate HD44780 on 4-bit data mode.  \r
To retrieve a single ASCII Hex character, it work on High nibble and Low nibble.  \r
As in hexdump instruction, it exist like this:  \r
         - High nibble, E(Enable)= 1  \r
         - High nibble, E(Enable) = 0  \r
         - Low nibble, E(Enable) = 1   \r
         - Low nibble, E(Enable) = 0  \r
\r
3. Dissect the High Nibble and Low Nibble binaries, combine them into single series, decode it into ascii characters.  \r
\r
4. Solution overview  \r
![Overview](./assets/overview.jpg)  \r
\r
\r
### Final Result\r
**Flag:** \`pingCTF{Silicon_Is_Talking_To_Me}\``,a={title:"pingCTF 2025",description:"Writeups for pingCTF 2025",publishDate:new Date(17427744e5),heroImage:{src:new Proxy({src:"/_astro/pingCTFbanner.1jdtJ9nV.png",width:6463,height:1563,format:"png",fsPath:"C:/Users/gr1d/Documents/gr1d-init/gr1d-init.github.io/src/content/post/pingctf2025/assets/pingCTFbanner.png"},{get(e,n,t){return n==="clone"?structuredClone(e):n==="fsPath"?"C:/Users/gr1d/Documents/gr1d-init/gr1d-init.github.io/src/content/post/pingctf2025/assets/pingCTFbanner.png":(e[n]!==void 0&&globalThis.astroAsset&&globalThis.astroAsset?.referencedImages.add("C:/Users/gr1d/Documents/gr1d-init/gr1d-init.github.io/src/content/post/pingctf2025/assets/pingCTFbanner.png"),e[n])}}),color:"#303030"},draft:!1,tags:["ctf","misc"],language:"English"},c={type:"content",filePath:"C:/Users/gr1d/Documents/gr1d-init/gr1d-init.github.io/src/content/post/pingctf2025/index.md",rawData:void 0};export{c as _internal,o as body,s as collection,a as data,i as id,r as slug};
