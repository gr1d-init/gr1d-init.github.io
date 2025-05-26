import{s as h,g as l}from"./_astro_assets.CNHm1UWu.js";import{c as g,r as d,m as u,u as x}from"./hoisted.CGQOMQz9.js";import"./astro/assets-service.BySn2Lc7.js";const b={src:"/_astro/question.CRaq_wyo.png",width:413,height:960,format:"png"},_={src:"/_astro/hexdump.JjLducdK.png",width:1919,height:1149,format:"png"},m={src:"/_astro/setup1.CB43ILVn.png",width:1053,height:498,format:"png"},w={src:"/_astro/ref.BWfy0Kvw.webp",width:880,height:880,format:"webp"},f={src:"/_astro/overview.DLUu8Wwu.jpg",width:2738,height:2687,format:"jpg"},A=async function(a){const s={};{const r=new RegExp('__ASTRO_IMAGE_="([^"]*\\./assets/question\\.png[^"]*)"',"g");let n,e=0;for(;(n=r.exec(a))!==null;){const t="./assets/question.png_"+e,o=JSON.parse(n[1].replace(/&#x22;/g,'"')),{src:c,...i}=o;s[t]=await l({src:b,...i}),e++}}{const r=new RegExp('__ASTRO_IMAGE_="([^"]*\\./assets/hexdump\\.png[^"]*)"',"g");let n,e=0;for(;(n=r.exec(a))!==null;){const t="./assets/hexdump.png_"+e,o=JSON.parse(n[1].replace(/&#x22;/g,'"')),{src:c,...i}=o;s[t]=await l({src:_,...i}),e++}}{const r=new RegExp('__ASTRO_IMAGE_="([^"]*\\./assets/setup1\\.png[^"]*)"',"g");let n,e=0;for(;(n=r.exec(a))!==null;){const t="./assets/setup1.png_"+e,o=JSON.parse(n[1].replace(/&#x22;/g,'"')),{src:c,...i}=o;s[t]=await l({src:m,...i}),e++}}{const r=new RegExp('__ASTRO_IMAGE_="([^"]*\\./assets/ref\\.webp[^"]*)"',"g");let n,e=0;for(;(n=r.exec(a))!==null;){const t="./assets/ref.webp_"+e,o=JSON.parse(n[1].replace(/&#x22;/g,'"')),{src:c,...i}=o;s[t]=await l({src:w,...i}),e++}}{const r=new RegExp('__ASTRO_IMAGE_="([^"]*\\./assets/overview\\.jpg[^"]*)"',"g");let n,e=0;for(;(n=r.exec(a))!==null;){const t="./assets/overview.jpg_"+e,o=JSON.parse(n[1].replace(/&#x22;/g,'"')),{src:c,...i}=o;s[t]=await l({src:f,...i}),e++}}return s};async function C(a){return A(a).then(s=>a.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(r,n)=>{const e=JSON.parse(n.replace(/&#x22;/g,'"')),t=e.src+"_"+e.index;s[t].srcSet&&s[t].srcSet.values.length>0&&(s[t].attributes.srcset=s[t].srcSet.attribute);const{index:o,...c}=s[t].attributes;return h({src:s[t].src,...c})}))}const p=await C(`<h2 id="misc">Misc<a class="anchor" href="#misc">#</a></h2>
<h2 id="ones-and-zeroes">ones-and-zeroes<a class="anchor" href="#ones-and-zeroes">#</a></h2>
<h2 id=""><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./assets/question.png&#x22;,&#x22;alt&#x22;:&#x22;Question&#x22;,&#x22;index&#x22;:0}"></h2>
<h3 id="goals">Goals<a class="anchor" href="#goals">#</a></h3>
<ol>
<li>Download PulseView to decode the I2C signal</li>
<li>Identify the SDA and SCL, decode the signal, focus on DATA WRITE hexdump.<br>
<img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./assets/hexdump.png&#x22;,&#x22;alt&#x22;:&#x22;hexdump&#x22;,&#x22;index&#x22;:0}"></li>
<li>Research on connection between I2C port, how it communicate with LCD pane.</li>
<li>From LCD pane datasheet, decode the message.\r
<a href="https://cdn.sparkfun.com/assets/9/5/f/7/b/HD44780.pdf" rel="nofollow, noopener, noreferrer" target="_blank">https://cdn.sparkfun.com/assets/9/5/f/7/b/HD44780.pdf<span> ↗</span></a></li>
</ol>
<hr>
<h3 id="solution">Solution<a class="anchor" href="#solution">#</a></h3>
<ol>
<li>
<p>Identify the pinouts and we realise that the focus is only on I2C outputs SDA and SCL, at the end passing to HD44780 LCD Pane, so we don’t bother anything on breadboard.\r
<img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./assets/setup1.png&#x22;,&#x22;alt&#x22;:&#x22;&#x22;,&#x22;index&#x22;:0}"><br>
<img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./assets/ref.webp&#x22;,&#x22;alt&#x22;:&#x22;&#x22;,&#x22;index&#x22;:0}"></p>
</li>
<li>
<p>Since we are the LED controller is PCF8574, we are going to operate HD44780 on 4-bit data mode.<br>
To retrieve a single ASCII Hex character, it work on High nibble and Low nibble.<br>
As in hexdump instruction, it exist like this:<br>
- High nibble, E(Enable)= 1<br>
- High nibble, E(Enable) = 0<br>
- Low nibble, E(Enable) = 1<br>
- Low nibble, E(Enable) = 0</p>
</li>
<li>
<p>Dissect the High Nibble and Low Nibble binaries, combine them into single series, decode it into ascii characters.</p>
</li>
<li>
<p>Solution overview<br>
<img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./assets/overview.jpg&#x22;,&#x22;alt&#x22;:&#x22;Overview&#x22;,&#x22;index&#x22;:0}"></p>
</li>
</ol>
<h3 id="final-result">Final Result<a class="anchor" href="#final-result">#</a></h3>
<p><strong>Flag:</strong> <code>pingCTF{Silicon_Is_Talking_To_Me}</code></p>`),E={title:"pingCTF 2025",publishDate:"2025-03-24T00:00:00.000Z",description:"Writeups for pingCTF 2025",tags:["CTF","Misc"],heroImage:{src:"./assets/pingCTFbanner.png",color:"#303030"},language:"English",minutesRead:"1 min read"},I="C:/Users/gr1d/Documents/gr1d-init/gr1d-init.github.io/src/content/post/pingctf2025/index.md",S=void 0;function L(){return`\r
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
### Solution\r
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
**Flag:** \`pingCTF{Silicon_Is_Talking_To_Me}\``}function v(){return p}function y(){return[{depth:2,slug:"misc",text:"Misc"},{depth:2,slug:"ones-and-zeroes",text:"ones-and-zeroes"},{depth:2,slug:"",text:""},{depth:3,slug:"goals",text:"Goals"},{depth:3,slug:"solution",text:"Solution"},{depth:3,slug:"final-result",text:"Final Result"}]}const H=g((a,s,r)=>{const{layout:n,...e}=E;return e.file=I,e.url=S,d`${u()}${x(p)}`});export{H as Content,v as compiledContent,H as default,I as file,E as frontmatter,y as getHeadings,L as rawContent,S as url};
