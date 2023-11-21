import{_ as e,o as a,c as t,R as s}from"./chunks/framework.omYO23xM.js";const f=JSON.parse('{"title":"Function: values()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe/lazy/functions/values.md","filePath":"api/pipe/lazy/functions/values.md","lastUpdated":null}'),o={name:"api/pipe/lazy/functions/values.md"},r=s(`<h1 id="function-values" tabindex="-1">Function: values() <a class="header-anchor" href="#function-values" aria-label="Permalink to &quot;Function: values()&quot;">​</a></h1><p><a href="./../">pipe/lazy</a>.values</p><blockquote><p><strong>values</strong>&lt;<code>A</code>&gt;(<code>args</code>): <a href="./../../../types/-internal-/interfaces/Generator.html"><code>Generator</code></a>&lt;<code>A</code>[<a href="./../../../types/-internal-/type-aliases/Extract.html"><code>Extract</code></a>&lt;keyof <code>A</code>, <code>string</code>&gt;], <code>void</code>, <code>unknown</code>&gt;</p></blockquote><p>Returns an iterator of the own enumerable string keyed property values of object.</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><p>▪ <strong>A</strong> extends <a href="./../../../types/-internal-/type-aliases/Record.html"><code>Record</code></a>&lt;<code>string</code>, <code>unknown</code>&gt;</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><p>▪ <strong>args</strong>: <code>A</code></p><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../../../types/-internal-/interfaces/Generator.html"><code>Generator</code></a>&lt;<code>A</code>[<a href="./../../../types/-internal-/type-aliases/Extract.html"><code>Extract</code></a>&lt;keyof <code>A</code>, <code>string</code>&gt;], <code>void</code>, <code>unknown</code>&gt;</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#F97583;">...</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">({ a: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, b: </span><span style="color:#9ECBFF;">&quot;2&quot;</span><span style="color:#E1E4E8;">, c: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> })]</span></span>
<span class="line"><span style="color:#6A737D;">// [1, &quot;2&quot;, true]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span><span style="color:#D73A49;">...</span><span style="color:#6F42C1;">values</span><span style="color:#24292E;">({ a: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, b: </span><span style="color:#032F62;">&quot;2&quot;</span><span style="color:#24292E;">, c: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> })]</span></span>
<span class="line"><span style="color:#6A737D;">// [1, &quot;2&quot;, true]</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/lazy/values.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/70bcc3e/packages/core/src/pipe/lazy/values.ts#L14" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/values.ts:14</a></p>`,15),n=[r];function l(c,p,i,d,u,h){return a(),t("div",null,n)}const m=e(o,[["render",l]]);export{f as __pageData,m as default};
