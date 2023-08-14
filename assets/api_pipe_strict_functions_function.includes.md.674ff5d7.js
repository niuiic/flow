import{_ as e,o as t,c as a,X as l}from"./chunks/framework.6e839c56.js";const b=JSON.parse('{"title":"Function: includes()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe_strict/functions/function.includes.md","filePath":"api/pipe_strict/functions/function.includes.md","lastUpdated":null}'),r={name:"api/pipe_strict/functions/function.includes.md"},s=l(`<h1 id="function-includes" tabindex="-1">Function: includes() <a class="header-anchor" href="#function-includes" aria-label="Permalink to &quot;Function: includes()&quot;">​</a></h1><blockquote><p><strong>includes</strong>&lt;<code>A</code>&gt;(<code>value</code>, <code>iterable</code>): <code>false</code></p></blockquote><p>Check whether <code>value</code> is in <code>iterable</code>.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">includes</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">abcd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#82AAFF;">includes</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">e</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">abcd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"><span style="color:#82AAFF;">includes</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">]) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#82AAFF;">includes</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">]) </span><span style="color:#676E95;font-style:italic;">// false</span></span></code></pre></div><p><a href="https://github.com/niuiic/flow/blob/main/tests/pipe/strict/includes.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code> <em>extends</em> <em>readonly</em> []</td></tr></tbody></table><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>unknown</code></td></tr><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>false</code></p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/beeed6d/src/pipe/strict/includes.ts#L18" target="_blank" rel="noreferrer">src/pipe/strict/includes.ts:18</a></p><blockquote><p><strong>includes</strong>&lt;<code>A</code>, <code>B</code>&gt;(<code>value</code>, <code>iterable</code>): <code>value is B</code></p></blockquote><h2 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr><tr><td style="text-align:left;"><code>B</code></td></tr></tbody></table><h2 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>A</code></td></tr><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><a href="./../../types/internal_/interfaces/interface.Iterable.html"><code>Iterable</code></a>&lt; <code>B</code> &gt;</td></tr></tbody></table><h2 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>value is B</code></p><h2 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/beeed6d/src/pipe/strict/includes.ts#L20" target="_blank" rel="noreferrer">src/pipe/strict/includes.ts:20</a></p><blockquote><p><strong>includes</strong>&lt;<code>A</code>&gt;(<code>value</code>, <code>iterable</code>): <code>boolean</code></p></blockquote><h2 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>unknown</code></td></tr><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><a href="./../../types/internal_/interfaces/interface.Iterable.html"><code>Iterable</code></a>&lt; <code>A</code> &gt;</td></tr></tbody></table><h2 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>boolean</code></p><h2 id="source-2" tabindex="-1">Source <a class="header-anchor" href="#source-2" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/beeed6d/src/pipe/strict/includes.ts#L22" target="_blank" rel="noreferrer">src/pipe/strict/includes.ts:22</a></p><blockquote><p><strong>includes</strong>&lt;<code>A</code>&gt;(<code>value</code>, <code>iterable</code>): <code>Promise</code>&lt; <code>boolean</code> &gt;</p></blockquote><h2 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>unknown</code></td></tr><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><a href="./../../types/internal_/interfaces/interface.AsyncIterable.html"><code>AsyncIterable</code></a>&lt; <code>A</code> &gt;</td></tr></tbody></table><h2 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>Promise</code>&lt; <code>boolean</code> &gt;</p><h2 id="source-3" tabindex="-1">Source <a class="header-anchor" href="#source-3" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/beeed6d/src/pipe/strict/includes.ts#L24" target="_blank" rel="noreferrer">src/pipe/strict/includes.ts:24</a></p><blockquote><p><strong>includes</strong>&lt;<code>A</code>&gt;(<code>value</code>): (<code>iterable</code>) =&gt; <a href="./../../types/type-aliases/type-alias.IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt; <code>A</code>, <code>boolean</code> &gt;</p></blockquote><h2 id="type-parameters-4" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-4" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code> <em>extends</em> <a href="./../../types/type-aliases/type-alias.UniversalIterable.html"><code>UniversalIterable</code></a></td></tr></tbody></table><h2 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>unknown</code></td></tr></tbody></table><h2 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><blockquote><blockquote><p>(<code>iterable</code>): <a href="./../../types/type-aliases/type-alias.IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt; <code>A</code>, <code>boolean</code> &gt;</p></blockquote><h3 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h3 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../types/type-aliases/type-alias.IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt; <code>A</code>, <code>boolean</code> &gt;</p></blockquote><h2 id="source-4" tabindex="-1">Source <a class="header-anchor" href="#source-4" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/beeed6d/src/pipe/strict/includes.ts#L26" target="_blank" rel="noreferrer">src/pipe/strict/includes.ts:26</a></p>`,50),o=[s];function n(c,d,i,p,h,u){return t(),a("div",null,o)}const f=e(r,[["render",n]]);export{b as __pageData,f as default};