import{_ as e,o as t,c as a,X as s}from"./chunks/framework.6e839c56.js";const b=JSON.parse('{"title":"Function: isNumber()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe_strict/functions/function.isNumber.md","filePath":"api/pipe_strict/functions/function.isNumber.md","lastUpdated":null}'),r={name:"api/pipe_strict/functions/function.isNumber.md"},o=s(`<h1 id="function-isnumber" tabindex="-1">Function: isNumber() <a class="header-anchor" href="#function-isnumber" aria-label="Permalink to &quot;Function: isNumber()&quot;">​</a></h1><blockquote><p><strong>isNumber</strong>&lt;<code>A</code>&gt;(<code>args</code>): <code>args is Include&lt;A, number&gt;</code></p></blockquote><p>Check whether <code>args</code> is number.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">isNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#82AAFF;">isNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// false</span></span></code></pre></div><p><a href="https://github.com/niuiic/flow/blob/main/tests/pipe/strict/isNumber.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>args</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>args is Include&lt;A, number&gt;</code></p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/aa52889/src/pipe/strict/isNumber.ts#L14" target="_blank" rel="noreferrer">src/pipe/strict/isNumber.ts:14</a></p>`,14),n=[o];function l(i,c,p,d,u,h){return t(),a("div",null,n)}const f=e(r,[["render",l]]);export{b as __pageData,f as default};