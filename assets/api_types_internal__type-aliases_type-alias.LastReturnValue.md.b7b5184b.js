import{_ as e,o as t,c as a,V as r}from"./chunks/framework.d3b95951.js";const _=JSON.parse('{"title":"Type alias: LastReturnValue<T>","description":"","frontmatter":{},"headers":[],"relativePath":"api/types/internal_/type-aliases/type-alias.LastReturnValue.md","filePath":"api/types/internal_/type-aliases/type-alias.LastReturnValue.md","lastUpdated":null}'),o={name:"api/types/internal_/type-aliases/type-alias.LastReturnValue.md"},s=r('<h1 id="type-alias-lastreturnvalue-t" tabindex="-1">Type alias: LastReturnValue<code>&lt;T&gt;</code> <a class="header-anchor" href="#type-alias-lastreturnvalue-t" aria-label="Permalink to &quot;Type alias: LastReturnValue`&lt;T&gt;`&quot;">​</a></h1><blockquote><p><strong>LastReturnValue</strong>: &lt;<code>T</code>&gt; <code>T</code> <em>extends</em> <em>readonly</em> [<code>any</code>, infer Last] ? <code>Last</code> : <code>T</code> <em>extends</em> <em>readonly</em> <code>never</code>[] ? <code>undefined</code> : <code>T</code> <em>extends</em> <a href="./../interfaces/interface.AsyncIterable.html"><code>AsyncIterable</code></a>&lt; infer U &gt; ? <a href="./../../type-aliases/type-alias.FixedPromise.html"><code>FixedPromise</code></a>&lt; <code>U</code> | <code>undefined</code> &gt; : <code>T</code> <em>extends</em> <a href="./../interfaces/interface.Iterable.html"><code>Iterable</code></a>&lt; infer U &gt; ? <code>U</code> | <code>undefined</code> : <code>never</code></p></blockquote><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/6f55d86/src/pipe/strict/last.ts#L7" target="_blank" rel="noreferrer">src/pipe/strict/last.ts:7</a></p>',6),l=[s];function d(c,n,i,p,u,m){return t(),a("div",null,l)}const f=e(o,[["render",d]]);export{_ as __pageData,f as default};