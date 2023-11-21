import{_ as e,o as t,c as a,R as o}from"./chunks/framework.omYO23xM.js";const b=JSON.parse('{"title":"Type alias: Immutable<T, Ignore>","description":"","frontmatter":{},"headers":[],"relativePath":"api/types/type-aliases/Immutable.md","filePath":"api/types/type-aliases/Immutable.md","lastUpdated":null}'),c={name:"api/types/type-aliases/Immutable.md"},r=o('<h1 id="type-alias-immutable-t-ignore" tabindex="-1">Type alias: Immutable&lt;T, Ignore&gt; <a class="header-anchor" href="#type-alias-immutable-t-ignore" aria-label="Permalink to &quot;Type alias: Immutable\\&lt;T, Ignore\\&gt;&quot;">​</a></h1><p><a href="./../">types</a>.Immutable</p><blockquote><p><strong>Immutable</strong>&lt;<code>T</code>, <code>Ignore</code>&gt;: <code>T</code> extends <code>T</code> ? <code>T</code> extends <a href="./Primitive.html"><code>Primitive</code></a> | <a href="./AnyFunction.html"><code>AnyFunction</code></a> | <code>Ignore</code> ? <code>T</code> : <code>T</code> extends infer U[] ? <a href="./IsTuple.html"><code>IsTuple</code></a>&lt;<code>T</code>&gt; extends <code>true</code> ? <a href="./../-internal-/type-aliases/ImmutableTuple.html"><code>ImmutableTuple</code></a>&lt;<code>T</code>, <code>Ignore</code>&gt; : <a href="./../-internal-/type-aliases/ImmutableArray.html"><code>ImmutableArray</code></a>&lt;<code>U</code>, <code>Ignore</code>&gt; : <code>T</code> extends <code>Map</code>&lt;infer K, infer V&gt; ? <a href="./../-internal-/type-aliases/ImmutableMap.html"><code>ImmutableMap</code></a>&lt;<code>K</code>, <code>V</code>, <code>Ignore</code>&gt; : <code>T</code> extends <code>Set</code>&lt;infer M&gt; ? <a href="./../-internal-/type-aliases/ImmutableSet.html"><code>ImmutableSet</code></a>&lt;<code>M</code>, <code>Ignore</code>&gt; : <a href="./../-internal-/type-aliases/ImmutableObject.html"><code>ImmutableObject</code></a>&lt;<code>T</code>, <code>Ignore</code>&gt; : <code>never</code></p></blockquote><p>Make types to readonly, work recursively</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><p>▪ <strong>T</strong></p><p>▪ <strong>Ignore</strong> = <code>never</code></p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/70bcc3e/packages/core/src/types/immutable.ts#L15" target="_blank" rel="noreferrer">packages/core/src/types/immutable.ts:15</a></p>',9),d=[r];function l(s,n,m,i,p,u){return t(),a("div",null,d)}const g=e(c,[["render",l]]);export{b as __pageData,g as default};
