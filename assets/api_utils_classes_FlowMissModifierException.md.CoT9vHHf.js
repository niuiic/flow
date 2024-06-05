import{_ as e,c as a,o as r,a3 as o}from"./chunks/framework.B_D3VkG0.js";const f=JSON.parse('{"title":"Class: FlowMissModifierException","description":"","frontmatter":{},"headers":[],"relativePath":"api/utils/classes/FlowMissModifierException.md","filePath":"api/utils/classes/FlowMissModifierException.md","lastUpdated":null}'),t={name:"api/utils/classes/FlowMissModifierException.md"},s=o('<p><a href="./../../modules.html">fx-flow v0.7.0</a> / <a href="./../">utils</a> / FlowMissModifierException</p><h1 id="class-flowmissmodifierexception" tabindex="-1">Class: FlowMissModifierException <a class="header-anchor" href="#class-flowmissmodifierexception" aria-label="Permalink to &quot;Class: FlowMissModifierException&quot;">​</a></h1><h2 id="extends" tabindex="-1">Extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;Extends&quot;">​</a></h2><ul><li><code>Error</code></li></ul><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="new-flowmissmodifierexception" tabindex="-1">new FlowMissModifierException() <a class="header-anchor" href="#new-flowmissmodifierexception" aria-label="Permalink to &quot;new FlowMissModifierException()&quot;">​</a></h3><blockquote><p><strong>new FlowMissModifierException</strong>(): <a href="./FlowMissModifierException.html"><code>FlowMissModifierException</code></a></p></blockquote><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./FlowMissModifierException.html"><code>FlowMissModifierException</code></a></p><h4 id="overrides" tabindex="-1">Overrides <a class="header-anchor" href="#overrides" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p><code>Error.constructor</code></p><h4 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/niuiic/fx-flow/blob/e26154efbd7f76d9bcefeae7bec1cceb69f9ef37/packages/core/src/utils.ts#L48" target="_blank" rel="noreferrer">packages/core/src/utils.ts:48</a></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="cause" tabindex="-1">cause? <a class="header-anchor" href="#cause" aria-label="Permalink to &quot;cause?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>cause</strong>: <code>unknown</code></p></blockquote><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><code>Error.cause</code></p><h4 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2022.error.d.ts:24</p><hr><h3 id="message" tabindex="-1">message <a class="header-anchor" href="#message" aria-label="Permalink to &quot;message&quot;">​</a></h3><blockquote><p><strong>message</strong>: <code>string</code></p></blockquote><h4 id="inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-1" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><code>Error.message</code></p><h4 id="source-2" tabindex="-1">Source <a class="header-anchor" href="#source-2" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:1077</p><hr><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h3><blockquote><p><strong>name</strong>: <code>string</code></p></blockquote><h4 id="inherited-from-2" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-2" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><code>Error.name</code></p><h4 id="source-3" tabindex="-1">Source <a class="header-anchor" href="#source-3" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:1076</p><hr><h3 id="stack" tabindex="-1">stack? <a class="header-anchor" href="#stack" aria-label="Permalink to &quot;stack?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>stack</strong>: <code>string</code></p></blockquote><h4 id="inherited-from-3" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-3" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><code>Error.stack</code></p><h4 id="source-4" tabindex="-1">Source <a class="header-anchor" href="#source-4" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:1078</p><hr><h3 id="preparestacktrace" tabindex="-1">prepareStackTrace()? <a class="header-anchor" href="#preparestacktrace" aria-label="Permalink to &quot;prepareStackTrace()?&quot;">​</a></h3><blockquote><p><code>static</code> <code>optional</code> <strong>prepareStackTrace</strong>: (<code>err</code>, <code>stackTraces</code>) =&gt; <code>any</code></p></blockquote><p>Optional override for formatting stack traces</p><h4 id="see" tabindex="-1">See <a class="header-anchor" href="#see" aria-label="Permalink to &quot;See&quot;">​</a></h4><p><a href="https://v8.dev/docs/stack-trace-api#customizing-stack-traces" target="_blank" rel="noreferrer">https://v8.dev/docs/stack-trace-api#customizing-stack-traces</a></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>err</strong>: <code>Error</code></p><p>• <strong>stackTraces</strong>: <a href="./../interfaces/CallSite.html"><code>CallSite</code></a>[]</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="inherited-from-4" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-4" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><code>Error.prepareStackTrace</code></p><h4 id="source-5" tabindex="-1">Source <a class="header-anchor" href="#source-5" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/@types+node@20.14.1/node_modules/@types/node/globals.d.ts:28</p><hr><h3 id="stacktracelimit" tabindex="-1">stackTraceLimit <a class="header-anchor" href="#stacktracelimit" aria-label="Permalink to &quot;stackTraceLimit&quot;">​</a></h3><blockquote><p><code>static</code> <strong>stackTraceLimit</strong>: <code>number</code></p></blockquote><h4 id="inherited-from-5" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-5" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><code>Error.stackTraceLimit</code></p><h4 id="source-6" tabindex="-1">Source <a class="header-anchor" href="#source-6" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/@types+node@20.14.1/node_modules/@types/node/globals.d.ts:30</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="capturestacktrace" tabindex="-1">captureStackTrace() <a class="header-anchor" href="#capturestacktrace" aria-label="Permalink to &quot;captureStackTrace()&quot;">​</a></h3><blockquote><p><code>static</code> <strong>captureStackTrace</strong>(<code>targetObject</code>, <code>constructorOpt</code>?): <code>void</code></p></blockquote><p>Create .stack property on a target object</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>targetObject</strong>: <code>object</code></p><p>• <strong>constructorOpt?</strong>: <code>Function</code></p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="inherited-from-6" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-6" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><code>Error.captureStackTrace</code></p><h4 id="source-7" tabindex="-1">Source <a class="header-anchor" href="#source-7" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/@types+node@20.14.1/node_modules/@types/node/globals.d.ts:21</p>',76),i=[s];function c(d,n,l,h,u,p){return r(),a("div",null,i)}const b=e(t,[["render",c]]);export{f as __pageData,b as default};
