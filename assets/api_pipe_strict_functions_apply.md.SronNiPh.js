import{_ as e,o as a,c as t,R as r}from"./chunks/framework.omYO23xM.js";const m=JSON.parse('{"title":"Function: apply()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe/strict/functions/apply.md","filePath":"api/pipe/strict/functions/apply.md","lastUpdated":null}'),o={name:"api/pipe/strict/functions/apply.md"},s=r('<h1 id="function-apply" tabindex="-1">Function: apply() <a class="header-anchor" href="#function-apply" aria-label="Permalink to &quot;Function: apply()&quot;">​</a></h1><p><a href="./../">pipe/strict</a>.apply</p><h2 id="apply-fn-args" tabindex="-1">apply(fn, args) <a class="header-anchor" href="#apply-fn-args" aria-label="Permalink to &quot;apply(fn, args)&quot;">​</a></h2><blockquote><p><strong>apply</strong>&lt;<code>A</code>, <code>P</code>&gt;(<code>fn</code>, <code>args</code>): <a href="./../../../types/-internal-/type-aliases/ReturnType.html"><code>ReturnType</code></a>&lt;<em>typeof</em> <code>fn</code>&gt;</p></blockquote><p>Apply function <code>fn</code> to the arguments list <code>args</code>.</p><h3 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>▪ <strong>A</strong> extends <a href="./../../../types/type-aliases/AnyFunction.html"><code>AnyFunction</code></a></p><p>▪ <strong>P</strong> extends <code>any</code>[]</p><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ <strong>fn</strong>: <code>A</code></p><p>▪ <strong>args</strong>: <code>P</code></p><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../../types/-internal-/type-aliases/ReturnType.html"><code>ReturnType</code></a>&lt;<em>typeof</em> <code>fn</code>&gt;</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(Math.max, [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">]); </span><span style="color:#6A737D;">// 5</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(Math.max, [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">]); </span><span style="color:#6A737D;">// 5</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/apply.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h3 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/70bcc3e/packages/core/src/pipe/strict/apply.ts#L13" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/apply.ts:13</a></p><h2 id="apply-fn" tabindex="-1">apply(fn) <a class="header-anchor" href="#apply-fn" aria-label="Permalink to &quot;apply(fn)&quot;">​</a></h2><blockquote><p><strong>apply</strong>&lt;<code>A</code>, <code>P</code>&gt;(<code>fn</code>): (<code>args</code>) =&gt; <a href="./../../../types/-internal-/type-aliases/ReturnType.html"><code>ReturnType</code></a>&lt;<em>typeof</em> <code>fn</code>&gt;</p></blockquote><h3 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>▪ <strong>A</strong> extends <a href="./../../../types/type-aliases/AnyFunction.html"><code>AnyFunction</code></a></p><p>▪ <strong>P</strong> extends <code>any</code>[]</p><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ <strong>fn</strong>: <code>A</code></p><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>function</code></p><blockquote><blockquote><p>(<code>args</code>): <a href="./../../../types/-internal-/type-aliases/ReturnType.html"><code>ReturnType</code></a>&lt;<em>typeof</em> <code>fn</code>&gt;</p></blockquote><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>▪ <strong>args</strong>: <code>P</code></p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../../../types/-internal-/type-aliases/ReturnType.html"><code>ReturnType</code></a>&lt;<em>typeof</em> <code>fn</code>&gt;</p></blockquote><h3 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/70bcc3e/packages/core/src/pipe/strict/apply.ts#L15" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/apply.ts:15</a></p>',30),p=[s];function n(l,c,i,d,h,y){return a(),t("div",null,p)}const f=e(o,[["render",n]]);export{m as __pageData,f as default};
