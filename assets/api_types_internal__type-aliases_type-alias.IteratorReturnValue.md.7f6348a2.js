import{_ as e,o as t,c as a,O as r}from"./chunks/framework.ecf7cd05.js";const f=JSON.parse('{"title":"Type alias: IteratorReturnValue<T, R>","description":"","frontmatter":{},"headers":[],"relativePath":"api/types/internal_/type-aliases/type-alias.IteratorReturnValue.md","filePath":"api/types/internal_/type-aliases/type-alias.IteratorReturnValue.md"}'),l={name:"api/types/internal_/type-aliases/type-alias.IteratorReturnValue.md"},o=r('<h1 id="type-alias-iteratorreturnvalue-t-r" tabindex="-1">Type alias: IteratorReturnValue<code>&lt;T, R&gt;</code> <a class="header-anchor" href="#type-alias-iteratorreturnvalue-t-r" aria-label="Permalink to &quot;Type alias: IteratorReturnValue`&lt;T, R&gt;`&quot;">​</a></h1><blockquote><p><strong>IteratorReturnValue</strong>: &lt;<code>T</code>, <code>R</code>&gt; <code>T</code> <em>extends</em> <a href="./../interfaces/interface.Iterable.html"><code>Iterable</code></a>&lt; <code>unknown</code> &gt; ? <a href="./../interfaces/interface.IterableIterator.html"><code>IterableIterator</code></a>&lt; <code>R</code> &gt; : <code>T</code> <em>extends</em> <a href="./../interfaces/interface.AsyncIterable.html"><code>AsyncIterable</code></a>&lt; <code>unknown</code> &gt; ? <a href="./../interfaces/interface.AsyncIterableIterator.html"><code>AsyncIterableIterator</code></a>&lt; <a href="./type-alias.Awaited.html"><code>Awaited</code></a>&lt; <code>R</code> &gt; &gt; : <code>never</code></p></blockquote><p>T is async(AsyncIterable) ? AsyncIterableIterator&lt;Awaited&lt;R&gt;&gt; : IterableIterator&lt;R&gt;</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code> <em>extends</em> <a href="./type-alias.UniversalIterable.html"><code>UniversalIterable</code></a></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>R</code></td><td style="text-align:left;"><a href="./type-alias.UniversalIterableItem.html"><code>UniversalIterableItem</code></a>&lt; <code>T</code> &gt;</td></tr></tbody></table><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/0fadbbf/src/types/iterable.ts#L32" target="_blank" rel="noreferrer">src/types/iterable.ts:32</a></p>',7),c=[o];function s(n,d,i,p,h,u){return t(),a("div",null,c)}const b=e(l,[["render",s]]);export{f as __pageData,b as default};
