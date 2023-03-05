(self.webpackChunkblobb_dapp_nft=self.webpackChunkblobb_dapp_nft||[]).push([[294,683],{6683:function(e,t,n){"use strict";n.r(t),n.d(t,{AlchemyProvider:function(){return v}});var r=n(1752),s=n(1120),i=n(136),o=n(9388),c=n(4165),a=n(5671),u=n(3144),l=n(6834),h=n(9083),f=n(8012),d=n(5889),p=(n(4569),function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;(0,a.Z)(this,e),this.sendBatchFn=t,this.maxBatchSize=n,this.pendingBatch=[]}return(0,u.Z)(e,[{key:"enqueueRequest",value:function(e){return(0,l._)(this,void 0,void 0,(0,c.Z)().mark((function t(){var n,r,s=this;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={request:e,resolve:void 0,reject:void 0},r=new Promise((function(e,t){n.resolve=e,n.reject=t})),this.pendingBatch.push(n),this.pendingBatch.length===this.maxBatchSize?this.sendBatchRequest():this.pendingBatchTimer||(this.pendingBatchTimer=setTimeout((function(){return s.sendBatchRequest()}),10)),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t,this)})))}},{key:"sendBatchRequest",value:function(){return(0,l._)(this,void 0,void 0,(0,c.Z)().mark((function e(){var t,n;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.pendingBatch,this.pendingBatch=[],this.pendingBatchTimer&&(clearTimeout(this.pendingBatchTimer),this.pendingBatchTimer=void 0),n=t.map((function(e){return e.request})),e.abrupt("return",this.sendBatchFn(n).then((function(e){t.forEach((function(t,n){var r=e[n];if(r.error){var s=new Error(r.error.message);s.code=r.error.code,s.data=r.error.data,t.reject(s)}else t.resolve(r.result)}))}),(function(e){t.forEach((function(t){t.reject(e)}))})));case 5:case"end":return e.stop()}}),e,this)})))}}]),e}()),v=function(e){(0,i.Z)(n,e);var t=(0,o.Z)(n);function n(e){var r;(0,a.Z)(this,n);var s=n.getApiKey(e.apiKey),i=n.getAlchemyNetwork(e.network),o=n.getAlchemyConnectionInfo(i,s,"http");void 0!==e.url&&(o.url=e.url),o.throttleLimit=e.maxRetries;var c=l.E[i];(r=t.call(this,o,c)).apiKey=e.apiKey,r.maxRetries=e.maxRetries,r.batchRequests=e.batchRequests;var u=Object.assign(Object.assign({},r.connection),{headers:Object.assign(Object.assign({},r.connection.headers),{"Alchemy-Ethers-Sdk-Method":"batchSend"})});return r.batcher=new p((function(e){return(0,d.rd)(u,JSON.stringify(e))})),r}return(0,u.Z)(n,[{key:"detectNetwork",value:function(){var e=this,t=Object.create(null,{detectNetwork:{get:function(){return(0,r.Z)((0,s.Z)(n.prototype),"detectNetwork",e)}}});return(0,l._)(this,void 0,void 0,(0,c.Z)().mark((function e(){var n;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(n=this.network)){e.next=7;break}return e.next=4,t.detectNetwork.call(this);case 4:if(n=e.sent){e.next=7;break}throw new Error("No network detected");case 7:return e.abrupt("return",n);case 8:case"end":return e.stop()}}),e,this)})))}},{key:"_startPending",value:function(){(0,l.l)("WARNING: Alchemy Provider does not support pending filters")}},{key:"isCommunityResource",value:function(){return this.apiKey===l.D}},{key:"send",value:function(e,t){return this._send(e,t,"send")}},{key:"_send",value:function(e,t,n){var r=this,s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i={method:e,params:t,id:this._nextId++,jsonrpc:"2.0"},o=Object.assign({},this.connection);if(o.headers["Alchemy-Ethers-Sdk-Method"]=n,this.batchRequests||s)return this.batcher.enqueueRequest(i);this.emit("debug",{action:"request",request:(0,l.d)(i),provider:this});var c=["eth_chainId","eth_blockNumber"].indexOf(e)>=0;if(c&&this._cache[e])return this._cache[e];var a=(0,d.rd)(this.connection,JSON.stringify(i),b).then((function(e){return r.emit("debug",{action:"response",request:i,response:e,provider:r}),e}),(function(e){throw r.emit("debug",{action:"response",error:e,request:i,provider:r}),e}));return c&&(this._cache[e]=a,setTimeout((function(){r._cache[e]=null}),0)),a}}],[{key:"getApiKey",value:function(e){if(null==e)return l.D;if(e&&"string"!==typeof e)throw new Error("Invalid apiKey '".concat(e,"' provided. apiKey must be a string."));return e}},{key:"getNetwork",value:function(e){return"string"===typeof e&&e in l.C?l.C[e]:(0,h.H)(e)}},{key:"getAlchemyNetwork",value:function(e){if(void 0===e)return l.a;if("number"===typeof e)throw new Error("Invalid network '".concat(e,"' provided. Network must be a string."));if(!Object.values(l.N).includes(e))throw new Error("Invalid network '".concat(e,"' provided. Network must be one of: ")+"".concat(Object.values(l.N).join(", "),"."));return e}},{key:"getAlchemyConnectionInfo",value:function(e,t,n){var r="http"===n?(0,l.g)(e,t):(0,l.b)(e,t);return{headers:l.I?{"Alchemy-Ethers-Sdk-Version":l.V}:{"Alchemy-Ethers-Sdk-Version":l.V,"Accept-Encoding":"gzip"},allowGzip:!0,url:r}}}]),n}(f.r);function b(e){if(e.error){var t=new Error(e.error.message);throw t.code=e.error.code,t.data=e.error.data,t}return e.result}},4294:function(e,t,n){"use strict";n.r(t),n.d(t,{AlchemyWebSocketProvider:function(){return L}});var r=n(7762),s=n(7326),i=n(1752),o=n(1120),c=n(136),a=n(9388),u=n(4165),l=n(2982),h=n(5671),f=n(3144),d=n(6834),p=n(7949),v=n(2257),b=n(9083),m=n(2963),k=n(520),y=n(8012),g=n(9502),w=n(7059),_=null;try{if(null==(_=WebSocket))throw new Error("inject please")}catch(H){var E=new g.Yd(w.i);_=function(){E.throwError("WebSockets not supported in this environment",g.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new WebSocket()"})}}var N=function(e,t,n,r){return new(n||(n=Promise))((function(s,i){function o(e){try{a(r.next(e))}catch(t){i(t)}}function c(e){try{a(r.throw(e))}catch(t){i(t)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}a((r=r.apply(e,t||[])).next())}))},I=new g.Yd(w.i),x=1,T=function(e){(0,c.Z)(n,e);var t=(0,a.Z)(n);function n(e,r){var c,a;(0,h.Z)(this,n),"any"===r&&I.throwError("WebSocketProvider does not support 'any' network yet",g.Yd.errors.UNSUPPORTED_OPERATION,{operation:"network:any"}),(a="string"===typeof e?t.call(this,e,r):t.call(this,"_websocket",r))._pollingInterval=-1,a._wsReady=!1,"string"===typeof e?(0,k.zG)((0,s.Z)(a),"_websocket",new _(a.connection.url)):(0,k.zG)((0,s.Z)(a),"_websocket",e),(0,k.zG)((0,s.Z)(a),"_requests",{}),(0,k.zG)((0,s.Z)(a),"_subs",{}),(0,k.zG)((0,s.Z)(a),"_subIds",{}),(0,k.zG)((0,s.Z)(a),"_detectNetwork",(0,i.Z)((c=(0,s.Z)(a),(0,o.Z)(n.prototype)),"detectNetwork",c).call(c)),a.websocket.onopen=function(){a._wsReady=!0,Object.keys(a._requests).forEach((function(e){a.websocket.send(a._requests[e].payload)}))},a.websocket.onmessage=function(e){var t=e.data,n=JSON.parse(t);if(null!=n.id){var r=String(n.id),i=a._requests[r];if(delete a._requests[r],void 0!==n.result)i.callback(null,n.result),a.emit("debug",{action:"response",request:JSON.parse(i.payload),response:n.result,provider:(0,s.Z)(a)});else{var o=null;n.error?(o=new Error(n.error.message||"unknown error"),(0,k.zG)(o,"code",n.error.code||null),(0,k.zG)(o,"response",t)):o=new Error("unknown error"),i.callback(o,void 0),a.emit("debug",{action:"response",error:o,request:JSON.parse(i.payload),provider:(0,s.Z)(a)})}}else if("eth_subscription"===n.method){var c=a._subs[n.params.subscription];c&&c.processFunc(n.params.result)}else console.warn("this should not happen")};var u=setInterval((function(){a.emit("poll")}),1e3);return u.unref&&u.unref(),(0,m.Z)(a)}return(0,f.Z)(n,[{key:"websocket",get:function(){return this._websocket}},{key:"detectNetwork",value:function(){return this._detectNetwork}},{key:"pollingInterval",get:function(){return 0},set:function(e){I.throwError("cannot set polling interval on WebSocketProvider",g.Yd.errors.UNSUPPORTED_OPERATION,{operation:"setPollingInterval"})}},{key:"resetEventsBlock",value:function(e){I.throwError("cannot reset events block on WebSocketProvider",g.Yd.errors.UNSUPPORTED_OPERATION,{operation:"resetEventBlock"})}},{key:"poll",value:function(){return N(this,void 0,void 0,(0,u.Z)().mark((function e(){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null);case 1:case"end":return e.stop()}}),e)})))}},{key:"polling",set:function(e){e&&I.throwError("cannot set polling on WebSocketProvider",g.Yd.errors.UNSUPPORTED_OPERATION,{operation:"setPolling"})}},{key:"send",value:function(e,t){var n=this,r=x++;return new Promise((function(s,i){var o=JSON.stringify({method:e,params:t,id:r,jsonrpc:"2.0"});n.emit("debug",{action:"request",request:JSON.parse(o),provider:n}),n._requests[String(r)]={callback:function(e,t){return e?i(e):s(t)},payload:o},n._wsReady&&n.websocket.send(o)}))}},{key:"_subscribe",value:function(e,t,n){return N(this,void 0,void 0,(0,u.Z)().mark((function r(){var s,i,o=this;return(0,u.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return null==(s=this._subIds[e])&&(s=Promise.all(t).then((function(e){return o.send("eth_subscribe",e)})),this._subIds[e]=s),r.next=4,s;case 4:i=r.sent,this._subs[i]={tag:e,processFunc:n};case 6:case"end":return r.stop()}}),r,this)})))}},{key:"_startEvent",value:function(e){var t=this;switch(e.type){case"block":this._subscribe("block",["newHeads"],(function(e){var n=v.O$.from(e.number).toNumber();t._emitted.block=n,t.emit("block",n)}));break;case"pending":this._subscribe("pending",["newPendingTransactions"],(function(e){t.emit("pending",e)}));break;case"filter":this._subscribe(e.tag,["logs",this._getFilter(e.filter)],(function(n){null==n.removed&&(n.removed=!1),t.emit(e.filter,t.formatter.filterLog(n))}));break;case"tx":var n=function(e){var n=e.hash;t.getTransactionReceipt(n).then((function(e){e&&t.emit(n,e)}))};n(e),this._subscribe("tx",["newHeads"],(function(e){t._events.filter((function(e){return"tx"===e.type})).forEach(n)}));break;case"debug":case"poll":case"willPoll":case"didPoll":case"error":break;default:console.log("unhandled:",e)}}},{key:"_stopEvent",value:function(e){var t=this,n=e.tag;if("tx"===e.type){if(this._events.filter((function(e){return"tx"===e.type})).length)return;n="tx"}else if(this.listenerCount(e.event))return;var r=this._subIds[n];r&&(delete this._subIds[n],r.then((function(e){t._subs[e]&&(delete t._subs[e],t.send("eth_unsubscribe",[e]))})))}},{key:"destroy",value:function(){return N(this,void 0,void 0,(0,u.Z)().mark((function e(){var t=this;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.websocket.readyState!==_.CONNECTING){e.next=3;break}return e.next=3,new Promise((function(e){t.websocket.onopen=function(){e(!0)},t.websocket.onerror=function(){e(!1)}}));case 3:this.websocket.close(1e3);case 4:case"end":return e.stop()}}),e,this)})))}}],[{key:"defaultUrl",value:function(){return"ws://localhost:8546"}}]),n}(y.r),O=n(6683),B=(n(4569),function(){function e(t){(0,h.Z)(this,e),this.provider=t,this.maxBackfillBlocks=120}return(0,f.Z)(e,[{key:"getNewHeadsBackfill",value:function(e,t,n){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function r(){var s,i,o,c,a;return(0,u.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return P(e),r.next=3,this.getBlockNumber();case 3:if(s=r.sent,P(e),0!==t.length){r.next=7;break}return r.abrupt("return",this.getHeadEventsInRange(Math.max(n,s-this.maxBackfillBlocks)+1,s+1));case 7:if(i=(0,d.f)(t[t.length-1].number),o=s-this.maxBackfillBlocks+1,!(i<=o)){r.next=11;break}return r.abrupt("return",this.getHeadEventsInRange(o,s+1));case 11:return r.next=13,this.getReorgHeads(e,t);case 13:return c=r.sent,P(e),r.next=17,this.getHeadEventsInRange(i+1,s+1);case 17:return a=r.sent,P(e),r.abrupt("return",[].concat((0,l.Z)(c),(0,l.Z)(a)));case 20:case"end":return r.stop()}}),r,this)})))}},{key:"getLogsBackfill",value:function(e,t,n,r){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function s(){var i,o,c,a,h,f,p;return(0,u.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return P(e),s.next=3,this.getBlockNumber();case 3:if(i=s.sent,P(e),0!==n.length){s.next=7;break}return s.abrupt("return",this.getLogsInRange(t,Math.max(r,i-this.maxBackfillBlocks)+1,i+1));case 7:if(o=(0,d.f)(n[n.length-1].blockNumber),c=i-this.maxBackfillBlocks+1,!(o<c)){s.next=11;break}return s.abrupt("return",this.getLogsInRange(t,c,i+1));case 11:return s.next=13,this.getCommonAncestor(e,n);case 13:return a=s.sent,P(e),h=n.filter((function(e){return(0,d.f)(e.blockNumber)>a.blockNumber})).map((function(e){return Object.assign(Object.assign({},e),{removed:!0})})),f=a.blockNumber===Number.NEGATIVE_INFINITY?(0,d.f)(n[0].blockNumber):a.blockNumber,s.next=19,this.getLogsInRange(t,f,i+1);case 19:return p=(p=s.sent).filter((function(e){return e&&((0,d.f)(e.blockNumber)>a.blockNumber||(0,d.f)(e.logIndex)>a.logIndex)})),P(e),s.abrupt("return",[].concat((0,l.Z)(h),(0,l.Z)(p)));case 23:case"end":return s.stop()}}),s,this)})))}},{key:"setMaxBackfillBlock",value:function(e){this.maxBackfillBlocks=e}},{key:"getBlockNumber",value:function(){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.provider.send("eth_blockNumber");case 2:return t=e.sent,e.abrupt("return",(0,d.f)(t));case 4:case"end":return e.stop()}}),e,this)})))}},{key:"getHeadEventsInRange",value:function(e,t){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function n(){var r,s,i;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e>=t)){n.next=2;break}return n.abrupt("return",[]);case 2:for(r=[],s=e;s<t;s++)r.push({method:"eth_getBlockByNumber",params:[(0,d.t)(s),!1]});return n.next=6,this.provider.sendBatch(r);case 6:return i=n.sent,n.abrupt("return",i.map(Z));case 8:case"end":return n.stop()}}),n,this)})))}},{key:"getReorgHeads",value:function(e,t){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function n(){var r,s,i,o;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=[],s=t.length-1;case 2:if(!(s>=0)){n.next=14;break}return i=t[s],n.next=6,this.getBlockByNumber((0,d.f)(i.number));case 6:if(o=n.sent,P(e),i.hash!==o.hash){n.next=10;break}return n.abrupt("break",14);case 10:r.push(Z(o));case 11:s--,n.next=2;break;case 14:return n.abrupt("return",r.reverse());case 15:case"end":return n.stop()}}),n,this)})))}},{key:"getBlockByNumber",value:function(e){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function t(){return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.provider.send("eth_getBlockByNumber",[(0,d.t)(e),!1]));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"getCommonAncestor",value:function(e,t){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function n(){var r,s,i;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.getBlockByNumber((0,d.f)(t[t.length-1].blockNumber));case 2:r=n.sent,P(e),s=t.length-1;case 5:if(!(s>=0)){n.next=16;break}if((i=t[s]).blockNumber===r.number){n.next=11;break}return n.next=10,this.getBlockByNumber((0,d.f)(i.blockNumber));case 10:r=n.sent;case 11:if(i.blockHash!==r.hash){n.next=13;break}return n.abrupt("return",{blockNumber:(0,d.f)(i.blockNumber),logIndex:(0,d.f)(i.logIndex)});case 13:s--,n.next=5;break;case 16:return n.abrupt("return",{blockNumber:Number.NEGATIVE_INFINITY,logIndex:Number.NEGATIVE_INFINITY});case 17:case"end":return n.stop()}}),n,this)})))}},{key:"getLogsInRange",value:function(e,t,n){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function r(){var s;return(0,u.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(t>=n)){r.next=2;break}return r.abrupt("return",[]);case 2:return s=Object.assign(Object.assign({},e),{fromBlock:(0,d.t)(t),toBlock:(0,d.t)(n-1)}),r.abrupt("return",this.provider.send("eth_getLogs",[s]));case 4:case"end":return r.stop()}}),r,this)})))}}]),e}());function Z(e){var t=Object.assign({},e);return delete t.totalDifficulty,delete t.transactions,delete t.uncles,t}function C(e){return A(e,(function(e){return e.hash}))}function S(e){return A(e,(function(e){return"".concat(e.blockHash,"/").concat(e.logIndex)}))}function A(e,t){var n=new Set,r=[];return e.forEach((function(e){var s=t(e);n.has(s)||(n.add(s),r.push(e))})),r}var R=new Error("Cancelled");function P(e){if(e())throw R}var L=function(e){(0,c.Z)(m,e);var t=(0,a.Z)(m);function m(e,i){var o,c;(0,h.Z)(this,m);var a=O.AlchemyProvider.getApiKey(e.apiKey),l=O.AlchemyProvider.getAlchemyNetwork(e.network),f=O.AlchemyProvider.getAlchemyConnectionInfo(l,a,"wss"),v="alchemy-sdk-".concat(d.V),b=new p.Z(null!==(c=e.url)&&void 0!==c?c:f.url,v,{wsConstructor:null!==i&&void 0!==i?i:"undefined"!==typeof process&&null!=process&&null!=process.versions&&null!=process.versions.node?n(5087).w3cwebsocket:WebSocket}),k=d.E[l];return(o=t.call(this,b,k))._events=[],o.virtualSubscriptionsById=new Map,o.virtualIdsByPhysicalId=new Map,o.handleMessage=function(e){var t=JSON.parse(e.data);if(function(e){return!function(e){return Array.isArray(e)||"2.0"===e.jsonrpc&&void 0!==e.id}(e)}(t)){var n=t.params.subscription,r=o.virtualIdsByPhysicalId.get(n);if(r){var s=o.virtualSubscriptionsById.get(r);if("eth_subscribe"===s.method)switch(s.params[0]){case"newHeads":var i=s,c=t,a=i.isBackfilling,u=i.backfillBuffer,l=c.params.result;a?function(e,t){F(e,t,G)}(u,l):n!==r?o.emitAndRememberEvent(r,l,G):o.rememberEvent(r,l,G);break;case"logs":var h=s,f=t,d=h.isBackfilling,p=h.backfillBuffer,v=f.params.result;d?function(e,t){F(e,t,D)}(p,v):r!==n?o.emitAndRememberEvent(r,v,D):o.rememberEvent(r,v,D);break;default:if(n!==r){var b=t.params.result;o.emitEvent(r,b)}}}}},o.handleReopen=function(){o.virtualIdsByPhysicalId.clear();var e=function(){var e=!1;return{cancel:function(){return e=!0},isCancelled:function(){return e}}}(),t=e.cancel,n=e.isCancelled;o.cancelBackfill=t;var i,c=(0,r.Z)(o.virtualSubscriptionsById.values());try{var a=function(){var e=i.value;(0,d._)((0,s.Z)(o),void 0,void 0,(0,u.Z)().mark((function t(){return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.resubscribeAndBackfill(n,e);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),n()||console.error('Error while backfilling "'.concat(e.params[0],'" subscription. Some events may be missing.'),t.t0);case 8:case"end":return t.stop()}}),t,this,[[0,5]])})))};for(c.s();!(i=c.n()).done;)a()}catch(l){c.e(l)}finally{c.f()}o.startHeartbeat()},o.stopHeartbeatAndBackfill=function(){null!=o.heartbeatIntervalId&&(clearInterval(o.heartbeatIntervalId),o.heartbeatIntervalId=void 0),o.cancelBackfill()},o.apiKey=a,o.backfiller=new B((0,s.Z)(o)),o.addSocketListeners(),o.startHeartbeat(),o.cancelBackfill=d.n,o}return(0,f.Z)(m,[{key:"on",value:function(e,t){return this._addEventListener(e,t,!1)}},{key:"once",value:function(e,t){return this._addEventListener(e,t,!0)}},{key:"off",value:function(e,t){return(0,d.i)(e)?this._off(e,t):(0,i.Z)((0,o.Z)(m.prototype),"off",this).call(this,e,t)}},{key:"removeAllListeners",value:function(e){return void 0!==e&&(0,d.i)(e)?this._removeAllListeners(e):(0,i.Z)((0,o.Z)(m.prototype),"removeAllListeners",this).call(this,e)}},{key:"listenerCount",value:function(e){return void 0!==e&&(0,d.i)(e)?this._listenerCount(e):(0,i.Z)((0,o.Z)(m.prototype),"listenerCount",this).call(this,e)}},{key:"listeners",value:function(e){return void 0!==e&&(0,d.i)(e)?this._listeners(e):(0,i.Z)((0,o.Z)(m.prototype),"listeners",this).call(this,e)}},{key:"_addEventListener",value:function(e,t,n){if((0,d.i)(e)){(0,d.v)(e);var r=new d.c((0,d.e)(e),t,n);return this._events.push(r),this._startEvent(r),this}return(0,i.Z)((0,o.Z)(m.prototype),"_addEventListener",this).call(this,e,t,n)}},{key:"_startEvent",value:function(e){[].concat((0,l.Z)(d.A),["block","filter"]).includes(e.type)?this.customStartEvent(e):(0,i.Z)((0,o.Z)(m.prototype),"_startEvent",this).call(this,e)}},{key:"_subscribe",value:function(e,t,n,r){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function s(){var i,o,c,a,l=this;return(0,u.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return i=this._subIds[e],s.next=3,this.getBlockNumber();case 3:return o=s.sent,null==i&&(i=Promise.all(t).then((function(e){return l.send("eth_subscribe",e)})),this._subIds[e]=i),s.next=7,i;case 7:return c=s.sent,s.next=10,Promise.all(t);case 10:a=s.sent,this.virtualSubscriptionsById.set(c,{event:r,method:"eth_subscribe",params:a,startingBlockNumber:o,virtualId:c,physicalId:c,sentEvents:[],isBackfilling:!1,backfillBuffer:[]}),this.virtualIdsByPhysicalId.set(c,c),this._subs[c]={tag:e,processFunc:n};case 14:case"end":return s.stop()}}),s,this)})))}},{key:"emit",value:function(e){for(var t,n=this,r=arguments.length,s=new Array(r>1?r-1:0),c=1;c<r;c++)s[c-1]=arguments[c];if((0,d.i)(e)){var a=!1,u=[],l=(0,d.e)(e);return this._events=this._events.filter((function(e){return e.tag!==l||(setTimeout((function(){e.listener.apply(n,s)}),0),a=!0,!e.once||(u.push(e),!1))})),u.forEach((function(e){n._stopEvent(e)})),a}return(t=(0,i.Z)((0,o.Z)(m.prototype),"emit",this)).call.apply(t,[this,e].concat(s))}},{key:"sendBatch",value:function(e){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function t(){var n,r;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=0,r=e.map((function(e){return{method:e.method,params:e.params,jsonrpc:"2.0",id:"alchemy-sdk:".concat(n++)}})),t.abrupt("return",this.sendBatchConcurrently(r));case 3:case"end":return t.stop()}}),t,this)})))}},{key:"destroy",value:function(){return this.removeSocketListeners(),this.stopHeartbeatAndBackfill(),(0,i.Z)((0,o.Z)(m.prototype),"destroy",this).call(this)}},{key:"isCommunityResource",value:function(){return this.apiKey===d.D}},{key:"_stopEvent",value:function(e){var t=this,n=e.tag;if(d.A.includes(e.type)){if(this._events.filter((function(e){return d.A.includes(e.type)})).length)return}else if("tx"===e.type){if(this._events.filter((function(e){return"tx"===e.type})).length)return;n="tx"}else if(this.listenerCount(e.event))return;var r=this._subIds[n];r&&(delete this._subIds[n],r.then((function(e){t._subs[e]&&(delete t._subs[e],t.send("eth_unsubscribe",[e]))})))}},{key:"addSocketListeners",value:function(){this._websocket.addEventListener("message",this.handleMessage),this._websocket.addEventListener("reopen",this.handleReopen),this._websocket.addEventListener("down",this.stopHeartbeatAndBackfill)}},{key:"removeSocketListeners",value:function(){this._websocket.removeEventListener("message",this.handleMessage),this._websocket.removeEventListener("reopen",this.handleReopen),this._websocket.removeEventListener("down",this.stopHeartbeatAndBackfill)}},{key:"resubscribeAndBackfill",value:function(e,t){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function n(){var r,s,i,o,c,a,h,f,d,p,v=this;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.virtualId,s=t.method,i=t.params,o=t.sentEvents,c=t.backfillBuffer,a=t.startingBlockNumber,t.isBackfilling=!0,c.length=0,n.prev=3,n.next=6,this.send(s,i);case 6:h=n.sent,P(e),t.physicalId=h,this.virtualIdsByPhysicalId.set(h,r),n.t0=i[0],n.next="newHeads"===n.t0?13:"logs"===n.t0?20:28;break;case 13:return n.next=15,j((function(){return q(v.backfiller.getNewHeadsBackfill(e,o,a),6e4)}),5,(function(){return!e()}));case 15:return f=n.sent,P(e),C([].concat((0,l.Z)(f),(0,l.Z)(c))).forEach((function(e){return v.emitNewHeadsEvent(r,e)})),n.abrupt("break",29);case 20:return d=i[1]||{},n.next=23,j((function(){return q(v.backfiller.getLogsBackfill(e,d,o,a),6e4)}),5,(function(){return!e()}));case 23:return p=n.sent,P(e),S([].concat((0,l.Z)(p),(0,l.Z)(c))).forEach((function(e){return v.emitLogsEvent(r,e)})),n.abrupt("break",29);case 28:return n.abrupt("break",29);case 29:return n.prev=29,t.isBackfilling=!1,c.length=0,n.finish(29);case 33:case"end":return n.stop()}}),n,this,[[3,,29,33]])})))}},{key:"emitNewHeadsEvent",value:function(e,t){this.emitAndRememberEvent(e,t,G)}},{key:"emitLogsEvent",value:function(e,t){this.emitAndRememberEvent(e,t,D)}},{key:"emitAndRememberEvent",value:function(e,t,n){this.rememberEvent(e,t,n),this.emitEvent(e,t)}},{key:"emitEvent",value:function(e,t){var n=this.virtualSubscriptionsById.get(e);n&&this.emitGenericEvent(n,t)}},{key:"rememberEvent",value:function(e,t,n){var r=this.virtualSubscriptionsById.get(e);r&&F(r.sentEvents,Object.assign({},t),n)}},{key:"emitGenericEvent",value:function(e,t){this.emitProcessFn(e.event)(t)}},{key:"startHeartbeat",value:function(){var e=this;null==this.heartbeatIntervalId&&(this.heartbeatIntervalId=setInterval((function(){return(0,d._)(e,void 0,void 0,(0,u.Z)().mark((function e(){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q(this.send("net_version"),1e4);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this._websocket.reconnect();case 8:case"end":return e.stop()}}),e,this,[[0,5]])})))}),3e4))}},{key:"sendBatchConcurrently",value:function(e){return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function t(){var n=this;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.all(e.map((function(e){return n.send(e.method,e.params)}))));case 1:case"end":return t.stop()}}),t)})))}},{key:"customStartEvent",value:function(e){if(e.type===d.h){var t=e.fromAddress,n=e.toAddress,r=e.hashesOnly;this._subscribe(e.tag,[d.j.PENDING_TRANSACTIONS,{fromAddress:t,toAddress:n,hashesOnly:r}],this.emitProcessFn(e),e)}else if(e.type===d.k){var s=e.addresses,i=e.includeRemoved,o=e.hashesOnly;this._subscribe(e.tag,[d.j.MINED_TRANSACTIONS,{addresses:s,includeRemoved:i,hashesOnly:o}],this.emitProcessFn(e),e)}else"block"===e.type?this._subscribe("block",["newHeads"],this.emitProcessFn(e),e):"filter"===e.type&&this._subscribe(e.tag,["logs",this._getFilter(e.filter)],this.emitProcessFn(e),e)}},{key:"emitProcessFn",value:function(e){var t=this;switch(e.type){case d.h:return function(n){return t.emit({method:d.j.PENDING_TRANSACTIONS,fromAddress:e.fromAddress,toAddress:e.toAddress,hashesOnly:e.hashesOnly},n)};case d.k:return function(n){return t.emit({method:d.j.MINED_TRANSACTIONS,addresses:e.addresses,includeRemoved:e.includeRemoved,hashesOnly:e.hashesOnly},n)};case"block":return function(e){var n=v.O$.from(e.number).toNumber();t._emitted.block=n,t.emit("block",n)};case"filter":return function(n){null==n.removed&&(n.removed=!1),t.emit(e.filter,t.formatter.filterLog(n))};default:throw new Error("Invalid event type to `emitProcessFn()`")}}},{key:"_off",value:function(e,t){var n=this;if(null==t)return this.removeAllListeners(e);var r=[],s=!1,i=(0,d.e)(e);return this._events=this._events.filter((function(e){return e.tag!==i||e.listener!=t||(!!s||(s=!0,r.push(e),!1))})),r.forEach((function(e){n._stopEvent(e)})),this}},{key:"_removeAllListeners",value:function(e){var t=this,n=[];if(null==e)n=this._events,this._events=[];else{var r=(0,d.e)(e);this._events=this._events.filter((function(e){return e.tag!==r||(n.push(e),!1)}))}return n.forEach((function(e){t._stopEvent(e)})),this}},{key:"_listenerCount",value:function(e){if(!e)return this._events.length;var t=(0,d.e)(e);return this._events.filter((function(e){return e.tag===t})).length}},{key:"_listeners",value:function(e){if(null==e)return this._events.map((function(e){return e.listener}));var t=(0,d.e)(e);return this._events.filter((function(e){return e.tag===t})).map((function(e){return e.listener}))}}],[{key:"getNetwork",value:function(e){return"string"===typeof e&&e in d.C?d.C[e]:(0,b.H)(e)}}]),m}(T);function j(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0};return(0,d._)(this,void 0,void 0,(0,u.Z)().mark((function r(){var s,i;return(0,u.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:s=0,i=0;case 2:return r.prev=3,r.next=6,e();case 6:return r.abrupt("return",r.sent);case 9:if(r.prev=9,r.t0=r.catch(3),!(++i>=t)&&n(r.t0)){r.next=14;break}throw r.t0;case 14:return r.next=16,W(s);case 16:if(n(r.t0)){r.next=18;break}throw r.t0;case 18:s=0===s?1e3:Math.min(3e4,2*s);case 19:r.next=2;break;case 21:case"end":return r.stop()}}),r,null,[[3,9]])})))}function W(e){return new Promise((function(t){return setTimeout(t,e)}))}function q(e,t){return Promise.race([e,new Promise((function(e,n){return setTimeout((function(){return n(new Error("Timeout"))}),t)}))])}function G(e){return(0,d.f)(e.number)}function D(e){return(0,d.f)(e.blockNumber)}function F(e,t,n){var r=n(t),s=e.findIndex((function(e){return n(e)>r-10}));-1===s?e.length=0:e.splice(0,s),e.push(t)}},4210:function(e){var t=function(){if("object"===typeof self&&self)return self;if("object"===typeof window&&window)return window;throw new Error("Unable to resolve global `this`")};e.exports=function(){if(this)return this;if("object"===typeof globalThis&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(e){return t()}try{return __global__||t()}finally{delete Object.prototype.__global__}}()},7949:function(e,t){"use strict";var n=function(){function e(t,n,s){if(void 0===s&&(s={}),this.url=t,this.onclose=null,this.onerror=null,this.onmessage=null,this.onopen=null,this.ondown=null,this.onreopen=null,this.CONNECTING=e.CONNECTING,this.OPEN=e.OPEN,this.CLOSING=e.CLOSING,this.CLOSED=e.CLOSED,this.hasBeenOpened=!1,this.isClosed=!1,this.messageBuffer=[],this.nextRetryTime=0,this.reconnectCount=0,this.lastKnownExtensions="",this.lastKnownProtocol="",this.listeners={},null==n||"string"===typeof n||Array.isArray(n)?this.protocols=n:s=n,this.options=r(s),!this.options.wsConstructor){if("undefined"===typeof WebSocket)throw new Error("WebSocket not present in global scope and no wsConstructor option was provided.");this.options.wsConstructor=WebSocket}this.openNewWebSocket()}return Object.defineProperty(e.prototype,"binaryType",{get:function(){return this.binaryTypeInternal||"blob"},set:function(e){this.binaryTypeInternal=e,this.ws&&(this.ws.binaryType=e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bufferedAmount",{get:function(){var e=this.ws?this.ws.bufferedAmount:0,t=!1;return this.messageBuffer.forEach((function(n){var r=function(e){return"string"===typeof e?2*e.length:e instanceof ArrayBuffer?e.byteLength:e instanceof Blob?e.size:void 0}(n);null!=r?e+=r:t=!0})),t&&this.debugLog("Some buffered data had unknown length. bufferedAmount() return value may be below the correct amount."),e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"extensions",{get:function(){return this.ws?this.ws.extensions:this.lastKnownExtensions},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"protocol",{get:function(){return this.ws?this.ws.protocol:this.lastKnownProtocol},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"readyState",{get:function(){return this.isClosed?e.CLOSED:e.OPEN},enumerable:!0,configurable:!0}),e.prototype.close=function(e,t){this.disposeSocket(e,t),this.shutdown(),this.debugLog("WebSocket permanently closed by client.")},e.prototype.send=function(e){if(this.isClosed)throw new Error("WebSocket is already in CLOSING or CLOSED state.");this.ws&&this.ws.readyState===this.OPEN?this.ws.send(e):this.messageBuffer.push(e)},e.prototype.reconnect=function(){if(this.isClosed)throw new Error("Cannot call reconnect() on socket which is permanently closed.");this.disposeSocket(1e3,"Client requested reconnect."),this.handleClose(void 0)},e.prototype.addEventListener=function(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)},e.prototype.dispatchEvent=function(e){return this.dispatchEventOfType(e.type,e)},e.prototype.removeEventListener=function(e,t){this.listeners[e]&&(this.listeners[e]=this.listeners[e].filter((function(e){return e!==t})))},e.prototype.openNewWebSocket=function(){var e=this;if(!this.isClosed){var t=this.options,n=t.connectTimeout,r=t.wsConstructor;this.debugLog("Opening new WebSocket to "+this.url+".");var s=new r(this.url,this.protocols);s.onclose=function(t){return e.handleClose(t)},s.onerror=function(t){return e.handleError(t)},s.onmessage=function(t){return e.handleMessage(t)},s.onopen=function(t){return e.handleOpen(t)},this.connectTimeoutId=setTimeout((function(){e.clearConnectTimeout(),e.disposeSocket(),e.handleClose(void 0)}),n),this.ws=s}},e.prototype.handleOpen=function(e){var t=this;if(this.ws&&!this.isClosed){var n=this.options.allClearResetTime;this.debugLog("WebSocket opened."),null!=this.binaryTypeInternal?this.ws.binaryType=this.binaryTypeInternal:this.binaryTypeInternal=this.ws.binaryType,this.clearConnectTimeout(),this.hasBeenOpened?this.dispatchEventOfType("reopen",e):(this.dispatchEventOfType("open",e),this.hasBeenOpened=!0),this.messageBuffer.forEach((function(e){return t.send(e)})),this.messageBuffer=[],this.allClearTimeoutId=setTimeout((function(){t.clearAllClearTimeout(),t.nextRetryTime=0,t.reconnectCount=0;var e=n/1e3|0;t.debugLog("WebSocket remained open for "+e+" seconds. Resetting retry time and count.")}),n)}},e.prototype.handleMessage=function(e){this.isClosed||this.dispatchEventOfType("message",e)},e.prototype.handleClose=function(e){var t=this;if(!this.isClosed){var n=this.options,r=n.maxReconnectAttempts,s=n.shouldReconnect;if(this.clearConnectTimeout(),this.clearAllClearTimeout(),this.ws&&(this.lastKnownExtensions=this.ws.extensions,this.lastKnownProtocol=this.ws.protocol,this.disposeSocket()),this.dispatchEventOfType("down",e),this.reconnectCount>=r)this.stopReconnecting(e,this.getTooManyFailedReconnectsMessage());else{var i=!e||s(e);"boolean"===typeof i?this.handleWillReconnect(i,e,"Provided shouldReconnect() returned false. Closing permanently."):i.then((function(n){t.isClosed||t.handleWillReconnect(n,e,"Provided shouldReconnect() resolved to false. Closing permanently.")}))}}},e.prototype.handleError=function(e){this.dispatchEventOfType("error",e),this.debugLog("WebSocket encountered an error.")},e.prototype.handleWillReconnect=function(e,t,n){e?this.reestablishConnection():this.stopReconnecting(t,n)},e.prototype.reestablishConnection=function(){var e=this,t=this.options,n=t.minReconnectDelay,r=t.maxReconnectDelay,s=t.reconnectBackoffFactor;this.reconnectCount++;var i=this.nextRetryTime;this.nextRetryTime=Math.max(n,Math.min(this.nextRetryTime*s,r)),setTimeout((function(){return e.openNewWebSocket()}),i);var o=i/1e3|0;this.debugLog("WebSocket was closed. Re-opening in "+o+" seconds.")},e.prototype.stopReconnecting=function(e,t){this.debugLog(t),this.shutdown(),e&&this.dispatchEventOfType("close",e)},e.prototype.shutdown=function(){this.isClosed=!0,this.clearAllTimeouts(),this.messageBuffer=[],this.disposeSocket()},e.prototype.disposeSocket=function(e,t){this.ws&&(this.ws.onerror=s,this.ws.onclose=s,this.ws.onmessage=s,this.ws.onopen=s,this.ws.close(e,t),this.ws=void 0)},e.prototype.clearAllTimeouts=function(){this.clearConnectTimeout(),this.clearAllClearTimeout()},e.prototype.clearConnectTimeout=function(){null!=this.connectTimeoutId&&(clearTimeout(this.connectTimeoutId),this.connectTimeoutId=void 0)},e.prototype.clearAllClearTimeout=function(){null!=this.allClearTimeoutId&&(clearTimeout(this.allClearTimeoutId),this.allClearTimeoutId=void 0)},e.prototype.dispatchEventOfType=function(e,t){var n=this;switch(e){case"close":this.onclose&&this.onclose(t);break;case"error":this.onerror&&this.onerror(t);break;case"message":this.onmessage&&this.onmessage(t);break;case"open":this.onopen&&this.onopen(t);break;case"down":this.ondown&&this.ondown(t);break;case"reopen":this.onreopen&&this.onreopen(t)}return e in this.listeners&&this.listeners[e].slice().forEach((function(e){return n.callListener(e,t)})),!t||!t.defaultPrevented},e.prototype.callListener=function(e,t){"function"===typeof e?e.call(this,t):e.handleEvent.call(this,t)},e.prototype.debugLog=function(e){this.options.debug&&console.log(e)},e.prototype.getTooManyFailedReconnectsMessage=function(){var e,t=this.options.maxReconnectAttempts;return"Failed to reconnect after "+t+" "+(e="attempt",(1===t?e:e+"s")+". Closing permanently.")},e.DEFAULT_OPTIONS={allClearResetTime:5e3,connectTimeout:5e3,debug:!1,minReconnectDelay:1e3,maxReconnectDelay:3e4,maxReconnectAttempts:Number.POSITIVE_INFINITY,reconnectBackoffFactor:1.5,shouldReconnect:function(){return!0},wsConstructor:void 0},e.CONNECTING=0,e.OPEN=1,e.CLOSING=2,e.CLOSED=3,e}();function r(e){var t={};return Object.keys(n.DEFAULT_OPTIONS).forEach((function(r){var s=e[r];t[r]=void 0===s?n.DEFAULT_OPTIONS[r]:s})),t}function s(){}t.Z=n},5087:function(e,t,n){var r;if("object"===typeof globalThis)r=globalThis;else try{r=n(4210)}catch(c){}finally{if(r||"undefined"===typeof window||(r=window),!r)throw new Error("Could not determine global this")}var s=r.WebSocket||r.MozWebSocket,i=n(1496);function o(e,t){return t?new s(e,t):new s(e)}s&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach((function(e){Object.defineProperty(o,e,{get:function(){return s[e]}})})),e.exports={w3cwebsocket:s?o:null,version:i}},1496:function(e,t,n){e.exports=n(9794).version},9794:function(e){"use strict";e.exports={version:"1.0.34"}}}]);
//# sourceMappingURL=294.c91f42d0.chunk.js.map