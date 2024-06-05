import{_ as e,c as a,o as r,a3 as t}from"./chunks/framework.B_D3VkG0.js";const b=JSON.parse('{"title":"Function: range()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe/lazy/functions/range.md","filePath":"api/pipe/lazy/functions/range.md","lastUpdated":null}'),s={name:"api/pipe/lazy/functions/range.md"},n=t(`<p><a href="./../../../modules.html">fx-flow v0.7.0</a> / <a href="./../">pipe/lazy</a> / range</p><h1 id="function-range" tabindex="-1">Function: range() <a class="header-anchor" href="#function-range" aria-label="Permalink to &quot;Function: range()&quot;">​</a></h1><h2 id="range-length" tabindex="-1">range(length) <a class="header-anchor" href="#range-length" aria-label="Permalink to &quot;range(length)&quot;">​</a></h2><blockquote><p><strong>range</strong>(<code>length</code>): <a href="./../../../types/interfaces/IterableIterator.html"><code>IterableIterator</code></a>&lt;<code>number</code>&gt;</p></blockquote><p>Retures IterableIterator of numbers progressing from <code>start</code> to <code>end</code>(not included).</p><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>length</strong>: <code>number</code></p><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../../types/interfaces/IterableIterator.html"><code>IterableIterator</code></a>&lt;<code>number</code>&gt;</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> v</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> of</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(v) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 0, 1, 2, 3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/lazy/range.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h3 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/e26154efbd7f76d9bcefeae7bec1cceb69f9ef37/packages/core/src/pipe/lazy/range.ts#L13" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/range.ts:13</a></p><h2 id="range-start-end" tabindex="-1">range(start, end) <a class="header-anchor" href="#range-start-end" aria-label="Permalink to &quot;range(start, end)&quot;">​</a></h2><blockquote><p><strong>range</strong>(<code>start</code>, <code>end</code>): <a href="./../../../types/interfaces/IterableIterator.html"><code>IterableIterator</code></a>&lt;<code>number</code>&gt;</p></blockquote><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>start</strong>: <code>number</code></p><p>• <strong>end</strong>: <code>number</code></p><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../../types/interfaces/IterableIterator.html"><code>IterableIterator</code></a>&lt;<code>number</code>&gt;</p><h3 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/e26154efbd7f76d9bcefeae7bec1cceb69f9ef37/packages/core/src/pipe/lazy/range.ts#L15" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/range.ts:15</a></p><h2 id="range-start-end-step" tabindex="-1">range(start, end, step) <a class="header-anchor" href="#range-start-end-step" aria-label="Permalink to &quot;range(start, end, step)&quot;">​</a></h2><blockquote><p><strong>range</strong>(<code>start</code>, <code>end</code>, <code>step</code>): <a href="./../../../types/interfaces/IterableIterator.html"><code>IterableIterator</code></a>&lt;<code>number</code>&gt;</p></blockquote><h3 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>start</strong>: <code>number</code></p><p>• <strong>end</strong>: <code>number</code></p><p>• <strong>step</strong>: <code>number</code></p><h3 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../../types/interfaces/IterableIterator.html"><code>IterableIterator</code></a>&lt;<code>number</code>&gt;</p><h3 id="source-2" tabindex="-1">Source <a class="header-anchor" href="#source-2" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/e26154efbd7f76d9bcefeae7bec1cceb69f9ef37/packages/core/src/pipe/lazy/range.ts#L17" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/range.ts:17</a></p>`,33),o=[n];function i(c,l,h,p,d,g){return r(),a("div",null,o)}const f=e(s,[["render",i]]);export{b as __pageData,f as default};
