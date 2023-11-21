import{_ as a,o as e,c as s,R as t}from"./chunks/framework.omYO23xM.js";const m=JSON.parse('{"title":"Function: isFunction()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe/strict/functions/isFunction.md","filePath":"api/pipe/strict/functions/isFunction.md","lastUpdated":null}'),n={name:"api/pipe/strict/functions/isFunction.md"},o=t(`<h1 id="function-isfunction" tabindex="-1">Function: isFunction() <a class="header-anchor" href="#function-isfunction" aria-label="Permalink to &quot;Function: isFunction()&quot;">​</a></h1><p><a href="./../">pipe/strict</a>.isFunction</p><blockquote><p><strong>isFunction</strong>&lt;<code>A</code>&gt;(<code>args</code>): <code>args is Include&lt;A, AnyFunction&gt;</code></p></blockquote><p>Check whether <code>args</code> is a function.</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><p>▪ <strong>A</strong></p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><p>▪ <strong>args</strong>: <code>A</code></p><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>args is Include&lt;A, AnyFunction&gt;</code></p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">isFunction</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {}); </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#B392F0;">isFunction</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">isFunction</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {}); </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#6F42C1;">isFunction</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// false</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/isFunction.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/70bcc3e/packages/core/src/pipe/strict/isFunction.ts#L14" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/isFunction.ts:14</a></p>`,15),r=[o];function c(i,p,l,u,d,h){return e(),s("div",null,r)}const g=a(n,[["render",c]]);export{m as __pageData,g as default};
