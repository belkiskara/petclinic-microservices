!function(e,n){for(var t in n)e[t]=n[t]}(exports,function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=8)}([function(e,n){e.exports=require("vscode")},function(e,n){e.exports=require("path")},function(e,n){e.exports=require("crypto")},function(e,n,t){var o=t(2);e.exports=function(){return o.randomBytes(16)}},function(e,n){for(var t=[],o=0;o<256;++o)t[o]=(o+256).toString(16).substr(1);e.exports=function(e,n){var o=n||0,r=t;return[r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]]].join("")}},function(e,n){e.exports=require("fs")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const o=t(0);var r;!function(e){e.Trace="trace",e.Info="Info"}(r||(r={}));function s(e,n,t=" "){return t.repeat(Math.max(0,n-e.length))+e}const i=new class{constructor(){this.output=o.window.createOutputChannel("Account"),this.level=o.workspace.getConfiguration("microsoftAccount").get("logLevel")||r.Info,o.workspace.onDidChangeConfiguration(e=>{e.affectsConfiguration("microsoftAccount.logLevel")&&(this.level=o.workspace.getConfiguration("microsoftAccount").get("logLevel")||r.Info)})}data2String(e){return e instanceof Error?e.stack||e.message:!1===e.success&&e.message?e.message:e.toString()}info(e,n){this.logLevel("Info",e,n)}error(e,n){this.logLevel("Error",e,n)}trace(e,n){this.level===r.Trace&&this.logLevel("Trace",e,n)}logLevel(e,n,t){this.output.appendLine(`[${e}  - ${this.now()}] ${n}`),t&&this.output.appendLine(this.data2String(t))}now(){const e=new Date;return s(e.getUTCHours()+"",2,"0")+":"+s(e.getMinutes()+"",2,"0")+":"+s(e.getUTCSeconds()+"",2,"0")+"."+e.getMilliseconds()}};n.default=i},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,r,s,i,a,c,l=t(1),u=t(5),d=Object.prototype.toString;function f(e){return void 0!==e}function h(e){return"[object String]"===d.call(e)}function g(e){return JSON.parse(u.readFileSync(e,"utf8"))}function m(e,n){return c&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===n.length?e:e.replace(/\{(\d+)\}/g,function(e,t){var o=t[0],r=n[o],s=e;return"string"==typeof r?s=r:"number"!=typeof r&&"boolean"!=typeof r&&void 0!==r&&null!==r||(s=String(r)),s})}function p(e){return function(n,t){for(var o=[],r=2;r<arguments.length;r++)o[r-2]=arguments[r];return function(e){return"[object Number]"===d.call(e)}(n)?n>=e.length?void console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: "+new Error("").stack):m(e[n],o):h(t)?(console.warn("Message "+t+" didn't get externalized correctly."),m(t,o)):void console.error("Broken localize call found. Stacktrace is\n: "+new Error("").stack)}}function v(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];return m(n,t)}function w(e,n){return i[e]=n,n}function y(e,n){var t,o=l.join(a.cacheRoot,e.id+"-"+e.hash+".json"),r=!1,s=!1;try{return t=JSON.parse(u.readFileSync(o,{encoding:"utf8",flag:"r"})),function(e){var n=new Date;u.utimes(e,n,n,function(){})}(o),t}catch(e){if("ENOENT"===e.code)s=!0;else{if(!(e instanceof SyntaxError))throw e;console.log("Syntax error parsing message bundle: "+e.message+"."),u.unlink(o,function(e){e&&console.error("Deleting corrupted bundle "+o+" failed.")}),r=!0}}if(!(t=function(e,n){var t=a.translationsConfig[e.id];if(t){var o=g(t).contents,r=g(l.join(n,"nls.metadata.json")),s=Object.create(null);for(var i in r){var c=r[i],u=o[e.outDir+"/"+i];if(u){for(var d=[],f=0;f<c.keys.length;f++){var m=c.keys[f],p=u[h(m)?m:m.key];void 0===p&&(p=c.messages[f]),d.push(p)}s[i]=d}else s[i]=c.messages}return s}}(e,n))||r)return t;if(s)try{u.writeFileSync(o,JSON.stringify(t),{encoding:"utf8",flag:"wx"})}catch(e){if("EEXIST"===e.code)return t;throw e}return t}function k(e){try{return function(e){var n=g(l.join(e,"nls.metadata.json")),t=Object.create(null);for(var o in n){var r=n[o];t[o]=r.messages}return t}(e)}catch(e){return void console.log("Generating default bundle from meta data failed.",e)}}function _(e,n){var t;if(!0===a.languagePackSupport&&void 0!==a.cacheRoot&&void 0!==a.languagePackId&&void 0!==a.translationsConfigFile&&void 0!==a.translationsConfig)try{t=y(e,n)}catch(e){console.log("Load or create bundle failed ",e)}if(!t){if(a.languagePackSupport)return k(n);var o=function(e){for(var n=a.language;n;){var t=l.join(e,"nls.bundle."+n+".json");if(u.existsSync(t))return t;var o=n.lastIndexOf("-");n=o>0?n.substring(0,o):void 0}if(void 0===n&&(t=l.join(e,"nls.bundle.json"),u.existsSync(t)))return t}(n);if(o)try{return g(o)}catch(e){console.log("Loading in the box message bundle failed.",e)}t=k(n)}return t}function S(e){if(!e)return v;var n=l.extname(e);if(n&&(e=e.substr(0,e.length-n.length)),a.messageFormat===o.both||a.messageFormat===o.bundle){var t=function(e){for(var n,t=l.dirname(e);n=l.join(t,"nls.metadata.header.json"),!u.existsSync(n);){var o=l.dirname(t);if(o===t){n=void 0;break}t=o}return n}(e);if(t){var r=l.dirname(t),s=i[r];if(void 0===s)try{var d=JSON.parse(u.readFileSync(t,"utf8"));try{var h=_(d,r);s=w(r,h?{header:d,nlsBundle:h}:null)}catch(e){console.error("Failed to load nls bundle",e),s=w(r,null)}}catch(e){console.error("Failed to read header file",e),s=w(r,null)}if(s){var m=e.substr(r.length+1).replace(/\\/g,"/"),y=s.nlsBundle[m];return void 0===y?(console.error("Messages for file "+e+" not found. See console for details."),function(){return"Messages not found."}):p(y)}}}if(a.messageFormat===o.both||a.messageFormat===o.file)try{var k=g(function(e){var n;if(a.cacheLanguageResolution&&n)n=n;else{if(c||!a.language)n=".nls.json";else for(var t=a.language;t;){var o=".nls."+t+".json";if(u.existsSync(e+o)){n=o;break}var r=t.lastIndexOf("-");r>0?t=t.substring(0,r):(n=".nls.json",t=null)}a.cacheLanguageResolution&&(n=n)}return e+n}(e));return Array.isArray(k)?p(k):f(k.messages)&&f(k.keys)?p(k.messages):(console.error("String bundle '"+e+"' uses an unsupported format."),function(){return"File bundle has unsupported format. See console for details"})}catch(e){"ENOENT"!==e.code&&console.error("Failed to load single file bundle",e)}return console.error("Failed to load message bundle for file "+e),function(){return"Failed to load message bundle. See console for details."}}!function(e){e.file="file",e.bundle="bundle",e.both="both"}(o=n.MessageFormat||(n.MessageFormat={})),function(e){e.standalone="standalone",e.languagePack="languagePack"}(r=n.BundleFormat||(n.BundleFormat={})),function(e){e.is=function(e){var n=e;return n&&f(n.key)&&f(n.comment)}}(s||(s={})),function(){if(a={locale:void 0,language:void 0,languagePackSupport:!1,cacheLanguageResolution:!0,messageFormat:o.bundle},h(process.env.VSCODE_NLS_CONFIG))try{var e=JSON.parse(process.env.VSCODE_NLS_CONFIG),n=void 0;if(e.availableLanguages){var t=e.availableLanguages["*"];h(t)&&(n=t)}if(h(e.locale)&&(a.locale=e.locale.toLowerCase()),void 0===n?a.language=a.locale:"en"!==n&&(a.language=n),function(e){return!0===e||!1===e}(e._languagePackSupport)&&(a.languagePackSupport=e._languagePackSupport),h(e._cacheRoot)&&(a.cacheRoot=e._cacheRoot),h(e._languagePackId)&&(a.languagePackId=e._languagePackId),h(e._translationsConfigFile)){a.translationsConfigFile=e._translationsConfigFile;try{a.translationsConfig=g(a.translationsConfigFile)}catch(n){e._corruptedFile&&u.writeFile(e._corruptedFile,"corrupted","utf8",function(e){console.error(e)})}}}catch(e){}c="pseudo"===a.locale,void 0,i=Object.create(null)}(),n.loadMessageBundle=S,n.config=function(e){return e&&(h(e.locale)&&(a.locale=e.locale.toLowerCase(),a.language=a.locale,void 0,i=Object.create(null)),void 0!==e.messageFormat&&(a.messageFormat=e.messageFormat),e.bundleFormat===r.standalone&&!0===a.languagePackSupport&&(a.languagePackSupport=!1)),c="pseudo"===a.locale,S}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.deactivate=n.activate=n.DEFAULT_SCOPES=void 0;const o=t(0),r=t(9),s=t(7).loadMessageBundle(t(1).join(__dirname,"extension.ts"));n.DEFAULT_SCOPES="https://management.core.windows.net/.default offline_access",n.activate=async function(e){const t=new r.AzureActiveDirectoryService;await t.initialize(),e.subscriptions.push(o.authentication.registerAuthenticationProvider({id:"microsoft",displayName:"Microsoft",onDidChangeSessions:r.onDidChangeSessions.event,getSessions:()=>Promise.resolve(t.sessions),login:async e=>{try{await t.login(e.sort().join(" "));const n=t.sessions[t.sessions.length-1];return r.onDidChangeSessions.fire({added:[n.id],removed:[],changed:[]}),t.sessions[0]}catch(e){throw e}},logout:async e=>{await t.logout(e),r.onDidChangeSessions.fire({added:[],removed:[e],changed:[]}),o.window.showInformationMessage(s(0,null))}})),e.subscriptions.push(o.commands.registerCommand("microsoft.signin",()=>t.login(n.DEFAULT_SCOPES))),e.subscriptions.push(o.commands.registerCommand("microsoft.signout",async()=>{const e=t.sessions;if(0===e.length)return;if(1===e.length){const e=t.sessions[0].id;return await t.logout(e),r.onDidChangeSessions.fire({added:[],removed:[e],changed:[]}),void o.window.showInformationMessage(s(1,null))}const n=await o.window.showQuickPick(e.map(e=>({id:e.id,label:e.accountName})));return n?(await t.logout(n.id),r.onDidChangeSessions.fire({added:[],removed:[n.id],changed:[]}),void o.window.showInformationMessage(s(2,null))):void 0}))},n.deactivate=function(){}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.AzureActiveDirectoryService=n.REFRESH_NETWORK_FAILURE=n.onDidChangeSessions=void 0;const o=t(2),r=t(10),s=t(11),i=t(0),a=t(12),c=t(15),l=t(18),u=t(6),d=t(20),f="https://vscode-redirect.azurewebsites.net/",h="https://login.microsoftonline.com/",g="aebc6443-996d-45c2-90f0-388ff96faa56",m="organizations";n.onDidChangeSessions=new i.EventEmitter,n.REFRESH_NETWORK_FAILURE="Network failure";class p extends i.EventEmitter{handleUri(e){this.fire(e)}}n.AzureActiveDirectoryService=class{constructor(){this._tokens=[],this._refreshTimeouts=new Map,this._uriHandler=new p,i.window.registerUriHandler(this._uriHandler)}async initialize(){const e=await l.keychain.getToken();if(e)try{const t=this.parseStoredData(e).map(async e=>{try{await this.refreshToken(e.refreshToken,e.scope,e.id)}catch(t){t.message===n.REFRESH_NETWORK_FAILURE?await this.handleRefreshNetworkError(e.id,e.refreshToken,e.scope)||(this._tokens.push({accessToken:void 0,refreshToken:e.refreshToken,accountName:e.accountName,scope:e.scope,sessionId:e.id}),this.pollForReconnect(e.id,e.refreshToken,e.scope)):await this.logout(e.id)}});await Promise.all(t)}catch(e){u.default.info("Failed to initialize stored data"),await this.clearSessions()}this.pollForChange()}parseStoredData(e){return JSON.parse(e)}async storeTokenData(){const e=this._tokens.map(e=>({id:e.sessionId,refreshToken:e.refreshToken,scope:e.scope,accountName:e.accountName}));await l.keychain.setToken(JSON.stringify(e))}pollForChange(){setTimeout(async()=>{const e=[];let t=[];const o=await l.keychain.getToken();if(o)try{const r=this.parseStoredData(o);let s=r.map(async t=>{if(!this._tokens.some(e=>e.scope===t.scope&&e.sessionId===t.id))try{await this.refreshToken(t.refreshToken,t.scope,t.id),e.push(t.id)}catch(e){e.message===n.REFRESH_NETWORK_FAILURE||await this.logout(t.id)}});s=s.concat(this._tokens.map(async e=>{r.some(n=>e.scope===n.scope&&e.sessionId===n.id)||(await this.logout(e.sessionId),t.push(e.sessionId))})),await Promise.all(s)}catch(e){u.default.error(e.message),t=this._tokens.map(e=>e.sessionId),this.clearSessions()}else this._tokens.length&&(t=this._tokens.map(e=>e.sessionId),u.default.info("No stored keychain data, clearing local data"),this._tokens=[],this._refreshTimeouts.forEach(e=>{clearTimeout(e)}),this._refreshTimeouts.clear());(e.length||t.length)&&n.onDidChangeSessions.fire({added:e,removed:t,changed:[]}),this.pollForChange()},3e4)}convertToSession(e){return{id:e.sessionId,getAccessToken:()=>this.resolveAccessToken(e),accountName:e.accountName,scopes:e.scope.split(" ")}}async resolveAccessToken(e){if(e.accessToken&&(!e.expiresAt||e.expiresAt>Date.now()))return e.expiresAt?u.default.info(`Token available from cache, expires in ${e.expiresAt-Date.now()} milliseconds`):u.default.info("Token available from cache"),Promise.resolve(e.accessToken);try{u.default.info("Token expired or unavailable, trying refresh");const n=await this.refreshToken(e.refreshToken,e.scope,e.sessionId);if(n.accessToken)return n.accessToken;throw new Error}catch(e){throw new Error("Unavailable due to network problems")}throw new Error("Unavailable due to network problems")}getTokenClaims(e){try{return JSON.parse(Buffer.from(e.split(".")[1],"base64").toString())}catch(e){throw u.default.error(e.message),new Error("Unable to read token claims")}}get sessions(){return this._tokens.map(e=>this.convertToSession(e))}async login(e){if(u.default.info("Logging in..."),i.env.uiKind===i.UIKind.Web)return void await this.loginWithoutLocalServer(e);const n=o.randomBytes(16).toString("base64"),{server:t,redirectPromise:r,codePromise:s}=c.createServer(n);let a;try{const l=await c.startServer(t);i.env.openExternal(i.Uri.parse(`http://localhost:${l}/signin?nonce=${encodeURIComponent(n)}`));const p=await r;if("err"in p){const{err:e,res:n}=p;throw n.writeHead(302,{Location:`/?error=${encodeURIComponent(e&&e.message||"Unknown error")}`}),n.end(),e}const v=p.req.headers.host||"",w=(/^[^:]+:(\d+)$/.exec(Array.isArray(v)?v[0]:v)||[])[1],y=`${w?parseInt(w,10):l},${encodeURIComponent(n)}`,k=d.toBase64UrlEncoding(o.randomBytes(32).toString("base64")),_=d.toBase64UrlEncoding(o.createHash("sha256").update(k).digest("base64")),S=`${h}${m}/oauth2/v2.0/authorize?response_type=code&response_mode=query&client_id=${encodeURIComponent(g)}&redirect_uri=${encodeURIComponent(f)}&state=${y}&scope=${encodeURIComponent(e)}&prompt=select_account&code_challenge_method=S256&code_challenge=${_}`;await p.res.writeHead(302,{Location:S}),p.res.end();const T=await s,b=T.res;try{if("err"in T)throw T.err;a=await this.exchangeCodeForToken(T.code,k,e),this.setToken(a,e),u.default.info("Login successful"),b.writeHead(302,{Location:"/"}),b.end()}catch(e){throw b.writeHead(302,{Location:`/?error=${encodeURIComponent(e&&e.message||"Unknown error")}`}),b.end(),new Error(e.message)}}catch(n){throw u.default.error(n.message),"Error listening to server"!==n.message&&"Closed"!==n.message&&"Timeout waiting for port"!==n.message||await this.loginWithoutLocalServer(e),new Error(n.message)}finally{setTimeout(()=>{t.close()},5e3)}}getCallbackEnvironment(e){switch(e.authority){case"online.visualstudio.com":return"vso,";case"online-ppe.core.vsengsaas.visualstudio.com":return"vsoppe,";case"online.dev.core.vsengsaas.visualstudio.com":return"vsodev,";default:return""}}async loginWithoutLocalServer(e){const n=await i.env.asExternalUri(i.Uri.parse(`${i.env.uriScheme}://vscode.vscode-account`)),t=o.randomBytes(16).toString("base64"),r=(n.authority.match(/:([0-9]*)$/)||[])[1]||("https"===n.scheme?443:80),s=`${this.getCallbackEnvironment(n)}${r},${encodeURIComponent(t)},${encodeURIComponent(n.query)}`,a=`${h}${m}/oauth2/v2.0/authorize`;let c=i.Uri.parse(a);const l=d.toBase64UrlEncoding(o.randomBytes(32).toString("base64")),u=d.toBase64UrlEncoding(o.createHash("sha256").update(l).digest("base64"));c=c.with({query:`response_type=code&client_id=${encodeURIComponent(g)}&response_mode=query&redirect_uri=${f}&state=${s}&scope=${e}&prompt=select_account&code_challenge_method=S256&code_challenge=${u}`}),i.env.openExternal(c);const p=new Promise((e,n)=>{const t=setTimeout(()=>{clearTimeout(t),n("Login timed out.")},3e5)});return Promise.race([this.handleCodeResponse(s,l,e),p])}async handleCodeResponse(e,n,t){let o;return new Promise((r,s)=>{o=this._uriHandler.event(async o=>{try{const i=function(e){return e.query.split("&").reduce((e,n)=>{const t=n.split("=");return e[t[0]]=t[1],e},{})}(o),a=i.code;if(i.state!==e&&decodeURIComponent(i.state)!==e)throw new Error("State does not match.");const c=await this.exchangeCodeForToken(a,n,t);this.setToken(c,t),r(c)}catch(e){s(e)}})}).then(e=>(o.dispose(),e)).catch(e=>{throw o.dispose(),e})}async setToken(e,t){const o=this._tokens.findIndex(n=>n.sessionId===e.sessionId);o>-1?this._tokens.splice(o,1,e):this._tokens.push(e),this.clearSessionTimeout(e.sessionId),e.expiresIn&&this._refreshTimeouts.set(e.sessionId,setTimeout(async()=>{try{await this.refreshToken(e.refreshToken,t,e.sessionId),n.onDidChangeSessions.fire({added:[],removed:[],changed:[e.sessionId]})}catch(o){o.message===n.REFRESH_NETWORK_FAILURE?await this.handleRefreshNetworkError(e.sessionId,e.refreshToken,t)||this.pollForReconnect(e.sessionId,e.refreshToken,e.scope):(await this.logout(e.sessionId),n.onDidChangeSessions.fire({added:[],removed:[e.sessionId],changed:[]}))}},1e3*(parseInt(e.expiresIn)-30))),this.storeTokenData()}getTokenFromResponse(e,n,t){const o=JSON.parse(Buffer.concat(e).toString()),r=this.getTokenClaims(o.access_token);return{expiresIn:o.expires_in,expiresAt:o.expires_in?Date.now()+1e3*o.expires_in:void 0,accessToken:o.access_token,refreshToken:o.refresh_token,scope:n,sessionId:t||`${r.tid}/${r.oid||r.altsecid||""+r.ipd||""}/${a()}`,accountName:r.email||r.unique_name||"user@example.com"}}async exchangeCodeForToken(e,n,t){return new Promise((o,a)=>{u.default.info("Exchanging login code for token");try{const c=s.stringify({grant_type:"authorization_code",code:e,client_id:g,scope:t,code_verifier:n,redirect_uri:f}),l=i.Uri.parse(`${h}${m}/oauth2/v2.0/token`),d=r.request({host:l.authority,path:l.path,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Content-Length":c.length}},e=>{const n=[];e.on("data",e=>{n.push(e)}),e.on("end",()=>{200===e.statusCode?(u.default.info("Exchanging login code for token success"),o(this.getTokenFromResponse(n,t))):(u.default.error("Exchanging login code for token failed"),a(new Error("Unable to login.")))})});d.write(c),d.end(),d.on("error",e=>{a(e)})}catch(e){u.default.error(e.message),a(e)}})}async refreshToken(e,t,o){return new Promise((i,a)=>{u.default.info("Refreshing token...");const c=s.stringify({refresh_token:e,client_id:g,grant_type:"refresh_token",scope:t}),l=r.request({host:"login.microsoftonline.com",path:`/${m}/oauth2/v2.0/token`,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Content-Length":c.length}},e=>{const n=[];e.on("data",e=>{n.push(e)}),e.on("end",async()=>{if(200===e.statusCode){const e=this.getTokenFromResponse(n,t,o);this.setToken(e,t),u.default.info("Token refresh success"),i(e)}else u.default.error("Refreshing token failed"),a(new Error("Refreshing token failed."))})});l.write(c),l.end(),l.on("error",e=>{u.default.error(e.message),a(new Error(n.REFRESH_NETWORK_FAILURE))})})}clearSessionTimeout(e){const n=this._refreshTimeouts.get(e);n&&(clearTimeout(n),this._refreshTimeouts.delete(e))}removeInMemorySessionData(e){const n=this._tokens.findIndex(n=>n.sessionId===e);n>-1&&this._tokens.splice(n,1),this.clearSessionTimeout(e)}pollForReconnect(e,n,t){this.clearSessionTimeout(e),this._refreshTimeouts.set(e,setTimeout(async()=>{try{await this.refreshToken(n,t,e)}catch(o){this.pollForReconnect(e,n,t)}},18e5))}handleRefreshNetworkError(e,t,o,r=1){return new Promise((s,i)=>{if(3===r)return u.default.error("Token refresh failed after 3 attempts"),s(!1);if(1===r){const t=this._tokens.find(n=>n.sessionId===e);t&&(t.accessToken=void 0,n.onDidChangeSessions.fire({added:[],removed:[],changed:[t.sessionId]}))}const a=5*r*r;this.clearSessionTimeout(e),this._refreshTimeouts.set(e,setTimeout(async()=>{try{return await this.refreshToken(t,o,e),s(!0)}catch(n){return s(await this.handleRefreshNetworkError(e,t,o,r+1))}},1e3*a))})}async logout(e){u.default.info(`Logging out of session '${e}'`),this.removeInMemorySessionData(e),0===this._tokens.length?await l.keychain.deleteToken():this.storeTokenData()}async clearSessions(){u.default.info("Logging out of all sessions"),this._tokens=[],await l.keychain.deleteToken(),this._refreshTimeouts.forEach(e=>{clearTimeout(e)}),this._refreshTimeouts.clear()}}},function(e,n){e.exports=require("https")},function(e,n){e.exports=require("querystring")},function(e,n,t){var o=t(13),r=t(14),s=r;s.v1=o,s.v4=r,e.exports=s},function(e,n,t){var o,r,s=t(3),i=t(4),a=0,c=0;e.exports=function(e,n,t){var l=n&&t||0,u=n||[],d=(e=e||{}).node||o,f=void 0!==e.clockseq?e.clockseq:r;if(null==d||null==f){var h=s();null==d&&(d=o=[1|h[0],h[1],h[2],h[3],h[4],h[5]]),null==f&&(f=r=16383&(h[6]<<8|h[7]))}var g=void 0!==e.msecs?e.msecs:(new Date).getTime(),m=void 0!==e.nsecs?e.nsecs:c+1,p=g-a+(m-c)/1e4;if(p<0&&void 0===e.clockseq&&(f=f+1&16383),(p<0||g>a)&&void 0===e.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=g,c=m,r=f;var v=(1e4*(268435455&(g+=122192928e5))+m)%4294967296;u[l++]=v>>>24&255,u[l++]=v>>>16&255,u[l++]=v>>>8&255,u[l++]=255&v;var w=g/4294967296*1e4&268435455;u[l++]=w>>>8&255,u[l++]=255&w,u[l++]=w>>>24&15|16,u[l++]=w>>>16&255,u[l++]=f>>>8|128,u[l++]=255&f;for(var y=0;y<6;++y)u[l+y]=d[y];return n||i(u)}},function(e,n,t){var o=t(3),r=t(4);e.exports=function(e,n,t){var s=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||o)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,n)for(var a=0;a<16;++a)n[s+a]=i[a];return n||r(i)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.createServer=n.startServer=n.createTerminateServer=n.assertIsDefined=n.isUndefinedOrNull=n.isUndefined=void 0;const o=t(16),r=t(17),s=t(5),i=t(1),a={number:"number",string:"string",undefined:"undefined",object:"object",function:"function"};function c(e){return typeof e===a.undefined}function l(e){return c(e)||null===e}function u(e){if(l(e))throw new Error("Assertion Failed: argument is undefined or null");return e}function d(e,n,t){s.readFile(n,(n,o)=>{n?(console.error(n),e.writeHead(404),e.end()):(e.writeHead(200,{"Content-Length":o.length,"Content-Type":t}),e.end(o))})}n.isUndefined=c,n.isUndefinedOrNull=l,n.assertIsDefined=u,n.createTerminateServer=function(e){const n={};let t=0;return e.on("connection",e=>{const o=t++;n[o]=e,e.on("close",()=>{delete n[o]})}),async()=>{const t=new Promise(n=>e.close(n));for(const e in n)n[e].destroy();return t}},n.startServer=async function(e){let n;function t(){clearTimeout(n)}const o=new Promise((t,o)=>{n=setTimeout(()=>{o(new Error("Timeout waiting for port"))},5e3),e.on("listening",()=>{const n=e.address();t("string"==typeof n?n:u(n).port.toString())}),e.on("error",e=>{o(new Error("Error listening to server"))}),e.on("close",()=>{o(new Error("Closed"))}),e.listen(0)});return o.then(t,t),o},n.createServer=function(e){let n;const t=new Promise((e,t)=>n={resolve:e,reject:t});let s;const a=new Promise((e,n)=>s={resolve:e,reject:n}),c=setTimeout(()=>{s.reject(new Error("Timeout waiting for code"))},3e5);function l(){clearTimeout(c)}const u=o.createServer(function(t,o){const a=r.parse(t.url,!0);switch(a.pathname){case"/signin":if((a.query.nonce||"").replace(/ /g,"+")===e)n.resolve({req:t,res:o});else{const e=new Error("Nonce does not match.");n.resolve({err:e,res:o})}break;case"/":d(o,i.join(__dirname,"../media/auth.html"),"text/html; charset=utf-8");break;case"/auth.css":d(o,i.join(__dirname,"../media/auth.css"),"text/css; charset=utf-8");break;case"/callback":s.resolve(async function(e,n){const t=n.query;if(!t||"string"==typeof t)throw new Error("No query received.");let o=t.error_description||t.error;o||((t.state||"").split(",")[1]||"").replace(/ /g,"+")!==e&&(o="Nonce does not match.");const r=t.code;if(!o&&r)return r;throw new Error(o||"No code received.")}(e,a).then(e=>({code:e,res:o}),e=>({err:e,res:o})));break;default:o.writeHead(404),o.end()}});return a.then(l,l),{server:u,redirectPromise:t,codePromise:a}}},function(e,n){e.exports=require("http")},function(e,n){e.exports=require("url")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.keychain=n.Keychain=void 0;const o=t(0),r=t(6),s=t(7).loadMessageBundle(t(1).join(__dirname,"keychain.ts"));const i=`${o.env.uriScheme}-vscode.login`,a="account";class c{constructor(){const e=function(){try{return t(19)}catch(e){console.log(e)}}();if(!e)throw new Error("System keychain unavailable");this.keytar=e}async setToken(e){try{return r.default.trace("Writing to keychain",e),await this.keytar.setPassword(i,a,e)}catch(e){r.default.error(`Setting token failed: ${e}`);const n=s(0,null);await o.window.showErrorMessage(s(1,null,e.message),n)===n&&o.env.openExternal(o.Uri.parse("https://code.visualstudio.com/docs/editor/settings-sync#_troubleshooting-keychain-issues"))}}async getToken(){try{const e=await this.keytar.getPassword(i,a);return r.default.trace("Reading from keychain",e),e}catch(e){return r.default.error(`Getting token failed: ${e}`),Promise.resolve(void 0)}}async deleteToken(){try{return await this.keytar.deletePassword(i,a)}catch(e){return r.default.error(`Deleting token failed: ${e}`),Promise.resolve(void 0)}}}n.Keychain=c,n.keychain=new c},function(e,n){e.exports=require("keytar")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.toBase64UrlEncoding=void 0,n.toBase64UrlEncoding=function(e){return e.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}}]));
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/2aae1f26c72891c399f860409176fe435a154b13/extensions/vscode-account/dist/extension.js.map