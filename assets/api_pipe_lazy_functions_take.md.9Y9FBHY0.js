import{_ as e,c as a,o as t,R as r}from"./chunks/framework.YlTiAyro.js";const g=JSON.parse('{"title":"Function: take()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe/lazy/functions/take.md","filePath":"api/pipe/lazy/functions/take.md","lastUpdated":null}'),s={name:"api/pipe/lazy/functions/take.md"},i=r(`<p><a href="./../../../modules.html">fx-flow</a> / <a href="./../">pipe/lazy</a> / take</p><h1 id="function-take" tabindex="-1">Function: take() <a class="header-anchor" href="#function-take" aria-label="Permalink to &quot;Function: take()&quot;">​</a></h1><h2 id="take-length-iterable" tabindex="-1">take(length, iterable) <a class="header-anchor" href="#take-length-iterable" aria-label="Permalink to &quot;take(length, iterable)&quot;">​</a></h2><blockquote><p><strong>take</strong>&lt;<code>A</code>&gt;(<code>length</code>, <code>iterable</code>): <a href="./../../../types/-internal-/interfaces/IterableIterator.html"><code>IterableIterator</code></a>&lt;<code>A</code>&gt;</p></blockquote><p>Returns IterableIterator/AsyncIterableIterator that take <code>length</code> values from iterable</p><h3 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong></p><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>length</strong>: <code>number</code></p><p>• <strong>iterable</strong>: <a href="./../../strict/-internal-/interfaces/Iterable.html"><code>Iterable</code></a>&lt;<code>A</code>&gt;</p><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../../types/-internal-/interfaces/IterableIterator.html"><code>IterableIterator</code></a>&lt;<code>A</code>&gt;</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> v</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> of</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> take</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(v)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1, 2</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/lazy/take.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h3 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/96a5328/packages/core/src/pipe/lazy/take.ts#L44" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/take.ts:44</a></p><h2 id="take-length-iterable-1" tabindex="-1">take(length, iterable) <a class="header-anchor" href="#take-length-iterable-1" aria-label="Permalink to &quot;take(length, iterable)&quot;">​</a></h2><blockquote><p><strong>take</strong>&lt;<code>A</code>&gt;(<code>length</code>, <code>iterable</code>): <a href="./../../../types/-internal-/interfaces/AsyncIterableIterator.html"><code>AsyncIterableIterator</code></a>&lt;<a href="./../../strict/-internal-/type-aliases/Awaited.html"><code>Awaited</code></a>&lt;<code>A</code>&gt;&gt;</p></blockquote><h3 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong></p><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>length</strong>: <code>number</code></p><p>• <strong>iterable</strong>: <a href="./../../strict/-internal-/interfaces/AsyncIterable.html"><code>AsyncIterable</code></a>&lt;<code>A</code>&gt;</p><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../../types/-internal-/interfaces/AsyncIterableIterator.html"><code>AsyncIterableIterator</code></a>&lt;<a href="./../../strict/-internal-/type-aliases/Awaited.html"><code>Awaited</code></a>&lt;<code>A</code>&gt;&gt;</p><h3 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/96a5328/packages/core/src/pipe/lazy/take.ts#L46" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/take.ts:46</a></p><h2 id="take-length" tabindex="-1">take(length) <a class="header-anchor" href="#take-length" aria-label="Permalink to &quot;take(length)&quot;">​</a></h2><blockquote><p><strong>take</strong>&lt;<code>A</code>&gt;(<code>length</code>): (<code>iterable</code>) =&gt; <a href="./../../../types/type-aliases/IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt;<code>A</code>&gt;</p></blockquote><h3 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong> extends <a href="./../../../types/type-aliases/UniversalIterable.html"><code>UniversalIterable</code></a></p><h3 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>length</strong>: <code>number</code></p><h3 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>Function</code></p><blockquote><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>iterable</strong>: <code>A</code></p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../../../types/type-aliases/IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt;<code>A</code>&gt;</p></blockquote><h3 id="source-2" tabindex="-1">Source <a class="header-anchor" href="#source-2" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/96a5328/packages/core/src/pipe/lazy/take.ts#L48" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/take.ts:48</a></p>`,39),l=[i];function o(n,h,c,p,d,k){return t(),a("div",null,l)}const b=e(s,[["render",o]]);export{g as __pageData,b as default};