import{_ as e,o as a,c as s,R as n}from"./chunks/framework.omYO23xM.js";const u=JSON.parse('{"title":"Function: peek()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe/lazy/functions/peek.md","filePath":"api/pipe/lazy/functions/peek.md","lastUpdated":null}'),o={name:"api/pipe/lazy/functions/peek.md"},l=n(`<h1 id="function-peek" tabindex="-1">Function: peek() <a class="header-anchor" href="#function-peek" aria-label="Permalink to &quot;Function: peek()&quot;">​</a></h1><p><a href="./../">pipe/lazy</a>.peek</p><h2 id="peek-fn-iterable" tabindex="-1">peek(fn, iterable) <a class="header-anchor" href="#peek-fn-iterable" aria-label="Permalink to &quot;peek(fn, iterable)&quot;">​</a></h2><blockquote><p><strong>peek</strong>&lt;<code>A</code>&gt;(<code>fn</code>, <code>iterable</code>): <a href="./../../../types/-internal-/interfaces/IterableIterator.html"><code>IterableIterator</code></a>&lt;<code>A</code>&gt;</p></blockquote><p>Call <code>fn</code> for each item in the iterable/asyncIterable and return the original iterable/asyncIterable.</p><h3 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>▪ <strong>A</strong></p><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ <strong>fn</strong>: (<code>args</code>) =&gt; <code>unknown</code></p><p>▪ <strong>iterable</strong>: <a href="./../../../types/-internal-/interfaces/Iterable.html"><code>Iterable</code></a>&lt;<code>A</code>&gt;</p><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../../types/-internal-/interfaces/IterableIterator.html"><code>IterableIterator</code></a>&lt;<code>A</code>&gt;</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">iterator</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">peek</span><span style="color:#E1E4E8;">(console.log, [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">v</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> iterator) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// log 1, 2, 3</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// v = 1, 2, 3</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">iterator2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">peek</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    v.a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;b&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  [{ a: </span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;"> }]</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">v</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> iterator) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(v) </span><span style="color:#6A737D;">// log {a: &#39;b&#39;}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">iterator</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">peek</span><span style="color:#24292E;">(console.log, [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">v</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> iterator) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// log 1, 2, 3</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// v = 1, 2, 3</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">iterator2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">peek</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  (</span><span style="color:#E36209;">v</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    v.a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;b&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  [{ a: </span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;"> }]</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">v</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> iterator) {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(v) </span><span style="color:#6A737D;">// log {a: &#39;b&#39;}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/lazy/peek.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h3 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/70bcc3e/packages/core/src/pipe/lazy/peek.ts#L32" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/peek.ts:32</a></p><h2 id="peek-fn-iterable-1" tabindex="-1">peek(fn, iterable) <a class="header-anchor" href="#peek-fn-iterable-1" aria-label="Permalink to &quot;peek(fn, iterable)&quot;">​</a></h2><blockquote><p><strong>peek</strong>&lt;<code>A</code>&gt;(<code>fn</code>, <code>iterable</code>): <a href="./../../../types/-internal-/interfaces/AsyncIterableIterator.html"><code>AsyncIterableIterator</code></a>&lt;<code>A</code>&gt;</p></blockquote><h3 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>▪ <strong>A</strong></p><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ <strong>fn</strong>: (<code>args</code>) =&gt; <code>unknown</code></p><p>▪ <strong>iterable</strong>: <a href="./../../../types/-internal-/interfaces/AsyncIterable.html"><code>AsyncIterable</code></a>&lt;<code>A</code>&gt;</p><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../../types/-internal-/interfaces/AsyncIterableIterator.html"><code>AsyncIterableIterator</code></a>&lt;<code>A</code>&gt;</p><h3 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/70bcc3e/packages/core/src/pipe/lazy/peek.ts#L33" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/peek.ts:33</a></p><h2 id="peek-fn" tabindex="-1">peek(fn) <a class="header-anchor" href="#peek-fn" aria-label="Permalink to &quot;peek(fn)&quot;">​</a></h2><blockquote><p><strong>peek</strong>&lt;<code>A</code>&gt;(<code>fn</code>): (<code>iterable</code>) =&gt; <a href="./../../../types/type-aliases/IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt;<a href="./../../../types/type-aliases/UniversalIterable.html"><code>UniversalIterable</code></a>&lt;<code>A</code>&gt;&gt;</p></blockquote><h3 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>▪ <strong>A</strong></p><h3 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ <strong>fn</strong>: (<code>args</code>) =&gt; <code>unknown</code></p><h3 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>function</code></p><blockquote><blockquote><p>(<code>iterable</code>): <a href="./../../../types/type-aliases/IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt;<a href="./../../../types/type-aliases/UniversalIterable.html"><code>UniversalIterable</code></a>&lt;<code>A</code>&gt;&gt;</p></blockquote><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>▪ <strong>iterable</strong>: <a href="./../../../types/type-aliases/UniversalIterable.html"><code>UniversalIterable</code></a>&lt;<code>A</code>&gt;</p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../../../types/type-aliases/IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt;<a href="./../../../types/type-aliases/UniversalIterable.html"><code>UniversalIterable</code></a>&lt;<code>A</code>&gt;&gt;</p></blockquote><h3 id="source-2" tabindex="-1">Source <a class="header-anchor" href="#source-2" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/70bcc3e/packages/core/src/pipe/lazy/peek.ts#L34" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/peek.ts:34</a></p>`,39),t=[l];function r(p,c,i,y,d,h){return a(),s("div",null,t)}const b=e(o,[["render",r]]);export{u as __pageData,b as default};
