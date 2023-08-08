import{_ as e,v as t,b as a,R as o}from"./chunks/framework.f9e03a9a.js";const m=JSON.parse('{"title":"Function: delay()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe_strict/functions/function.delay.md","filePath":"api/pipe_strict/functions/function.delay.md","lastUpdated":null}'),r={name:"api/pipe_strict/functions/function.delay.md"},l=o('<h1 id="function-delay" tabindex="-1">Function: delay() <a class="header-anchor" href="#function-delay" aria-label="Permalink to &quot;Function: delay()&quot;">​</a></h1><blockquote><p><strong>delay</strong>(<code>wait</code>): <code>Promise</code>&lt; <code>void</code> &gt;</p></blockquote><p>Delay the <code>value</code> by <code>wait</code> time.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">delay</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// print hello after 1s</span></span></code></pre></div><p><a href="https://github.com/niuiic/flow/blob/main/tests/pipe/strict/delay.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>wait</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>Promise</code>&lt; <code>void</code> &gt;</p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/08461e4/src/pipe/strict/delay.ts#L14" target="_blank" rel="noreferrer">src/pipe/strict/delay.ts:14</a></p><blockquote><p><strong>delay</strong>&lt;<code>A</code>&gt;(<code>wait</code>, <code>value</code>): <a href="./../../types/type-aliases/type-alias.FixedPromise.html"><code>FixedPromise</code></a>&lt; <code>A</code> &gt;</p></blockquote><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>wait</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../../types/type-aliases/type-alias.FixedPromise.html"><code>FixedPromise</code></a>&lt; <code>A</code> &gt;</p><h2 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/08461e4/src/pipe/strict/delay.ts#L16" target="_blank" rel="noreferrer">src/pipe/strict/delay.ts:16</a></p>',21),s=[l];function n(c,i,d,p,h,y){return t(),a("div",null,s)}const b=e(r,[["render",n]]);export{m as __pageData,b as default};
