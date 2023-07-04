import{_ as e,o as t,c as a,V as l}from"./chunks/framework.d3b95951.js";const b=JSON.parse('{"title":"Function: concat()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe_lazy/functions/function.concat.md","filePath":"api/pipe_lazy/functions/function.concat.md","lastUpdated":null}'),s={name:"api/pipe_lazy/functions/function.concat.md"},o=l(`<h1 id="function-concat" tabindex="-1">Function: concat() <a class="header-anchor" href="#function-concat" aria-label="Permalink to &quot;Function: concat()&quot;">​</a></h1><blockquote><p><strong>concat</strong>&lt;<code>A</code>, <code>B</code>&gt;(<code>iterable1</code>, <code>iterable2</code>): <a href="./../../types/type-aliases/type-alias.ConcatReturnType.html"><code>ConcatReturnType</code></a>&lt; <code>A</code>, <code>B</code> &gt;</p></blockquote><p>Return the result of concatenating the given iterable.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> iter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">concat</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">iter</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">next</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// {done:false, value: 1}</span></span>
<span class="line"><span style="color:#A6ACCD;">iter</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">next</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// {done:false, value: 2}</span></span>
<span class="line"><span style="color:#A6ACCD;">iter</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">next</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// {done:false, value: 3}</span></span>
<span class="line"><span style="color:#A6ACCD;">iter</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">next</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// {done:false, value: 4}</span></span>
<span class="line"><span style="color:#A6ACCD;">iter</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">next</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// {done:true, value: undefined}</span></span></code></pre></div><p><a href="https://github.com/niuiic/flow/blob/main/tests/pipe/lazy/concat.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code> <em>extends</em> <a href="./../../types/type-aliases/type-alias.UniversalIterable.html"><code>UniversalIterable</code></a></td></tr><tr><td style="text-align:left;"><code>B</code> <em>extends</em> <a href="./../../types/type-aliases/type-alias.UniversalIterable.html"><code>UniversalIterable</code></a></td></tr></tbody></table><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>iterable1</code></td><td style="text-align:left;"><code>A</code></td></tr><tr><td style="text-align:left;"><code>iterable2</code></td><td style="text-align:left;"><code>B</code></td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../../types/type-aliases/type-alias.ConcatReturnType.html"><code>ConcatReturnType</code></a>&lt; <code>A</code>, <code>B</code> &gt;</p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/cc3b285/src/pipe/lazy/concat.ts#L62" target="_blank" rel="noreferrer">src/pipe/lazy/concat.ts:62</a></p><blockquote><p><strong>concat</strong>&lt;<code>A</code>, <code>B</code>&gt;(<code>iterable1</code>): (<code>iterable2</code>) =&gt; <a href="./../../types/type-aliases/type-alias.ConcatReturnType.html"><code>ConcatReturnType</code></a>&lt; <code>A</code>, <code>B</code> &gt;</p></blockquote><h2 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code> <em>extends</em> <a href="./../../types/type-aliases/type-alias.UniversalIterable.html"><code>UniversalIterable</code></a></td></tr><tr><td style="text-align:left;"><code>B</code> <em>extends</em> <a href="./../../types/type-aliases/type-alias.UniversalIterable.html"><code>UniversalIterable</code></a></td></tr></tbody></table><h2 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>iterable1</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><blockquote><blockquote><p>(<code>iterable2</code>): <a href="./../../types/type-aliases/type-alias.ConcatReturnType.html"><code>ConcatReturnType</code></a>&lt; <code>A</code>, <code>B</code> &gt;</p></blockquote><h3 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>iterable2</code></td><td style="text-align:left;"><code>B</code></td></tr></tbody></table><h3 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../types/type-aliases/type-alias.ConcatReturnType.html"><code>ConcatReturnType</code></a>&lt; <code>A</code>, <code>B</code> &gt;</p></blockquote><h2 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/cc3b285/src/pipe/lazy/concat.ts#L67" target="_blank" rel="noreferrer">src/pipe/lazy/concat.ts:67</a></p>`,23),n=[o];function r(c,p,d,i,y,h){return t(),a("div",null,n)}const f=e(s,[["render",r]]);export{b as __pageData,f as default};
