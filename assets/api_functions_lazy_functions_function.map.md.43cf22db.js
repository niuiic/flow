import{_ as e,o as t,c as a,O as r}from"./chunks/framework.ecf7cd05.js";const b=JSON.parse('{"title":"Function: map()","description":"","frontmatter":{},"headers":[],"relativePath":"api/functions_lazy/functions/function.map.md","filePath":"api/functions_lazy/functions/function.map.md"}'),l={name:"api/functions_lazy/functions/function.map.md"},o=r(`<h1 id="function-map" tabindex="-1">Function: map() <a class="header-anchor" href="#function-map" aria-label="Permalink to &quot;Function: map()&quot;">​</a></h1><blockquote><p><strong>map</strong>&lt;<code>A</code>, <code>R</code>&gt;(<code>fn</code>, <code>iterable</code>): <a href="./../../types/internal_/interfaces/interface.IterableIterator.html"><code>IterableIterator</code></a>&lt; <code>R</code> &gt;</p></blockquote><p>Returns Iterable/AsyncIterable of values mapped by <code>fn</code>.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">pipe</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(a </span><span style="color:#89DDFF;">=&amp;</span><span style="color:#A6ACCD;">gt; a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;"> toArray</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [11, 12, 13, 14]</span></span></code></pre></div><p><a href="https://github.com/niuiic/flow/blob/main/tests/functions/lazy/map.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr><tr><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>args</code>) =&gt; <code>R</code></td></tr><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><a href="./../../types/internal_/interfaces/interface.Iterable.html"><code>Iterable</code></a>&lt; <code>A</code> &gt;</td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../../types/internal_/interfaces/interface.IterableIterator.html"><code>IterableIterator</code></a>&lt; <code>R</code> &gt;</p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/0fadbbf/src/functions/lazy/map.ts#L70" target="_blank" rel="noreferrer">src/functions/lazy/map.ts:70</a></p><blockquote><p><strong>map</strong>&lt;<code>A</code>, <code>R</code>&gt;(<code>fn</code>, <code>iterable</code>): <a href="./../../types/internal_/interfaces/interface.AsyncIterableIterator.html"><code>AsyncIterableIterator</code></a>&lt; <a href="./../../types/internal_/type-aliases/type-alias.Awaited.html"><code>Awaited</code></a>&lt; <code>R</code> &gt; &gt;</p></blockquote><h2 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr><tr><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h2 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>args</code>) =&gt; <code>R</code></td></tr><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><a href="./../../types/internal_/interfaces/interface.AsyncIterable.html"><code>AsyncIterable</code></a>&lt; <code>A</code> &gt;</td></tr></tbody></table><h2 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../../types/internal_/interfaces/interface.AsyncIterableIterator.html"><code>AsyncIterableIterator</code></a>&lt; <a href="./../../types/internal_/type-aliases/type-alias.Awaited.html"><code>Awaited</code></a>&lt; <code>R</code> &gt; &gt;</p><h2 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/0fadbbf/src/functions/lazy/map.ts#L71" target="_blank" rel="noreferrer">src/functions/lazy/map.ts:71</a></p><blockquote><p><strong>map</strong>&lt;<code>A</code>, <code>R</code>&gt;(<code>fn</code>): (<code>iterable</code>) =&gt; <a href="./../../types/internal_/type-aliases/type-alias.IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt; <a href="./../../types/internal_/type-aliases/type-alias.UniversalIterable.html"><code>UniversalIterable</code></a>&lt; <code>R</code> &gt; &gt;</p></blockquote><h2 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr><tr><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h2 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>args</code>) =&gt; <code>R</code></td></tr></tbody></table><h2 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><blockquote><blockquote><p>(<code>iterable</code>): <a href="./../../types/internal_/type-aliases/type-alias.IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt; <a href="./../../types/internal_/type-aliases/type-alias.UniversalIterable.html"><code>UniversalIterable</code></a>&lt; <code>R</code> &gt; &gt;</p></blockquote><h3 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><a href="./../../types/internal_/type-aliases/type-alias.UniversalIterable.html"><code>UniversalIterable</code></a>&lt; <code>A</code> &gt;</td></tr></tbody></table><h3 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../types/internal_/type-aliases/type-alias.IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt; <a href="./../../types/internal_/type-aliases/type-alias.UniversalIterable.html"><code>UniversalIterable</code></a>&lt; <code>R</code> &gt; &gt;</p></blockquote><h2 id="source-2" tabindex="-1">Source <a class="header-anchor" href="#source-2" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/0fadbbf/src/functions/lazy/map.ts#L72" target="_blank" rel="noreferrer">src/functions/lazy/map.ts:72</a></p>`,32),s=[o];function n(c,d,i,p,h,y){return t(),a("div",null,s)}const u=e(l,[["render",n]]);export{b as __pageData,u as default};
