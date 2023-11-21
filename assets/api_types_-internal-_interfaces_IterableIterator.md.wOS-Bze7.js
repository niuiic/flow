import{_ as e,o as t,c as r,R as a}from"./chunks/framework.omYO23xM.js";const b=JSON.parse('{"title":"Interface: IterableIterator<T>","description":"","frontmatter":{},"headers":[],"relativePath":"api/types/-internal-/interfaces/IterableIterator.md","filePath":"api/types/-internal-/interfaces/IterableIterator.md","lastUpdated":null}'),o={name:"api/types/-internal-/interfaces/IterableIterator.md"},l=a('<h1 id="interface-iterableiterator-t" tabindex="-1">Interface: IterableIterator&lt;T&gt; <a class="header-anchor" href="#interface-iterableiterator-t" aria-label="Permalink to &quot;Interface: IterableIterator\\&lt;T\\&gt;&quot;">​</a></h1><p><a href="./../">&lt;internal&gt;</a>.IterableIterator</p><h2 id="contents" tabindex="-1">Contents <a class="header-anchor" href="#contents" aria-label="Permalink to &quot;Contents&quot;">​</a></h2><ul><li><a href="./IterableIterator.html#extends">Extends</a></li><li><a href="./IterableIterator.html#type-parameters">Type parameters</a></li><li><a href="./IterableIterator.html#methods">Methods</a><ul><li><a href="./IterableIterator.html#iterator"><code>[iterator]</code>()</a></li><li><a href="./IterableIterator.html#next">next()</a></li><li><a href="./IterableIterator.html#return">return()</a></li><li><a href="./IterableIterator.html#throw">throw()</a></li></ul></li></ul><h2 id="extends" tabindex="-1">Extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;Extends&quot;">​</a></h2><ul><li><a href="./Iterator.html"><code>Iterator</code></a>&lt;<code>T</code>&gt;</li></ul><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><p>▪ <strong>T</strong></p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="iterator" tabindex="-1"><code>[iterator]</code>() <a class="header-anchor" href="#iterator" aria-label="Permalink to &quot;`[iterator]`()&quot;">​</a></h3><blockquote><p><strong>[iterator]</strong>(): <a href="./IterableIterator.html"><code>IterableIterator</code></a>&lt;<code>T</code>&gt;</p></blockquote><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./IterableIterator.html"><code>IterableIterator</code></a>&lt;<code>T</code>&gt;</p><h4 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:53</p><hr><h3 id="next" tabindex="-1">next() <a class="header-anchor" href="#next" aria-label="Permalink to &quot;next()&quot;">​</a></h3><blockquote><p><strong>next</strong>(...<code>args</code>): <a href="./../type-aliases/IteratorResult.html"><code>IteratorResult</code></a>&lt;<code>T</code>, <code>any</code>&gt;</p></blockquote><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>▪ ...<strong>args</strong>: [] | [<code>undefined</code>]</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../type-aliases/IteratorResult.html"><code>IteratorResult</code></a>&lt;<code>T</code>, <code>any</code>&gt;</p><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Iterator.html#next"><code>types.&lt;internal&gt;.Iterator.next</code></a></p><h4 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:43</p><hr><h3 id="return" tabindex="-1">return() <a class="header-anchor" href="#return" aria-label="Permalink to &quot;return()&quot;">​</a></h3><blockquote><p><strong><code>optional</code></strong> <strong>return</strong>(<code>value</code>?): <a href="./../type-aliases/IteratorResult.html"><code>IteratorResult</code></a>&lt;<code>T</code>, <code>any</code>&gt;</p></blockquote><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>▪ <strong>value?</strong>: <code>any</code></p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../type-aliases/IteratorResult.html"><code>IteratorResult</code></a>&lt;<code>T</code>, <code>any</code>&gt;</p><h4 id="inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-1" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Iterator.html#return"><code>types.&lt;internal&gt;.Iterator.return</code></a></p><h4 id="source-2" tabindex="-1">Source <a class="header-anchor" href="#source-2" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:44</p><hr><h3 id="throw" tabindex="-1">throw() <a class="header-anchor" href="#throw" aria-label="Permalink to &quot;throw()&quot;">​</a></h3><blockquote><p><strong><code>optional</code></strong> <strong>throw</strong>(<code>e</code>?): <a href="./../type-aliases/IteratorResult.html"><code>IteratorResult</code></a>&lt;<code>T</code>, <code>any</code>&gt;</p></blockquote><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>▪ <strong>e?</strong>: <code>any</code></p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../type-aliases/IteratorResult.html"><code>IteratorResult</code></a>&lt;<code>T</code>, <code>any</code>&gt;</p><h4 id="inherited-from-2" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-2" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Iterator.html#throw"><code>types.&lt;internal&gt;.Iterator.throw</code></a></p><h4 id="source-3" tabindex="-1">Source <a class="header-anchor" href="#source-3" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:45</p>',48),n=[l];function s(d,i,h,c,u,p){return t(),r("div",null,n)}const f=e(o,[["render",s]]);export{b as __pageData,f as default};
