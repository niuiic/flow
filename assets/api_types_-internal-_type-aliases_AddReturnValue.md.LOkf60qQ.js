import{_ as e,o as t,c as a,R as d}from"./chunks/framework.omYO23xM.js";const _=JSON.parse('{"title":"Type alias: AddReturnValue<T, A, B>","description":"","frontmatter":{},"headers":[],"relativePath":"api/types/-internal-/type-aliases/AddReturnValue.md","filePath":"api/types/-internal-/type-aliases/AddReturnValue.md","lastUpdated":null}'),o={name:"api/types/-internal-/type-aliases/AddReturnValue.md"},r=d('<h1 id="type-alias-addreturnvalue-t-a-b" tabindex="-1">Type alias: AddReturnValue&lt;T, A, B&gt; <a class="header-anchor" href="#type-alias-addreturnvalue-t-a-b" aria-label="Permalink to &quot;Type alias: AddReturnValue\\&lt;T, A, B\\&gt;&quot;">​</a></h1><p><a href="./../">&lt;internal&gt;</a>.AddReturnValue</p><blockquote><p><strong>AddReturnValue</strong>&lt;<code>T</code>, <code>A</code>, <code>B</code>&gt;: [<code>A</code>] extends [<a href="./../../type-aliases/FixedPromise.html"><code>FixedPromise</code></a>&lt;<code>T</code>&gt;] ? <a href="./../../type-aliases/FixedPromise.html"><code>FixedPromise</code></a>&lt;<code>T</code>&gt; : [<code>B</code>] extends [<a href="./../../type-aliases/FixedPromise.html"><code>FixedPromise</code></a>&lt;<code>T</code>&gt;] ? <a href="./../../type-aliases/FixedPromise.html"><code>FixedPromise</code></a>&lt;<code>T</code>&gt; : <a href="./Awaited.html"><code>Awaited</code></a>&lt;<code>T</code>&gt;</p></blockquote><p>A or B is async ? FixedPromise&lt;T&gt; : Awaited&lt;T&gt;</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><p>▪ <strong>T</strong></p><p>▪ <strong>A</strong> extends <code>T</code></p><p>▪ <strong>B</strong> extends <code>T</code></p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/70bcc3e/packages/core/src/pipe/strict/add.ts#L7" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/add.ts:7</a></p>',10),s=[r];function c(i,l,n,p,u,h){return t(),a("div",null,s)}const T=e(o,[["render",c]]);export{_ as __pageData,T as default};
