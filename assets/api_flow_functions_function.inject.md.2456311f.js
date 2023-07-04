import{_ as e,o as t,c as a,V as l}from"./chunks/framework.d3b95951.js";const b=JSON.parse('{"title":"Function: inject()","description":"","frontmatter":{},"headers":[],"relativePath":"api/flow/functions/function.inject.md","filePath":"api/flow/functions/function.inject.md","lastUpdated":null}'),r={name:"api/flow/functions/function.inject.md"},o=l(`<h1 id="function-inject" tabindex="-1">Function: inject() <a class="header-anchor" href="#function-inject" aria-label="Permalink to &quot;Function: inject()&quot;">​</a></h1><blockquote><p><strong>inject</strong>&lt;<code>A</code>&gt;(<code>fn</code>, <code>result</code>): <code>Promise</code>&lt; <a href="./../classes/class.Result.html"><code>Result</code></a>&lt; <code>A</code> &gt; &gt;</p></blockquote><p>Inject a function to the progress without side effect.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// with flow</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> userInfo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">flow</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">ok</span><span style="color:#A6ACCD;">(userId)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">inject</span><span style="color:#A6ACCD;">(doSometingElse)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">andThen</span><span style="color:#A6ACCD;">(queryUserInfo)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">errThen</span><span style="color:#A6ACCD;">(notify)))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unwrapOr</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  defaultUserInfo</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><p><a href="https://github.com/niuiic/flow/blob/main/tests/flow/inject.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">() =&gt; <code>Promise</code>&lt; <code>unknown</code> &gt;</td></tr><tr><td style="text-align:left;"><code>result</code></td><td style="text-align:left;"><a href="./../classes/class.Result.html"><code>Result</code></a>&lt; <code>A</code> &gt;</td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>Promise</code>&lt; <a href="./../classes/class.Result.html"><code>Result</code></a>&lt; <code>A</code> &gt; &gt;</p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/056804e/src/flow/inject.ts#L16" target="_blank" rel="noreferrer">src/flow/inject.ts:16</a></p><blockquote><p><strong>inject</strong>&lt;<code>A</code>&gt;(<code>fn</code>): (<code>result</code>) =&gt; <code>Promise</code>&lt; <a href="./../classes/class.Result.html"><code>Result</code></a>&lt; <code>A</code> &gt; &gt;</p></blockquote><h2 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">() =&gt; <code>Promise</code>&lt; <code>unknown</code> &gt;</td></tr></tbody></table><h2 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><blockquote><blockquote><p>(<code>result</code>): <code>Promise</code>&lt; <a href="./../classes/class.Result.html"><code>Result</code></a>&lt; <code>A</code> &gt; &gt;</p></blockquote><h3 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>result</code></td><td style="text-align:left;"><a href="./../classes/class.Result.html"><code>Result</code></a>&lt; <code>A</code> &gt;</td></tr></tbody></table><h3 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>Promise</code>&lt; <a href="./../classes/class.Result.html"><code>Result</code></a>&lt; <code>A</code> &gt; &gt;</p></blockquote><h2 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/056804e/src/flow/inject.ts#L17" target="_blank" rel="noreferrer">src/flow/inject.ts:17</a></p><blockquote><p><strong>inject</strong>&lt;<code>A</code>&gt;(<code>fn</code>, <code>result</code>): <a href="./../classes/class.Result.html"><code>Result</code></a>&lt; <code>A</code> &gt;</p></blockquote><h2 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">() =&gt; <code>unknown</code></td></tr><tr><td style="text-align:left;"><code>result</code></td><td style="text-align:left;"><a href="./../classes/class.Result.html"><code>Result</code></a>&lt; <code>A</code> &gt;</td></tr></tbody></table><h2 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../classes/class.Result.html"><code>Result</code></a>&lt; <code>A</code> &gt;</p><h2 id="source-2" tabindex="-1">Source <a class="header-anchor" href="#source-2" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/056804e/src/flow/inject.ts#L18" target="_blank" rel="noreferrer">src/flow/inject.ts:18</a></p><blockquote><p><strong>inject</strong>&lt;<code>A</code>&gt;(<code>fn</code>): (<code>result</code>) =&gt; <a href="./../classes/class.Result.html"><code>Result</code></a>&lt; <code>A</code> &gt;</p></blockquote><h2 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">() =&gt; <code>unknown</code></td></tr></tbody></table><h2 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><blockquote><blockquote><p>(<code>result</code>): <a href="./../classes/class.Result.html"><code>Result</code></a>&lt; <code>A</code> &gt;</p></blockquote><h3 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>result</code></td><td style="text-align:left;"><a href="./../classes/class.Result.html"><code>Result</code></a>&lt; <code>A</code> &gt;</td></tr></tbody></table><h3 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../classes/class.Result.html"><code>Result</code></a>&lt; <code>A</code> &gt;</p></blockquote><h2 id="source-3" tabindex="-1">Source <a class="header-anchor" href="#source-3" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/056804e/src/flow/inject.ts#L19" target="_blank" rel="noreferrer">src/flow/inject.ts:19</a></p>`,41),s=[o];function c(n,d,i,h,p,u){return t(),a("div",null,s)}const m=e(r,[["render",c]]);export{b as __pageData,m as default};
