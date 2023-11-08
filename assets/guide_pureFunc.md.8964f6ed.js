import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.1baa841b.js";const l="/immutable.png",h=JSON.parse('{"title":"Pure Function","description":"","frontmatter":{},"headers":[],"relativePath":"guide/pureFunc.md","filePath":"guide/pureFunc.md","lastUpdated":1699427685000}'),p={name:"guide/pureFunc.md"},o=e('<h1 id="pure-function" tabindex="-1">Pure Function <a class="header-anchor" href="#pure-function" aria-label="Permalink to &quot;Pure Function&quot;">​</a></h1><p>Immutable restrictions on function input parameters usually greatly increase the runtime burden.</p><p>This library provides a tool type named <code>Immutable</code>, tries to make this restriction with typescript and then there would be no performance loss when running.</p><p><img src="'+l+`" alt="immutable showcase"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>Immutable</code> has the second parameters to specify types to ignore.</p></div><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// \`Immutable\` will expand the input type.</span></span>
<span class="line"><span style="color:#6A737D;">// \`File\` is a builtin type, which is not equal to expaned \`File\`.</span></span>
<span class="line"><span style="color:#6A737D;">// You may need to ignore \`File\`, or it cannot satisfies another \`File\`.</span></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Immutable</span><span style="color:#E1E4E8;">&lt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">file</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">File</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">File</span></span>
<span class="line"><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// Res = {</span></span>
<span class="line"><span style="color:#6A737D;">//   readonly file: File</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// \`Immutable\` will expand the input type.</span></span>
<span class="line"><span style="color:#6A737D;">// \`File\` is a builtin type, which is not equal to expaned \`File\`.</span></span>
<span class="line"><span style="color:#6A737D;">// You may need to ignore \`File\`, or it cannot satisfies another \`File\`.</span></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Immutable</span><span style="color:#24292E;">&lt;</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">file</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">File</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">File</span></span>
<span class="line"><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// Res = {</span></span>
<span class="line"><span style="color:#6A737D;">//   readonly file: File</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span></code></pre></div>`,6),t=[o];function c(i,r,y,u,d,E){return n(),a("div",null,t)}const F=s(p,[["render",c]]);export{h as __pageData,F as default};
