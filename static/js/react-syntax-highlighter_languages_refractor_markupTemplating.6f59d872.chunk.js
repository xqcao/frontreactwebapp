"use strict";(self.webpackChunkfrontreactwebapp=self.webpackChunkfrontreactwebapp||[]).push([[3047],{595:function(e){function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"===typeof o&&!o(e))return e;for(var r,u=c.length;-1!==t.code.indexOf(r=n(a,u));)++u;return c[u]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,o=Object.keys(t.tokenStack);!function c(u){for(var i=0;i<u.length&&!(r>=o.length);i++){var p=u[i];if("string"===typeof p||p.content&&"string"===typeof p.content){var s=o[r],l=t.tokenStack[s],f="string"===typeof p?p:p.content,g=n(a,s),k=f.indexOf(g);if(k>-1){++r;var h=f.substring(0,k),m=new e.Token(a,e.tokenize(l,t.grammar),"language-"+a,l),d=f.substring(k+g.length),y=[];h&&y.push.apply(y,c([h])),y.push(m),d&&y.push.apply(y,c([d])),"string"===typeof p?u.splice.apply(u,[i,1].concat(y)):p.content=y}}else p.content&&c(p.content)}return u}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.6f59d872.chunk.js.map