function cripple_window(t){if(!t)return;let e=new Map(Object.entries({functions_to_hide:new WeakMap,strings_to_hide:[],hidden_globals:[],init:!1})),o=function(t,o,n){e.get("hidden_globals").push(o),Object.defineProperty(t,o,{enumberable:!1,configurable:!1,writable:!0,value:n})},n={};try{"Hack by hrt + ttap. Menu by Katistic."!=window.top.document.getElementById("instructions").innerHTML&&(window.top.document.getElementById("instructions").innerHTML="Hack by hrt + ttap. Menu by Katistic.")}catch{}t.top["ttap#4547"]?e=t.top["ttap#4547"]:o(t.top,"ttap#4547",e);const l=t.Function.prototype.toString;let a=new Proxy(l,{apply:function(t,o,n){try{var l=Function.prototype.apply.apply(t,[o,n])}catch(t){throw t.stack=t.stack.replace(/\n.*Object\.apply \(<.*/,""),t}let a=e.get("functions_to_hide").get(o);if(a)return Function.prototype.apply.apply(t,[a,n]);for(var i=0;i<e.get("strings_to_hide").length;i++)l=l.replace(e.get("strings_to_hide")[i].from,e.get("strings_to_hide")[i].to);return l}});t.Function.prototype.toString=a;let i=function(t,o){e.get("functions_to_hide").set(o,t)};const c=t.Object.getOwnPropertyDescriptors;let s=new Proxy(c,{apply:function(t,o,n){try{var l=Function.prototype.apply.apply(t,[o,n])}catch(t){throw t.stack=t.stack.replace(/\n.*Object\.apply \(<.*/,""),t}for(var a=0;a<e.get("hidden_globals").length;a++)delete l[e.get("hidden_globals")[a]];return l}});t.Object.getOwnPropertyDescriptors=s;let w=function(){};const r=t.CanvasRenderingContext2D.prototype.clearRect;let p=new Proxy(r,{apply:function(t,e,o){try{var n=Function.prototype.apply.apply(t,[e,o])}catch(t){throw t.stack=t.stack.replace(/\n.*Object\.apply \(<.*/,""),t}return w(e),n}});t.CanvasRenderingContext2D.prototype.clearRect=p;const h=t.open;let d=new Proxy(h,{apply:function(t,e,o){try{Function.prototype.apply.apply(t,[e,o])}catch(t){throw t.stack=t.stack.replace(/\n.*Object\.apply \(<.*/,""),t}return null}});t.open=d,e.get("hrt")||e.set("hrt",function(l,a,i,c,s){let r=i.controls;r.scrollDelta&&(r.skipScroll=r.scrollToSwap,r.scrollToSwap||r.fakeKey(2e4,1)),r.scrollDelta=0,r.wSwap=0;const p=2*Math.PI;let h=function(t){return!l.team||t.team!=l.team},d=function(t){return(t%p+p)%p},u=function(t,e,o,n){return Math.atan2(e-n,t-o)},y=function(t,e,o,n,l,a){let i=t-n,c=e-l,s=o-a;return Math.sqrt(i*i+c*c+s*s)},g=function(t,e,o,n,l,a){let i=Math.abs(e-l),c=y(t,e,o,n,l,a);return Math.asin(i/c)*(e>l?-1:1)},m=function(t){return function(t,e,o){let n=d(u(r.object.position.z,r.object.position.x,o,t)),l=g(r.object.position.x,r.object.position.y,r.object.position.z,t,e,o),a=d(r.object.rotation.y),i=r[pchObjc].rotation.x,c=Math.min(Math.abs(n-a),Math.abs(n-a-p),Math.abs(n-a+p)),s=l-i;return Math.hypot(c,s)}(t.x3,t.y3+11-1.5-3*t.crouchVal,t.z3)},b=function(t){let e=function(t){return y(t.x3,t.y3,t.z3,l.x,l.y,l.z)}(t);return l.weapon.range>=e&&("Shotgun"!=l.weapon.name||e<70)&&("Akimbo Uzi"!=l.weapon.name||e<100)},f=null,k=1/0,x=i.players.list;for(var v=0;l.active&&v<x.length;v++){let t=x[v];if(t[isYou]||!t.active||!t[objInstances]||!h(t))continue;if(t.x3=t.x,t.y3=t.y,t.z3=t.z,!b(t)||(S=t,null!=i[canSee](l,S.x3,S.y3-3*S.crouchVal,S.z3)))continue;let e=m(t);e<k&&(k=e,f=t)}var S;let j=r.object.rotation.y,M=r[pchObjc].rotation.x;if(f&&window[n.toggles].aimbot.checked){let t=f,e=t.y3+11-1-3*t.crouchVal;l.weapon.nAuto&&l.didShoot?a[5]=0:l.aimVal?a[6]=1:(a[5]=1,a[6]=1,window[n.toggles].ss.checked&&"Sniper Rifle"==l.weapon.name&&(window[n.toggles].aimbot.checked=0)),j=u(r.object.position.z,r.object.position.x,t.z3,t.x3),M=g(r.object.position.x,r.object.position.y,r.object.position.z,t.x3,e,t.z3),M-=.3*l[recoilAnimY]}else a[5]=r[mouseDownL],a[6]=r[mouseDownR];a[3]=+(M%p).toFixed(3),a[2]=+(j%p).toFixed(3);try{window[n.toggles].autoreload.checked&&(r.keys[r.reloadKey]=1*!(void 0===l.ammos[l.weaponIndex]||0!=l.ammos[l.weaponIndex]))}catch{}try{window[n.toggles].bhop.checked&&(a[7]=1*(r.keys[r.jumpKey]&&!l.didJump))}catch{}if(!e.get("init")){e.set("init",!0);const l=t.top.document.getElementById("mapInfoHolder").getElementsByTagName("div")[3],a=t.top.document.createElement("form");a.setAttribute("style","width: 600px; height: 60px; line-height: 90%;"),a.innerHTML='<input type="checkbox" name="aimbot" value="true" id="aimbot"><label style="color: white; font-size: small;" for="aimbot"> AIMBOT (1) </label><input type="checkbox" name="autoreload" value="true" id="autoreload"><label style="color: white; font-size: small;" for="autoreload"> AUTORELOAD (2) </label><input type="checkbox" name="bhop" value="true" id="bhop"><label style="color: white; font-size: small;" for="bhop"> BHOP (3) </label><input type="checkbox" name="chems" value="true" id="chems"><label style="color: white; font-size: small;" for="chems"> CHEMS (4) </label><input type="checkbox" name="esp" value="true" id="esp" checked><label style="color: white; font-size: small;" for="esp"> ESP (5) </label><br><input type="checkbox" name="ss" value="true" id="ss"><label style="color: white; font-size: small;" for="ss"> SAFE SNIPER AIMBOT (6) </label>',t.top.document.getElementById("mapInfoHolder").replaceChild(a,l),n.toggles=function(){let t=new Uint8Array(20);return crypto.getRandomValues(t),"hrt"+Array.from(t,t=>("0"+t.toString(16)).substr(-2)).join("")}();const c={aimbot:t.top.document.getElementById("aimbot"),autoreload:t.top.document.getElementById("autoreload"),bhop:t.top.document.getElementById("bhop"),esp:t.top.document.getElementById("esp"),chems:t.top.document.getElementById("chems"),ss:t.top.document.getElementById("ss")};_=n.toggles,o(window,_,c),w=function(e){r.keys[49]?(r.keys[49]=0,t.SOUND.play("tick_0",.1),window[n.toggles].aimbot.checked=!window[n.toggles].aimbot.checked):r.keys[50]?(r.keys[50]=0,t.SOUND.play("tick_0",.1),window[n.toggles].autoreload.checked=!window[n.toggles].autoreload.checked):r.keys[51]?(r.keys[51]=0,t.SOUND.play("tick_0",.1),window[n.toggles].bhop.checked=!window[n.toggles].bhop.checked):r.keys[52]?(r.keys[52]=0,t.SOUND.play("tick_0",.1),window[n.toggles].chems.checked=!window[n.toggles].chems.checked):r.keys[53]?(r.keys[53]=0,t.SOUND.play("tick_0",.1),window[n.toggles].esp.checked=!window[n.toggles].esp.checked):r.keys[54]&&(r.keys[54]=0,t.SOUND.play("tick_0",.1),window[n.toggles].ss.checked=!window[n.toggles].ss.checked);let o=arguments.callee.caller.caller.arguments[0],l=arguments.callee.caller.caller.arguments[2],a=e.canvas.width/o,c=e.canvas.height/o,s=l.camera.getWorldPosition();for(var w=0;w<i.players.list.length;w++){i.players.list[w];let t=x[w];if(t[isYou]||!t.active||!t[objInstances]||!h(t))continue;let o=1/0,r=-1/0,g=1/0,m=-1/0,b=!1;for(var p=-1;!b&&p<2;p+=2)for(var d=-1;!b&&d<2;d+=2)for(var u=0;!b&&u<2;u++){let e=t[objInstances].position.clone();if(e.x+=p*((5.2-.1)/2),e.z+=d*((5.2-.1)/2),e.y+=u*(11-3*t.crouchVal),!l.frustum.containsPoint(e)){b=!0;break}e.project(l.camera),o=Math.min(o,e.x),r=Math.max(r,e.x),g=Math.min(g,e.y),m=Math.max(m,e.y)}if(b)continue;o=(o+1)/2,g=(g+1)/2,r=(r+1)/2,m=(m+1)/2,e.save();const f=e.strokeStyle,k=e.lineWidth,v=e.font,S=e.fillStyle;e.lineWidth=5,e.strokeStyle="rgba(255,50,50,1)";let j=Math.max(.3,1-y(s.x,s.y,s.z,t.x,t.y,t.z)/600);e.scale(j,j);let M=a/j,_=c/j;if(g=_*(1-g),m=_*(1-m),o*=M,r*=M,window[n.toggles].esp.checked&&(e.beginPath(),e.moveTo(o,g),e.lineTo(o,m),e.lineTo(r,m),e.lineTo(r,g),e.lineTo(o,g),e.stroke()),window[n.toggles].esp.checked){e.fillStyle="rgba(255,50,50,1)";let n=m-g;e.fillRect(o-7,g,-10,n),e.fillStyle="#00FFFF",e.fillRect(o-7,g,-10,n*(t.health/t.maxHealth))}e.font="60px Sans-serif",e.fillStyle="white",e.strokeStyle="black",e.lineWidth=1;let I=r+7,O=m;if(window[n.toggles].esp.checked&&(e.fillText(t.name,I,O),e.strokeText(t.name,I,O)),e.font="30px Sans-serif",O+=35,window[n.toggles].esp.checked&&(e.fillText(t.weapon.name,I,O),e.strokeText(t.weapon.name,I,O)),O+=35,window[n.toggles].esp.checked&&(e.fillText(t.health+" HP",I,O),e.strokeText(t.health+" HP",I,O)),e.strokeStyle=f,e.lineWidth=k,e.font=v,e.fillStyle=S,e.restore(),window[n.toggles].chems.checked){if(t.legMeshes[0]){let e=t.legMeshes[0].material;e.alphaTest=1,e.depthTest=!1,e.fog=!1,e.emissive.g=1,e.wireframe=!0}}else if(t.legMeshes[0]){let e=t.legMeshes[0].material;e.alphaTest=0,e.depthTest=!0,e.fog=!0,e.emissive.g=0,e.wireframe=!1}}}}var _});const u={apply:function(o,n,l){try{var a=Function.prototype.apply.apply(o,[n,l])}catch(t){throw t.stack=t.stack.replace(/\n.*Object\.apply \(<.*/,""),t}if(2==l.length&&l[1].length>parseInt("1337 ttap#4547")){let r=l[1];const p=r.match(/\w+\['exports'\]=(0[xX][0-9a-fA-F]+);/)[1];"0x17e87"!==p&&(t[atob("ZG9jdW1lbnQ=")][atob("d3JpdGU=")](atob("VmVyc2lvbiBtaXNzbWF0Y2gg")+p),t[atob("bG9jYXRpb24=")][atob("aHJlZg==")]=atob("aHR0cHM6Ly9naXRodWIuY29tL2hydC93aGVlbGNoYWly")),window.canSee=r.match(/,this\['(\w+)'\]=function\(\w+,\w+,\w+,\w+,\w+\){if\(!\w+\)return!\w+;/)[1],window.pchObjc=r.match(/\(\w+,\w+,\w+\),this\['(\w+)'\]=new \w+\['\w+'\]\(\)/)[1],window.objInstances=r.match(/\[\w+\]\['\w+'\]=!\w+,this\['\w+'\]\[\w+\]\['\w+'\]&&\(this\['\w+'\]\[\w+\]\['(\w+)'\]\['\w+'\]=!\w+/)[1],window.isYou=r.match(/,this\['\w+'\]=!\w+,this\['\w+'\]=!\w+,this\['(\w+)'\]=\w+,this\['\w+'\]\['length'\]=\w+,this\[/)[1],window.recoilAnimY=r.match(/\w*1,this\['\w+'\]=\w*0,this\['\w+'\]=\w*0,this\['\w+'\]=\w*1,this\['\w+'\]=\w*1,this\['\w+'\]=\w*0,this\['\w+'\]=\w*0,this\['(\w+)'\]=\w*0,this\['\w+'\]=\w*0,this\['\w+'\]=\w*0,this\['\w+'\]=\w*0,/)[1],window.mouseDownL=r.match(/this\['\w+'\]=function\(\){this\['(\w+)'\]=\w*0,this\['(\w+)'\]=\w*0,this\['\w+'\]={}/)[1],window.mouseDownR=r.match(/this\['\w+'\]=function\(\){this\['(\w+)'\]=\w*0,this\['(\w+)'\]=\w*0,this\['\w+'\]={}/)[2];const h=r.match(/\(\w+,\w*1\)\),\w+\['\w+'\]=\w*0,\w+\['\w+'\]=\w*0,!(\w+)\['\w+'\]&&\w+\['\w+'\]\['push'\]\((\w+)\),(\w+)\['\w+'\]/)[2],d=r.match(/\(\w+,\w*1\)\),\w+\['\w+'\]=\w*0,\w+\['\w+'\]=\w*0,!(\w+)\['\w+'\]&&\w+\['\w+'\]\['push'\]\((\w+)\),(\w+)\['\w+'\]/)[1],u=r.match(/\w+\['\w+'\]\),\w+\['\w+'\]\(\w+\['\w+'\],\w+\['\w+'\]\+\w+\['\w+'\]\*(\w+)/)[1],y=r.match(/\(\w+,\w*1\)\),\w+\['\w+'\]=\w*0,\w+\['\w+'\]=\w*0,!(\w+)\['\w+'\]&&\w+\['\w+'\]\['push'\]\((\w+)\),(\w+)\['\w+'\]/)[3],g=r.match(/\\x20\-50\%\)\\x20rotate\('\+\((\w+)\['\w+'\]\(\w+\[\w+\]\['\w+'\]/)[1],m=r.match(/(\w+\['\w+'\]&&\(\w+\['\w+'\]=\w+\['\w+'\],!\w+\['\w+'\]&&\w+\['\w+'\]\(\w+,\w*1\)\),\w+\['\w+'\]=\w*0,\w+\['\w+'\]=\w*0),!\w+\['\w+'\]&&\w+\['\w+'\]\['push'\]\(\w+\),\w+\['\w+'\]\(\w+,\w+,!\w*1,\w+\['\w+'\]\)/)[1];let b="top['ttap#4547'].get('hrt')("+[y,h,d,u,g].toString()+")";if(b.length+4>m.length)throw"WHEELCHAIR: target function too small "+[b.length,m.length];let f=m.match(/\s/g);for(var c=0;c<f&&f.length;c++)b+=f[c];for(b+="  ";b.length<m.length-2;)b+=" ";b+="  ",r=r.replace(m,b),s=m,w=b,e.get("strings_to_hide").push({from:new RegExp(w.replace(/([\[|\]|\(|\)|\*|\\|\.|\+])/g,"\\$1"),"g"),to:s});const k=l[1];l[1]=r;let x=Function.prototype.apply.apply(o,[n,l]);return l[1]=k,i(a,x),x}var s,w;return a}},y=t.Function;let g=new Proxy(y,u);t.Function=g,i(h,d),i(r,p),i(c,s),i(l,a),i(y,g)}cripple_window(window.parent);