import{_ as e,v as a,b as s,R as t}from"./chunks/framework.f9e03a9a.js";const C=JSON.parse('{"title":"Function: entries()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe_lazy/functions/function.entries.md","filePath":"api/pipe_lazy/functions/function.entries.md","lastUpdated":null}'),n={name:"api/pipe_lazy/functions/function.entries.md"},o=t(`<h1 id="function-entries" tabindex="-1">Function: entries() <a class="header-anchor" href="#function-entries" aria-label="Permalink to &quot;Function: entries()&quot;">​</a></h1><blockquote><p><strong>entries</strong>&lt;<code>A</code>&gt;(<code>args</code>): <a href="./../../types/internal_/interfaces/interface.Generator.html"><code>Generator</code></a>&lt; <a href="./../../types/type-aliases/type-alias.Entries.html"><code>Entries</code></a>&lt; <code>A</code> &gt;, <code>void</code> &gt;</p></blockquote><p>Convert object to iterator.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> iterator </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">entries</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">iterator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">next</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">iterator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">next</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">iterator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">next</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">done </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span></code></pre></div><p><a href="https://github.com/niuiic/flow/blob/main/tests/pipe/lazy/entries.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code> <em>extends</em> <a href="./../../types/type-aliases/type-alias.AnyObject.html"><code>AnyObject</code></a></td></tr></tbody></table><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>args</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../../types/internal_/interfaces/interface.Generator.html"><code>Generator</code></a>&lt; <a href="./../../types/type-aliases/type-alias.Entries.html"><code>Entries</code></a>&lt; <code>A</code> &gt;, <code>void</code> &gt;</p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/08461e4/src/pipe/lazy/entries.ts#L16" target="_blank" rel="noreferrer">src/pipe/lazy/entries.ts:16</a></p>`,14),l=[o];function r(p,c,i,y,d,D){return a(),s("div",null,l)}const h=e(n,[["render",r]]);export{C as __pageData,h as default};
