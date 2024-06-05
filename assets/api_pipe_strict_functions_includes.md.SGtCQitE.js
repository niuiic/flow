import{_ as e,c as a,o as s,a3 as t}from"./chunks/framework.B_D3VkG0.js";const b=JSON.parse('{"title":"Function: includes()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe/strict/functions/includes.md","filePath":"api/pipe/strict/functions/includes.md","lastUpdated":null}'),r={name:"api/pipe/strict/functions/includes.md"},i=t(`<p><a href="./../../../modules.html">fx-flow v0.7.0</a> / <a href="./../">pipe/strict</a> / includes</p><h1 id="function-includes" tabindex="-1">Function: includes() <a class="header-anchor" href="#function-includes" aria-label="Permalink to &quot;Function: includes()&quot;">​</a></h1><h2 id="includes-value-iterable" tabindex="-1">includes(value, iterable) <a class="header-anchor" href="#includes-value-iterable" aria-label="Permalink to &quot;includes(value, iterable)&quot;">​</a></h2><blockquote><p><strong>includes</strong>&lt;<code>A</code>&gt;(<code>value</code>, <code>iterable</code>): <code>false</code></p></blockquote><p>Check whether <code>value</code> is in <code>iterable</code>.</p><h3 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong> <em>extends</em> readonly []</p><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>value</strong>: <code>unknown</code></p><p>• <strong>iterable</strong>: <code>A</code></p><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>false</code></p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;c&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;abcd&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;e&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;abcd&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// false</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/includes.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h3 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/e26154efbd7f76d9bcefeae7bec1cceb69f9ef37/packages/core/src/pipe/strict/includes.ts#L18" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/includes.ts:18</a></p><h2 id="includes-value-iterable-1" tabindex="-1">includes(value, iterable) <a class="header-anchor" href="#includes-value-iterable-1" aria-label="Permalink to &quot;includes(value, iterable)&quot;">​</a></h2><blockquote><p><strong>includes</strong>&lt;<code>A</code>, <code>B</code>&gt;(<code>value</code>, <code>iterable</code>): <code>value is B</code></p></blockquote><h3 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong></p><p>• <strong>B</strong></p><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>value</strong>: <code>A</code></p><p>• <strong>iterable</strong>: <a href="./../interfaces/Iterable.html"><code>Iterable</code></a>&lt;<code>B</code>&gt;</p><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>value is B</code></p><h3 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/e26154efbd7f76d9bcefeae7bec1cceb69f9ef37/packages/core/src/pipe/strict/includes.ts#L20" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/includes.ts:20</a></p><h2 id="includes-value-iterable-2" tabindex="-1">includes(value, iterable) <a class="header-anchor" href="#includes-value-iterable-2" aria-label="Permalink to &quot;includes(value, iterable)&quot;">​</a></h2><blockquote><p><strong>includes</strong>&lt;<code>A</code>&gt;(<code>value</code>, <code>iterable</code>): <code>boolean</code></p></blockquote><h3 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong></p><h3 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>value</strong>: <code>unknown</code></p><p>• <strong>iterable</strong>: <a href="./../interfaces/Iterable.html"><code>Iterable</code></a>&lt;<code>A</code>&gt;</p><h3 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>boolean</code></p><h3 id="source-2" tabindex="-1">Source <a class="header-anchor" href="#source-2" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/e26154efbd7f76d9bcefeae7bec1cceb69f9ef37/packages/core/src/pipe/strict/includes.ts#L22" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/includes.ts:22</a></p><h2 id="includes-value-iterable-3" tabindex="-1">includes(value, iterable) <a class="header-anchor" href="#includes-value-iterable-3" aria-label="Permalink to &quot;includes(value, iterable)&quot;">​</a></h2><blockquote><p><strong>includes</strong>&lt;<code>A</code>&gt;(<code>value</code>, <code>iterable</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p></blockquote><h3 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong></p><h3 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>value</strong>: <code>unknown</code></p><p>• <strong>iterable</strong>: <a href="./../interfaces/AsyncIterable.html"><code>AsyncIterable</code></a>&lt;<code>A</code>&gt;</p><h3 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><h3 id="source-3" tabindex="-1">Source <a class="header-anchor" href="#source-3" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/e26154efbd7f76d9bcefeae7bec1cceb69f9ef37/packages/core/src/pipe/strict/includes.ts#L24" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/includes.ts:24</a></p><h2 id="includes-value" tabindex="-1">includes(value) <a class="header-anchor" href="#includes-value" aria-label="Permalink to &quot;includes(value)&quot;">​</a></h2><blockquote><p><strong>includes</strong>&lt;<code>A</code>&gt;(<code>value</code>): (<code>iterable</code>) =&gt; <a href="./../../../types/type-aliases/IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt;<code>A</code>, <code>boolean</code>&gt;</p></blockquote><h3 id="type-parameters-4" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-4" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong> <em>extends</em> <a href="./../../../types/type-aliases/UniversalIterable.html"><code>UniversalIterable</code></a></p><h3 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>value</strong>: <code>unknown</code></p><h3 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>Function</code></p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>iterable</strong>: <code>A</code></p><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../../../types/type-aliases/IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt;<code>A</code>, <code>boolean</code>&gt;</p><h3 id="source-4" tabindex="-1">Source <a class="header-anchor" href="#source-4" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/e26154efbd7f76d9bcefeae7bec1cceb69f9ef37/packages/core/src/pipe/strict/includes.ts#L26" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/includes.ts:26</a></p>`,65),l=[i];function n(o,c,d,h,p,u){return s(),a("div",null,l)}const g=e(r,[["render",n]]);export{b as __pageData,g as default};
