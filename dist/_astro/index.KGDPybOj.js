import{s as l,g as d}from"./_astro_assets.09gEiCms.js";import{c as f,r as g,m as h,u}from"./hoisted.B0kaTouZ.js";import"./astro/assets-service.DMKuBMpo.js";const b={src:"/_astro/behaviour.C5xMy9CF.png",width:276,height:177,format:"png"},m={src:"/_astro/welldone.WMpbVayS.png",width:309,height:166,format:"png"},x={src:"/_astro/behaviour.Ddo-iQOA.png",width:582,height:626,format:"png"},w={src:"/_astro/added.D568axox.png",width:777,height:681,format:"png"},y={src:"/_astro/foundcheck.CI2fgD9O.gif",width:800,height:479,format:"gif"},L={src:"/_astro/string.9l1RZwIq.png",width:779,height:671,format:"png"},v={src:"/_astro/done.Dw7EWnKg.gif",width:800,height:481,format:"gif"},k=async function(o){const a={};{const s=new RegExp('__ASTRO_IMAGE_="([^"]*\\./assets/img/Lab0/behaviour\\.png[^"]*)"',"g");let e,n=0;for(;(e=s.exec(o))!==null;){const t="./assets/img/Lab0/behaviour.png_"+n,r=JSON.parse(e[1].replace(/&#x22;/g,'"')),{src:c,...i}=r;a[t]=await d({src:b,...i}),n++}}{const s=new RegExp('__ASTRO_IMAGE_="([^"]*\\./assets/img/Lab0/welldone\\.png[^"]*)"',"g");let e,n=0;for(;(e=s.exec(o))!==null;){const t="./assets/img/Lab0/welldone.png_"+n,r=JSON.parse(e[1].replace(/&#x22;/g,'"')),{src:c,...i}=r;a[t]=await d({src:m,...i}),n++}}{const s=new RegExp('__ASTRO_IMAGE_="([^"]*\\./assets/img/Lab1/behaviour\\.png[^"]*)"',"g");let e,n=0;for(;(e=s.exec(o))!==null;){const t="./assets/img/Lab1/behaviour.png_"+n,r=JSON.parse(e[1].replace(/&#x22;/g,'"')),{src:c,...i}=r;a[t]=await d({src:x,...i}),n++}}{const s=new RegExp('__ASTRO_IMAGE_="([^"]*\\./assets/img/Lab1/added\\.png[^"]*)"',"g");let e,n=0;for(;(e=s.exec(o))!==null;){const t="./assets/img/Lab1/added.png_"+n,r=JSON.parse(e[1].replace(/&#x22;/g,'"')),{src:c,...i}=r;a[t]=await d({src:w,...i}),n++}}{const s=new RegExp('__ASTRO_IMAGE_="([^"]*\\./assets/img/Lab1/foundcheck\\.gif[^"]*)"',"g");let e,n=0;for(;(e=s.exec(o))!==null;){const t="./assets/img/Lab1/foundcheck.gif_"+n,r=JSON.parse(e[1].replace(/&#x22;/g,'"')),{src:c,...i}=r;a[t]=await d({src:y,...i}),n++}}{const s=new RegExp('__ASTRO_IMAGE_="([^"]*\\./assets/img/Lab1/string\\.png[^"]*)"',"g");let e,n=0;for(;(e=s.exec(o))!==null;){const t="./assets/img/Lab1/string.png_"+n,r=JSON.parse(e[1].replace(/&#x22;/g,'"')),{src:c,...i}=r;a[t]=await d({src:L,...i}),n++}}{const s=new RegExp('__ASTRO_IMAGE_="([^"]*\\./assets/img/Lab1/done\\.gif[^"]*)"',"g");let e,n=0;for(;(e=s.exec(o))!==null;){const t="./assets/img/Lab1/done.gif_"+n,r=JSON.parse(e[1].replace(/&#x22;/g,'"')),{src:c,...i}=r;a[t]=await d({src:v,...i}),n++}}return a};async function _(o){return k(o).then(a=>o.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(s,e)=>{const n=JSON.parse(e.replace(/&#x22;/g,'"')),t=n.src+"_"+n.index;a[t].srcSet&&a[t].srcSet.values.length>0&&(a[t].attributes.srcset=a[t].srcSet.attribute);const{index:r,...c}=a[t].attributes;return l({src:a[t].src,...c})}))}const p=await _(`<p>I attended an insightful WinDbg workshop at SinCon 2025. This writeup covers the key concepts, tools, and techniques discussed during the session, including practical examples and my key takeaways.</p>
<h2 id="key-concepts-covered">Key Concepts Covered<a class="anchor" href="#key-concepts-covered">#</a></h2>
<p>The workshop covered fundamental <strong>WinDbg navigation</strong> and <strong>dynamic analysis techniques</strong>. A key focus was the <strong>x64 calling convention</strong>, which dictates how arguments are passed to functions and how return values are handled. This convention is similar to <strong>Linux syscalls</strong>, but with a different register order for arguments, starting with <strong>RCX</strong> instead of <strong>RDI</strong>.</p>
<p><strong>x64 Calling Convention Summary:</strong></p>
<ul>
<li><strong>Return value:</strong> <code>rax</code></li>
<li><strong>1st argument:</strong> <code>rcx</code></li>
<li><strong>2nd argument:</strong> <code>rdx</code></li>
<li><strong>3rd argument:</strong> <code>r8</code></li>
<li><strong>4th argument:</strong> <code>r9</code></li>
<li><strong>5th argument:</strong> <code>rsp + 0x28</code></li>
<li><strong>6th argument:</strong> <code>rsp + 0x30</code> (rsp + 0x28 + 4)</li>
</ul>
<p>Additionally, the workshop covered practical skills such as <strong>setting breakpoints</strong> at the main entry point and other decision points within the code. We learned to <strong>inspect register contents</strong> to understand the arguments passed to key functions and to <strong>analyze memory dumps</strong> to identify the information required to satisfy program checks</p>
<hr>
<h4 id="setting-up-breakpoints">Setting up breakpoints<a class="anchor" href="#setting-up-breakpoints">#</a></h4>

































<table><thead><tr><th>Command</th><th>Use</th></tr></thead><tbody><tr><td><code>bp XX</code></td><td>Set a breakpoint at XX</td></tr><tr><td><code>bp $entry</code></td><td>Set a breakpoint at the entry point</td></tr><tr><td><code>bl</code></td><td>List breakpoints</td></tr><tr><td><code>bc X | bd X</code></td><td>Clear \\</td></tr><tr><td><code>? module!func*</code></td><td>Check if the address of a target function is “resolved”</td></tr><tr><td><code>lm</code></td><td>List Modules (shows loaded modules’ info)</td></tr></tbody></table>
<hr>
<h4 id="executing-through">Executing through<a class="anchor" href="#executing-through">#</a></h4>





























<table><thead><tr><th>Command</th><th>Use</th></tr></thead><tbody><tr><td><code>k</code></td><td>Display the function call stack</td></tr><tr><td><code>p</code></td><td>Step over the next instruction</td></tr><tr><td><code>pc | pt</code></td><td>Step until next call \\</td></tr><tr><td><code>t</code></td><td>Step into the next instruction</td></tr><tr><td><code>g</code></td><td>Go: execute until a breakpoint/stop</td></tr></tbody></table>
<hr>
<h4 id="interacting-with-registers">Interacting with registers<a class="anchor" href="#interacting-with-registers">#</a></h4>





















<table><thead><tr><th>Command</th><th>Use</th></tr></thead><tbody><tr><td><code>r</code></td><td>“Display registers”: shows content of major registers</td></tr><tr><td><code>? XX</code></td><td>“Show what X contains”</td></tr><tr><td><code>d(b|w|d|q)</code></td><td>Display X as byte\\</td></tr></tbody></table>
<hr>
<h3 id="advanced-techniques">Advanced Techniques<a class="anchor" href="#advanced-techniques">#</a></h3>
<p><em>(e.g., Scripting, extensions, memory analysis, crash dump analysis)</em></p>
<h2 id="practical-exercises">Practical Exercises<a class="anchor" href="#practical-exercises">#</a></h2>
<h3 id="lab0">Lab0<a class="anchor" href="#lab0">#</a></h3>
<p>First, I examined the program’s behavior by running it:</p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./assets/img/Lab0/behaviour.png&#x22;,&#x22;alt&#x22;:&#x22;Lab0 behaviour&#x22;,&#x22;index&#x22;:0}"></p>
<p>It ask the user to enter an input and check if it is true, else, showing wrong password,</p>
<p>So, I use windbg</p>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="plaintext"><pre><code><span class="line"><span>0:000> bp Lab0!main</span></span>
<span class="line"><span>breakpoint 0 redefined</span></span>
<span class="line"><span>0:000> g</span></span>
<span class="line"><span>Breakpoint 0 hit</span></span>
<span class="line"><span>Lab0!main:</span></span>
<span class="line"><span>00007ff6\`d5931120 4889542410      mov     qword ptr [rsp+10h],rdx ss:000000f2\`c54ffa38=00007ff6d59315c9</span></span>
<span class="line"><span>0:000> pc</span></span>
<span class="line"><span>Lab0!main+0x31:</span></span>
<span class="line"><span>00007ff6\`d5931151 e86a000000      call    Lab0!printf (00007ff6\`d59311c0)</span></span>
<span class="line"><span>0:000> pc</span></span>
<span class="line"><span>Lab0!main+0x3d:</span></span>
<span class="line"><span>00007ff6\`d593115d e85e000000      call    Lab0!printf (00007ff6\`d59311c0)</span></span>
<span class="line"><span>0:000> pc</span></span>
<span class="line"><span>Lab0!main+0x54:</span></span>
<span class="line"><span>00007ff6\`d5931174 e8c7000000      call    Lab0!wscanf_s (00007ff6\`d5931240)</span></span>
<span class="line"><span>0:000> pc</span></span>
<span class="line"><span>Lab0!main+0x62:</span></span>
<span class="line"><span>00007ff6\`d5931182 e879feffff      call    Lab0!VerifyInput (00007ff6\`d5931000)</span></span>
<span class="line"><span>0:000> t</span></span>
<span class="line"><span>Lab0!VerifyInput:</span></span>
<span class="line"><span>00007ff6\`d5931000 48894c2408      mov     qword ptr [rsp+8],rcx ss:000000f2\`c54ff7e0={Lab0!_NULL_IMPORT_DESCRIPTOR &#x3C;PERF> (Lab0+0x29098) (00007ff6\`d5959098)}</span></span>
<span class="line"><span>0:000> t</span></span>
<span class="line"><span>Lab0!VerifyInput+0x9:</span></span>
<span class="line"><span>00007ff6\`d5931009 488d0df07f0200  lea     rcx,[Lab0!_NULL_IMPORT_DESCRIPTOR &#x3C;PERF> (Lab0+0x29000) (00007ff6\`d5959000)]</span></span>
<span class="line"><span>0:000> t</span></span>
<span class="line"><span>Lab0!printf:</span></span>
<span class="line"><span>00007ff6\`d59311c0 48894c2408      mov     qword ptr [rsp+8],rcx ss:000000f2\`c54ff7a0=0000000000000000</span></span>
<span class="line"><span>0:000> db rcx</span></span>
<span class="line"><span>00007ff6\`d5959000  43 68 65 63 6b 69 6e 67-20 69 6e 70 75 74 2e 2e  Checking input..</span></span>
<span class="line"><span>00007ff6\`d5959010  0a 00 00 00 00 00 00 00-49 00 4c 00 6f 00 76 00 65 00 57 00 69 00 6e 00 64 00 62 00 67 00 00 00  e.W.i.n.d.b.g...</span></span>
<span class="line"><span>00007ff6\`d5959030  57 6f 68 6f 6f 2c 20 77-65 6c 6c 20 64 6f 6e 65  Wohoo, well done</span></span>
<span class="line"><span>00007ff6\`d5959040  21 0a 00 00 00 00 00 00-57 72 6f 6e 67 20 70 61 73 73 77 6f 72 64 2e 20 54 72 79 20 61 67 61 69  ssword. Try agai</span></span>
<span class="line"><span>00007ff6\`d5959060  6e 21 0a 00 00 00 00 00-2d 2d 2d 2d 2d 2d 20 4c 61 62 20 30 20 2d 2d 2d 2d 2d 2d 0a 00 00 00  lab 0 ------.....</span></span>
<span class="line"><span>0:000> g</span></span>
<span class="line"><span>ModLoad: 00007ff8\`74370000 00007ff8\`7438a000   C:\\WINDOWS\\SYSTEM32\\kernel.appcore.dll</span></span>
<span class="line"><span>ModLoad: 00007ff8\`77880000 00007ff8\`77929000   C:\\WINDOWS\\System32\\msvcrt.dll</span></span>
<span class="line"><span>ntdll!NtTerminateProcess+0x14:</span></span>
<span class="line"><span>00007ff8\`785824f4 c3              ret</span></span>
<span class="line"><span></span></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">plaintext</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="0:000> bp Lab0!main
breakpoint 0 redefined
0:000> g
Breakpoint 0 hit
Lab0!main:
00007ff6&#x60;d5931120 4889542410      mov     qword ptr [rsp+10h],rdx ss:000000f2&#x60;c54ffa38=00007ff6d59315c9
0:000> pc
Lab0!main+0x31:
00007ff6&#x60;d5931151 e86a000000      call    Lab0!printf (00007ff6&#x60;d59311c0)
0:000> pc
Lab0!main+0x3d:
00007ff6&#x60;d593115d e85e000000      call    Lab0!printf (00007ff6&#x60;d59311c0)
0:000> pc
Lab0!main+0x54:
00007ff6&#x60;d5931174 e8c7000000      call    Lab0!wscanf_s (00007ff6&#x60;d5931240)
0:000> pc
Lab0!main+0x62:
00007ff6&#x60;d5931182 e879feffff      call    Lab0!VerifyInput (00007ff6&#x60;d5931000)
0:000> t
Lab0!VerifyInput:
00007ff6&#x60;d5931000 48894c2408      mov     qword ptr [rsp+8],rcx ss:000000f2&#x60;c54ff7e0={Lab0!_NULL_IMPORT_DESCRIPTOR <PERF> (Lab0+0x29098) (00007ff6&#x60;d5959098)}
0:000> t
Lab0!VerifyInput+0x9:
00007ff6&#x60;d5931009 488d0df07f0200  lea     rcx,[Lab0!_NULL_IMPORT_DESCRIPTOR <PERF> (Lab0+0x29000) (00007ff6&#x60;d5959000)]
0:000> t
Lab0!printf:
00007ff6&#x60;d59311c0 48894c2408      mov     qword ptr [rsp+8],rcx ss:000000f2&#x60;c54ff7a0=0000000000000000
0:000> db rcx
00007ff6&#x60;d5959000  43 68 65 63 6b 69 6e 67-20 69 6e 70 75 74 2e 2e  Checking input..
00007ff6&#x60;d5959010  0a 00 00 00 00 00 00 00-49 00 4c 00 6f 00 76 00 65 00 57 00 69 00 6e 00 64 00 62 00 67 00 00 00  e.W.i.n.d.b.g...
00007ff6&#x60;d5959030  57 6f 68 6f 6f 2c 20 77-65 6c 6c 20 64 6f 6e 65  Wohoo, well done
00007ff6&#x60;d5959040  21 0a 00 00 00 00 00 00-57 72 6f 6e 67 20 70 61 73 73 77 6f 72 64 2e 20 54 72 79 20 61 67 61 69  ssword. Try agai
00007ff6&#x60;d5959060  6e 21 0a 00 00 00 00 00-2d 2d 2d 2d 2d 2d 20 4c 61 62 20 30 20 2d 2d 2d 2d 2d 2d 0a 00 00 00  lab 0 ------.....
0:000> g
ModLoad: 00007ff8&#x60;74370000 00007ff8&#x60;7438a000   C:\\WINDOWS\\SYSTEM32\\kernel.appcore.dll
ModLoad: 00007ff8&#x60;77880000 00007ff8&#x60;77929000   C:\\WINDOWS\\System32\\msvcrt.dll
ntdll!NtTerminateProcess+0x14:
00007ff8&#x60;785824f4 c3              ret
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>My approach was to first set a breakpoint at the <code>main</code> function. Then, I used the <code>pc</code> (step to next call) command repeatedly to navigate through the execution flow until I reached the <code>VerifyInput</code> function.</p>
<p>At this point, I switched to the <code>t</code> (trace into) command to step into <code>VerifyInput</code>. I continued stepping until I observed the <code>rcx</code> register being used to pass an argument. Dumping the memory pointed to by <code>rcx</code> revealed that the program expected the input to be <code>ILoveWindbg</code> to pass the check.</p>
<p>After discovering the required input, I reran the program. This time, with the correct input, the program successfully passed the check and displayed a “well done” message, as shown below:</p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./assets/img/Lab0/welldone.png&#x22;,&#x22;alt&#x22;:&#x22;Lab0 welldone&#x22;,&#x22;index&#x22;:0}"></p>
<h3 id="lab-1">Lab 1<a class="anchor" href="#lab-1">#</a></h3>
<p>First, I examined the initial behavior of the Lab 1 program:</p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./assets/img/Lab1/behaviour.png&#x22;,&#x22;alt&#x22;:&#x22;Lab 1 Initial Behaviour&#x22;,&#x22;index&#x22;:0}"></p>
<p>The program appeared to be searching for a specific file within the <code>C:\\\\Windows\\\\System32</code> directory and exiting if not found.</p>
<p>Next, I used WinDbg to investigate which file it was looking for and what its requirements were.</p>
<div class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="plaintext"><pre><code><span class="line"><span>0:000> bp Lab1!main</span></span>
<span class="line"><span>breakpoint 0 redefined</span></span>
<span class="line"><span>0:000> g</span></span>
<span class="line"><span>Breakpoint 0 hit</span></span>
<span class="line"><span>Lab1!main:</span></span>
<span class="line"><span>00007ff6\`24c31060 4889542410      mov     qword ptr [rsp+10h],rdx ss:0000006f\`da11f758=00007ff624c49fd3</span></span>
<span class="line"><span>0:000> pc</span></span>
<span class="line"><span>Lab1!main+0x8b:</span></span>
<span class="line"><span>00007ff6\`24c310eb ff150f2f0400    call    qword ptr [Lab1!_imp_GetCurrentDirectoryA (00007ff6\`24c74000)] ds:00007ff6\`24c74000={KERNEL32!GetCurrentDirectoryAStub (00007ff8\`77f25ed0)}</span></span>
<span class="line"><span>0:000> pc</span></span>
<span class="line"><span>Lab1!main+0xd0:</span></span>
<span class="line"><span>00007ff6\`24c31130 e88b670100      call    Lab1!strcpy_s (00007ff6\`24c478c0)</span></span>
<span class="line"><span>0:000> pc</span></span>
<span class="line"><span>Lab1!main+0xe9:</span></span>
<span class="line"><span>00007ff6\`24c31149 e8126e0100      call    Lab1!strcat_s (00007ff6\`24c47f60)</span></span>
<span class="line"><span>0:000> pc</span></span>
<span class="line"><span>Lab1!main+0xfb:</span></span>
<span class="line"><span>00007ff6\`24c3115b ff15af2e0400    call    qword ptr [Lab1!_imp_FindFirstFileA (00007ff6\`24c74010)] ds:00007ff6\`24c74010={KERNEL32!FindFirstFileA (00007ff8\`77f37330)}</span></span>
<span class="line"><span>0:000> pc</span></span>
<span class="line"><span>Lab1!main+0x1bb:</span></span>
<span class="line"><span>00007ff6\`24c3121b ff15f72d0400    call    qword ptr [Lab1!_imp_FindNextFileA (00007ff6\`24c74018)] ds:00007ff6\`24c74018={KERNEL32!FindNextFileA (00007ff8\`77f373a0)}</span></span>
<span class="line"><span>0:000> pc</span></span>
<span class="line"><span>Lab1!main+0x149:</span></span>
<span class="line"><span>00007ff6\`24c311a9 e8f26d0100      call    Lab1!strcmp (00007ff6\`24c47fa0)</span></span>
<span class="line"><span>0:000> t</span></span>
<span class="line"><span>Lab1!strcmp:</span></span>
<span class="line"><span>00007ff6\`24c47fa0 482bd1          sub     rdx,rcx</span></span>
<span class="line"><span>0:000> db rcx</span></span>
<span class="line"><span>0000006f\`da11f21c  30 61 65 33 62 39 39 38-2d 39 61 33 38 2d 34 62  0ae3b998-9a38-4b</span></span>
<span class="line"><span>0000006f\`da11f22c  37 32 2d 61 34 63 34 2d-30 36 38 34 39 34 34 31  72-a4c4-06849441</span></span>
<span class="line"><span>0000006f\`da11f23c  35 31 38 64 5f 53 65 72-76 69 63 69 6e 67 2d 53  518d_Servicing-S</span></span>
<span class="line"><span>0000006f\`da11f24c  74 61 63 6b 2e 64 6c 6c-00 01 00 00 c7 00 00 00  tack.dll........</span></span>
<span class="line"><span>0000006f\`da11f25c  00 00 00 00 00 00 00 00-00 00 00 00 f1 6c 43 78  .............lCx</span></span>
<span class="line"><span>0000006f\`da11f26c  f8 7f 00 00 00 00 00 00-00 00 00 00 00 00 00 00  ................</span></span>
<span class="line"><span>0000006f\`da11f27c  f6 7f 00 00 00 00 00 00-00 00 00 00 60 00 2c 40  ............\`.,@</span></span>
<span class="line"><span>0000006f\`da11f28c  00 00 00 00 00 00 00 00-00 00 00 00 80 04 00 00  ................</span></span>
<span class="line"><span>0:000> db rdx</span></span>
<span class="line"><span>00007ff6\`24c89050  69 6e 70 75 74 2e 74 78-74 00 00 00 00 00 00 00  input.txt.......</span></span>
<span class="line"><span>00007ff6\`24c89060  5b 2b 5d 20 53 65 65 69-6e 67 20 66 69 6c 65 3a  [+] Seeing file:</span></span>
<span class="line"><span>00007ff6\`24c89070  20 25 73 2e 2e 2e 20 46-6f 75 6e 64 20 66 69 6c   %s... Found fil</span></span>
<span class="line"><span>00007ff6\`24c89080  65 2c 20 63 68 65 63 6b-69 6e 67 20 63 6f 6e 74  e, checking cont</span></span>
<span class="line"><span>00007ff6\`24c89090  65 6e 74 0a 00 00 00 00-5b 69 5d 20 53 65 65 69  ent.....[i] Seei</span></span>
<span class="line"><span>00007ff6\`24c890a0  6e 67 20 66 69 6c 65 3a-20 25 73 2e 2e 2e 20 57  ng file: %s... W</span></span>
<span class="line"><span>00007ff6\`24c890b0  72 6f 6e 67 20 69 6e 70-75 74 0a 00 00 00 00 00  rong input......</span></span>
<span class="line"><span>00007ff6\`24c890c0  5b 2d 5d 20 43 6f 75 6c-64 20 6e 6f 74 20 66 69  [-] Could not fi</span></span>
<span class="line"><span></span></span></code></pre><span class="language transition-opacity duration-300 absolute top-3 right-3 text-sm text-muted-foreground select-none">plaintext</span><button class="copy transition-opacity duration-300 opacity-0 absolute top-3 right-3 text-muted-foreground p-1 box-content border border-border rounded bg-primary-foreground" data-code="0:000> bp Lab1!main
breakpoint 0 redefined
0:000> g
Breakpoint 0 hit
Lab1!main:
00007ff6&#x60;24c31060 4889542410      mov     qword ptr [rsp+10h],rdx ss:0000006f&#x60;da11f758=00007ff624c49fd3
0:000> pc
Lab1!main+0x8b:
00007ff6&#x60;24c310eb ff150f2f0400    call    qword ptr [Lab1!_imp_GetCurrentDirectoryA (00007ff6&#x60;24c74000)] ds:00007ff6&#x60;24c74000={KERNEL32!GetCurrentDirectoryAStub (00007ff8&#x60;77f25ed0)}
0:000> pc
Lab1!main+0xd0:
00007ff6&#x60;24c31130 e88b670100      call    Lab1!strcpy_s (00007ff6&#x60;24c478c0)
0:000> pc
Lab1!main+0xe9:
00007ff6&#x60;24c31149 e8126e0100      call    Lab1!strcat_s (00007ff6&#x60;24c47f60)
0:000> pc
Lab1!main+0xfb:
00007ff6&#x60;24c3115b ff15af2e0400    call    qword ptr [Lab1!_imp_FindFirstFileA (00007ff6&#x60;24c74010)] ds:00007ff6&#x60;24c74010={KERNEL32!FindFirstFileA (00007ff8&#x60;77f37330)}
0:000> pc
Lab1!main+0x1bb:
00007ff6&#x60;24c3121b ff15f72d0400    call    qword ptr [Lab1!_imp_FindNextFileA (00007ff6&#x60;24c74018)] ds:00007ff6&#x60;24c74018={KERNEL32!FindNextFileA (00007ff8&#x60;77f373a0)}
0:000> pc
Lab1!main+0x149:
00007ff6&#x60;24c311a9 e8f26d0100      call    Lab1!strcmp (00007ff6&#x60;24c47fa0)
0:000> t
Lab1!strcmp:
00007ff6&#x60;24c47fa0 482bd1          sub     rdx,rcx
0:000> db rcx
0000006f&#x60;da11f21c  30 61 65 33 62 39 39 38-2d 39 61 33 38 2d 34 62  0ae3b998-9a38-4b
0000006f&#x60;da11f22c  37 32 2d 61 34 63 34 2d-30 36 38 34 39 34 34 31  72-a4c4-06849441
0000006f&#x60;da11f23c  35 31 38 64 5f 53 65 72-76 69 63 69 6e 67 2d 53  518d_Servicing-S
0000006f&#x60;da11f24c  74 61 63 6b 2e 64 6c 6c-00 01 00 00 c7 00 00 00  tack.dll........
0000006f&#x60;da11f25c  00 00 00 00 00 00 00 00-00 00 00 00 f1 6c 43 78  .............lCx
0000006f&#x60;da11f26c  f8 7f 00 00 00 00 00 00-00 00 00 00 00 00 00 00  ................
0000006f&#x60;da11f27c  f6 7f 00 00 00 00 00 00-00 00 00 00 60 00 2c 40  ............&#x60;.,@
0000006f&#x60;da11f28c  00 00 00 00 00 00 00 00-00 00 00 00 80 04 00 00  ................
0:000> db rdx
00007ff6&#x60;24c89050  69 6e 70 75 74 2e 74 78-74 00 00 00 00 00 00 00  input.txt.......
00007ff6&#x60;24c89060  5b 2b 5d 20 53 65 65 69-6e 67 20 66 69 6c 65 3a  [+] Seeing file:
00007ff6&#x60;24c89070  20 25 73 2e 2e 2e 20 46-6f 75 6e 64 20 66 69 6c   %s... Found fil
00007ff6&#x60;24c89080  65 2c 20 63 68 65 63 6b-69 6e 67 20 63 6f 6e 74  e, checking cont
00007ff6&#x60;24c89090  65 6e 74 0a 00 00 00 00-5b 69 5d 20 53 65 65 69  ent.....[i] Seei
00007ff6&#x60;24c890a0  6e 67 20 66 69 6c 65 3a-20 25 73 2e 2e 2e 20 57  ng file: %s... W
00007ff6&#x60;24c890b0  72 6f 6e 67 20 69 6e 70-75 74 0a 00 00 00 00 00  rong input......
00007ff6&#x60;24c890c0  5b 2d 5d 20 43 6f 75 6c-64 20 6e 6f 74 20 66 69  [-] Could not fi
" onclick="
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add(&#x27;copied&#x27;);
          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)
        "><div class="ready"><svg class="size-5"><use href="/icons/code.svg#mingcute-clipboard-line"></use></svg></div><div class="success hidden"><svg class="size-5"><use href="/icons/code.svg#mingcute-file-check-line"></use></svg></div></button></div>
<p>My debugging process started by setting a <strong>breakpoint</strong> at the <code>main</code> function (<code>bp Lab1!main</code>). I then used the <strong><code>pc</code></strong> (step to next call) command to iterate through the execution. This continued until I encountered a call to <strong><code>strcmp</code></strong>. Using the <strong><code>t</code></strong> (trace into) command, I stepped into <strong><code>strcmp</code></strong> and examined the arguments passed in <strong><code>rcx</code></strong> and <strong><code>rdx</code></strong>. This revealed that the program was checking for the existence of <code>input.txt</code> in the <code>C:\\\\Windows\\\\System32</code> directory.</p>
<p>To observe the program’s behavior with the file present, I created <code>input.txt</code> in the <code>C:\\\\Windows\\\\System32</code> directory and initially filled it with the string “test” for further analysis:</p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./assets/img/Lab1/added.png&#x22;,&#x22;alt&#x22;:&#x22;Added input.txt&#x22;,&#x22;index&#x22;:0}"></p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./assets/img/Lab1/foundcheck.gif&#x22;,&#x22;alt&#x22;:&#x22;Found Check GIF&#x22;,&#x22;index&#x22;:0}"></p>
<p>Upon re-examining the program’s behavior with <code>input.txt</code> present, I again set a <strong>breakpoint</strong> at <code>main</code> and used <strong><code>pc</code></strong> to step through. I noticed the program seemed to loop when checking for <code>input.txt</code>. To understand why, I used the <strong><code>u</code></strong> (unassemble) command to inspect the assembly code and found a <strong><code>jne</code></strong> (jump if not equal) instruction causing the loop.</p>
<p>To bypass this loop and proceed to the next stage, I set a new <strong>breakpoint (<code>bp</code>)</strong> at the address immediately following the <strong><code>jne</code></strong> instruction. Using the <strong><code>g</code></strong> (go) command, I ran the program until this new breakpoint was hit, successfully moving past the file existence check.</p>
<p>Continuing with <strong><code>pc</code></strong>, I eventually encountered another <strong><code>strcmp</code></strong> call. This time, it was checking the <em>content</em> of <code>input.txt</code>. I used <strong><code>t</code></strong> to trace into this <strong><code>strcmp</code></strong> and then <strong><code>db</code></strong> to dump the contents of <strong><code>rcx</code></strong> and <strong><code>rdx</code></strong>. This revealed that the program expected the content of <code>input.txt</code> to be “<strong>Lab1.exe</strong>”. My placeholder “test” string was visible in <strong><code>rdx</code></strong>, confirming the check.</p>
<p>Knowing the required content, I modified <code>input.txt</code> to contain “<strong>Lab1.exe</strong>”:</p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./assets/img/Lab1/string.png&#x22;,&#x22;alt&#x22;:&#x22;Modified input.txt with Lab1.exe&#x22;,&#x22;index&#x22;:0}"></p>
<p>After rerunning the dynamic analysis with the corrected <code>input.txt</code>, the program successfully passed all checks and displayed a “good input!” message:</p>
<p><img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./assets/img/Lab1/done.gif&#x22;,&#x22;alt&#x22;:&#x22;Lab 1 Done GIF&#x22;,&#x22;index&#x22;:0}"></p>
<h3 id="visualizing-execution-flow-with-drawmeatree">Visualizing Execution Flow with DrawMeATree<a class="anchor" href="#visualizing-execution-flow-with-drawmeatree">#</a></h3>
<p><a href="https://github.com/CrowdStrike/drawmeatree" rel="nofollow, noopener, noreferrer" target="_blank">View the DrawMeATree GitHub repository<span> ↗</span></a></p>
<p>One particularly interesting tool introduced was <strong>DrawMeATree</strong>. This Python tool converts the output of WinDbg’s <code>wt</code> (Watch Trace) command into customizable graphical trees. This can be incredibly helpful for:</p>
<ul>
<li>Identifying components, functionalities, and the overall operation of a program.</li>
<li>Highlighting connections between functions and modules.</li>
<li>Summarizing large and complex amounts of information using custom filters.</li>
</ul>
<p><strong>DrawMeATree Filtering Methodology:</strong></p>
<ol>
<li>Generate <code>wt</code> output into a log file.</li>
<li>Identify the maximum depth required for filtering (or regenerate from a function of interest if the trace is too large).</li>
<li>Remove irrelevant “high-level” nodes that would clear entire branches (e.g., allocation/freeing phases, default routines, string handling).</li>
<li>Remove nodes/modules that do not help answer your initial debugging question.</li>
</ol>
<p>A general debugging methodology incorporating DrawMeATree could be:</p>
<ol>
<li>Start debugging at a chosen point (e.g., <code>bp $exentry</code>, <code>bp module!FunctionX</code>).</li>
<li>If you don’t have a specific target, use <code>wt</code> and then <strong>DrawMeATree</strong> to get a better overview of the execution flow.</li>
<li>Get as close as possible to your target and observe its behavior.</li>
</ol>
<h2 id="conclusion--takeaways">Conclusion &#x26; Takeaways<a class="anchor" href="#conclusion--takeaways">#</a></h2>
<p>This WinDbg workshop provided valuable insights into <strong>dynamic analysis on Windows</strong> and the practical application of <strong>WinDbg</strong> for <strong>reverse engineering</strong>. The hands-on labs effectively demonstrated the <strong>x64 calling convention</strong>, <strong>memory inspection techniques</strong>, and <strong>breakpoint usage</strong>. The introduction to <strong>DrawMeATree</strong> also highlighted a method for visualizing program execution flow.</p>
<p>Key takeaways:</p>
<ul>
<li>Essential <strong>WinDbg commands</strong> for debugging.</li>
<li>A clearer understanding of the <strong>x64 calling convention</strong> and its importance in analyzing function arguments and return values.</li>
<li>Systematic <strong>debugging methodology</strong>: observe, hypothesize, test, and iterate.</li>
</ul>`),I={title:"WinDbg Workshop at SinCon 2025",publishDate:"2025-05-27T00:00:00.000Z",description:"A writeup of the WinDbg workshop session at SinCon 2025, covering key debugging concepts and techniques.",tags:["Conference","SINCON 2025","WinDbg","Workshop","Reverse Engineering","Debugging"],heroImage:{src:"./assets/img/banner.png",color:"#0078d4"},language:"English",minutesRead:"8 min read"},T="C:/Users/gr1d/Documents/gr1d-init/gr1d-init.github.io/src/content/post/sinconwindbg/index.md",S=void 0;function R(){return`\r
I attended an insightful WinDbg workshop at SinCon 2025. This writeup covers the key concepts, tools, and techniques discussed during the session, including practical examples and my key takeaways.\r
\r
\r
## Key Concepts Covered\r
\r
The workshop covered fundamental **WinDbg navigation** and **dynamic analysis techniques**. A key focus was the **x64 calling convention**, which dictates how arguments are passed to functions and how return values are handled. This convention is similar to **Linux syscalls**, but with a different register order for arguments, starting with **RCX** instead of **RDI**.\r
\r
**x64 Calling Convention Summary:**\r
\r
*   **Return value:** \`rax\`\r
*   **1st argument:** \`rcx\`\r
*   **2nd argument:** \`rdx\`\r
*   **3rd argument:** \`r8\`\r
*   **4th argument:** \`r9\`\r
*   **5th argument:** \`rsp + 0x28\`\r
*   **6th argument:** \`rsp + 0x30\` (rsp + 0x28 + 4)\r
\r
Additionally, the workshop covered practical skills such as **setting breakpoints** at the main entry point and other decision points within the code. We learned to **inspect register contents** to understand the arguments passed to key functions and to **analyze memory dumps** to identify the information required to satisfy program checks\r
\r
---\r
\r
#### Setting up breakpoints\r
\r
| Command          | Use                                                     |\r
| ---------------- | ------------------------------------------------------- |\r
| \`bp XX\`          | Set a breakpoint at XX                                  |\r
| \`bp $entry\`      | Set a breakpoint at the entry point                     |\r
| \`bl\`             | List breakpoints                                        |\r
| \`bc X \\| bd X\` | Clear \\\\| disable breakpoint index X                     |\r
| \`? module!func*\` | Check if the address of a target function is “resolved” |\r
| \`lm\`             | List Modules (shows loaded modules’ info)               |\r
\r
---\r
\r
#### Executing through\r
\r
| Command      | Use                                 |\r
| ------------ | ----------------------------------- |\r
| \`k\`          | Display the function call stack     |\r
| \`p\`          | Step over the next instruction      |\r
| \`pc \\| pt\` | Step until next call \\\\| next return |\r
| \`t\`          | Step into the next instruction      |\r
| \`g\`          | Go: execute until a breakpoint/stop |\r
\r
---\r
\r
#### Interacting with registers\r
\r
| Command        | Use                                                   |\r
| -------------- | ----------------------------------------------------- |\r
| \`r\`            | “Display registers”: shows content of major registers |\r
| \`? XX\`         | “Show what X contains”                                |\r
| \`d(b\\|w\\|d\\|q)\` | Display X as byte\\\\|word\\\\|dword\\\\|qword                 |\r
\r
---\r
\r
### Advanced Techniques\r
\r
*(e.g., Scripting, extensions, memory analysis, crash dump analysis)*\r
\r
## Practical Exercises\r
\r
### Lab0\r
\r
First, I examined the program's behavior by running it:\r
\r
![Lab0 behaviour](./assets/img/Lab0/behaviour.png)\r
\r
It ask the user to enter an input and check if it is true, else, showing wrong password,\r
\r
So, I use windbg\r
\r
\`\`\`\r
0:000> bp Lab0!main\r
breakpoint 0 redefined\r
0:000> g\r
Breakpoint 0 hit\r
Lab0!main:\r
00007ff6\`d5931120 4889542410      mov     qword ptr [rsp+10h],rdx ss:000000f2\`c54ffa38=00007ff6d59315c9\r
0:000> pc\r
Lab0!main+0x31:\r
00007ff6\`d5931151 e86a000000      call    Lab0!printf (00007ff6\`d59311c0)\r
0:000> pc\r
Lab0!main+0x3d:\r
00007ff6\`d593115d e85e000000      call    Lab0!printf (00007ff6\`d59311c0)\r
0:000> pc\r
Lab0!main+0x54:\r
00007ff6\`d5931174 e8c7000000      call    Lab0!wscanf_s (00007ff6\`d5931240)\r
0:000> pc\r
Lab0!main+0x62:\r
00007ff6\`d5931182 e879feffff      call    Lab0!VerifyInput (00007ff6\`d5931000)\r
0:000> t\r
Lab0!VerifyInput:\r
00007ff6\`d5931000 48894c2408      mov     qword ptr [rsp+8],rcx ss:000000f2\`c54ff7e0={Lab0!_NULL_IMPORT_DESCRIPTOR <PERF> (Lab0+0x29098) (00007ff6\`d5959098)}\r
0:000> t\r
Lab0!VerifyInput+0x9:\r
00007ff6\`d5931009 488d0df07f0200  lea     rcx,[Lab0!_NULL_IMPORT_DESCRIPTOR <PERF> (Lab0+0x29000) (00007ff6\`d5959000)]\r
0:000> t\r
Lab0!printf:\r
00007ff6\`d59311c0 48894c2408      mov     qword ptr [rsp+8],rcx ss:000000f2\`c54ff7a0=0000000000000000\r
0:000> db rcx\r
00007ff6\`d5959000  43 68 65 63 6b 69 6e 67-20 69 6e 70 75 74 2e 2e  Checking input..\r
00007ff6\`d5959010  0a 00 00 00 00 00 00 00-49 00 4c 00 6f 00 76 00 65 00 57 00 69 00 6e 00 64 00 62 00 67 00 00 00  e.W.i.n.d.b.g...\r
00007ff6\`d5959030  57 6f 68 6f 6f 2c 20 77-65 6c 6c 20 64 6f 6e 65  Wohoo, well done\r
00007ff6\`d5959040  21 0a 00 00 00 00 00 00-57 72 6f 6e 67 20 70 61 73 73 77 6f 72 64 2e 20 54 72 79 20 61 67 61 69  ssword. Try agai\r
00007ff6\`d5959060  6e 21 0a 00 00 00 00 00-2d 2d 2d 2d 2d 2d 20 4c 61 62 20 30 20 2d 2d 2d 2d 2d 2d 0a 00 00 00  lab 0 ------.....\r
0:000> g\r
ModLoad: 00007ff8\`74370000 00007ff8\`7438a000   C:\\WINDOWS\\SYSTEM32\\kernel.appcore.dll\r
ModLoad: 00007ff8\`77880000 00007ff8\`77929000   C:\\WINDOWS\\System32\\msvcrt.dll\r
ntdll!NtTerminateProcess+0x14:\r
00007ff8\`785824f4 c3              ret\r
\`\`\`\r
My approach was to first set a breakpoint at the \`main\` function. Then, I used the \`pc\` (step to next call) command repeatedly to navigate through the execution flow until I reached the \`VerifyInput\` function. \r
\r
At this point, I switched to the \`t\` (trace into) command to step into \`VerifyInput\`. I continued stepping until I observed the \`rcx\` register being used to pass an argument. Dumping the memory pointed to by \`rcx\` revealed that the program expected the input to be \`ILoveWindbg\` to pass the check.\r
\r
After discovering the required input, I reran the program. This time, with the correct input, the program successfully passed the check and displayed a "well done" message, as shown below:\r
\r
![Lab0 welldone](./assets/img/Lab0/welldone.png)\r
\r
### Lab 1\r
\r
First, I examined the initial behavior of the Lab 1 program:\r
\r
![Lab 1 Initial Behaviour](./assets/img/Lab1/behaviour.png)\r
\r
The program appeared to be searching for a specific file within the \`C:\\\\Windows\\\\System32\` directory and exiting if not found.\r
\r
Next, I used WinDbg to investigate which file it was looking for and what its requirements were.\r
\r
\`\`\`\r
0:000> bp Lab1!main\r
breakpoint 0 redefined\r
0:000> g\r
Breakpoint 0 hit\r
Lab1!main:\r
00007ff6\`24c31060 4889542410      mov     qword ptr [rsp+10h],rdx ss:0000006f\`da11f758=00007ff624c49fd3\r
0:000> pc\r
Lab1!main+0x8b:\r
00007ff6\`24c310eb ff150f2f0400    call    qword ptr [Lab1!_imp_GetCurrentDirectoryA (00007ff6\`24c74000)] ds:00007ff6\`24c74000={KERNEL32!GetCurrentDirectoryAStub (00007ff8\`77f25ed0)}\r
0:000> pc\r
Lab1!main+0xd0:\r
00007ff6\`24c31130 e88b670100      call    Lab1!strcpy_s (00007ff6\`24c478c0)\r
0:000> pc\r
Lab1!main+0xe9:\r
00007ff6\`24c31149 e8126e0100      call    Lab1!strcat_s (00007ff6\`24c47f60)\r
0:000> pc\r
Lab1!main+0xfb:\r
00007ff6\`24c3115b ff15af2e0400    call    qword ptr [Lab1!_imp_FindFirstFileA (00007ff6\`24c74010)] ds:00007ff6\`24c74010={KERNEL32!FindFirstFileA (00007ff8\`77f37330)}\r
0:000> pc\r
Lab1!main+0x1bb:\r
00007ff6\`24c3121b ff15f72d0400    call    qword ptr [Lab1!_imp_FindNextFileA (00007ff6\`24c74018)] ds:00007ff6\`24c74018={KERNEL32!FindNextFileA (00007ff8\`77f373a0)}\r
0:000> pc\r
Lab1!main+0x149:\r
00007ff6\`24c311a9 e8f26d0100      call    Lab1!strcmp (00007ff6\`24c47fa0)\r
0:000> t\r
Lab1!strcmp:\r
00007ff6\`24c47fa0 482bd1          sub     rdx,rcx\r
0:000> db rcx\r
0000006f\`da11f21c  30 61 65 33 62 39 39 38-2d 39 61 33 38 2d 34 62  0ae3b998-9a38-4b\r
0000006f\`da11f22c  37 32 2d 61 34 63 34 2d-30 36 38 34 39 34 34 31  72-a4c4-06849441\r
0000006f\`da11f23c  35 31 38 64 5f 53 65 72-76 69 63 69 6e 67 2d 53  518d_Servicing-S\r
0000006f\`da11f24c  74 61 63 6b 2e 64 6c 6c-00 01 00 00 c7 00 00 00  tack.dll........\r
0000006f\`da11f25c  00 00 00 00 00 00 00 00-00 00 00 00 f1 6c 43 78  .............lCx\r
0000006f\`da11f26c  f8 7f 00 00 00 00 00 00-00 00 00 00 00 00 00 00  ................\r
0000006f\`da11f27c  f6 7f 00 00 00 00 00 00-00 00 00 00 60 00 2c 40  ............\`.,@\r
0000006f\`da11f28c  00 00 00 00 00 00 00 00-00 00 00 00 80 04 00 00  ................\r
0:000> db rdx\r
00007ff6\`24c89050  69 6e 70 75 74 2e 74 78-74 00 00 00 00 00 00 00  input.txt.......\r
00007ff6\`24c89060  5b 2b 5d 20 53 65 65 69-6e 67 20 66 69 6c 65 3a  [+] Seeing file:\r
00007ff6\`24c89070  20 25 73 2e 2e 2e 20 46-6f 75 6e 64 20 66 69 6c   %s... Found fil\r
00007ff6\`24c89080  65 2c 20 63 68 65 63 6b-69 6e 67 20 63 6f 6e 74  e, checking cont\r
00007ff6\`24c89090  65 6e 74 0a 00 00 00 00-5b 69 5d 20 53 65 65 69  ent.....[i] Seei\r
00007ff6\`24c890a0  6e 67 20 66 69 6c 65 3a-20 25 73 2e 2e 2e 20 57  ng file: %s... W\r
00007ff6\`24c890b0  72 6f 6e 67 20 69 6e 70-75 74 0a 00 00 00 00 00  rong input......\r
00007ff6\`24c890c0  5b 2d 5d 20 43 6f 75 6c-64 20 6e 6f 74 20 66 69  [-] Could not fi\r
\`\`\`\r
\r
My debugging process started by setting a **breakpoint** at the \`main\` function (\`bp Lab1!main\`). I then used the **\`pc\`** (step to next call) command to iterate through the execution. This continued until I encountered a call to **\`strcmp\`**. Using the **\`t\`** (trace into) command, I stepped into **\`strcmp\`** and examined the arguments passed in **\`rcx\`** and **\`rdx\`**. This revealed that the program was checking for the existence of \`input.txt\` in the \`C:\\\\Windows\\\\System32\` directory.\r
\r
To observe the program's behavior with the file present, I created \`input.txt\` in the \`C:\\\\Windows\\\\System32\` directory and initially filled it with the string "test" for further analysis:\r
\r
![Added input.txt](./assets/img/Lab1/added.png)\r
\r
![Found Check GIF](./assets/img/Lab1/foundcheck.gif)\r
\r
Upon re-examining the program's behavior with \`input.txt\` present, I again set a **breakpoint** at \`main\` and used **\`pc\`** to step through. I noticed the program seemed to loop when checking for \`input.txt\`. To understand why, I used the **\`u\`** (unassemble) command to inspect the assembly code and found a **\`jne\`** (jump if not equal) instruction causing the loop.\r
\r
To bypass this loop and proceed to the next stage, I set a new **breakpoint (\`bp\`)** at the address immediately following the **\`jne\`** instruction. Using the **\`g\`** (go) command, I ran the program until this new breakpoint was hit, successfully moving past the file existence check.\r
\r
Continuing with **\`pc\`**, I eventually encountered another **\`strcmp\`** call. This time, it was checking the *content* of \`input.txt\`. I used **\`t\`** to trace into this **\`strcmp\`** and then **\`db\`** to dump the contents of **\`rcx\`** and **\`rdx\`**. This revealed that the program expected the content of \`input.txt\` to be "**Lab1.exe**". My placeholder "test" string was visible in **\`rdx\`**, confirming the check.\r
\r
Knowing the required content, I modified \`input.txt\` to contain "**Lab1.exe**":\r
\r
![Modified input.txt with Lab1.exe](./assets/img/Lab1/string.png)\r
\r
After rerunning the dynamic analysis with the corrected \`input.txt\`, the program successfully passed all checks and displayed a "good input!" message:\r
\r
![Lab 1 Done GIF](./assets/img/Lab1/done.gif)\r
\r
### Visualizing Execution Flow with DrawMeATree\r
\r
[View the DrawMeATree GitHub repository](https://github.com/CrowdStrike/drawmeatree)\r
\r
One particularly interesting tool introduced was **DrawMeATree**. This Python tool converts the output of WinDbg's \`wt\` (Watch Trace) command into customizable graphical trees. This can be incredibly helpful for:\r
\r
*   Identifying components, functionalities, and the overall operation of a program.\r
*   Highlighting connections between functions and modules.\r
*   Summarizing large and complex amounts of information using custom filters.\r
\r
**DrawMeATree Filtering Methodology:**\r
\r
1.  Generate \`wt\` output into a log file.\r
2.  Identify the maximum depth required for filtering (or regenerate from a function of interest if the trace is too large).\r
3.  Remove irrelevant "high-level" nodes that would clear entire branches (e.g., allocation/freeing phases, default routines, string handling).\r
4.  Remove nodes/modules that do not help answer your initial debugging question.\r
\r
A general debugging methodology incorporating DrawMeATree could be:\r
\r
1.  Start debugging at a chosen point (e.g., \`bp $exentry\`, \`bp module!FunctionX\`).\r
2.  If you don't have a specific target, use \`wt\` and then **DrawMeATree** to get a better overview of the execution flow.\r
3.  Get as close as possible to your target and observe its behavior.\r
\r
## Conclusion & Takeaways\r
\r
This WinDbg workshop provided valuable insights into **dynamic analysis on Windows** and the practical application of **WinDbg** for **reverse engineering**. The hands-on labs effectively demonstrated the **x64 calling convention**, **memory inspection techniques**, and **breakpoint usage**. The introduction to **DrawMeATree** also highlighted a method for visualizing program execution flow.\r
\r
Key takeaways:\r
\r
*   Essential **WinDbg commands** for debugging.\r
*   A clearer understanding of the **x64 calling convention** and its importance in analyzing function arguments and return values.\r
*   Systematic **debugging methodology**: observe, hypothesize, test, and iterate.\r
`}function D(){return p}function M(){return[{depth:2,slug:"key-concepts-covered",text:"Key Concepts Covered"},{depth:4,slug:"setting-up-breakpoints",text:"Setting up breakpoints"},{depth:4,slug:"executing-through",text:"Executing through"},{depth:4,slug:"interacting-with-registers",text:"Interacting with registers"},{depth:3,slug:"advanced-techniques",text:"Advanced Techniques"},{depth:2,slug:"practical-exercises",text:"Practical Exercises"},{depth:3,slug:"lab0",text:"Lab0"},{depth:3,slug:"lab-1",text:"Lab 1"},{depth:3,slug:"visualizing-execution-flow-with-drawmeatree",text:"Visualizing Execution Flow with DrawMeATree"},{depth:2,slug:"conclusion--takeaways",text:"Conclusion & Takeaways"}]}const F=f((o,a,s)=>{const{layout:e,...n}=I;return n.file=T,n.url=S,g`${h()}${u(p)}`});export{F as Content,D as compiledContent,F as default,T as file,I as frontmatter,M as getHeadings,R as rawContent,S as url};
