import{_ as e,o as a,c as r,R as t}from"./chunks/framework.omYO23xM.js";const b=JSON.parse('{"title":"Function: filter()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe/lazy/functions/filter.md","filePath":"api/pipe/lazy/functions/filter.md","lastUpdated":null}'),o={name:"api/pipe/lazy/functions/filter.md"},s=t(`<h1 id="function-filter" tabindex="-1">Function: filter() <a class="header-anchor" href="#function-filter" aria-label="Permalink to &quot;Function: filter()&quot;">​</a></h1><p><a href="./../">pipe/lazy</a>.filter</p><h2 id="filter-fn-iterable" tabindex="-1">filter(fn, iterable) <a class="header-anchor" href="#filter-fn-iterable" aria-label="Permalink to &quot;filter(fn, iterable)&quot;">​</a></h2><blockquote><p><strong>filter</strong>&lt;<code>A</code>, <code>B</code>&gt;(<code>fn</code>, <code>iterable</code>): <a href="./../../../types/-internal-/interfaces/IterableIterator.html"><code>IterableIterator</code></a>&lt;<code>B</code>&gt;</p></blockquote><p>Filter <code>iterable</code> with <code>fn</code>.</p><h3 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>▪ <strong>A</strong></p><p>▪ <strong>B</strong></p><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ <strong>fn</strong>: (<code>args</code>) =&gt; <code>args is B</code></p><p>▪ <strong>iterable</strong>: <a href="./../../../types/-internal-/interfaces/Iterable.html"><code>Iterable</code></a>&lt;<code>A</code>&gt;</p><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../../types/-internal-/interfaces/IterableIterator.html"><code>IterableIterator</code></a>&lt;<code>B</code>&gt;</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">iterator</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> v </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">iterator.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">().value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span></span>
<span class="line"><span style="color:#E1E4E8;">iterator.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">().value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span></span>
<span class="line"><span style="color:#E1E4E8;">iterator.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">().done </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">iterator</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;">  </span><span style="color:#6F42C1;">filter</span><span style="color:#24292E;">((</span><span style="color:#E36209;">v</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> v </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">iterator.</span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">().value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span></span>
<span class="line"><span style="color:#24292E;">iterator.</span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">().value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span></span>
<span class="line"><span style="color:#24292E;">iterator.</span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">().done </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/lazy/filter.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h3 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/70bcc3e/packages/core/src/pipe/lazy/filter.ts#L176" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/filter.ts:176</a></p><h2 id="filter-fn-iterable-1" tabindex="-1">filter(fn, iterable) <a class="header-anchor" href="#filter-fn-iterable-1" aria-label="Permalink to &quot;filter(fn, iterable)&quot;">​</a></h2><blockquote><p><strong>filter</strong>&lt;<code>A</code>&gt;(<code>fn</code>, <code>iterable</code>): <a href="./../../../types/-internal-/interfaces/IterableIterator.html"><code>IterableIterator</code></a>&lt;<code>A</code>&gt;</p></blockquote><h3 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>▪ <strong>A</strong></p><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ <strong>fn</strong>: (<code>args</code>) =&gt; <code>unknown</code></p><p>▪ <strong>iterable</strong>: <a href="./../../../types/-internal-/interfaces/Iterable.html"><code>Iterable</code></a>&lt;<code>A</code>&gt;</p><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../../types/-internal-/interfaces/IterableIterator.html"><code>IterableIterator</code></a>&lt;<code>A</code>&gt;</p><h3 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/70bcc3e/packages/core/src/pipe/lazy/filter.ts#L177" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/filter.ts:177</a></p><h2 id="filter-fn-iterable-2" tabindex="-1">filter(fn, iterable) <a class="header-anchor" href="#filter-fn-iterable-2" aria-label="Permalink to &quot;filter(fn, iterable)&quot;">​</a></h2><blockquote><p><strong>filter</strong>&lt;<code>A</code>, <code>B</code>&gt;(<code>fn</code>, <code>iterable</code>): <a href="./../../../types/-internal-/interfaces/AsyncIterableIterator.html"><code>AsyncIterableIterator</code></a>&lt;<code>B</code>&gt;</p></blockquote><h3 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>▪ <strong>A</strong></p><p>▪ <strong>B</strong></p><h3 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ <strong>fn</strong>: (<code>args</code>) =&gt; <code>args is B</code></p><p>▪ <strong>iterable</strong>: <a href="./../../../types/-internal-/interfaces/AsyncIterable.html"><code>AsyncIterable</code></a>&lt;<code>A</code>&gt;</p><h3 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../../types/-internal-/interfaces/AsyncIterableIterator.html"><code>AsyncIterableIterator</code></a>&lt;<code>B</code>&gt;</p><h3 id="source-2" tabindex="-1">Source <a class="header-anchor" href="#source-2" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/70bcc3e/packages/core/src/pipe/lazy/filter.ts#L179" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/filter.ts:179</a></p><h2 id="filter-fn-iterable-3" tabindex="-1">filter(fn, iterable) <a class="header-anchor" href="#filter-fn-iterable-3" aria-label="Permalink to &quot;filter(fn, iterable)&quot;">​</a></h2><blockquote><p><strong>filter</strong>&lt;<code>A</code>&gt;(<code>fn</code>, <code>iterable</code>): <a href="./../../../types/-internal-/interfaces/AsyncIterableIterator.html"><code>AsyncIterableIterator</code></a>&lt;<code>A</code>&gt;</p></blockquote><h3 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>▪ <strong>A</strong></p><h3 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ <strong>fn</strong>: (<code>args</code>) =&gt; <code>unknown</code></p><p>▪ <strong>iterable</strong>: <a href="./../../../types/-internal-/interfaces/AsyncIterable.html"><code>AsyncIterable</code></a>&lt;<code>A</code>&gt;</p><h3 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../../types/-internal-/interfaces/AsyncIterableIterator.html"><code>AsyncIterableIterator</code></a>&lt;<code>A</code>&gt;</p><h3 id="source-3" tabindex="-1">Source <a class="header-anchor" href="#source-3" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/70bcc3e/packages/core/src/pipe/lazy/filter.ts#L180" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/filter.ts:180</a></p><h2 id="filter-fn" tabindex="-1">filter(fn) <a class="header-anchor" href="#filter-fn" aria-label="Permalink to &quot;filter(fn)&quot;">​</a></h2><blockquote><p><strong>filter</strong>&lt;<code>A</code>, <code>B</code>&gt;(<code>fn</code>): (<code>iterable</code>) =&gt; <a href="./../../../types/type-aliases/IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt;<code>A</code>, <code>B</code>&gt;</p></blockquote><h3 id="type-parameters-4" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-4" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>▪ <strong>A</strong> extends <a href="./../../../types/type-aliases/UniversalIterable.html"><code>UniversalIterable</code></a></p><p>▪ <strong>B</strong> extends <code>unknown</code></p><h3 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ <strong>fn</strong>: (<code>args</code>) =&gt; <code>args is B</code></p><h3 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>function</code></p><blockquote><blockquote><p>(<code>iterable</code>): <a href="./../../../types/type-aliases/IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt;<code>A</code>, <code>B</code>&gt;</p></blockquote><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>▪ <strong>iterable</strong>: <code>A</code></p><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../../../types/type-aliases/IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt;<code>A</code>, <code>B</code>&gt;</p></blockquote><h3 id="source-4" tabindex="-1">Source <a class="header-anchor" href="#source-4" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/70bcc3e/packages/core/src/pipe/lazy/filter.ts#L182" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/filter.ts:182</a></p><h2 id="filter-fn-1" tabindex="-1">filter(fn) <a class="header-anchor" href="#filter-fn-1" aria-label="Permalink to &quot;filter(fn)&quot;">​</a></h2><blockquote><p><strong>filter</strong>&lt;<code>A</code>, <code>B</code>&gt;(<code>fn</code>): (<code>iterable</code>) =&gt; <a href="./../../../types/type-aliases/IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt;<code>B</code>, <code>A</code>&gt;</p></blockquote><h3 id="type-parameters-5" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-5" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>▪ <strong>A</strong></p><p>▪ <strong>B</strong> extends <a href="./../../../types/type-aliases/UniversalIterable.html"><code>UniversalIterable</code></a>&lt;<code>A</code>&gt;</p><h3 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ <strong>fn</strong>: (<code>args</code>) =&gt; <code>B</code> extends <a href="./../../../types/-internal-/interfaces/AsyncIterable.html"><code>AsyncIterable</code></a>&lt;<code>A</code>&gt; ? <code>unknown</code> : <code>unknown</code></p><h3 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>function</code></p><blockquote><blockquote><p>(<code>iterable</code>): <a href="./../../../types/type-aliases/IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt;<code>B</code>, <code>A</code>&gt;</p></blockquote><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>▪ <strong>iterable</strong>: <code>B</code></p><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../../../types/type-aliases/IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt;<code>B</code>, <code>A</code>&gt;</p></blockquote><h3 id="source-5" tabindex="-1">Source <a class="header-anchor" href="#source-5" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/70bcc3e/packages/core/src/pipe/lazy/filter.ts#L185" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/filter.ts:185</a></p>`,76),l=[s];function n(c,p,i,d,h,u){return a(),r("div",null,l)}const y=e(o,[["render",n]]);export{b as __pageData,y as default};
