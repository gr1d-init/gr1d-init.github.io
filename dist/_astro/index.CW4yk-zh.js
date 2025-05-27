import{s as d,g as p}from"./_astro_assets.09gEiCms.js";import{c as k,r as h,m,u as E}from"./hoisted.B0kaTouZ.js";import"./astro/assets-service.DMKuBMpo.js";const y={src:"/_astro/webform.Cf8SJwFB.gif",width:800,height:468,format:"gif"},g={src:"/_astro/result.CCB27VLr.gif",width:800,height:454,format:"gif"},u=async function(r){const s={};{const i=new RegExp('__ASTRO_IMAGE_="([^"]*\\./assets/webform\\.gif[^"]*)"',"g");let e,a=0;for(;(e=i.exec(r))!==null;){const n="./assets/webform.gif_"+a,l=JSON.parse(e[1].replace(/&#x22;/g,'"')),{src:t,...o}=l;s[n]=await p({src:y,...o}),a++}}{const i=new RegExp('__ASTRO_IMAGE_="([^"]*\\./assets/result\\.gif[^"]*)"',"g");let e,a=0;for(;(e=i.exec(r))!==null;){const n="./assets/result.gif_"+a,l=JSON.parse(e[1].replace(/&#x22;/g,'"')),{src:t,...o}=l;s[n]=await p({src:g,...o}),a++}}return s};async function F(r){return u(r).then(s=>r.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(i,e)=>{const a=JSON.parse(e.replace(/&#x22;/g,'"')),n=a.src+"_"+a.index;s[n].srcSet&&s[n].srcSet.values.length>0&&(s[n].attributes.srcset=s[n].srcSet.attribute);const{index:l,...t}=s[n].attributes;return d({src:s[n].src,...t})}))}const c=await F(`<h2 id="misc">Misc<a class="anchor" href="#misc">#</a></h2>
<h2 id="babykalmarctf">babyKalmarCTF<a class="anchor" href="#babykalmarctf">#</a></h2>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="plaintext"><pre><code><span class="line"><span>Question: Ever played a CTF inside a CTF?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We were looking for a new scoring algorithm which would both reward top teams for solving super hard challenges, but also ensure that the easiest challenges wouldn't go to minimum straight away if more people played than we expected.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Thats when we came across this ingenious suggestion! sigpwny/ctfd-dynamic-challenges-mod#1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We've implemented it this scoring idea(see here: https://github.com/blatchley/ctfd-dynamic-challenges-mod ) and spun up a small test ctf to test it out.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>If you manage to win babykalmarCTF, we'll even give you a flag at /flag!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Spin up your own personal babykalmarCTF here: https://lab1.kalmarc.tf/</span></span>
<span class="line"><span></span></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">plaintext</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="Question: Ever played a CTF inside a CTF?

We were looking for a new scoring algorithm which would both reward top teams for solving super hard challenges, but also ensure that the easiest challenges wouldn&#x27;t go to minimum straight away if more people played than we expected.

Thats when we came across this ingenious suggestion! sigpwny/ctfd-dynamic-challenges-mod#1

We&#x27;ve implemented it this scoring idea(see here: https://github.com/blatchley/ctfd-dynamic-challenges-mod ) and spun up a small test ctf to test it out.

If you manage to win babykalmarCTF, we&#x27;ll even give you a flag at /flag!

Spin up your own personal babykalmarCTF here: https://lab1.kalmarc.tf/
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<hr>
<h3 id="goals">Goals<a class="anchor" href="#goals">#</a></h3>
<ol>
<li>Trick the dynamic CTF scoring system.</li>
<li>Solve all the solvable CTF challenges.</li>
<li>Spam fake team registrations on the platform.</li>
<li>Outperform Kalmarunionen</li>
</ol>
<hr>
<h3 id="solution">Solution:<a class="anchor" href="#solution">#</a></h3>
<p>Credit: @OS1R1S <em>for babyKalmarCTF challenges</em></p>
<ol>
<li>
<p>Within babyKalmarCTF there are several categories of challenges:</p>
<ul>
<li>Baby’s first RSA adventure (Crypto)</li>
<li>My First Flagchecker (Reverse)</li>
<li>THE OSINT CHALLENGE (OSINT)</li>
<li>Baffling, Ridiculous And Intriguing Letters, Laughter Ensues! (Misc)</li>
<li>Welcome Flag (Welcome)</li>
<li>Simple  Math Challenge (Impossible)</li>
<li>Baby’s Second RSA (Impossible)</li>
<li>A randcrack challenge (Impossible)</li>
<li>The Last Step (Impossible)</li>
</ul>
</li>
<li>
<p>Welcome Flag:<br>
<strong>Flag:</strong> <code>babykalmar{welcome_to_babykalmar_CTF}</code></p>
</li>
<li>
<p>My First Flagchecker:<br>
<strong>Flag:</strong> <code>babykalmar{string_compare_rev_ayoooooooo}</code></p>
</li>
<li>
<p>THE OSINT CHALLENGE:<br>
<strong>Flag:</strong> <code>babykalmar{aarhus}</code></p>
</li>
<li>
<p>Baffling, Ridiculous And Intriguing Letters, Laughter Ensues:<br>
<strong>Flag:</strong> <code>BABYKALMAR{SUPERORIGINALMORSECODECHALLENGE}</code></p>
</li>
<li>
<p>Baby’s first RSA adventure:<br>
<strong>Flag</strong>: <code>babykalmar{wow_you_are_an_rsa_master!!!!!}</code></p>
</li>
</ol>
<h3 id="final-result">Final Result<a class="anchor" href="#final-result">#</a></h3>
<hr>
<p>After solving all the challenges, we have to trick the scoring system. The script as below, to spam fake team registration, we designed an Auto Webform Filler.</p>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="python"><pre><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">from</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> selenium </span><span style="color:#D73A49;--shiki-dark:#F97583">import</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> webdriver</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">from</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> selenium.webdriver.common.by </span><span style="color:#D73A49;--shiki-dark:#F97583">import</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> By</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">import</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> time</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D"># Set up Firefox WebDriver</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">options </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> webdriver.FirefoxOptions()</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">options.headless </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">driver </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> webdriver.Firefox(</span><span style="color:#E36209;--shiki-dark:#FFAB70">options</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8">options)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">register_url </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> "https://45d9cb6b475c2631a4b32ccd8e0bcf6a-59591.inst1.chal-kalmarc.tf/register"</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">team_url </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> "https://45d9cb6b475c2631a4b32ccd8e0bcf6a-59591.inst1.chal-kalmarc.tf/teams/new"</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">logout_url </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> "https://45d9cb6b475c2631a4b32ccd8e0bcf6a-59591.inst1.chal-kalmarc.tf/logout"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> i </span><span style="color:#D73A49;--shiki-dark:#F97583">in</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> range</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">100</span><span style="color:#24292E;--shiki-dark:#E1E4E8">): </span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    driver.get(register_url)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    </span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    username </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#D73A49;--shiki-dark:#F97583"> f</span><span style="color:#032F62;--shiki-dark:#9ECBFF">"FakeUser</span><span style="color:#005CC5;--shiki-dark:#79B8FF">{</span><span style="color:#24292E;--shiki-dark:#E1E4E8">i</span><span style="color:#005CC5;--shiki-dark:#79B8FF">}</span><span style="color:#032F62;--shiki-dark:#9ECBFF">"</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    email </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#D73A49;--shiki-dark:#F97583"> f</span><span style="color:#032F62;--shiki-dark:#9ECBFF">"fakeuser</span><span style="color:#005CC5;--shiki-dark:#79B8FF">{</span><span style="color:#24292E;--shiki-dark:#E1E4E8">i</span><span style="color:#005CC5;--shiki-dark:#79B8FF">}</span><span style="color:#032F62;--shiki-dark:#9ECBFF">@example.com"</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    password </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> "P@ssw0rd123"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    driver.find_element(By.</span><span style="color:#005CC5;--shiki-dark:#79B8FF">ID</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"name"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">).send_keys(username)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    driver.find_element(By.</span><span style="color:#005CC5;--shiki-dark:#79B8FF">ID</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"email"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">).send_keys(email)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    driver.find_element(By.</span><span style="color:#005CC5;--shiki-dark:#79B8FF">ID</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"password"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">).send_keys(password)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    driver.find_element(By.</span><span style="color:#005CC5;--shiki-dark:#79B8FF">ID</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"_submit"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">).click()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    time.sleep(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">2</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    driver.get(team_url)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    </span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    team_name </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#D73A49;--shiki-dark:#F97583"> f</span><span style="color:#032F62;--shiki-dark:#9ECBFF">"FakeTeam</span><span style="color:#005CC5;--shiki-dark:#79B8FF">{</span><span style="color:#24292E;--shiki-dark:#E1E4E8">i</span><span style="color:#005CC5;--shiki-dark:#79B8FF">}</span><span style="color:#032F62;--shiki-dark:#9ECBFF">"</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    driver.find_element(By.</span><span style="color:#005CC5;--shiki-dark:#79B8FF">ID</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"name"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">).send_keys(team_name)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    driver.find_element(By.</span><span style="color:#005CC5;--shiki-dark:#79B8FF">ID</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"password"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">).send_keys(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">"TeamP@ssw0rd"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    driver.find_element(By.</span><span style="color:#005CC5;--shiki-dark:#79B8FF">ID</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">"_submit"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">).click()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">    print</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#D73A49;--shiki-dark:#F97583">f</span><span style="color:#032F62;--shiki-dark:#9ECBFF">"Registered </span><span style="color:#005CC5;--shiki-dark:#79B8FF">{</span><span style="color:#24292E;--shiki-dark:#E1E4E8">username</span><span style="color:#005CC5;--shiki-dark:#79B8FF">}</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> &#x26; Created Team </span><span style="color:#005CC5;--shiki-dark:#79B8FF">{</span><span style="color:#24292E;--shiki-dark:#E1E4E8">team_name</span><span style="color:#005CC5;--shiki-dark:#79B8FF">}</span><span style="color:#032F62;--shiki-dark:#9ECBFF">"</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    driver.get(logout_url)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    time.sleep(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">2</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">driver.quit()</span></span>
<span class="line"></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">python</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="from selenium import webdriver
from selenium.webdriver.common.by import By
import time

# Set up Firefox WebDriver
options = webdriver.FirefoxOptions()
options.headless = False

driver = webdriver.Firefox(options=options)

register_url = &#x22;https://45d9cb6b475c2631a4b32ccd8e0bcf6a-59591.inst1.chal-kalmarc.tf/register&#x22;
team_url = &#x22;https://45d9cb6b475c2631a4b32ccd8e0bcf6a-59591.inst1.chal-kalmarc.tf/teams/new&#x22;
logout_url = &#x22;https://45d9cb6b475c2631a4b32ccd8e0bcf6a-59591.inst1.chal-kalmarc.tf/logout&#x22;

for i in range(100): 
    driver.get(register_url)
    
    username = f&#x22;FakeUser{i}&#x22;
    email = f&#x22;fakeuser{i}@example.com&#x22;
    password = &#x22;P@ssw0rd123&#x22;

    driver.find_element(By.ID, &#x22;name&#x22;).send_keys(username)
    driver.find_element(By.ID, &#x22;email&#x22;).send_keys(email)
    driver.find_element(By.ID, &#x22;password&#x22;).send_keys(password)

    driver.find_element(By.ID, &#x22;_submit&#x22;).click()

    time.sleep(2)

    driver.get(team_url)
    
    team_name = f&#x22;FakeTeam{i}&#x22;
    driver.find_element(By.ID, &#x22;name&#x22;).send_keys(team_name)
    driver.find_element(By.ID, &#x22;password&#x22;).send_keys(&#x22;TeamP@ssw0rd&#x22;)

    driver.find_element(By.ID, &#x22;_submit&#x22;).click()

    print(f&#x22;Registered {username} &#x26; Created Team {team_name}&#x22;)

    driver.get(logout_url)
    time.sleep(2) 

driver.quit()
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./assets/webform.gif&#x22;,&#x22;alt&#x22;:&#x22;&#x22;,&#x22;index&#x22;:0}"><br>
<img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./assets/result.gif&#x22;,&#x22;alt&#x22;:&#x22;&#x22;,&#x22;index&#x22;:0}"><br>
<strong>Flag:</strong> <code>kalmar{w0w_y0u_b34t_k4lm4r_1n_4_c7f?!?}</code></p>`),b={title:"KalmarCTF 2025",publishDate:"2025-03-11T00:00:00.000Z",description:"Writeups for kalmarCTF 2025",tags:["CTF","Misc"],heroImage:{src:"./assets/kalmarCTFbanner.png",color:"#c5d6fe"},language:"English",minutesRead:"2 min read"},f="C:/Users/gr1d/Documents/gr1d-init/gr1d-init.github.io/src/content/post/kalmarctf2025/index.md",_=void 0;function w(){return`\r
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
`}function B(){return c}function A(){return[{depth:2,slug:"misc",text:"Misc"},{depth:2,slug:"babykalmarctf",text:"babyKalmarCTF"},{depth:3,slug:"goals",text:"Goals"},{depth:3,slug:"solution",text:"Solution:"},{depth:3,slug:"final-result",text:"Final Result"}]}const T=k((r,s,i)=>{const{layout:e,...a}=b;return a.file=f,a.url=_,h`${m()}${E(c)}`});export{T as Content,B as compiledContent,T as default,f as file,b as frontmatter,A as getHeadings,w as rawContent,_ as url};
