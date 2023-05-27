import{_ as e,o as t,c as a,O as r}from"./chunks/framework.7fc6a857.js";const b=JSON.parse('{"title":"Function: take()","description":"","frontmatter":{},"headers":[],"relativePath":"api/module.lazy/functions/function.take.md","filePath":"api/module.lazy/functions/function.take.md"}'),l={name:"api/module.lazy/functions/function.take.md"},o=r(`<h1 id="function-take" tabindex="-1">Function: take() <a class="header-anchor" href="#function-take" aria-label="Permalink to &quot;Function: take()&quot;">​</a></h1><blockquote><p><strong>take</strong>&lt;<code>A</code>&gt;(<code>length</code>, <code>iterable</code>): <a href="./../../module.strict/module.internal_/interfaces/interface.IterableIterator.html"><code>IterableIterator</code></a>&lt; <code>A</code> &gt;</p></blockquote><p>Returns IterableIterator/AsyncIterableIterator that take <code>length</code> values from iterable</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> v </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">take</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">])) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">v</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1, 2</span></span></code></pre></div><p><a href="https://github.com/niuiic/flow/blob/main/tests/functions/lazy/take.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>length</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><a href="./../../module.strict/module.internal_/interfaces/interface.Iterable.html"><code>Iterable</code></a>&lt; <code>A</code> &gt;</td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../../module.strict/module.internal_/interfaces/interface.IterableIterator.html"><code>IterableIterator</code></a>&lt; <code>A</code> &gt;</p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/b1f3b80/src/functions/lazy/take.ts#L44" target="_blank" rel="noreferrer">src/functions/lazy/take.ts:44</a></p><blockquote><p><strong>take</strong>&lt;<code>A</code>&gt;(<code>length</code>, <code>iterable</code>): <a href="./../../module.strict/module.internal_/interfaces/interface.AsyncIterableIterator.html"><code>AsyncIterableIterator</code></a>&lt; <a href="./../../module.strict/module.internal_/type-aliases/type-alias.Awaited.html"><code>Awaited</code></a>&lt; <code>A</code> &gt; &gt;</p></blockquote><h2 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>length</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><a href="./../../module.strict/module.internal_/interfaces/interface.AsyncIterable.html"><code>AsyncIterable</code></a>&lt; <code>A</code> &gt;</td></tr></tbody></table><h2 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../../module.strict/module.internal_/interfaces/interface.AsyncIterableIterator.html"><code>AsyncIterableIterator</code></a>&lt; <a href="./../../module.strict/module.internal_/type-aliases/type-alias.Awaited.html"><code>Awaited</code></a>&lt; <code>A</code> &gt; &gt;</p><h2 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/b1f3b80/src/functions/lazy/take.ts#L46" target="_blank" rel="noreferrer">src/functions/lazy/take.ts:46</a></p><blockquote><p><strong>take</strong>&lt;<code>A</code>&gt;(<code>length</code>): (<code>iterable</code>) =&gt; <a href="./../../module.strict/module.internal_/type-aliases/type-alias.IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt; <code>A</code> &gt;</p></blockquote><h2 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code> <em>extends</em> <a href="./../../module.strict/module.internal_/type-aliases/type-alias.UniversalIterable.html"><code>UniversalIterable</code></a></td></tr></tbody></table><h2 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>length</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h2 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><blockquote><blockquote><p>(<code>iterable</code>): <a href="./../../module.strict/module.internal_/type-aliases/type-alias.IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt; <code>A</code> &gt;</p></blockquote><h3 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h3 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../module.strict/module.internal_/type-aliases/type-alias.IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt; <code>A</code> &gt;</p></blockquote><h2 id="source-2" tabindex="-1">Source <a class="header-anchor" href="#source-2" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/b1f3b80/src/functions/lazy/take.ts#L48" target="_blank" rel="noreferrer">src/functions/lazy/take.ts:48</a></p><hr><p>Generated using <a href="https://typedoc.org/" target="_blank" rel="noreferrer">TypeDoc</a> and <a href="https://www.npmjs.com/package/typedoc-plugin-markdown" target="_blank" rel="noreferrer">typedoc-plugin-markdown</a></p>`,34),s=[o];function n(c,d,i,p,h,u){return t(),a("div",null,s)}const m=e(l,[["render",n]]);export{b as __pageData,m as default};
