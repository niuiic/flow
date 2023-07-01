import{_ as e,o as t,c as a,O as s}from"./chunks/framework.571309da.js";const f=JSON.parse('{"title":"Function: keys()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe_lazy/functions/function.keys.md","filePath":"api/pipe_lazy/functions/function.keys.md"}'),o={name:"api/pipe_lazy/functions/function.keys.md"},n=s(`<h1 id="function-keys" tabindex="-1">Function: keys() <a class="header-anchor" href="#function-keys" aria-label="Permalink to &quot;Function: keys()&quot;">​</a></h1><blockquote><p><strong>keys</strong>&lt;<code>A</code>&gt;(<code>args</code>): <a href="./../../types/internal_/interfaces/interface.Generator.html"><code>Generator</code></a>&lt; <a href="./../../types/internal_/type-aliases/type-alias.Extract.html"><code>Extract</code></a>&lt; <em>keyof</em> <code>A</code>, <code>string</code> &gt;, <code>void</code>, <code>unknown</code> &gt;</p></blockquote><p>Returns an iterator of the own enumerable property names of object.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">...</span><span style="color:#82AAFF;">keys</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]</span></span></code></pre></div><p><a href="https://github.com/niuiic/flow/blob/main/tests/pipe/lazy/keys.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code> <em>extends</em> <a href="./../../types/internal_/type-aliases/type-alias.Record.html"><code>Record</code></a>&lt; <code>string</code>, <code>unknown</code> &gt;</td></tr></tbody></table><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>args</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../../types/internal_/interfaces/interface.Generator.html"><code>Generator</code></a>&lt; <a href="./../../types/internal_/type-aliases/type-alias.Extract.html"><code>Extract</code></a>&lt; <em>keyof</em> <code>A</code>, <code>string</code> &gt;, <code>void</code>, <code>unknown</code> &gt;</p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/1888d28/src/pipe/lazy/keys.ts#L14" target="_blank" rel="noreferrer">src/pipe/lazy/keys.ts:14</a></p>`,14),r=[n];function l(c,p,i,d,y,h){return t(),a("div",null,r)}const m=e(o,[["render",l]]);export{f as __pageData,m as default};
