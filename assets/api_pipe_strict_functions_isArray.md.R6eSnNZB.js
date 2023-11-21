import{_ as a,o as s,c as e,R as r}from"./chunks/framework.omYO23xM.js";const m=JSON.parse('{"title":"Function: isArray()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe/strict/functions/isArray.md","filePath":"api/pipe/strict/functions/isArray.md","lastUpdated":null}'),t={name:"api/pipe/strict/functions/isArray.md"},o=r(`<h1 id="function-isarray" tabindex="-1">Function: isArray() <a class="header-anchor" href="#function-isarray" aria-label="Permalink to &quot;Function: isArray()&quot;">​</a></h1><p><a href="./../">pipe/strict</a>.isArray</p><blockquote><p><strong>isArray</strong>&lt;<code>A</code>&gt;(<code>args</code>): <code>args is Include&lt;A, unknown[] | readonly unknown[]&gt;</code></p></blockquote><p>Check whether <code>args</code> is an array.</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><p>▪ <strong>A</strong></p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><p>▪ <strong>args</strong>: <code>A</code></p><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>args is Include&lt;A, unknown[] | readonly unknown[]&gt;</code></p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]); </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">isArray</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]); </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#6F42C1;">isArray</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// false</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/isArray.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/70bcc3e/packages/core/src/pipe/strict/isArray.ts#L14" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/isArray.ts:14</a></p>`,15),n=[o];function p(l,c,i,d,y,h){return s(),e("div",null,n)}const f=a(t,[["render",p]]);export{m as __pageData,f as default};
