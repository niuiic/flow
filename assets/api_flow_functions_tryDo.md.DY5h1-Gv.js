import{_ as e,c as a,o as t,a3 as s}from"./chunks/framework.B_D3VkG0.js";const k=JSON.parse('{"title":"Function: tryDo()","description":"","frontmatter":{},"headers":[],"relativePath":"api/flow/functions/tryDo.md","filePath":"api/flow/functions/tryDo.md","lastUpdated":null}'),r={name:"api/flow/functions/tryDo.md"},o=s(`<p><a href="./../../modules.html">fx-flow v0.7.0</a> / <a href="./../">flow</a> / tryDo</p><h1 id="function-trydo" tabindex="-1">Function: tryDo() <a class="header-anchor" href="#function-trydo" aria-label="Permalink to &quot;Function: tryDo()&quot;">​</a></h1><blockquote><p><strong>tryDo</strong>&lt;<code>A</code>&gt;(<code>fn</code>): <a href="./../type-aliases/TryDoResult.html"><code>TryDoResult</code></a>&lt;<code>A</code>&gt;</p></blockquote><p>Convert the result of <code>fn</code> to <code>Result</code>. Automatically catch error.</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><p>• <strong>A</strong></p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><p>• <strong>fn</strong></p><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../type-aliases/TryDoResult.html"><code>TryDoResult</code></a>&lt;<code>A</code>&gt;</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> obj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tryDo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj.a.b) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// get a failure Result</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/flow/tryDo.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/e26154efbd7f76d9bcefeae7bec1cceb69f9ef37/packages/core/src/flow/tryDo.ts#L25" target="_blank" rel="noreferrer">packages/core/src/flow/tryDo.ts:25</a></p>`,15),i=[o];function l(n,c,p,h,d,u){return t(),a("div",null,i)}const y=e(r,[["render",l]]);export{k as __pageData,y as default};
