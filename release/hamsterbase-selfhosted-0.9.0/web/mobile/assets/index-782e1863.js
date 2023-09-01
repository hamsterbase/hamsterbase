function ww(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Sw="复制成功",Ew="取消",xw="zh-CN",kw="没有打开的网页",Tw="未选择远程",Rw="取消",Aw="重新连接",Iw="保存",Ow="停止同步",Lw="同步",Nw="排序方式",Mw={"add_time_filter_label.date_added":"添加时间","add_time_filter_left_operand.date_added":"添加时间","add_time_filter_left_operator.after":"晚于","add_time_filter_left_operator.before":"早于","add_time_filter_right_operands.last_month":"上月","add_time_filter_right_operands.last_week":"上周","add_time_filter_right_operands.this_month":"本月","add_time_filter_right_operands.this_week":"本周","add_time_filter_right_operands.today":"今天","add_time_filter_right_operands.yesterday":"昨天","annotate_count_filter_operator.annotate_count":"批注数","api_token.placeholder":"输入一个标签以便识别该密钥","ContextKey.multipleSelectViewVisible":"多选组件可见",copy_success:Sw,"dayjs.locale":"zh-cn","error.E0001":"网页解析失败","error.E0002":"不支持的版本","error.E0003":"不支持的文件夹","error.E0004":"服务器连接失败","errorcode_004.connect_refused":"连接失败",filter_cancel:Ew,"filter_limit.limit":"限制","filter_limit.webpages":"网页","filter_match.all":"全部","filter_match.any":"任一","filter_match.filter":"规则","filter_match.match":"匹配","filter_operator.is":"是","filter_operator.is_less_than":"少于","filter_operator.is_more_than":"大于","filter_operator.is_not":"不是","filter_widget.placeholder":"过滤","filter.filter":"过滤","form_validate.required":"请输入 {0}","form.Entrypoint":"地址","form.name":"名称","form.status":"状态","form.token":"密钥","highlight_empty.sub_title":"通过选择一些文本并点击高亮按钮来创建一个批注。","highlight_empty.title":"没有批注","highlight_list.copy_note_success":"复制笔记成功","highlight_list.copy_text_success":"复制文本成功","highlight_list.copy_url_success":"复制链接成功","highlight_tool.add_highlight":"高亮","highlight_tool.cancel":"取消","highlight_tool.copy_text":"复制文本","highlight_tool.delete_highlight":"删除高亮","highlight_tool.edit_note":"编辑笔记","highlight_tool.save":"保存","highlight_tool.take_note":"记笔记","highlight.action.copyNote":"复制笔记","highlight.action.copyText":"复制高亮文本","highlight.action.copyUrl":"复制高亮链接","highlight.action.delete":"删除","highlight.action.EditNote":"编辑笔记","highlight.menu":"菜单","homepage.redirect_lang":"zh-CN","host_filter_label.host":"域名","host_filter_left_operand.host":"域名","host_filter_operator.is":"是","host_filter_operator.is_either_of":"属于","host_filter_operator.is_not":"不是","info_empty.sub_title":"选择网页以查看其详细信息","info_empty.title":"未选择网页","label_filter_label.any_label":"任何标签","label_filter_label.label":"标签","label_filter_label.labels_count":"{0} 个标签","label_filter_left_operand.label":"标签","label_filter_operator.does_not_include":"不包含","label_filter_operator.exclude_if_all":"不包含任何","label_filter_operator.exclude_if_any_of":"不包含任一","label_filter_operator.has":"有","label_filter_operator.includes":"包含","label_filter_operator.includes_all_of":"包含全部","label_filter_operator.includes_any_of":"包含任一","label_filter_operator.not_has":"没有",lang:xw,"left_panel_title.settings":"设置","left_sidebar_menu_group.library":"库","left_sidebar_menu_group.views":"视图","left_sidebar_menu.all":"全部","left_sidebar_menu.unread":"未读","left_sidebar_menu.upload":"上传","left_sidebar_menu.views_action_create_view":"创建视图","legal.credits":"Credits","legal.eula":"用户协议","legal.privacy_policy":"隐私政策","license.agree_ok":"好的","license.agree_part_1":"我已经阅读并同意","license.agree_part_2":"和","like_filter_left_operand.page":"页面","like_filter_operator.is":"是","like_filter_operator.is_not":"不是","like_filter.like":"喜欢","link_duplicate_filter_left_operand.link":"链接","link_duplicate_filter_operator.is":"是","link_duplicate_filter_operator.is_not":"不是","link_duplicate_filter_right_operand.duplicate":"重复","link_duplicate_filter.link_duplicate":"链接重复","login.password_incorrect":"密码错误","menu_developer.clear_cache":"清除缓存","menu_developer.config_folder":"打开配置文件夹","menu_developer.crash_dump":"打开崩溃记录文件夹","menu_developer.developer":"开发者","menu_developer.toggle_dev_tools":"切换开发者工具","menu_edit.copy":"复制","menu_edit.cut":"剪切","menu_edit.edit":"编辑","menu_edit.paste":"粘贴","menu_edit.select_all":"全选","menu_help.changelog":"更新日志","menu_help.contact_hamsterbase":"联系 hamsterbase","menu_help.developer_document":"开发文档","menu_help.github_issue":"GitHub 反馈","menu_help.guide":"帮助文档","menu_help.help":"帮助","menu_product.quit":"退出 {0}","menu_product.startup":"打开启动页面","menu_view.force_reload":"强制刷新","menu_view.reload":"刷新","menu_view.toggle_fullscreen":"切换全屏","menu_view.view":"视图","mobile_webpage.webpages_all":"全部","mobile_webpage.webpages_unread":"未读",no_open_webpage:kw,not_selected:Tw,"prompt_button.cancel":"取消","prompt_button.save":"保存","prompt.close":"关闭","prompt.limit":"限制","prompt.limit_count":"限制数量","prompt.limit.invalid":"限制无效","read_status_filter_left_operand.page":"页面","read_status_filter_operator.is":"是","read_status_filter_operator.is_not":"不是","read_status_filter_right_operand.read":"已读","read_status_filter.read_status":"阅读状态",remote_cancel:Rw,"remote_entrypoint.not_found":"请输入远程服务器地址",remote_reconnect:Aw,remote_save:Iw,remote_stop_sync:Ow,remote_sync:Lw,"remote_token.not_found":"请输入远程密钥","remote.not_found":"未找到远程","remotes_editor.placeholder_entrypoint":"地址","remotes_editor.placeholder_name":"客户端名字","remotes_editor.placeholder_token":"密钥","remotes_panel.add":"添加","remotes_panel.delete":"删除","remotes_prompt.name":"名称","remotes_prompt.title":"添加远程","search_input.placeholder":"搜索","search.not_found":"未找到","server_exit.code":"服务器异常, 错误码 {0}","server_exit.timeout":"服务器启动超时","settings_about.guide":"使用指南","settings_about.guide_subtitle":"访问 HamsterBase 用户指南","settings_about.language":"语言","settings_about.language_subtitle":"选择您的语言","settings_about.open":"打开","settings_api.api_server":"API 服务器","settings_api.copy":"拷贝","settings_api.copy_entrypoint":"拷贝 Entrypoint","settings_api.create_token":"创建密钥","settings_api.delete":"删除","settings_api.password":"密码","settings_api.password_input_disabled_title":"需要停止服务器以后才能修改密码","settings_api.password_subtitle":"服务器密码","settings_api.personal_api_tokens":"个人 API 密钥","settings_api.personal_api_tokens_subtile":"您可以使用这些密钥来访问您的应用程序","settings_api.port":"端口","settings_api.port_input_disabled_title":"请停止 API 服务器以后再修改端口。","settings_api.port_subtitle":"API 服务器端口","settings_api.server_error":"API 服务器启动失败","settings_api.server_status_running":"API 服务器当前地址为 {0}","settings_api.server_status_stop":"API 服务器已关闭","settings_api.start_server":"开启 API 服务器","settings_api.stop_server":"关闭 API 服务器","settings_appearance.auto":"自动","settings_appearance.dark":"深色","settings_appearance.light":"浅色","settings_appearance.theme":"主题","settings_appearance.theme_subtitle":"选择您的主题","settings_tab.about":"关于","settings_tab.api":"API","settings_tab.appearance":"外观","settings_tab.remotes":"远程","startup.create_workspace_description":"选择一个空的文件夹作为知识库, 或打开之前创建的知识库。","startup.delete_recent":"删除最近的","startup.no_recent_workspaces":"没有最近打开的知识库","startup.open_workspace":"打开知识库","startup.open_workspace_button":"打开","startup.recent_workspaces":"最近的知识库","tab_bar.search":"搜索","tab_bar.webpages":"网页","title_duplicate_filter_left_operand.title":"标题","title_duplicate_filter_operator.is":"是","title_duplicate_filter_operator.is_not":"不是","title_duplicate_filter_right_operand.duplicate":"重复","title_duplicate_filter.title_duplicate":"标题重复","upload_panel.browser_extension":"hamsterbase 是否有官方浏览器扩展？","upload_panel.browser_extension_description":"是的。hamsterbase 浏览器扩展支持直接在浏览器中进行注释，同时还支持保存快照。","upload_panel.drop_zone":"托放网页文件到这里 或者","upload_panel.drop_zone_browser":"浏览","upload_panel.drop_zone_description":"支持的格式: HTML, MHT, Webarchive","upload_panel.faq_link":"查看更多","upload_panel.import_webpage_description":"本文介绍 hamsterbase 的手动导入、自动导入功能。手动导入适合少量快照的场景，自动导入适合用于导入大量快照。","upload_panel.import_webpage_title":"如何导入网页快照？","upload_panel.save_webpage_description":"HTML / MHT (mhtml) / WebArchive 是三种常用的网页快照格式, 让你可以在离线情况下访问网页完整的内容。 本文将介绍如何在浏览器里将网页保存为快照。","upload_panel.save_webpage_title":"如何保存网页快照？","upload_panel.singlefile_description":"Singlefile 是一个开源浏览器插件，支持 Safari, Chrome, Edge 和 Firefox.  他可以帮助你把完整的网页保存为单个 HTML 文件。本文介绍了如何在 singlefile 中连接  Hamsterbase.  连接后你可以使用 singlefile 一键保存当前正在浏览的网页。","upload_panel.singlefile_title":"singlefile 如何连接 hamsterbase？","upload_panel.title":"导入网页","upload_status.added":"已添加","upload_status.error":"错误","upload_status.parsed":"已解析","upload_status.parsing":"解析中","upload_status.uploaded":"已上传","upload_status.uploading":"上传中","view_action.save":"保存","view_prompt.create_title":"创建视图","view_prompt.create_view":"创建视图","view_prompt.description":"描述","view_prompt.edit_title":"编辑视图","view_prompt.title":"标题",view_sort_by:Nw,"view_sort.add_time_asc":"添加时间: 从远到近","view_sort.add_time_desc":"添加时间: 从近到远","view_sort.annotate_count_asc":"批注数量: 从少到多","view_sort.annotate_count_desc":"批注数量: 从多到少","view_sort.random":"随机","view_sort.title_asc":"标题排序: 从 A 到 Z","view_sort.title_desc":"标题排序: 从 Z 到 A","webpage_content.no_webpage":"没有网页","webpage_detail.add_label":"添加标签","webpage_detail.added":"添加时间","webpage_detail.format":"文件格式","webpage_detail.labels":"标签","webpage_detail.link":"链接","webpage_detail.read":"已读","webpage_detail.read_status":"阅读状态","webpage_detail.size":"文件大小","webpage_detail.title":"标题","webpage_detail.unread":"未读","webpage_preview_action.close":"关闭网页预览","webpage_preview_action.filter":"筛选","webpage_preview_action.next":"下一个网页","webpage_preview_action.previous":"上一个网页","webpages_layout.column":"列","webpages_layout.delete_webpage":"删除网页","webpages_layout.like":"赞","webpages_layout.list":"列表","webpages_layout.mark_read":"标记为已读","webpages_layout.mark_unread":"标记为未读","webpages_menu.clear_filter":"清空筛选","webpages_menu.create_view":"创建视图","webpages_menu.disable_limit":"禁用限制","webpages_menu.edit_limit":"编辑限制","webpages_menu.edit_view":"编辑视图","webpages_menu.enable_limit":"限制网页数量","webpages_menu.open_in_browser":"在浏览器中打开","webpages_menu.rss":"打开 RSS 订阅","webpages_menu.sort_by":"排序方式","webpages.go_upload":"上传","webpages.no_data":"无网页","webpages.toolbar.info":"信息","webpages.toolbar.more":"更多","webpages.toolbar.notes":"笔记","webserver.invalid_port":"端口格式错误","webserver.portInUse":"端口已经被使用","workbench.invalid":"请选择一个有效的知识库文件夹"},Pw=localStorage.getItem("hamsterbase-locale")??navigator.language,Vp={"en-US":["en-US","en"],"zh-CN":["zh-CN","zh"]};let Cd="en-US";Object.keys(Vp).forEach(e=>{Vp[e].includes(Pw)&&(Cd=e)});globalThis.language=Cd;Cd==="zh-CN"&&(globalThis.i18nMessages=Mw);const Vo=typeof Buffer<"u";let Fu,$u;class ce{static alloc(t){return Vo?new ce(Buffer.allocUnsafe(t)):new ce(new Uint8Array(t))}static wrap(t){return Vo&&!Buffer.isBuffer(t)&&(t=Buffer.from(t.buffer,t.byteOffset,t.byteLength)),new ce(t)}static fromString(t,n){return!((n==null?void 0:n.dontUseNodeBuffer)||!1)&&Vo?new ce(Buffer.from(t)):(Fu||(Fu=new TextEncoder),new ce(Fu.encode(t)))}static fromByteArray(t){const n=ce.alloc(t.length);for(let r=0,i=t.length;r<i;r++)n.buffer[r]=t[r];return n}static concat(t,n){if(typeof n>"u"){n=0;for(let s=0,o=t.length;s<o;s++)n+=t[s].byteLength}const r=ce.alloc(n);let i=0;for(let s=0,o=t.length;s<o;s++){const a=t[s];r.set(a,i),i+=a.byteLength}return r}constructor(t){this.buffer=t,this.byteLength=this.buffer.byteLength}clone(){const t=ce.alloc(this.byteLength);return t.set(this),t}toString(){return Vo?this.buffer.toString():($u||($u=new TextDecoder),$u.decode(this.buffer))}slice(t,n){return new ce(this.buffer.subarray(t,n))}set(t,n){if(t instanceof ce)this.buffer.set(t.buffer,n);else if(t instanceof Uint8Array)this.buffer.set(t,n);else if(t instanceof ArrayBuffer)this.buffer.set(new Uint8Array(t),n);else if(ArrayBuffer.isView(t))this.buffer.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength),n);else throw new Error("Unkown argument 'array'")}readUInt32BE(t){return Cw(this.buffer,t)}writeUInt32BE(t,n){Dw(this.buffer,t,n)}readUInt32LE(t){return Uw(this.buffer,t)}writeUInt32LE(t,n){Fw(this.buffer,t,n)}readUInt8(t){return $w(this.buffer,t)}writeUInt8(t,n){Bw(this.buffer,t,n)}}function Cw(e,t){return e[t]*2**24+e[t+1]*2**16+e[t+2]*2**8+e[t+3]}function Dw(e,t,n){e[n+3]=t,t=t>>>8,e[n+2]=t,t=t>>>8,e[n+1]=t,t=t>>>8,e[n]=t}function Uw(e,t){return e[t+0]<<0>>>0|e[t+1]<<8>>>0|e[t+2]<<16>>>0|e[t+3]<<24>>>0}function Fw(e,t,n){e[n+0]=t&255,t=t>>>8,e[n+1]=t&255,t=t>>>8,e[n+2]=t&255,t=t>>>8,e[n+3]=t&255}function $w(e,t){return e[t]}function Bw(e,t,n){e[n]=t}class Vw{constructor(){this.listeners=[],this.unexpectedErrorHandler=function(t){setTimeout(()=>{throw t.stack?new Error(`${t.message}

${t.stack}`):t},0)}}addListener(t){return this.listeners.push(t),()=>{this._removeListener(t)}}emit(t){this.listeners.forEach(n=>{n(t)})}_removeListener(t){this.listeners.splice(this.listeners.indexOf(t),1)}setUnexpectedErrorHandler(t){this.unexpectedErrorHandler=t}getUnexpectedErrorHandler(){return this.unexpectedErrorHandler}onUnexpectedError(t){this.unexpectedErrorHandler(t),this.emit(t)}onUnexpectedExternalError(t){this.unexpectedErrorHandler(t)}}const Ww=new Vw;function jw(e){zw(e)||Ww.onUnexpectedError(e)}const za="Canceled";function zw(e){return e instanceof Error&&e.name===za&&e.message===za}class Wo extends Error{constructor(){super(za),this.name=this.message}}function Hw(){const e=new Error(za);return e.name=e.message,e}function Gw(e){return e?new Error(`Illegal state: ${e}`):new Error("Illegal state")}var zc;(e=>{function t(_){return _&&typeof _=="object"&&typeof _[Symbol.iterator]=="function"}e.is=t;const n=Object.freeze([]);function r(){return n}e.empty=r;function*i(_){yield _}e.single=i;function s(_){return _||n}e.from=s;function o(_){return!_||_[Symbol.iterator]().next().done===!0}e.isEmpty=o;function a(_){return _[Symbol.iterator]().next().value}e.first=a;function l(_,y){for(const p of _)if(y(p))return!0;return!1}e.some=l;function u(_,y){for(const p of _)if(y(p))return p}e.find=u;function*c(_,y){for(const p of _)y(p)&&(yield p)}e.filter=c;function*d(_,y){for(const p of _)yield y(p)}e.map=d;function*f(..._){for(const y of _)for(const p of y)yield p}e.concat=f;function*g(_){for(const y of _)for(const p of y)yield p}e.concatNested=g;function b(_,y,p){let S=p;for(const w of _)S=y(S,w);return S}e.reduce=b;function*v(_,y,p=_.length){for(y<0&&(y+=_.length),p<0?p+=_.length:p>_.length&&(p=_.length);y<p;y++)yield _[y]}e.slice=v;function h(_,y=Number.POSITIVE_INFINITY){const p=[];if(y===0)return[p,_];const S=_[Symbol.iterator]();for(let w=0;w<y;w++){const E=S.next();if(E.done)return[p,e.empty()];p.push(E.value)}return[p,{[Symbol.iterator](){return S}}]}e.consume=h;function m(_,y,p=(S,w)=>S===w){const S=_[Symbol.iterator](),w=y[Symbol.iterator]();for(;;){const E=S.next(),x=w.next();if(E.done!==x.done)return!1;if(E.done)return!0;if(!p(E.value,x.value))return!1}}e.equals=m})(zc||(zc={}));function qw(e){}class Yw extends Error{constructor(t){super(`Encountered errors while disposing of store. Errors: [${t.join(", ")}]`),this.errors=t}}function jl(e){if(zc.is(e)){let t=[];for(const n of e)if(n)try{n.dispose()}catch(r){t.push(r)}if(t.length===1)throw t[0];if(t.length>1)throw new Yw(t);return Array.isArray(e)?[]:e}if(e)return e.dispose(),e}function Tv(...e){return e.forEach(qw),Dd(()=>jl(e))}function Dd(e){return{dispose:()=>{e()}}}const Rv=class{constructor(){this._toDispose=new Set,this._isDisposed=!1}dispose(){this._isDisposed||(this._isDisposed=!0,this.clear())}clear(){try{jl(this._toDispose.values())}finally{this._toDispose.clear()}}add(e){if(!e)return e;if(e===this)throw new Error("Cannot register a disposable on itself!");return this._isDisposed?Rv.DISABLE_DISPOSED_WARNING||console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack):this._toDispose.add(e),e}};let Ud=Rv;Ud.DISABLE_DISPOSED_WARNING=!1;class Di{constructor(){this._store=new Ud}dispose(){this._store.dispose()}_register(t){if(t===this)throw new Error("Cannot register a disposable on itself!");return this._store.add(t)}}Di.None=Object.freeze({dispose(){}});const Ha=class{constructor(e){this.element=e,this.next=Ha.Undefined,this.prev=Ha.Undefined}};let Le=Ha;Le.Undefined=new Ha(void 0);class Wp{constructor(){this._first=Le.Undefined,this._last=Le.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===Le.Undefined}clear(){this._first=Le.Undefined,this._last=Le.Undefined,this._size=0}unshift(t){return this._insert(t,!1)}push(t){return this._insert(t,!0)}_insert(t,n){const r=new Le(t);if(this._first===Le.Undefined)this._first=r,this._last=r;else if(n){const s=this._last;this._last=r,r.prev=s,s.next=r}else{const s=this._first;this._first=r,r.next=s,s.prev=r}this._size+=1;let i=!1;return()=>{i||(i=!0,this._remove(r))}}shift(){if(this._first===Le.Undefined)return;const t=this._first.element;return this._remove(this._first),t}pop(){if(this._last===Le.Undefined)return;const t=this._last.element;return this._remove(this._last),t}_remove(t){if(t.prev!==Le.Undefined&&t.next!==Le.Undefined){const n=t.prev;n.next=t.next,t.next.prev=n}else t.prev===Le.Undefined&&t.next===Le.Undefined?(this._first=Le.Undefined,this._last=Le.Undefined):t.next===Le.Undefined?(this._last=this._last.prev,this._last.next=Le.Undefined):t.prev===Le.Undefined&&(this._first=this._first.next,this._first.prev=Le.Undefined);this._size-=1}*[Symbol.iterator](){let t=this._first;for(;t!==Le.Undefined;)yield t.element,t=t.next}}const wa="en";let Hc=!1,Gc=!1,Bu=!1,Av=!1,Iv=!1,jo,Sa=wa,Qw,cr;const lt=typeof self=="object"?self:typeof global=="object"?global:{};let ye;typeof process<"u"?ye=process:typeof lt.vscode<"u"&&(ye=lt.vscode.process);var xv;const Ov=typeof((xv=ye==null?void 0:ye.versions)==null?void 0:xv.electron)=="string"&&ye.type==="renderer",Xw=Ov&&(ye==null?void 0:ye.sandboxed);(()=>{if(Xw)return"bypassHeatCheck";const e=ye==null?void 0:ye.env.ENABLE_VSCODE_BROWSER_CODE_LOADING;if(typeof e=="string")return e==="none"||e==="code"||e==="bypassHeatCheck"||e==="bypassHeatCheckAndEagerCompile"?e:"bypassHeatCheck"})();if(typeof navigator=="object"&&!Ov)cr=navigator.userAgent,Hc=cr.indexOf("Windows")>=0,Gc=cr.indexOf("Macintosh")>=0,(cr.indexOf("Macintosh")>=0||cr.indexOf("iPad")>=0||cr.indexOf("iPhone")>=0)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>0,Bu=cr.indexOf("Linux")>=0,Iv=!0,jo=navigator.language,Sa=jo;else if(typeof ye=="object"){Hc=ye.platform==="win32",Gc=ye.platform==="darwin",Bu=ye.platform==="linux",Bu&&ye.env.SNAP&&ye.env.SNAP_REVISION,jo=wa,Sa=wa;const e=ye.env.VSCODE_NLS_CONFIG;if(e)try{const t=JSON.parse(e),n=t.availableLanguages["*"];jo=t.locale,Sa=n||wa,Qw=t._translationsConfigFile}catch{}Av=!0}else console.error("Unable to resolve platform.");const Ei=Hc,Qs=Gc,Vu=Av,Kw=Iv,Rn=Sa;var jp;(e=>{function t(){return Rn}e.value=t;function n(){return Rn.length===2?Rn==="en":Rn.length>=3?Rn[0]==="e"&&Rn[1]==="n"&&Rn[2]==="-":!1}e.isDefaultVariant=n;function r(){return Rn==="en"}e.isDefault=r})(jp||(jp={}));const zp=function(){if(lt.setImmediate)return lt.setImmediate.bind(lt);if(typeof lt.postMessage=="function"&&!lt.importScripts){let n=[];lt.addEventListener("message",i=>{if(i.data&&i.data.vscodeSetImmediateId)for(let s=0,o=n.length;s<o;s++){const a=n[s];if(a.id===i.data.vscodeSetImmediateId){n.splice(s,1),a.callback();return}}});let r=0;return i=>{const s=++r;n.push({id:s,callback:i}),lt.postMessage({vscodeSetImmediateId:s},"*")}}if(typeof(ye==null?void 0:ye.nextTick)=="function")return ye.nextTick.bind(ye);const t=Promise.resolve();return n=>t.then(n)}(),Zw=lt.performance&&typeof lt.performance.now=="function";class Fd{static create(t=!0){return new Fd(t)}constructor(t){this._highResolution=Zw&&t,this._startTime=this._now(),this._stopTime=-1}stop(){this._stopTime=this._now()}elapsed(){return this._stopTime!==-1?this._stopTime-this._startTime:this._now()-this._startTime}_now(){return this._highResolution?lt.performance.now():Date.now()}}var xi;(e=>{e.None=()=>Di.None;function t(y){return(p,S=null,w)=>{let E=!1,x;return x=y(k=>{if(!E)return x?x.dispose():E=!0,p.call(S,k)},null,w),E&&x.dispose(),x}}e.once=t;function n(y,p){return l((S,w=null,E)=>y(x=>S.call(w,p(x)),null,E))}e.map=n;function r(y,p){return l((S,w=null,E)=>y(x=>{p(x),S.call(w,x)},null,E))}e.forEach=r;function i(y,p){return l((S,w=null,E)=>y(x=>p(x)&&S.call(w,x),null,E))}e.filter=i;function s(y){return y}e.signal=s;function o(...y){return(p,S=null,w)=>Tv(...y.map(E=>E(x=>p.call(S,x),null,w)))}e.any=o;function a(y,p,S){let w=S;return n(y,E=>(w=p(w,E),w))}e.reduce=a;function l(y){let p;const S=new ie({onFirstListenerAdd(){p=y(S.fire,S)},onLastListenerRemove(){p.dispose()}});return S.event}e.snapshot=l;function u(y,p,S=100,w=!1,E){let x,k,A,Y=0;const z=new ie({leakWarningThreshold:E,onFirstListenerAdd(){x=y(C=>{Y++,k=p(k,C),w&&!A&&(z.fire(k),k=void 0),clearTimeout(A),A=setTimeout(()=>{const L=k;k=void 0,A=void 0,(!w||Y>1)&&z.fire(L),Y=0},S)})},onLastListenerRemove(){x.dispose()}});return z.event}e.debounce=u;function c(y){const p=new Date().getTime();return n(t(y),S=>new Date().getTime()-p)}e.stopwatch=c;function d(y){let p=!0,S;return i(y,w=>{const E=p||w!==S;return p=!1,S=w,E})}e.latch=d;function f(y,p=!1,S=[]){let w=S.slice(),E=y(A=>{w?w.push(A):k.fire(A)});const x=()=>{w&&w.forEach(A=>k.fire(A)),w=null},k=new ie({onFirstListenerAdd(){E||(E=y(A=>k.fire(A)))},onFirstListenerDidAdd(){w&&(p?setTimeout(x):x())},onLastListenerRemove(){E&&E.dispose(),E=null}});return k.event}e.buffer=f;class g{constructor(p){this.event=p}map(p){return new g(n(this.event,p))}forEach(p){return new g(r(this.event,p))}filter(p){return new g(i(this.event,p))}reduce(p,S){return new g(a(this.event,p,S))}latch(){return new g(d(this.event))}debounce(p,S=100,w=!1,E){return new g(u(this.event,p,S,w,E))}on(p,S,w){return this.event(p,S,w)}once(p,S,w){return t(this.event)(p,S,w)}}function b(y){return new g(y)}e.chain=b;function v(y,p,S=w=>w){const w=(...A)=>k.fire(S(...A)),E=()=>y.on(p,w),x=()=>y.removeListener(p,w),k=new ie({onFirstListenerAdd:E,onLastListenerRemove:x});return k.event}e.fromNodeEventEmitter=v;function h(y,p,S=w=>w){const w=(...A)=>k.fire(S(...A)),E=()=>y.addEventListener(p,w),x=()=>y.removeEventListener(p,w),k=new ie({onFirstListenerAdd:E,onLastListenerRemove:x});return k.event}e.fromDOMEventEmitter=h;function m(y){const p=new ie;let S=!1;return y.then(void 0,()=>null).then(()=>{S?p.fire(void 0):setTimeout(()=>p.fire(void 0),0)}),S=!0,p.event}e.fromPromise=m;function _(y){return new Promise(p=>t(y)(p))}e.toPromise=_})(xi||(xi={}));const Lv=class{constructor(e){this._listenerCount=0,this._invocationCount=0,this._elapsedOverall=0,this._name=`${e}_${Lv._idPool++}`}start(e){this._stopWatch=new Fd(!0),this._listenerCount=e}stop(){if(this._stopWatch){const e=this._stopWatch.elapsed();this._elapsedOverall+=e,this._invocationCount+=1,console.info(`did FIRE ${this._name}: elapsed_ms: ${e.toFixed(5)}, listener: ${this._listenerCount} (elapsed_overall: ${this._elapsedOverall.toFixed(2)}, invocations: ${this._invocationCount})`),this._stopWatch=void 0}}};let Nv=Lv;Nv._idPool=0;const Mv=class{constructor(e){var t;this._disposed=!1,this._options=e,this._leakageMon=void 0,this._perfMon=(t=this._options)!=null&&t._profName?new Nv(this._options._profName):void 0}get event(){return this._event||(this._event=(e,t,n)=>{var a;this._listeners||(this._listeners=new Wp);const r=this._listeners.isEmpty();r&&this._options&&this._options.onFirstListenerAdd&&this._options.onFirstListenerAdd(this);const i=this._listeners.push(t?[e,t]:e);r&&this._options&&this._options.onFirstListenerDidAdd&&this._options.onFirstListenerDidAdd(this),this._options&&this._options.onListenerDidAdd&&this._options.onListenerDidAdd(this,e,t);const s=(a=this._leakageMon)==null?void 0:a.check(this._listeners.size);let o;return o={dispose:()=>{s&&s(),o.dispose=Mv._noop,this._disposed||(i(),this._options&&this._options.onLastListenerRemove&&(this._listeners&&!this._listeners.isEmpty()||this._options.onLastListenerRemove(this)))}},n instanceof Ud?n.add(o):Array.isArray(n)&&n.push(o),o}),this._event}fire(e){var t,n;if(this._listeners){this._deliveryQueue||(this._deliveryQueue=new Wp);for(let r of this._listeners)this._deliveryQueue.push([r,e]);for((t=this._perfMon)==null||t.start(this._deliveryQueue.size);this._deliveryQueue.size>0;){const[r,i]=this._deliveryQueue.shift();try{typeof r=="function"?r.call(void 0,i):r[0].call(r[1],i)}catch(s){jw(s)}}(n=this._perfMon)==null||n.stop()}}dispose(){var e,t,n;(e=this._listeners)==null||e.clear(),(t=this._deliveryQueue)==null||t.clear(),(n=this._leakageMon)==null||n.dispose(),this._disposed=!0}};let ie=Mv;ie._noop=function(){};const Pv=Object.freeze(function(e,t){const n=setTimeout(e.bind(t),0);return{dispose(){clearTimeout(n)}}});var Xs;(e=>{function t(n){return n===e.None||n===e.Cancelled||n instanceof Ea?!0:!n||typeof n!="object"?!1:typeof n.isCancellationRequested=="boolean"&&typeof n.onCancellationRequested=="function"}e.isCancellationToken=t,e.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:xi.None}),e.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:Pv})})(Xs||(Xs={}));class Ea{constructor(){this._isCancelled=!1,this._emitter=null}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?Pv:(this._emitter||(this._emitter=new ie),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=null)}}class Cv{constructor(t){this._token=void 0,this._parentListener=void 0,this._parentListener=t&&t.onCancellationRequested(this.cancel,this)}get token(){return this._token||(this._token=new Ea),this._token}cancel(){this._token?this._token instanceof Ea&&this._token.cancel():this._token=Xs.Cancelled}dispose(t=!1){t&&this.cancel(),this._parentListener&&this._parentListener.dispose(),this._token?this._token instanceof Ea&&this._token.dispose():this._token=Xs.None}}var q=(e=>(e[e.Null=0]="Null",e[e.Backspace=8]="Backspace",e[e.Tab=9]="Tab",e[e.LineFeed=10]="LineFeed",e[e.CarriageReturn=13]="CarriageReturn",e[e.Space=32]="Space",e[e.ExclamationMark=33]="ExclamationMark",e[e.DoubleQuote=34]="DoubleQuote",e[e.Hash=35]="Hash",e[e.DollarSign=36]="DollarSign",e[e.PercentSign=37]="PercentSign",e[e.Ampersand=38]="Ampersand",e[e.SingleQuote=39]="SingleQuote",e[e.OpenParen=40]="OpenParen",e[e.CloseParen=41]="CloseParen",e[e.Asterisk=42]="Asterisk",e[e.Plus=43]="Plus",e[e.Comma=44]="Comma",e[e.Dash=45]="Dash",e[e.Period=46]="Period",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Colon=58]="Colon",e[e.Semicolon=59]="Semicolon",e[e.LessThan=60]="LessThan",e[e.Equals=61]="Equals",e[e.GreaterThan=62]="GreaterThan",e[e.QuestionMark=63]="QuestionMark",e[e.AtSign=64]="AtSign",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.G=71]="G",e[e.H=72]="H",e[e.I=73]="I",e[e.J=74]="J",e[e.K=75]="K",e[e.L=76]="L",e[e.M=77]="M",e[e.N=78]="N",e[e.O=79]="O",e[e.P=80]="P",e[e.Q=81]="Q",e[e.R=82]="R",e[e.S=83]="S",e[e.T=84]="T",e[e.U=85]="U",e[e.V=86]="V",e[e.W=87]="W",e[e.X=88]="X",e[e.Y=89]="Y",e[e.Z=90]="Z",e[e.OpenSquareBracket=91]="OpenSquareBracket",e[e.Backslash=92]="Backslash",e[e.CloseSquareBracket=93]="CloseSquareBracket",e[e.Caret=94]="Caret",e[e.Underline=95]="Underline",e[e.BackTick=96]="BackTick",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.g=103]="g",e[e.h=104]="h",e[e.i=105]="i",e[e.j=106]="j",e[e.k=107]="k",e[e.l=108]="l",e[e.m=109]="m",e[e.n=110]="n",e[e.o=111]="o",e[e.p=112]="p",e[e.q=113]="q",e[e.r=114]="r",e[e.s=115]="s",e[e.t=116]="t",e[e.u=117]="u",e[e.v=118]="v",e[e.w=119]="w",e[e.x=120]="x",e[e.y=121]="y",e[e.z=122]="z",e[e.OpenCurlyBrace=123]="OpenCurlyBrace",e[e.Pipe=124]="Pipe",e[e.CloseCurlyBrace=125]="CloseCurlyBrace",e[e.Tilde=126]="Tilde",e[e.U_Combining_Grave_Accent=768]="U_Combining_Grave_Accent",e[e.U_Combining_Acute_Accent=769]="U_Combining_Acute_Accent",e[e.U_Combining_Circumflex_Accent=770]="U_Combining_Circumflex_Accent",e[e.U_Combining_Tilde=771]="U_Combining_Tilde",e[e.U_Combining_Macron=772]="U_Combining_Macron",e[e.U_Combining_Overline=773]="U_Combining_Overline",e[e.U_Combining_Breve=774]="U_Combining_Breve",e[e.U_Combining_Dot_Above=775]="U_Combining_Dot_Above",e[e.U_Combining_Diaeresis=776]="U_Combining_Diaeresis",e[e.U_Combining_Hook_Above=777]="U_Combining_Hook_Above",e[e.U_Combining_Ring_Above=778]="U_Combining_Ring_Above",e[e.U_Combining_Double_Acute_Accent=779]="U_Combining_Double_Acute_Accent",e[e.U_Combining_Caron=780]="U_Combining_Caron",e[e.U_Combining_Vertical_Line_Above=781]="U_Combining_Vertical_Line_Above",e[e.U_Combining_Double_Vertical_Line_Above=782]="U_Combining_Double_Vertical_Line_Above",e[e.U_Combining_Double_Grave_Accent=783]="U_Combining_Double_Grave_Accent",e[e.U_Combining_Candrabindu=784]="U_Combining_Candrabindu",e[e.U_Combining_Inverted_Breve=785]="U_Combining_Inverted_Breve",e[e.U_Combining_Turned_Comma_Above=786]="U_Combining_Turned_Comma_Above",e[e.U_Combining_Comma_Above=787]="U_Combining_Comma_Above",e[e.U_Combining_Reversed_Comma_Above=788]="U_Combining_Reversed_Comma_Above",e[e.U_Combining_Comma_Above_Right=789]="U_Combining_Comma_Above_Right",e[e.U_Combining_Grave_Accent_Below=790]="U_Combining_Grave_Accent_Below",e[e.U_Combining_Acute_Accent_Below=791]="U_Combining_Acute_Accent_Below",e[e.U_Combining_Left_Tack_Below=792]="U_Combining_Left_Tack_Below",e[e.U_Combining_Right_Tack_Below=793]="U_Combining_Right_Tack_Below",e[e.U_Combining_Left_Angle_Above=794]="U_Combining_Left_Angle_Above",e[e.U_Combining_Horn=795]="U_Combining_Horn",e[e.U_Combining_Left_Half_Ring_Below=796]="U_Combining_Left_Half_Ring_Below",e[e.U_Combining_Up_Tack_Below=797]="U_Combining_Up_Tack_Below",e[e.U_Combining_Down_Tack_Below=798]="U_Combining_Down_Tack_Below",e[e.U_Combining_Plus_Sign_Below=799]="U_Combining_Plus_Sign_Below",e[e.U_Combining_Minus_Sign_Below=800]="U_Combining_Minus_Sign_Below",e[e.U_Combining_Palatalized_Hook_Below=801]="U_Combining_Palatalized_Hook_Below",e[e.U_Combining_Retroflex_Hook_Below=802]="U_Combining_Retroflex_Hook_Below",e[e.U_Combining_Dot_Below=803]="U_Combining_Dot_Below",e[e.U_Combining_Diaeresis_Below=804]="U_Combining_Diaeresis_Below",e[e.U_Combining_Ring_Below=805]="U_Combining_Ring_Below",e[e.U_Combining_Comma_Below=806]="U_Combining_Comma_Below",e[e.U_Combining_Cedilla=807]="U_Combining_Cedilla",e[e.U_Combining_Ogonek=808]="U_Combining_Ogonek",e[e.U_Combining_Vertical_Line_Below=809]="U_Combining_Vertical_Line_Below",e[e.U_Combining_Bridge_Below=810]="U_Combining_Bridge_Below",e[e.U_Combining_Inverted_Double_Arch_Below=811]="U_Combining_Inverted_Double_Arch_Below",e[e.U_Combining_Caron_Below=812]="U_Combining_Caron_Below",e[e.U_Combining_Circumflex_Accent_Below=813]="U_Combining_Circumflex_Accent_Below",e[e.U_Combining_Breve_Below=814]="U_Combining_Breve_Below",e[e.U_Combining_Inverted_Breve_Below=815]="U_Combining_Inverted_Breve_Below",e[e.U_Combining_Tilde_Below=816]="U_Combining_Tilde_Below",e[e.U_Combining_Macron_Below=817]="U_Combining_Macron_Below",e[e.U_Combining_Low_Line=818]="U_Combining_Low_Line",e[e.U_Combining_Double_Low_Line=819]="U_Combining_Double_Low_Line",e[e.U_Combining_Tilde_Overlay=820]="U_Combining_Tilde_Overlay",e[e.U_Combining_Short_Stroke_Overlay=821]="U_Combining_Short_Stroke_Overlay",e[e.U_Combining_Long_Stroke_Overlay=822]="U_Combining_Long_Stroke_Overlay",e[e.U_Combining_Short_Solidus_Overlay=823]="U_Combining_Short_Solidus_Overlay",e[e.U_Combining_Long_Solidus_Overlay=824]="U_Combining_Long_Solidus_Overlay",e[e.U_Combining_Right_Half_Ring_Below=825]="U_Combining_Right_Half_Ring_Below",e[e.U_Combining_Inverted_Bridge_Below=826]="U_Combining_Inverted_Bridge_Below",e[e.U_Combining_Square_Below=827]="U_Combining_Square_Below",e[e.U_Combining_Seagull_Below=828]="U_Combining_Seagull_Below",e[e.U_Combining_X_Above=829]="U_Combining_X_Above",e[e.U_Combining_Vertical_Tilde=830]="U_Combining_Vertical_Tilde",e[e.U_Combining_Double_Overline=831]="U_Combining_Double_Overline",e[e.U_Combining_Grave_Tone_Mark=832]="U_Combining_Grave_Tone_Mark",e[e.U_Combining_Acute_Tone_Mark=833]="U_Combining_Acute_Tone_Mark",e[e.U_Combining_Greek_Perispomeni=834]="U_Combining_Greek_Perispomeni",e[e.U_Combining_Greek_Koronis=835]="U_Combining_Greek_Koronis",e[e.U_Combining_Greek_Dialytika_Tonos=836]="U_Combining_Greek_Dialytika_Tonos",e[e.U_Combining_Greek_Ypogegrammeni=837]="U_Combining_Greek_Ypogegrammeni",e[e.U_Combining_Bridge_Above=838]="U_Combining_Bridge_Above",e[e.U_Combining_Equals_Sign_Below=839]="U_Combining_Equals_Sign_Below",e[e.U_Combining_Double_Vertical_Line_Below=840]="U_Combining_Double_Vertical_Line_Below",e[e.U_Combining_Left_Angle_Below=841]="U_Combining_Left_Angle_Below",e[e.U_Combining_Not_Tilde_Above=842]="U_Combining_Not_Tilde_Above",e[e.U_Combining_Homothetic_Above=843]="U_Combining_Homothetic_Above",e[e.U_Combining_Almost_Equal_To_Above=844]="U_Combining_Almost_Equal_To_Above",e[e.U_Combining_Left_Right_Arrow_Below=845]="U_Combining_Left_Right_Arrow_Below",e[e.U_Combining_Upwards_Arrow_Below=846]="U_Combining_Upwards_Arrow_Below",e[e.U_Combining_Grapheme_Joiner=847]="U_Combining_Grapheme_Joiner",e[e.U_Combining_Right_Arrowhead_Above=848]="U_Combining_Right_Arrowhead_Above",e[e.U_Combining_Left_Half_Ring_Above=849]="U_Combining_Left_Half_Ring_Above",e[e.U_Combining_Fermata=850]="U_Combining_Fermata",e[e.U_Combining_X_Below=851]="U_Combining_X_Below",e[e.U_Combining_Left_Arrowhead_Below=852]="U_Combining_Left_Arrowhead_Below",e[e.U_Combining_Right_Arrowhead_Below=853]="U_Combining_Right_Arrowhead_Below",e[e.U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below=854]="U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below",e[e.U_Combining_Right_Half_Ring_Above=855]="U_Combining_Right_Half_Ring_Above",e[e.U_Combining_Dot_Above_Right=856]="U_Combining_Dot_Above_Right",e[e.U_Combining_Asterisk_Below=857]="U_Combining_Asterisk_Below",e[e.U_Combining_Double_Ring_Below=858]="U_Combining_Double_Ring_Below",e[e.U_Combining_Zigzag_Above=859]="U_Combining_Zigzag_Above",e[e.U_Combining_Double_Breve_Below=860]="U_Combining_Double_Breve_Below",e[e.U_Combining_Double_Breve=861]="U_Combining_Double_Breve",e[e.U_Combining_Double_Macron=862]="U_Combining_Double_Macron",e[e.U_Combining_Double_Macron_Below=863]="U_Combining_Double_Macron_Below",e[e.U_Combining_Double_Tilde=864]="U_Combining_Double_Tilde",e[e.U_Combining_Double_Inverted_Breve=865]="U_Combining_Double_Inverted_Breve",e[e.U_Combining_Double_Rightwards_Arrow_Below=866]="U_Combining_Double_Rightwards_Arrow_Below",e[e.U_Combining_Latin_Small_Letter_A=867]="U_Combining_Latin_Small_Letter_A",e[e.U_Combining_Latin_Small_Letter_E=868]="U_Combining_Latin_Small_Letter_E",e[e.U_Combining_Latin_Small_Letter_I=869]="U_Combining_Latin_Small_Letter_I",e[e.U_Combining_Latin_Small_Letter_O=870]="U_Combining_Latin_Small_Letter_O",e[e.U_Combining_Latin_Small_Letter_U=871]="U_Combining_Latin_Small_Letter_U",e[e.U_Combining_Latin_Small_Letter_C=872]="U_Combining_Latin_Small_Letter_C",e[e.U_Combining_Latin_Small_Letter_D=873]="U_Combining_Latin_Small_Letter_D",e[e.U_Combining_Latin_Small_Letter_H=874]="U_Combining_Latin_Small_Letter_H",e[e.U_Combining_Latin_Small_Letter_M=875]="U_Combining_Latin_Small_Letter_M",e[e.U_Combining_Latin_Small_Letter_R=876]="U_Combining_Latin_Small_Letter_R",e[e.U_Combining_Latin_Small_Letter_T=877]="U_Combining_Latin_Small_Letter_T",e[e.U_Combining_Latin_Small_Letter_V=878]="U_Combining_Latin_Small_Letter_V",e[e.U_Combining_Latin_Small_Letter_X=879]="U_Combining_Latin_Small_Letter_X",e[e.LINE_SEPARATOR=8232]="LINE_SEPARATOR",e[e.PARAGRAPH_SEPARATOR=8233]="PARAGRAPH_SEPARATOR",e[e.NEXT_LINE=133]="NEXT_LINE",e[e.U_CIRCUMFLEX=94]="U_CIRCUMFLEX",e[e.U_GRAVE_ACCENT=96]="U_GRAVE_ACCENT",e[e.U_DIAERESIS=168]="U_DIAERESIS",e[e.U_MACRON=175]="U_MACRON",e[e.U_ACUTE_ACCENT=180]="U_ACUTE_ACCENT",e[e.U_CEDILLA=184]="U_CEDILLA",e[e.U_MODIFIER_LETTER_LEFT_ARROWHEAD=706]="U_MODIFIER_LETTER_LEFT_ARROWHEAD",e[e.U_MODIFIER_LETTER_RIGHT_ARROWHEAD=707]="U_MODIFIER_LETTER_RIGHT_ARROWHEAD",e[e.U_MODIFIER_LETTER_UP_ARROWHEAD=708]="U_MODIFIER_LETTER_UP_ARROWHEAD",e[e.U_MODIFIER_LETTER_DOWN_ARROWHEAD=709]="U_MODIFIER_LETTER_DOWN_ARROWHEAD",e[e.U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING=722]="U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING",e[e.U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING=723]="U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING",e[e.U_MODIFIER_LETTER_UP_TACK=724]="U_MODIFIER_LETTER_UP_TACK",e[e.U_MODIFIER_LETTER_DOWN_TACK=725]="U_MODIFIER_LETTER_DOWN_TACK",e[e.U_MODIFIER_LETTER_PLUS_SIGN=726]="U_MODIFIER_LETTER_PLUS_SIGN",e[e.U_MODIFIER_LETTER_MINUS_SIGN=727]="U_MODIFIER_LETTER_MINUS_SIGN",e[e.U_BREVE=728]="U_BREVE",e[e.U_DOT_ABOVE=729]="U_DOT_ABOVE",e[e.U_RING_ABOVE=730]="U_RING_ABOVE",e[e.U_OGONEK=731]="U_OGONEK",e[e.U_SMALL_TILDE=732]="U_SMALL_TILDE",e[e.U_DOUBLE_ACUTE_ACCENT=733]="U_DOUBLE_ACUTE_ACCENT",e[e.U_MODIFIER_LETTER_RHOTIC_HOOK=734]="U_MODIFIER_LETTER_RHOTIC_HOOK",e[e.U_MODIFIER_LETTER_CROSS_ACCENT=735]="U_MODIFIER_LETTER_CROSS_ACCENT",e[e.U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR=741]="U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR",e[e.U_MODIFIER_LETTER_HIGH_TONE_BAR=742]="U_MODIFIER_LETTER_HIGH_TONE_BAR",e[e.U_MODIFIER_LETTER_MID_TONE_BAR=743]="U_MODIFIER_LETTER_MID_TONE_BAR",e[e.U_MODIFIER_LETTER_LOW_TONE_BAR=744]="U_MODIFIER_LETTER_LOW_TONE_BAR",e[e.U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR=745]="U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR",e[e.U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK=746]="U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK",e[e.U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK=747]="U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK",e[e.U_MODIFIER_LETTER_UNASPIRATED=749]="U_MODIFIER_LETTER_UNASPIRATED",e[e.U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD=751]="U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD",e[e.U_MODIFIER_LETTER_LOW_UP_ARROWHEAD=752]="U_MODIFIER_LETTER_LOW_UP_ARROWHEAD",e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD=753]="U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD",e[e.U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD=754]="U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD",e[e.U_MODIFIER_LETTER_LOW_RING=755]="U_MODIFIER_LETTER_LOW_RING",e[e.U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT=756]="U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT",e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT=757]="U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT",e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT=758]="U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT",e[e.U_MODIFIER_LETTER_LOW_TILDE=759]="U_MODIFIER_LETTER_LOW_TILDE",e[e.U_MODIFIER_LETTER_RAISED_COLON=760]="U_MODIFIER_LETTER_RAISED_COLON",e[e.U_MODIFIER_LETTER_BEGIN_HIGH_TONE=761]="U_MODIFIER_LETTER_BEGIN_HIGH_TONE",e[e.U_MODIFIER_LETTER_END_HIGH_TONE=762]="U_MODIFIER_LETTER_END_HIGH_TONE",e[e.U_MODIFIER_LETTER_BEGIN_LOW_TONE=763]="U_MODIFIER_LETTER_BEGIN_LOW_TONE",e[e.U_MODIFIER_LETTER_END_LOW_TONE=764]="U_MODIFIER_LETTER_END_LOW_TONE",e[e.U_MODIFIER_LETTER_SHELF=765]="U_MODIFIER_LETTER_SHELF",e[e.U_MODIFIER_LETTER_OPEN_SHELF=766]="U_MODIFIER_LETTER_OPEN_SHELF",e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROW=767]="U_MODIFIER_LETTER_LOW_LEFT_ARROW",e[e.U_GREEK_LOWER_NUMERAL_SIGN=885]="U_GREEK_LOWER_NUMERAL_SIGN",e[e.U_GREEK_TONOS=900]="U_GREEK_TONOS",e[e.U_GREEK_DIALYTIKA_TONOS=901]="U_GREEK_DIALYTIKA_TONOS",e[e.U_GREEK_KORONIS=8125]="U_GREEK_KORONIS",e[e.U_GREEK_PSILI=8127]="U_GREEK_PSILI",e[e.U_GREEK_PERISPOMENI=8128]="U_GREEK_PERISPOMENI",e[e.U_GREEK_DIALYTIKA_AND_PERISPOMENI=8129]="U_GREEK_DIALYTIKA_AND_PERISPOMENI",e[e.U_GREEK_PSILI_AND_VARIA=8141]="U_GREEK_PSILI_AND_VARIA",e[e.U_GREEK_PSILI_AND_OXIA=8142]="U_GREEK_PSILI_AND_OXIA",e[e.U_GREEK_PSILI_AND_PERISPOMENI=8143]="U_GREEK_PSILI_AND_PERISPOMENI",e[e.U_GREEK_DASIA_AND_VARIA=8157]="U_GREEK_DASIA_AND_VARIA",e[e.U_GREEK_DASIA_AND_OXIA=8158]="U_GREEK_DASIA_AND_OXIA",e[e.U_GREEK_DASIA_AND_PERISPOMENI=8159]="U_GREEK_DASIA_AND_PERISPOMENI",e[e.U_GREEK_DIALYTIKA_AND_VARIA=8173]="U_GREEK_DIALYTIKA_AND_VARIA",e[e.U_GREEK_DIALYTIKA_AND_OXIA=8174]="U_GREEK_DIALYTIKA_AND_OXIA",e[e.U_GREEK_VARIA=8175]="U_GREEK_VARIA",e[e.U_GREEK_OXIA=8189]="U_GREEK_OXIA",e[e.U_GREEK_DASIA=8190]="U_GREEK_DASIA",e[e.U_OVERLINE=8254]="U_OVERLINE",e[e.UTF8_BOM=65279]="UTF8_BOM",e))(q||{});function Jw(e,t){return e<t?-1:e>t?1:0}function eS(e){return e>=q.a&&e<=q.z}function qc(e){return e>=q.A&&e<=q.Z}function Hp(e){return eS(e)||qc(e)}function tS(e,t){return e.length===t.length&&Dv(e,t)}function Dv(e,t,n=e.length){for(let r=0;r<n;r++){const i=e.charCodeAt(r),s=t.charCodeAt(r);if(i!==s){if(Hp(i)&&Hp(s)){const o=Math.abs(i-s);if(o!==0&&o!==32)return!1}else if(String.fromCharCode(i).toLowerCase()!==String.fromCharCode(s).toLowerCase())return!1}}return!0}function nS(e,t){const n=t.length;return t.length>e.length?!1:Dv(e,t,n)}String.fromCharCode(q.UTF8_BOM);let kr;if(typeof process<"u")kr={get platform(){return process.platform},get env(){return process.env},cwd(){return{}.VSCODE_CWD||process.cwd()},nextTick(e){return process.nextTick(e)}};else if(typeof lt.vscode<"u"){const e=lt.vscode.process;kr={get platform(){return e.platform},get env(){return e.env},cwd(){return e.cwd()},nextTick(t){return zp(t)}}}else kr={get platform(){return Ei?"win32":Qs?"darwin":"linux"},nextTick(e){return zp(e)},get env(){return Object.create(null)},cwd(){return"/"}};const Yc=kr.cwd,rS=kr.env,yt=kr.platform;kr.nextTick;const iS=65,sS=97,oS=90,aS=122,jn=46,Ue=47,ot=92,An=58,lS=63;class Uv extends Error{constructor(t,n,r){let i;typeof n=="string"&&n.indexOf("not ")===0?(i="must not be",n=n.replace(/^not /,"")):i="must be";const s=t.indexOf(".")!==-1?"property":"argument";let o=`The "${t}" ${s} ${i} of type ${n}`;o+=`. Received type ${typeof r}`,super(o),this.code="ERR_INVALID_ARG_TYPE"}}function Te(e,t){if(typeof e!="string")throw new Uv(t,"string",e)}function Z(e){return e===Ue||e===ot}function Qc(e){return e===Ue}function In(e){return e>=iS&&e<=oS||e>=sS&&e<=aS}function Ga(e,t,n,r){let i="",s=0,o=-1,a=0,l=0;for(let u=0;u<=e.length;++u){if(u<e.length)l=e.charCodeAt(u);else{if(r(l))break;l=Ue}if(r(l)){if(!(o===u-1||a===1))if(a===2){if(i.length<2||s!==2||i.charCodeAt(i.length-1)!==jn||i.charCodeAt(i.length-2)!==jn){if(i.length>2){const c=i.lastIndexOf(n);c===-1?(i="",s=0):(i=i.slice(0,c),s=i.length-1-i.lastIndexOf(n)),o=u,a=0;continue}else if(i.length!==0){i="",s=0,o=u,a=0;continue}}t&&(i+=i.length>0?`${n}..`:"..",s=2)}else i.length>0?i+=`${n}${e.slice(o+1,u)}`:i=e.slice(o+1,u),s=u-o-1;o=u,a=0}else l===jn&&a!==-1?++a:a=-1}return i}function Fv(e,t){if(t===null||typeof t!="object")throw new Uv("pathObject","Object",t);const n=t.dir||t.root,r=t.base||`${t.name||""}${t.ext||""}`;return n?n===t.root?`${n}${r}`:`${n}${e}${r}`:r}const Ne={resolve(...e){let t="",n="",r=!1;for(let i=e.length-1;i>=-1;i--){let s;if(i>=0){if(s=e[i],Te(s,"path"),s.length===0)continue}else t.length===0?s=Yc():(s=rS[`=${t}`]||Yc(),(s===void 0||s.slice(0,2).toLowerCase()!==t.toLowerCase()&&s.charCodeAt(2)===ot)&&(s=`${t}\\`));const o=s.length;let a=0,l="",u=!1;const c=s.charCodeAt(0);if(o===1)Z(c)&&(a=1,u=!0);else if(Z(c))if(u=!0,Z(s.charCodeAt(1))){let d=2,f=d;for(;d<o&&!Z(s.charCodeAt(d));)d++;if(d<o&&d!==f){const g=s.slice(f,d);for(f=d;d<o&&Z(s.charCodeAt(d));)d++;if(d<o&&d!==f){for(f=d;d<o&&!Z(s.charCodeAt(d));)d++;(d===o||d!==f)&&(l=`\\\\${g}\\${s.slice(f,d)}`,a=d)}}}else a=1;else In(c)&&s.charCodeAt(1)===An&&(l=s.slice(0,2),a=2,o>2&&Z(s.charCodeAt(2))&&(u=!0,a=3));if(l.length>0)if(t.length>0){if(l.toLowerCase()!==t.toLowerCase())continue}else t=l;if(r){if(t.length>0)break}else if(n=`${s.slice(a)}\\${n}`,r=u,u&&t.length>0)break}return n=Ga(n,!r,"\\",Z),r?`${t}\\${n}`:`${t}${n}`||"."},normalize(e){Te(e,"path");const t=e.length;if(t===0)return".";let n=0,r,i=!1;const s=e.charCodeAt(0);if(t===1)return Qc(s)?"\\":e;if(Z(s))if(i=!0,Z(e.charCodeAt(1))){let a=2,l=a;for(;a<t&&!Z(e.charCodeAt(a));)a++;if(a<t&&a!==l){const u=e.slice(l,a);for(l=a;a<t&&Z(e.charCodeAt(a));)a++;if(a<t&&a!==l){for(l=a;a<t&&!Z(e.charCodeAt(a));)a++;if(a===t)return`\\\\${u}\\${e.slice(l)}\\`;a!==l&&(r=`\\\\${u}\\${e.slice(l,a)}`,n=a)}}}else n=1;else In(s)&&e.charCodeAt(1)===An&&(r=e.slice(0,2),n=2,t>2&&Z(e.charCodeAt(2))&&(i=!0,n=3));let o=n<t?Ga(e.slice(n),!i,"\\",Z):"";return o.length===0&&!i&&(o="."),o.length>0&&Z(e.charCodeAt(t-1))&&(o+="\\"),r===void 0?i?`\\${o}`:o:i?`${r}\\${o}`:`${r}${o}`},isAbsolute(e){Te(e,"path");const t=e.length;if(t===0)return!1;const n=e.charCodeAt(0);return Z(n)||t>2&&In(n)&&e.charCodeAt(1)===An&&Z(e.charCodeAt(2))},join(...e){if(e.length===0)return".";let t,n;for(let s=0;s<e.length;++s){const o=e[s];Te(o,"path"),o.length>0&&(t===void 0?t=n=o:t+=`\\${o}`)}if(t===void 0)return".";let r=!0,i=0;if(typeof n=="string"&&Z(n.charCodeAt(0))){++i;const s=n.length;s>1&&Z(n.charCodeAt(1))&&(++i,s>2&&(Z(n.charCodeAt(2))?++i:r=!1))}if(r){for(;i<t.length&&Z(t.charCodeAt(i));)i++;i>=2&&(t=`\\${t.slice(i)}`)}return Ne.normalize(t)},relative(e,t){if(Te(e,"from"),Te(t,"to"),e===t)return"";const n=Ne.resolve(e),r=Ne.resolve(t);if(n===r||(e=n.toLowerCase(),t=r.toLowerCase(),e===t))return"";let i=0;for(;i<e.length&&e.charCodeAt(i)===ot;)i++;let s=e.length;for(;s-1>i&&e.charCodeAt(s-1)===ot;)s--;const o=s-i;let a=0;for(;a<t.length&&t.charCodeAt(a)===ot;)a++;let l=t.length;for(;l-1>a&&t.charCodeAt(l-1)===ot;)l--;const u=l-a,c=o<u?o:u;let d=-1,f=0;for(;f<c;f++){const b=e.charCodeAt(i+f);if(b!==t.charCodeAt(a+f))break;b===ot&&(d=f)}if(f!==c){if(d===-1)return r}else{if(u>c){if(t.charCodeAt(a+f)===ot)return r.slice(a+f+1);if(f===2)return r.slice(a+f)}o>c&&(e.charCodeAt(i+f)===ot?d=f:f===2&&(d=3)),d===-1&&(d=0)}let g="";for(f=i+d+1;f<=s;++f)(f===s||e.charCodeAt(f)===ot)&&(g+=g.length===0?"..":"\\..");return a+=d,g.length>0?`${g}${r.slice(a,l)}`:(r.charCodeAt(a)===ot&&++a,r.slice(a,l))},toNamespacedPath(e){if(typeof e!="string")return e;if(e.length===0)return"";const t=Ne.resolve(e);if(t.length<=2)return e;if(t.charCodeAt(0)===ot){if(t.charCodeAt(1)===ot){const n=t.charCodeAt(2);if(n!==lS&&n!==jn)return`\\\\?\\UNC\\${t.slice(2)}`}}else if(In(t.charCodeAt(0))&&t.charCodeAt(1)===An&&t.charCodeAt(2)===ot)return`\\\\?\\${t}`;return e},dirname(e){Te(e,"path");const t=e.length;if(t===0)return".";let n=-1,r=0;const i=e.charCodeAt(0);if(t===1)return Z(i)?e:".";if(Z(i)){if(n=r=1,Z(e.charCodeAt(1))){let a=2,l=a;for(;a<t&&!Z(e.charCodeAt(a));)a++;if(a<t&&a!==l){for(l=a;a<t&&Z(e.charCodeAt(a));)a++;if(a<t&&a!==l){for(l=a;a<t&&!Z(e.charCodeAt(a));)a++;if(a===t)return e;a!==l&&(n=r=a+1)}}}}else In(i)&&e.charCodeAt(1)===An&&(n=t>2&&Z(e.charCodeAt(2))?3:2,r=n);let s=-1,o=!0;for(let a=t-1;a>=r;--a)if(Z(e.charCodeAt(a))){if(!o){s=a;break}}else o=!1;if(s===-1){if(n===-1)return".";s=n}return e.slice(0,s)},basename(e,t){t!==void 0&&Te(t,"ext"),Te(e,"path");let n=0,r=-1,i=!0,s;if(e.length>=2&&In(e.charCodeAt(0))&&e.charCodeAt(1)===An&&(n=2),t!==void 0&&t.length>0&&t.length<=e.length){if(t===e)return"";let o=t.length-1,a=-1;for(s=e.length-1;s>=n;--s){const l=e.charCodeAt(s);if(Z(l)){if(!i){n=s+1;break}}else a===-1&&(i=!1,a=s+1),o>=0&&(l===t.charCodeAt(o)?--o===-1&&(r=s):(o=-1,r=a))}return n===r?r=a:r===-1&&(r=e.length),e.slice(n,r)}for(s=e.length-1;s>=n;--s)if(Z(e.charCodeAt(s))){if(!i){n=s+1;break}}else r===-1&&(i=!1,r=s+1);return r===-1?"":e.slice(n,r)},extname(e){Te(e,"path");let t=0,n=-1,r=0,i=-1,s=!0,o=0;e.length>=2&&e.charCodeAt(1)===An&&In(e.charCodeAt(0))&&(t=r=2);for(let a=e.length-1;a>=t;--a){const l=e.charCodeAt(a);if(Z(l)){if(!s){r=a+1;break}continue}i===-1&&(s=!1,i=a+1),l===jn?n===-1?n=a:o!==1&&(o=1):n!==-1&&(o=-1)}return n===-1||i===-1||o===0||o===1&&n===i-1&&n===r+1?"":e.slice(n,i)},format:Fv.bind(null,"\\"),parse(e){Te(e,"path");const t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;const n=e.length;let r=0,i=e.charCodeAt(0);if(n===1)return Z(i)?(t.root=t.dir=e,t):(t.base=t.name=e,t);if(Z(i)){if(r=1,Z(e.charCodeAt(1))){let d=2,f=d;for(;d<n&&!Z(e.charCodeAt(d));)d++;if(d<n&&d!==f){for(f=d;d<n&&Z(e.charCodeAt(d));)d++;if(d<n&&d!==f){for(f=d;d<n&&!Z(e.charCodeAt(d));)d++;d===n?r=d:d!==f&&(r=d+1)}}}}else if(In(i)&&e.charCodeAt(1)===An){if(n<=2)return t.root=t.dir=e,t;if(r=2,Z(e.charCodeAt(2))){if(n===3)return t.root=t.dir=e,t;r=3}}r>0&&(t.root=e.slice(0,r));let s=-1,o=r,a=-1,l=!0,u=e.length-1,c=0;for(;u>=r;--u){if(i=e.charCodeAt(u),Z(i)){if(!l){o=u+1;break}continue}a===-1&&(l=!1,a=u+1),i===jn?s===-1?s=u:c!==1&&(c=1):s!==-1&&(c=-1)}return a!==-1&&(s===-1||c===0||c===1&&s===a-1&&s===o+1?t.base=t.name=e.slice(o,a):(t.name=e.slice(o,s),t.base=e.slice(o,a),t.ext=e.slice(s,a))),o>0&&o!==r?t.dir=e.slice(0,o-1):t.dir=t.root,t},sep:"\\",delimiter:";",win32:null,posix:null},ae={resolve(...e){let t="",n=!1;for(let r=e.length-1;r>=-1&&!n;r--){const i=r>=0?e[r]:Yc();Te(i,"path"),i.length!==0&&(t=`${i}/${t}`,n=i.charCodeAt(0)===Ue)}return t=Ga(t,!n,"/",Qc),n?`/${t}`:t.length>0?t:"."},normalize(e){if(Te(e,"path"),e.length===0)return".";const t=e.charCodeAt(0)===Ue,n=e.charCodeAt(e.length-1)===Ue;return e=Ga(e,!t,"/",Qc),e.length===0?t?"/":n?"./":".":(n&&(e+="/"),t?`/${e}`:e)},isAbsolute(e){return Te(e,"path"),e.length>0&&e.charCodeAt(0)===Ue},join(...e){if(e.length===0)return".";let t;for(let n=0;n<e.length;++n){const r=e[n];Te(r,"path"),r.length>0&&(t===void 0?t=r:t+=`/${r}`)}return t===void 0?".":ae.normalize(t)},relative(e,t){if(Te(e,"from"),Te(t,"to"),e===t||(e=ae.resolve(e),t=ae.resolve(t),e===t))return"";const n=1,r=e.length,i=r-n,s=1,o=t.length-s,a=i<o?i:o;let l=-1,u=0;for(;u<a;u++){const d=e.charCodeAt(n+u);if(d!==t.charCodeAt(s+u))break;d===Ue&&(l=u)}if(u===a)if(o>a){if(t.charCodeAt(s+u)===Ue)return t.slice(s+u+1);if(u===0)return t.slice(s+u)}else i>a&&(e.charCodeAt(n+u)===Ue?l=u:u===0&&(l=0));let c="";for(u=n+l+1;u<=r;++u)(u===r||e.charCodeAt(u)===Ue)&&(c+=c.length===0?"..":"/..");return`${c}${t.slice(s+l)}`},toNamespacedPath(e){return e},dirname(e){if(Te(e,"path"),e.length===0)return".";const t=e.charCodeAt(0)===Ue;let n=-1,r=!0;for(let i=e.length-1;i>=1;--i)if(e.charCodeAt(i)===Ue){if(!r){n=i;break}}else r=!1;return n===-1?t?"/":".":t&&n===1?"//":e.slice(0,n)},basename(e,t){t!==void 0&&Te(t,"ext"),Te(e,"path");let n=0,r=-1,i=!0,s;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t===e)return"";let o=t.length-1,a=-1;for(s=e.length-1;s>=0;--s){const l=e.charCodeAt(s);if(l===Ue){if(!i){n=s+1;break}}else a===-1&&(i=!1,a=s+1),o>=0&&(l===t.charCodeAt(o)?--o===-1&&(r=s):(o=-1,r=a))}return n===r?r=a:r===-1&&(r=e.length),e.slice(n,r)}for(s=e.length-1;s>=0;--s)if(e.charCodeAt(s)===Ue){if(!i){n=s+1;break}}else r===-1&&(i=!1,r=s+1);return r===-1?"":e.slice(n,r)},extname(e){Te(e,"path");let t=-1,n=0,r=-1,i=!0,s=0;for(let o=e.length-1;o>=0;--o){const a=e.charCodeAt(o);if(a===Ue){if(!i){n=o+1;break}continue}r===-1&&(i=!1,r=o+1),a===jn?t===-1?t=o:s!==1&&(s=1):t!==-1&&(s=-1)}return t===-1||r===-1||s===0||s===1&&t===r-1&&t===n+1?"":e.slice(t,r)},format:Fv.bind(null,"/"),parse(e){Te(e,"path");const t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;const n=e.charCodeAt(0)===Ue;let r;n?(t.root="/",r=1):r=0;let i=-1,s=0,o=-1,a=!0,l=e.length-1,u=0;for(;l>=r;--l){const c=e.charCodeAt(l);if(c===Ue){if(!a){s=l+1;break}continue}o===-1&&(a=!1,o=l+1),c===jn?i===-1?i=l:u!==1&&(u=1):i!==-1&&(u=-1)}if(o!==-1){const c=s===0&&n?1:s;i===-1||u===0||u===1&&i===o-1&&i===s+1?t.base=t.name=e.slice(c,o):(t.name=e.slice(c,i),t.base=e.slice(c,o),t.ext=e.slice(i,o))}return s>0?t.dir=e.slice(0,s-1):n&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};ae.win32=Ne.win32=Ne;ae.posix=Ne.posix=ae;const uS=yt==="win32"?Ne.normalize:ae.normalize;yt==="win32"?Ne.isAbsolute:ae.isAbsolute;yt==="win32"?Ne.join:ae.join;const cS=yt==="win32"?Ne.resolve:ae.resolve,fS=yt==="win32"?Ne.relative:ae.relative,dS=yt==="win32"?Ne.dirname:ae.dirname;yt==="win32"?Ne.basename:ae.basename;yt==="win32"?Ne.extname:ae.extname;yt==="win32"?Ne.format:ae.format;yt==="win32"?Ne.parse:ae.parse;yt==="win32"?Ne.toNamespacedPath:ae.toNamespacedPath;const xa=yt==="win32"?Ne.sep:ae.sep;yt==="win32"?Ne.delimiter:ae.delimiter;function hS(e){return typeof e>"u"}function pS(e){return hS(e)||e===null}function On(e){return e===q.Slash||e===q.Backslash}function Gp(e){return e.replace(/[\\/]/g,ae.sep)}function qp(e,t=ae.sep){if(!e)return"";const n=e.length,r=e.charCodeAt(0);if(On(r)){if(On(e.charCodeAt(1))&&!On(e.charCodeAt(2))){let s=3;const o=s;for(;s<n&&!On(e.charCodeAt(s));s++);if(o!==s&&!On(e.charCodeAt(s+1))){for(s+=1;s<n;s++)if(On(e.charCodeAt(s)))return e.slice(0,s+1).replace(/[\\/]/g,t)}}return t}if(mS(r)&&e.charCodeAt(1)===q.Colon)return On(e.charCodeAt(2))?e.slice(0,2)+t:e.slice(0,2);let i=e.indexOf("://");if(i!==-1){for(i+=3;i<n;i++)if(On(e.charCodeAt(i)))return e.slice(0,i+1)}return""}function Yp(e,t,n,r=xa){if(e===t)return!0;if(!e||!t||t.length>e.length)return!1;if(n){if(!nS(e,t))return!1;if(t.length===e.length)return!0;let s=t.length;return t.charAt(t.length-1)===r&&s--,e.charAt(s)===r}return t.charAt(t.length-1)!==r&&(t+=r),e.indexOf(t)===0}function mS(e){return e>=q.A&&e<=q.Z||e>=q.a&&e<=q.z}const gS=/^\w[\w\d+.-]*$/,_S=/^\//,vS=/^\/\//;function yS(e,t){if(!e.scheme&&t)throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);if(e.scheme&&!gS.test(e.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(e.path){if(e.authority){if(!_S.test(e.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(vS.test(e.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}function bS(e,t){return!e&&!t?"file":e}function wS(e,t){switch(e){case"https":case"http":case"file":t?t[0]!==Ct&&(t=Ct+t):t=Ct;break}return t}const le="",Ct="/",SS=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;class Ft{static isUri(t){return t instanceof Ft?!0:t?typeof t.authority=="string"&&typeof t.fragment=="string"&&typeof t.path=="string"&&typeof t.query=="string"&&typeof t.scheme=="string"&&typeof t.fsPath=="string"&&typeof t.with=="function"&&typeof t.toString=="function":!1}constructor(t,n,r,i,s,o=!1){typeof t=="object"?(this.scheme=t.scheme||le,this.authority=t.authority||le,this.path=t.path||le,this.query=t.query||le,this.fragment=t.fragment||le):(this.scheme=bS(t,o),this.authority=n||le,this.path=wS(this.scheme,r||le),this.query=i||le,this.fragment=s||le,yS(this,o))}get fsPath(){return qa(this,!1)}with(t){if(!t)return this;let{scheme:n,authority:r,path:i,query:s,fragment:o}=t;return n===void 0?n=this.scheme:n===null&&(n=le),r===void 0?r=this.authority:r===null&&(r=le),i===void 0?i=this.path:i===null&&(i=le),s===void 0?s=this.query:s===null&&(s=le),o===void 0?o=this.fragment:o===null&&(o=le),n===this.scheme&&r===this.authority&&i===this.path&&s===this.query&&o===this.fragment?this:new Wr(n,r,i,s,o)}static parse(t,n=!1){const r=SS.exec(t);return r?new Wr(r[2]||le,zo(r[4]||le),zo(r[5]||le),zo(r[7]||le),zo(r[9]||le),n):new Wr(le,le,le,le,le)}static file(t){let n=le;if(Ei&&(t=t.replace(/\\/g,Ct)),t[0]===Ct&&t[1]===Ct){const r=t.indexOf(Ct,2);r===-1?(n=t.substring(2),t=Ct):(n=t.substring(2,r),t=t.substring(r)||Ct)}return new Wr("file",n,t,le,le)}static from(t){return new Wr(t.scheme,t.authority,t.path,t.query,t.fragment)}static joinPath(t,...n){if(!t.path)throw new Error("[UriError]: cannot call joinPath on URI without path");let r;return Ei&&t.scheme==="file"?r=Ft.file(Ne.join(qa(t,!0),...n)).path:r=ae.join(t.path,...n),t.with({path:r})}toString(t=!1){return Xc(this,t)}toJSON(){return this}static revive(t){if(!t||t instanceof Ft)return t;const n=new Wr(t);return n._formatted=t.external,n._fsPath=t._sep===$v?t.fsPath:null,n}}const $v=Ei?1:void 0;class Wr extends Ft{constructor(){super(...arguments),this._formatted=null,this._fsPath=null}get fsPath(){return this._fsPath||(this._fsPath=qa(this,!1)),this._fsPath}toString(t=!1){return t?Xc(this,!0):(this._formatted||(this._formatted=Xc(this,!1)),this._formatted)}toJSON(){const t={$mid:1};return this._fsPath&&(t.fsPath=this._fsPath,t._sep=$v),this._formatted&&(t.external=this._formatted),this.path&&(t.path=this.path),this.scheme&&(t.scheme=this.scheme),this.authority&&(t.authority=this.authority),this.query&&(t.query=this.query),this.fragment&&(t.fragment=this.fragment),t}}const Bv={[q.Colon]:"%3A",[q.Slash]:"%2F",[q.QuestionMark]:"%3F",[q.Hash]:"%23",[q.OpenSquareBracket]:"%5B",[q.CloseSquareBracket]:"%5D",[q.AtSign]:"%40",[q.ExclamationMark]:"%21",[q.DollarSign]:"%24",[q.Ampersand]:"%26",[q.SingleQuote]:"%27",[q.OpenParen]:"%28",[q.CloseParen]:"%29",[q.Asterisk]:"%2A",[q.Plus]:"%2B",[q.Comma]:"%2C",[q.Semicolon]:"%3B",[q.Equals]:"%3D",[q.Space]:"%20"};function Qp(e,t){let n,r=-1;for(let i=0;i<e.length;i++){const s=e.charCodeAt(i);if(s>=q.a&&s<=q.z||s>=q.A&&s<=q.Z||s>=q.Digit0&&s<=q.Digit9||s===q.Dash||s===q.Period||s===q.Underline||s===q.Tilde||t&&s===q.Slash)r!==-1&&(n+=encodeURIComponent(e.substring(r,i)),r=-1),n!==void 0&&(n+=e.charAt(i));else{n===void 0&&(n=e.substr(0,i));const o=Bv[s];o!==void 0?(r!==-1&&(n+=encodeURIComponent(e.substring(r,i)),r=-1),n+=o):r===-1&&(r=i)}}return r!==-1&&(n+=encodeURIComponent(e.substring(r))),n!==void 0?n:e}function ES(e){let t;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r===q.Hash||r===q.QuestionMark?(t===void 0&&(t=e.substr(0,n)),t+=Bv[r]):t!==void 0&&(t+=e[n])}return t!==void 0?t:e}function qa(e,t){let n;return e.authority&&e.path.length>1&&e.scheme==="file"?n=`//${e.authority}${e.path}`:e.path.charCodeAt(0)===q.Slash&&(e.path.charCodeAt(1)>=q.A&&e.path.charCodeAt(1)<=q.Z||e.path.charCodeAt(1)>=q.a&&e.path.charCodeAt(1)<=q.z)&&e.path.charCodeAt(2)===q.Colon?t?n=e.path.substr(1):n=e.path[1].toLowerCase()+e.path.substr(2):n=e.path,Ei&&(n=n.replace(/\//g,"\\")),n}function Xc(e,t){const n=t?ES:Qp;let r="",{scheme:i,authority:s,path:o,query:a,fragment:l}=e;if(i&&(r+=i,r+=":"),(s||i==="file")&&(r+=Ct,r+=Ct),s){let u=s.indexOf("@");if(u!==-1){const c=s.substr(0,u);s=s.substr(u+1),u=c.indexOf(":"),u===-1?r+=n(c,!1):(r+=n(c.substr(0,u),!1),r+=":",r+=n(c.substr(u+1),!1)),r+="@"}s=s.toLowerCase(),u=s.indexOf(":"),u===-1?r+=n(s,!1):(r+=n(s.substr(0,u),!1),r+=s.substr(u))}if(o){if(o.length>=3&&o.charCodeAt(0)===q.Slash&&o.charCodeAt(2)===q.Colon){const u=o.charCodeAt(1);u>=q.A&&u<=q.Z&&(o=`/${String.fromCharCode(u+32)}:${o.substr(3)}`)}else if(o.length>=2&&o.charCodeAt(1)===q.Colon){const u=o.charCodeAt(0);u>=q.A&&u<=q.Z&&(o=`${String.fromCharCode(u+32)}:${o.substr(2)}`)}r+=n(o,!0)}return a&&(r+="?",r+=n(a,!1)),l&&(r+="#",r+=t?l:Qp(l,!1)),r}function Vv(e){try{return decodeURIComponent(e)}catch{return e.length>3?e.substr(0,3)+Vv(e.substr(3)):e}}const Xp=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function zo(e){return e.match(Xp)?e.replace(Xp,t=>Vv(t)):e}var Ht;(e=>{e.inMemory="inmemory",e.vscode="vscode",e.internal="private",e.walkThrough="walkThrough",e.walkThroughSnippet="walkThroughSnippet",e.http="http",e.https="https",e.file="file",e.mailto="mailto",e.untitled="untitled",e.data="data",e.command="command",e.vscodeRemote="vscode-remote",e.vscodeRemoteResource="vscode-remote-resource",e.userData="vscode-userdata",e.vscodeCustomEditor="vscode-custom-editor",e.vscodeNotebook="vscode-notebook",e.vscodeNotebookCell="vscode-notebook-cell",e.vscodeNotebookCellMetadata="vscode-notebook-cell-metadata",e.vscodeSettings="vscode-settings",e.vscodeWorkspaceTrust="vscode-workspace-trust",e.webviewPanel="webview-panel",e.vscodeWebview="vscode-webview",e.vscodeWebviewResource="vscode-webview-resource",e.extension="extension",e.vscodeFileResource="vscode-file"})(Ht||(Ht={}));class xS{constructor(){this._hosts=Object.create(null),this._ports=Object.create(null),this._connectionTokens=Object.create(null),this._preferredWebSchema="http",this._delegate=null}setPreferredWebSchema(t){this._preferredWebSchema=t}setDelegate(t){this._delegate=t}set(t,n,r){this._hosts[t]=n,this._ports[t]=r}setConnectionToken(t,n){this._connectionTokens[t]=n}rewrite(t){if(this._delegate)return this._delegate(t);const n=t.authority;let r=this._hosts[n];r&&r.indexOf(":")!==-1&&(r=`[${r}]`);const i=this._ports[n],s=this._connectionTokens[n];let o=`path=${encodeURIComponent(t.path)}`;return typeof s=="string"&&(o+=`&tkn=${encodeURIComponent(s)}`),Ft.from({scheme:Kw?this._preferredWebSchema:Ht.vscodeRemoteResource,authority:`${r}:${i}`,path:"/vscode-remote-resource",query:o})}}const kS=new xS;function sn(e){return qa(e,!0)}class TS{constructor(t){this._ignorePathCasing=t}compare(t,n,r=!1){return t===n?0:Jw(this.getComparisonKey(t,r),this.getComparisonKey(n,r))}isEqual(t,n,r=!1){return t===n?!0:!t||!n?!1:this.getComparisonKey(t,r)===this.getComparisonKey(n,r)}getComparisonKey(t,n=!1){return t.with({path:this._ignorePathCasing(t)?t.path.toLowerCase():void 0,fragment:n?null:void 0}).toString()}ignorePathCasing(t){return this._ignorePathCasing(t)}isEqualOrParent(t,n,r=!1){if(t.scheme===n.scheme){if(t.scheme===Ht.file)return Yp(sn(t),sn(n),this._ignorePathCasing(t))&&t.query===n.query&&(r||t.fragment===n.fragment);if(Kp(t.authority,n.authority))return Yp(t.path,n.path,this._ignorePathCasing(t),"/")&&t.query===n.query&&(r||t.fragment===n.fragment)}return!1}joinPath(t,...n){return Ft.joinPath(t,...n)}basenameOrAuthority(t){return RS(t)||t.authority}basename(t){return ae.basename(t.path)}extname(t){return ae.extname(t.path)}dirname(t){if(t.path.length===0)return t;let n;return t.scheme===Ht.file?n=Ft.file(dS(sn(t))).path:(n=ae.dirname(t.path),t.authority&&n.length&&n.charCodeAt(0)!==q.Slash&&(console.error(`dirname("${t.toString})) resulted in a relative path`),n="/")),t.with({path:n})}normalizePath(t){if(!t.path.length)return t;let n;return t.scheme===Ht.file?n=Ft.file(uS(sn(t))).path:n=ae.normalize(t.path),t.with({path:n})}relativePath(t,n){if(t.scheme!==n.scheme||!Kp(t.authority,n.authority))return;if(t.scheme===Ht.file){const s=fS(sn(t),sn(n));return Ei?Gp(s):s}let r=t.path||"/",i=n.path||"/";if(this._ignorePathCasing(t)){let s=0;for(const o=Math.min(r.length,i.length);s<o&&!(r.charCodeAt(s)!==i.charCodeAt(s)&&r.charAt(s).toLowerCase()!==i.charAt(s).toLowerCase());s++);r=i.substr(0,s)+r.substr(s)}return ae.relative(r,i)}resolvePath(t,n){if(t.scheme===Ht.file){const r=Ft.file(cS(sn(t),n));return t.with({authority:r.authority,path:r.path})}return n.indexOf("/")===-1&&(n=Gp(n),/^[a-zA-Z]:(\/|$)/.test(n)&&(n=`/${n}`)),t.with({path:ae.resolve(t.path,n)})}isAbsolutePath(t){return!!t.path&&t.path[0]==="/"}isEqualAuthority(t,n){return t===n||tS(t,n)}hasTrailingPathSeparator(t,n=xa){if(t.scheme===Ht.file){const i=sn(t);return i.length>qp(i).length&&i[i.length-1]===n}const r=t.path;return r.length>1&&r.charCodeAt(r.length-1)===q.Slash&&!/^[a-zA-Z]:(\/$|\\$)/.test(t.fsPath)}removeTrailingPathSeparator(t,n=xa){return Zp(t,n)?t.with({path:t.path.substr(0,t.path.length-1)}):t}addTrailingPathSeparator(t,n=xa){let r=!1;if(t.scheme===Ht.file){const i=sn(t);r=i!==void 0&&i.length===qp(i).length&&i[i.length-1]===n}else{n="/";const i=t.path;r=i.length===1&&i.charCodeAt(i.length-1)===q.Slash}return!r&&!Zp(t,n)?t.with({path:`${t.path}/`}):t}}const re=new TS(()=>!1);re.isEqual.bind(re);re.isEqualOrParent.bind(re);re.getComparisonKey.bind(re);re.basenameOrAuthority.bind(re);const RS=re.basename.bind(re);re.extname.bind(re);re.dirname.bind(re);re.joinPath.bind(re);re.normalizePath.bind(re);re.relativePath.bind(re);re.resolvePath.bind(re);re.isAbsolutePath.bind(re);const Kp=re.isEqualAuthority.bind(re),Zp=re.hasTrailingPathSeparator.bind(re);re.removeTrailingPathSeparator.bind(re);re.addTrailingPathSeparator.bind(re);var Jp;(e=>{e.META_DATA_LABEL="label",e.META_DATA_DESCRIPTION="description",e.META_DATA_SIZE="size",e.META_DATA_MIME="mime";function t(n){const r=new Map;n.path.substring(n.path.indexOf(";")+1,n.path.lastIndexOf(";")).split(";").forEach(o=>{const[a,l]=o.split(":");a&&l&&r.set(a,l)});const s=n.path.substring(0,n.path.indexOf(";"));return s&&r.set(e.META_DATA_MIME,s),r}e.parseMetaData=t})(Jp||(Jp={}));function em(e){const t=new Cv,n=e(t.token),r=new Promise((i,s)=>{t.token.onCancellationRequested(()=>{s(Hw())}),Promise.resolve(n).then(o=>{t.dispose(),i(o)},o=>{t.dispose(),s(o)})});return new class{cancel(){t.cancel()}then(i,s){return r.then(i,s)}catch(i){return this.then(void 0,i)}finally(i){return r.finally(i)}}}class AS{constructor(t,n){this.timeoutToken=-1,this.runner=t,this.timeout=n,this.timeoutHandler=this.onTimeout.bind(this)}dispose(){this.cancel(),this.runner=null}cancel(){this.isScheduled()&&(clearTimeout(this.timeoutToken),this.timeoutToken=-1)}schedule(t=this.timeout){this.cancel(),this.timeoutToken=setTimeout(this.timeoutHandler,t)}get delay(){return this.timeout}set delay(t){this.timeout=t}isScheduled(){return this.timeoutToken!==-1}onTimeout(){this.timeoutToken=-1,this.runner&&this.doRun()}doRun(){this.runner&&this.runner()}}let Kc;(function(){if(typeof requestIdleCallback!="function"||typeof cancelIdleCallback!="function"){const e=Object.freeze({didTimeout:!0,timeRemaining(){return 15}});Kc=t=>{const n=setTimeout(()=>t(e));let r=!1;return{dispose(){r||(r=!0,clearTimeout(n))}}}}else Kc=(e,t)=>{const n=requestIdleCallback(e,typeof t=="number"?{timeout:t}:void 0);let r=!1;return{dispose(){r||(r=!0,cancelIdleCallback(n))}}}})();class IS{constructor(t){this._didRun=!1,this._executor=()=>{try{this._value=t()}catch(n){this._error=n}finally{this._didRun=!0}},this._handle=Kc(()=>this._executor())}dispose(){this._handle.dispose()}get value(){if(this._didRun||(this._handle.dispose(),this._executor()),this._error)throw this._error;return this._value}}var tm;(e=>{async function t(s){return typeof Promise.allSettled=="function"?n(s):r(s)}e.allSettled=t;async function n(s){return Promise.allSettled(s)}async function r(s){return Promise.all(s.map(o=>o.then(a=>({status:"fulfilled",value:a}),a=>({status:"rejected",reason:a}))))}async function i(s){let o;const a=await Promise.all(s.map(l=>l.then(u=>u,u=>{o||(o=u)})));if(typeof o<"u")throw o;return a}e.settled=i})(tm||(tm={}));function OS(e,t,n){let r=null,i=null;if(typeof n.value=="function"?(r="value",i=n.value,i.length!==0&&console.warn("Memoize should only be used in functions with zero parameters")):typeof n.get=="function"&&(r="get",i=n.get),!i)throw new Error("not supported");const s=`$memoize$${t}`;n[r]=function(...o){return this.hasOwnProperty(s)||Object.defineProperty(this,s,{configurable:!1,enumerable:!1,writable:!1,value:i.apply(this,o)}),this[s]}}var ka=(e=>(e[e.Uri=1]="Uri",e[e.Regexp=2]="Regexp",e[e.ScmResource=3]="ScmResource",e[e.ScmResourceGroup=4]="ScmResourceGroup",e[e.ScmProvider=5]="ScmProvider",e[e.CommentController=6]="CommentController",e[e.CommentThread=7]="CommentThread",e[e.CommentThreadReply=8]="CommentThreadReply",e[e.CommentNode=9]="CommentNode",e[e.CommentThreadNode=10]="CommentThreadNode",e[e.TimelineActionContext=11]="TimelineActionContext",e[e.NotebookCellActionContext=12]="NotebookCellActionContext",e[e.TestItemContext=13]="TestItemContext",e[e.Date=14]="Date",e))(ka||{});function Ya(e,t=0){if(!e||t>200)return e;if(typeof e=="object"){switch(e.$mid){case ka.Uri:return Ft.revive(e);case ka.Regexp:return new RegExp(e.source,e.flags);case ka.Date:return new Date(e.source)}if(e instanceof ce||e instanceof Uint8Array)return e;if(Array.isArray(e))for(let n=0;n<e.length;++n)e[n]=Ya(e[n],t+1);else for(const n in e)Object.hasOwnProperty.call(e,n)&&(e[n]=Ya(e[n],t+1))}return e}var LS=Object.defineProperty,NS=Object.getOwnPropertyDescriptor,MS=(e,t,n,r)=>{for(var i=r>1?void 0:r?NS(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&LS(t,n,i),i};function ni(e){switch(e){case 100:return"req";case 101:return"cancel";case 102:return"subscribe";case 103:return"unsubscribe"}}function Qa(e){switch(e){case 200:return"init";case 201:return"reply:";case 202:case 203:return"replyErr:";case 204:return"event:"}}class Wv{constructor(t){this.buffer=t,this.pos=0}read(t){const n=this.buffer.slice(this.pos,this.pos+t);return this.pos+=n.byteLength,n}}class $d{constructor(){this.buffers=[]}get buffer(){return ce.concat(this.buffers)}write(t){this.buffers.push(t)}}function Xi(e){const t=ce.alloc(4);return t.writeUInt32BE(e,0),t}function Ki(e){return e.read(4).readUInt32BE(0)}function jr(e){const t=ce.alloc(1);return t.writeUInt8(e,0),t}const zr={Undefined:jr(0),String:jr(1),Buffer:jr(2),VSBuffer:jr(3),Array:jr(4),Object:jr(5)},PS=typeof Buffer<"u";function ki(e,t){if(typeof t>"u")e.write(zr.Undefined);else if(typeof t=="string"){const n=ce.fromString(t);e.write(zr.String),e.write(Xi(n.byteLength)),e.write(n)}else if(PS&&Buffer.isBuffer(t)){const n=ce.wrap(t);e.write(zr.Buffer),e.write(Xi(n.byteLength)),e.write(n)}else if(t instanceof ce)e.write(zr.VSBuffer),e.write(Xi(t.byteLength)),e.write(t);else if(Array.isArray(t)){e.write(zr.Array),e.write(Xi(t.length));for(const n of t)ki(e,n)}else{const n=ce.fromString(JSON.stringify(t));e.write(zr.Object),e.write(Xi(n.byteLength)),e.write(n)}}function Ks(e){switch(e.read(1).readUInt8(0)){case 0:return;case 1:return e.read(Ki(e)).toString();case 2:return e.read(Ki(e)).buffer;case 3:return e.read(Ki(e));case 4:{const n=Ki(e),r=[];for(let i=0;i<n;i++)r.push(Ks(e));return r}case 5:return JSON.parse(e.read(Ki(e)).toString())}}class CS{constructor(t,n,r=null,i=1e3){this.protocol=t,this.ctx=n,this.logger=r,this.timeoutDelay=i,this.channels=new Map,this.activeRequests=new Map,this.pendingRequests=new Map,this.protocolListener=this.protocol.onMessage(s=>{this.onRawMessage(s)}),this.sendResponse({type:200})}registerChannel(t,n){this.channels.set(t,n),setTimeout(()=>this.flushPendingRequests(t),0)}sendResponse(t){var n,r;switch(t.type){case 200:{const i=this.send([t.type]);(n=this.logger)==null||n.logOutgoing(i,0,1,Qa(t.type));return}case 201:case 202:case 204:case 203:{const i=this.send([t.type,t.id],t.data);(r=this.logger)==null||r.logOutgoing(i,t.id,1,Qa(t.type),t.data);return}}}send(t,n=void 0){const r=new $d;return ki(r,t),ki(r,n),this.sendBuffer(r.buffer)}sendBuffer(t){try{return this.protocol.send(t),t.byteLength}catch{return 0}}onRawMessage(t){var o,a,l,u;const n=new Wv(t),r=Ks(n),i=Ks(n),s=r[0];switch(s){case 100:return(o=this.logger)==null||o.logIncoming(t.byteLength,r[1],1,`${ni(s)}: ${r[2]}.${r[3]}`,i),this.onPromise({type:s,id:r[1],channelName:r[2],name:r[3],arg:i});case 102:return(a=this.logger)==null||a.logIncoming(t.byteLength,r[1],1,`${ni(s)}: ${r[2]}.${r[3]}`,i),this.onEventListen({type:s,id:r[1],channelName:r[2],name:r[3],arg:i});case 101:return(l=this.logger)==null||l.logIncoming(t.byteLength,r[1],1,`${ni(s)}`),this.disposeActiveRequest({type:s,id:r[1]});case 103:return(u=this.logger)==null||u.logIncoming(t.byteLength,r[1],1,`${ni(s)}`),this.disposeActiveRequest({type:s,id:r[1]})}}onPromise(t){const n=this.channels.get(t.channelName);if(!n){this.collectPendingRequest(t);return}const r=new Cv;let i;try{i=n.call(this.ctx,t.name,t.arg,r.token)}catch(a){i=Promise.reject(a)}const s=t.id;i.then(a=>{this.sendResponse({id:s,data:a,type:201}),this.activeRequests.delete(t.id)},a=>{a instanceof Error?this.sendResponse({id:s,data:{message:a.message,name:a.name,stack:a.stack?a.stack.split?a.stack.split(`
`):a.stack:void 0},type:202}):this.sendResponse({id:s,data:a,type:203}),this.activeRequests.delete(t.id)});const o=Dd(()=>r.cancel());this.activeRequests.set(t.id,o)}onEventListen(t){const n=this.channels.get(t.channelName);if(!n){this.collectPendingRequest(t);return}const r=t.id,s=n.listen(this.ctx,t.name,t.arg)(o=>this.sendResponse({id:r,data:o,type:204}));this.activeRequests.set(t.id,s)}disposeActiveRequest(t){const n=this.activeRequests.get(t.id);n&&(n.dispose(),this.activeRequests.delete(t.id))}collectPendingRequest(t){let n=this.pendingRequests.get(t.channelName);n||(n=[],this.pendingRequests.set(t.channelName,n));const r=setTimeout(()=>{console.error(`Unknown channel: ${t.channelName}`),t.type===100&&this.sendResponse({id:t.id,data:{name:"Unknown channel",message:`Channel name '${t.channelName}' timed out after ${this.timeoutDelay}ms`,stack:void 0},type:202})},this.timeoutDelay);n.push({request:t,timeoutTimer:r})}flushPendingRequests(t){const n=this.pendingRequests.get(t);if(n){for(const r of n)switch(clearTimeout(r.timeoutTimer),r.request.type){case 100:this.onPromise(r.request);break;case 102:this.onEventListen(r.request);break}this.pendingRequests.delete(t)}}dispose(){this.protocolListener&&(this.protocolListener.dispose(),this.protocolListener=null),jl(this.activeRequests.values()),this.activeRequests.clear()}}class jv{constructor(t,n=null){this.protocol=t,this.isDisposed=!1,this.state=0,this.activeRequests=new Set,this.handlers=new Map,this.lastRequestId=0,this._onDidInitialize=new ie,this.onDidInitialize=this._onDidInitialize.event,this.protocolListener=this.protocol.onMessage(r=>this.onBuffer(r)),this.logger=n}getChannel(t){const n=this;return{call(r,i,s){return n.isDisposed?Promise.reject(new Wo):n.requestPromise(t,r,i,s)},listen(r,i){return n.isDisposed?xi.None:n.requestEvent(t,r,i)}}}requestPromise(t,n,r,i=Xs.None){const s=this.lastRequestId++,a={id:s,type:100,channelName:t,name:n,arg:r};if(i.isCancellationRequested)return Promise.reject(new Wo);let l;return new Promise((c,d)=>{if(i.isCancellationRequested)return d(new Wo);const f=()=>{const h=m=>{switch(m.type){case 201:this.handlers.delete(s),c(m.data);break;case 202:{this.handlers.delete(s);const _=new Error(m.data.message);_.stack=m.data.stack,_.name=m.data.name,d(_);break}case 203:this.handlers.delete(s),d(m.data);break}};this.handlers.set(s,h),this.sendRequest(a)};let g=null;this.state===1?f():(g=em(h=>this.whenInitialized()),g.then(()=>{g=null,f()}));const b=()=>{g?(g.cancel(),g=null):this.sendRequest({id:s,type:101}),d(new Wo)},v=i.onCancellationRequested(b);l=Tv(Dd(b),v),this.activeRequests.add(l)}).finally(()=>{this.activeRequests.delete(l)})}requestEvent(t,n,r){const i=this.lastRequestId++,o={id:i,type:102,channelName:t,name:n,arg:r};let a=null;const l=new ie({onFirstListenerAdd:()=>{a=em(c=>this.whenInitialized()),a.then(()=>{a=null,this.activeRequests.add(l),this.sendRequest(o)})},onLastListenerRemove:()=>{a?(a.cancel(),a=null):(this.activeRequests.delete(l),this.sendRequest({id:i,type:103}))}}),u=c=>l.fire(c.data);return this.handlers.set(i,u),l.event}sendRequest(t){var n,r;switch(t.type){case 100:case 102:{const i=this.send([t.type,t.id,t.channelName,t.name],t.arg);(n=this.logger)==null||n.logOutgoing(i,t.id,0,`${ni(t.type)}: ${t.channelName}.${t.name}`,t.arg);return}case 101:case 103:{const i=this.send([t.type,t.id]);(r=this.logger)==null||r.logOutgoing(i,t.id,0,ni(t.type));return}}}send(t,n=void 0){const r=new $d;return ki(r,t),ki(r,n),this.sendBuffer(r.buffer)}sendBuffer(t){try{return this.protocol.send(t),t.byteLength}catch{return 0}}onBuffer(t){var o,a;const n=new Wv(t),r=Ks(n),i=Ks(n),s=r[0];switch(s){case 200:return(o=this.logger)==null||o.logIncoming(t.byteLength,0,0,Qa(s)),this.onResponse({type:r[0]});case 201:case 202:case 204:case 203:return(a=this.logger)==null||a.logIncoming(t.byteLength,r[1],0,Qa(s),i),this.onResponse({type:r[0],id:r[1],data:i})}}onResponse(t){if(t.type===200){this.state=1,this._onDidInitialize.fire();return}const n=this.handlers.get(t.id);n==null||n(t)}get onDidInitializePromise(){return xi.toPromise(this.onDidInitialize)}whenInitialized(){return this.state===1?Promise.resolve():this.onDidInitializePromise}dispose(){this.isDisposed=!0,this.protocolListener&&(this.protocolListener.dispose(),this.protocolListener=null),jl(this.activeRequests.values()),this.activeRequests.clear()}}MS([OS],jv.prototype,"onDidInitializePromise",1);class DS{constructor(t,n,r=null){const i=new $d;ki(i,n),t.send(i.buffer),this.channelClient=new jv(t,r),this.channelServer=new CS(t,n,r)}getChannel(t){return this.channelClient.getChannel(t)}registerChannel(t,n){this.channelServer.registerChannel(t,n)}dispose(){this.channelClient.dispose(),this.channelServer.dispose()}}var Zc;(e=>{function t(s,o){const a=s,l=o&&o.disableMarshalling,u=new Map;for(const c in a)r(c)&&u.set(c,xi.buffer(a[c],!0));return new class{listen(c,d,f){const g=u.get(d);if(g)return g;if(i(d)){const b=a[d];if(typeof b=="function")return b.call(a,f)}throw new Error(`Event not found: ${d}`)}call(c,d,f){const g=a[d];if(typeof g=="function"){if(!l&&Array.isArray(f))for(let b=0;b<f.length;b++)f[b]=Ya(f[b]);return g.apply(a,f)}throw new Error(`Method not found: ${d}`)}}}e.fromService=t;function n(s,o){const a=o&&o.disableMarshalling;return new Proxy({},{get(l,u){var c;if(typeof u=="string")return(c=o==null?void 0:o.properties)!=null&&c.has(u)?o.properties.get(u):i(u)?function(d){return s.listen(u,d)}:r(u)?s.listen(u):async function(...d){let f;o&&!pS(o.context)?f=[o.context,...d]:f=d;const g=await s.call(u,f);return a?g:Ya(g)};throw new Error(`Property not found: ${String(u)}`)}})}e.toService=n;function r(s){return s[0]==="o"&&s[1]==="n"&&qc(s.charCodeAt(2))}function i(s){return/^onDynamic/.test(s)&&qc(s.charCodeAt(9))}})(Zc||(Zc={}));var ln=(e=>(e.Created="created",e.Read="read",e.Write="write",e.Open="open",e.Error="error",e.Close="close",e.BrowserWebSocketBlobReceived="browserWebSocketBlobReceived",e.NodeEndReceived="nodeEndReceived",e.NodeEndSent="nodeEndSent",e.NodeDrainBegin="nodeDrainBegin",e.NodeDrainEnd="nodeDrainEnd",e.zlibInflateError="zlibInflateError",e.zlibInflateData="zlibInflateData",e.zlibInflateInitialWrite="zlibInflateInitialWrite",e.zlibInflateInitialFlushFired="zlibInflateInitialFlushFired",e.zlibInflateWrite="zlibInflateWrite",e.zlibInflateFlushFired="zlibInflateFlushFired",e.zlibDeflateError="zlibDeflateError",e.zlibDeflateData="zlibDeflateData",e.zlibDeflateWrite="zlibDeflateWrite",e.zlibDeflateFlushFired="zlibDeflateFlushFired",e.WebSocketNodeSocketWrite="webSocketNodeSocketWrite",e.WebSocketNodeSocketPeekedHeader="webSocketNodeSocketPeekedHeader",e.WebSocketNodeSocketReadHeader="webSocketNodeSocketReadHeader",e.WebSocketNodeSocketReadData="webSocketNodeSocketReadData",e.WebSocketNodeSocketUnmaskedData="webSocketNodeSocketUnmaskedData",e.WebSocketNodeSocketDrainBegin="webSocketNodeSocketDrainBegin",e.WebSocketNodeSocketDrainEnd="webSocketNodeSocketDrainEnd",e.ProtocolHeaderRead="protocolHeaderRead",e.ProtocolMessageRead="protocolMessageRead",e.ProtocolHeaderWrite="protocolHeaderWrite",e.ProtocolMessageWrite="protocolMessageWrite",e.ProtocolWrite="protocolWrite",e))(ln||{}),Xa;(e=>{e.enableDiagnostics=!1,e.records=[];const t=new WeakMap;let n=0;function r(s,o){if(!t.has(s)){const a=String(++n);t.set(s,a)}return t.get(s)}function i(s,o,a,l){if(!e.enableDiagnostics)return;const u=r(s);if(l instanceof ce||l instanceof Uint8Array||l instanceof ArrayBuffer||ArrayBuffer.isView(l)){const c=ce.alloc(l.byteLength);c.set(l),e.records.push({timestamp:Date.now(),id:u,label:o,type:a,buff:c})}else e.records.push({timestamp:Date.now(),id:u,label:o,type:a,data:l})}e.traceSocketEvent=i})(Xa||(Xa={}));var zv=(e=>(e[e.NodeSocketCloseEvent=0]="NodeSocketCloseEvent",e[e.WebSocketCloseEvent=1]="WebSocketCloseEvent",e))(zv||{});let Wu=null;function US(){return Wu||(Wu=ce.alloc(0)),Wu}class FS{get byteLength(){return this._totalLength}constructor(){this._chunks=[],this._totalLength=0}acceptChunk(t){this._chunks.push(t),this._totalLength+=t.byteLength}read(t){return this._read(t,!0)}peek(t){return this._read(t,!1)}_read(t,n){if(t===0)return US();if(t>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===t){const o=this._chunks[0];return n&&(this._chunks.shift(),this._totalLength-=t),o}if(this._chunks[0].byteLength>t){const o=this._chunks[0].slice(0,t);return n&&(this._chunks[0]=this._chunks[0].slice(t),this._totalLength-=t),o}const r=ce.alloc(t);let i=0,s=0;for(;t>0;){const o=this._chunks[s];if(o.byteLength>t){const a=o.slice(0,t);r.set(a,i),i+=t,n&&(this._chunks[s]=o.slice(t),this._totalLength-=t),t-=t}else r.set(o,i),i+=o.byteLength,n?(this._chunks.shift(),this._totalLength-=o.byteLength):s++,t-=o.byteLength}return r}}function Hv(e){switch(e){case 0:return"None";case 1:return"Regular";case 2:return"Control";case 3:return"Ack";case 5:return"Disconnect";case 6:return"ReplayRequest";case 7:return"PauseWriting";case 8:return"ResumeWriting";case 9:return"KeepAlive"}}class Gv{constructor(t,n,r,i){this.type=t,this.id=n,this.ack=r,this.data=i,this.writtenTime=0}get size(){return this.data.byteLength}}class $S extends Di{constructor(t){super(),this._onMessage=this._register(new ie),this.onMessage=this._onMessage.event,this._state={readHead:!0,readLen:13,messageType:0,id:0,ack:0},this._socket=t,this._isDisposed=!1,this._incomingData=new FS,this._register(this._socket.onData(n=>this.acceptChunk(n))),this.lastReadTime=Date.now()}acceptChunk(t){if(!(!t||t.byteLength===0))for(this.lastReadTime=Date.now(),this._incomingData.acceptChunk(t);this._incomingData.byteLength>=this._state.readLen;){const n=this._incomingData.read(this._state.readLen);if(this._state.readHead)this._state.readHead=!1,this._state.readLen=n.readUInt32BE(9),this._state.messageType=n.readUInt8(0),this._state.id=n.readUInt32BE(1),this._state.ack=n.readUInt32BE(5),this._socket.traceSocketEvent("protocolHeaderRead",{messageType:Hv(this._state.messageType),id:this._state.id,ack:this._state.ack,messageSize:this._state.readLen});else{const r=this._state.messageType,i=this._state.id,s=this._state.ack;if(this._state.readHead=!0,this._state.readLen=13,this._state.messageType=0,this._state.id=0,this._state.ack=0,this._socket.traceSocketEvent("protocolMessageRead",n),this._onMessage.fire(new Gv(r,i,s,n)),this._isDisposed)break}}}readEntireBuffer(){return this._incomingData.read(this._incomingData.byteLength)}dispose(){this._isDisposed=!0,super.dispose()}}class BS{constructor(t){this._writeNowTimeout=null,this._isDisposed=!1,this._isPaused=!1,this._socket=t,this._data=[],this._totalLength=0,this.lastWriteTime=0}dispose(){try{this.flush()}catch{}this._isDisposed=!0}drain(){return this.flush(),this._socket.drain()}flush(){this._writeNow()}pause(){this._isPaused=!0}resume(){this._isPaused=!1,this._scheduleWriting()}write(t){if(this._isDisposed)return;t.writtenTime=Date.now(),this.lastWriteTime=Date.now();const n=ce.alloc(13);n.writeUInt8(t.type,0),n.writeUInt32BE(t.id,1),n.writeUInt32BE(t.ack,5),n.writeUInt32BE(t.data.byteLength,9),this._socket.traceSocketEvent("protocolHeaderWrite",{messageType:Hv(t.type),id:t.id,ack:t.ack,messageSize:t.data.byteLength}),this._socket.traceSocketEvent("protocolMessageWrite",t.data),this._writeSoon(n,t.data)}_bufferAdd(t,n){const r=this._totalLength===0;return this._data.push(t,n),this._totalLength+=t.byteLength+n.byteLength,r}_bufferTake(){const t=ce.concat(this._data,this._totalLength);return this._data.length=0,this._totalLength=0,t}_writeSoon(t,n){this._bufferAdd(t,n)&&this._scheduleWriting()}_scheduleWriting(){this._writeNowTimeout||(this._writeNowTimeout=setTimeout(()=>{this._writeNowTimeout=null,this._writeNow()}))}_writeNow(){if(this._totalLength===0||this._isPaused)return;const t=this._bufferTake();this._socket.traceSocketEvent("protocolWrite",{byteLength:t.byteLength}),this._socket.write(t)}}class VS extends Di{constructor(t){super(),this._onMessage=new ie,this.onMessage=this._onMessage.event,this._onDidDispose=new ie,this.onDidDispose=this._onDidDispose.event,this._socket=t,this._socketWriter=this._register(new BS(this._socket)),this._socketReader=this._register(new $S(this._socket)),this._register(this._socketReader.onMessage(n=>{n.type===1&&this._onMessage.fire(n.data)})),this._register(this._socket.onClose(()=>this._onDidDispose.fire()))}drain(){return this._socketWriter.drain()}getSocket(){return this._socket}sendDisconnect(){}send(t){this._socketWriter.write(new Gv(1,0,0,t))}}class ze{constructor(t,n=[],r=!1){this.ctor=t,this.staticArguments=n,this.supportsDelayedInstantiation=r}}const WS=[];function jS(){return WS}class qv{constructor(...t){this._entries=new Map;for(let[n,r]of t)this.set(n,r)}set(t,n){const r=this._entries.get(t);return this._entries.set(t,n),r}has(t){return this._entries.has(t)}get(t){return this._entries.get(t)}}const Yv=class{constructor(){this._zoomLevel=0,this._lastZoomLevelChangeTime=0,this._onDidChangeZoomLevel=new ie,this.onDidChangeZoomLevel=this._onDidChangeZoomLevel.event,this._zoomFactor=1,this._fullscreen=!1,this._onDidChangeFullscreen=new ie,this.onDidChangeFullscreen=this._onDidChangeFullscreen.event}getZoomLevel(){return this._zoomLevel}getTimeSinceLastZoomLevelChanged(){return Date.now()-this._lastZoomLevelChangeTime}setZoomLevel(e,t){this._zoomLevel!==e&&(this._zoomLevel=e,this._lastZoomLevelChangeTime=t?0:Date.now(),this._onDidChangeZoomLevel.fire(this._zoomLevel))}getZoomFactor(){return this._zoomFactor}setZoomFactor(e){this._zoomFactor=e}getPixelRatio(){let e=document.createElement("canvas").getContext("2d"),t=window.devicePixelRatio||1,n=e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return t/n}setFullscreen(e){this._fullscreen!==e&&(this._fullscreen=e,this._onDidChangeFullscreen.fire())}isFullscreen(){return this._fullscreen}};let Qv=Yv;Qv.INSTANCE=new Yv;Qv.INSTANCE.onDidChangeFullscreen;const wn=navigator.userAgent,zS=wn.indexOf("Firefox")>=0,HS=wn.indexOf("AppleWebKit")>=0,GS=wn.indexOf("Chrome")>=0,Xv=!GS&&wn.indexOf("Safari")>=0;wn.indexOf("iPad")>=0||Xv&&navigator.maxTouchPoints>0;wn.indexOf("Edge/")>=0&&wn.indexOf("WebView/")>=0;wn.indexOf("Electron/")>=0;wn.indexOf("Android")>=0;const qS=window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches;var R=(e=>(e[e.Unknown=0]="Unknown",e[e.Backspace=1]="Backspace",e[e.Tab=2]="Tab",e[e.Enter=3]="Enter",e[e.Shift=4]="Shift",e[e.Ctrl=5]="Ctrl",e[e.Alt=6]="Alt",e[e.PauseBreak=7]="PauseBreak",e[e.CapsLock=8]="CapsLock",e[e.Escape=9]="Escape",e[e.Space=10]="Space",e[e.PageUp=11]="PageUp",e[e.PageDown=12]="PageDown",e[e.End=13]="End",e[e.Home=14]="Home",e[e.LeftArrow=15]="LeftArrow",e[e.UpArrow=16]="UpArrow",e[e.RightArrow=17]="RightArrow",e[e.DownArrow=18]="DownArrow",e[e.Insert=19]="Insert",e[e.Delete=20]="Delete",e[e.KEY_0=21]="KEY_0",e[e.KEY_1=22]="KEY_1",e[e.KEY_2=23]="KEY_2",e[e.KEY_3=24]="KEY_3",e[e.KEY_4=25]="KEY_4",e[e.KEY_5=26]="KEY_5",e[e.KEY_6=27]="KEY_6",e[e.KEY_7=28]="KEY_7",e[e.KEY_8=29]="KEY_8",e[e.KEY_9=30]="KEY_9",e[e.KEY_A=31]="KEY_A",e[e.KEY_B=32]="KEY_B",e[e.KEY_C=33]="KEY_C",e[e.KEY_D=34]="KEY_D",e[e.KEY_E=35]="KEY_E",e[e.KEY_F=36]="KEY_F",e[e.KEY_G=37]="KEY_G",e[e.KEY_H=38]="KEY_H",e[e.KEY_I=39]="KEY_I",e[e.KEY_J=40]="KEY_J",e[e.KEY_K=41]="KEY_K",e[e.KEY_L=42]="KEY_L",e[e.KEY_M=43]="KEY_M",e[e.KEY_N=44]="KEY_N",e[e.KEY_O=45]="KEY_O",e[e.KEY_P=46]="KEY_P",e[e.KEY_Q=47]="KEY_Q",e[e.KEY_R=48]="KEY_R",e[e.KEY_S=49]="KEY_S",e[e.KEY_T=50]="KEY_T",e[e.KEY_U=51]="KEY_U",e[e.KEY_V=52]="KEY_V",e[e.KEY_W=53]="KEY_W",e[e.KEY_X=54]="KEY_X",e[e.KEY_Y=55]="KEY_Y",e[e.KEY_Z=56]="KEY_Z",e[e.Meta=57]="Meta",e[e.ContextMenu=58]="ContextMenu",e[e.F1=59]="F1",e[e.F2=60]="F2",e[e.F3=61]="F3",e[e.F4=62]="F4",e[e.F5=63]="F5",e[e.F6=64]="F6",e[e.F7=65]="F7",e[e.F8=66]="F8",e[e.F9=67]="F9",e[e.F10=68]="F10",e[e.F11=69]="F11",e[e.F12=70]="F12",e[e.F13=71]="F13",e[e.F14=72]="F14",e[e.F15=73]="F15",e[e.F16=74]="F16",e[e.F17=75]="F17",e[e.F18=76]="F18",e[e.F19=77]="F19",e[e.NumLock=78]="NumLock",e[e.ScrollLock=79]="ScrollLock",e[e.US_SEMICOLON=80]="US_SEMICOLON",e[e.US_EQUAL=81]="US_EQUAL",e[e.US_COMMA=82]="US_COMMA",e[e.US_MINUS=83]="US_MINUS",e[e.US_DOT=84]="US_DOT",e[e.US_SLASH=85]="US_SLASH",e[e.US_BACKTICK=86]="US_BACKTICK",e[e.US_OPEN_SQUARE_BRACKET=87]="US_OPEN_SQUARE_BRACKET",e[e.US_BACKSLASH=88]="US_BACKSLASH",e[e.US_CLOSE_SQUARE_BRACKET=89]="US_CLOSE_SQUARE_BRACKET",e[e.US_QUOTE=90]="US_QUOTE",e[e.OEM_8=91]="OEM_8",e[e.OEM_102=92]="OEM_102",e[e.NUMPAD_0=93]="NUMPAD_0",e[e.NUMPAD_1=94]="NUMPAD_1",e[e.NUMPAD_2=95]="NUMPAD_2",e[e.NUMPAD_3=96]="NUMPAD_3",e[e.NUMPAD_4=97]="NUMPAD_4",e[e.NUMPAD_5=98]="NUMPAD_5",e[e.NUMPAD_6=99]="NUMPAD_6",e[e.NUMPAD_7=100]="NUMPAD_7",e[e.NUMPAD_8=101]="NUMPAD_8",e[e.NUMPAD_9=102]="NUMPAD_9",e[e.NUMPAD_MULTIPLY=103]="NUMPAD_MULTIPLY",e[e.NUMPAD_ADD=104]="NUMPAD_ADD",e[e.NUMPAD_SEPARATOR=105]="NUMPAD_SEPARATOR",e[e.NUMPAD_SUBTRACT=106]="NUMPAD_SUBTRACT",e[e.NUMPAD_DECIMAL=107]="NUMPAD_DECIMAL",e[e.NUMPAD_DIVIDE=108]="NUMPAD_DIVIDE",e[e.KEY_IN_COMPOSITION=109]="KEY_IN_COMPOSITION",e[e.ABNT_C1=110]="ABNT_C1",e[e.ABNT_C2=111]="ABNT_C2",e[e.MAX_VALUE=112]="MAX_VALUE",e))(R||{});class Bd{constructor(){this._keyCodeToStr=[],this._strToKeyCode=Object.create(null)}define(t,n){this._keyCodeToStr[t]=n,this._strToKeyCode[n.toLowerCase()]=t}keyCodeToStr(t){return this._keyCodeToStr[t]}strToKeyCode(t){return this._strToKeyCode[t.toLowerCase()]||0}}const Jc=new Bd,ef=new Bd,tf=new Bd;(function(){function e(t,n,r=n,i=r){Jc.define(t,n),ef.define(t,r),tf.define(t,i)}e(0,"unknown"),e(1,"Backspace"),e(2,"Tab"),e(3,"Enter"),e(4,"Shift"),e(5,"Ctrl"),e(6,"Alt"),e(7,"PauseBreak"),e(8,"CapsLock"),e(9,"Escape"),e(10,"Space"),e(11,"PageUp"),e(12,"PageDown"),e(13,"End"),e(14,"Home"),e(15,"LeftArrow","Left"),e(16,"UpArrow","Up"),e(17,"RightArrow","Right"),e(18,"DownArrow","Down"),e(19,"Insert"),e(20,"Delete"),e(21,"0"),e(22,"1"),e(23,"2"),e(24,"3"),e(25,"4"),e(26,"5"),e(27,"6"),e(28,"7"),e(29,"8"),e(30,"9"),e(31,"A"),e(32,"B"),e(33,"C"),e(34,"D"),e(35,"E"),e(36,"F"),e(37,"G"),e(38,"H"),e(39,"I"),e(40,"J"),e(41,"K"),e(42,"L"),e(43,"M"),e(44,"N"),e(45,"O"),e(46,"P"),e(47,"Q"),e(48,"R"),e(49,"S"),e(50,"T"),e(51,"U"),e(52,"V"),e(53,"W"),e(54,"X"),e(55,"Y"),e(56,"Z"),e(57,"Meta"),e(58,"ContextMenu"),e(59,"F1"),e(60,"F2"),e(61,"F3"),e(62,"F4"),e(63,"F5"),e(64,"F6"),e(65,"F7"),e(66,"F8"),e(67,"F9"),e(68,"F10"),e(69,"F11"),e(70,"F12"),e(71,"F13"),e(72,"F14"),e(73,"F15"),e(74,"F16"),e(75,"F17"),e(76,"F18"),e(77,"F19"),e(78,"NumLock"),e(79,"ScrollLock"),e(80,";",";","OEM_1"),e(81,"=","=","OEM_PLUS"),e(82,",",",","OEM_COMMA"),e(83,"-","-","OEM_MINUS"),e(84,".",".","OEM_PERIOD"),e(85,"/","/","OEM_2"),e(86,"`","`","OEM_3"),e(110,"ABNT_C1"),e(111,"ABNT_C2"),e(87,"[","[","OEM_4"),e(88,"\\","\\","OEM_5"),e(89,"]","]","OEM_6"),e(90,"'","'","OEM_7"),e(91,"OEM_8"),e(92,"OEM_102"),e(93,"NumPad0"),e(94,"NumPad1"),e(95,"NumPad2"),e(96,"NumPad3"),e(97,"NumPad4"),e(98,"NumPad5"),e(99,"NumPad6"),e(100,"NumPad7"),e(101,"NumPad8"),e(102,"NumPad9"),e(103,"NumPad_Multiply"),e(104,"NumPad_Add"),e(105,"NumPad_Separator"),e(106,"NumPad_Subtract"),e(107,"NumPad_Decimal"),e(108,"NumPad_Divide")})();var nm;(e=>{function t(o){return Jc.keyCodeToStr(o)}e.toString=t;function n(o){return Jc.strToKeyCode(o)}e.fromString=n;function r(o){return ef.keyCodeToStr(o)}e.toUserSettingsUS=r;function i(o){return tf.keyCodeToStr(o)}e.toUserSettingsGeneral=i;function s(o){return ef.strToKeyCode(o)||tf.strToKeyCode(o)}e.fromUserSettings=s})(nm||(nm={}));var Rr=(e=>(e[e.CtrlCmd=2048]="CtrlCmd",e[e.Shift=1024]="Shift",e[e.Alt=512]="Alt",e[e.WinCtrl=256]="WinCtrl",e))(Rr||{});let YS=new Array(230),ju=new Array(R.MAX_VALUE);(function(){for(let t=0;t<ju.length;t++)ju[t]=-1;function e(t,n){YS[t]=n,ju[n]=t}e(3,R.PauseBreak),e(8,R.Backspace),e(9,R.Tab),e(13,R.Enter),e(16,R.Shift),e(17,R.Ctrl),e(18,R.Alt),e(19,R.PauseBreak),e(20,R.CapsLock),e(27,R.Escape),e(32,R.Space),e(33,R.PageUp),e(34,R.PageDown),e(35,R.End),e(36,R.Home),e(37,R.LeftArrow),e(38,R.UpArrow),e(39,R.RightArrow),e(40,R.DownArrow),e(45,R.Insert),e(46,R.Delete),e(48,R.KEY_0),e(49,R.KEY_1),e(50,R.KEY_2),e(51,R.KEY_3),e(52,R.KEY_4),e(53,R.KEY_5),e(54,R.KEY_6),e(55,R.KEY_7),e(56,R.KEY_8),e(57,R.KEY_9),e(65,R.KEY_A),e(66,R.KEY_B),e(67,R.KEY_C),e(68,R.KEY_D),e(69,R.KEY_E),e(70,R.KEY_F),e(71,R.KEY_G),e(72,R.KEY_H),e(73,R.KEY_I),e(74,R.KEY_J),e(75,R.KEY_K),e(76,R.KEY_L),e(77,R.KEY_M),e(78,R.KEY_N),e(79,R.KEY_O),e(80,R.KEY_P),e(81,R.KEY_Q),e(82,R.KEY_R),e(83,R.KEY_S),e(84,R.KEY_T),e(85,R.KEY_U),e(86,R.KEY_V),e(87,R.KEY_W),e(88,R.KEY_X),e(89,R.KEY_Y),e(90,R.KEY_Z),e(93,R.ContextMenu),e(96,R.NUMPAD_0),e(97,R.NUMPAD_1),e(98,R.NUMPAD_2),e(99,R.NUMPAD_3),e(100,R.NUMPAD_4),e(101,R.NUMPAD_5),e(102,R.NUMPAD_6),e(103,R.NUMPAD_7),e(104,R.NUMPAD_8),e(105,R.NUMPAD_9),e(106,R.NUMPAD_MULTIPLY),e(107,R.NUMPAD_ADD),e(108,R.NUMPAD_SEPARATOR),e(109,R.NUMPAD_SUBTRACT),e(110,R.NUMPAD_DECIMAL),e(111,R.NUMPAD_DIVIDE),e(112,R.F1),e(113,R.F2),e(114,R.F3),e(115,R.F4),e(116,R.F5),e(117,R.F6),e(118,R.F7),e(119,R.F8),e(120,R.F9),e(121,R.F10),e(122,R.F11),e(123,R.F12),e(124,R.F13),e(125,R.F14),e(126,R.F15),e(127,R.F16),e(128,R.F17),e(129,R.F18),e(130,R.F19),e(144,R.NumLock),e(145,R.ScrollLock),e(186,R.US_SEMICOLON),e(187,R.US_EQUAL),e(188,R.US_COMMA),e(189,R.US_MINUS),e(190,R.US_DOT),e(191,R.US_SLASH),e(192,R.US_BACKTICK),e(193,R.ABNT_C1),e(194,R.ABNT_C2),e(219,R.US_OPEN_SQUARE_BRACKET),e(220,R.US_BACKSLASH),e(221,R.US_CLOSE_SQUARE_BRACKET),e(222,R.US_QUOTE),e(223,R.OEM_8),e(226,R.OEM_102),e(229,R.KEY_IN_COMPOSITION),zS?(e(59,R.US_SEMICOLON),e(107,R.US_EQUAL),e(109,R.US_MINUS),Qs&&e(224,R.Meta)):HS&&(e(91,R.Meta),e(Qs?93:92,R.Meta))})();Qs?Rr.WinCtrl:Rr.CtrlCmd;Rr.Alt;Rr.Shift;Qs?Rr.CtrlCmd:Rr.WinCtrl;Vu||document.queryCommandSupported&&document.queryCommandSupported("copy")||navigator&&navigator.clipboard&&navigator.clipboard.writeText,Vu||navigator&&navigator.clipboard&&navigator.clipboard.readText,Vu||qS?0:navigator.keyboard||Xv?1:2,"ontouchstart"in window||navigator.maxTouchPoints>0||window.navigator.msMaxTouchPoints>0,window.PointerEvent&&("ontouchstart"in window||window.navigator.maxTouchPoints>0||navigator.maxTouchPoints>0||window.navigator.msMaxTouchPoints>0);let Kv;(function(){function e(t,n,r){function i(a,l){if(!n[a]){if(!t[a]){var u=typeof require=="function"&&require;if(!l&&u)return u(a,!0);if(s)return s(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var d=n[a]={exports:{}};t[a][0].call(d.exports,function(f){var g=t[a][1][f];return i(g||f)},d,d.exports,e,t,n,r)}return n[a].exports}for(var s=typeof require=="function"&&require,o=0;o<r.length;o++)i(r[o]);return i}return e})()({1:[function(e,t,n){var r=e("./toMap"),i=["background","base","cite","href","longdesc","src","usemap"];t.exports={uris:r(i)}},{"./toMap":10}],2:[function(e,t,n){var r={allowedAttributes:{"*":["title","accesskey"],a:["href","name","target","aria-label"],iframe:["allowfullscreen","frameborder","src"],img:["src","alt","title","aria-label"]},allowedClasses:{},allowedSchemes:["http","https","mailto"],allowedTags:["a","abbr","article","b","blockquote","br","caption","code","del","details","div","em","h1","h2","h3","h4","h5","h6","hr","i","img","ins","kbd","li","main","mark","ol","p","pre","section","span","strike","strong","sub","summary","sup","table","tbody","td","th","thead","tr","u","ul"],filter:null};t.exports=r},{}],3:[function(e,t,n){var r=e("./toMap"),i=["area","br","col","hr","img","wbr","input","base","basefont","link","meta"];t.exports={voids:r(i)}},{"./toMap":10}],4:[function(e,t,n){e("he");var r=e("assignment"),i=e("./parser"),s=e("./sanitizer"),o=e("./defaults");function a(l,u,c){var d=[],f=c===!0?u:r({},o,u),g=s(d,f);return i(l,g),d.join("")}a.defaults=o,t.exports=a,Kv=a},{"./defaults":2,"./parser":7,"./sanitizer":8,assignment:6,he:9}],5:[function(e,t,n){t.exports=function(i){return typeof i=="string"?i.toLowerCase():i}},{}],6:[function(e,t,n){function r(i){for(var s=Array.prototype.slice.call(arguments,1),o,a;s.length;){o=s.shift();for(a in o)o.hasOwnProperty(a)&&(Object.prototype.toString.call(i[a])==="[object Object]"?i[a]=r(i[a],o[a]):i[a]=o[a])}return i}t.exports=r},{}],7:[function(e,t,n){var r=e("he"),i=e("./lowercase");e("./attributes");var s=e("./elements"),o=/^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,a=/^<\s*\/\s*([\w:-]+)[^>]*>/,l=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,u=/^</,c=/^<\s*\//;function d(){var g=[];return g.lastItem=function(){return g[g.length-1]},g}function f(g,b){for(var v=d(),h=g,m;g;)_();x();function _(){m=!0,y();var k=g===h;h=g,k&&(g="")}function y(){g.substr(0,4)==="<!--"?S():c.test(g)?p(a,x):u.test(g)&&p(o,E),w()}function p(k,A){var Y=g.match(k);Y&&(g=g.substring(Y[0].length),Y[0].replace(k,A),m=!1)}function S(){var k=g.indexOf("-->");k>=0&&(b.comment&&b.comment(g.substring(4,k)),g=g.substring(k+3),m=!1)}function w(){if(m){var k,A=g.indexOf("<");A>=0?(k=g.substring(0,A),g=g.substring(A)):(k=g,g=""),b.chars&&b.chars(k)}}function E(k,A,Y,z){var C={},L=i(A),P=s.voids[L]||!!z;Y.replace(l,j),P||v.push(L),b.start&&b.start(L,C,P);function j(N,H,G,Q,I){G===void 0&&Q===void 0&&I===void 0?C[H]=void 0:C[H]=r.decode(G||Q||I||"")}}function x(k,A){var Y,z=0,C=i(A);if(C)for(z=v.length-1;z>=0&&v[z]!==C;z--);if(z>=0){for(Y=v.length-1;Y>=z;Y--)b.end&&b.end(v[Y]);v.length=z}}}t.exports=f},{"./attributes":1,"./elements":3,"./lowercase":5,he:9}],8:[function(e,t,n){var r=e("he"),i=e("./lowercase"),s=e("./attributes"),o=e("./elements");function a(l,u){var c,d=u||{};return y(),{start:g,end:b,chars:h};function f(p){l.push(p)}function g(p,S,w){var E=i(p);if(c.ignoring){m(E);return}if((d.allowedTags||[]).indexOf(E)===-1){m(E);return}if(d.filter&&!d.filter({tag:E,attrs:S})){m(E);return}f("<"),f(E),Object.keys(S).forEach(x),f(w?"/>":">");function x(k){var A=S[k],Y=(d.allowedClasses||{})[E]||[],z=(d.allowedAttributes||{})[E]||[];z=z.concat((d.allowedAttributes||{})["*"]||[]);var C,L=i(k);L==="class"&&z.indexOf(L)===-1?(A=A.split(" ").filter(P).join(" ").trim(),C=A.length):C=z.indexOf(L)!==-1&&(s.uris[L]!==!0||v(A)),C&&(f(" "),f(k),typeof A=="string"&&(f('="'),f(r.encode(A)),f('"')));function P(j){return Y&&Y.indexOf(j)!==-1}}}function b(p){var S=i(p),w=(d.allowedTags||[]).indexOf(S)!==-1;w&&c.ignoring===!1?(f("</"),f(S),f(">")):_(S)}function v(p){var S=p[0];if(S==="#"||S==="/")return!0;var w=p.indexOf(":");if(w===-1)return!0;var E=p.indexOf("?");if(E!==-1&&w>E)return!0;var x=p.indexOf("#");if(x!==-1&&w>x)return!0;return d.allowedSchemes.some(k);function k(A){return p.indexOf(A+":")===0}}function h(p){c.ignoring===!1&&f(d.transformText?d.transformText(p):p)}function m(p){o.voids[p]||(c.ignoring===!1?c={ignoring:p,depth:1}:c.ignoring===p&&c.depth++)}function _(p){c.ignoring===p&&--c.depth<=0&&y()}function y(){c={ignoring:!1,depth:0}}}t.exports=a},{"./attributes":1,"./elements":3,"./lowercase":5,he:9}],9:[function(e,t,n){var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},i={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},s=/(&amp;|&lt;|&gt;|&quot;|&#39;)/g,o=/[&<>"']/g;function a(d){return r[d]}function l(d){return i[d]}function u(d){return d==null?"":String(d).replace(o,a)}function c(d){return d==null?"":String(d).replace(s,l)}u.options=c.options={},t.exports={encode:u,escape:u,decode:c,unescape:c,version:"1.0.0-browser"}},{}],10:[function(e,t,n){function r(s){return s.reduce(i,{})}function i(s,o){return s[o]=!0,s}t.exports=r},{}]},{},[4]);var QS=Kv;class XS{constructor(t,n,r,i){this._node=t,this._type=n,this._handler=r,this._options=i||!1,this._node.addEventListener(this._type,this._handler,this._options)}dispose(){this._handler&&(this._node.removeEventListener(this._type,this._handler,this._options),this._node=null,this._handler=null)}}function zu(e,t,n,r){return new XS(e,t,n,r)}kS.setPreferredWebSchema(/^https:/.test(window.location.href)?"https":"http");var kv;(kv=window.trustedTypes)==null||kv.createPolicy("safeInnerHtml",{createHTML(e,t){return QS(e,t)}});var rm;(e=>{function t(n){const r=n;return typeof(r==null?void 0:r.showDirectoryPicker)=="function"}e.supported=t})(rm||(rm={}));class KS extends Di{constructor(t,n){super(),this._onData=new ie,this.onData=this._onData.event,this._onOpen=this._register(new ie),this.onOpen=this._onOpen.event,this._onClose=this._register(new ie),this.onClose=this._onClose.event,this._onError=this._register(new ie),this.onError=this._onError.event,this._debugLabel=n,this._socket=new WebSocket(t),this.traceSocketEvent(ln.Created,{type:"BrowserWebSocket",url:t}),this._fileReader=new FileReader,this._queue=[],this._isReading=!1,this._isClosed=!1,this._fileReader.onload=u=>{this._isReading=!1;const c=u.target.result;this.traceSocketEvent(ln.Read,c),this._onData.fire(c),this._queue.length>0&&r(this._queue.shift())};const r=u=>{if(this._isReading){this._queue.push(u);return}this._isReading=!0,this._fileReader.readAsArrayBuffer(u)};this._socketMessageListener=u=>{const c=u.data;this.traceSocketEvent(ln.BrowserWebSocketBlobReceived,{type:c.type,size:c.size}),r(c)},this._socket.addEventListener("message",this._socketMessageListener),this._register(zu(this._socket,"open",u=>{this.traceSocketEvent(ln.Open),this._onOpen.fire()}));let i=null;const s=()=>{const u=i;i=null,this._onError.fire(u)},o=this._register(new AS(s,0)),a=u=>{o.cancel(),i=u,o.schedule()},l=u=>{o.cancel(),i=u,s()};this._register(zu(this._socket,"close",u=>{this.traceSocketEvent(ln.Close,{code:u.code,reason:u.reason,wasClean:u.wasClean}),this._isClosed=!0,i&&(window.navigator.onLine?u.wasClean?(o.cancel(),s()):l(new Error(u.reason||`WebSocket close with status code ${u.code}`)):l(new Error("Browser is offline"))),this._onClose.fire({code:u.code,reason:u.reason,wasClean:u.wasClean,event:u})})),this._register(zu(this._socket,"error",u=>{this.traceSocketEvent(ln.Error,{message:u==null?void 0:u.message}),a(u)}))}traceSocketEvent(t,n){Xa.traceSocketEvent(this._socket,this._debugLabel,t,n)}send(t){this._isClosed||(this.traceSocketEvent(ln.Write,t),this._socket.send(t))}close(){this._isClosed=!0,this.traceSocketEvent(ln.Close),this._socket.close(),this._socket.removeEventListener("message",this._socketMessageListener),this.dispose()}}const ZS=new class{create(e,t){return new KS(e,t)}};class JS{traceSocketEvent(t,n){typeof this.socket.traceSocketEvent=="function"?this.socket.traceSocketEvent(t,n):Xa.traceSocketEvent(this.socket,this.debugLabel,t,n)}constructor(t,n){this.socket=t,this.debugLabel=n}dispose(){this.socket.close()}onData(t){return this.socket.onData(n=>t(ce.wrap(new Uint8Array(n))))}onClose(t){const n=r=>{t(typeof r>"u"?r:{type:zv.WebSocketCloseEvent,code:r.code,reason:r.reason,wasClean:r.wasClean,event:r.event})};return this.socket.onClose(n)}onEnd(t){return Di.None}write(t){this.socket.send(t.buffer)}end(){this.socket.close()}drain(){return Promise.resolve()}}class eE{constructor(t){this._webSocketFactory=t||ZS}connect(t,n,r,i,s){const o=/^https:/.test(window.location.href)?"wss":"ws",a=this._webSocketFactory.create(`${o}://${/:/.test(t)?`[${t}]`:t}:${n}${r}?${i}`,s);return new Promise((l,u)=>{const c=a.onError(d=>u(d));a.onOpen(()=>{c.dispose(),l(new JS(a,s))})})}}var _s=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Dr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function tE(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var s=Function.bind.apply(t,i);return new s}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Zv={exports:{}},Ot={},Jv={exports:{}},ne={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var im=Object.getOwnPropertySymbols,nE=Object.prototype.hasOwnProperty,rE=Object.prototype.propertyIsEnumerable;function iE(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function sE(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(s){return t[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Vd=sE()?Object.assign:function(e,t){for(var n,r=iE(e),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)nE.call(n,o)&&(r[o]=n[o]);if(im){i=im(n);for(var a=0;a<i.length;a++)rE.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd=Vd,Ui=60103,ey=60106;ne.Fragment=60107;ne.StrictMode=60108;ne.Profiler=60114;var ty=60109,ny=60110,ry=60112;ne.Suspense=60113;var iy=60115,sy=60116;if(typeof Symbol=="function"&&Symbol.for){var Nt=Symbol.for;Ui=Nt("react.element"),ey=Nt("react.portal"),ne.Fragment=Nt("react.fragment"),ne.StrictMode=Nt("react.strict_mode"),ne.Profiler=Nt("react.profiler"),ty=Nt("react.provider"),ny=Nt("react.context"),ry=Nt("react.forward_ref"),ne.Suspense=Nt("react.suspense"),iy=Nt("react.memo"),sy=Nt("react.lazy")}var sm=typeof Symbol=="function"&&Symbol.iterator;function oE(e){return e===null||typeof e!="object"?null:(e=sm&&e[sm]||e["@@iterator"],typeof e=="function"?e:null)}function Ao(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ay={};function Fi(e,t,n){this.props=e,this.context=t,this.refs=ay,this.updater=n||oy}Fi.prototype.isReactComponent={};Fi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(Ao(85));this.updater.enqueueSetState(this,e,t,"setState")};Fi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ly(){}ly.prototype=Fi.prototype;function jd(e,t,n){this.props=e,this.context=t,this.refs=ay,this.updater=n||oy}var zd=jd.prototype=new ly;zd.constructor=jd;Wd(zd,Fi.prototype);zd.isPureReactComponent=!0;var Hd={current:null},uy=Object.prototype.hasOwnProperty,cy={key:!0,ref:!0,__self:!0,__source:!0};function fy(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)uy.call(t,r)&&!cy.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ui,type:e,key:s,ref:o,props:i,_owner:Hd.current}}function aE(e,t){return{$$typeof:Ui,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Gd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ui}function lE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var om=/\/+/g;function Hu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lE(""+e.key):t.toString(36)}function Ta(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ui:case ey:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Hu(o,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(om,"$&/")+"/"),Ta(i,t,n,"",function(u){return u})):i!=null&&(Gd(i)&&(i=aE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(om,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Array.isArray(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Hu(s,a);o+=Ta(s,t,n,l,i)}else if(l=oE(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Hu(s,a++),o+=Ta(s,t,n,l,i);else if(s==="object")throw t=""+e,Error(Ao(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return o}function Ho(e,t,n){if(e==null)return e;var r=[],i=0;return Ta(e,r,"","",function(s){return t.call(n,s,i++)}),r}function uE(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var dy={current:null};function xn(){var e=dy.current;if(e===null)throw Error(Ao(321));return e}var cE={ReactCurrentDispatcher:dy,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Hd,IsSomeRendererActing:{current:!1},assign:Wd};ne.Children={map:Ho,forEach:function(e,t,n){Ho(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ho(e,function(){t++}),t},toArray:function(e){return Ho(e,function(t){return t})||[]},only:function(e){if(!Gd(e))throw Error(Ao(143));return e}};ne.Component=Fi;ne.PureComponent=jd;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cE;ne.cloneElement=function(e,t,n){if(e==null)throw Error(Ao(267,e));var r=Wd({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Hd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)uy.call(t,l)&&!cy.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ui,type:e.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:ny,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:ty,_context:e},e.Consumer=e};ne.createElement=fy;ne.createFactory=function(e){var t=fy.bind(null,e);return t.type=e,t};ne.createRef=function(){return{current:null}};ne.forwardRef=function(e){return{$$typeof:ry,render:e}};ne.isValidElement=Gd;ne.lazy=function(e){return{$$typeof:sy,_payload:{_status:-1,_result:e},_init:uE}};ne.memo=function(e,t){return{$$typeof:iy,type:e,compare:t===void 0?null:t}};ne.useCallback=function(e,t){return xn().useCallback(e,t)};ne.useContext=function(e,t){return xn().useContext(e,t)};ne.useDebugValue=function(){};ne.useEffect=function(e,t){return xn().useEffect(e,t)};ne.useImperativeHandle=function(e,t,n){return xn().useImperativeHandle(e,t,n)};ne.useLayoutEffect=function(e,t){return xn().useLayoutEffect(e,t)};ne.useMemo=function(e,t){return xn().useMemo(e,t)};ne.useReducer=function(e,t,n){return xn().useReducer(e,t,n)};ne.useRef=function(e){return xn().useRef(e)};ne.useState=function(e){return xn().useState(e)};ne.version="17.0.2";Jv.exports=ne;var T=Jv.exports;const V=Dr(T);var hy={exports:{}},py={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){var t,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}if(typeof window>"u"||typeof MessageChannel!="function"){var l=null,u=null,c=function(){if(l!==null)try{var I=e.unstable_now();l(!0,I),l=null}catch(M){throw setTimeout(c,0),M}};t=function(I){l!==null?setTimeout(t,0,I):(l=I,setTimeout(c,0))},n=function(I,M){u=setTimeout(I,M)},r=function(){clearTimeout(u)},e.unstable_shouldYield=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var d=window.setTimeout,f=window.clearTimeout;if(typeof console<"u"){var g=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof g!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var b=!1,v=null,h=-1,m=5,_=0;e.unstable_shouldYield=function(){return e.unstable_now()>=_},i=function(){},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):m=0<I?Math.floor(1e3/I):5};var y=new MessageChannel,p=y.port2;y.port1.onmessage=function(){if(v!==null){var I=e.unstable_now();_=I+m;try{v(!0,I)?p.postMessage(null):(b=!1,v=null)}catch(M){throw p.postMessage(null),M}}else b=!1},t=function(I){v=I,b||(b=!0,p.postMessage(null))},n=function(I,M){h=d(function(){I(e.unstable_now())},M)},r=function(){f(h),h=-1}}function S(I,M){var F=I.length;I.push(M);e:for(;;){var B=F-1>>>1,J=I[B];if(J!==void 0&&0<x(J,M))I[B]=M,I[F]=J,F=B;else break e}}function w(I){return I=I[0],I===void 0?null:I}function E(I){var M=I[0];if(M!==void 0){var F=I.pop();if(F!==M){I[0]=F;e:for(var B=0,J=I.length;B<J;){var Se=2*(B+1)-1,Ee=I[Se],Be=Se+1,he=I[Be];if(Ee!==void 0&&0>x(Ee,F))he!==void 0&&0>x(he,Ee)?(I[B]=he,I[Be]=F,B=Be):(I[B]=Ee,I[Se]=F,B=Se);else if(he!==void 0&&0>x(he,F))I[B]=he,I[Be]=F,B=Be;else break e}}return M}return null}function x(I,M){var F=I.sortIndex-M.sortIndex;return F!==0?F:I.id-M.id}var k=[],A=[],Y=1,z=null,C=3,L=!1,P=!1,j=!1;function N(I){for(var M=w(A);M!==null;){if(M.callback===null)E(A);else if(M.startTime<=I)E(A),M.sortIndex=M.expirationTime,S(k,M);else break;M=w(A)}}function H(I){if(j=!1,N(I),!P)if(w(k)!==null)P=!0,t(G);else{var M=w(A);M!==null&&n(H,M.startTime-I)}}function G(I,M){P=!1,j&&(j=!1,r()),L=!0;var F=C;try{for(N(M),z=w(k);z!==null&&(!(z.expirationTime>M)||I&&!e.unstable_shouldYield());){var B=z.callback;if(typeof B=="function"){z.callback=null,C=z.priorityLevel;var J=B(z.expirationTime<=M);M=e.unstable_now(),typeof J=="function"?z.callback=J:z===w(k)&&E(k),N(M)}else E(k);z=w(k)}if(z!==null)var Se=!0;else{var Ee=w(A);Ee!==null&&n(H,Ee.startTime-M),Se=!1}return Se}finally{z=null,C=F,L=!1}}var Q=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){P||L||(P=!0,t(G))},e.unstable_getCurrentPriorityLevel=function(){return C},e.unstable_getFirstCallbackNode=function(){return w(k)},e.unstable_next=function(I){switch(C){case 1:case 2:case 3:var M=3;break;default:M=C}var F=C;C=M;try{return I()}finally{C=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=Q,e.unstable_runWithPriority=function(I,M){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var F=C;C=I;try{return M()}finally{C=F}},e.unstable_scheduleCallback=function(I,M,F){var B=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?B+F:B):F=B,I){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=F+J,I={id:Y++,callback:M,priorityLevel:I,startTime:F,expirationTime:J,sortIndex:-1},F>B?(I.sortIndex=F,S(A,I),w(k)===null&&I===w(A)&&(j?r():j=!0,n(H,F-B))):(I.sortIndex=J,S(k,I),P||L||(P=!0,t(G))),I},e.unstable_wrapCallback=function(I){var M=C;return function(){var F=C;C=M;try{return I.apply(this,arguments)}finally{C=F}}}})(py);hy.exports=py;var fE=hy.exports;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zl=T,we=Vd,$e=fE;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!zl)throw Error(D(227));var my=new Set,Zs={};function Ur(e,t){Ti(e,t),Ti(e+"Capture",t)}function Ti(e,t){for(Zs[e]=t,e=0;e<t.length;e++)my.add(t[e])}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,am=Object.prototype.hasOwnProperty,lm={},um={};function hE(e){return am.call(um,e)?!0:am.call(lm,e)?!1:dE.test(e)?um[e]=!0:(lm[e]=!0,!1)}function pE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function mE(e,t,n,r){if(t===null||typeof t>"u"||pE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function tt(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ge[e]=new tt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ge[t]=new tt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ge[e]=new tt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ge[e]=new tt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ge[e]=new tt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ge[e]=new tt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ge[e]=new tt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ge[e]=new tt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ge[e]=new tt(e,5,!1,e.toLowerCase(),null,!1,!1)});var qd=/[\-:]([a-z])/g;function Yd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qd,Yd);Ge[t]=new tt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qd,Yd);Ge[t]=new tt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qd,Yd);Ge[t]=new tt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ge[e]=new tt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ge[e]=new tt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qd(e,t,n,r){var i=Ge.hasOwnProperty(t)?Ge[t]:null,s=i!==null?i.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");s||(mE(t,n,i,r)&&(n=null),r||i===null?hE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Fr=zl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vs=60103,_r=60106,Dn=60107,Xd=60108,Rs=60114,Kd=60109,Zd=60110,Hl=60112,As=60113,Ka=60120,Gl=60115,Jd=60116,eh=60121,th=60128,gy=60129,nh=60130,nf=60131;if(typeof Symbol=="function"&&Symbol.for){var De=Symbol.for;vs=De("react.element"),_r=De("react.portal"),Dn=De("react.fragment"),Xd=De("react.strict_mode"),Rs=De("react.profiler"),Kd=De("react.provider"),Zd=De("react.context"),Hl=De("react.forward_ref"),As=De("react.suspense"),Ka=De("react.suspense_list"),Gl=De("react.memo"),Jd=De("react.lazy"),eh=De("react.block"),De("react.scope"),th=De("react.opaque.id"),gy=De("react.debug_trace_mode"),nh=De("react.offscreen"),nf=De("react.legacy_hidden")}var cm=typeof Symbol=="function"&&Symbol.iterator;function Zi(e){return e===null||typeof e!="object"?null:(e=cm&&e[cm]||e["@@iterator"],typeof e=="function"?e:null)}var Gu;function ys(e){if(Gu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Gu=t&&t[1]||""}return`
`+Gu+e}var qu=!1;function Go(e,t){if(!e||qu)return"";qu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(l){var r=l}Reflect.construct(e,[],t)}else{try{t.call()}catch(l){r=l}e.call(t.prototype)}else{try{throw Error()}catch(l){r=l}e()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=a);break}}}finally{qu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ys(e):""}function gE(e){switch(e.tag){case 5:return ys(e.type);case 16:return ys("Lazy");case 13:return ys("Suspense");case 19:return ys("SuspenseList");case 0:case 2:case 15:return e=Go(e.type,!1),e;case 11:return e=Go(e.type.render,!1),e;case 22:return e=Go(e.type._render,!1),e;case 1:return e=Go(e.type,!0),e;default:return""}}function ci(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dn:return"Fragment";case _r:return"Portal";case Rs:return"Profiler";case Xd:return"StrictMode";case As:return"Suspense";case Ka:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zd:return(e.displayName||"Context")+".Consumer";case Kd:return(e._context.displayName||"Context")+".Provider";case Hl:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case Gl:return ci(e.type);case eh:return ci(e._render);case Jd:t=e._payload,e=e._init;try{return ci(e(t))}catch{}}return null}function Jn(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function _y(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _E(e){var t=_y(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qo(e){e._valueTracker||(e._valueTracker=_E(e))}function vy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_y(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Za(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function rf(e,t){var n=t.checked;return we({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function fm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Jn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yy(e,t){t=t.checked,t!=null&&Qd(e,"checked",t,!1)}function sf(e,t){yy(e,t);var n=Jn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?of(e,t.type,n):t.hasOwnProperty("defaultValue")&&of(e,t.type,Jn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function dm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function of(e,t,n){(t!=="number"||Za(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function vE(e){var t="";return zl.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function af(e,t){return e=we({children:void 0},t),(t=vE(t.children))&&(e.children=t),e}function fi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Jn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function lf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return we({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Jn(n)}}function by(e,t){var n=Jn(t.value),r=Jn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function pm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var uf={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function wy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yo,Sy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==uf.svg||"innerHTML"in e)e.innerHTML=t;else{for(Yo=Yo||document.createElement("div"),Yo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Js(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Is={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yE=["Webkit","ms","Moz","O"];Object.keys(Is).forEach(function(e){yE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Is[t]=Is[e]})});function Ey(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Is.hasOwnProperty(e)&&Is[e]?(""+t).trim():t+"px"}function xy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ey(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var bE=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ff(e,t){if(t){if(bE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function df(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function rh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hf=null,di=null,hi=null;function mm(e){if(e=Oo(e)){if(typeof hf!="function")throw Error(D(280));var t=e.stateNode;t&&(t=Zl(t),hf(e.stateNode,e.type,t))}}function ky(e){di?hi?hi.push(e):hi=[e]:di=e}function Ty(){if(di){var e=di,t=hi;if(hi=di=null,mm(e),t)for(e=0;e<t.length;e++)mm(t[e])}}function ih(e,t){return e(t)}function Ry(e,t,n,r,i){return e(t,n,r,i)}function sh(){}var Ay=ih,vr=!1,Yu=!1;function oh(){(di!==null||hi!==null)&&(sh(),Ty())}function wE(e,t,n){if(Yu)return e(t,n);Yu=!0;try{return Ay(e,t,n)}finally{Yu=!1,oh()}}function eo(e,t){var n=e.stateNode;if(n===null)return null;var r=Zl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var pf=!1;if(Sn)try{var Ji={};Object.defineProperty(Ji,"passive",{get:function(){pf=!0}}),window.addEventListener("test",Ji,Ji),window.removeEventListener("test",Ji,Ji)}catch{pf=!1}function SE(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Os=!1,Ja=null,el=!1,mf=null,EE={onError:function(e){Os=!0,Ja=e}};function xE(e,t,n,r,i,s,o,a,l){Os=!1,Ja=null,SE.apply(EE,arguments)}function kE(e,t,n,r,i,s,o,a,l){if(xE.apply(this,arguments),Os){if(Os){var u=Ja;Os=!1,Ja=null}else throw Error(D(198));el||(el=!0,mf=u)}}function $r(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&1026&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Iy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gm(e){if($r(e)!==e)throw Error(D(188))}function TE(e){var t=e.alternate;if(!t){if(t=$r(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return gm(i),e;if(s===r)return gm(i),t;s=s.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function Oy(e){if(e=TE(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function _m(e,t){for(var n=e.alternate;t!==null;){if(t===e||t===n)return!0;t=t.return}return!1}var Ly,ah,Ny,My,gf=!1,qt=[],zn=null,Hn=null,Gn=null,to=new Map,no=new Map,es=[],vm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _f(e,t,n,r,i){return{blockedOn:e,domEventName:t,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function ym(e,t){switch(e){case"focusin":case"focusout":zn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":to.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(t.pointerId)}}function ts(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e=_f(t,n,r,i,s),t!==null&&(t=Oo(t),t!==null&&ah(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function RE(e,t,n,r,i){switch(t){case"focusin":return zn=ts(zn,e,t,n,r,i),!0;case"dragenter":return Hn=ts(Hn,e,t,n,r,i),!0;case"mouseover":return Gn=ts(Gn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return to.set(s,ts(to.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,no.set(s,ts(no.get(s)||null,e,t,n,r,i)),!0}return!1}function AE(e){var t=yr(e.target);if(t!==null){var n=$r(t);if(n!==null){if(t=n.tag,t===13){if(t=Iy(n),t!==null){e.blockedOn=t,My(e.lanePriority,function(){$e.unstable_runWithPriority(e.priority,function(){Ny(n)})});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ra(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fh(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null)return t=Oo(n),t!==null&&ah(t),e.blockedOn=n,!1;t.shift()}return!0}function bm(e,t,n){Ra(e)&&n.delete(t)}function IE(){for(gf=!1;0<qt.length;){var e=qt[0];if(e.blockedOn!==null){e=Oo(e.blockedOn),e!==null&&Ly(e);break}for(var t=e.targetContainers;0<t.length;){var n=fh(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null){e.blockedOn=n;break}t.shift()}e.blockedOn===null&&qt.shift()}zn!==null&&Ra(zn)&&(zn=null),Hn!==null&&Ra(Hn)&&(Hn=null),Gn!==null&&Ra(Gn)&&(Gn=null),to.forEach(bm),no.forEach(bm)}function ns(e,t){e.blockedOn===t&&(e.blockedOn=null,gf||(gf=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,IE)))}function Py(e){function t(i){return ns(i,e)}if(0<qt.length){ns(qt[0],e);for(var n=1;n<qt.length;n++){var r=qt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zn!==null&&ns(zn,e),Hn!==null&&ns(Hn,e),Gn!==null&&ns(Gn,e),to.forEach(t),no.forEach(t),n=0;n<es.length;n++)r=es[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<es.length&&(n=es[0],n.blockedOn===null);)AE(n),n.blockedOn===null&&es.shift()}function Qo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ri={animationend:Qo("Animation","AnimationEnd"),animationiteration:Qo("Animation","AnimationIteration"),animationstart:Qo("Animation","AnimationStart"),transitionend:Qo("Transition","TransitionEnd")},Qu={},Cy={};Sn&&(Cy=document.createElement("div").style,"AnimationEvent"in window||(delete ri.animationend.animation,delete ri.animationiteration.animation,delete ri.animationstart.animation),"TransitionEvent"in window||delete ri.transitionend.transition);function ql(e){if(Qu[e])return Qu[e];if(!ri[e])return e;var t=ri[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cy)return Qu[e]=t[n];return e}var Dy=ql("animationend"),Uy=ql("animationiteration"),Fy=ql("animationstart"),$y=ql("transitionend"),By=new Map,lh=new Map,OE=["abort","abort",Dy,"animationEnd",Uy,"animationIteration",Fy,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",$y,"transitionEnd","waiting","waiting"];function uh(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),lh.set(r,t),By.set(r,i),Ur(i,[r])}}var LE=$e.unstable_now;LE();var ue=8;function Zr(e){if(1&e)return ue=15,1;if(2&e)return ue=14,2;if(4&e)return ue=13,4;var t=24&e;return t!==0?(ue=12,t):e&32?(ue=11,32):(t=192&e,t!==0?(ue=10,t):e&256?(ue=9,256):(t=3584&e,t!==0?(ue=8,t):e&4096?(ue=7,4096):(t=4186112&e,t!==0?(ue=6,t):(t=62914560&e,t!==0?(ue=5,t):e&67108864?(ue=4,67108864):e&134217728?(ue=3,134217728):(t=805306368&e,t!==0?(ue=2,t):1073741824&e?(ue=1,1073741824):(ue=8,e))))))}function NE(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function ME(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(D(358,e))}}function ro(e,t){var n=e.pendingLanes;if(n===0)return ue=0;var r=0,i=0,s=e.expiredLanes,o=e.suspendedLanes,a=e.pingedLanes;if(s!==0)r=s,i=ue=15;else if(s=n&134217727,s!==0){var l=s&~o;l!==0?(r=Zr(l),i=ue):(a&=s,a!==0&&(r=Zr(a),i=ue))}else s=n&~o,s!==0?(r=Zr(s),i=ue):a!==0&&(r=Zr(a),i=ue);if(r===0)return 0;if(r=31-er(r),r=n&((0>r?0:1<<r)<<1)-1,t!==0&&t!==r&&!(t&o)){if(Zr(t),i<=ue)return t;ue=i}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-er(t),i=1<<n,r|=e[n],t&=~i;return r}function Vy(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tl(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=Jr(24&~t),e===0?tl(10,t):e;case 10:return e=Jr(192&~t),e===0?tl(8,t):e;case 8:return e=Jr(3584&~t),e===0&&(e=Jr(4186112&~t),e===0&&(e=512)),e;case 2:return t=Jr(805306368&~t),t===0&&(t=268435456),t}throw Error(D(358,e))}function Jr(e){return e&-e}function Xu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yl(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,t=31-er(t),e[t]=n}var er=Math.clz32?Math.clz32:DE,PE=Math.log,CE=Math.LN2;function DE(e){return e===0?32:31-(PE(e)/CE|0)|0}var UE=$e.unstable_UserBlockingPriority,FE=$e.unstable_runWithPriority,Aa=!0;function $E(e,t,n,r){vr||sh();var i=ch,s=vr;vr=!0;try{Ry(i,e,t,n,r)}finally{(vr=s)||oh()}}function BE(e,t,n,r){FE(UE,ch.bind(null,e,t,n,r))}function ch(e,t,n,r){if(Aa){var i;if((i=(t&4)===0)&&0<qt.length&&-1<vm.indexOf(e))e=_f(null,e,t,n,r),qt.push(e);else{var s=fh(e,t,n,r);if(s===null)i&&ym(e,r);else{if(i){if(-1<vm.indexOf(e)){e=_f(s,e,t,n,r),qt.push(e);return}if(RE(s,e,t,n,r))return;ym(e,r)}e0(e,t,r,null,n)}}}}function fh(e,t,n,r){var i=rh(r);if(i=yr(i),i!==null){var s=$r(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=Iy(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return e0(e,t,r,i,n),null}var Un=null,dh=null,Ia=null;function Wy(){if(Ia)return Ia;var e,t=dh,n=t.length,r,i="value"in Un?Un.value:Un.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Ia=i.slice(e,1<r?1-r:void 0)}function Oa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xo(){return!0}function wm(){return!1}function bt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xo:wm,this.isPropagationStopped=wm,this}return we(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),t}var $i={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hh=bt($i),Io=we({},$i,{view:0,detail:0}),VE=bt(Io),Ku,Zu,rs,Ql=we({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ph,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rs&&(rs&&e.type==="mousemove"?(Ku=e.screenX-rs.screenX,Zu=e.screenY-rs.screenY):Zu=Ku=0,rs=e),Ku)},movementY:function(e){return"movementY"in e?e.movementY:Zu}}),Sm=bt(Ql),WE=we({},Ql,{dataTransfer:0}),jE=bt(WE),zE=we({},Io,{relatedTarget:0}),Ju=bt(zE),HE=we({},$i,{animationName:0,elapsedTime:0,pseudoElement:0}),GE=bt(HE),qE=we({},$i,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),YE=bt(qE),QE=we({},$i,{data:0}),Em=bt(QE),XE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ZE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ZE[e])?!!t[e]:!1}function ph(){return JE}var ex=we({},Io,{key:function(e){if(e.key){var t=XE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?KE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ph,charCode:function(e){return e.type==="keypress"?Oa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tx=bt(ex),nx=we({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xm=bt(nx),rx=we({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ph}),ix=bt(rx),sx=we({},$i,{propertyName:0,elapsedTime:0,pseudoElement:0}),ox=bt(sx),ax=we({},Ql,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lx=bt(ax),ux=[9,13,27,32],mh=Sn&&"CompositionEvent"in window,Ls=null;Sn&&"documentMode"in document&&(Ls=document.documentMode);var cx=Sn&&"TextEvent"in window&&!Ls,jy=Sn&&(!mh||Ls&&8<Ls&&11>=Ls),km=String.fromCharCode(32),Tm=!1;function zy(e,t){switch(e){case"keyup":return ux.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ii=!1;function fx(e,t){switch(e){case"compositionend":return Hy(t);case"keypress":return t.which!==32?null:(Tm=!0,km);case"textInput":return e=t.data,e===km&&Tm?null:e;default:return null}}function dx(e,t){if(ii)return e==="compositionend"||!mh&&zy(e,t)?(e=Wy(),Ia=dh=Un=null,ii=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jy&&t.locale!=="ko"?null:t.data;default:return null}}var hx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!hx[e.type]:t==="textarea"}function Gy(e,t,n,r){ky(r),t=nl(t,"onChange"),0<t.length&&(n=new hh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ns=null,io=null;function px(e){Ky(e,0)}function Xl(e){var t=oi(e);if(vy(t))return e}function mx(e,t){if(e==="change")return t}var qy=!1;if(Sn){var ec;if(Sn){var tc="oninput"in document;if(!tc){var Am=document.createElement("div");Am.setAttribute("oninput","return;"),tc=typeof Am.oninput=="function"}ec=tc}else ec=!1;qy=ec&&(!document.documentMode||9<document.documentMode)}function Im(){Ns&&(Ns.detachEvent("onpropertychange",Yy),io=Ns=null)}function Yy(e){if(e.propertyName==="value"&&Xl(io)){var t=[];if(Gy(t,io,e,rh(e)),e=px,vr)e(t);else{vr=!0;try{ih(e,t)}finally{vr=!1,oh()}}}}function gx(e,t,n){e==="focusin"?(Im(),Ns=t,io=n,Ns.attachEvent("onpropertychange",Yy)):e==="focusout"&&Im()}function _x(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xl(io)}function vx(e,t){if(e==="click")return Xl(t)}function yx(e,t){if(e==="input"||e==="change")return Xl(t)}function bx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:bx,wx=Object.prototype.hasOwnProperty;function so(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!wx.call(t,n[r])||!Et(e[n[r]],t[n[r]]))return!1;return!0}function Om(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lm(e,t){var n=Om(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Om(n)}}function Qy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nm(){for(var e=window,t=Za();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Za(e.document)}return t}function vf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Sx=Sn&&"documentMode"in document&&11>=document.documentMode,si=null,yf=null,Ms=null,bf=!1;function Mm(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bf||si==null||si!==Za(r)||(r=si,"selectionStart"in r&&vf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ms&&so(Ms,r)||(Ms=r,r=nl(yf,"onSelect"),0<r.length&&(t=new hh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=si)))}uh("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);uh("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);uh(OE,2);for(var Pm="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),nc=0;nc<Pm.length;nc++)lh.set(Pm[nc],0);Ti("onMouseEnter",["mouseout","mouseover"]);Ti("onMouseLeave",["mouseout","mouseover"]);Ti("onPointerEnter",["pointerout","pointerover"]);Ti("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xy=new Set("cancel close invalid load scroll toggle".split(" ").concat(bs));function Cm(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,kE(r,t,void 0,e),e.currentTarget=null}function Ky(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Cm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Cm(i,a,u),s=l}}}if(el)throw e=mf,el=!1,mf=null,e}function me(e,t){var n=n0(t),r=e+"__bubble";n.has(r)||(Jy(t,e,2,!1),n.add(r))}var Dm="_reactListening"+Math.random().toString(36).slice(2);function Zy(e){e[Dm]||(e[Dm]=!0,my.forEach(function(t){Xy.has(t)||Um(t,!1,e,null),Um(t,!0,e,null)}))}function Um(e,t,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(e==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),r!==null&&!t&&Xy.has(e)){if(e!=="scroll")return;i|=2,s=r}var o=n0(s),a=e+"__"+(t?"capture":"bubble");o.has(a)||(t&&(i|=4),Jy(s,e,i,t),o.add(a))}function Jy(e,t,n,r){var i=lh.get(t);switch(i===void 0?2:i){case 0:i=$E;break;case 1:i=BE;break;default:i=ch}n=i.bind(null,t,n,e),i=void 0,!pf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function e0(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=yr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}wE(function(){var u=s,c=rh(n),d=[];e:{var f=By.get(e);if(f!==void 0){var g=hh,b=e;switch(e){case"keypress":if(Oa(n)===0)break e;case"keydown":case"keyup":g=tx;break;case"focusin":b="focus",g=Ju;break;case"focusout":b="blur",g=Ju;break;case"beforeblur":case"afterblur":g=Ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Sm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=jE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=ix;break;case Dy:case Uy:case Fy:g=GE;break;case $y:g=ox;break;case"scroll":g=VE;break;case"wheel":g=lx;break;case"copy":case"cut":case"paste":g=YE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=xm}var v=(t&4)!==0,h=!v&&e==="scroll",m=v?f!==null?f+"Capture":null:f;v=[];for(var _=u,y;_!==null;){y=_;var p=y.stateNode;if(y.tag===5&&p!==null&&(y=p,m!==null&&(p=eo(_,m),p!=null&&v.push(oo(_,p,y)))),h)break;_=_.return}0<v.length&&(f=new g(f,b,null,n,c),d.push({event:f,listeners:v}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&!(t&16)&&(b=n.relatedTarget||n.fromElement)&&(yr(b)||b[Bi]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(b=n.relatedTarget||n.toElement,g=u,b=b?yr(b):null,b!==null&&(h=$r(b),b!==h||b.tag!==5&&b.tag!==6)&&(b=null)):(g=null,b=u),g!==b)){if(v=Sm,p="onMouseLeave",m="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(v=xm,p="onPointerLeave",m="onPointerEnter",_="pointer"),h=g==null?f:oi(g),y=b==null?f:oi(b),f=new v(p,_+"leave",g,n,c),f.target=h,f.relatedTarget=y,p=null,yr(c)===u&&(v=new v(m,_+"enter",b,n,c),v.target=y,v.relatedTarget=h,p=v),h=p,g&&b)t:{for(v=g,m=b,_=0,y=v;y;y=Hr(y))_++;for(y=0,p=m;p;p=Hr(p))y++;for(;0<_-y;)v=Hr(v),_--;for(;0<y-_;)m=Hr(m),y--;for(;_--;){if(v===m||m!==null&&v===m.alternate)break t;v=Hr(v),m=Hr(m)}v=null}else v=null;g!==null&&Fm(d,f,g,v,!1),b!==null&&h!==null&&Fm(d,h,b,v,!0)}}e:{if(f=u?oi(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var S=mx;else if(Rm(f))if(qy)S=yx;else{S=_x;var w=gx}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=vx);if(S&&(S=S(e,u))){Gy(d,S,n,c);break e}w&&w(e,f,u),e==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&of(f,"number",f.value)}switch(w=u?oi(u):window,e){case"focusin":(Rm(w)||w.contentEditable==="true")&&(si=w,yf=u,Ms=null);break;case"focusout":Ms=yf=si=null;break;case"mousedown":bf=!0;break;case"contextmenu":case"mouseup":case"dragend":bf=!1,Mm(d,n,c);break;case"selectionchange":if(Sx)break;case"keydown":case"keyup":Mm(d,n,c)}var E;if(mh)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else ii?zy(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(jy&&n.locale!=="ko"&&(ii||x!=="onCompositionStart"?x==="onCompositionEnd"&&ii&&(E=Wy()):(Un=c,dh="value"in Un?Un.value:Un.textContent,ii=!0)),w=nl(u,x),0<w.length&&(x=new Em(x,e,null,n,c),d.push({event:x,listeners:w}),E?x.data=E:(E=Hy(n),E!==null&&(x.data=E)))),(E=cx?fx(e,n):dx(e,n))&&(u=nl(u,"onBeforeInput"),0<u.length&&(c=new Em("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=E))}Ky(d,t)})}function oo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function nl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=eo(e,n),s!=null&&r.unshift(oo(e,s,i)),s=eo(e,t),s!=null&&r.push(oo(e,s,i))),e=e.return}return r}function Hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fm(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=eo(n,s),l!=null&&o.unshift(oo(n,l,a))):i||(l=eo(n,s),l!=null&&o.push(oo(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}function rl(){}var rc=null,ic=null;function t0(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function wf(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $m=typeof setTimeout=="function"?setTimeout:void 0,Ex=typeof clearTimeout=="function"?clearTimeout:void 0;function gh(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function pi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function Bm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sc=0;function xx(e){return{$$typeof:th,toString:e,valueOf:e}}var Kl=Math.random().toString(36).slice(2),Fn="__reactFiber$"+Kl,il="__reactProps$"+Kl,Bi="__reactContainer$"+Kl,Vm="__reactEvents$"+Kl;function yr(e){var t=e[Fn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bi]||n[Fn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bm(e);e!==null;){if(n=e[Fn])return n;e=Bm(e)}return t}e=n,n=e.parentNode}return null}function Oo(e){return e=e[Fn]||e[Bi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function oi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function Zl(e){return e[il]||null}function n0(e){var t=e[Vm];return t===void 0&&(t=e[Vm]=new Set),t}var Sf=[],ai=-1;function sr(e){return{current:e}}function _e(e){0>ai||(e.current=Sf[ai],Sf[ai]=null,ai--)}function Ae(e,t){ai++,Sf[ai]=e.current,e.current=t}var tr={},Je=sr(tr),ft=sr(!1),Ar=tr;function Ri(e,t){var n=e.type.contextTypes;if(!n)return tr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function dt(e){return e=e.childContextTypes,e!=null}function sl(){_e(ft),_e(Je)}function Wm(e,t,n){if(Je.current!==tr)throw Error(D(168));Ae(Je,t),Ae(ft,n)}function r0(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(D(108,ci(t)||"Unknown",i));return we({},n,r)}function La(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tr,Ar=Je.current,Ae(Je,e),Ae(ft,ft.current),!0}function jm(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=r0(e,t,Ar),r.__reactInternalMemoizedMergedChildContext=e,_e(ft),_e(Je),Ae(Je,e)):_e(ft),Ae(ft,n)}var _h=null,Tr=null,kx=$e.unstable_runWithPriority,vh=$e.unstable_scheduleCallback,Ef=$e.unstable_cancelCallback,Tx=$e.unstable_shouldYield,zm=$e.unstable_requestPaint,xf=$e.unstable_now,Rx=$e.unstable_getCurrentPriorityLevel,Jl=$e.unstable_ImmediatePriority,i0=$e.unstable_UserBlockingPriority,s0=$e.unstable_NormalPriority,o0=$e.unstable_LowPriority,a0=$e.unstable_IdlePriority,oc={},Ax=zm!==void 0?zm:function(){},cn=null,Na=null,ac=!1,Hm=xf(),Ke=1e4>Hm?xf:function(){return xf()-Hm};function Ai(){switch(Rx()){case Jl:return 99;case i0:return 98;case s0:return 97;case o0:return 96;case a0:return 95;default:throw Error(D(332))}}function l0(e){switch(e){case 99:return Jl;case 98:return i0;case 97:return s0;case 96:return o0;case 95:return a0;default:throw Error(D(332))}}function Ir(e,t){return e=l0(e),kx(e,t)}function ao(e,t,n){return e=l0(e),vh(e,t,n)}function tn(){if(Na!==null){var e=Na;Na=null,Ef(e)}u0()}function u0(){if(!ac&&cn!==null){ac=!0;var e=0;try{var t=cn;Ir(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),cn=null}catch(n){throw cn!==null&&(cn=cn.slice(e+1)),vh(Jl,tn),n}finally{ac=!1}}}var Ix=Fr.ReactCurrentBatchConfig;function Pt(e,t){if(e&&e.defaultProps){t=we({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ol=sr(null),al=null,li=null,ll=null;function yh(){ll=li=al=null}function bh(e){var t=ol.current;_e(ol),e.type._context._currentValue=t}function c0(e,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)===t){if(n===null||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,n!==null&&(n.childLanes|=t);e=e.return}}function mi(e,t){al=e,ll=li=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($t=!0),e.firstContext=null)}function At(e,t){if(ll!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(ll=e,t=1073741823),t={context:e,observedBits:t,next:null},li===null){if(al===null)throw Error(D(308));li=t,al.dependencies={lanes:0,firstContext:t,responders:null}}else li=li.next=t;return e._currentValue}var Cn=!1;function wh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function f0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Yn(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function Gm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function lo(e,t,n,r){var i=e.updateQueue;Cn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;if(c!==null){c=c.updateQueue;var d=c.lastBaseUpdate;d!==o&&(d===null?c.firstBaseUpdate=u:d.next=u,c.lastBaseUpdate=l)}}if(s!==null){d=i.baseState,o=0,c=u=l=null;do{a=s.lane;var f=s.eventTime;if((r&a)===a){c!==null&&(c=c.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,b=s;switch(a=t,f=n,b.tag){case 1:if(g=b.payload,typeof g=="function"){d=g.call(f,d,a);break e}d=g;break e;case 3:g.flags=g.flags&-4097|64;case 0:if(g=b.payload,a=typeof g=="function"?g.call(f,d,a):g,a==null)break e;d=we({},d,a);break e;case 2:Cn=!0}}s.callback!==null&&(e.flags|=32,a=i.effects,a===null?i.effects=[s]:a.push(s))}else f={eventTime:f,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=f,l=d):c=c.next=f,o|=a;if(s=s.next,s===null){if(a=i.shared.pending,a===null)break;s=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,No|=o,e.lanes=o,e.memoizedState=d}}function qm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var d0=new zl.Component().refs;function ul(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:we({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var eu={isMounted:function(e){return(e=e._reactInternals)?$r(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=vt(),i=Qn(e),s=qn(r,i);s.payload=t,n!=null&&(s.callback=n),Yn(e,s),Xn(e,i,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=vt(),i=Qn(e),s=qn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),Yn(e,s),Xn(e,i,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=vt(),r=Qn(e),i=qn(n,r);i.tag=2,t!=null&&(i.callback=t),Yn(e,i),Xn(e,r,n)}};function Ym(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!so(n,r)||!so(i,s):!0}function h0(e,t,n){var r=!1,i=tr,s=t.contextType;return typeof s=="object"&&s!==null?s=At(s):(i=dt(t)?Ar:Je.current,r=t.contextTypes,s=(r=r!=null)?Ri(e,i):tr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=eu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Qm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&eu.enqueueReplaceState(t,t.state,null)}function kf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=d0,wh(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=At(s):(s=dt(t)?Ar:Je.current,i.context=Ri(e,s)),lo(e,n,i,r),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ul(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&eu.enqueueReplaceState(i,i.state,null),lo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4)}var Ko=Array.isArray;function is(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var o=r.refs;o===d0&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function Zo(e,t){if(e.type!=="textarea")throw Error(D(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function p0(e){function t(h,m){if(e){var _=h.lastEffect;_!==null?(_.nextEffect=m,h.lastEffect=m):h.firstEffect=h.lastEffect=m,m.nextEffect=null,m.flags=8}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function r(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function i(h,m){return h=rr(h,m),h.index=0,h.sibling=null,h}function s(h,m,_){return h.index=_,e?(_=h.alternate,_!==null?(_=_.index,_<m?(h.flags=2,m):_):(h.flags=2,m)):m}function o(h){return e&&h.alternate===null&&(h.flags=2),h}function a(h,m,_,y){return m===null||m.tag!==6?(m=dc(_,h.mode,y),m.return=h,m):(m=i(m,_),m.return=h,m)}function l(h,m,_,y){return m!==null&&m.elementType===_.type?(y=i(m,_.props),y.ref=is(h,m,_),y.return=h,y):(y=Da(_.type,_.key,_.props,null,h.mode,y),y.ref=is(h,m,_),y.return=h,y)}function u(h,m,_,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=hc(_,h.mode,y),m.return=h,m):(m=i(m,_.children||[]),m.return=h,m)}function c(h,m,_,y,p){return m===null||m.tag!==7?(m=yi(_,h.mode,y,p),m.return=h,m):(m=i(m,_),m.return=h,m)}function d(h,m,_){if(typeof m=="string"||typeof m=="number")return m=dc(""+m,h.mode,_),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case vs:return _=Da(m.type,m.key,m.props,null,h.mode,_),_.ref=is(h,null,m),_.return=h,_;case _r:return m=hc(m,h.mode,_),m.return=h,m}if(Ko(m)||Zi(m))return m=yi(m,h.mode,_,null),m.return=h,m;Zo(h,m)}return null}function f(h,m,_,y){var p=m!==null?m.key:null;if(typeof _=="string"||typeof _=="number")return p!==null?null:a(h,m,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case vs:return _.key===p?_.type===Dn?c(h,m,_.props.children,y,p):l(h,m,_,y):null;case _r:return _.key===p?u(h,m,_,y):null}if(Ko(_)||Zi(_))return p!==null?null:c(h,m,_,y,null);Zo(h,_)}return null}function g(h,m,_,y,p){if(typeof y=="string"||typeof y=="number")return h=h.get(_)||null,a(m,h,""+y,p);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case vs:return h=h.get(y.key===null?_:y.key)||null,y.type===Dn?c(m,h,y.props.children,p,y.key):l(m,h,y,p);case _r:return h=h.get(y.key===null?_:y.key)||null,u(m,h,y,p)}if(Ko(y)||Zi(y))return h=h.get(_)||null,c(m,h,y,p,null);Zo(m,y)}return null}function b(h,m,_,y){for(var p=null,S=null,w=m,E=m=0,x=null;w!==null&&E<_.length;E++){w.index>E?(x=w,w=null):x=w.sibling;var k=f(h,w,_[E],y);if(k===null){w===null&&(w=x);break}e&&w&&k.alternate===null&&t(h,w),m=s(k,m,E),S===null?p=k:S.sibling=k,S=k,w=x}if(E===_.length)return n(h,w),p;if(w===null){for(;E<_.length;E++)w=d(h,_[E],y),w!==null&&(m=s(w,m,E),S===null?p=w:S.sibling=w,S=w);return p}for(w=r(h,w);E<_.length;E++)x=g(w,h,E,_[E],y),x!==null&&(e&&x.alternate!==null&&w.delete(x.key===null?E:x.key),m=s(x,m,E),S===null?p=x:S.sibling=x,S=x);return e&&w.forEach(function(A){return t(h,A)}),p}function v(h,m,_,y){var p=Zi(_);if(typeof p!="function")throw Error(D(150));if(_=p.call(_),_==null)throw Error(D(151));for(var S=p=null,w=m,E=m=0,x=null,k=_.next();w!==null&&!k.done;E++,k=_.next()){w.index>E?(x=w,w=null):x=w.sibling;var A=f(h,w,k.value,y);if(A===null){w===null&&(w=x);break}e&&w&&A.alternate===null&&t(h,w),m=s(A,m,E),S===null?p=A:S.sibling=A,S=A,w=x}if(k.done)return n(h,w),p;if(w===null){for(;!k.done;E++,k=_.next())k=d(h,k.value,y),k!==null&&(m=s(k,m,E),S===null?p=k:S.sibling=k,S=k);return p}for(w=r(h,w);!k.done;E++,k=_.next())k=g(w,h,E,k.value,y),k!==null&&(e&&k.alternate!==null&&w.delete(k.key===null?E:k.key),m=s(k,m,E),S===null?p=k:S.sibling=k,S=k);return e&&w.forEach(function(Y){return t(h,Y)}),p}return function(h,m,_,y){var p=typeof _=="object"&&_!==null&&_.type===Dn&&_.key===null;p&&(_=_.props.children);var S=typeof _=="object"&&_!==null;if(S)switch(_.$$typeof){case vs:e:{for(S=_.key,p=m;p!==null;){if(p.key===S){switch(p.tag){case 7:if(_.type===Dn){n(h,p.sibling),m=i(p,_.props.children),m.return=h,h=m;break e}break;default:if(p.elementType===_.type){n(h,p.sibling),m=i(p,_.props),m.ref=is(h,p,_),m.return=h,h=m;break e}}n(h,p);break}else t(h,p);p=p.sibling}_.type===Dn?(m=yi(_.props.children,h.mode,y,_.key),m.return=h,h=m):(y=Da(_.type,_.key,_.props,null,h.mode,y),y.ref=is(h,m,_),y.return=h,h=y)}return o(h);case _r:e:{for(p=_.key;m!==null;){if(m.key===p)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(h,m.sibling),m=i(m,_.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else t(h,m);m=m.sibling}m=hc(_,h.mode,y),m.return=h,h=m}return o(h)}if(typeof _=="string"||typeof _=="number")return _=""+_,m!==null&&m.tag===6?(n(h,m.sibling),m=i(m,_),m.return=h,h=m):(n(h,m),m=dc(_,h.mode,y),m.return=h,h=m),o(h);if(Ko(_))return b(h,m,_,y);if(Zi(_))return v(h,m,_,y);if(S&&Zo(h,_),typeof _>"u"&&!p)switch(h.tag){case 1:case 22:case 0:case 11:case 15:throw Error(D(152,ci(h.type)||"Component"))}return n(h,m)}}var cl=p0(!0),m0=p0(!1),Lo={},Xt=sr(Lo),uo=sr(Lo),co=sr(Lo);function br(e){if(e===Lo)throw Error(D(174));return e}function Tf(e,t){switch(Ae(co,t),Ae(uo,e),Ae(Xt,Lo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:cf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=cf(t,e)}_e(Xt),Ae(Xt,t)}function Ii(){_e(Xt),_e(uo),_e(co)}function Xm(e){br(co.current);var t=br(Xt.current),n=cf(t,e.type);t!==n&&(Ae(uo,e),Ae(Xt,n))}function Sh(e){uo.current===e&&(_e(Xt),_e(uo))}var Re=sr(0);function fl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&64)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _n=null,$n=null,Kt=!1;function g0(e,t){var n=xt(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Km(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function Rf(e){if(Kt){var t=$n;if(t){var n=t;if(!Km(e,t)){if(t=pi(n.nextSibling),!t||!Km(e,t)){e.flags=e.flags&-1025|2,Kt=!1,_n=e;return}g0(_n,n)}_n=e,$n=pi(t.firstChild)}else e.flags=e.flags&-1025|2,Kt=!1,_n=e}}function Zm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_n=e}function Jo(e){if(e!==_n)return!1;if(!Kt)return Zm(e),Kt=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!wf(t,e.memoizedProps))for(t=$n;t;)g0(e,t),t=pi(t.nextSibling);if(Zm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$n=pi(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$n=null}}else $n=_n?pi(e.stateNode.nextSibling):null;return!0}function lc(){$n=_n=null,Kt=!1}var gi=[];function Eh(){for(var e=0;e<gi.length;e++)gi[e]._workInProgressVersionPrimary=null;gi.length=0}var Ps=Fr.ReactCurrentDispatcher,Tt=Fr.ReactCurrentBatchConfig,fo=0,Me=null,Xe=null,je=null,dl=!1,Cs=!1;function it(){throw Error(D(321))}function xh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function kh(e,t,n,r,i,s){if(fo=s,Me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ps.current=e===null||e.memoizedState===null?Lx:Nx,e=n(r,i),Cs){s=0;do{if(Cs=!1,!(25>s))throw Error(D(301));s+=1,je=Xe=null,t.updateQueue=null,Ps.current=Mx,e=n(r,i)}while(Cs)}if(Ps.current=gl,t=Xe!==null&&Xe.next!==null,fo=0,je=Xe=Me=null,dl=!1,t)throw Error(D(300));return e}function wr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Me.memoizedState=je=e:je=je.next=e,je}function Br(){if(Xe===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var t=je===null?Me.memoizedState:je.next;if(t!==null)je=t,Xe=e;else{if(e===null)throw Error(D(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},je===null?Me.memoizedState=je=e:je=je.next=e}return je}function Yt(e,t){return typeof t=="function"?t(e):t}function ss(e){var t=Br(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=Xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=o=s=null,l=i;do{var u=l.lane;if((fo&u)===u)a!==null&&(a=a.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),r=l.eagerReducer===e?l.eagerState:e(r,l.action);else{var c={lane:u,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};a===null?(o=a=c,s=r):a=a.next=c,Me.lanes|=u,No|=u}l=l.next}while(l!==null&&l!==i);a===null?s=r:a.next=o,Et(r,t.memoizedState)||($t=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function os(e){var t=Br(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Et(s,t.memoizedState)||($t=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Jm(e,t,n){var r=t._getVersion;r=r(t._source);var i=t._workInProgressVersionPrimary;if(i!==null?e=i===r:(e=e.mutableReadLanes,(e=(fo&e)===e)&&(t._workInProgressVersionPrimary=r,gi.push(t))),e)return n(t._source);throw gi.push(t),Error(D(350))}function _0(e,t,n,r){var i=et;if(i===null)throw Error(D(349));var s=t._getVersion,o=s(t._source),a=Ps.current,l=a.useState(function(){return Jm(i,t,n)}),u=l[1],c=l[0];l=je;var d=e.memoizedState,f=d.refs,g=f.getSnapshot,b=d.source;d=d.subscribe;var v=Me;return e.memoizedState={refs:f,source:t,subscribe:r},a.useEffect(function(){f.getSnapshot=n,f.setSnapshot=u;var h=s(t._source);if(!Et(o,h)){h=n(t._source),Et(c,h)||(u(h),h=Qn(v),i.mutableReadLanes|=h&i.pendingLanes),h=i.mutableReadLanes,i.entangledLanes|=h;for(var m=i.entanglements,_=h;0<_;){var y=31-er(_),p=1<<y;m[y]|=h,_&=~p}}},[n,t,r]),a.useEffect(function(){return r(t._source,function(){var h=f.getSnapshot,m=f.setSnapshot;try{m(h(t._source));var _=Qn(v);i.mutableReadLanes|=_&i.pendingLanes}catch(y){m(function(){throw y})}})},[t,r]),Et(g,n)&&Et(b,t)&&Et(d,r)||(e={pending:null,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:c},e.dispatch=u=Ah.bind(null,Me,e),l.queue=e,l.baseQueue=null,c=Jm(i,t,n),l.memoizedState=l.baseState=c),c}function v0(e,t,n){var r=Br();return _0(r,e,t,n)}function as(e){var t=wr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:e},e=e.dispatch=Ah.bind(null,Me,e),[t.memoizedState,e]}function hl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Me.updateQueue,t===null?(t={lastEffect:null},Me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function eg(e){var t=wr();return e={current:e},t.memoizedState=e}function pl(){return Br().memoizedState}function Af(e,t,n,r){var i=wr();Me.flags|=e,i.memoizedState=hl(1|t,n,void 0,r===void 0?null:r)}function Th(e,t,n,r){var i=Br();r=r===void 0?null:r;var s=void 0;if(Xe!==null){var o=Xe.memoizedState;if(s=o.destroy,r!==null&&xh(r,o.deps)){hl(t,n,s,r);return}}Me.flags|=e,i.memoizedState=hl(1|t,n,s,r)}function tg(e,t){return Af(516,4,e,t)}function ml(e,t){return Th(516,4,e,t)}function y0(e,t){return Th(4,2,e,t)}function b0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function w0(e,t,n){return n=n!=null?n.concat([e]):null,Th(4,2,b0.bind(null,t,e),n)}function Rh(){}function S0(e,t){var n=Br();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function E0(e,t){var n=Br();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ox(e,t){var n=Ai();Ir(98>n?98:n,function(){e(!0)}),Ir(97<n?97:n,function(){var r=Tt.transition;Tt.transition=1;try{e(!1),t()}finally{Tt.transition=r}})}function Ah(e,t,n){var r=vt(),i=Qn(e),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=t.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),t.pending=s,o=e.alternate,e===Me||o!==null&&o===Me)Cs=dl=!0;else{if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(s.eagerReducer=o,s.eagerState=l,Et(l,a))return}catch{}finally{}Xn(e,i,r)}}var gl={readContext:At,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useOpaqueIdentifier:it,unstable_isNewReconciler:!1},Lx={readContext:At,useCallback:function(e,t){return wr().memoizedState=[e,t===void 0?null:t],e},useContext:At,useEffect:tg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Af(4,2,b0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Af(4,2,e,t)},useMemo:function(e,t){var n=wr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wr();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=Ah.bind(null,Me,e),[r.memoizedState,e]},useRef:eg,useState:as,useDebugValue:Rh,useDeferredValue:function(e){var t=as(e),n=t[0],r=t[1];return tg(function(){var i=Tt.transition;Tt.transition=1;try{r(e)}finally{Tt.transition=i}},[e]),n},useTransition:function(){var e=as(!1),t=e[0];return e=Ox.bind(null,e[1]),eg(e),[e,t]},useMutableSource:function(e,t,n){var r=wr();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},_0(r,e,t,n)},useOpaqueIdentifier:function(){if(Kt){var e=!1,t=xx(function(){throw e||(e=!0,n("r:"+(sc++).toString(36))),Error(D(355))}),n=as(t)[1];return!(Me.mode&2)&&(Me.flags|=516,hl(5,function(){n("r:"+(sc++).toString(36))},void 0,null)),t}return t="r:"+(sc++).toString(36),as(t),t},unstable_isNewReconciler:!1},Nx={readContext:At,useCallback:S0,useContext:At,useEffect:ml,useImperativeHandle:w0,useLayoutEffect:y0,useMemo:E0,useReducer:ss,useRef:pl,useState:function(){return ss(Yt)},useDebugValue:Rh,useDeferredValue:function(e){var t=ss(Yt),n=t[0],r=t[1];return ml(function(){var i=Tt.transition;Tt.transition=1;try{r(e)}finally{Tt.transition=i}},[e]),n},useTransition:function(){var e=ss(Yt)[0];return[pl().current,e]},useMutableSource:v0,useOpaqueIdentifier:function(){return ss(Yt)[0]},unstable_isNewReconciler:!1},Mx={readContext:At,useCallback:S0,useContext:At,useEffect:ml,useImperativeHandle:w0,useLayoutEffect:y0,useMemo:E0,useReducer:os,useRef:pl,useState:function(){return os(Yt)},useDebugValue:Rh,useDeferredValue:function(e){var t=os(Yt),n=t[0],r=t[1];return ml(function(){var i=Tt.transition;Tt.transition=1;try{r(e)}finally{Tt.transition=i}},[e]),n},useTransition:function(){var e=os(Yt)[0];return[pl().current,e]},useMutableSource:v0,useOpaqueIdentifier:function(){return os(Yt)[0]},unstable_isNewReconciler:!1},Px=Fr.ReactCurrentOwner,$t=!1;function at(e,t,n,r){t.child=e===null?m0(t,null,n,r):cl(t,e.child,n,r)}function ng(e,t,n,r,i){n=n.render;var s=t.ref;return mi(t,i),r=kh(e,t,n,r,s,i),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,vn(e,t,i)):(t.flags|=1,at(e,t,r,i),t.child)}function rg(e,t,n,r,i,s){if(e===null){var o=n.type;return typeof o=="function"&&!Ph(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,x0(e,t,o,r,i,s)):(e=Da(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}return o=e.child,!(i&s)&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:so,n(i,r)&&e.ref===t.ref)?vn(e,t,s):(t.flags|=1,e=rr(o,r),e.ref=t.ref,e.return=t,t.child=e)}function x0(e,t,n,r,i,s){if(e!==null&&so(e.memoizedProps,r)&&e.ref===t.ref)if($t=!1,(s&i)!==0)e.flags&16384&&($t=!0);else return t.lanes=e.lanes,vn(e,t,s);return If(e,t,n,r,s)}function uc(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if(!(t.mode&4))t.memoizedState={baseLanes:0},ta(t,n);else if(n&1073741824)t.memoizedState={baseLanes:0},ta(t,s!==null?s.baseLanes:n);else return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},ta(t,e),null;else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,ta(t,r);return at(e,t,i,n),t.child}function k0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=128)}function If(e,t,n,r,i){var s=dt(n)?Ar:Je.current;return s=Ri(t,s),mi(t,i),n=kh(e,t,n,r,s,i),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,vn(e,t,i)):(t.flags|=1,at(e,t,n,i),t.child)}function ig(e,t,n,r,i){if(dt(n)){var s=!0;La(t)}else s=!1;if(mi(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),h0(t,n,r),kf(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=At(u):(u=dt(n)?Ar:Je.current,u=Ri(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Qm(t,o,r,u),Cn=!1;var f=t.memoizedState;o.state=f,lo(t,r,o,i),l=t.memoizedState,a!==r||f!==l||ft.current||Cn?(typeof c=="function"&&(ul(t,n,c,r),l=t.memoizedState),(a=Cn||Ym(t,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4)):(typeof o.componentDidMount=="function"&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4),r=!1)}else{o=t.stateNode,f0(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Pt(t.type,a),o.props=u,d=t.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=At(l):(l=dt(n)?Ar:Je.current,l=Ri(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Qm(t,o,r,l),Cn=!1,f=t.memoizedState,o.state=f,lo(t,r,o,i);var b=t.memoizedState;a!==d||f!==b||ft.current||Cn?(typeof g=="function"&&(ul(t,n,g,r),b=t.memoizedState),(u=Cn||Ym(t,n,u,r,f,b,l))?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,b,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,b,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=256)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=b),o.props=r,o.state=b,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=256),r=!1)}return Of(e,t,n,r,s,i)}function Of(e,t,n,r,i,s){k0(e,t);var o=(t.flags&64)!==0;if(!r&&!o)return i&&jm(t,n,!1),vn(e,t,s);r=t.stateNode,Px.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=cl(t,e.child,null,s),t.child=cl(t,null,a,s)):at(e,t,a,s),t.memoizedState=r.state,i&&jm(t,n,!0),t.child}function sg(e){var t=e.stateNode;t.pendingContext?Wm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wm(e,t.context,!1),Tf(e,t.containerInfo)}var ea={dehydrated:null,retryLane:0};function og(e,t,n){var r=t.pendingProps,i=Re.current,s=!1,o;return(o=(t.flags&64)!==0)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(s=!0,t.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),Ae(Re,i&1),e===null?(r.fallback!==void 0&&Rf(t),e=r.children,i=r.fallback,s?(e=ag(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=ea,e):typeof r.unstable_expectedLoadTime=="number"?(e=ag(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=ea,t.lanes=33554432,e):(n=Ch({mode:"visible",children:e},t.mode,n,null),n.return=t,t.child=n)):e.memoizedState!==null?s?(r=ug(e,t,r.children,r.fallback,n),s=t.child,i=e.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=e.childLanes&~n,t.memoizedState=ea,r):(n=lg(e,t,r.children,n),t.memoizedState=null,n):s?(r=ug(e,t,r.children,r.fallback,n),s=t.child,i=e.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=e.childLanes&~n,t.memoizedState=ea,r):(n=lg(e,t,r.children,n),t.memoizedState=null,n)}function ag(e,t,n,r){var i=e.mode,s=e.child;return t={mode:"hidden",children:t},!(i&2)&&s!==null?(s.childLanes=0,s.pendingProps=t):s=Ch(t,i,0,null),n=yi(n,i,r,null),s.return=e,n.return=e,s.sibling=n,e.child=s,n}function lg(e,t,n,r){var i=e.child;return e=i.sibling,n=rr(i,{mode:"visible",children:n}),!(t.mode&2)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function ug(e,t,n,r,i){var s=t.mode,o=e.child;e=o.sibling;var a={mode:"hidden",children:n};return!(s&2)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=a,o=n.lastEffect,o!==null?(t.firstEffect=n.firstEffect,t.lastEffect=o,o.nextEffect=null):t.firstEffect=t.lastEffect=null):n=rr(o,a),e!==null?r=rr(e,r):(r=yi(r,s,i,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function cg(e,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),c0(e.return,t)}function cc(e,t,n,r,i,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function fg(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(at(e,t,r.children,n),r=Re.current,r&2)r=r&1|2,t.flags|=64;else{if(e!==null&&e.flags&64)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cg(e,n);else if(e.tag===19)cg(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ae(Re,r),!(t.mode&2))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),cc(t,!1,i,n,s,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}cc(t,!0,n,null,s,t.lastEffect);break;case"together":cc(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function vn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),No|=t.lanes,n&t.childLanes){if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=rr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}return null}var T0,Lf,R0,A0;T0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lf=function(){};R0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,br(Xt.current);var s=null;switch(n){case"input":i=rf(e,i),r=rf(e,r),s=[];break;case"option":i=af(e,i),r=af(e,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=lf(e,i),r=lf(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=rl)}ff(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&me("scroll",e),s||a===l||(s=[])):typeof l=="object"&&l!==null&&l.$$typeof===th?l.toString():(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};A0=function(e,t,n,r){n!==r&&(t.flags|=4)};function ls(e,t){if(!Kt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Cx(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return dt(t.type)&&sl(),null;case 3:return Ii(),_e(ft),_e(Je),Eh(),r=t.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Jo(t)?t.flags|=4:r.hydrate||(t.flags|=256)),Lf(t),null;case 5:Sh(t);var i=br(co.current);if(n=t.type,e!==null&&t.stateNode!=null)R0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(t.stateNode===null)throw Error(D(166));return null}if(e=br(Xt.current),Jo(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Fn]=t,r[il]=s,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(e=0;e<bs.length;e++)me(bs[e],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":fm(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":hm(r,s),me("invalid",r)}ff(n,s),e=null;for(var o in s)s.hasOwnProperty(o)&&(i=s[o],o==="children"?typeof i=="string"?r.textContent!==i&&(e=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(e=["children",""+i]):Zs.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&me("scroll",r));switch(n){case"input":qo(r),dm(r,s,!0);break;case"textarea":qo(r),pm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=rl)}r=e,t.updateQueue=r,r!==null&&(t.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,e===uf.html&&(e=wy(n)),e===uf.html?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Fn]=t,e[il]=r,T0(e,t,!1,!1),t.stateNode=e,o=df(n,r),n){case"dialog":me("cancel",e),me("close",e),i=r;break;case"iframe":case"object":case"embed":me("load",e),i=r;break;case"video":case"audio":for(i=0;i<bs.length;i++)me(bs[i],e);i=r;break;case"source":me("error",e),i=r;break;case"img":case"image":case"link":me("error",e),me("load",e),i=r;break;case"details":me("toggle",e),i=r;break;case"input":fm(e,r),i=rf(e,r),me("invalid",e);break;case"option":i=af(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),me("invalid",e);break;case"textarea":hm(e,r),i=lf(e,r),me("invalid",e);break;default:i=r}ff(n,i);var a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?xy(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Sy(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Js(e,l):typeof l=="number"&&Js(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&me("scroll",e):l!=null&&Qd(e,s,l,o))}switch(n){case"input":qo(e),dm(e,r,!1);break;case"textarea":qo(e),pm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Jn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?fi(e,!!r.multiple,s,!1):r.defaultValue!=null&&fi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=rl)}t0(n,r)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)A0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));n=br(co.current),br(Xt.current),Jo(t)?(r=t.stateNode,n=t.memoizedProps,r[Fn]=t,r.nodeValue!==n&&(t.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fn]=t,t.stateNode=r)}return null;case 13:return _e(Re),r=t.memoizedState,t.flags&64?(t.lanes=n,t):(r=r!==null,n=!1,e===null?t.memoizedProps.fallback!==void 0&&Jo(t):n=e.memoizedState!==null,r&&!n&&t.mode&2&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||Re.current&1?He===0&&(He=3):((He===0||He===3)&&(He=4),et===null||!(No&134217727)&&!(Wi&134217727)||_i(et,Ze))),(r||n)&&(t.flags|=4),null);case 4:return Ii(),Lf(t),e===null&&Zy(t.stateNode.containerInfo),null;case 10:return bh(t),null;case 17:return dt(t.type)&&sl(),null;case 19:if(_e(Re),r=t.memoizedState,r===null)return null;if(s=(t.flags&64)!==0,o=r.rendering,o===null)if(s)ls(r,!1);else{if(He!==0||e!==null&&e.flags&64)for(e=t.child;e!==null;){if(o=fl(e),o!==null){for(t.flags|=64,ls(r,!1),s=o.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ae(Re,Re.current&1|2),t.child}e=e.sibling}r.tail!==null&&Ke()>Uf&&(t.flags|=64,s=!0,ls(r,!1),t.lanes=33554432)}else{if(!s)if(e=fl(o),e!==null){if(t.flags|=64,s=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ls(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!Kt)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*Ke()-r.renderingStartTime>Uf&&n!==1073741824&&(t.flags|=64,s=!0,ls(r,!1),t.lanes=33554432);r.isBackwards?(o.sibling=t.child,t.child=o):(n=r.last,n!==null?n.sibling=o:t.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=Ke(),n.sibling=null,t=Re.current,Ae(Re,s?t&1|2:t&1),n):null;case 23:case 24:return Mh(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(t.flags|=4),null}throw Error(D(156,t.tag))}function Dx(e){switch(e.tag){case 1:dt(e.type)&&sl();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(Ii(),_e(ft),_e(Je),Eh(),t=e.flags,t&64)throw Error(D(285));return e.flags=t&-4097|64,e;case 5:return Sh(e),null;case 13:return _e(Re),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return _e(Re),null;case 4:return Ii(),null;case 10:return bh(e),null;case 23:case 24:return Mh(),null;default:return null}}function Ih(e,t){try{var n="",r=t;do n+=gE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i}}function Nf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ux=typeof WeakMap=="function"?WeakMap:Map;function I0(e,t,n){n=qn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vl||(vl=!0,Ff=r),Nf(e,t)},n}function O0(e,t,n){n=qn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return Nf(e,t),r(i)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(Qt===null?Qt=new Set([this]):Qt.add(this),Nf(e,t));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}var Fx=typeof WeakSet=="function"?WeakSet:Set;function dg(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){Kn(e,n)}else t.current=null}function $x(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:Pt(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&gh(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(D(163))}function Bx(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{if((e.tag&3)===3){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{var i=e;r=i.next,i=i.tag,i&4&&i&1&&($0(n,e),Yx(n,e)),e=r}while(e!==t)}return;case 1:e=n.stateNode,n.flags&4&&(t===null?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:Pt(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=n.updateQueue,t!==null&&qm(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}qm(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.flags&4&&t0(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Py(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(D(163))}function hg(e,t){for(var n=e;;){if(n.tag===5){var r=n.stateNode;if(t)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=Ey("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function pg(e,t){if(Tr&&typeof Tr.onCommitFiberUnmount=="function")try{Tr.onCommitFiberUnmount(_h,t)}catch{}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var n=e=e.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if(r&4)$0(t,n);else{r=t;try{i()}catch(s){Kn(r,s)}}n=n.next}while(n!==e)}break;case 1:if(dg(t),e=t.stateNode,typeof e.componentWillUnmount=="function")try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(s){Kn(t,s)}break;case 5:dg(t);break;case 4:L0(e,t)}}function mg(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function gg(e){return e.tag===5||e.tag===3||e.tag===4}function _g(e){e:{for(var t=e.return;t!==null;){if(gg(t))break e;t=t.return}throw Error(D(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(D(161))}n.flags&16&&(Js(t,""),n.flags&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||gg(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?Mf(e,n,t):Pf(e,n,t)}function Mf(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=rl));else if(r!==4&&(e=e.child,e!==null))for(Mf(e,t,n),e=e.sibling;e!==null;)Mf(e,t,n),e=e.sibling}function Pf(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Pf(e,t,n),e=e.sibling;e!==null;)Pf(e,t,n),e=e.sibling}function L0(e,t){for(var n=t,r=!1,i,s;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(D(160));switch(i=r.stateNode,r.tag){case 5:s=!1;break e;case 3:i=i.containerInfo,s=!0;break e;case 4:i=i.containerInfo,s=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var o=e,a=n,l=a;;)if(pg(o,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}s?(o=i,a=n.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(pg(e,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function fc(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)===3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=t.stateNode,n!=null){r=t.memoizedProps;var i=e!==null?e.memoizedProps:r;e=t.type;var s=t.updateQueue;if(t.updateQueue=null,s!==null){for(n[il]=r,e==="input"&&r.type==="radio"&&r.name!=null&&yy(n,r),df(e,i),t=df(e,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?xy(n,a):o==="dangerouslySetInnerHTML"?Sy(n,a):o==="children"?Js(n,a):Qd(n,o,a,t)}switch(e){case"input":sf(n,r);break;case"textarea":by(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?fi(n,!!r.multiple,s,!1):e!==!!r.multiple&&(r.defaultValue!=null?fi(n,!!r.multiple,r.defaultValue,!0):fi(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(D(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:n=t.stateNode,n.hydrate&&(n.hydrate=!1,Py(n.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&(Nh=Ke(),hg(t.child,!0)),vg(t);return;case 19:vg(t);return;case 17:return;case 23:case 24:hg(t,t.memoizedState!==null);return}throw Error(D(163))}function vg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Fx),t.forEach(function(r){var i=Kx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vx(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var Wx=Math.ceil,_l=Fr.ReactCurrentDispatcher,Oh=Fr.ReactCurrentOwner,X=0,et=null,Ce=null,Ze=0,Or=0,Cf=sr(0),He=0,tu=null,Vi=0,No=0,Wi=0,Lh=0,Df=null,Nh=0,Uf=1/0;function ji(){Uf=Ke()+500}var W=null,vl=!1,Ff=null,Qt=null,nr=!1,Ds=null,ws=90,$f=[],Bf=[],yn=null,Us=0,Vf=null,Ma=-1,hn=0,Pa=0,Fs=null,Ca=!1;function vt(){return X&48?Ke():Ma!==-1?Ma:Ma=Ke()}function Qn(e){if(e=e.mode,!(e&2))return 1;if(!(e&4))return Ai()===99?1:2;if(hn===0&&(hn=Vi),Ix.transition!==0){Pa!==0&&(Pa=Df!==null?Df.pendingLanes:0),e=hn;var t=4186112&~Pa;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=Ai(),X&4&&e===98?e=tl(12,hn):(e=NE(e),e=tl(e,hn)),e}function Xn(e,t,n){if(50<Us)throw Us=0,Vf=null,Error(D(185));if(e=nu(e,t),e===null)return null;Yl(e,t,n),e===et&&(Wi|=t,He===4&&_i(e,Ze));var r=Ai();t===1?X&8&&!(X&48)?Wf(e):(It(e,n),X===0&&(ji(),tn())):(!(X&4)||r!==98&&r!==99||(yn===null?yn=new Set([e]):yn.add(e)),It(e,n)),Df=e}function nu(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function It(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-er(o),l=1<<a,u=s[a];if(u===-1){if(!(l&r)||l&i){u=t,Zr(l);var c=ue;s[a]=10<=c?u+250:6<=c?u+5e3:-1}}else u<=t&&(e.expiredLanes|=l);o&=~l}if(r=ro(e,e===et?Ze:0),t=ue,r===0)n!==null&&(n!==oc&&Ef(n),e.callbackNode=null,e.callbackPriority=0);else{if(n!==null){if(e.callbackPriority===t)return;n!==oc&&Ef(n)}t===15?(n=Wf.bind(null,e),cn===null?(cn=[n],Na=vh(Jl,u0)):cn.push(n),n=oc):t===14?n=ao(99,Wf.bind(null,e)):(n=ME(t),n=ao(n,N0.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function N0(e){if(Ma=-1,Pa=hn=0,X&48)throw Error(D(327));var t=e.callbackNode;if(or()&&e.callbackNode!==t)return null;var n=ro(e,e===et?Ze:0);if(n===0)return null;var r=n,i=X;X|=16;var s=D0();(et!==e||Ze!==r)&&(ji(),vi(e,r));do try{Hx();break}catch(a){C0(e,a)}while(1);if(yh(),_l.current=s,X=i,Ce!==null?r=0:(et=null,Ze=0,r=He),Vi&Wi)vi(e,0);else if(r!==0){if(r===2&&(X|=64,e.hydrate&&(e.hydrate=!1,gh(e.containerInfo)),n=Vy(e),n!==0&&(r=Ss(e,n))),r===1)throw t=tu,vi(e,0),_i(e,n),It(e,Ke()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(D(345));case 2:fr(e);break;case 3:if(_i(e,n),(n&62914560)===n&&(r=Nh+500-Ke(),10<r)){if(ro(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){vt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=$m(fr.bind(null,e),r);break}fr(e);break;case 4:if(_i(e,n),(n&4186112)===n)break;for(r=e.eventTimes,i=-1;0<n;){var o=31-er(n);s=1<<o,o=r[o],o>i&&(i=o),n&=~s}if(n=i,n=Ke()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Wx(n/1960))-n,10<n){e.timeoutHandle=$m(fr.bind(null,e),n);break}fr(e);break;case 5:fr(e);break;default:throw Error(D(329))}}return It(e,Ke()),e.callbackNode===t?N0.bind(null,e):null}function _i(e,t){for(t&=~Lh,t&=~Wi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-er(t),r=1<<n;e[n]=-1,t&=~r}}function Wf(e){if(X&48)throw Error(D(327));if(or(),e===et&&e.expiredLanes&Ze){var t=Ze,n=Ss(e,t);Vi&Wi&&(t=ro(e,t),n=Ss(e,t))}else t=ro(e,0),n=Ss(e,t);if(e.tag!==0&&n===2&&(X|=64,e.hydrate&&(e.hydrate=!1,gh(e.containerInfo)),t=Vy(e),t!==0&&(n=Ss(e,t))),n===1)throw n=tu,vi(e,0),_i(e,t),It(e,Ke()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,fr(e),It(e,Ke()),null}function jx(){if(yn!==null){var e=yn;yn=null,e.forEach(function(t){t.expiredLanes|=24&t.pendingLanes,It(t,Ke())})}tn()}function M0(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(ji(),tn())}}function P0(e,t){var n=X;X&=-2,X|=8;try{return e(t)}finally{X=n,X===0&&(ji(),tn())}}function ta(e,t){Ae(Cf,Or),Or|=t,Vi|=t}function Mh(){Or=Cf.current,_e(Cf)}function vi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ex(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&sl();break;case 3:Ii(),_e(ft),_e(Je),Eh();break;case 5:Sh(r);break;case 4:Ii();break;case 13:_e(Re);break;case 19:_e(Re);break;case 10:bh(r);break;case 23:case 24:Mh()}n=n.return}et=e,Ce=rr(e.current,null),Ze=Or=Vi=t,He=0,tu=null,Lh=Wi=No=0}function C0(e,t){do{var n=Ce;try{if(yh(),Ps.current=gl,dl){for(var r=Me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}dl=!1}if(fo=0,je=Xe=Me=null,Cs=!1,Oh.current=null,n===null||n.return===null){He=1,tu=t,Ce=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Ze,a.flags|=2048,a.firstEffect=a.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l;if(!(a.mode&2)){var c=a.alternate;c?(a.updateQueue=c.updateQueue,a.memoizedState=c.memoizedState,a.lanes=c.lanes):(a.updateQueue=null,a.memoizedState=null)}var d=(Re.current&1)!==0,f=o;do{var g;if(g=f.tag===13){var b=f.memoizedState;if(b!==null)g=b.dehydrated!==null;else{var v=f.memoizedProps;g=v.fallback===void 0?!1:v.unstable_avoidThisFallback!==!0?!0:!d}}if(g){var h=f.updateQueue;if(h===null){var m=new Set;m.add(u),f.updateQueue=m}else h.add(u);if(!(f.mode&2)){if(f.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var _=qn(-1,1);_.tag=2,Yn(a,_)}a.lanes|=1;break e}l=void 0,a=t;var y=s.pingCache;if(y===null?(y=s.pingCache=new Ux,l=new Set,y.set(u,l)):(l=y.get(u),l===void 0&&(l=new Set,y.set(u,l))),!l.has(a)){l.add(a);var p=Xx.bind(null,s,u,a);u.then(p,p)}f.flags|=4096,f.lanes=t;break e}f=f.return}while(f!==null);l=Error((ci(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}He!==5&&(He=2),l=Ih(l,a),f=o;do{switch(f.tag){case 3:s=l,f.flags|=4096,t&=-t,f.lanes|=t;var S=I0(f,s,t);Gm(f,S);break e;case 1:s=l;var w=f.type,E=f.stateNode;if(!(f.flags&64)&&(typeof w.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Qt===null||!Qt.has(E)))){f.flags|=4096,t&=-t,f.lanes|=t;var x=O0(f,s,t);Gm(f,x);break e}}f=f.return}while(f!==null)}F0(n)}catch(k){t=k,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(1)}function D0(){var e=_l.current;return _l.current=gl,e===null?gl:e}function Ss(e,t){var n=X;X|=16;var r=D0();et===e&&Ze===t||vi(e,t);do try{zx();break}catch(i){C0(e,i)}while(1);if(yh(),X=n,_l.current=r,Ce!==null)throw Error(D(261));return et=null,Ze=0,He}function zx(){for(;Ce!==null;)U0(Ce)}function Hx(){for(;Ce!==null&&!Tx();)U0(Ce)}function U0(e){var t=B0(e.alternate,e,Or);e.memoizedProps=e.pendingProps,t===null?F0(e):Ce=t,Oh.current=null}function F0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&2048){if(n=Dx(t),n!==null){n.flags&=2047,Ce=n;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}else{if(n=Cx(n,t,Or),n!==null){Ce=n;return}if(n=t,n.tag!==24&&n.tag!==23||n.memoizedState===null||Or&1073741824||!(n.mode&4)){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}e!==null&&!(e.flags&2048)&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);He===0&&(He=5)}function fr(e){var t=Ai();return Ir(99,Gx.bind(null,e,t)),null}function Gx(e,t){do or();while(Ds!==null);if(X&48)throw Error(D(327));var n=e.finishedWork;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;for(var o=e.eventTimes,a=e.expirationTimes;0<s;){var l=31-er(s),u=1<<l;i[l]=0,o[l]=-1,a[l]=-1,s&=~u}if(yn!==null&&!(r&24)&&yn.has(e)&&yn.delete(e),e===et&&(Ce=et=null,Ze=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=X,X|=32,Oh.current=null,rc=Aa,o=Nm(),vf(o)){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(u=a.getSelection&&a.getSelection())&&u.rangeCount!==0){a=u.anchorNode,s=u.anchorOffset,l=u.focusNode,u=u.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var c=0,d=-1,f=-1,g=0,b=0,v=o,h=null;t:for(;;){for(var m;v!==a||s!==0&&v.nodeType!==3||(d=c+s),v!==l||u!==0&&v.nodeType!==3||(f=c+u),v.nodeType===3&&(c+=v.nodeValue.length),(m=v.firstChild)!==null;)h=v,v=m;for(;;){if(v===o)break t;if(h===a&&++g===s&&(d=c),h===l&&++b===u&&(f=c),(m=v.nextSibling)!==null)break;v=h,h=v.parentNode}v=m}a=d===-1||f===-1?null:{start:d,end:f}}else a=null;a=a||{start:0,end:0}}else a=null;ic={focusedElem:o,selectionRange:a},Aa=!1,Fs=null,Ca=!1,W=r;do try{qx()}catch(k){if(W===null)throw Error(D(330));Kn(W,k),W=W.nextEffect}while(W!==null);Fs=null,W=r;do try{for(o=e;W!==null;){var _=W.flags;if(_&16&&Js(W.stateNode,""),_&128){var y=W.alternate;if(y!==null){var p=y.ref;p!==null&&(typeof p=="function"?p(null):p.current=null)}}switch(_&1038){case 2:_g(W),W.flags&=-3;break;case 6:_g(W),W.flags&=-3,fc(W.alternate,W);break;case 1024:W.flags&=-1025;break;case 1028:W.flags&=-1025,fc(W.alternate,W);break;case 4:fc(W.alternate,W);break;case 8:a=W,L0(o,a);var S=a.alternate;mg(a),S!==null&&mg(S)}W=W.nextEffect}}catch(k){if(W===null)throw Error(D(330));Kn(W,k),W=W.nextEffect}while(W!==null);if(p=ic,y=Nm(),_=p.focusedElem,o=p.selectionRange,y!==_&&_&&_.ownerDocument&&Qy(_.ownerDocument.documentElement,_)){for(o!==null&&vf(_)&&(y=o.start,p=o.end,p===void 0&&(p=y),"selectionStart"in _?(_.selectionStart=y,_.selectionEnd=Math.min(p,_.value.length)):(p=(y=_.ownerDocument||document)&&y.defaultView||window,p.getSelection&&(p=p.getSelection(),a=_.textContent.length,S=Math.min(o.start,a),o=o.end===void 0?S:Math.min(o.end,a),!p.extend&&S>o&&(a=o,o=S,S=a),a=Lm(_,S),s=Lm(_,o),a&&s&&(p.rangeCount!==1||p.anchorNode!==a.node||p.anchorOffset!==a.offset||p.focusNode!==s.node||p.focusOffset!==s.offset)&&(y=y.createRange(),y.setStart(a.node,a.offset),p.removeAllRanges(),S>o?(p.addRange(y),p.extend(s.node,s.offset)):(y.setEnd(s.node,s.offset),p.addRange(y)))))),y=[],p=_;p=p.parentNode;)p.nodeType===1&&y.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<y.length;_++)p=y[_],p.element.scrollLeft=p.left,p.element.scrollTop=p.top}Aa=!!rc,ic=rc=null,e.current=n,W=r;do try{for(_=e;W!==null;){var w=W.flags;if(w&36&&Bx(_,W.alternate,W),w&128){y=void 0;var E=W.ref;if(E!==null){var x=W.stateNode;switch(W.tag){case 5:y=x;break;default:y=x}typeof E=="function"?E(y):E.current=y}}W=W.nextEffect}}catch(k){if(W===null)throw Error(D(330));Kn(W,k),W=W.nextEffect}while(W!==null);W=null,Ax(),X=i}else e.current=n;if(nr)nr=!1,Ds=e,ws=t;else for(W=r;W!==null;)t=W.nextEffect,W.nextEffect=null,W.flags&8&&(w=W,w.sibling=null,w.stateNode=null),W=t;if(r=e.pendingLanes,r===0&&(Qt=null),r===1?e===Vf?Us++:(Us=0,Vf=e):Us=0,n=n.stateNode,Tr&&typeof Tr.onCommitFiberRoot=="function")try{Tr.onCommitFiberRoot(_h,n,void 0,(n.current.flags&64)===64)}catch{}if(It(e,Ke()),vl)throw vl=!1,e=Ff,Ff=null,e;return X&8||tn(),null}function qx(){for(;W!==null;){var e=W.alternate;Ca||Fs===null||(W.flags&8?_m(W,Fs)&&(Ca=!0):W.tag===13&&Vx(e,W)&&_m(W,Fs)&&(Ca=!0));var t=W.flags;t&256&&$x(e,W),!(t&512)||nr||(nr=!0,ao(97,function(){return or(),null})),W=W.nextEffect}}function or(){if(ws!==90){var e=97<ws?97:ws;return ws=90,Ir(e,Qx)}return!1}function Yx(e,t){$f.push(t,e),nr||(nr=!0,ao(97,function(){return or(),null}))}function $0(e,t){Bf.push(t,e),nr||(nr=!0,ao(97,function(){return or(),null}))}function Qx(){if(Ds===null)return!1;var e=Ds;if(Ds=null,X&48)throw Error(D(331));var t=X;X|=32;var n=Bf;Bf=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(l){if(s===null)throw Error(D(330));Kn(s,l)}}for(n=$f,$f=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var a=i.create;i.destroy=a()}catch(l){if(s===null)throw Error(D(330));Kn(s,l)}}for(a=e.current.firstEffect;a!==null;)e=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=e;return X=t,tn(),!0}function yg(e,t,n){t=Ih(n,t),t=I0(e,t,1),Yn(e,t),t=vt(),e=nu(e,1),e!==null&&(Yl(e,1,t),It(e,t))}function Kn(e,t){if(e.tag===3)yg(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){yg(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qt===null||!Qt.has(r))){e=Ih(t,e);var i=O0(n,e,1);if(Yn(n,i),i=vt(),n=nu(n,1),n!==null)Yl(n,1,i),It(n,i);else if(typeof r.componentDidCatch=="function"&&(Qt===null||!Qt.has(r)))try{r.componentDidCatch(t,e)}catch{}break}}n=n.return}}function Xx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=vt(),e.pingedLanes|=e.suspendedLanes&n,et===e&&(Ze&n)===n&&(He===4||He===3&&(Ze&62914560)===Ze&&500>Ke()-Nh?vi(e,0):Lh|=n),It(e,t)}function Kx(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=e.mode,t&2?t&4?(hn===0&&(hn=Vi),t=Jr(62914560&~hn),t===0&&(t=4194304)):t=Ai()===99?1:2:t=1),n=vt(),e=nu(e,t),e!==null&&(Yl(e,t,n),It(e,n))}var B0;B0=function(e,t,n){var r=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||ft.current)$t=!0;else if(n&r)$t=!!(e.flags&16384);else{switch($t=!1,t.tag){case 3:sg(t),lc();break;case 5:Xm(t);break;case 1:dt(t.type)&&La(t);break;case 4:Tf(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var i=t.type._context;Ae(ol,i._currentValue),i._currentValue=r;break;case 13:if(t.memoizedState!==null)return n&t.child.childLanes?og(e,t,n):(Ae(Re,Re.current&1),t=vn(e,t,n),t!==null?t.sibling:null);Ae(Re,Re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&64){if(r)return fg(e,t,n);t.flags|=64}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ae(Re,Re.current),r)break;return null;case 23:case 24:return t.lanes=0,uc(e,t,n)}return vn(e,t,n)}else $t=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=Ri(t,Je.current),mi(t,n),i=kh(null,t,r,e,i,n),t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,dt(r)){var s=!0;La(t)}else s=!1;t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wh(t);var o=r.getDerivedStateFromProps;typeof o=="function"&&ul(t,r,o,e),i.updater=eu,t.stateNode=i,i._reactInternals=t,kf(t,r,e,n),t=Of(null,t,r,!0,s,n)}else t.tag=0,at(null,t,i,n),t=t.child;return t;case 16:i=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,s=i._init,i=s(i._payload),t.type=i,s=t.tag=Jx(i),e=Pt(i,e),s){case 0:t=If(null,t,i,e,n);break e;case 1:t=ig(null,t,i,e,n);break e;case 11:t=ng(null,t,i,e,n);break e;case 14:t=rg(null,t,i,Pt(i.type,e),r,n);break e}throw Error(D(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),If(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),ig(e,t,r,i,n);case 3:if(sg(t),r=t.updateQueue,e===null||r===null)throw Error(D(282));if(r=t.pendingProps,i=t.memoizedState,i=i!==null?i.element:null,f0(e,t),lo(t,r,null,n),r=t.memoizedState.element,r===i)lc(),t=vn(e,t,n);else{if(i=t.stateNode,(s=i.hydrate)&&($n=pi(t.stateNode.containerInfo.firstChild),_n=t,s=Kt=!0),s){if(e=i.mutableSourceEagerHydrationData,e!=null)for(i=0;i<e.length;i+=2)s=e[i],s._workInProgressVersionPrimary=e[i+1],gi.push(s);for(n=m0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else at(e,t,r,n),lc();t=t.child}return t;case 5:return Xm(t),e===null&&Rf(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,wf(r,i)?o=null:s!==null&&wf(r,s)&&(t.flags|=16),k0(e,t),at(e,t,o,n),t.child;case 6:return e===null&&Rf(t),null;case 13:return og(e,t,n);case 4:return Tf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cl(t,null,r,n):at(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),ng(e,t,r,i,n);case 7:return at(e,t,t.pendingProps,n),t.child;case 8:return at(e,t,t.pendingProps.children,n),t.child;case 12:return at(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value;var a=t.type._context;if(Ae(ol,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=Et(a,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===i.children&&!ft.current){t=vn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var u=l.firstContext;u!==null;){if(u.context===r&&u.observedBits&s){a.tag===1&&(u=qn(-1,n&-n),u.tag=2,Yn(a,u)),a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),c0(a.return,n),l.lanes|=n;break}u=u.next}}else o=a.tag===10&&a.type===t.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}at(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,s=t.pendingProps,r=s.children,mi(t,n),i=At(i,s.unstable_observedBits),r=r(i),t.flags|=1,at(e,t,r,n),t.child;case 14:return i=t.type,s=Pt(i,t.pendingProps),s=Pt(i.type,s),rg(e,t,i,s,r,n);case 15:return x0(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,dt(r)?(e=!0,La(t)):e=!1,mi(t,n),h0(t,r,i),kf(t,r,i,n),Of(null,t,r,!0,e,n);case 19:return fg(e,t,n);case 23:return uc(e,t,n);case 24:return uc(e,t,n)}throw Error(D(156,t.tag))};function Zx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,n,r){return new Zx(e,t,n,r)}function Ph(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jx(e){if(typeof e=="function")return Ph(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hl)return 11;if(e===Gl)return 14}return 2}function rr(e,t){var n=e.alternate;return n===null?(n=xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Da(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Ph(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Dn:return yi(n.children,i,s,t);case gy:o=8,i|=16;break;case Xd:o=8,i|=1;break;case Rs:return e=xt(12,n,t,i|8),e.elementType=Rs,e.type=Rs,e.lanes=s,e;case As:return e=xt(13,n,t,i),e.type=As,e.elementType=As,e.lanes=s,e;case Ka:return e=xt(19,n,t,i),e.elementType=Ka,e.lanes=s,e;case nh:return Ch(n,i,s,t);case nf:return e=xt(24,n,t,i),e.elementType=nf,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Kd:o=10;break e;case Zd:o=9;break e;case Hl:o=11;break e;case Gl:o=14;break e;case Jd:o=16,r=null;break e;case eh:o=22;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=xt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function yi(e,t,n,r){return e=xt(7,e,r,t),e.lanes=n,e}function Ch(e,t,n,r){return e=xt(23,e,r,t),e.elementType=nh,e.lanes=n,e}function dc(e,t,n){return e=xt(6,e,null,t),e.lanes=n,e}function hc(e,t,n){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ek(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Xu(0),this.expirationTimes=Xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xu(0),this.mutableSourceEagerHydrationData=null}function tk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_r,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function yl(e,t,n,r){var i=t.current,s=vt(),o=Qn(i);e:if(n){n=n._reactInternals;t:{if($r(n)!==n||n.tag!==1)throw Error(D(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(dt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(D(171))}if(n.tag===1){var l=n.type;if(dt(l)){n=r0(n,l,a);break e}}n=a}else n=tr;return t.context===null?t.context=n:t.pendingContext=n,t=qn(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),Yn(i,t),Xn(i,o,s),o}function pc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Dh(e,t){bg(e,t),(e=e.alternate)&&bg(e,t)}function nk(){return null}function Uh(e,t,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new ek(e,t,n!=null&&n.hydrate===!0),t=xt(3,null,null,t===2?7:t===1?3:0),n.current=t,t.stateNode=n,wh(t),e[Bi]=n.current,Zy(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){t=r[e];var i=t._getVersion;i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=n}Uh.prototype.render=function(e){yl(e,this._internalRoot,null,null)};Uh.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;yl(null,e,null,function(){t[Bi]=null})};function Mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rk(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Uh(e,0,t?{hydrate:!0}:void 0)}function ru(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var a=i;i=function(){var u=pc(o);a.call(u)}}yl(t,o,e,i)}else{if(s=n._reactRootContainer=rk(n,r),o=s._internalRoot,typeof i=="function"){var l=i;i=function(){var u=pc(o);l.call(u)}}P0(function(){yl(t,o,e,i)})}return pc(o)}Ly=function(e){if(e.tag===13){var t=vt();Xn(e,4,t),Dh(e,4)}};ah=function(e){if(e.tag===13){var t=vt();Xn(e,67108864,t),Dh(e,67108864)}};Ny=function(e){if(e.tag===13){var t=vt(),n=Qn(e);Xn(e,n,t),Dh(e,n)}};My=function(e,t){return t()};hf=function(e,t,n){switch(t){case"input":if(sf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Zl(r);if(!i)throw Error(D(90));vy(r),sf(r,i)}}}break;case"textarea":by(e,n);break;case"select":t=n.value,t!=null&&fi(e,!!n.multiple,t,!1)}};ih=M0;Ry=function(e,t,n,r,i){var s=X;X|=4;try{return Ir(98,e.bind(null,t,n,r,i))}finally{X=s,X===0&&(ji(),tn())}};sh=function(){!(X&49)&&(jx(),or())};Ay=function(e,t){var n=X;X|=2;try{return e(t)}finally{X=n,X===0&&(ji(),tn())}};function V0(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mo(t))throw Error(D(200));return tk(e,t,null,n)}var ik={Events:[Oo,oi,Zl,ky,Ty,or,{current:!1}]},us={findFiberByHostInstance:yr,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},sk={bundleType:us.bundleType,version:us.version,rendererPackageName:us.rendererPackageName,rendererConfig:us.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Oy(e),e===null?null:e.stateNode},findFiberByHostInstance:us.findFiberByHostInstance||nk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!na.isDisabled&&na.supportsFiber)try{_h=na.inject(sk),Tr=na}catch{}}Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ik;Ot.createPortal=V0;Ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):Error(D(268,Object.keys(e)));return e=Oy(t),e=e===null?null:e.stateNode,e};Ot.flushSync=function(e,t){var n=X;if(n&48)return e(t);X|=1;try{if(e)return Ir(99,e.bind(null,t))}finally{X=n,tn()}};Ot.hydrate=function(e,t,n){if(!Mo(t))throw Error(D(200));return ru(null,e,t,!0,n)};Ot.render=function(e,t,n){if(!Mo(t))throw Error(D(200));return ru(null,e,t,!1,n)};Ot.unmountComponentAtNode=function(e){if(!Mo(e))throw Error(D(40));return e._reactRootContainer?(P0(function(){ru(null,null,e,!1,function(){e._reactRootContainer=null,e[Bi]=null})}),!0):!1};Ot.unstable_batchedUpdates=M0;Ot.unstable_createPortal=function(e,t){return V0(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};Ot.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Mo(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return ru(e,t,n,!1,r)};Ot.version="17.0.2";function W0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W0)}catch(e){console.error(e)}}W0(),Zv.exports=Ot;var iu=Zv.exports;const Fh=Dr(iu),ok=ww({__proto__:null,default:Fh},[iu]);var Bt;(e=>{e.serviceIds=new Map,e.DI_TARGET="$di$target",e.DI_DEPENDENCIES="$di$dependencies";function t(n){return n[e.DI_DEPENDENCIES]||[]}e.getServiceDependencies=t})(Bt||(Bt={}));const su=nn("instantiationService");function ak(e,t,n){t[Bt.DI_TARGET]===t?t[Bt.DI_DEPENDENCIES].push({id:e,index:n}):(t[Bt.DI_DEPENDENCIES]=[{id:e,index:n}],t[Bt.DI_TARGET]=t)}function nn(e){if(Bt.serviceIds.has(e))return Bt.serviceIds.get(e);const t=function(n,r,i){if(arguments.length!==3)throw new Error("@IServiceName-decorator can only be used to decorate a parameter");ak(t,n,i)};return t.toString=()=>e,Bt.serviceIds.set(e,t),t}const j0=nn("filterViewService"),Ie=new Uint8Array(16),Ve=[];for(let e=0;e<256;e++)Ve.push(e.toString(16).padStart(2,"0"));let jf;typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?jf=crypto.getRandomValues.bind(crypto):jf=function(e){for(let t=0;t<e.length;t++)e[t]=Math.floor(Math.random()*256);return e};function lk(){jf(Ie),Ie[6]=Ie[6]&15|64,Ie[8]=Ie[8]&63|128;let e=0,t="";return t+=Ve[Ie[e++]],t+=Ve[Ie[e++]],t+=Ve[Ie[e++]],t+=Ve[Ie[e++]],t+="-",t+=Ve[Ie[e++]],t+=Ve[Ie[e++]],t+="-",t+=Ve[Ie[e++]],t+=Ve[Ie[e++]],t+="-",t+=Ve[Ie[e++]],t+=Ve[Ie[e++]],t+="-",t+=Ve[Ie[e++]],t+=Ve[Ie[e++]],t+=Ve[Ie[e++]],t+=Ve[Ie[e++]],t+=Ve[Ie[e++]],t+=Ve[Ie[e++]],t}class de{constructor(t,n=0){this.actorId=t,this.counter=n}static compare(t,n){return de.decode(t).compare(de.decode(n))}static encode(t){return[t.actorId,t.counter]}static decode(t){return new de(t[0],t[1])}static parse(t){const n=t.split("_");if(n.length!==2)throw new Error("invalid");return[n[1],parseInt(n[0],10)]}inc(){return new de(this.actorId,this.counter+1)}tick(){return this.counter+=1,new de(this.actorId,this.counter)}merge(t){return new de(this.actorId,Math.max(this.counter,t.counter))}compare(t){return this.counter>t.counter?1:this.counter<t.counter?-1:this.actorId>t.actorId?1:this.actorId<t.actorId?-1:0}valueOf(){return this.toString()}toString(){return`${String(this.counter).padStart(10,"0")}_${this.actorId}`}encode(){return de.encode(this)}}class z0{constructor(){this.vendorClock=new Map}merge(t){const n=de.decode(t);if(!this.vendorClock.has(n.actorId)){this.vendorClock.set(n.actorId,n);return}const r=this.vendorClock.get(n.actorId);this.vendorClock.set(n.actorId,r.merge(n))}version(){const t={};for(const[n,r]of this.vendorClock.entries())t[n]=r.counter;return t}}const uk=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function ck(e){return uk.test(e)}const Oe=new Uint8Array(16),We=[];for(let e=0;e<256;e++)We.push(e.toString(16).padStart(2,"0"));let zf;typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?zf=crypto.getRandomValues.bind(crypto):zf=function(e){for(let t=0;t<e.length;t++)e[t]=Math.floor(Math.random()*256);return e};function wg(){zf(Oe),Oe[6]=Oe[6]&15|64,Oe[8]=Oe[8]&63|128;let e=0,t="";return t+=We[Oe[e++]],t+=We[Oe[e++]],t+=We[Oe[e++]],t+=We[Oe[e++]],t+="-",t+=We[Oe[e++]],t+=We[Oe[e++]],t+="-",t+=We[Oe[e++]],t+=We[Oe[e++]],t+="-",t+=We[Oe[e++]],t+=We[Oe[e++]],t+="-",t+=We[Oe[e++]],t+=We[Oe[e++]],t+=We[Oe[e++]],t+=We[Oe[e++]],t+=We[Oe[e++]],t+=We[Oe[e++]],t}const bn=Symbol("_update"),$h=Symbol("_undo"),Bh=Symbol("_redo");function fk(e,t){const n=new Set,r=[];function i(s){n.has(de.decode(s.id).toString())||(r.push(s),n.add(de.decode(s.id).toString()))}return e.forEach(s=>i(s)),t.forEach(s=>i(s)),r.sort((s,o)=>de.compare(s.id,o.id))}function $s(e,t,n,r){const i=e.get(t)||new Map;e.set(t,i);let s=i.get(n);return s||(s=r(t,n)),i.set(n,s),i.get(n)}var ct=(e=>(e[e.string=0]="string",e[e.int=1]="int",e[e.float64=2]="float64",e[e.boolean=3]="boolean",e[e.null=4]="null",e[e.crdt=7]="crdt",e))(ct||{});function dk(e){return e?typeof e[bn]=="function":!1}function hk(e){return!!e.structureCtorId&&!!e.structureName}function pk(e){switch(typeof e){case"string":return{type:ct.string,value:String(e)};case"number":return{type:Number.isInteger(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER?ct.int:ct.float64,value:String(e)};case"boolean":return{type:ct.boolean,value:e};case"object":{if(e===null)return{type:ct.null};if(dk(e))return{type:ct.crdt,structureCtorId:e.structureCtorId,structureName:e.structureName}}default:throw new Error(`Unsupported type of value: ${e}`)}}function mk(e,t){switch(e.type){case ct.string:case ct.boolean:return e.value;case ct.int:return parseInt(e.value,10);case ct.float64:return parseFloat(e.value);case ct.null:return null;case ct.crdt:return t(e.structureCtorId,e.structureName)}}function gk(e,t){if(e.length<1)return-1;let n=0,r=e.length-1;for(;n<=r;){const i=Math.floor((n+r)/2);if(t<de.decode(e[i].id))r=i-1;else if(t>de.decode(e[i].id))n=i+1;else return i}return-1}class _k{constructor(t,n){this.structureCtorId=t,this.name=n,this.ops=[],this.vendorClock=new z0}append(t){this.ops.push(t),this.vendorClock.merge(t.id)}redo(t){const n=this.getOperationsById(t);n&&(this.vendorClock.merge(t),n.delete=!1)}undo(t){const n=this.getOperationsById(t);n&&(this.vendorClock.merge(t),n.delete=!0)}getOperationsById(t){const n=gk(this.ops,de.decode(t));return n===-1?null:this.ops[n]}}function Sg(e,t){const n=new Map;for(const r of e)$s(n,r.structureCtorId,r.structureName,()=>[]).push(r);for(const[r,i]of n)for(const[s,o]of i)t(r,s,o)}class Eg{constructor(){this.structureEditorStackMap=new Map}get(t,n){return $s(this.structureEditorStackMap,t,n,()=>new _k(t,n))}forEach(t){for(const[n,r]of this.structureEditorStackMap.entries())for(const[i,s]of r.entries())t(s,n,i)}append(t){this.get(t.structureCtorId,t.structureName).append(t)}}class vk{constructor(t,n,r){this.options=r,this.ctorMap=new Map,this.structureMap=new Map,this.structureEditorStackMap=new Map,this.editorStackMap=new Map,this.vendorClock=new z0,this.docOps=[];const i=(r==null?void 0:r.actorId)??wg();if(!ck(i))throw new Error("actorId should be uuid");this._clock=new de(i),n.forEach(s=>{this.ctorMap.set(s.structureCtorId,s)}),this.structureStoreMap=new Eg,this.build(t),this._actorId=i}get version(){return this.vendorClock.version()}get actorId(){return this._actorId}get clock(){return this._clock.encode()}get operations(){let t=this.docOps;return this.structureStoreMap.forEach(n=>{t=t.concat(n.ops)}),t.sort((n,r)=>de.compare(n.id,r.id))}get(t,n){const r=n??this._clock.tick().toString();return this.getStructure(t.structureCtorId,r)}merge(t){return this.build(fk(this.operations,t.operations)),this}getTime(){var t;if((t=this.options)!=null&&t.time)return Date.now()}createUndoRedoService(t,n){const r=n??wg(),i=o=>{$s(this.structureEditorStackMap,o.structureCtorId,o.structureName,()=>r)},s=new t({name:r,handlerTrack:i,handleRedo:this.handleRedo.bind(this),handleUndo:this.handleUndo.bind(this)});return this.editorStackMap.set(s.name,s),s}hasStructure(t,n){var r;return(r=this.structureMap.get(t))==null?void 0:r.has(n)}handleUndo(t){const r={id:this._clock.tick().encode(),type:"undo",ids:t.map(i=>i.id),time:this.getTime()};Sg(t,(i,s,o)=>{this.hasStructure(i,s)&&this.getStructure(i,s)[$h](o)}),this.appendDocOp(r)}appendDocOp(t){this.docOps.push(t),this._clock.merge(de.decode(t.id)),this.vendorClock.merge(t.id)}handleRedo(t){const r={id:this._clock.tick().encode(),type:"redo",ids:t.map(i=>i.id),time:this.getTime()};Sg(t,(i,s,o)=>{this.hasStructure(i,s)&&this.getStructure(i,s)[Bh](o)}),this.appendDocOp(r)}getStructure(t,n){return $s(this.structureMap,t,n,()=>{const r=this.ctorMap.get(t),i=new r(n,this.createContext(t,n));return i[bn](this.structureStoreMap.get(t,n).ops),i})}build(t){const n=new Map,r=new Eg;for(const i of t)if(this._clock=this._clock.merge(de.decode(i.id)),this.vendorClock.merge(i.id),hk(i))n.set(de.decode(i.id).toString(),i),r.append(i);else{const s=i;switch(s.type){case"undo":{s.ids.forEach(o=>{n.get(de.decode(o).toString()).delete=!0});break}case"redo":{s.ids.forEach(o=>{n.get(de.decode(o).toString()).delete=!1});break}}}r.forEach((i,s,o)=>{this.hasStructure(s,o)&&this.get(this.ctorMap.get(s),o)[bn](i.ops)}),this.structureStoreMap=r}createContext(t,n){const r=this;return{tick:()=>this._clock.tick(),getTime:()=>r.getTime(),appendOperation:i=>{var o;this.vendorClock.merge(i.id);const s=$s(this.structureEditorStackMap,i.structureCtorId,i.structureName,()=>null);s&&((o=this.editorStackMap.get(s))==null||o.applyOperation(i)),this.structureStoreMap.append(i)},unwrapValue:i=>mk(i,(s,o)=>r.getStructure(s,o)),wrapValue:pk,getStore(){return r.structureStoreMap.get(t,n)}}}}class Hf{constructor(t,n){this.structureName=t,this.context=n,this.structureCtorId="CRDTArray",this.data=[]}[$h](t){const n=this.context.getStore();for(const r of t)n.undo(r.id);this[bn](n.ops)}[Bh](t){const n=this.context.getStore();for(const r of t)n.redo(r.id);this[bn](n.ops)}get lastOperationTime(){const t=this.context.getStore().ops;return t[t.length-1].time}[bn](t){const n=new Map;n.set(null,{left:null,right:null,id:null,delete:!0,value:{type:ct.null}});for(const s of t)switch(s.type){case"0":{const o=n.get(s.left?s.left.toString():null),a=o.right;o.right=s.id;const l={left:o.id,id:s.id,delete:!!s.delete,right:a,value:s.value};n.set(s.id.toString(),l),a&&(n.get(a.toString()).left=l.id);break}case"1":{s.delete||(n.get(s.removeId.toString()).delete=!0);break}default:throw new Error(`unknown op: ${JSON.stringify(s)}`)}const r=[];let i=null;for(;;){const s=n.get(i&&i.toString());if(!(s!=null&&s.delete)&&(s!=null&&s.id)&&r.push({id:s.id,value:s.value}),s!=null&&s.right)i=s.right;else break}this.data=r}push(t){this.data.length===0?this.makeAddRightOperation(null,t):this.makeAddRightOperation(this.data.length-1,t)}remove(t){const n=this.context.tick(),r=this.data[t].id,i={id:n.encode(),type:"1",removeId:r,structureCtorId:this.structureCtorId,structureName:this.structureName,time:this.context.getTime()};this.context.appendOperation(i),this.data.splice(t,1)}insert(t,n){this.makeAddRightOperation(t,n)}unshift(t){this.makeAddRightOperation(null,t)}makeAddRightOperation(t,n){let r=null;t!==null&&(r=this.data[t].id);const i=this.context.tick(),s={id:i.encode(),type:"0",value:this.context.wrapValue(n),left:r,structureCtorId:this.structureCtorId,structureName:this.structureName,time:this.context.getTime()};this.context.appendOperation(s);const o={id:i.encode(),value:this.context.wrapValue(n)};t===null?this.data.unshift(o):this.data.splice(t+1,0,o)}toJS(){return this.data.map(t=>this.context.unwrapValue(t.value))}}Hf.structureCtorId="CRDTArray";class Gf{constructor(t,n){this.structureName=t,this.context=n,this.structureCtorId="CRDTMap",this.data=new Map}get lastOperationTime(){const t=this.context.getStore().ops;return t[t.length-1].time}[Bh](t){const n=this.context.getStore();for(const r of t)n.redo(r.id);this[bn](n.ops)}[$h](t){const n=this.context.getStore();for(const r of t)n.undo(r.id);this[bn](n.ops)}[bn](t){const n=new Map;for(const r of t)switch(r.type){case"0":{r.delete||n.set(r.key,r.value);break}case"1":{r.delete||n.delete(r.key);break}default:throw new Error(`unknown op: ${JSON.stringify(r)}`)}this.data=n}set(t,n){const r=this.context.wrapValue(n),i={id:this.context.tick().encode(),key:t,value:r,type:"0",structureCtorId:this.structureCtorId,structureName:this.structureName,time:this.context.getTime()};this.context.appendOperation(i),this.data.set(t,r)}delete(t){const n={id:this.context.tick().encode(),type:"1",key:t,structureCtorId:this.structureCtorId,structureName:this.structureName,time:this.context.getTime()};this.context.appendOperation(n),this.data.delete(t)}get(t){if(this.data.has(t))return this.context.unwrapValue(this.data.get(t))}toJS(){const t={};return this.data.forEach((n,r)=>{t[r]=this.context.unwrapValue(n)}),t}}Gf.structureCtorId="CRDTMap";class H0 extends vk{constructor(t){super(t,[Hf,Gf],{time:!0})}getMap(t){return this.get(Gf,t)}getArray(t){return this.get(Hf,t)}}let yk=typeof document<"u"&&document.location&&document.location.hash.indexOf("pseudo=true")>=0;function $(e,t,...n){const r=globalThis.i18nMessages||{};return bk(r[e]||t,n)}function bk(e,t){let n;return t.length===0?n=e:n=e.replace(/\{(\d+)\}/g,(r,i)=>{const s=i[0],o=t[s];let a=r;return typeof o=="string"?a=o:(typeof o=="number"||typeof o=="boolean"||o===void 0||o===null)&&(a=String(o)),a}),yk&&(n="［"+n.replace(/[aouei]/g,"$&$&")+"］"),n}var Pn=(e=>(e[e.random=0]="random",e[e.title_asc=1]="title_asc",e[e.title_desc=2]="title_desc",e[e.add_time_asc=3]="add_time_asc",e[e.add_time_desc=4]="add_time_desc",e[e.annotate_count_asc=5]="annotate_count_asc",e[e.annotate_count_desc=6]="annotate_count_desc",e))(Pn||{});0+"",$("view_sort.random","Random"),1+"",$("view_sort.title_asc","Title: A - Z"),2+"",$("view_sort.title_desc","Title: Z - A"),3+"",$("view_sort.add_time_asc","Add Time: Oldest - Newest"),4+"",$("view_sort.add_time_desc","Add Time: Newest - Oldest"),5+"",$("view_sort.annotate_count_asc","Annotate Count: Least - Most"),6+"",$("view_sort.annotate_count_desc","Annotate Count: Most - Least");const Es=class{get metadata(){return{modelType:Es.ModelType,schema:Es.Schema}}get operations(){return this.doc.operations}get lastId(){return de.decode(this.doc.operations[this.doc.operations.length-1].id).toString()}get actorId(){return this.doc.actorId}get version(){return this.doc.version}get id(){return this.getMap().get("id")}getMap(){return this.doc.getMap("view")}constructor(e){this.doc=new H0(e)}get title(){return this.doc.getMap("view").get("title")??""}set title(e){if(typeof e!="string")throw new Error("title must be string");if(this.title===e)return;this.doc.getMap("view").set("title",e)}get limit(){return this.doc.getMap("view").get("limit")??null}set limit(e){if(this.limit===e)return;this.doc.getMap("view").set("limit",e)}get enableLimit(){return this.doc.getMap("view").get("enabledLimit")??!1}set enableLimit(e){if(this.enableLimit===e)return;this.doc.getMap("view").set("enabledLimit",e)}get description(){return this.getMap().get("description")??""}set description(e){if(typeof e!="string")throw new Error("description must be string");if(this.description===e)return;this.doc.getMap("view").set("description",e)}get deleted(){return this.getMap().get("deleted")??!1}set deleted(e){if(typeof e!="boolean")throw new Error("deleted must be boolean");this.deleted!==e&&this.getMap().set("deleted",e)}get createdAt(){return this.getMap().get("createdAt")}static create(){const e=new Es([]),t=e.doc.getMap("view");return t.set("id",lk()),t.set("createdAt",Date.now()),t.set("limit",25),e}static from(e){return new Es([...e])}get filters(){return this.doc.getArray("filters").toJS().map(e=>JSON.parse(e.get("data")))}get filtersWithId(){return this.doc.getArray("filters").toJS().map(e=>({id:e.structureName,...JSON.parse(e.get("data"))}))}addFilter(e){const t=this.doc.getArray("filters"),n=this.doc.getMap();n.set("type",e.type),n.set("key",e.key),n.set("data",JSON.stringify(e)),t.push(n)}updateFilter(e,t){const n=this.doc.getArray("filters").toJS()[e],r=Object.assign({},JSON.parse(n.get("data")),t);n.set("data",JSON.stringify(r))}getFilter(e){return this.filters[e]}deleteFilter(e){this.doc.getArray("filters").remove(e)}get match(){const e=this.doc.getMap("view").get("match")??"and";/* istanbul ignore if -- @preserve */return e!=="and"&&e!=="or"?"and":e}set match(e){if(e!=="and"&&e!=="or")throw new Error('match must be "and" or "or"');const t=this.doc.getMap("view");(t.get("match")??"and")!==e&&t.set("match",e)}set sortBy(e){if(this.sortBy===e)return;this.doc.getMap("view").set("sortBy",e)}get sortBy(){const t=this.doc.getMap("view").get("sortBy");switch(t){case 0:case 1:case 2:case 5:case 6:case 3:case 4:return t;default:return 4}}};let ho=Es;ho.Schema="1.1.0";ho.ModelType="webpage-view";class wk{constructor(t){this.channel=t,this.onViewChange=this.channel.listen("onViewChange")}initView(t){return this.channel.call("initView",[t])}publicViews(){return this.channel.call("publicViews")}getViewState(t){return this.channel.call("getViewState",[t])}patchView(t,n){return this.channel.call("patchView",[t,n])}createFilterView(t){return this.channel.call("createFilterView",[t.operations])}getViews(){return this.channel.call("getViews")}async getView(t){const n=await this.channel.call("getView",[t]);return n?ho.from(n):null}deleteView(t){return this.channel.call("deleteView",[t])}}let Sk=class{constructor(t){this.incoming=new Map,this.outgoing=new Map,this.data=t}};class Ek{constructor(t){this._hashFn=t,this._nodes=new Map}roots(){const t=[];for(let n of this._nodes.values())n.outgoing.size===0&&t.push(n);return t}insertEdge(t,n){const r=this.lookupOrInsertNode(t),i=this.lookupOrInsertNode(n);r.outgoing.set(this._hashFn(n),i),i.incoming.set(this._hashFn(t),r)}removeNode(t){const n=this._hashFn(t);this._nodes.delete(n);for(let r of this._nodes.values())r.outgoing.delete(n),r.incoming.delete(n)}lookupOrInsertNode(t){const n=this._hashFn(t);let r=this._nodes.get(n);return r||(r=new Sk(t),this._nodes.set(n,r)),r}lookup(t){return this._nodes.get(this._hashFn(t))}isEmpty(){return this._nodes.size===0}toString(){let t=[];for(let[n,r]of this._nodes)t.push(`${n}, (incoming)[${[...r.incoming.keys()].join(", ")}], (outgoing)[${[...r.outgoing.keys()].join(",")}]`);return t.join(`
`)}findCycleSlow(){for(let[t,n]of this._nodes){const r=new Set([t]),i=this._findCycle(n,r);if(i)return i}}_findCycle(t,n){for(let[r,i]of t.outgoing){if(n.has(r))return[...n,r].join(" -> ");n.add(r);const s=this._findCycle(i,n);if(s)return s;n.delete(r)}}}class xg extends Error{constructor(t){super("cyclic dependency between services"),this.message=t.findCycleSlow()??`UNABLE to detect cycle, dumping graph: 
${t.toString()}`}}class Vh{constructor(t=new qv,n=!1,r){this._activeInstantiations=new Set,this._services=t,this._strict=n,this._parent=r,this._services.set(su,this)}createChild(t){return new Vh(t,this._strict,this)}invokeFunction(t,...n){let r=Bs.traceInvocation(t),i=!1;try{return t({get:o=>{if(i)throw Gw("service accessor is only valid during the invocation of its target method");const a=this._getOrCreateServiceInstance(o,r);if(!a)throw new Error(`[invokeFunction] unknown service '${o}'`);return a}},...n)}finally{i=!0,r.stop()}}createInstance(t,...n){let r,i;return t instanceof ze?(r=Bs.traceCreation(t.ctor),i=this._createInstance(t.ctor,t.staticArguments.concat(n),r)):(r=Bs.traceCreation(t),i=this._createInstance(t,n,r)),r.stop(),i}_createInstance(t,n=[],r){let i=Bt.getServiceDependencies(t).sort((a,l)=>a.index-l.index),s=[];for(const a of i){let l=this._getOrCreateServiceInstance(a.id,r);l||this._throwIfStrict(`[createInstance] ${t.name} depends on UNKNOWN service ${a.id}.`,!1),s.push(l)}let o=i.length>0?i[0].index:n.length;if(n.length!==o){console.trace(`[createInstance] First service dependency of ${t.name} at position ${o+1} conflicts with ${n.length} static arguments`);let a=o-n.length;a>0?n=n.concat(new Array(a)):n=n.slice(0,o)}return new t(...n,...s)}_setServiceInstance(t,n){if(this._services.get(t)instanceof ze)this._services.set(t,n);else if(this._parent)this._parent._setServiceInstance(t,n);else throw new Error("illegalState - setting UNKNOWN service instance")}_getServiceInstanceOrDescriptor(t){let n=this._services.get(t);return!n&&this._parent?this._parent._getServiceInstanceOrDescriptor(t):n}_getOrCreateServiceInstance(t,n){let r=this._getServiceInstanceOrDescriptor(t);return r instanceof ze?this._safeCreateAndCacheServiceInstance(t,r,n.branch(t,!0)):(n.branch(t,!1),r)}_safeCreateAndCacheServiceInstance(t,n,r){if(this._activeInstantiations.has(t))throw new Error(`illegal state - RECURSIVELY instantiating service '${t}'`);this._activeInstantiations.add(t);try{return this._createAndCacheServiceInstance(t,n,r)}finally{this._activeInstantiations.delete(t)}}_createAndCacheServiceInstance(t,n,r){const i=new Ek(a=>a.id.toString());let s=0;const o=[{id:t,desc:n,_trace:r}];for(;o.length;){const a=o.pop();if(i.lookupOrInsertNode(a),s++>1e3)throw new xg(i);for(let l of Bt.getServiceDependencies(a.desc.ctor)){let u=this._getServiceInstanceOrDescriptor(l.id);if(u||this._throwIfStrict(`[createInstance] ${t} depends on ${l.id} which is NOT registered.`,!0),u instanceof ze){const c={id:l.id,desc:u,_trace:a._trace.branch(l.id,!0)};i.insertEdge(a,c),o.push(c)}}}for(;;){const a=i.roots();if(a.length===0){if(!i.isEmpty())throw new xg(i);break}for(const{data:l}of a){if(this._getServiceInstanceOrDescriptor(l.id)instanceof ze){const c=this._createServiceInstanceWithOwner(l.id,l.desc.ctor,l.desc.staticArguments,l.desc.supportsDelayedInstantiation,l._trace);this._setServiceInstance(l.id,c)}i.removeNode(l)}}return this._getServiceInstanceOrDescriptor(t)}_createServiceInstanceWithOwner(t,n,r=[],i,s){if(this._services.get(t)instanceof ze)return this._createServiceInstance(n,r,i,s);if(this._parent)return this._parent._createServiceInstanceWithOwner(t,n,r,i,s);throw new Error(`illegalState - creating UNKNOWN service instance ${n.name}`)}_createServiceInstance(t,n=[],r,i){if(r){const s=new IS(()=>this._createInstance(t,n,i));return new Proxy(Object.create(null),{get(o,a){if(a in o)return o[a];let l=s.value,u=l[a];return typeof u!="function"||(u=u.bind(l),o[a]=u),u},set(o,a,l){return s.value[a]=l,!0}})}else return this._createInstance(t,n,i)}_throwIfStrict(t,n){if(n&&console.warn(n),this._strict)throw new Error(t)}}const dr=class{constructor(e,t){this.type=e,this.name=t,this._start=Date.now(),this._dep=[]}static traceInvocation(e){return dr._None}static traceCreation(e){return dr._None}branch(e,t){let n=new dr(2,e.toString());return this._dep.push([e,t,n]),n}stop(){let e=Date.now()-this._start;dr._totals+=e;let t=!1;function n(i,s){let o=[],a=new Array(i+1).join("	");for(const[l,u,c]of s._dep)if(u&&c){t=!0,o.push(`${a}CREATES -> ${l}`);let d=n(i+1,c);d&&o.push(d)}else o.push(`${a}uses -> ${l}`);return o.join(`
`)}let r=[`${this.type===0?"CREATE":"CALL"} ${this.name}`,`${n(1,this)}`,`DONE, took ${e.toFixed(2)}ms (grand total ${dr._totals.toFixed(2)}ms)`];(e>2||t)&&console.log(r.join(`
`))}};let Bs=dr;Bs._None=new class extends dr{constructor(){super(-1,null)}stop(){}branch(){return this}};Bs._totals=0;const xk=nn("legalService");function kk(e,t){const n=new Set,r=[];function i(s){n.has(de.decode(s.id).toString())||(r.push(s),n.add(de.decode(s.id).toString()))}return e.forEach(s=>i(s)),t.forEach(s=>i(s)),r.sort((s,o)=>de.compare(s.id,o.id))}const ei=class{constructor(e){this._onModelChanged=new ie,this.onModelChanged=this._onModelChanged.event,this.doc=new H0(e)}get metadata(){return{fileId:this.id,modelType:ei.ModelType,schema:ei.Schema}}get id(){return this.doc.getMap("website").get("id")}get operations(){return this.doc.operations}get actorId(){return this.doc.actorId}get version(){return this.doc.version}get ext(){return this.doc.getMap("website").get("ext")}set ext(e){if(typeof e!="string")throw new Error("ext should be string");const t=this.doc.getMap("website");e!==t.get("ext")&&(this.doc.getMap("website").set("ext",e),this.fireChange())}static from(e){if(e.length===0)throw new Error("operations should not be empty");return new ei(e)}static create(e){const t=new ei([]),n=t.doc.getMap("website");return n.set("createTime",e.createTime),n.set("firstAddTime",e.firstAddTime),n.set("id",e.id),n.set("title",e.title),e.link&&n.set("link",e.link),n.set("excerpt",e.excerpt),n.set("size",e.size),n.set("ext",e.ext),t}patch(e){return Object.keys(e.previousVersion).forEach(t=>{if(typeof this.doc.version[t]!="number")throw new Error("can't merge");if(e.previousVersion[t]>this.doc.version[t])throw new Error("can't merge")}),ei.from(kk(this.doc.operations,e.operations))}getProperty(){const e=this.doc.getMap("website"),t=e.get("id"),n=e.get("firstAddTime"),r=e.get("createTime"),i=e.get("deleted")??!1,s=e.get("title"),o=e.get("ext"),a=e.get("excerpt"),l=e.get("link"),u=e.get("size"),c=e.get("liked")??!1,d=e.get("read")??!1,f=this.labels;return{id:t,liked:c,firstAddTime:n,createTime:r,deleted:i,title:s,ext:o,excerpt:a,link:l,size:u,read:d,labels:f}}addLabel(e){this.checkLabel(e),!this.labels.includes(e)&&(this.doc.getArray("webpage.labels").push(e),this.fireChange())}set labels(e){e.forEach(s=>this.checkLabel(s));const t=this.labels,n=e,r=t.filter(s=>!n.includes(s)),i=n.filter(s=>!t.includes(s));for(const s of r)this.doDeleteLabel(s);for(const s of i)this.doc.getArray("webpage.labels").push(s);this.fireChange()}get labels(){const e=this.doc.getArray("webpage.labels").toJS();return Array.from(new Set(e))}checkLabel(e){if(typeof e!="string")throw new Error("label should be string");if(e!==e.trim())throw new Error("should trim label before add");if(!e)throw new Error("label should not be empty")}doDeleteLabel(e){const t=this.doc.getArray("webpage.labels").toJS();for(let n=t.length-1;n>=0;n--)t[n]===e&&this.doc.getArray("webpage.labels").remove(n)}deleteLabel(e){this.doDeleteLabel(e),this.fireChange()}get title(){return this.doc.getMap("website").get("title")}set title(e){if(typeof e!="string")throw new Error("title should be string");const t=this.doc.getMap("website");e!==t.get("title")&&(t.set("title",e),this.fireChange())}get excerpt(){return this.doc.getMap("website").get("excerpt")}set excerpt(e){if(typeof e!="string")throw new Error("excerpt should be string");const t=this.doc.getMap("website");t.get("excerpt")!==e&&(t.set("excerpt",e),this.fireChange())}get read(){return this.doc.getMap("website").get("read")??!1}set read(e){if(typeof e!="boolean")throw new Error("read should be boolean");const t=this.doc.getMap("website");t.get("read")!==e&&(t.set("read",e),this.fireChange())}get link(){return this.doc.getMap("website").get("link")??""}set link(e){if(typeof e!="string")throw new Error("link should be string");const t=this.doc.getMap("website");t.get("link")!==e&&(t.set("link",e),this.fireChange())}get liked(){return this.doc.getMap("website").get("liked")??!1}set liked(e){if(typeof e!="boolean")throw new Error("liked should be boolean");if(e===this.liked)return;this.doc.getMap("website").set("liked",e),this.fireChange()}get highlights(){return this.doc.getArray("highlight").toJS().map(t=>{const n=t.get("type");switch(n){case 1:return{highlightId:t.structureName,type:n,marker:JSON.parse(t.get("marker")),note:t.get("note"),text:t.get("text"),tenThousandth:t.get("tenThousandth"),editTime:t.lastOperationTime};default:{/* istanbul ignore next -- @preserve */throw new Error("highlightType must be 1")}}})}updateHighlightNote(e,t){this.doc.getMap(e).get("note")!==t&&(this.doc.getMap(e).set("note",t),this.fireChange())}updateTenThousandth(e){let t=!1;const n=new Set(this.doc.getArray("highlight").toJS().map(r=>r.structureName));for(const r of e)if(n.has(r.id)){const i=this.doc.getMap(r.id),s=i.get("tenThousandth");typeof r.tenThousandth=="number"&&s!==r.tenThousandth&&(t=!0,i.set("tenThousandth",r.tenThousandth))}t&&this.fireChange()}deleteHighlight(e){const n=this.doc.getArray("highlight").toJS().findIndex(r=>r.structureName===e);this.doc.getArray("highlight").remove(n),this.fireChange()}get deleted(){return this.doc.getMap("website").get("deleted")??!1}set deleted(e){if(typeof e!="boolean")throw new Error("liked should be boolean");if(e===this.deleted)return;this.doc.getMap("website").set("deleted",!!e),this.fireChange()}addHighlight({marker:e,text:t,note:n,tenThousandth:r}){const i=this.doc.getMap();return i.set("type",1),i.set("marker",JSON.stringify(e)),i.set("text",t),typeof n<"u"&&n&&i.set("note",n),typeof r<"u"&&i.set("tenThousandth",r),this.doc.getArray("highlight").push(i),this.fireChange(),i.structureName}fireChange(e=!1){this._onModelChanged.fire({auto:e})}};let Wh=ei;Wh.Schema="1.1.0";Wh.ModelType="website";class Tk{constructor(t){this.channel=t,this.onWebpageChange=this.channel.listen("onWebpageChange")}init(){return this.channel.call("init")}createByFile(t,n,r){return this.channel.call("createByFile",[t,n,r])}update(t,n){return this.channel.call("update",[t,n])}getContent(t){return this.channel.call("getContent",[t])}search(t){return this.channel.call("search",[t])}publicSearch(t){throw new Error("Method not implemented.")}list(t){return this.channel.call("list",[t])}listWithContent(){throw new Error("Method not implemented.")}setModel(t){throw new Error("Method not implemented.")}delete(t){return this.channel.call("delete",[t])}async getModel(t){const n=await this.channel.call("getModel",[t]);return n?Wh.from(n):null}create(t,n,r){throw new Error("Method not implemented.")}}const jh=nn("IWebsiteService"),qf=nn("workbenchWebsiteService");class Rk{constructor(t){this.webpageService=t,this._webpages=[],this._firstInit=!1,this._onWebpagesDidChange=new ie,this.onWebpagesDidChange=this._onWebpagesDidChange.event,this.initTask=null,this.webpageService.onWebpageChange(()=>{this.doInit()})}get firstInit(){return this._firstInit}get webpages(){return this._webpages}async upload(t,n){const r=await this.doUpload(t,n);return await this.init(),r}async delete(t){this._webpages=this._webpages.filter(n=>n.id!==t)}async init(){if(this.initTask)return this.initTask;this.initTask=this.doInit();try{await this.initTask}catch(t){console.log("init",t)}}async doInit(){const t=await this.fetch();this._webpages=t,this._onWebpagesDidChange.fire({webpages:this._webpages}),this._firstInit=!0}}var Ak=Object.defineProperty,Ik=Object.getOwnPropertyDescriptor,Ok=(e,t,n,r)=>{for(var i=r>1?void 0:r?Ik(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Ak(t,n,i),i},Lk=(e,t)=>(n,r)=>t(n,r,e);let Yf=class extends Rk{constructor(e){super(e),this.webpagesService=e,e.onWebpageChange(()=>{this.init()})}async fetch(){return(await this.webpagesService.list({})).filter(t=>!t.deleted).sort((t,n)=>-t.createTime+n.createTime)}async doUpload(e,t){const n=new FormData;n.append("info",JSON.stringify(e)),n.append("file",t);const r=await fetch("/private/api/upload",{method:"post",body:n}),{fileId:i}=await r.json();return i}};Yf=Ok([Lk(0,jh)],Yf);const Po=nn("IMobileListService");class Nk{constructor(){this._onListChange=new ie,this.onListChange=this._onListChange.event,this.listState=null}getList(){return this.listState}updateList(t){this.listState=t,this._onListChange.fire()}handleScroll(t){this.listState&&(this.listState.scrollOffset=t)}calculateOffset(t,n){const r=new Set(t.webpages.map(s=>s.id));if(n.scrollOffset<=0)return 0;let i=n.scrollOffset;for(let s=0;s<n.webpages.length;s++){const o=n.itemHeight(s);if(o>=i){const a=n.webpages[s];if(r.has(a.id)){let l=i;for(let u=0;u<t.webpages.length;u++){if(t.webpages[u].id===a.id)return l;l=l+t.itemHeight(u)}}return 0}else i=i-o}return 0}getNext(t){if(!this.listState)return null;const n=this.listState.webpages.findIndex(i=>i.id===t);if(n===-1)return null;const r=this.listState.webpages[n+1];return r?r.id:null}getPrevious(t){if(!this.listState)return null;const n=this.listState.webpages.findIndex(i=>i.id===t);if(n===-1)return null;const r=this.listState.webpages[n-1];return r?r.id:null}}var Mk=Object.defineProperty,Pk=Object.getOwnPropertyDescriptor,Ck=(e,t,n,r)=>{for(var i=r>1?void 0:r?Pk(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Mk(t,n,i),i},Dk=(e,t)=>(n,r)=>t(n,r,e);const Qf=nn("workbenchMobileWebpageService");let Xf=class{constructor(e){this.filterViewService=e,this._onDidWebpageViewChange=new ie,this.onDidWebpageViewChange=this._onDidWebpageViewChange.event,this._webpageViews=[],e.onViewChange(()=>{this.init()})}get webpageViews(){return this._webpageViews}async getWebpageView(e){const t=await this.filterViewService.getView(e);if(!t)throw new Error("view not exist");return t}async init(){this._webpageViews=await this.filterViewService.getViews(),this._onDidWebpageViewChange.fire()}};Xf=Ck([Dk(0,j0)],Xf);const zi=nn("historyService");var Uk=Object.defineProperty,Fk=Object.getOwnPropertyDescriptor,$k=(e,t,n,r)=>{for(var i=r>1?void 0:r?Fk(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Uk(t,n,i),i},Bk=(e,t)=>(n,r)=>t(n,r,e);const Lr=nn("pageInstanceService");let Kf=class{constructor(e){this.historyService=e,this.map=new Map,this._onPageChange=new ie,this.onPageInstanceChange=this._onPageChange.event,this._pageInstance=null,this.historyService.onPopState(()=>{this.loadPage()})}get pageInstance(){if(!this._pageInstance)throw new Error("pageInstance is null");return this._pageInstance}async go(e,t){const n=this.map.get(e);n&&this.updateInstance(await n.createInstance(t))}updateInstance(e){if(e){if(this._pageInstance)if(this._pageInstance!==e)this._pageInstance.hide();else return;this._pageInstance=e,this._onPageChange.fire()}}async loadPage(){const e=this.map.get(this.historyService.pageName);e&&this.updateInstance(await e.init())}async init(e){this.map=new Map;for(const r of e)this.map.set(r.name,r.page);const t=this.map.get(this.historyService.pageName);if(t){const r=await t.init();if(r){this.updateInstance(r);return}}const n=e[0].page;this._pageInstance=await n.createInstance({})}async loadUrl(e){this.historyService.push(e),await this.loadPage()}};Kf=$k([Bk(0,zi)],Kf);var Vk=Object.defineProperty,Wk=Object.getOwnPropertyDescriptor,jk=(e,t,n,r)=>{for(var i=r>1?void 0:r?Wk(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Vk(t,n,i),i},kg=(e,t)=>(n,r)=>t(n,r,e);const G0=nn("ITabBarService");let Zf=class{constructor(e,t){this.historyService=e,this.pageInstanceService=t,this._onStateChange=new ie,this.onStateChange=this._onStateChange.event,this.internalVisible=!0}get items(){return this.internalTabBar.map(e=>({id:e.id,title:e.title,icon:e.icon}))}get activeId(){return this.historyService.pageName}get visible(){return this.internalVisible&&this.internalTabBar.some(e=>e.pageName===this.historyService.pageName)&&!1}get internalTabBar(){const e=this;return[{id:"webpages",title:$("tab_bar.webpages","Webpages"),icon:"WebPage",pageName:"webpages",action(){e.historyService.pageName!=="webpages"&&e.pageInstanceService.go("webpages")}},{id:"search",title:$("tab_bar.search","Search"),icon:"Search",pageName:"search",action(){e.historyService.pageName!=="search"&&e.pageInstanceService.go("search")}}]}click(e){const t=this.getTabBar(e);t&&t.action()}getTabBar(e){return this.internalTabBar.find(t=>t.id===e)??null}show(){this.internalVisible=!0,this._onStateChange.fire()}hide(){this.internalVisible=!1,this._onStateChange.fire()}};Zf=jk([kg(0,zi),kg(1,Lr)],Zf);const q0="%[a-f0-9]{2}",Tg=new RegExp("("+q0+")|([^%]+?)","gi"),Rg=new RegExp("("+q0+")+","gi");function Jf(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(e.length===1)return e;t=t||1;const n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],Jf(n),Jf(r))}function zk(e){try{return decodeURIComponent(e)}catch{let t=e.match(Tg)||[];for(let n=1;n<t.length;n++)e=Jf(t,n).join(""),t=e.match(Tg)||[];return e}}function Hk(e){const t={"%FE%FF":"��","%FF%FE":"��"};let n=Rg.exec(e);for(;n;){try{t[n[0]]=decodeURIComponent(n[0])}catch{const i=zk(n[0]);i!==n[0]&&(t[n[0]]=i)}n=Rg.exec(e)}t["%C2"]="�";const r=Object.keys(t);for(const i of r)e=e.replace(new RegExp(i,"g"),t[i]);return e}function Gk(e){if(typeof e!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return Hk(e)}}function Y0(e,t){if(!(typeof e=="string"&&typeof t=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e===""||t==="")return[];const n=e.indexOf(t);return n===-1?[]:[e.slice(0,n),e.slice(n+t.length)]}function qk(e,t){const n={};if(Array.isArray(t))for(const r of t){const i=Object.getOwnPropertyDescriptor(e,r);i!=null&&i.enumerable&&Object.defineProperty(n,r,i)}else for(const r of Reflect.ownKeys(e)){const i=Object.getOwnPropertyDescriptor(e,r);if(i.enumerable){const s=e[r];t(r,s,e)&&Object.defineProperty(n,r,i)}}return n}const Yk=e=>e==null,Qk=e=>encodeURIComponent(e).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`),ed=Symbol("encodeFragmentIdentifier");function Xk(e){switch(e.arrayFormat){case"index":return t=>(n,r)=>{const i=n.length;return r===void 0||e.skipNull&&r===null||e.skipEmptyString&&r===""?n:r===null?[...n,[Pe(t,e),"[",i,"]"].join("")]:[...n,[Pe(t,e),"[",Pe(i,e),"]=",Pe(r,e)].join("")]};case"bracket":return t=>(n,r)=>r===void 0||e.skipNull&&r===null||e.skipEmptyString&&r===""?n:r===null?[...n,[Pe(t,e),"[]"].join("")]:[...n,[Pe(t,e),"[]=",Pe(r,e)].join("")];case"colon-list-separator":return t=>(n,r)=>r===void 0||e.skipNull&&r===null||e.skipEmptyString&&r===""?n:r===null?[...n,[Pe(t,e),":list="].join("")]:[...n,[Pe(t,e),":list=",Pe(r,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t=e.arrayFormat==="bracket-separator"?"[]=":"=";return n=>(r,i)=>i===void 0||e.skipNull&&i===null||e.skipEmptyString&&i===""?r:(i=i===null?"":i,r.length===0?[[Pe(n,e),t,Pe(i,e)].join("")]:[[r,Pe(i,e)].join(e.arrayFormatSeparator)])}default:return t=>(n,r)=>r===void 0||e.skipNull&&r===null||e.skipEmptyString&&r===""?n:r===null?[...n,Pe(t,e)]:[...n,[Pe(t,e),"=",Pe(r,e)].join("")]}}function Kk(e){let t;switch(e.arrayFormat){case"index":return(n,r,i)=>{if(t=/\[(\d*)]$/.exec(n),n=n.replace(/\[\d*]$/,""),!t){i[n]=r;return}i[n]===void 0&&(i[n]={}),i[n][t[1]]=r};case"bracket":return(n,r,i)=>{if(t=/(\[])$/.exec(n),n=n.replace(/\[]$/,""),!t){i[n]=r;return}if(i[n]===void 0){i[n]=[r];return}i[n]=[...i[n],r]};case"colon-list-separator":return(n,r,i)=>{if(t=/(:list)$/.exec(n),n=n.replace(/:list$/,""),!t){i[n]=r;return}if(i[n]===void 0){i[n]=[r];return}i[n]=[...i[n],r]};case"comma":case"separator":return(n,r,i)=>{const s=typeof r=="string"&&r.includes(e.arrayFormatSeparator),o=typeof r=="string"&&!s&&fn(r,e).includes(e.arrayFormatSeparator);r=o?fn(r,e):r;const a=s||o?r.split(e.arrayFormatSeparator).map(l=>fn(l,e)):r===null?r:fn(r,e);i[n]=a};case"bracket-separator":return(n,r,i)=>{const s=/(\[])$/.test(n);if(n=n.replace(/\[]$/,""),!s){i[n]=r&&fn(r,e);return}const o=r===null?[]:r.split(e.arrayFormatSeparator).map(a=>fn(a,e));if(i[n]===void 0){i[n]=o;return}i[n]=[...i[n],...o]};default:return(n,r,i)=>{if(i[n]===void 0){i[n]=r;return}i[n]=[...[i[n]].flat(),r]}}}function Q0(e){if(typeof e!="string"||e.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function Pe(e,t){return t.encode?t.strict?Qk(e):encodeURIComponent(e):e}function fn(e,t){return t.decode?Gk(e):e}function X0(e){return Array.isArray(e)?e.sort():typeof e=="object"?X0(Object.keys(e)).sort((t,n)=>Number(t)-Number(n)).map(t=>e[t]):e}function K0(e){const t=e.indexOf("#");return t!==-1&&(e=e.slice(0,t)),e}function Zk(e){let t="";const n=e.indexOf("#");return n!==-1&&(t=e.slice(n)),t}function Ag(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&typeof e=="string"&&e.trim()!==""?e=Number(e):t.parseBooleans&&e!==null&&(e.toLowerCase()==="true"||e.toLowerCase()==="false")&&(e=e.toLowerCase()==="true"),e}function zh(e){e=K0(e);const t=e.indexOf("?");return t===-1?"":e.slice(t+1)}function Hh(e,t){t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t},Q0(t.arrayFormatSeparator);const n=Kk(t),r=Object.create(null);if(typeof e!="string"||(e=e.trim().replace(/^[?#&]/,""),!e))return r;for(const i of e.split("&")){if(i==="")continue;const s=t.decode?i.replace(/\+/g," "):i;let[o,a]=Y0(s,"=");o===void 0&&(o=s),a=a===void 0?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?a:fn(a,t),n(fn(o,t),a,r)}for(const[i,s]of Object.entries(r))if(typeof s=="object"&&s!==null)for(const[o,a]of Object.entries(s))s[o]=Ag(a,t);else r[i]=Ag(s,t);return t.sort===!1?r:(t.sort===!0?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce((i,s)=>{const o=r[s];return o&&typeof o=="object"&&!Array.isArray(o)?i[s]=X0(o):i[s]=o,i},Object.create(null))}function Z0(e,t){if(!e)return"";t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t},Q0(t.arrayFormatSeparator);const n=o=>t.skipNull&&Yk(e[o])||t.skipEmptyString&&e[o]==="",r=Xk(t),i={};for(const[o,a]of Object.entries(e))n(o)||(i[o]=a);const s=Object.keys(i);return t.sort!==!1&&s.sort(t.sort),s.map(o=>{const a=e[o];return a===void 0?"":a===null?Pe(o,t):Array.isArray(a)?a.length===0&&t.arrayFormat==="bracket-separator"?Pe(o,t)+"[]":a.reduce(r(o),[]).join("&"):Pe(o,t)+"="+Pe(a,t)}).filter(o=>o.length>0).join("&")}function J0(e,t){var i;t={decode:!0,...t};let[n,r]=Y0(e,"#");return n===void 0&&(n=e),{url:((i=n==null?void 0:n.split("?"))==null?void 0:i[0])??"",query:Hh(zh(e),t),...t&&t.parseFragmentIdentifier&&r?{fragmentIdentifier:fn(r,t)}:{}}}function e1(e,t){t={encode:!0,strict:!0,[ed]:!0,...t};const n=K0(e.url).split("?")[0]||"",r=zh(e.url),i={...Hh(r,{sort:!1}),...e.query};let s=Z0(i,t);s&&(s=`?${s}`);let o=Zk(e.url);if(e.fragmentIdentifier){const a=new URL(n);a.hash=e.fragmentIdentifier,o=t[ed]?a.hash:`#${e.fragmentIdentifier}`}return`${n}${s}${o}`}function t1(e,t,n){n={parseFragmentIdentifier:!0,[ed]:!1,...n};const{url:r,query:i,fragmentIdentifier:s}=J0(e,n);return e1({url:r,query:qk(i,t),fragmentIdentifier:s},n)}function Jk(e,t,n){const r=Array.isArray(t)?i=>!t.includes(i):(i,s)=>!t(i,s);return t1(e,r,n)}const mc=Object.freeze(Object.defineProperty({__proto__:null,exclude:Jk,extract:zh,parse:Hh,parseUrl:J0,pick:t1,stringify:Z0,stringifyUrl:e1},Symbol.toStringTag,{value:"Module"}));class eT{constructor(t){this.routeData=null,this._onPopState=new ie,this.onPopState=this._onPopState.event,this.options=t??{window},this.window.addEventListener("popstate",()=>{this._onPopState.fire()})}get pageName(){return this.pathname.slice(1).split("/")[0]??""}get pathname(){const t=this.options.base??"";return this.location.pathname.startsWith(t+"/")?this.location.pathname.slice(t.length):this.location.pathname}get query(){return mc.parseUrl(this.location.href).query}push(t,n){this.history.pushState({},"",mc.stringifyUrl({url:this.buildUrl(t),query:n}))}buildUrl(t){return(this.options.base??"")+"/"+t}replace(t,n){this.history.replaceState({},"",mc.stringifyUrl({url:this.buildUrl(t),query:n}))}async getUrl(t){return`${this.location.host}/${t}`}get location(){return this.window.location}get window(){return this.options.window}get history(){return this.window.history}}function tT(){let e;if(window.location.port)e=parseInt(window.location.port,10);else switch(window.location.protocol){case"http:":{e=80;break}case"https:":{e=443;break}}return{host:window.location.hostname,port:e,path:"/private/ws/ipc",query:"",debugLabel:"ws"}}const n1=V.createContext(null);var r1={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var l in s)t.call(s,l)&&s[l]&&r.push(l)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(r1);var nT=r1.exports;const te=Dr(nT),rT="_hm-button_19t7o_2",iT="_primary_19t7o_12",sT="_icon_19t7o_28",oT="_text_19t7o_51",aT="_danger_19t7o_60",lT="_large_19t7o_74",uT="_small_19t7o_79",ra={"hm-button":"_hm-button_19t7o_2",hmButton:rT,primary:iT,icon:sT,text:oT,danger:aT,large:lT,small:uT};var i1={exports:{}},Co={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cT=T,s1=60103;Co.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var Ig=Symbol.for;s1=Ig("react.element"),Co.Fragment=Ig("react.fragment")}var fT=cT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dT=Object.prototype.hasOwnProperty,hT={key:!0,ref:!0,__self:!0,__source:!0};function o1(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)dT.call(t,r)&&!hT.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:s1,type:e,key:s,ref:o,props:i,_owner:fT.current}}Co.jsx=o1;Co.jsxs=o1;i1.exports=Co;var Gh=i1.exports;const O=Gh.jsx,ke=Gh.jsxs,a1=Gh.Fragment,pT=e=>O("button",{onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,type:e.htmlType||"button",onClick:t=>{e.disabled||e.onClick&&e.onClick(t)},style:e.style,disabled:e.disabled,className:te(ra.hmButton,ra[e.type||""],ra[e.size||""],{[ra.danger]:e.danger},e.className),children:e.children});var mT=["size","strokeWidth","strokeLinecap","strokeLinejoin","theme","fill","className","spin"];function Og(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Lg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Og(Object(n),!0).forEach(function(r){gT(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Og(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gT(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _T(e,t){if(e==null)return{};var n=vT(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function vT(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var yT={size:"1em",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round",rtl:!1,theme:"outline",colors:{outline:{fill:"#333",background:"transparent"},filled:{fill:"#333",background:"#FFF"},twoTone:{fill:"#333",twoTone:"#2F88FF"},multiColor:{outStrokeColor:"#333",outFillColor:"#2F88FF",innerStrokeColor:"#FFF",innerFillColor:"#43CCF8"}},prefix:"i"};function bT(){return"icon-"+((1+Math.random())*4294967296|0).toString(16).substring(1)}function wT(e,t,n){var r=typeof t.fill=="string"?[t.fill]:t.fill||[],i=[],s=t.theme||n.theme;switch(s){case"outline":i.push(typeof r[0]=="string"?r[0]:"currentColor"),i.push("none"),i.push(typeof r[0]=="string"?r[0]:"currentColor"),i.push("none");break;case"filled":i.push(typeof r[0]=="string"?r[0]:"currentColor"),i.push(typeof r[0]=="string"?r[0]:"currentColor"),i.push("#FFF"),i.push("#FFF");break;case"two-tone":i.push(typeof r[0]=="string"?r[0]:"currentColor"),i.push(typeof r[1]=="string"?r[1]:n.colors.twoTone.twoTone),i.push(typeof r[0]=="string"?r[0]:"currentColor"),i.push(typeof r[1]=="string"?r[1]:n.colors.twoTone.twoTone);break;case"multi-color":i.push(typeof r[0]=="string"?r[0]:"currentColor"),i.push(typeof r[1]=="string"?r[1]:n.colors.multiColor.outFillColor),i.push(typeof r[2]=="string"?r[2]:n.colors.multiColor.innerStrokeColor),i.push(typeof r[3]=="string"?r[3]:n.colors.multiColor.innerFillColor);break}return{size:t.size||n.size,strokeWidth:t.strokeWidth||n.strokeWidth,strokeLinecap:t.strokeLinecap||n.strokeLinecap,strokeLinejoin:t.strokeLinejoin||n.strokeLinejoin,colors:i,id:e}}var l1=T.createContext(yT);l1.Provider;function kn(e,t,n){return function(r){var i=r.size,s=r.strokeWidth,o=r.strokeLinecap,a=r.strokeLinejoin,l=r.theme,u=r.fill,c=r.className,d=r.spin,f=_T(r,mT),g=T.useContext(l1),b=T.useMemo(bT,[]),v=wT(b,{size:i,strokeWidth:s,strokeLinecap:o,strokeLinejoin:a,theme:l,fill:u},g),h=[g.prefix+"-icon"];return h.push(g.prefix+"-icon-"+e),t&&g.rtl&&h.push(g.prefix+"-icon-rtl"),d&&h.push(g.prefix+"-icon-spin"),c&&h.push(c),O("span",{...Lg(Lg({},f),{},{className:h.join(" ")}),children:n(v)})}}const ST=kn("close",!1,function(e){return V.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},V.createElement("path",{d:"M8 8L40 40",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),V.createElement("path",{d:"M8 40L40 8",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),ET=kn("down-one",!1,function(e){return V.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},V.createElement("path",{d:"M36 19L24 31L12 19H36Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}))}),xT=kn("handle-round",!1,function(e){return V.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},V.createElement("circle",{cx:"24",cy:"24",r:"20",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),V.createElement("circle",{cx:"24",cy:"24",r:"12",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),kT=kn("home",!1,function(e){return V.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},V.createElement("path",{d:"M9 18V42H39V18L24 6L9 18Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),V.createElement("path",{d:"M19 29V42H29V29H19Z",fill:e.colors[3],stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),V.createElement("path",{d:"M9 42H39",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap}))}),Ng=kn("like",!1,function(e){return V.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},V.createElement("path",{d:"M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),TT=kn("round",!1,function(e){return V.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},V.createElement("circle",{cx:"24",cy:"24",r:"20",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth}))}),RT=kn("search",!0,function(e){return V.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},V.createElement("path",{d:"M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),V.createElement("path",{d:"M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),V.createElement("path",{d:"M33.2216 33.2217L41.7069 41.707",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),AT=kn("up-one",!1,function(e){return V.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},V.createElement("path",{d:"M12 29L24 17L36 29H12Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}))}),IT=kn("web-page",!0,function(e){return V.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},V.createElement("rect",{x:"4",y:"8",width:"40",height:"32",rx:"3",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),V.createElement("path",{d:"M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth}),V.createElement("circle",{r:"2",transform:"matrix(-1.31134e-07 -1 -1 1.31134e-07 10 14)",fill:e.colors[2]}),V.createElement("circle",{r:"2",transform:"matrix(-1.31134e-07 -1 -1 1.31134e-07 16 14)",fill:e.colors[2]}))});function td(){return td=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},td.apply(this,arguments)}function Nr(e){return Nr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nr(e)}function OT(e,t){if(Nr(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Nr(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function LT(e){var t=OT(e,"string");return Nr(t)==="symbol"?t:String(t)}function dn(e,t,n){return t=LT(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Mg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function bl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mg(Object(n),!0).forEach(function(r){dn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Gr(e){return!!(e.addonBefore||e.addonAfter)}function gc(e){return!!(e.prefix||e.suffix||e.allowClear)}function Pg(e,t,n,r){if(n){var i=t;if(t.type==="click"){var s=e.cloneNode(!0);i=Object.create(t,{target:{value:s},currentTarget:{value:s}}),s.value="",n(i);return}if(r!==void 0){i=Object.create(t,{target:{value:e},currentTarget:{value:e}}),e.value=r,n(i);return}n(i)}}function NT(e,t){if(e){e.focus(t);var n=t||{},r=n.cursor;if(r){var i=e.value.length;switch(r){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(i,i);break;default:e.setSelectionRange(0,i)}}}}function Cg(e){return typeof e>"u"||e===null?"":String(e)}var MT=function(t){var n,r,i=t.inputElement,s=t.prefixCls,o=t.prefix,a=t.suffix,l=t.addonBefore,u=t.addonAfter,c=t.className,d=t.style,f=t.disabled,g=t.readOnly,b=t.focused,v=t.triggerFocus,h=t.allowClear,m=t.value,_=t.handleReset,y=t.hidden,p=t.classes,S=t.classNames,w=t.dataAttrs,E=t.styles,x=T.useRef(null),k=function(I){var M;(M=x.current)!==null&&M!==void 0&&M.contains(I.target)&&(v==null||v())},A=function(){var I;if(!h)return null;var M=!f&&!g&&m,F="".concat(s,"-clear-icon"),B=Nr(h)==="object"&&h!==null&&h!==void 0&&h.clearIcon?h.clearIcon:"✖";return O("span",{onClick:_,onMouseDown:function(Se){return Se.preventDefault()},className:te(F,(I={},dn(I,"".concat(F,"-hidden"),!M),dn(I,"".concat(F,"-has-suffix"),!!a),I)),role:"button",tabIndex:-1,children:B})},Y=T.cloneElement(i,{value:m,hidden:y,className:te((n=i.props)===null||n===void 0?void 0:n.className,!gc(t)&&!Gr(t)&&c)||null,style:bl(bl({},(r=i.props)===null||r===void 0?void 0:r.style),!gc(t)&&!Gr(t)?d:{})});if(gc(t)){var z,C="".concat(s,"-affix-wrapper"),L=te(C,(z={},dn(z,"".concat(C,"-disabled"),f),dn(z,"".concat(C,"-focused"),b),dn(z,"".concat(C,"-readonly"),g),dn(z,"".concat(C,"-input-with-clear-btn"),a&&h&&m),z),!Gr(t)&&c,p==null?void 0:p.affixWrapper),P=(a||h)&&ke("span",{className:te("".concat(s,"-suffix"),S==null?void 0:S.suffix),style:E==null?void 0:E.suffix,children:[A(),a]});Y=ke("span",{className:L,style:Gr(t)?void 0:d,hidden:!Gr(t)&&y,onClick:k,...w==null?void 0:w.affixWrapper,ref:x,children:[o&&O("span",{className:te("".concat(s,"-prefix"),S==null?void 0:S.prefix),style:E==null?void 0:E.prefix,children:o}),T.cloneElement(i,{value:m,hidden:null}),P]})}if(Gr(t)){var j="".concat(s,"-group"),N="".concat(j,"-addon"),H=te("".concat(s,"-wrapper"),j,p==null?void 0:p.wrapper),G=te("".concat(s,"-group-wrapper"),c,p==null?void 0:p.group);return O("span",{className:G,style:d,hidden:y,children:ke("span",{className:H,children:[l&&O("span",{className:N,children:l}),T.cloneElement(Y,{hidden:null}),u&&O("span",{className:N,children:u})]})})}return Y};function nd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function PT(e){if(Array.isArray(e))return nd(e)}function CT(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function u1(e,t){if(e){if(typeof e=="string")return nd(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nd(e,t)}}function DT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UT(e){return PT(e)||CT(e)||u1(e)||DT()}function FT(e){if(Array.isArray(e))return e}function $T(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,s,o,a=[],l=!0,u=!1;try{if(s=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=s.call(n)).done)&&(a.push(r.value),a.length!==t);l=!0);}catch(c){u=!0,i=c}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return a}}function BT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function po(e,t){return FT(e)||$T(e,t)||u1(e,t)||BT()}function VT(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function WT(e,t){if(e==null)return{};var n=VT(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Dg(e){var t=T.useRef();t.current=e;var n=T.useCallback(function(){for(var r,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return(r=t.current)===null||r===void 0?void 0:r.call.apply(r,[t].concat(s))},[]);return n}function jT(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var Ug=jT()?T.useLayoutEffect:T.useEffect,Fg=function(t,n){var r=T.useRef(!0);Ug(function(){if(!r.current)return t()},n),Ug(function(){return r.current=!1,function(){r.current=!0}},[])};function $g(e){var t=T.useRef(!1),n=T.useState(e),r=po(n,2),i=r[0],s=r[1];T.useEffect(function(){return t.current=!1,function(){t.current=!0}},[]);function o(a,l){l&&t.current||s(a)}return[i,o]}function _c(e){return e!==void 0}function zT(e,t){var n=t||{},r=n.defaultValue,i=n.value,s=n.onChange,o=n.postState,a=$g(function(){return _c(i)?i:_c(r)?typeof r=="function"?r():r:typeof e=="function"?e():e}),l=po(a,2),u=l[0],c=l[1],d=i!==void 0?i:u,f=o?o(d):d,g=Dg(s),b=$g([d]),v=po(b,2),h=v[0],m=v[1];Fg(function(){var y=h[0];u!==y&&g(u,y)},[h]),Fg(function(){_c(i)||c(i)},[i]);var _=Dg(function(y,p){c(y,p),m([d],p)});return[f,_]}function HT(e,t){var n=bl({},e);return Array.isArray(t)&&t.forEach(function(r){delete n[r]}),n}var GT=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","type","classes","classNames","styles"],qT=T.forwardRef(function(e,t){var n=e.autoComplete,r=e.onChange,i=e.onFocus,s=e.onBlur,o=e.onPressEnter,a=e.onKeyDown,l=e.prefixCls,u=l===void 0?"rc-input":l,c=e.disabled,d=e.htmlSize,f=e.className,g=e.maxLength,b=e.suffix,v=e.showCount,h=e.type,m=h===void 0?"text":h,_=e.classes,y=e.classNames,p=e.styles,S=WT(e,GT),w=zT(e.defaultValue,{value:e.value}),E=po(w,2),x=E[0],k=E[1],A=T.useState(!1),Y=po(A,2),z=Y[0],C=Y[1],L=T.useRef(null),P=function(B){L.current&&NT(L.current,B)};T.useImperativeHandle(t,function(){return{focus:P,blur:function(){var B;(B=L.current)===null||B===void 0||B.blur()},setSelectionRange:function(B,J,Se){var Ee;(Ee=L.current)===null||Ee===void 0||Ee.setSelectionRange(B,J,Se)},select:function(){var B;(B=L.current)===null||B===void 0||B.select()},input:L.current}}),T.useEffect(function(){C(function(F){return F&&c?!1:F})},[c]);var j=function(B){e.value===void 0&&k(B.target.value),L.current&&Pg(L.current,B,r)},N=function(B){o&&B.key==="Enter"&&o(B),a==null||a(B)},H=function(B){C(!0),i==null||i(B)},G=function(B){C(!1),s==null||s(B)},Q=function(B){k(""),P(),L.current&&Pg(L.current,B,r)},I=function(){var B=HT(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","classes","htmlSize","styles","classNames"]);return O("input",{autoComplete:n,...B,onChange:j,onFocus:H,onBlur:G,onKeyDown:N,className:te(u,dn({},"".concat(u,"-disabled"),c),y==null?void 0:y.input),style:p==null?void 0:p.input,ref:L,size:d,type:m})},M=function(){var B=Number(g)>0;if(b||v){var J=Cg(x),Se=UT(J).length,Ee=Nr(v)==="object"?v.formatter({value:J,count:Se,maxLength:g}):"".concat(Se).concat(B?" / ".concat(g):"");return ke(a1,{children:[!!v&&O("span",{className:te("".concat(u,"-show-count-suffix"),dn({},"".concat(u,"-show-count-has-suffix"),!!b),y==null?void 0:y.count),style:bl({},p==null?void 0:p.count),children:Ee}),b]})}return null};return O(MT,{...S,prefixCls:u,className:f,inputElement:I(),handleReset:Q,value:Cg(x),focused:z,triggerFocus:P,suffix:M(),disabled:c,classes:_,classNames:y,styles:p})});const YT=T.forwardRef((e,t)=>{const{id:n,type:r,onChange:i,prefix:s,placeholder:o,value:a,title:l,disabled:u,onFocus:c,onBlur:d,allowClear:f,size:g,...b}=e;return O(qT,{prefixCls:"bc-input",ref:t,id:n,type:r,onChange:v=>i==null?void 0:i(v.target.value),prefix:s,placeholder:o,value:a,title:l,disabled:u,onFocus:c,onBlur:d,className:te(e.className,e!=null&&e.size?`bc-input-${g}`:void 0,e.disabled?"bc-input-disabled":void 0),allowClear:f?{clearIcon:O(ST,{size:14})}:void 0,...b})}),QT="_main_v5s5p_1",XT="_container_v5s5p_10",KT="_header_v5s5p_18",ZT="_input_v5s5p_24",JT="_input-error_v5s5p_28",eR="_error_v5s5p_32",qr={main:QT,container:XT,header:KT,input:ZT,"input-error":"_input-error_v5s5p_28",inputError:JT,error:eR},tR=()=>{const[e,t]=T.useState(),[n,r]=T.useState(!1),i=async()=>{const s=await fetch("/private/api/login",{method:"post",body:e});s.status===200?window.location.reload():s.status===401&&r(!0)};return O("div",{className:qr.main,children:ke("div",{className:qr.container,children:[O("div",{className:qr.header,children:"Hamsterbase"}),ke("div",{className:te({[qr.input]:!0,[qr.inputError]:n}),children:[O(YT,{type:"password",placeholder:"Input your password",size:"large",onChange:s=>{t(s),r(!1)}}),n&&O("div",{className:qr.error,children:$("login.password_incorrect","Password incorrect")})]}),O(pT,{type:"primary",onClick:i,size:"large",disabled:!e,children:"Login"})]})})};function Mr(e){return T.useContext(n1).instantiationService.invokeFunction(r=>r.get(e))}const ou=!!(typeof window<"u"&&typeof document<"u"&&window.document&&window.document.createElement);ou&&document.addEventListener("touchstart",()=>{},!0);function qh(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})}function nR(e,t){function n(r,i){if(typeof r!="object"||typeof i!="object"||Array.isArray(r)||Array.isArray(i))return i!==void 0?i:r;const s={};for(const o in r)r.hasOwnProperty(o)&&(s[o]=n(r[o],i[o]));return s}return n(e,t)}const mt="${label} is not a valid ${type}",rR={locale:"en",common:{confirm:"Confirm",cancel:"Cancel",loading:"Loading",close:"Close"},Calendar:{markItems:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],renderYearAndMonth:(e,t)=>`${e}/${t}`},Cascader:{placeholder:"Selecting"},Dialog:{ok:"OK"},DatePicker:{tillNow:"Till Now"},ErrorBlock:{default:{title:"Oops, something went wrong",description:"Please wait a minute and try again"},busy:{title:"Oops, not loading",description:"Try to refresh the page"},disconnected:{title:"Network is busy",description:"Try to refresh the page"},empty:{title:"Hmm, couldn't find that...",description:"Want to try a new search?"}},Form:{required:"Required",optional:"Optional",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:mt,method:mt,array:mt,object:mt,number:mt,date:mt,boolean:mt,integer:mt,float:mt,regexp:mt,email:mt,url:mt,hex:mt},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},ImageUploader:{uploading:"Uploading...",upload:"Upload"},InfiniteScroll:{noMore:"No more",failedToLoad:"Failed to load",retry:"Retry"},Input:{clear:"clear"},Mask:{name:"Mask"},Modal:{ok:"OK"},PasscodeInput:{name:"Passcode Input"},PullToRefresh:{pulling:"Scroll down to refresh",canRelease:"Release to refresh immediately",complete:"Refresh successful"},SearchBar:{name:"Search Bar"},Slider:{name:"Slider"},Stepper:{decrease:"decrease",increase:"increase"},Switch:{name:"Switch"},Selector:{name:"Selector"}},gt="${label}不是一个有效的${type}",iR=nR(rR,{locale:"zh-CH",common:{confirm:"确定",cancel:"取消",loading:"加载中",close:"关闭"},Calendar:{markItems:["一","二","三","四","五","六","日"],renderYearAndMonth:(e,t)=>`${e}年${t}月`},Cascader:{placeholder:"请选择"},Dialog:{ok:"我知道了"},DatePicker:{tillNow:"至今"},ErrorBlock:{default:{title:"页面遇到一些小问题",description:"待会来试试"},busy:{title:"前方拥堵",description:"刷新试试"},disconnected:{title:"网络有点忙",description:"动动手指帮忙修复"},empty:{title:"没有找到你需要的东西",description:"找找其他的吧"}},Form:{required:"必填",optional:"选填",defaultValidateMessages:{default:"字段验证错误${label}",required:"请输入${label}",enum:"${label}必须是其中一个[${enum}]",whitespace:"${label}不能为空字符",date:{format:"${label}日期格式无效",parse:"${label}不能转换为日期",invalid:"${label}是一个无效日期"},types:{string:gt,method:gt,array:gt,object:gt,number:gt,date:gt,boolean:gt,integer:gt,float:gt,regexp:gt,email:gt,url:gt,hex:gt},string:{len:"${label}须为${len}个字符",min:"${label}最少${min}个字符",max:"${label}最多${max}个字符",range:"${label}须在${min}-${max}字符之间"},number:{len:"${label}必须等于${len}",min:"${label}最小值为${min}",max:"${label}最大值为${max}",range:"${label}须在${min}-${max}之间"},array:{len:"须为${len}个${label}",min:"最少${min}个${label}",max:"最多${max}个${label}",range:"${label}数量须在${min}-${max}之间"},pattern:{mismatch:"${label}与模式不匹配${pattern}"}}},ImageUploader:{uploading:"上传中...",upload:"上传"},InfiniteScroll:{noMore:"没有更多了",failedToLoad:"加载失败",retry:"重新加载"},Input:{clear:"清除"},Mask:{name:"背景蒙层"},Modal:{ok:"我知道了"},PasscodeInput:{name:"密码输入框"},PullToRefresh:{pulling:"下拉刷新",canRelease:"释放立即刷新",complete:"刷新成功"},SearchBar:{name:"搜索框"},Slider:{name:"滑动输入条"},Stepper:{decrease:"减少",increase:"增加"},Switch:{name:"开关"},Selector:{name:"选择组"}}),sR=iR,oR={current:{locale:sR}};function aR(){return oR.current}const lR=V.createContext(null);function Yh(){var e;return(e=T.useContext(lR))!==null&&e!==void 0?e:aR()}function Qh(e,t){const n=e;for(const r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);return n}function ht(e,t){const n=Object.assign({},t.props);e.className&&(n.className=te(t.props.className,e.className)),e.style&&(n.style=Object.assign(Object.assign({},n.style),e.style)),e.tabIndex!==void 0&&(n.tabIndex=e.tabIndex);for(const r in e)e.hasOwnProperty(r)&&(r.startsWith("data-")||r.startsWith("aria-"))&&(n[r]=e[r]);return V.cloneElement(t,n)}var uR=typeof _s=="object"&&_s&&_s.Object===Object&&_s,c1=uR,cR=c1,fR=typeof self=="object"&&self&&self.Object===Object&&self,dR=cR||fR||Function("return this")(),au=dR,hR=au,pR=hR.Symbol,f1=pR,Bg=f1,d1=Object.prototype,mR=d1.hasOwnProperty,gR=d1.toString,cs=Bg?Bg.toStringTag:void 0;function _R(e){var t=mR.call(e,cs),n=e[cs];try{e[cs]=void 0;var r=!0}catch{}var i=gR.call(e);return r&&(t?e[cs]=n:delete e[cs]),i}var vR=_R,yR=Object.prototype,bR=yR.toString;function wR(e){return bR.call(e)}var SR=wR,Vg=f1,ER=vR,xR=SR,kR="[object Null]",TR="[object Undefined]",Wg=Vg?Vg.toStringTag:void 0;function RR(e){return e==null?e===void 0?TR:kR:Wg&&Wg in Object(e)?ER(e):xR(e)}var lu=RR;function AR(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Hi=AR,IR=lu,OR=Hi,LR="[object AsyncFunction]",NR="[object Function]",MR="[object GeneratorFunction]",PR="[object Proxy]";function CR(e){if(!OR(e))return!1;var t=IR(e);return t==NR||t==MR||t==LR||t==PR}var h1=CR,DR=au,UR=DR["__core-js_shared__"],FR=UR,vc=FR,jg=function(){var e=/[^.]+$/.exec(vc&&vc.keys&&vc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function $R(e){return!!jg&&jg in e}var BR=$R,VR=Function.prototype,WR=VR.toString;function jR(e){if(e!=null){try{return WR.call(e)}catch{}try{return e+""}catch{}}return""}var zR=jR,HR=h1,GR=BR,qR=Hi,YR=zR,QR=/[\\^$.*+?()[\]{}|]/g,XR=/^\[object .+?Constructor\]$/,KR=Function.prototype,ZR=Object.prototype,JR=KR.toString,eA=ZR.hasOwnProperty,tA=RegExp("^"+JR.call(eA).replace(QR,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function nA(e){if(!qR(e)||GR(e))return!1;var t=HR(e)?tA:XR;return t.test(YR(e))}var rA=nA;function iA(e,t){return e==null?void 0:e[t]}var sA=iA,oA=rA,aA=sA;function lA(e,t){var n=aA(e,t);return oA(n)?n:void 0}var uA=lA,cA=uA,fA=function(){try{var e=cA(Object,"defineProperty");return e({},"",{}),e}catch{}}(),p1=fA,zg=p1;function dA(e,t,n){t=="__proto__"&&zg?zg(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var m1=dA;function hA(e,t){return e===t||e!==e&&t!==t}var g1=hA,pA=m1,mA=g1,gA=Object.prototype,_A=gA.hasOwnProperty;function vA(e,t,n){var r=e[t];(!(_A.call(e,t)&&mA(r,n))||n===void 0&&!(t in e))&&pA(e,t,n)}var yA=vA,bA=yA,wA=m1;function SA(e,t,n,r){var i=!n;n||(n={});for(var s=-1,o=t.length;++s<o;){var a=t[s],l=r?r(n[a],e[a],a,n,e):void 0;l===void 0&&(l=e[a]),i?wA(n,a,l):bA(n,a,l)}return n}var EA=SA;function xA(e){return e}var _1=xA;function kA(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var TA=kA,RA=TA,Hg=Math.max;function AA(e,t,n){return t=Hg(t===void 0?e.length-1:t,0),function(){for(var r=arguments,i=-1,s=Hg(r.length-t,0),o=Array(s);++i<s;)o[i]=r[t+i];i=-1;for(var a=Array(t+1);++i<t;)a[i]=r[i];return a[t]=n(o),RA(e,this,a)}}var IA=AA;function OA(e){return function(){return e}}var LA=OA,NA=LA,Gg=p1,MA=_1,PA=Gg?function(e,t){return Gg(e,"toString",{configurable:!0,enumerable:!1,value:NA(t),writable:!0})}:MA,CA=PA,DA=800,UA=16,FA=Date.now;function $A(e){var t=0,n=0;return function(){var r=FA(),i=UA-(r-n);if(n=r,i>0){if(++t>=DA)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var BA=$A,VA=CA,WA=BA,jA=WA(VA),zA=jA,HA=_1,GA=IA,qA=zA;function YA(e,t){return qA(GA(e,t,HA),e+"")}var QA=YA,XA=9007199254740991;function KA(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=XA}var v1=KA,ZA=h1,JA=v1;function eI(e){return e!=null&&JA(e.length)&&!ZA(e)}var y1=eI,tI=9007199254740991,nI=/^(?:0|[1-9]\d*)$/;function rI(e,t){var n=typeof e;return t=t??tI,!!t&&(n=="number"||n!="symbol"&&nI.test(e))&&e>-1&&e%1==0&&e<t}var b1=rI,iI=g1,sI=y1,oI=b1,aI=Hi;function lI(e,t,n){if(!aI(n))return!1;var r=typeof t;return(r=="number"?sI(n)&&oI(t,n.length):r=="string"&&t in n)?iI(n[t],e):!1}var uI=lI,cI=QA,fI=uI;function dI(e){return cI(function(t,n){var r=-1,i=n.length,s=i>1?n[i-1]:void 0,o=i>2?n[2]:void 0;for(s=e.length>3&&typeof s=="function"?(i--,s):void 0,o&&fI(n[0],n[1],o)&&(s=i<3?void 0:s,i=1),t=Object(t);++r<i;){var a=n[r];a&&e(t,a,r,s)}return t})}var hI=dI;function pI(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var mI=pI;function gI(e){return e!=null&&typeof e=="object"}var uu=gI,_I=lu,vI=uu,yI="[object Arguments]";function bI(e){return vI(e)&&_I(e)==yI}var wI=bI,qg=wI,SI=uu,w1=Object.prototype,EI=w1.hasOwnProperty,xI=w1.propertyIsEnumerable,kI=qg(function(){return arguments}())?qg:function(e){return SI(e)&&EI.call(e,"callee")&&!xI.call(e,"callee")},TI=kI,RI=Array.isArray,AI=RI,wl={exports:{}};function II(){return!1}var OI=II;wl.exports;(function(e,t){var n=au,r=OI,i=t&&!t.nodeType&&t,s=i&&!0&&e&&!e.nodeType&&e,o=s&&s.exports===i,a=o?n.Buffer:void 0,l=a?a.isBuffer:void 0,u=l||r;e.exports=u})(wl,wl.exports);var LI=wl.exports,NI=lu,MI=v1,PI=uu,CI="[object Arguments]",DI="[object Array]",UI="[object Boolean]",FI="[object Date]",$I="[object Error]",BI="[object Function]",VI="[object Map]",WI="[object Number]",jI="[object Object]",zI="[object RegExp]",HI="[object Set]",GI="[object String]",qI="[object WeakMap]",YI="[object ArrayBuffer]",QI="[object DataView]",XI="[object Float32Array]",KI="[object Float64Array]",ZI="[object Int8Array]",JI="[object Int16Array]",eO="[object Int32Array]",tO="[object Uint8Array]",nO="[object Uint8ClampedArray]",rO="[object Uint16Array]",iO="[object Uint32Array]",ge={};ge[XI]=ge[KI]=ge[ZI]=ge[JI]=ge[eO]=ge[tO]=ge[nO]=ge[rO]=ge[iO]=!0;ge[CI]=ge[DI]=ge[YI]=ge[UI]=ge[QI]=ge[FI]=ge[$I]=ge[BI]=ge[VI]=ge[WI]=ge[jI]=ge[zI]=ge[HI]=ge[GI]=ge[qI]=!1;function sO(e){return PI(e)&&MI(e.length)&&!!ge[NI(e)]}var oO=sO;function aO(e){return function(t){return e(t)}}var lO=aO,Sl={exports:{}};Sl.exports;(function(e,t){var n=c1,r=t&&!t.nodeType&&t,i=r&&!0&&e&&!e.nodeType&&e,s=i&&i.exports===r,o=s&&n.process,a=function(){try{var l=i&&i.require&&i.require("util").types;return l||o&&o.binding&&o.binding("util")}catch{}}();e.exports=a})(Sl,Sl.exports);var uO=Sl.exports,cO=oO,fO=lO,Yg=uO,Qg=Yg&&Yg.isTypedArray,dO=Qg?fO(Qg):cO,hO=dO,pO=mI,mO=TI,gO=AI,_O=LI,vO=b1,yO=hO,bO=Object.prototype,wO=bO.hasOwnProperty;function SO(e,t){var n=gO(e),r=!n&&mO(e),i=!n&&!r&&_O(e),s=!n&&!r&&!i&&yO(e),o=n||r||i||s,a=o?pO(e.length,String):[],l=a.length;for(var u in e)(t||wO.call(e,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||vO(u,l)))&&a.push(u);return a}var EO=SO,xO=Object.prototype;function kO(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||xO;return e===n}var TO=kO;function RO(e,t){return function(n){return e(t(n))}}var AO=RO,IO=AO,OO=IO(Object.keys,Object),LO=OO,NO=TO,MO=LO,PO=Object.prototype,CO=PO.hasOwnProperty;function DO(e){if(!NO(e))return MO(e);var t=[];for(var n in Object(e))CO.call(e,n)&&n!="constructor"&&t.push(n);return t}var UO=DO,FO=EO,$O=UO,BO=y1;function VO(e){return BO(e)?FO(e):$O(e)}var WO=VO,jO=EA,zO=hI,HO=WO,GO=zO(function(e,t,n,r){jO(t,HO(t),e,r)}),qO=GO;const YO=Dr(qO);function Wt(...e){function t(r,i){return i===void 0?r:i}let n=Object.assign({},e[0]);for(let r=1;r<e.length;r++)n=YO(n,e[r],t);return n}var QO=function(e){return function(t,n){var r=T.useRef(!1);e(function(){return function(){r.current=!1}},[]),e(function(){if(!r.current)r.current=!0;else return t()},n)}};function S1(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,s=[],o;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function XO(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var Xh=function(e){return typeof e=="function"},KO=!1;const Kh=KO;function Zh(e){Kh&&(Xh(e)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof e)));var t=T.useRef(e);t.current=T.useMemo(function(){return e},[e]);var n=T.useRef();return n.current||(n.current=function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];return t.current.apply(this,r)}),n.current}function E1(e){var t=T.useRef(e);return t.current=e,t}var ZO=function(e){Kh&&(Xh(e)||console.error("useUnmount expected parameter is a function, got ".concat(typeof e)));var t=E1(e);T.useEffect(function(){return function(){t.current()}},[])};const JO=ZO;var eL=au,tL=function(){return eL.Date.now()},nL=tL,rL=/\s/;function iL(e){for(var t=e.length;t--&&rL.test(e.charAt(t)););return t}var sL=iL,oL=sL,aL=/^\s+/;function lL(e){return e&&e.slice(0,oL(e)+1).replace(aL,"")}var uL=lL,cL=lu,fL=uu,dL="[object Symbol]";function hL(e){return typeof e=="symbol"||fL(e)&&cL(e)==dL}var pL=hL,mL=uL,Xg=Hi,gL=pL,Kg=0/0,_L=/^[-+]0x[0-9a-f]+$/i,vL=/^0b[01]+$/i,yL=/^0o[0-7]+$/i,bL=parseInt;function wL(e){if(typeof e=="number")return e;if(gL(e))return Kg;if(Xg(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Xg(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=mL(e);var n=vL.test(e);return n||yL.test(e)?bL(e.slice(2),n?2:8):_L.test(e)?Kg:+e}var SL=wL,EL=Hi,yc=nL,Zg=SL,xL="Expected a function",kL=Math.max,TL=Math.min;function RL(e,t,n){var r,i,s,o,a,l,u=0,c=!1,d=!1,f=!0;if(typeof e!="function")throw new TypeError(xL);t=Zg(t)||0,EL(n)&&(c=!!n.leading,d="maxWait"in n,s=d?kL(Zg(n.maxWait)||0,t):s,f="trailing"in n?!!n.trailing:f);function g(w){var E=r,x=i;return r=i=void 0,u=w,o=e.apply(x,E),o}function b(w){return u=w,a=setTimeout(m,t),c?g(w):o}function v(w){var E=w-l,x=w-u,k=t-E;return d?TL(k,s-x):k}function h(w){var E=w-l,x=w-u;return l===void 0||E>=t||E<0||d&&x>=s}function m(){var w=yc();if(h(w))return _(w);a=setTimeout(m,v(w))}function _(w){return a=void 0,f&&r?g(w):(r=i=void 0,o)}function y(){a!==void 0&&clearTimeout(a),u=0,r=l=i=a=void 0}function p(){return a===void 0?o:_(yc())}function S(){var w=yc(),E=h(w);if(r=arguments,i=this,l=w,E){if(a===void 0)return b(l);if(d)return clearTimeout(a),a=setTimeout(m,t),g(l)}return a===void 0&&(a=setTimeout(m,t)),o}return S.cancel=y,S.flush=p,S}var AL=RL,IL=!!(typeof window<"u"&&window.document&&window.document.createElement);const OL=IL;var LL=AL,NL=Hi,ML="Expected a function";function PL(e,t,n){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(ML);return NL(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),LL(e,t,{leading:r,maxWait:t,trailing:i})}var CL=PL;const DL=Dr(CL);var UL=function(){var e=S1(T.useState({}),2),t=e[1];return T.useCallback(function(){return t({})},[])};const FL=UL;var $L=OL?T.useLayoutEffect:T.useEffect;const mo=$L;var BL=function(){var e=T.useRef(!1);return T.useEffect(function(){return e.current=!1,function(){e.current=!0}},[]),e};const VL=BL;function WL(e,t){var n;Kh&&(Xh(e)||console.error("useThrottleFn expected parameter is a function, got ".concat(typeof e)));var r=E1(e),i=(n=t==null?void 0:t.wait)!==null&&n!==void 0?n:1e3,s=T.useMemo(function(){return DL(function(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];return r.current.apply(r,XO([],S1(o),!1))},i,t)},[]);return JO(function(){s.cancel()}),{run:s,cancel:s.cancel,flush:s.flush}}const Jg=10;function jL(e,t){return e>t&&e>Jg?"horizontal":t>e&&t>Jg?"vertical":""}function zL(){const e=T.useRef(0),t=T.useRef(0),n=T.useRef(0),r=T.useRef(0),i=T.useRef(0),s=T.useRef(0),o=T.useRef(""),a=()=>o.current==="vertical",l=()=>o.current==="horizontal",u=()=>{n.current=0,r.current=0,i.current=0,s.current=0,o.current=""};return{move:f=>{const g=f.touches[0];n.current=g.clientX<0?0:g.clientX-e.current,r.current=g.clientY-t.current,i.current=Math.abs(n.current),s.current=Math.abs(r.current),o.current||(o.current=jL(i.current,s.current))},start:f=>{u(),e.current=f.touches[0].clientX,t.current=f.touches[0].clientY},reset:u,startX:e,startY:t,deltaX:n,deltaY:r,offsetX:i,offsetY:s,direction:o,isVertical:a,isHorizontal:l}}const HL=ou?window:void 0,GL=["scroll","auto","overlay"];function qL(e){return e.nodeType===1}function YL(e,t=HL){let n=e;for(;n&&n!==t&&qL(n);){if(n===document.body)return t;const{overflowY:r}=window.getComputedStyle(n);if(GL.includes(r)&&n.scrollHeight>n.clientHeight)return n;n=n.parentNode}return t}let fs=0;const e_="adm-overflow-hidden";function QL(e){let t=e==null?void 0:e.parentElement;for(;t;){if(t.clientHeight<t.scrollHeight)return t;t=t.parentElement}return null}function XL(e,t){const n=zL(),r=o=>{n.move(o);const a=n.deltaY.current>0?"10":"01",l=YL(o.target,e.current);if(!l)return;if(t==="strict"){const g=QL(o.target);if(g===document.body||g===document.documentElement){o.preventDefault();return}}const{scrollHeight:u,offsetHeight:c,scrollTop:d}=l;let f="11";d===0?f=c>=u?"00":"01":d+c>=u&&(f="10"),f!=="11"&&n.isVertical()&&!(parseInt(f,2)&parseInt(a,2))&&o.cancelable&&o.preventDefault()},i=()=>{document.addEventListener("touchstart",n.start),document.addEventListener("touchmove",r,!1),fs||document.body.classList.add(e_),fs++},s=()=>{fs&&(document.removeEventListener("touchstart",n.start),document.removeEventListener("touchmove",r),fs--,fs||document.body.classList.remove(e_))};T.useEffect(()=>{if(t)return i(),()=>{s()}},[t])}let Jh=Uo();const K=e=>Do(e,Jh);let ep=Uo();K.write=e=>Do(e,ep);let cu=Uo();K.onStart=e=>Do(e,cu);let tp=Uo();K.onFrame=e=>Do(e,tp);let np=Uo();K.onFinish=e=>Do(e,np);let bi=[];K.setTimeout=(e,t)=>{let n=K.now()+t,r=()=>{let s=bi.findIndex(o=>o.cancel==r);~s&&bi.splice(s,1),Vn-=~s?1:0},i={time:n,handler:e,cancel:r};return bi.splice(x1(n),0,i),Vn+=1,k1(),i};let x1=e=>~(~bi.findIndex(t=>t.time>e)||~bi.length);K.cancel=e=>{cu.delete(e),tp.delete(e),np.delete(e),Jh.delete(e),ep.delete(e)};K.sync=e=>{rd=!0,K.batchedUpdates(e),rd=!1};K.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...i){t=i,K.onStart(n)}return r.handler=e,r.cancel=()=>{cu.delete(n),t=null},r};let rp=typeof window<"u"?window.requestAnimationFrame:()=>{};K.use=e=>rp=e;K.now=typeof performance<"u"?()=>performance.now():Date.now;K.batchedUpdates=e=>e();K.catch=console.error;K.frameLoop="always";K.advance=()=>{K.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):R1()};let Bn=-1,Vn=0,rd=!1;function Do(e,t){rd?(t.delete(e),e(0)):(t.add(e),k1())}function k1(){Bn<0&&(Bn=0,K.frameLoop!=="demand"&&rp(T1))}function KL(){Bn=-1}function T1(){~Bn&&(rp(T1),K.batchedUpdates(R1))}function R1(){let e=Bn;Bn=K.now();let t=x1(Bn);if(t&&(A1(bi.splice(0,t),n=>n.handler()),Vn-=t),!Vn){KL();return}cu.flush(),Jh.flush(e?Math.min(64,Bn-e):16.667),tp.flush(),ep.flush(),np.flush()}function Uo(){let e=new Set,t=e;return{add(n){Vn+=t==e&&!e.has(n)?1:0,e.add(n)},delete(n){return Vn-=t==e&&e.has(n)?1:0,e.delete(n)},flush(n){t.size&&(e=new Set,Vn-=t.size,A1(t,r=>r(n)&&e.add(r)),Vn+=e.size,t=e)}}}function A1(e,t){e.forEach(n=>{try{t(n)}catch(r){K.catch(r)}})}function id(){}const ZL=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),U={arr:Array.isArray,obj:e=>!!e&&e.constructor.name==="Object",fun:e=>typeof e=="function",str:e=>typeof e=="string",num:e=>typeof e=="number",und:e=>e===void 0};function un(e,t){if(U.arr(e)){if(!U.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const ee=(e,t)=>e.forEach(t);function Zt(e,t,n){if(U.arr(e)){for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);return}for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const _t=e=>U.und(e)?[]:U.arr(e)?e:[e];function Vs(e,t){if(e.size){const n=Array.from(e);e.clear(),ee(n,t)}}const xs=(e,...t)=>Vs(e,n=>n(...t)),ip=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let sp,I1,Zn=null,O1=!1,op=id;const JL=e=>{e.to&&(I1=e.to),e.now&&(K.now=e.now),e.colors!==void 0&&(Zn=e.colors),e.skipAnimation!=null&&(O1=e.skipAnimation),e.createStringInterpolator&&(sp=e.createStringInterpolator),e.requestAnimationFrame&&K.use(e.requestAnimationFrame),e.batchedUpdates&&(K.batchedUpdates=e.batchedUpdates),e.willAdvance&&(op=e.willAdvance),e.frameLoop&&(K.frameLoop=e.frameLoop)};var Jt=Object.freeze({__proto__:null,get createStringInterpolator(){return sp},get to(){return I1},get colors(){return Zn},get skipAnimation(){return O1},get willAdvance(){return op},assign:JL});const Ws=new Set;let kt=[],bc=[],El=0;const fu={get idle(){return!Ws.size&&!kt.length},start(e){El>e.priority?(Ws.add(e),K.onStart(eN)):(L1(e),K(sd))},advance:sd,sort(e){if(El)K.onFrame(()=>fu.sort(e));else{const t=kt.indexOf(e);~t&&(kt.splice(t,1),N1(e))}},clear(){kt=[],Ws.clear()}};function eN(){Ws.forEach(L1),Ws.clear(),K(sd)}function L1(e){kt.includes(e)||N1(e)}function N1(e){kt.splice(tN(kt,t=>t.priority>e.priority),0,e)}function sd(e){const t=bc;for(let n=0;n<kt.length;n++){const r=kt[n];El=r.priority,r.idle||(op(r),r.advance(e),r.idle||t.push(r))}return El=0,bc=kt,bc.length=0,kt=t,kt.length>0}function tN(e,t){const n=e.findIndex(t);return n<0?e.length:n}const nN=(e,t,n)=>Math.min(Math.max(n,e),t),rN={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},Vt="[-+]?\\d*\\.?\\d+",xl=Vt+"%";function du(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const iN=new RegExp("rgb"+du(Vt,Vt,Vt)),sN=new RegExp("rgba"+du(Vt,Vt,Vt,Vt)),oN=new RegExp("hsl"+du(Vt,xl,xl)),aN=new RegExp("hsla"+du(Vt,xl,xl,Vt)),lN=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,uN=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,cN=/^#([0-9a-fA-F]{6})$/,fN=/^#([0-9a-fA-F]{8})$/;function dN(e){let t;return typeof e=="number"?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=cN.exec(e))?parseInt(t[1]+"ff",16)>>>0:Zn&&Zn[e]!==void 0?Zn[e]:(t=iN.exec(e))?(Yr(t[1])<<24|Yr(t[2])<<16|Yr(t[3])<<8|255)>>>0:(t=sN.exec(e))?(Yr(t[1])<<24|Yr(t[2])<<16|Yr(t[3])<<8|r_(t[4]))>>>0:(t=lN.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=fN.exec(e))?parseInt(t[1],16)>>>0:(t=uN.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=oN.exec(e))?(t_(n_(t[1]),ia(t[2]),ia(t[3]))|255)>>>0:(t=aN.exec(e))?(t_(n_(t[1]),ia(t[2]),ia(t[3]))|r_(t[4]))>>>0:null}function wc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function t_(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,s=wc(i,r,e+1/3),o=wc(i,r,e),a=wc(i,r,e-1/3);return Math.round(s*255)<<24|Math.round(o*255)<<16|Math.round(a*255)<<8}function Yr(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function n_(e){return(parseFloat(e)%360+360)%360/360}function r_(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(t*255)}function ia(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function i_(e){let t=dN(e);if(t===null)return e;t=t||0;let n=(t&4278190080)>>>24,r=(t&16711680)>>>16,i=(t&65280)>>>8,s=(t&255)/255;return`rgba(${n}, ${r}, ${i}, ${s})`}const go=(e,t,n)=>{if(U.fun(e))return e;if(U.arr(e))return go({range:e,output:t,extrapolate:n});if(U.str(e.output[0]))return sp(e);const r=e,i=r.output,s=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",a=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(u=>u);return u=>{const c=pN(u,s);return hN(u,s[c],s[c+1],i[c],i[c+1],l,o,a,r.map)}};function hN(e,t,n,r,i,s,o,a,l){let u=l?l(e):e;if(u<t){if(o==="identity")return u;o==="clamp"&&(u=t)}if(u>n){if(a==="identity")return u;a==="clamp"&&(u=n)}return r===i?r:t===n?e<=t?r:i:(t===-1/0?u=-u:n===1/0?u=u-t:u=(u-t)/(n-t),u=s(u),r===-1/0?u=-u:i===1/0?u=u+r:u=u*(i-r)+r,u)}function pN(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}const mN=(e,t="end")=>n=>{n=t==="end"?Math.min(n,.999):Math.max(n,.001);const r=n*e,i=t==="end"?Math.floor(r):Math.ceil(r);return nN(0,1,i/e)},kl=1.70158,sa=kl*1.525,s_=kl+1,o_=2*Math.PI/3,a_=2*Math.PI/4.5,oa=e=>e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375,gN={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>e===0?0:Math.pow(2,10*e-10),easeOutExpo:e=>e===1?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>e===0?0:e===1?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>s_*e*e*e-kl*e*e,easeOutBack:e=>1+s_*Math.pow(e-1,3)+kl*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*((sa+1)*2*e-sa)/2:(Math.pow(2*e-2,2)*((sa+1)*(e*2-2)+sa)+2)/2,easeInElastic:e=>e===0?0:e===1?1:-Math.pow(2,10*e-10)*Math.sin((e*10-10.75)*o_),easeOutElastic:e=>e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin((e*10-.75)*o_)+1,easeInOutElastic:e=>e===0?0:e===1?1:e<.5?-(Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*a_))/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*a_)/2+1,easeInBounce:e=>1-oa(1-e),easeOutBounce:oa,easeInOutBounce:e=>e<.5?(1-oa(1-2*e))/2:(1+oa(2*e-1))/2,steps:mN};function od(){return od=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},od.apply(this,arguments)}const Oi=Symbol.for("FluidValue.get"),Pr=Symbol.for("FluidValue.observers"),St=e=>!!(e&&e[Oi]),ut=e=>e&&e[Oi]?e[Oi]():e,l_=e=>e[Pr]||null;function _N(e,t){e.eventObserved?e.eventObserved(t):e(t)}function _o(e,t){let n=e[Pr];n&&n.forEach(r=>{_N(r,t)})}class M1{constructor(t){if(this[Oi]=void 0,this[Pr]=void 0,!t&&!(t=this.get))throw Error("Unknown getter");vN(this,t)}}const vN=(e,t)=>P1(e,Oi,t);function Gi(e,t){if(e[Oi]){let n=e[Pr];n||P1(e,Pr,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function vo(e,t){let n=e[Pr];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Pr]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const P1=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Ua=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,yN=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,u_=new RegExp(`(${Ua.source})(%|[a-z]+)`,"i"),bN=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,hu=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,C1=e=>{const[t,n]=wN(e);if(!t||ip())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const i=window.getComputedStyle(document.documentElement).getPropertyValue(n);return i||e}else{if(n&&hu.test(n))return C1(n);if(n)return n}return e},wN=e=>{const t=hu.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let Sc;const SN=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,D1=e=>{Sc||(Sc=Zn?new RegExp(`(${Object.keys(Zn).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map(s=>ut(s).replace(hu,C1).replace(yN,i_).replace(Sc,i_)),n=t.map(s=>s.match(Ua).map(Number)),i=n[0].map((s,o)=>n.map(a=>{if(!(o in a))throw Error('The arity of each "output" value must be equal');return a[o]})).map(s=>go(od({},e,{output:s})));return s=>{var o;const a=!u_.test(t[0])&&((o=t.find(u=>u_.test(u)))==null?void 0:o.replace(Ua,""));let l=0;return t[0].replace(Ua,()=>`${i[l++](s)}${a||""}`).replace(bN,SN)}},ap="react-spring: ",U1=e=>{const t=e;let n=!1;if(typeof t!="function")throw new TypeError(`${ap}once requires a function parameter`);return(...r)=>{n||(t(...r),n=!0)}},EN=U1(console.warn);function xN(){EN(`${ap}The "interpolate" function is deprecated in v9 (use "to" instead)`)}const kN=U1(console.warn);function TN(){kN(`${ap}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function pu(e){return U.str(e)&&(e[0]=="#"||/\d/.test(e)||!ip()&&hu.test(e)||e in(Zn||{}))}const lp=ip()?T.useEffect:T.useLayoutEffect,RN=()=>{const e=T.useRef(!1);return lp(()=>(e.current=!0,()=>{e.current=!1}),[]),e};function F1(){const e=T.useState()[1],t=RN();return()=>{t.current&&e(Math.random())}}function AN(e,t){const[n]=T.useState(()=>({inputs:t,result:e()})),r=T.useRef(),i=r.current;let s=i;return s?t&&s.inputs&&IN(t,s.inputs)||(s={inputs:t,result:e()}):s=n,T.useEffect(()=>{r.current=s,i==n&&(n.inputs=n.result=void 0)},[s]),s.result}function IN(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}const $1=e=>T.useEffect(e,ON),ON=[];function c_(e){const t=T.useRef();return T.useEffect(()=>{t.current=e}),t.current}const yo=Symbol.for("Animated:node"),LN=e=>!!e&&e[yo]===e,Gt=e=>e&&e[yo],up=(e,t)=>ZL(e,yo,t),mu=e=>e&&e[yo]&&e[yo].getPayload();class B1{constructor(){this.payload=void 0,up(this,this)}getPayload(){return this.payload||[]}}class qi extends B1{constructor(t){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=t,U.num(this._value)&&(this.lastPosition=this._value)}static create(t){return new qi(t)}getPayload(){return[this]}getValue(){return this._value}setValue(t,n){return U.num(t)&&(this.lastPosition=t,n&&(t=Math.round(t/n)*n,this.done&&(this.lastPosition=t))),this._value===t?!1:(this._value=t,!0)}reset(){const{done:t}=this;this.done=!1,U.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,t&&(this.lastVelocity=null),this.v0=null)}}class Li extends qi{constructor(t){super(0),this._string=null,this._toString=void 0,this._toString=go({output:[t,t]})}static create(t){return new Li(t)}getValue(){let t=this._string;return t??(this._string=this._toString(this._value))}setValue(t){if(U.str(t)){if(t==this._string)return!1;this._string=t,this._value=1}else if(super.setValue(t))this._string=null;else return!1;return!0}reset(t){t&&(this._toString=go({output:[this.getValue(),t]})),this._value=0,super.reset()}}const Tl={dependencies:null};class gu extends B1{constructor(t){super(),this.source=t,this.setValue(t)}getValue(t){const n={};return Zt(this.source,(r,i)=>{LN(r)?n[i]=r.getValue(t):St(r)?n[i]=ut(r):t||(n[i]=r)}),n}setValue(t){this.source=t,this.payload=this._makePayload(t)}reset(){this.payload&&ee(this.payload,t=>t.reset())}_makePayload(t){if(t){const n=new Set;return Zt(t,this._addToPayload,n),Array.from(n)}}_addToPayload(t){Tl.dependencies&&St(t)&&Tl.dependencies.add(t);const n=mu(t);n&&ee(n,r=>this.add(r))}}class cp extends gu{constructor(t){super(t)}static create(t){return new cp(t)}getValue(){return this.source.map(t=>t.getValue())}setValue(t){const n=this.getPayload();return t.length==n.length?n.map((r,i)=>r.setValue(t[i])).some(Boolean):(super.setValue(t.map(NN)),!0)}}function NN(e){return(pu(e)?Li:qi).create(e)}function ad(e){const t=Gt(e);return t?t.constructor:U.arr(e)?cp:pu(e)?Li:qi}function Rl(){return Rl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rl.apply(this,arguments)}const f_=(e,t)=>{const n=!U.fun(e)||e.prototype&&e.prototype.isReactComponent;return T.forwardRef((r,i)=>{const s=T.useRef(null),o=n&&T.useCallback(b=>{s.current=CN(i,b)},[i]),[a,l]=PN(r,t),u=F1(),c=()=>{const b=s.current;if(n&&!b)return;(b?t.applyAnimatedValues(b,a.getValue(!0)):!1)===!1&&u()},d=new MN(c,l),f=T.useRef();lp(()=>(f.current=d,ee(l,b=>Gi(b,d)),()=>{f.current&&(ee(f.current.deps,b=>vo(b,f.current)),K.cancel(f.current.update))})),T.useEffect(c,[]),$1(()=>()=>{const b=f.current;ee(b.deps,v=>vo(v,b))});const g=t.getComponentProps(a.getValue());return T.createElement(e,Rl({},g,{ref:o}))})};class MN{constructor(t,n){this.update=t,this.deps=n}eventObserved(t){t.type=="change"&&K.write(this.update)}}function PN(e,t){const n=new Set;return Tl.dependencies=n,e.style&&(e=Rl({},e,{style:t.createAnimatedStyle(e.style)})),e=new gu(e),Tl.dependencies=null,[e,n]}function CN(e,t){return e&&(U.fun(e)?e(t):e.current=t),t}const d_=Symbol.for("AnimatedComponent"),DN=(e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:n=i=>new gu(i),getComponentProps:r=i=>i}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},s=o=>{const a=h_(o)||"Anonymous";return U.str(o)?o=s[o]||(s[o]=f_(o,i)):o=o[d_]||(o[d_]=f_(o,i)),o.displayName=`Animated(${a})`,o};return Zt(e,(o,a)=>{U.arr(e)&&(a=h_(o)),s[a]=s(o)}),{animated:s}},h_=e=>U.str(e)?e:e&&U.str(e.displayName)?e.displayName:U.fun(e)&&e.name||null;function Fe(){return Fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fe.apply(this,arguments)}function hr(e,...t){return U.fun(e)?e(...t):e}const js=(e,t)=>e===!0||!!(t&&e&&(U.fun(e)?e(t):_t(e).includes(t))),V1=(e,t)=>U.obj(e)?t&&e[t]:e,W1=(e,t)=>e.default===!0?e[t]:e.default?e.default[t]:void 0,UN=e=>e,fp=(e,t=UN)=>{let n=FN;e.default&&e.default!==!0&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const s=t(e[i],i);U.und(s)||(r[i]=s)}return r},FN=["config","onProps","onStart","onChange","onPause","onResume","onRest"],$N={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function BN(e){const t={};let n=0;if(Zt(e,(r,i)=>{$N[i]||(t[i]=r,n++)}),n)return t}function j1(e){const t=BN(e);if(t){const n={to:t};return Zt(e,(r,i)=>i in t||(n[i]=r)),n}return Fe({},e)}function bo(e){return e=ut(e),U.arr(e)?e.map(bo):pu(e)?Jt.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function VN(e){for(const t in e)return!0;return!1}function ld(e){return U.fun(e)||U.arr(e)&&U.obj(e[0])}function WN(e,t){var n;(n=e.ref)==null||n.delete(e),t==null||t.delete(e)}function jN(e,t){if(t&&e.ref!==t){var n;(n=e.ref)==null||n.delete(e),t.add(e),e.ref=t}}const zN={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},ud=Fe({},zN.default,{mass:1,damping:1,easing:gN.linear,clamp:!1});class HN{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,ud)}}function GN(e,t,n){n&&(n=Fe({},n),p_(n,t),t=Fe({},n,t)),p_(e,t),Object.assign(e,t);for(const o in ud)e[o]==null&&(e[o]=ud[o]);let{mass:r,frequency:i,damping:s}=e;return U.und(i)||(i<.01&&(i=.01),s<0&&(s=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*s*r/i),e}function p_(e,t){if(!U.und(t.decay))e.duration=void 0;else{const n=!U.und(t.tension)||!U.und(t.friction);(n||!U.und(t.frequency)||!U.und(t.damping)||!U.und(t.mass))&&(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}}const m_=[];class qN{constructor(){this.changed=!1,this.values=m_,this.toValues=null,this.fromValues=m_,this.to=void 0,this.from=void 0,this.config=new HN,this.immediate=!1}}function z1(e,{key:t,props:n,defaultProps:r,state:i,actions:s}){return new Promise((o,a)=>{var l;let u,c,d=js((l=n.cancel)!=null?l:r==null?void 0:r.cancel,t);if(d)b();else{U.und(n.pause)||(i.paused=js(n.pause,t));let v=r==null?void 0:r.pause;v!==!0&&(v=i.paused||js(v,t)),u=hr(n.delay||0,t),v?(i.resumeQueue.add(g),s.pause()):(s.resume(),g())}function f(){i.resumeQueue.add(g),i.timeouts.delete(c),c.cancel(),u=c.time-K.now()}function g(){u>0&&!Jt.skipAnimation?(i.delayed=!0,c=K.setTimeout(b,u),i.pauseQueue.add(f),i.timeouts.add(c)):b()}function b(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(f),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{s.start(Fe({},n,{callId:e,cancel:d}),o)}catch(v){a(v)}}})}const dp=(e,t)=>t.length==1?t[0]:t.some(n=>n.cancelled)?wi(e.get()):t.every(n=>n.noop)?H1(e.get()):Dt(e.get(),t.every(n=>n.finished)),H1=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Dt=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),wi=e=>({value:e,cancelled:!0,finished:!1});function G1(e,t,n,r){const{callId:i,parentId:s,onRest:o}=t,{asyncTo:a,promise:l}=n;return!s&&e===a&&!t.reset?l:n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const u=fp(t,(h,m)=>m==="onRest"?void 0:h);let c,d;const f=new Promise((h,m)=>(c=h,d=m)),g=h=>{const m=i<=(n.cancelId||0)&&wi(r)||i!==n.asyncId&&Dt(r,!1);if(m)throw h.result=m,d(h),h},b=(h,m)=>{const _=new g_,y=new __;return(async()=>{if(Jt.skipAnimation)throw wo(n),y.result=Dt(r,!1),d(y),y;g(_);const p=U.obj(h)?Fe({},h):Fe({},m,{to:h});p.parentId=i,Zt(u,(w,E)=>{U.und(p[E])&&(p[E]=w)});const S=await r.start(p);return g(_),n.paused&&await new Promise(w=>{n.resumeQueue.add(w)}),S})()};let v;if(Jt.skipAnimation)return wo(n),Dt(r,!1);try{let h;U.arr(e)?h=(async m=>{for(const _ of m)await b(_)})(e):h=Promise.resolve(e(b,r.stop.bind(r))),await Promise.all([h.then(c),f]),v=Dt(r.get(),!0,!1)}catch(h){if(h instanceof g_)v=h.result;else if(h instanceof __)v=h.result;else throw h}finally{i==n.asyncId&&(n.asyncId=s,n.asyncTo=s?a:void 0,n.promise=s?l:void 0)}return U.fun(o)&&K.batchedUpdates(()=>{o(v,r,r.item)}),v})()}function wo(e,t){Vs(e.timeouts,n=>n.cancel()),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class g_ extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class __ extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const cd=e=>e instanceof hp;let YN=1;class hp extends M1{constructor(...t){super(...t),this.id=YN++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(t){this._priority!=t&&(this._priority=t,this._onPriorityChange(t))}get(){const t=Gt(this);return t&&t.getValue()}to(...t){return Jt.to(this,t)}interpolate(...t){return xN(),Jt.to(this,t)}toJSON(){return this.get()}observerAdded(t){t==1&&this._attach()}observerRemoved(t){t==0&&this._detach()}_attach(){}_detach(){}_onChange(t,n=!1){_o(this,{type:"change",parent:this,value:t,idle:n})}_onPriorityChange(t){this.idle||fu.sort(this),_o(this,{type:"priority",parent:this,priority:t})}}const Cr=Symbol.for("SpringPhase"),q1=1,fd=2,dd=4,Ec=e=>(e[Cr]&q1)>0,Ln=e=>(e[Cr]&fd)>0,ds=e=>(e[Cr]&dd)>0,v_=(e,t)=>t?e[Cr]|=fd|q1:e[Cr]&=~fd,y_=(e,t)=>t?e[Cr]|=dd:e[Cr]&=~dd;class QN extends hp{constructor(t,n){if(super(),this.key=void 0,this.animation=new qN,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!U.und(t)||!U.und(n)){const r=U.obj(t)?Fe({},t):Fe({},n,{from:t});U.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(Ln(this)||this._state.asyncTo)||ds(this)}get goal(){return ut(this.animation.to)}get velocity(){const t=Gt(this);return t instanceof qi?t.lastVelocity||0:t.getPayload().map(n=>n.lastVelocity||0)}get hasAnimated(){return Ec(this)}get isAnimating(){return Ln(this)}get isPaused(){return ds(this)}get isDelayed(){return this._state.delayed}advance(t){let n=!0,r=!1;const i=this.animation;let{config:s,toValues:o}=i;const a=mu(i.to);!a&&St(i.to)&&(o=_t(ut(i.to))),i.values.forEach((c,d)=>{if(c.done)return;const f=c.constructor==Li?1:a?a[d].lastPosition:o[d];let g=i.immediate,b=f;if(!g){if(b=c.lastPosition,s.tension<=0){c.done=!0;return}let v=c.elapsedTime+=t;const h=i.fromValues[d],m=c.v0!=null?c.v0:c.v0=U.arr(s.velocity)?s.velocity[d]:s.velocity;let _;const y=s.precision||(h==f?.005:Math.min(1,Math.abs(f-h)*.001));if(U.und(s.duration))if(s.decay){const p=s.decay===!0?.998:s.decay,S=Math.exp(-(1-p)*v);b=h+m/(1-p)*(1-S),g=Math.abs(c.lastPosition-b)<=y,_=m*S}else{_=c.lastVelocity==null?m:c.lastVelocity;const p=s.restVelocity||y/10,S=s.clamp?0:s.bounce,w=!U.und(S),E=h==f?c.v0>0:h<f;let x,k=!1;const A=1,Y=Math.ceil(t/A);for(let z=0;z<Y&&(x=Math.abs(_)>p,!(!x&&(g=Math.abs(f-b)<=y,g)));++z){w&&(k=b==f||b>f==E,k&&(_=-_*S,b=f));const C=-s.tension*1e-6*(b-f),L=-s.friction*.001*_,P=(C+L)/s.mass;_=_+P*A,b=b+_*A}}else{let p=1;s.duration>0&&(this._memoizedDuration!==s.duration&&(this._memoizedDuration=s.duration,c.durationProgress>0&&(c.elapsedTime=s.duration*c.durationProgress,v=c.elapsedTime+=t)),p=(s.progress||0)+v/this._memoizedDuration,p=p>1?1:p<0?0:p,c.durationProgress=p),b=h+s.easing(p)*(f-h),_=(b-c.lastPosition)/t,g=p==1}c.lastVelocity=_,Number.isNaN(b)&&(console.warn("Got NaN while animating:",this),g=!0)}a&&!a[d].done&&(g=!1),g?c.done=!0:n=!1,c.setValue(b,s.round)&&(r=!0)});const l=Gt(this),u=l.getValue();if(n){const c=ut(i.to);(u!==c||r)&&!s.decay?(l.setValue(c),this._onChange(c)):r&&s.decay&&this._onChange(u),this._stop()}else r&&this._onChange(u)}set(t){return K.batchedUpdates(()=>{this._stop(),this._focus(t),this._set(t)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Ln(this)){const{to:t,config:n}=this.animation;K.batchedUpdates(()=>{this._onStart(),n.decay||this._set(t,!1),this._stop()})}return this}update(t){return(this.queue||(this.queue=[])).push(t),this}start(t,n){let r;return U.und(t)?(r=this.queue||[],this.queue=[]):r=[U.obj(t)?t:Fe({},n,{to:t})],Promise.all(r.map(i=>this._update(i))).then(i=>dp(this,i))}stop(t){const{to:n}=this.animation;return this._focus(this.get()),wo(this._state,t&&this._lastCallId),K.batchedUpdates(()=>this._stop(n,t)),this}reset(){this._update({reset:!0})}eventObserved(t){t.type=="change"?this._start():t.type=="priority"&&(this.priority=t.priority+1)}_prepareNode(t){const n=this.key||"";let{to:r,from:i}=t;r=U.obj(r)?r[n]:r,(r==null||ld(r))&&(r=void 0),i=U.obj(i)?i[n]:i,i==null&&(i=void 0);const s={to:r,from:i};return Ec(this)||(t.reverse&&([r,i]=[i,r]),i=ut(i),U.und(i)?Gt(this)||this._set(r):this._set(i)),s}_update(t,n){let r=Fe({},t);const{key:i,defaultProps:s}=this;r.default&&Object.assign(s,fp(r,(l,u)=>/^on/.test(u)?V1(l,i):l)),w_(this,r,"onProps"),ps(this,"onProps",r,this);const o=this._prepareNode(r);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return z1(++this._lastCallId,{key:i,props:r,defaultProps:s,state:a,actions:{pause:()=>{ds(this)||(y_(this,!0),xs(a.pauseQueue),ps(this,"onPause",Dt(this,hs(this,this.animation.to)),this))},resume:()=>{ds(this)&&(y_(this,!1),Ln(this)&&this._resume(),xs(a.resumeQueue),ps(this,"onResume",Dt(this,hs(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then(l=>{if(r.loop&&l.finished&&!(n&&l.noop)){const u=Y1(r);if(u)return this._update(u,!0)}return l})}_merge(t,n,r){if(n.cancel)return this.stop(!0),r(wi(this));const i=!U.und(t.to),s=!U.und(t.from);if(i||s)if(n.callId>this._lastToId)this._lastToId=n.callId;else return r(wi(this));const{key:o,defaultProps:a,animation:l}=this,{to:u,from:c}=l;let{to:d=u,from:f=c}=t;s&&!i&&(!n.default||U.und(d))&&(d=f),n.reverse&&([d,f]=[f,d]);const g=!un(f,c);g&&(l.from=f),f=ut(f);const b=!un(d,u);b&&this._focus(d);const v=ld(n.to),{config:h}=l,{decay:m,velocity:_}=h;(i||s)&&(h.velocity=0),n.config&&!v&&GN(h,hr(n.config,o),n.config!==a.config?hr(a.config,o):void 0);let y=Gt(this);if(!y||U.und(d))return r(Dt(this,!0));const p=U.und(n.reset)?s&&!n.default:!U.und(f)&&js(n.reset,o),S=p?f:this.get(),w=bo(d),E=U.num(w)||U.arr(w)||pu(w),x=!v&&(!E||js(a.immediate||n.immediate,o));if(b){const z=ad(d);if(z!==y.constructor)if(x)y=this._set(w);else throw Error(`Cannot animate between ${y.constructor.name} and ${z.name}, as the "to" prop suggests`)}const k=y.constructor;let A=St(d),Y=!1;if(!A){const z=p||!Ec(this)&&g;(b||z)&&(Y=un(bo(S),w),A=!Y),(!un(l.immediate,x)&&!x||!un(h.decay,m)||!un(h.velocity,_))&&(A=!0)}if(Y&&Ln(this)&&(l.changed&&!p?A=!0:A||this._stop(u)),!v&&((A||St(u))&&(l.values=y.getPayload(),l.toValues=St(d)?null:k==Li?[1]:_t(w)),l.immediate!=x&&(l.immediate=x,!x&&!p&&this._set(u)),A)){const{onRest:z}=l;ee(KN,L=>w_(this,n,L));const C=Dt(this,hs(this,u));xs(this._pendingCalls,C),this._pendingCalls.add(r),l.changed&&K.batchedUpdates(()=>{l.changed=!p,z==null||z(C,this),p?hr(a.onRest,C):l.onStart==null||l.onStart(C,this)})}p&&this._set(S),v?r(G1(n.to,n,this._state,this)):A?this._start():Ln(this)&&!b?this._pendingCalls.add(r):r(H1(S))}_focus(t){const n=this.animation;t!==n.to&&(l_(this)&&this._detach(),n.to=t,l_(this)&&this._attach())}_attach(){let t=0;const{to:n}=this.animation;St(n)&&(Gi(n,this),cd(n)&&(t=n.priority+1)),this.priority=t}_detach(){const{to:t}=this.animation;St(t)&&vo(t,this)}_set(t,n=!0){const r=ut(t);if(!U.und(r)){const i=Gt(this);if(!i||!un(r,i.getValue())){const s=ad(r);!i||i.constructor!=s?up(this,s.create(r)):i.setValue(r),i&&K.batchedUpdates(()=>{this._onChange(r,n)})}}return Gt(this)}_onStart(){const t=this.animation;t.changed||(t.changed=!0,ps(this,"onStart",Dt(this,hs(this,t.to)),this))}_onChange(t,n){n||(this._onStart(),hr(this.animation.onChange,t,this)),hr(this.defaultProps.onChange,t,this),super._onChange(t,n)}_start(){const t=this.animation;Gt(this).reset(ut(t.to)),t.immediate||(t.fromValues=t.values.map(n=>n.lastPosition)),Ln(this)||(v_(this,!0),ds(this)||this._resume())}_resume(){Jt.skipAnimation?this.finish():fu.start(this)}_stop(t,n){if(Ln(this)){v_(this,!1);const r=this.animation;ee(r.values,s=>{s.done=!0}),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),_o(this,{type:"idle",parent:this});const i=n?wi(this.get()):Dt(this.get(),hs(this,t??r.to));xs(this._pendingCalls,i),r.changed&&(r.changed=!1,ps(this,"onRest",i,this))}}}function hs(e,t){const n=bo(t),r=bo(e.get());return un(r,n)}function Y1(e,t=e.loop,n=e.to){let r=hr(t);if(r){const i=r!==!0&&j1(r),s=(i||e).reverse,o=!i||i.reset;return So(Fe({},e,{loop:t,default:!1,pause:void 0,to:!s||ld(n)?n:void 0,from:o?e.from:void 0,reset:o},i))}}function So(e){const{to:t,from:n}=e=j1(e),r=new Set;return U.obj(t)&&b_(t,r),U.obj(n)&&b_(n,r),e.keys=r.size?Array.from(r):null,e}function XN(e){const t=So(e);return U.und(t.default)&&(t.default=fp(t)),t}function b_(e,t){Zt(e,(n,r)=>n!=null&&t.add(r))}const KN=["onStart","onRest","onChange","onPause","onResume"];function w_(e,t,n){e.animation[n]=t[n]!==W1(t,n)?V1(t[n],e.key):void 0}function ps(e,t,...n){var r,i,s,o;(r=(i=e.animation)[t])==null||r.call(i,...n),(s=(o=e.defaultProps)[t])==null||s.call(o,...n)}const ZN=["onStart","onChange","onRest"];let JN=1;class eM{constructor(t,n){this.id=JN++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),n&&(this._flush=n),t&&this.start(Fe({default:!0},t))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(t=>t.idle&&!t.isDelayed&&!t.isPaused)}get item(){return this._item}set item(t){this._item=t}get(){const t={};return this.each((n,r)=>t[r]=n.get()),t}set(t){for(const n in t){const r=t[n];U.und(r)||this.springs[n].set(r)}}update(t){return t&&this.queue.push(So(t)),this}start(t){let{queue:n}=this;return t?n=_t(t).map(So):this.queue=[],this._flush?this._flush(this,n):(J1(this,n),hd(this,n))}stop(t,n){if(t!==!!t&&(n=t),n){const r=this.springs;ee(_t(n),i=>r[i].stop(!!t))}else wo(this._state,this._lastAsyncId),this.each(r=>r.stop(!!t));return this}pause(t){if(U.und(t))this.start({pause:!0});else{const n=this.springs;ee(_t(t),r=>n[r].pause())}return this}resume(t){if(U.und(t))this.start({pause:!1});else{const n=this.springs;ee(_t(t),r=>n[r].resume())}return this}each(t){Zt(this.springs,t)}_onFrame(){const{onStart:t,onChange:n,onRest:r}=this._events,i=this._active.size>0,s=this._changed.size>0;(i&&!this._started||s&&!this._started)&&(this._started=!0,Vs(t,([l,u])=>{u.value=this.get(),l(u,this,this._item)}));const o=!i&&this._started,a=s||o&&r.size?this.get():null;s&&n.size&&Vs(n,([l,u])=>{u.value=a,l(u,this,this._item)}),o&&(this._started=!1,Vs(r,([l,u])=>{u.value=a,l(u,this,this._item)}))}eventObserved(t){if(t.type=="change")this._changed.add(t.parent),t.idle||this._active.add(t.parent);else if(t.type=="idle")this._active.delete(t.parent);else return;K.onFrame(this._onFrame)}}function hd(e,t){return Promise.all(t.map(n=>Q1(e,n))).then(n=>dp(e,n))}async function Q1(e,t,n){const{keys:r,to:i,from:s,loop:o,onRest:a,onResolve:l}=t,u=U.obj(t.default)&&t.default;o&&(t.loop=!1),i===!1&&(t.to=null),s===!1&&(t.from=null);const c=U.arr(i)||U.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):ee(ZN,v=>{const h=t[v];if(U.fun(h)){const m=e._events[v];t[v]=({finished:_,cancelled:y})=>{const p=m.get(h);p?(_||(p.finished=!1),y&&(p.cancelled=!0)):m.set(h,{value:null,finished:_||!1,cancelled:y||!1})},u&&(u[v]=t[v])}});const d=e._state;t.pause===!d.paused?(d.paused=t.pause,xs(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const f=(r||Object.keys(e.springs)).map(v=>e.springs[v].start(t)),g=t.cancel===!0||W1(t,"cancel")===!0;(c||g&&d.asyncId)&&f.push(z1(++e._lastAsyncId,{props:t,state:d,actions:{pause:id,resume:id,start(v,h){g?(wo(d,e._lastAsyncId),h(wi(e))):(v.onRest=a,h(G1(c,v,d,e)))}}})),d.paused&&await new Promise(v=>{d.resumeQueue.add(v)});const b=dp(e,await Promise.all(f));if(o&&b.finished&&!(n&&b.noop)){const v=Y1(t,o,i);if(v)return J1(e,[v]),Q1(e,v,!0)}return l&&K.batchedUpdates(()=>l(b,e,e.item)),b}function S_(e,t){const n=Fe({},e.springs);return t&&ee(_t(t),r=>{U.und(r.keys)&&(r=So(r)),U.obj(r.to)||(r=Fe({},r,{to:void 0})),Z1(n,r,i=>K1(i))}),X1(e,n),n}function X1(e,t){Zt(t,(n,r)=>{e.springs[r]||(e.springs[r]=n,Gi(n,e))})}function K1(e,t){const n=new QN;return n.key=e,t&&Gi(n,t),n}function Z1(e,t,n){t.keys&&ee(t.keys,r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)})}function J1(e,t){ee(t,n=>{Z1(e.springs,n,r=>K1(r,e))})}function tM(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const nM=["children"],_u=e=>{let{children:t}=e,n=tM(e,nM);const r=T.useContext(Al),i=n.pause||!!r.pause,s=n.immediate||!!r.immediate;n=AN(()=>({pause:i,immediate:s}),[i,s]);const{Provider:o}=Al;return T.createElement(o,{value:n},t)},Al=rM(_u,{});_u.Provider=Al.Provider;_u.Consumer=Al.Consumer;function rM(e,t){return Object.assign(e,T.createContext(t)),e.Provider._context=e,e.Consumer._context=e,e}const iM=()=>{const e=[],t=function(i){TN();const s=[];return ee(e,(o,a)=>{if(U.und(i))s.push(o.start());else{const l=n(i,o,a);l&&s.push(o.start(l))}}),s};t.current=e,t.add=function(r){e.includes(r)||e.push(r)},t.delete=function(r){const i=e.indexOf(r);~i&&e.splice(i,1)},t.pause=function(){return ee(e,r=>r.pause(...arguments)),this},t.resume=function(){return ee(e,r=>r.resume(...arguments)),this},t.set=function(r){ee(e,i=>i.set(r))},t.start=function(r){const i=[];return ee(e,(s,o)=>{if(U.und(r))i.push(s.start());else{const a=this._getProps(r,s,o);a&&i.push(s.start(a))}}),i},t.stop=function(){return ee(e,r=>r.stop(...arguments)),this},t.update=function(r){return ee(e,(i,s)=>i.update(this._getProps(r,i,s))),this};const n=function(i,s,o){return U.fun(i)?i(o,s):i};return t._getProps=n,t};function sM(e,t,n){const r=U.fun(t)&&t;r&&!n&&(n=[]);const i=T.useMemo(()=>r||arguments.length==3?iM():void 0,[]),s=T.useRef(0),o=F1(),a=T.useMemo(()=>({ctrls:[],queue:[],flush(m,_){const y=S_(m,_);return s.current>0&&!a.queue.length&&!Object.keys(y).some(S=>!m.springs[S])?hd(m,_):new Promise(S=>{X1(m,y),a.queue.push(()=>{S(hd(m,_))}),o()})}}),[]),l=T.useRef([...a.ctrls]),u=[],c=c_(e)||0;T.useMemo(()=>{ee(l.current.slice(e,c),m=>{WN(m,i),m.stop(!0)}),l.current.length=e,d(c,e)},[e]),T.useMemo(()=>{d(0,Math.min(c,e))},n);function d(m,_){for(let y=m;y<_;y++){const p=l.current[y]||(l.current[y]=new eM(null,a.flush)),S=r?r(y,p):t[y];S&&(u[y]=XN(S))}}const f=l.current.map((m,_)=>S_(m,u[_])),g=T.useContext(_u),b=c_(g),v=g!==b&&VN(g);lp(()=>{s.current++,a.ctrls=l.current;const{queue:m}=a;m.length&&(a.queue=[],ee(m,_=>_())),ee(l.current,(_,y)=>{i==null||i.add(_),v&&_.start({default:g});const p=u[y];p&&(jN(_,p.ref),_.ref?_.queue.push(p):_.start(p))})}),$1(()=>()=>{ee(a.ctrls,m=>m.stop(!0))});const h=f.map(m=>Fe({},m));return i?[h,i]:h}function zs(e,t){const n=U.fun(e),[[r],i]=sM(1,n?e:[e],n?t||[]:t);return n||arguments.length==2?[r,i]:r}let E_;(function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"})(E_||(E_={}));class oM extends hp{constructor(t,n){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=t,this.calc=go(...n);const r=this._get(),i=ad(r);up(this,i.create(r))}advance(t){const n=this._get(),r=this.get();un(n,r)||(Gt(this).setValue(n),this._onChange(n,this.idle)),!this.idle&&x_(this._active)&&xc(this)}_get(){const t=U.arr(this.source)?this.source.map(ut):_t(ut(this.source));return this.calc(...t)}_start(){this.idle&&!x_(this._active)&&(this.idle=!1,ee(mu(this),t=>{t.done=!1}),Jt.skipAnimation?(K.batchedUpdates(()=>this.advance()),xc(this)):fu.start(this))}_attach(){let t=1;ee(_t(this.source),n=>{St(n)&&Gi(n,this),cd(n)&&(n.idle||this._active.add(n),t=Math.max(t,n.priority+1))}),this.priority=t,this._start()}_detach(){ee(_t(this.source),t=>{St(t)&&vo(t,this)}),this._active.clear(),xc(this)}eventObserved(t){t.type=="change"?t.idle?this.advance():(this._active.add(t.parent),this._start()):t.type=="idle"?this._active.delete(t.parent):t.type=="priority"&&(this.priority=_t(this.source).reduce((n,r)=>Math.max(n,(cd(r)?r.priority:0)+1),0))}}function aM(e){return e.idle!==!1}function x_(e){return!e.size||Array.from(e).every(aM)}function xc(e){e.idle||(e.idle=!0,ee(mu(e),t=>{t.done=!0}),_o(e,{type:"idle",parent:e}))}Jt.assign({createStringInterpolator:D1,to:(e,t)=>new oM(e,t)});function pp(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const lM=["style","children","scrollTop","scrollLeft","viewBox"],eb=/^--/;function uM(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t=="number"&&t!==0&&!eb.test(e)&&!(Hs.hasOwnProperty(e)&&Hs[e])?t+"px":(""+t).trim()}const k_={};function cM(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n=e.nodeName==="filter"||e.parentNode&&e.parentNode.nodeName==="filter",r=t,{style:i,children:s,scrollTop:o,scrollLeft:a,viewBox:l}=r,u=pp(r,lM),c=Object.values(u),d=Object.keys(u).map(f=>n||e.hasAttribute(f)?f:k_[f]||(k_[f]=f.replace(/([A-Z])/g,g=>"-"+g.toLowerCase())));s!==void 0&&(e.textContent=s);for(let f in i)if(i.hasOwnProperty(f)){const g=uM(f,i[f]);eb.test(f)?e.style.setProperty(f,g):e.style[f]=g}d.forEach((f,g)=>{e.setAttribute(f,c[g])}),o!==void 0&&(e.scrollTop=o),a!==void 0&&(e.scrollLeft=a),l!==void 0&&e.setAttribute("viewBox",l)}let Hs={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const fM=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1),dM=["Webkit","Ms","Moz","O"];Hs=Object.keys(Hs).reduce((e,t)=>(dM.forEach(n=>e[fM(n,t)]=e[t]),e),Hs);const hM=["x","y","z"],pM=/^(matrix|translate|scale|rotate|skew)/,mM=/^(translate)/,gM=/^(rotate|skew)/,kc=(e,t)=>U.num(e)&&e!==0?e+t:e,Fa=(e,t)=>U.arr(e)?e.every(n=>Fa(n,t)):U.num(e)?e===t:parseFloat(e)===t;class _M extends gu{constructor(t){let{x:n,y:r,z:i}=t,s=pp(t,hM);const o=[],a=[];(n||r||i)&&(o.push([n||0,r||0,i||0]),a.push(l=>[`translate3d(${l.map(u=>kc(u,"px")).join(",")})`,Fa(l,0)])),Zt(s,(l,u)=>{if(u==="transform")o.push([l||""]),a.push(c=>[c,c===""]);else if(pM.test(u)){if(delete s[u],U.und(l))return;const c=mM.test(u)?"px":gM.test(u)?"deg":"";o.push(_t(l)),a.push(u==="rotate3d"?([d,f,g,b])=>[`rotate3d(${d},${f},${g},${kc(b,c)})`,Fa(b,0)]:d=>[`${u}(${d.map(f=>kc(f,c)).join(",")})`,Fa(d,u.startsWith("scale")?1:0)])}}),o.length&&(s.transform=new vM(o,a)),super(s)}}class vM extends M1{constructor(t,n){super(),this._value=null,this.inputs=t,this.transforms=n}get(){return this._value||(this._value=this._get())}_get(){let t="",n=!0;return ee(this.inputs,(r,i)=>{const s=ut(r[0]),[o,a]=this.transforms[i](U.arr(s)?s:r.map(ut));t+=" "+o,n=n&&a}),n?"none":t}observerAdded(t){t==1&&ee(this.inputs,n=>ee(n,r=>St(r)&&Gi(r,this)))}observerRemoved(t){t==0&&ee(this.inputs,n=>ee(n,r=>St(r)&&vo(r,this)))}eventObserved(t){t.type=="change"&&(this._value=null),_o(this,t)}}const yM=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],bM=["scrollTop","scrollLeft"];Jt.assign({batchedUpdates:iu.unstable_batchedUpdates,createStringInterpolator:D1,colors:rN});const wM=DN(yM,{applyAnimatedValues:cM,createAnimatedStyle:e=>new _M(e),getComponentProps:e=>pp(e,bM)}),Sr=wM.animated;function SM(e){return(typeof e=="function"?e():e)||document.body}function EM(e,t){if(ou&&e){const n=SM(e);return iu.createPortal(t,n)}return t}function xM(e){const t=T.useRef(e);return e&&(t.current=!0),!!t.current}const tb=e=>kM(e.active,e.forceRender,e.destroyOnClose)?e.children:null;function kM(e,t,n){const r=xM(e);return t||e?!0:r?!n:!1}const TM={click:"onClick"};function RM(e,t){const n=Object.assign({},t.props);for(const r of e){const i=TM[r];n[i]=function(s){var o,a;s.stopPropagation(),(a=(o=t.props)[i])===null||a===void 0||a.call(o,s)}}return V.cloneElement(t,n)}const Tc="adm-mask",AM={default:.55,thin:.35,thick:.75},IM={black:"0, 0, 0",white:"255, 255, 255"},OM={visible:!0,destroyOnClose:!1,forceRender:!1,color:"black",opacity:"default",disableBodyScroll:!0,getContainer:null,stopPropagation:["click"]},LM=e=>{const t=Wt(OM,e),{locale:n}=Yh(),r=T.useRef(null);XL(r,t.visible&&t.disableBodyScroll);const i=T.useMemo(()=>{var c;const d=(c=AM[t.opacity])!==null&&c!==void 0?c:t.opacity,f=IM[t.color];return f?`rgba(${f}, ${d})`:t.color},[t.color,t.opacity]),[s,o]=T.useState(t.visible),a=VL(),{opacity:l}=zs({opacity:t.visible?1:0,config:{precision:.01,mass:1,tension:250,friction:30,clamp:!0},onStart:()=>{o(!0)},onRest:()=>{var c,d;a.current||(o(t.visible),t.visible?(c=t.afterShow)===null||c===void 0||c.call(t):(d=t.afterClose)===null||d===void 0||d.call(t))}}),u=RM(t.stopPropagation,ht(t,V.createElement(Sr.div,{className:Tc,ref:r,style:Object.assign(Object.assign({},t.style),{background:i,opacity:l,display:s?void 0:"none"}),onClick:c=>{var d;c.target===c.currentTarget&&((d=t.onMaskClick)===null||d===void 0||d.call(t,c))}},t.onMaskClick&&O("div",{className:`${Tc}-aria-button`,role:"button","aria-label":n.Mask.name,onClick:t.onMaskClick}),O("div",{className:`${Tc}-content`,children:t.children}))));return O(tb,{active:s,forceRender:t.forceRender,destroyOnClose:t.destroyOnClose,children:EM(t.getContainer,u)})};function NM(e){return T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),T.createElement("g",{id:"CheckOutline-CheckOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},T.createElement("g",{id:"CheckOutline-编组"},T.createElement("rect",{id:"CheckOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),T.createElement("path",{d:"M44.309608,12.6841286 L21.2180499,35.5661955 L21.2180499,35.5661955 C20.6343343,36.1446015 19.6879443,36.1446015 19.1042286,35.5661955 C19.0538201,35.5162456 19.0077648,35.4636155 18.9660627,35.4087682 C18.9113105,35.368106 18.8584669,35.3226694 18.808302,35.2729607 L3.6903839,20.2920499 C3.53346476,20.1365529 3.53231192,19.8832895 3.68780898,19.7263704 C3.7629255,19.6505669 3.86521855,19.6079227 3.97193622,19.6079227 L7.06238923,19.6079227 C7.16784214,19.6079227 7.26902895,19.6495648 7.34393561,19.7237896 L20.160443,32.4236157 L20.160443,32.4236157 L40.656066,12.115858 C40.7309719,12.0416387 40.8321549,12 40.9376034,12 L44.0280571,12 C44.248971,12 44.4280571,12.1790861 44.4280571,12.4 C44.4280571,12.5067183 44.3854124,12.609012 44.309608,12.6841286 Z",id:"CheckOutline-路径",fill:"currentColor",fillRule:"nonzero"}))))}function MM(e){return T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),T.createElement("g",{id:"CloseCircleFill-CloseCircleFill",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},T.createElement("g",{id:"CloseCircleFill-编组"},T.createElement("rect",{id:"CloseCircleFill-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),T.createElement("path",{d:"M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M18.6753876,16 L15.5637812,16 C15.4576916,16 15.3559474,16.0421451 15.2809323,16.1171635 C15.124726,16.2733766 15.1247316,16.5266426 15.2809447,16.6828489 L15.2809447,16.6828489 L22.299066,23.7006641 L14.6828159,31.3171619 C14.6078042,31.3921761 14.5656632,31.4939157 14.5656632,31.6 C14.5656632,31.8209139 14.7447493,32 14.9656632,32 L14.9656632,32 L18.0753284,32 C18.1814068,32 18.2831412,31.9578638 18.3581544,31.8828594 L18.3581544,31.8828594 L24.420066,25.8216641 L30.4818451,31.8828564 C30.5568585,31.9578626 30.6585942,32 30.7646741,32 L30.7646741,32 L33.8763476,32 C33.9824309,32 34.0841695,31.9578599 34.1591835,31.8828496 C34.315397,31.7266436 34.3154031,31.4733776 34.1591972,31.3171641 L34.1591972,31.3171641 L26.542066,23.6996641 L33.5591874,16.6828489 C33.6342057,16.6078338 33.6763508,16.5060896 33.6763508,16.4 C33.6763508,16.1790861 33.4972647,16 33.2763508,16 L33.2763508,16 L30.1637654,16 C30.0576705,16 29.9559218,16.0421493 29.8809058,16.1171741 L29.8809058,16.1171741 L24.420066,21.5786641 L18.9582218,16.1171488 C18.883208,16.0421394 18.7814701,16 18.6753876,16 L18.6753876,16 Z",id:"CloseCircleFill-形状结合",fill:"currentColor",fillRule:"nonzero"}))))}function PM(e){return T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),T.createElement("g",{id:"CloseOutline-CloseOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},T.createElement("g",{id:"CloseOutline-编组"},T.createElement("rect",{id:"CloseOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),T.createElement("path",{d:"M10.6085104,8.11754663 L24.1768397,21.8195031 L24.1768397,21.8195031 L37.7443031,8.1175556 C37.8194278,8.04168616 37.9217669,7.999 38.0285372,7.999 L41.1040268,7.999 C41.3249407,7.999 41.5040268,8.1780861 41.5040268,8.399 C41.5040268,8.50440471 41.4624226,8.60554929 41.3882578,8.68044752 L26.2773302,23.9408235 L26.2773302,23.9408235 L41.5021975,39.3175645 C41.65763,39.4745475 41.6563731,39.7278104 41.4993901,39.8832429 C41.4244929,39.9574004 41.3233534,39.999 41.2179546,39.999 L38.1434012,39.999 C38.0366291,39.999 37.9342885,39.9563124 37.8591634,39.8804408 L24.1768397,26.0621438 L24.1768397,26.0621438 L10.4936501,39.8804497 C10.4185257,39.9563159 10.3161889,39.999 10.2094212,39.999 L7.13584526,39.999 C6.91493136,39.999 6.73584526,39.8199139 6.73584526,39.599 C6.73584526,39.4936017 6.77744443,39.3924627 6.85160121,39.3175656 L22.0763492,23.9408235 L22.0763492,23.9408235 L6.96554081,8.68044639 C6.81010226,8.52346929 6.81134951,8.27020637 6.9683266,8.11476782 C7.04322474,8.04060377 7.14436883,7.999 7.24977299,7.999 L10.3242852,7.999 C10.4310511,7.999 10.5333863,8.04168267 10.6085104,8.11754663 Z",id:"CloseOutline-路径",fill:"currentColor",fillRule:"nonzero"}))))}function CM(e){return T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),T.createElement("g",{id:"LeftOutline-LeftOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},T.createElement("g",{id:"LeftOutline-编组"},T.createElement("rect",{id:"LeftOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),T.createElement("path",{d:"M31.7053818,5.11219264 L13.5234393,22.6612572 L13.5234393,22.6612572 C12.969699,23.2125856 12.9371261,24.0863155 13.4257204,24.6755735 L13.5234393,24.7825775 L31.7045714,42.8834676 C31.7795345,42.9580998 31.8810078,43 31.9867879,43 L35.1135102,43 C35.3344241,43 35.5135102,42.8209139 35.5135102,42.6 C35.5135102,42.4936115 35.4711279,42.391606 35.3957362,42.316542 L16.7799842,23.7816937 L16.7799842,23.7816937 L35.3764658,5.6866816 C35.5347957,5.53262122 35.5382568,5.27937888 35.3841964,5.121049 C35.3088921,5.04365775 35.205497,5 35.0975148,5 L31.9831711,5 C31.8795372,5 31.7799483,5.04022164 31.7053818,5.11219264 Z",id:"LeftOutline-路径",fill:"currentColor",fillRule:"nonzero"}))))}function DM(e){return T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),T.createElement("g",{id:"SearchOutline-SearchOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},T.createElement("g",{id:"SearchOutline-编组"},T.createElement("rect",{id:"SearchOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),T.createElement("path",{d:"M10.2434135,10.1505371 C17.2346315,3.28315429 28.5696354,3.28315429 35.5608534,10.1505371 C42.3159331,16.7859644 42.5440954,27.4048667 36.2453405,34.3093889 L43.7095294,41.6422249 C43.8671196,41.7970419 43.8693677,42.0502979 43.7145508,42.2078881 C43.7128864,42.2095822 43.7112069,42.2112616 43.7095126,42.2129259 L42.1705322,43.7246464 C42.014915,43.8775072 41.7655181,43.8775006 41.6099089,43.7246316 L34.0775268,36.3248916 L34.0775268,36.3248916 C27.0485579,41.8551751 16.7593545,41.4200547 10.2434135,35.0195303 C3.25219551,28.1521474 3.25219551,17.0179199 10.2434135,10.1505371 Z M12.3532001,12.2229532 C6.52718516,17.9457722 6.52718516,27.2242951 12.3532001,32.9471142 C18.1792151,38.6699332 27.6250517,38.6699332 33.4510667,32.9471142 C39.2770817,27.2242951 39.2770817,17.9457722 33.4510667,12.2229532 C27.6250517,6.50013419 18.1792151,6.50013419 12.3532001,12.2229532 Z",id:"SearchOutline-形状",fill:"currentColor",fillRule:"nonzero"}))))}const T_="adm-safe-area",UM=e=>ht(e,V.createElement("div",{className:te(T_,`${T_}-position-${e.position}`)})),Il=Object.assign({},ok),{version:FM,render:$M,unmountComponentAtNode:BM}=Il;let vu;try{Number((FM||"").split(".")[0])>=18&&Il.createRoot&&(vu=Il.createRoot)}catch{}function R_(e){const{__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:t}=Il;t&&typeof t=="object"&&(t.usingClientEntryPoint=e)}const Ol="__antd_mobile_root__";function VM(e,t){$M(e,t)}function WM(e,t){R_(!0);const n=t[Ol]||vu(t);R_(!1),n.render(e),t[Ol]=n}function jM(e,t){if(vu){WM(e,t);return}VM(e,t)}function zM(e){return BM(e)}function HM(e){return qh(this,void 0,void 0,function*(){return Promise.resolve().then(()=>{var t;(t=e[Ol])===null||t===void 0||t.unmount(),delete e[Ol]})})}function GM(e){return vu?HM(e):zM(e)}function qM(e){const t=document.createElement("div");document.body.appendChild(t);function n(){GM(t)&&t.parentNode&&t.parentNode.removeChild(t)}return jM(e,t),n}function YM(e){const t=V.forwardRef((i,s)=>{const[o,a]=T.useState(!1),l=T.useRef(!1),[u,c]=T.useState(e),d=T.useRef(0);T.useEffect(()=>{l.current?g():a(!0)},[]);function f(){var b,v;l.current=!0,a(!1),(v=(b=u.props).onClose)===null||v===void 0||v.call(b)}function g(){var b,v;r(),(v=(b=u.props).afterClose)===null||v===void 0||v.call(b)}return T.useImperativeHandle(s,()=>({close:f,replace:b=>{var v,h;d.current++,(h=(v=u.props).afterClose)===null||h===void 0||h.call(v),c(b)}})),V.cloneElement(u,Object.assign(Object.assign({},u.props),{key:d.current,visible:o,onClose:f,afterClose:g}))}),n=V.createRef(),r=qM(O(t,{ref:n}));return{close:()=>qh(this,void 0,void 0,function*(){var i;n.current?(i=n.current)===null||i===void 0||i.close():r()}),replace:i=>{var s;(s=n.current)===null||s===void 0||s.replace(i)}}}const A_="adm-auto-center",QM=e=>ht(e,V.createElement("div",{className:A_},V.createElement("div",{className:`${A_}-content`},e.children))),XM=QO(mo);const Qr="adm-badge",nb=V.createElement(V.Fragment,null),KM=e=>{const{content:t,color:n,children:r}=e,i=t===nb,s=te(Qr,!!r&&`${Qr}-fixed`,i&&`${Qr}-dot`,e.bordered&&`${Qr}-bordered`),o=t||t===0?ht(e,V.createElement("div",{className:s,style:{"--color":n}},!i&&V.createElement("div",{className:`${Qr}-content`},t))):null;return r?V.createElement("div",{className:te(`${Qr}-wrapper`,e.wrapperClassName),style:e.wrapperStyle},r,o):o},I_=Qh(KM,{dot:nb});const ZM="adm-dot-loading",JM={default:"var(--adm-color-weak)",primary:"var(--adm-color-primary)",white:"var(--adm-color-white)"},eP={color:"default"},tP=T.memo(e=>{var t;const n=Wt(eP,e);return ht(n,O("div",{style:{color:(t=JM[n.color])!==null&&t!==void 0?t:n.color},className:te("adm-loading",ZM),children:O("svg",{height:"1em",viewBox:"0 0 100 40",style:{verticalAlign:"-0.125em"},children:O("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:O("g",{transform:"translate(-100.000000, -71.000000)",children:O("g",{transform:"translate(95.000000, 71.000000)",children:O("g",{transform:"translate(5.000000, 0.000000)",children:[0,1,2].map(r=>O("rect",{fill:"currentColor",x:20+r*26,y:"16",width:"8",height:"8",rx:"2",children:O("animate",{attributeName:"y",from:"16",to:"16",dur:"2s",begin:`${r*.2}s`,repeatCount:"indefinite",values:"16; 6; 26; 16; 16",keyTimes:"0; 0.1; 0.3; 0.4; 1"})},r))})})})})})}))});function nP(e){return!!e&&typeof e=="object"&&typeof e.then=="function"}function rP(){return ou?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1}const wt="adm-button",iP={color:"default",fill:"solid",block:!1,loading:!1,loadingIcon:O(tP,{color:"currentColor"}),type:"button",shape:"default",size:"middle"},sP=T.forwardRef((e,t)=>{const n=Wt(iP,e),[r,i]=T.useState(!1),s=T.useRef(null),o=n.loading==="auto"?r:n.loading,a=n.disabled||o;T.useImperativeHandle(t,()=>({get nativeElement(){return s.current}}));const l=u=>qh(void 0,void 0,void 0,function*(){if(!n.onClick)return;const c=n.onClick(u);if(nP(c))try{i(!0),yield c,i(!1)}catch(d){throw i(!1),d}});return ht(n,O("button",{ref:s,type:n.type,onClick:l,className:te(wt,n.color?`${wt}-${n.color}`:null,{[`${wt}-block`]:n.block,[`${wt}-disabled`]:a,[`${wt}-fill-outline`]:n.fill==="outline",[`${wt}-fill-none`]:n.fill==="none",[`${wt}-mini`]:n.size==="mini",[`${wt}-small`]:n.size==="small",[`${wt}-large`]:n.size==="large",[`${wt}-loading`]:o},`${wt}-shape-${n.shape}`),disabled:a,onMouseDown:n.onMouseDown,onMouseUp:n.onMouseUp,onTouchStart:n.onTouchStart,onTouchEnd:n.onTouchEnd,children:o?ke("div",{className:`${wt}-loading-wrapper`,children:[n.loadingIcon,n.loadingText]}):O("span",{children:n.children})}))});function yu(e){const{value:t,defaultValue:n,onChange:r}=e,i=FL(),s=T.useRef(t!==void 0?t:n);t!==void 0&&(s.current=t);const o=Zh((a,l=!1)=>{const u=typeof a=="function"?a(s.current):a;if(!(!l&&u===s.current))return s.current=u,i(),r==null?void 0:r(u)});return[s.current,o]}function oP(e,t){const n=Zh(e);mo(()=>{const r=t.current;if(r)if(window.ResizeObserver){let i;const s=new ResizeObserver(()=>{i=window.requestAnimationFrame(()=>n(r))});return s.observe(r),()=>{window.cancelAnimationFrame(i),s.disconnect()}}else n(r)},[t])}function aP(e,t,n){const r=Zh(e);T.useEffect(()=>{const i=new MutationObserver(()=>{r()});if(t.current)return i.observe(t.current,n),()=>{i.disconnect()}},[t])}function rb(e,t,n){let r=e;return t!==void 0&&(r=Math.max(e,t)),n!==void 0&&(r=Math.min(r,n)),r}var ib={exports:{}},oe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp=Symbol.for("react.element"),gp=Symbol.for("react.portal"),bu=Symbol.for("react.fragment"),wu=Symbol.for("react.strict_mode"),Su=Symbol.for("react.profiler"),Eu=Symbol.for("react.provider"),xu=Symbol.for("react.context"),lP=Symbol.for("react.server_context"),ku=Symbol.for("react.forward_ref"),Tu=Symbol.for("react.suspense"),Ru=Symbol.for("react.suspense_list"),Au=Symbol.for("react.memo"),Iu=Symbol.for("react.lazy"),uP=Symbol.for("react.offscreen"),sb;sb=Symbol.for("react.module.reference");function Lt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case mp:switch(e=e.type,e){case bu:case Su:case wu:case Tu:case Ru:return e;default:switch(e=e&&e.$$typeof,e){case lP:case xu:case ku:case Iu:case Au:case Eu:return e;default:return t}}case gp:return t}}}oe.ContextConsumer=xu;oe.ContextProvider=Eu;oe.Element=mp;oe.ForwardRef=ku;oe.Fragment=bu;oe.Lazy=Iu;oe.Memo=Au;oe.Portal=gp;oe.Profiler=Su;oe.StrictMode=wu;oe.Suspense=Tu;oe.SuspenseList=Ru;oe.isAsyncMode=function(){return!1};oe.isConcurrentMode=function(){return!1};oe.isContextConsumer=function(e){return Lt(e)===xu};oe.isContextProvider=function(e){return Lt(e)===Eu};oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===mp};oe.isForwardRef=function(e){return Lt(e)===ku};oe.isFragment=function(e){return Lt(e)===bu};oe.isLazy=function(e){return Lt(e)===Iu};oe.isMemo=function(e){return Lt(e)===Au};oe.isPortal=function(e){return Lt(e)===gp};oe.isProfiler=function(e){return Lt(e)===Su};oe.isStrictMode=function(e){return Lt(e)===wu};oe.isSuspense=function(e){return Lt(e)===Tu};oe.isSuspenseList=function(e){return Lt(e)===Ru};oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===bu||e===Su||e===wu||e===Tu||e===Ru||e===uP||typeof e=="object"&&e!==null&&(e.$$typeof===Iu||e.$$typeof===Au||e.$$typeof===Eu||e.$$typeof===xu||e.$$typeof===ku||e.$$typeof===sb||e.getModuleId!==void 0)};oe.typeOf=Lt;ib.exports=oe;var cP=ib.exports;function ob(e,t){let n=0;function r(i){V.Children.forEach(i,s=>{cP.isFragment(s)?r(s.props.children):(t(s,n),n+=1)})}r(e)}var ab={exports:{}},lb={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ni=T;function fP(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dP=typeof Object.is=="function"?Object.is:fP,hP=Ni.useState,pP=Ni.useEffect,mP=Ni.useLayoutEffect,gP=Ni.useDebugValue;function _P(e,t){var n=t(),r=hP({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return mP(function(){i.value=n,i.getSnapshot=t,Rc(i)&&s({inst:i})},[e,n,t]),pP(function(){return Rc(i)&&s({inst:i}),e(function(){Rc(i)&&s({inst:i})})},[e]),gP(n),n}function Rc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!dP(e,n)}catch{return!0}}function vP(e,t){return t()}var yP=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?vP:_P;lb.useSyncExternalStore=Ni.useSyncExternalStore!==void 0?Ni.useSyncExternalStore:yP;ab.exports=lb;var bP=ab.exports;let wP=!1;const O_=new Set;function L_(){return wP}function SP(e){return O_.add(e),()=>{O_.delete(e)}}function EP(){return bP.useSyncExternalStore(SP,L_,L_)}const Ac="adm-spin-loading",xP={default:"var(--adm-color-weak)",primary:"var(--adm-color-primary)",white:"var(--adm-color-white)"},kP={color:"default"},TP=15*3.14159265358979*2,RP=T.memo(e=>{var t;const n=Wt(kP,e),r=EP(),{percent:i}=zs({cancel:r,loop:{reverse:!0},from:{percent:80},to:{percent:30},config:{duration:1200}});return ht(n,V.createElement(Sr.div,{className:Ac,style:{"--color":(t=xP[n.color])!==null&&t!==void 0?t:n.color,"--percent":i}},V.createElement("svg",{className:`${Ac}-svg`,viewBox:"0 0 32 32"},V.createElement(Sr.circle,{className:`${Ac}-fill`,fill:"transparent",strokeWidth:"2",strokeDasharray:TP,strokeDashoffset:i,strokeLinecap:"square",r:15,cx:16,cy:16}))))});const st="adm-tabs",AP=()=>null,IP={activeLineMode:"auto",stretch:!0},OP=e=>{var t;const n=Wt(IP,e),r=T.useRef(null),i=T.useRef(null),s={};let o=null;const a=[];ob(n.children,(p,S)=>{if(!T.isValidElement(p))return;const w=p.key;if(typeof w!="string")return;S===0&&(o=w);const E=a.push(p);s[w]=E-1});const[l,u]=yu({value:n.activeKey,defaultValue:(t=n.defaultActiveKey)!==null&&t!==void 0?t:o,onChange:p=>{var S;p!==null&&((S=n.onChange)===null||S===void 0||S.call(n,p))}}),[{x:c,width:d},f]=zs(()=>({x:0,width:0,config:{tension:300,clamp:!0}})),[{scrollLeft:g},b]=zs(()=>({scrollLeft:0,config:{tension:300,clamp:!0}})),[{leftMaskOpacity:v,rightMaskOpacity:h},m]=zs(()=>({leftMaskOpacity:0,rightMaskOpacity:0,config:{clamp:!0}}));function _(p=!1){const S=r.current;if(!S)return;const w=s[l];if(w===void 0){f.start({x:0,width:0,immediate:!0});return}const E=i.current;if(!E)return;const x=S.children.item(w+1),k=x.children.item(0),A=k.offsetLeft,Y=k.offsetWidth,z=x.offsetLeft,C=x.offsetWidth,L=S.offsetWidth,P=S.scrollWidth,j=S.scrollLeft,N=E.offsetWidth;let H=0,G=0;if(n.activeLineMode==="auto"?(H=A,G=Y):n.activeLineMode==="full"?(H=z,G=C):H=A+(Y-N)/2,f.start({x:H,width:G,immediate:p}),P-L<=0)return;const I=rb(A-(L-Y)/2,0,P-L);b.start({scrollLeft:I,from:{scrollLeft:j},immediate:p})}mo(()=>{_(!c.isAnimating)},[]),XM(()=>{_()},[l]),oP(()=>{_(!c.isAnimating)},r),aP(()=>{_(!c.isAnimating)},r,{subtree:!0,childList:!0,characterData:!0});const{run:y}=WL((p=!1)=>{const S=r.current;if(!S)return;const w=S.scrollLeft,E=w>0,x=w+S.offsetWidth<S.scrollWidth;m.start({leftMaskOpacity:E?1:0,rightMaskOpacity:x?1:0,immediate:p})},{wait:100,trailing:!0,leading:!0});return mo(()=>{y(!0)},[]),ht(n,V.createElement("div",{className:st},V.createElement("div",{className:`${st}-header`},V.createElement(Sr.div,{className:te(`${st}-header-mask`,`${st}-header-mask-left`),style:{opacity:v}}),V.createElement(Sr.div,{className:te(`${st}-header-mask`,`${st}-header-mask-right`),style:{opacity:h}}),V.createElement(Sr.div,{className:`${st}-tab-list`,ref:r,scrollLeft:g,onScroll:y,role:"tablist"},V.createElement(Sr.div,{ref:i,className:`${st}-tab-line`,style:{width:n.activeLineMode==="fixed"?"var(--fixed-active-line-width, 30px)":d,x:c}}),a.map(p=>ht(p.props,O("div",{className:te(`${st}-tab-wrapper`,{[`${st}-tab-wrapper-stretch`]:n.stretch}),children:O("div",{onClick:()=>{const{key:S}=p;p.props.disabled||S!=null&&u(S.toString())},className:te(`${st}-tab`,{[`${st}-tab-active`]:p.key===l,[`${st}-tab-disabled`]:p.props.disabled}),role:"tab","aria-selected":p.key===l,children:p.props.title})},p.key))))),a.map(p=>{if(p.props.children===void 0)return null;const S=p.key===l;return O(tb,{active:S,forceRender:p.props.forceRender,destroyOnClose:p.props.destroyOnClose,children:O("div",{className:`${st}-content`,style:{display:S?"block":"none"},children:p.props.children})},p.key)})))},N_=Qh(OP,{Tab:AP});function M_(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function pd(e,t){return pd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},pd(e,t)}const aa="adm-input",LP={defaultValue:"",onlyShowClearWhenFocus:!0},NP=T.forwardRef((e,t)=>{const n=Wt(LP,e),[r,i]=yu(n),[s,o]=T.useState(!1),a=T.useRef(!1),l=T.useRef(null),{locale:u}=Yh();T.useImperativeHandle(t,()=>({clear:()=>{i("")},focus:()=>{var g;(g=l.current)===null||g===void 0||g.focus()},blur:()=>{var g;(g=l.current)===null||g===void 0||g.blur()},get nativeElement(){return l.current}}));const c=g=>{var b;n.onEnterPress&&(g.code==="Enter"||g.keyCode===13)&&n.onEnterPress(g),(b=n.onKeyDown)===null||b===void 0||b.call(n,g)};mo(()=>{var g;if(n.enterKeyHint)return(g=l.current)===null||g===void 0||g.setAttribute("enterkeyhint",n.enterKeyHint),()=>{var b;(b=l.current)===null||b===void 0||b.removeAttribute("enterkeyhint")}},[n.enterKeyHint]);function d(){let g=r;if(n.type==="number"){const b=g&&rb(parseFloat(g),n.min,n.max).toString();Number(g)!==Number(b)&&(g=b)}g!==r&&i(g)}const f=(()=>!n.clearable||!r||n.readOnly?!1:n.onlyShowClearWhenFocus?s:!0)();return ht(n,ke("div",{className:te(`${aa}`,n.disabled&&`${aa}-disabled`),children:[O("input",{ref:l,className:`${aa}-element`,value:r,onChange:g=>{i(g.target.value)},onFocus:g=>{var b;o(!0),(b=n.onFocus)===null||b===void 0||b.call(n,g)},onBlur:g=>{var b;o(!1),d(),(b=n.onBlur)===null||b===void 0||b.call(n,g)},id:n.id,placeholder:n.placeholder,disabled:n.disabled,readOnly:n.readOnly,maxLength:n.maxLength,minLength:n.minLength,max:n.max,min:n.min,autoComplete:n.autoComplete,autoFocus:n.autoFocus,pattern:n.pattern,inputMode:n.inputMode,type:n.type,name:n.name,autoCapitalize:n.autoCapitalize,autoCorrect:n.autoCorrect,onKeyDown:c,onKeyUp:n.onKeyUp,onCompositionStart:g=>{var b;a.current=!0,(b=n.onCompositionStart)===null||b===void 0||b.call(n,g)},onCompositionEnd:g=>{var b;a.current=!1,(b=n.onCompositionEnd)===null||b===void 0||b.call(n,g)},onClick:n.onClick,step:n.step,role:n.role,"aria-valuenow":n["aria-valuenow"],"aria-valuemax":n["aria-valuemax"],"aria-valuemin":n["aria-valuemin"],"aria-label":n["aria-label"]}),f&&O("div",{className:`${aa}-clear`,onMouseDown:g=>{g.preventDefault()},onClick:()=>{var g,b;i(""),(g=n.onClear)===null||g===void 0||g.call(n),rP()&&a.current&&(a.current=!1,(b=l.current)===null||b===void 0||b.blur())},"aria-label":u.Input.clear,children:O(MM,{})})]}))});const Xr="adm-nav-bar",MP={backArrow:!0},PP=e=>{const t=Wt(MP,e),{back:n,backArrow:r}=t;return ht(t,V.createElement("div",{className:te(Xr)},V.createElement("div",{className:`${Xr}-left`,role:"button"},n!==null&&V.createElement("div",{className:`${Xr}-back`,onClick:t.onBack},r&&V.createElement("span",{className:`${Xr}-back-arrow`},r===!0?V.createElement(CM,null):r),V.createElement("span",{"aria-hidden":"true"},n)),t.left),V.createElement("div",{className:`${Xr}-title`},t.children),V.createElement("div",{className:`${Xr}-right`},t.right)))};const Nn="adm-search-bar",CP={clearable:!0,onlyShowClearWhenFocus:!1,showCancelButton:!1,defaultValue:"",clearOnCancel:!0,icon:O(DM,{})},DP=T.forwardRef((e,t)=>{const{locale:n}=Yh(),r=Wt(CP,{cancelText:n.common.cancel},e),[i,s]=yu(r),[o,a]=T.useState(!1),l=T.useRef(null),u=T.useRef(!1);T.useImperativeHandle(t,()=>({clear:()=>{var d;return(d=l.current)===null||d===void 0?void 0:d.clear()},focus:()=>{var d;return(d=l.current)===null||d===void 0?void 0:d.focus()},blur:()=>{var d;return(d=l.current)===null||d===void 0?void 0:d.blur()},get nativeElement(){var d,f;return(f=(d=l.current)===null||d===void 0?void 0:d.nativeElement)!==null&&f!==void 0?f:null}}));const c=()=>{let d;return typeof r.showCancelButton=="function"?d=r.showCancelButton(o,i):d=r.showCancelButton&&o,d&&O("div",{className:`${Nn}-suffix`,children:O(sP,{fill:"none",className:`${Nn}-cancel-button`,onClick:()=>{var f,g,b;r.clearOnCancel&&((f=l.current)===null||f===void 0||f.clear()),(g=l.current)===null||g===void 0||g.blur(),(b=r.onCancel)===null||b===void 0||b.call(r)},onMouseDown:f=>{f.preventDefault()},children:r.cancelText})})};return ht(r,ke("div",{className:te(Nn,{[`${Nn}-active`]:o}),children:[ke("div",{className:`${Nn}-input-box`,children:[r.icon&&O("div",{className:`${Nn}-input-box-icon`,children:r.icon}),O(NP,{ref:l,className:te(`${Nn}-input`,{[`${Nn}-input-without-icon`]:!r.icon}),value:i,onChange:s,maxLength:r.maxLength,placeholder:r.placeholder,clearable:r.clearable,onlyShowClearWhenFocus:r.onlyShowClearWhenFocus,onFocus:d=>{var f;a(!0),(f=r.onFocus)===null||f===void 0||f.call(r,d)},onBlur:d=>{var f;a(!1),(f=r.onBlur)===null||f===void 0||f.call(r,d)},onClear:r.onClear,type:"search",enterKeyHint:"search",onEnterPress:()=>{var d,f;u.current||((d=l.current)===null||d===void 0||d.blur(),(f=r.onSearch)===null||f===void 0||f.call(r,i))},"aria-label":n.SearchBar.name,onCompositionStart:d=>{var f;u.current=!0,(f=r.onCompositionStart)===null||f===void 0||f.call(r,d)},onCompositionEnd:d=>{var f;u.current=!1,(f=r.onCompositionEnd)===null||f===void 0||f.call(r,d)}})]}),c()]}))});const UP=()=>null,on="adm-tab-bar",FP={safeArea:!1},$P=e=>{var t;const n=Wt(FP,e);let r=null;const i=[];ob(n.children,(a,l)=>{if(!T.isValidElement(a))return;const u=a.key;typeof u=="string"&&(l===0&&(r=u),i.push(a))});const[s,o]=yu({value:n.activeKey,defaultValue:(t=n.defaultActiveKey)!==null&&t!==void 0?t:r,onChange:a=>{var l;a!==null&&((l=n.onChange)===null||l===void 0||l.call(n,a))}});return ht(n,ke("div",{className:on,children:[O("div",{className:`${on}-wrap`,children:i.map(a=>{const l=a.key===s;function u(){const c=a.props.icon&&O("div",{className:`${on}-item-icon`,children:typeof a.props.icon=="function"?a.props.icon(l):a.props.icon}),d=a.props.title&&O("div",{className:te(`${on}-item-title`,!!c&&`${on}-item-title-with-icon`),children:typeof a.props.title=="function"?a.props.title(l):a.props.title});return c?ke(a1,{children:[O(I_,{content:a.props.badge,className:`${on}-icon-badge`,children:c}),d]}):d?O(I_,{content:a.props.badge,className:`${on}-title-badge`,children:d}):null}return ht(a.props,O("div",{onClick:()=>{const{key:c}=a;c!=null&&o(c.toString())},className:te(`${on}-item`,{[`${on}-item-active`]:l}),children:u()},a.key))})}),n.safeArea&&O(UM,{position:"bottom"})]}))},pr=Qh($P,{Item:UP});const an="adm-toast",BP={maskClickable:!0,stopPropagation:["click"]},VP=e=>{const t=Wt(BP,e),{maskClickable:n,content:r,icon:i,position:s}=t,o=T.useMemo(()=>{if(i==null)return null;switch(i){case"success":return O(NM,{className:`${an}-icon-success`});case"fail":return O(PM,{className:`${an}-icon-fail`});case"loading":return O(RP,{color:"white",className:`${an}-loading`});default:return i}},[i]),a=T.useMemo(()=>{switch(s){case"top":return"20%";case"bottom":return"80%";default:return"50%"}},[s]);return O(LM,{visible:t.visible,destroyOnClose:!0,opacity:0,disableBodyScroll:!n,getContainer:t.getContainer,afterClose:t.afterClose,style:Object.assign({pointerEvents:n?"none":"auto"},t.maskStyle),className:te(`${an}-mask`,t.maskClassName),stopPropagation:t.stopPropagation,children:O("div",{className:te(`${an}-wrap`),children:ke("div",{style:{top:a},className:te(`${an}-main`,i?`${an}-main-icon`:`${an}-main-text`),children:[o&&O("div",{className:`${an}-icon`,children:o}),O(QM,{children:r})]})})})};let pn=null,Ic=null;const $a={duration:2e3,position:"center",maskClickable:!0},WP=e=>V.createElement(VP,Object.assign({},e));function jP(e){const t=Wt($a,typeof e=="string"?{content:e}:e),n=V.createElement(WP,Object.assign({},t,{onClose:()=>{pn=null}}));return pn?pn.replace(n):pn=YM(n),Ic&&window.clearTimeout(Ic),t.duration!==0&&(Ic=window.setTimeout(()=>{ub()},t.duration)),pn}function ub(){pn==null||pn.close(),pn=null}function zP(e){e.duration!==void 0&&($a.duration=e.duration),e.position!==void 0&&($a.position=e.position),e.maskClickable!==void 0&&($a.maskClickable=e.maskClickable)}const HP={show:jP,clear:ub,config:zP},P_=HP,GP=e=>O("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:O("div",{style:{padding:8,background:"white"},children:O(DP,{placeholder:"请输入内容",showCancelButton:()=>!0})})});var cb={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(_s,function(){var n=1e3,r=6e4,i=36e5,s="millisecond",o="second",a="minute",l="hour",u="day",c="week",d="month",f="quarter",g="year",b="date",v="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,_={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},y=function(C,L,P){var j=String(C);return!j||j.length>=L?C:""+Array(L+1-j.length).join(P)+C},p={s:y,z:function(C){var L=-C.utcOffset(),P=Math.abs(L),j=Math.floor(P/60),N=P%60;return(L<=0?"+":"-")+y(j,2,"0")+":"+y(N,2,"0")},m:function C(L,P){if(L.date()<P.date())return-C(P,L);var j=12*(P.year()-L.year())+(P.month()-L.month()),N=L.clone().add(j,d),H=P-N<0,G=L.clone().add(j+(H?-1:1),d);return+(-(j+(P-N)/(H?N-G:G-N))||0)},a:function(C){return C<0?Math.ceil(C)||0:Math.floor(C)},p:function(C){return{M:d,y:g,w:c,d:u,D:b,h:l,m:a,s:o,ms:s,Q:f}[C]||String(C||"").toLowerCase().replace(/s$/,"")},u:function(C){return C===void 0}},S="en",w={};w[S]=_;var E=function(C){return C instanceof Y},x=function C(L,P,j){var N;if(!L)return S;if(typeof L=="string"){var H=L.toLowerCase();w[H]&&(N=H),P&&(w[H]=P,N=H);var G=L.split("-");if(!N&&G.length>1)return C(G[0])}else{var Q=L.name;w[Q]=L,N=Q}return!j&&N&&(S=N),N||!j&&S},k=function(C,L){if(E(C))return C.clone();var P=typeof L=="object"?L:{};return P.date=C,P.args=arguments,new Y(P)},A=p;A.l=x,A.i=E,A.w=function(C,L){return k(C,{locale:L.$L,utc:L.$u,x:L.$x,$offset:L.$offset})};var Y=function(){function C(P){this.$L=x(P.locale,null,!0),this.parse(P)}var L=C.prototype;return L.parse=function(P){this.$d=function(j){var N=j.date,H=j.utc;if(N===null)return new Date(NaN);if(A.u(N))return new Date;if(N instanceof Date)return new Date(N);if(typeof N=="string"&&!/Z$/i.test(N)){var G=N.match(h);if(G){var Q=G[2]-1||0,I=(G[7]||"0").substring(0,3);return H?new Date(Date.UTC(G[1],Q,G[3]||1,G[4]||0,G[5]||0,G[6]||0,I)):new Date(G[1],Q,G[3]||1,G[4]||0,G[5]||0,G[6]||0,I)}}return new Date(N)}(P),this.$x=P.x||{},this.init()},L.init=function(){var P=this.$d;this.$y=P.getFullYear(),this.$M=P.getMonth(),this.$D=P.getDate(),this.$W=P.getDay(),this.$H=P.getHours(),this.$m=P.getMinutes(),this.$s=P.getSeconds(),this.$ms=P.getMilliseconds()},L.$utils=function(){return A},L.isValid=function(){return this.$d.toString()!==v},L.isSame=function(P,j){var N=k(P);return this.startOf(j)<=N&&N<=this.endOf(j)},L.isAfter=function(P,j){return k(P)<this.startOf(j)},L.isBefore=function(P,j){return this.endOf(j)<k(P)},L.$g=function(P,j,N){return A.u(P)?this[j]:this.set(N,P)},L.unix=function(){return Math.floor(this.valueOf()/1e3)},L.valueOf=function(){return this.$d.getTime()},L.startOf=function(P,j){var N=this,H=!!A.u(j)||j,G=A.p(P),Q=function(Be,he){var rt=A.w(N.$u?Date.UTC(N.$y,he,Be):new Date(N.$y,he,Be),N);return H?rt:rt.endOf(u)},I=function(Be,he){return A.w(N.toDate()[Be].apply(N.toDate("s"),(H?[0,0,0,0]:[23,59,59,999]).slice(he)),N)},M=this.$W,F=this.$M,B=this.$D,J="set"+(this.$u?"UTC":"");switch(G){case g:return H?Q(1,0):Q(31,11);case d:return H?Q(1,F):Q(0,F+1);case c:var Se=this.$locale().weekStart||0,Ee=(M<Se?M+7:M)-Se;return Q(H?B-Ee:B+(6-Ee),F);case u:case b:return I(J+"Hours",0);case l:return I(J+"Minutes",1);case a:return I(J+"Seconds",2);case o:return I(J+"Milliseconds",3);default:return this.clone()}},L.endOf=function(P){return this.startOf(P,!1)},L.$set=function(P,j){var N,H=A.p(P),G="set"+(this.$u?"UTC":""),Q=(N={},N[u]=G+"Date",N[b]=G+"Date",N[d]=G+"Month",N[g]=G+"FullYear",N[l]=G+"Hours",N[a]=G+"Minutes",N[o]=G+"Seconds",N[s]=G+"Milliseconds",N)[H],I=H===u?this.$D+(j-this.$W):j;if(H===d||H===g){var M=this.clone().set(b,1);M.$d[Q](I),M.init(),this.$d=M.set(b,Math.min(this.$D,M.daysInMonth())).$d}else Q&&this.$d[Q](I);return this.init(),this},L.set=function(P,j){return this.clone().$set(P,j)},L.get=function(P){return this[A.p(P)]()},L.add=function(P,j){var N,H=this;P=Number(P);var G=A.p(j),Q=function(F){var B=k(H);return A.w(B.date(B.date()+Math.round(F*P)),H)};if(G===d)return this.set(d,this.$M+P);if(G===g)return this.set(g,this.$y+P);if(G===u)return Q(1);if(G===c)return Q(7);var I=(N={},N[a]=r,N[l]=i,N[o]=n,N)[G]||1,M=this.$d.getTime()+P*I;return A.w(M,this)},L.subtract=function(P,j){return this.add(-1*P,j)},L.format=function(P){var j=this,N=this.$locale();if(!this.isValid())return N.invalidDate||v;var H=P||"YYYY-MM-DDTHH:mm:ssZ",G=A.z(this),Q=this.$H,I=this.$m,M=this.$M,F=N.weekdays,B=N.months,J=function(he,rt,Qi,lr){return he&&(he[rt]||he(j,H))||Qi[rt].slice(0,lr)},Se=function(he){return A.s(Q%12||12,he,"0")},Ee=N.meridiem||function(he,rt,Qi){var lr=he<12?"AM":"PM";return Qi?lr.toLowerCase():lr},Be={YY:String(this.$y).slice(-2),YYYY:this.$y,M:M+1,MM:A.s(M+1,2,"0"),MMM:J(N.monthsShort,M,B,3),MMMM:J(B,M),D:this.$D,DD:A.s(this.$D,2,"0"),d:String(this.$W),dd:J(N.weekdaysMin,this.$W,F,2),ddd:J(N.weekdaysShort,this.$W,F,3),dddd:F[this.$W],H:String(Q),HH:A.s(Q,2,"0"),h:Se(1),hh:Se(2),a:Ee(Q,I,!0),A:Ee(Q,I,!1),m:String(I),mm:A.s(I,2,"0"),s:String(this.$s),ss:A.s(this.$s,2,"0"),SSS:A.s(this.$ms,3,"0"),Z:G};return H.replace(m,function(he,rt){return rt||Be[he]||G.replace(":","")})},L.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},L.diff=function(P,j,N){var H,G=A.p(j),Q=k(P),I=(Q.utcOffset()-this.utcOffset())*r,M=this-Q,F=A.m(this,Q);return F=(H={},H[g]=F/12,H[d]=F,H[f]=F/3,H[c]=(M-I)/6048e5,H[u]=(M-I)/864e5,H[l]=M/i,H[a]=M/r,H[o]=M/n,H)[G]||M,N?F:A.a(F)},L.daysInMonth=function(){return this.endOf(d).$D},L.$locale=function(){return w[this.$L]},L.locale=function(P,j){if(!P)return this.$L;var N=this.clone(),H=x(P,j,!0);return H&&(N.$L=H),N},L.clone=function(){return A.w(this.$d,this)},L.toDate=function(){return new Date(this.valueOf())},L.toJSON=function(){return this.isValid()?this.toISOString():null},L.toISOString=function(){return this.$d.toISOString()},L.toString=function(){return this.$d.toUTCString()},C}(),z=Y.prototype;return k.prototype=z,[["$ms",s],["$s",o],["$m",a],["$H",l],["$W",u],["$M",d],["$y",g],["$D",b]].forEach(function(C){z[C[1]]=function(L){return this.$g(L,C[0],C[1])}}),k.extend=function(C,L){return C.$i||(C(L,Y,k),C.$i=!0),k},k.locale=x,k.isDayjs=E,k.unix=function(C){return k(1e3*C)},k.en=w[S],k.Ls=w,k.p={},k})})(cb);var qP=cb.exports;const _p=Dr(qP);let Rt;typeof window<"u"?Rt=window:typeof self<"u"?Rt=self:Rt=global;let md=null,gd=null;const C_=20,Oc=Rt.clearTimeout,D_=Rt.setTimeout,Lc=Rt.cancelAnimationFrame||Rt.mozCancelAnimationFrame||Rt.webkitCancelAnimationFrame,U_=Rt.requestAnimationFrame||Rt.mozRequestAnimationFrame||Rt.webkitRequestAnimationFrame;Lc==null||U_==null?(md=Oc,gd=function(t){return D_(t,C_)}):(md=function([t,n]){Lc(t),Oc(n)},gd=function(t){const n=U_(function(){Oc(r),t()}),r=D_(function(){Lc(n),t()},C_);return[n,r]});function YP(e){let t,n,r,i,s,o,a;const l=typeof document<"u"&&document.attachEvent;if(!l){o=function(m){const _=m.__resizeTriggers__,y=_.firstElementChild,p=_.lastElementChild,S=y.firstElementChild;p.scrollLeft=p.scrollWidth,p.scrollTop=p.scrollHeight,S.style.width=y.offsetWidth+1+"px",S.style.height=y.offsetHeight+1+"px",y.scrollLeft=y.scrollWidth,y.scrollTop=y.scrollHeight},s=function(m){return m.offsetWidth!==m.__resizeLast__.width||m.offsetHeight!==m.__resizeLast__.height},a=function(m){if(m.target.className&&typeof m.target.className.indexOf=="function"&&m.target.className.indexOf("contract-trigger")<0&&m.target.className.indexOf("expand-trigger")<0)return;const _=this;o(this),this.__resizeRAF__&&md(this.__resizeRAF__),this.__resizeRAF__=gd(function(){s(_)&&(_.__resizeLast__.width=_.offsetWidth,_.__resizeLast__.height=_.offsetHeight,_.__resizeListeners__.forEach(function(S){S.call(_,m)}))})};let f=!1,g="";r="animationstart";const b="Webkit Moz O ms".split(" ");let v="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),h="";{const m=document.createElement("fakeelement");if(m.style.animationName!==void 0&&(f=!0),f===!1){for(let _=0;_<b.length;_++)if(m.style[b[_]+"AnimationName"]!==void 0){h=b[_],g="-"+h.toLowerCase()+"-",r=v[_],f=!0;break}}}n="resizeanim",t="@"+g+"keyframes "+n+" { from { opacity: 0; } to { opacity: 0; } } ",i=g+"animation: 1ms "+n+"; "}const u=function(f){if(!f.getElementById("detectElementResize")){const g=(t||"")+".resize-triggers { "+(i||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',b=f.head||f.getElementsByTagName("head")[0],v=f.createElement("style");v.id="detectElementResize",v.type="text/css",e!=null&&v.setAttribute("nonce",e),v.styleSheet?v.styleSheet.cssText=g:v.appendChild(f.createTextNode(g)),b.appendChild(v)}};return{addResizeListener:function(f,g){if(l)f.attachEvent("onresize",g);else{if(!f.__resizeTriggers__){const b=f.ownerDocument,v=Rt.getComputedStyle(f);v&&v.position==="static"&&(f.style.position="relative"),u(b),f.__resizeLast__={},f.__resizeListeners__=[],(f.__resizeTriggers__=b.createElement("div")).className="resize-triggers";const h=b.createElement("div");h.className="expand-trigger",h.appendChild(b.createElement("div"));const m=b.createElement("div");m.className="contract-trigger",f.__resizeTriggers__.appendChild(h),f.__resizeTriggers__.appendChild(m),f.appendChild(f.__resizeTriggers__),o(f),f.addEventListener("scroll",a,!0),r&&(f.__resizeTriggers__.__animationListener__=function(y){y.animationName===n&&o(f)},f.__resizeTriggers__.addEventListener(r,f.__resizeTriggers__.__animationListener__))}f.__resizeListeners__.push(g)}},removeResizeListener:function(f,g){if(l)f.detachEvent("onresize",g);else if(f.__resizeListeners__.splice(f.__resizeListeners__.indexOf(g),1),!f.__resizeListeners__.length){f.removeEventListener("scroll",a,!0),f.__resizeTriggers__.__animationListener__&&(f.__resizeTriggers__.removeEventListener(r,f.__resizeTriggers__.__animationListener__),f.__resizeTriggers__.__animationListener__=null);try{f.__resizeTriggers__=!f.removeChild(f.__resizeTriggers__)}catch{}}}}}class QP extends T.Component{constructor(...t){super(...t),this.state={height:this.props.defaultHeight||0,scaledHeight:this.props.defaultHeight||0,scaledWidth:this.props.defaultWidth||0,width:this.props.defaultWidth||0},this._autoSizer=null,this._detectElementResize=null,this._parentNode=null,this._resizeObserver=null,this._timeoutId=null,this._onResize=()=>{this._timeoutId=null;const{disableHeight:n,disableWidth:r,onResize:i}=this.props;if(this._parentNode){var s,o,a,l;const u=window.getComputedStyle(this._parentNode)||{},c=parseFloat((s=u.paddingLeft)!==null&&s!==void 0?s:"0"),d=parseFloat((o=u.paddingRight)!==null&&o!==void 0?o:"0"),f=parseFloat((a=u.paddingTop)!==null&&a!==void 0?a:"0"),g=parseFloat((l=u.paddingBottom)!==null&&l!==void 0?l:"0"),b=this._parentNode.getBoundingClientRect(),v=b.height-f-g,h=b.width-c-d,m=this._parentNode.offsetHeight-f-g,_=this._parentNode.offsetWidth-c-d;(!n&&(this.state.height!==m||this.state.scaledHeight!==v)||!r&&(this.state.width!==_||this.state.scaledWidth!==h))&&(this.setState({height:m,width:_,scaledHeight:v,scaledWidth:h}),typeof i=="function"&&i({height:m,scaledHeight:v,scaledWidth:h,width:_}))}},this._setRef=n=>{this._autoSizer=n}}componentDidMount(){const{nonce:t}=this.props;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._parentNode!=null&&(typeof ResizeObserver<"u"?(this._resizeObserver=new ResizeObserver(()=>{this._timeoutId=setTimeout(this._onResize,0)}),this._resizeObserver.observe(this._parentNode)):(this._detectElementResize=YP(t),this._detectElementResize.addResizeListener(this._parentNode,this._onResize)),this._onResize()))}componentWillUnmount(){this._parentNode&&(this._detectElementResize&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize),this._timeoutId!==null&&clearTimeout(this._timeoutId),this._resizeObserver&&(this._resizeObserver.observe(this._parentNode),this._resizeObserver.disconnect()))}render(){const{children:t,defaultHeight:n,defaultWidth:r,disableHeight:i=!1,disableWidth:s=!1,nonce:o,onResize:a,style:l={},tagName:u="div",...c}=this.props,{height:d,scaledHeight:f,scaledWidth:g,width:b}=this.state,v={overflow:"visible"},h={};let m=!1;return i||(d===0&&(m=!0),v.height=0,h.height=d,h.scaledHeight=f),s||(b===0&&(m=!0),v.width=0,h.width=b,h.scaledWidth=g),T.createElement(u,{ref:this._setRef,style:{...v,...l},...c},!m&&t(h))}}function XP(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,pd(e,t)}var F_=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function KP(e,t){return!!(e===t||F_(e)&&F_(t))}function ZP(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!KP(e[n],t[n]))return!1;return!0}function Nc(e,t){t===void 0&&(t=ZP);var n,r=[],i,s=!1;function o(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return s&&n===this&&t(a,r)||(i=e.apply(this,a),s=!0,n=this,r=a),i}return o}var JP=typeof performance=="object"&&typeof performance.now=="function",$_=JP?function(){return performance.now()}:function(){return Date.now()};function B_(e){cancelAnimationFrame(e.id)}function eC(e,t){var n=$_();function r(){$_()-n>=t?e.call(null):i.id=requestAnimationFrame(r)}var i={id:requestAnimationFrame(r)};return i}var Mc=-1;function V_(e){if(e===void 0&&(e=!1),Mc===-1||e){var t=document.createElement("div"),n=t.style;n.width="50px",n.height="50px",n.overflow="scroll",document.body.appendChild(t),Mc=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return Mc}var Kr=null;function W_(e){if(e===void 0&&(e=!1),Kr===null||e){var t=document.createElement("div"),n=t.style;n.width="50px",n.height="50px",n.overflow="scroll",n.direction="rtl";var r=document.createElement("div"),i=r.style;return i.width="100px",i.height="100px",t.appendChild(r),document.body.appendChild(t),t.scrollLeft>0?Kr="positive-descending":(t.scrollLeft=1,t.scrollLeft===0?Kr="negative":Kr="positive-ascending"),document.body.removeChild(t),Kr}return Kr}var tC=150,nC=function(t,n){return t};function rC(e){var t,n=e.getItemOffset,r=e.getEstimatedTotalSize,i=e.getItemSize,s=e.getOffsetForIndexAndAlignment,o=e.getStartIndexForOffset,a=e.getStopIndexForStartIndex,l=e.initInstanceProps,u=e.shouldResetStyleCacheOnItemSizeChange,c=e.validateProps;return t=function(d){XP(f,d);function f(b){var v;return v=d.call(this,b)||this,v._instanceProps=l(v.props,M_(v)),v._outerRef=void 0,v._resetIsScrollingTimeoutId=null,v.state={instance:M_(v),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof v.props.initialScrollOffset=="number"?v.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},v._callOnItemsRendered=void 0,v._callOnItemsRendered=Nc(function(h,m,_,y){return v.props.onItemsRendered({overscanStartIndex:h,overscanStopIndex:m,visibleStartIndex:_,visibleStopIndex:y})}),v._callOnScroll=void 0,v._callOnScroll=Nc(function(h,m,_){return v.props.onScroll({scrollDirection:h,scrollOffset:m,scrollUpdateWasRequested:_})}),v._getItemStyle=void 0,v._getItemStyle=function(h){var m=v.props,_=m.direction,y=m.itemSize,p=m.layout,S=v._getItemStyleCache(u&&y,u&&p,u&&_),w;if(S.hasOwnProperty(h))w=S[h];else{var E=n(v.props,h,v._instanceProps),x=i(v.props,h,v._instanceProps),k=_==="horizontal"||p==="horizontal",A=_==="rtl",Y=k?E:0;S[h]=w={position:"absolute",left:A?void 0:Y,right:A?Y:void 0,top:k?0:E,height:k?"100%":x,width:k?x:"100%"}}return w},v._getItemStyleCache=void 0,v._getItemStyleCache=Nc(function(h,m,_){return{}}),v._onScrollHorizontal=function(h){var m=h.currentTarget,_=m.clientWidth,y=m.scrollLeft,p=m.scrollWidth;v.setState(function(S){if(S.scrollOffset===y)return null;var w=v.props.direction,E=y;if(w==="rtl")switch(W_()){case"negative":E=-y;break;case"positive-descending":E=p-_-y;break}return E=Math.max(0,Math.min(E,p-_)),{isScrolling:!0,scrollDirection:S.scrollOffset<y?"forward":"backward",scrollOffset:E,scrollUpdateWasRequested:!1}},v._resetIsScrollingDebounced)},v._onScrollVertical=function(h){var m=h.currentTarget,_=m.clientHeight,y=m.scrollHeight,p=m.scrollTop;v.setState(function(S){if(S.scrollOffset===p)return null;var w=Math.max(0,Math.min(p,y-_));return{isScrolling:!0,scrollDirection:S.scrollOffset<w?"forward":"backward",scrollOffset:w,scrollUpdateWasRequested:!1}},v._resetIsScrollingDebounced)},v._outerRefSetter=function(h){var m=v.props.outerRef;v._outerRef=h,typeof m=="function"?m(h):m!=null&&typeof m=="object"&&m.hasOwnProperty("current")&&(m.current=h)},v._resetIsScrollingDebounced=function(){v._resetIsScrollingTimeoutId!==null&&B_(v._resetIsScrollingTimeoutId),v._resetIsScrollingTimeoutId=eC(v._resetIsScrolling,tC)},v._resetIsScrolling=function(){v._resetIsScrollingTimeoutId=null,v.setState({isScrolling:!1},function(){v._getItemStyleCache(-1,null)})},v}f.getDerivedStateFromProps=function(v,h){return iC(v,h),c(v),null};var g=f.prototype;return g.scrollTo=function(v){v=Math.max(0,v),this.setState(function(h){return h.scrollOffset===v?null:{scrollDirection:h.scrollOffset<v?"forward":"backward",scrollOffset:v,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},g.scrollToItem=function(v,h){h===void 0&&(h="auto");var m=this.props,_=m.itemCount,y=m.layout,p=this.state.scrollOffset;v=Math.max(0,Math.min(v,_-1));var S=0;if(this._outerRef){var w=this._outerRef;y==="vertical"?S=w.scrollWidth>w.clientWidth?V_():0:S=w.scrollHeight>w.clientHeight?V_():0}this.scrollTo(s(this.props,v,h,p,this._instanceProps,S))},g.componentDidMount=function(){var v=this.props,h=v.direction,m=v.initialScrollOffset,_=v.layout;if(typeof m=="number"&&this._outerRef!=null){var y=this._outerRef;h==="horizontal"||_==="horizontal"?y.scrollLeft=m:y.scrollTop=m}this._callPropsCallbacks()},g.componentDidUpdate=function(){var v=this.props,h=v.direction,m=v.layout,_=this.state,y=_.scrollOffset,p=_.scrollUpdateWasRequested;if(p&&this._outerRef!=null){var S=this._outerRef;if(h==="horizontal"||m==="horizontal")if(h==="rtl")switch(W_()){case"negative":S.scrollLeft=-y;break;case"positive-ascending":S.scrollLeft=y;break;default:var w=S.clientWidth,E=S.scrollWidth;S.scrollLeft=E-w-y;break}else S.scrollLeft=y;else S.scrollTop=y}this._callPropsCallbacks()},g.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&B_(this._resetIsScrollingTimeoutId)},g.render=function(){var v=this.props,h=v.children,m=v.className,_=v.direction,y=v.height,p=v.innerRef,S=v.innerElementType,w=v.innerTagName,E=v.itemCount,x=v.itemData,k=v.itemKey,A=k===void 0?nC:k,Y=v.layout,z=v.outerElementType,C=v.outerTagName,L=v.style,P=v.useIsScrolling,j=v.width,N=this.state.isScrolling,H=_==="horizontal"||Y==="horizontal",G=H?this._onScrollHorizontal:this._onScrollVertical,Q=this._getRangeToRender(),I=Q[0],M=Q[1],F=[];if(E>0)for(var B=I;B<=M;B++)F.push(T.createElement(h,{data:x,key:A(B,x),index:B,isScrolling:P?N:void 0,style:this._getItemStyle(B)}));var J=r(this.props,this._instanceProps);return T.createElement(z||C||"div",{className:m,onScroll:G,ref:this._outerRefSetter,style:td({position:"relative",height:y,width:j,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:_},L)},T.createElement(S||w||"div",{children:F,ref:p,style:{height:H?"100%":J,pointerEvents:N?"none":void 0,width:H?J:"100%"}}))},g._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var v=this.props.itemCount;if(v>0){var h=this._getRangeToRender(),m=h[0],_=h[1],y=h[2],p=h[3];this._callOnItemsRendered(m,_,y,p)}}if(typeof this.props.onScroll=="function"){var S=this.state,w=S.scrollDirection,E=S.scrollOffset,x=S.scrollUpdateWasRequested;this._callOnScroll(w,E,x)}},g._getRangeToRender=function(){var v=this.props,h=v.itemCount,m=v.overscanCount,_=this.state,y=_.isScrolling,p=_.scrollDirection,S=_.scrollOffset;if(h===0)return[0,0,0,0];var w=o(this.props,S,this._instanceProps),E=a(this.props,w,S,this._instanceProps),x=!y||p==="backward"?Math.max(1,m):1,k=!y||p==="forward"?Math.max(1,m):1;return[Math.max(0,w-x),Math.max(0,Math.min(h-1,E+k)),w,E]},f}(T.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},t}var iC=function(t,n){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,n.instance},sC=50,ui=function(t,n,r){var i=t,s=i.itemSize,o=r.itemMetadataMap,a=r.lastMeasuredIndex;if(n>a){var l=0;if(a>=0){var u=o[a];l=u.offset+u.size}for(var c=a+1;c<=n;c++){var d=s(c);o[c]={offset:l,size:d},l+=d}r.lastMeasuredIndex=n}return o[n]},oC=function(t,n,r){var i=n.itemMetadataMap,s=n.lastMeasuredIndex,o=s>0?i[s].offset:0;return o>=r?fb(t,n,s,0,r):aC(t,n,Math.max(0,s),r)},fb=function(t,n,r,i,s){for(;i<=r;){var o=i+Math.floor((r-i)/2),a=ui(t,o,n).offset;if(a===s)return o;a<s?i=o+1:a>s&&(r=o-1)}return i>0?i-1:0},aC=function(t,n,r,i){for(var s=t.itemCount,o=1;r<s&&ui(t,r,n).offset<i;)r+=o,o*=2;return fb(t,n,Math.min(r,s-1),Math.floor(r/2),i)},j_=function(t,n){var r=t.itemCount,i=n.itemMetadataMap,s=n.estimatedItemSize,o=n.lastMeasuredIndex,a=0;if(o>=r&&(o=r-1),o>=0){var l=i[o];a=l.offset+l.size}var u=r-o-1,c=u*s;return a+c},lC=rC({getItemOffset:function(t,n,r){return ui(t,n,r).offset},getItemSize:function(t,n,r){return r.itemMetadataMap[n].size},getEstimatedTotalSize:j_,getOffsetForIndexAndAlignment:function(t,n,r,i,s,o){var a=t.direction,l=t.height,u=t.layout,c=t.width,d=a==="horizontal"||u==="horizontal",f=d?c:l,g=ui(t,n,s),b=j_(t,s),v=Math.max(0,Math.min(b-f,g.offset)),h=Math.max(0,g.offset-f+g.size+o);switch(r==="smart"&&(i>=h-f&&i<=v+f?r="auto":r="center"),r){case"start":return v;case"end":return h;case"center":return Math.round(h+(v-h)/2);case"auto":default:return i>=h&&i<=v?i:i<h?h:v}},getStartIndexForOffset:function(t,n,r){return oC(t,r,n)},getStopIndexForStartIndex:function(t,n,r,i){for(var s=t.direction,o=t.height,a=t.itemCount,l=t.layout,u=t.width,c=s==="horizontal"||l==="horizontal",d=c?u:o,f=ui(t,n,i),g=r+d,b=f.offset+f.size,v=n;v<a-1&&b<g;)v++,b+=ui(t,v,i).size;return v},initInstanceProps:function(t,n){var r=t,i=r.estimatedItemSize,s={itemMetadataMap:{},estimatedItemSize:i||sC,lastMeasuredIndex:-1};return n.resetAfterIndex=function(o,a){a===void 0&&(a=!0),s.lastMeasuredIndex=Math.min(s.lastMeasuredIndex,o-1),n._getItemStyleCache(-1),a&&n.forceUpdate()},s},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.itemSize}});const uC=()=>{const e=T.useState(0)[1];return()=>e(t=>t+1)};function ir(e){const t=uC();T.useLayoutEffect(()=>{if(e)return e(t).dispose},[e,t])}const cC="_page_w4dq5_1",fC="_header_w4dq5_5",dC="_webpages-container_w4dq5_14",hC="_webpage-title_w4dq5_22",pC="_webpage-extra_w4dq5_32",Gs={page:cC,header:fC,"webpages-container":"_webpages-container_w4dq5_14",webpagesContainer:dC,"webpage-title":"_webpage-title_w4dq5_22",webpageTitle:hC,"webpage-extra":"_webpage-extra_w4dq5_32",webpageExtra:pC},mC="/mobile/assets/international-5f9f0e10.svg",gC=V.forwardRef(({style:e,...t},n)=>O("div",{ref:n,style:{...e,height:`${parseFloat(e.height)}px`},...t})),_C=({mobileWebpagesController:e})=>{const t=Mr(Po),n=t.getList();ir(t.onListChange);const r=T.useRef();if(T.useEffect(()=>{!r.current||!n||r.current.scrollTo(n.scrollOffset)},[n]),!n)return O("div",{});if(n.webpages.length===0)return O("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:"No webpages"});const i=({index:s,style:o})=>{const a=n.webpages[s];let l="";try{l=new URL(a.link).host}catch{}return O("div",{style:{...o,padding:"8px",boxSizing:"border-box"},onClick:()=>{e.selectWebpage(a.id)},children:ke("div",{style:{margin:4,border:"1px solid #E6E6E6",borderRadius:8,padding:8,background:"white"},children:[O("div",{className:Gs.webpageTitle,children:a.title}),ke("div",{className:Gs.webpageExtra,children:[O("span",{children:O("img",{src:mC})}),ke("span",{children:[" ",l]}),O("span",{children:" · "}),ke("span",{children:[" ",_p().format("YYYY-MM-DD")]})]})]})})};return O(V.Fragment,{children:O(QP,{children:({height:s,width:o})=>O(lC,{ref:r,onScroll:a=>{t.handleScroll(a.scrollOffset)},width:o,initialScrollOffset:n.scrollOffset,height:s,innerElementType:gC,itemCount:n.webpages.length,itemSize:n.itemHeight,children:i})})})},vC=e=>{const t=e.instance;return ir(t.onTabChange),ir(t.onWebpagesChange),ke("div",{className:Gs.page,children:[O("div",{className:Gs.header,children:O(N_,{activeKey:t.activeTab.id,onChange:n=>{t.selectTab(n)},children:t.tabs.map(n=>O(N_.Tab,{title:n.title,"data-test-id":`parts-mobile_webpages_tab_${n.id}`},n.id))})}),O("div",{className:Gs.webpagesContainer,children:O(_C,{mobileWebpagesController:t})})]})},yC="_tab-bar_vnf0m_1",bC={"tab-bar":"_tab-bar_vnf0m_1",tabBar:yC},wC=()=>{const e=Mr(G0);return ir(e.onStateChange),e.visible?O("div",{className:bC.tabBar,children:O(pr,{activeKey:e.activeId,onChange:t=>{e.click(t)},children:e.items.map(t=>{const n={WebPage:IT,Search:RT}[t.icon];return O(pr.Item,{icon:n,title:t.title},t.id)})})}):O("div",{})};var db=(e=>(e[e.text=0]="text",e[e.base64=1]="base64",e))(db||{}),vp={exports:{}},pe=String,hb=function(){return{isColorSupported:!1,reset:pe,bold:pe,dim:pe,italic:pe,underline:pe,inverse:pe,hidden:pe,strikethrough:pe,black:pe,red:pe,green:pe,yellow:pe,blue:pe,magenta:pe,cyan:pe,white:pe,gray:pe,bgBlack:pe,bgRed:pe,bgGreen:pe,bgYellow:pe,bgBlue:pe,bgMagenta:pe,bgCyan:pe,bgWhite:pe}};vp.exports=hb();vp.exports.createColors=hb;var SC=vp.exports;const EC={},xC=Object.freeze(Object.defineProperty({__proto__:null,default:EC},Symbol.toStringTag,{value:"Module"})),jt=tE(xC);let z_=SC,H_=jt,_d=class pb extends Error{constructor(t,n,r,i,s,o){super(t),this.name="CssSyntaxError",this.reason=t,s&&(this.file=s),i&&(this.source=i),o&&(this.plugin=o),typeof n<"u"&&typeof r<"u"&&(typeof n=="number"?(this.line=n,this.column=r):(this.line=n.line,this.column=n.column,this.endLine=r.line,this.endColumn=r.column)),this.setMessage(),Error.captureStackTrace&&Error.captureStackTrace(this,pb)}setMessage(){this.message=this.plugin?this.plugin+": ":"",this.message+=this.file?this.file:"<css input>",typeof this.line<"u"&&(this.message+=":"+this.line+":"+this.column),this.message+=": "+this.reason}showSourceCode(t){if(!this.source)return"";let n=this.source;t==null&&(t=z_.isColorSupported),H_&&t&&(n=H_(n));let r=n.split(/\r?\n/),i=Math.max(this.line-3,0),s=Math.min(this.line+2,r.length),o=String(s).length,a,l;if(t){let{bold:u,red:c,gray:d}=z_.createColors(!0);a=f=>u(c(f)),l=f=>d(f)}else a=l=u=>u;return r.slice(i,s).map((u,c)=>{let d=i+1+c,f=" "+(" "+d).slice(-o)+" | ";if(d===this.line){let g=l(f.replace(/\d/g," "))+u.slice(0,this.column-1).replace(/[^\t]/g," ");return a(">")+l(f)+u+`
 `+g+a("^")}return" "+l(f)+u}).join(`
`)}toString(){let t=this.showSourceCode();return t&&(t=`

`+t+`
`),this.name+": "+this.message+t}};var yp=_d;_d.default=_d;var Fo={};Fo.isClean=Symbol("isClean");Fo.my=Symbol("my");const G_={colon:": ",indent:"    ",beforeDecl:`
`,beforeRule:`
`,beforeOpen:" ",beforeClose:`
`,beforeComment:`
`,after:`
`,emptyBody:"",commentLeft:" ",commentRight:" ",semicolon:!1};function kC(e){return e[0].toUpperCase()+e.slice(1)}let vd=class{constructor(t){this.builder=t}stringify(t,n){if(!this[t.type])throw new Error("Unknown AST node type "+t.type+". Maybe you need to change PostCSS stringifier.");this[t.type](t,n)}document(t){this.body(t)}root(t){this.body(t),t.raws.after&&this.builder(t.raws.after)}comment(t){let n=this.raw(t,"left","commentLeft"),r=this.raw(t,"right","commentRight");this.builder("/*"+n+t.text+r+"*/",t)}decl(t,n){let r=this.raw(t,"between","colon"),i=t.prop+r+this.rawValue(t,"value");t.important&&(i+=t.raws.important||" !important"),n&&(i+=";"),this.builder(i,t)}rule(t){this.block(t,this.rawValue(t,"selector")),t.raws.ownSemicolon&&this.builder(t.raws.ownSemicolon,t,"end")}atrule(t,n){let r="@"+t.name,i=t.params?this.rawValue(t,"params"):"";if(typeof t.raws.afterName<"u"?r+=t.raws.afterName:i&&(r+=" "),t.nodes)this.block(t,r+i);else{let s=(t.raws.between||"")+(n?";":"");this.builder(r+i+s,t)}}body(t){let n=t.nodes.length-1;for(;n>0&&t.nodes[n].type==="comment";)n-=1;let r=this.raw(t,"semicolon");for(let i=0;i<t.nodes.length;i++){let s=t.nodes[i],o=this.raw(s,"before");o&&this.builder(o),this.stringify(s,n!==i||r)}}block(t,n){let r=this.raw(t,"between","beforeOpen");this.builder(n+r+"{",t,"start");let i;t.nodes&&t.nodes.length?(this.body(t),i=this.raw(t,"after")):i=this.raw(t,"after","emptyBody"),i&&this.builder(i),this.builder("}",t,"end")}raw(t,n,r){let i;if(r||(r=n),n&&(i=t.raws[n],typeof i<"u"))return i;let s=t.parent;if(r==="before"&&(!s||s.type==="root"&&s.first===t||s&&s.type==="document"))return"";if(!s)return G_[r];let o=t.root();if(o.rawCache||(o.rawCache={}),typeof o.rawCache[r]<"u")return o.rawCache[r];if(r==="before"||r==="after")return this.beforeAfter(t,r);{let a="raw"+kC(r);this[a]?i=this[a](o,t):o.walk(l=>{if(i=l.raws[n],typeof i<"u")return!1})}return typeof i>"u"&&(i=G_[r]),o.rawCache[r]=i,i}rawSemicolon(t){let n;return t.walk(r=>{if(r.nodes&&r.nodes.length&&r.last.type==="decl"&&(n=r.raws.semicolon,typeof n<"u"))return!1}),n}rawEmptyBody(t){let n;return t.walk(r=>{if(r.nodes&&r.nodes.length===0&&(n=r.raws.after,typeof n<"u"))return!1}),n}rawIndent(t){if(t.raws.indent)return t.raws.indent;let n;return t.walk(r=>{let i=r.parent;if(i&&i!==t&&i.parent&&i.parent===t&&typeof r.raws.before<"u"){let s=r.raws.before.split(`
`);return n=s[s.length-1],n=n.replace(/\S/g,""),!1}}),n}rawBeforeComment(t,n){let r;return t.walkComments(i=>{if(typeof i.raws.before<"u")return r=i.raws.before,r.includes(`
`)&&(r=r.replace(/[^\n]+$/,"")),!1}),typeof r>"u"?r=this.raw(n,null,"beforeDecl"):r&&(r=r.replace(/\S/g,"")),r}rawBeforeDecl(t,n){let r;return t.walkDecls(i=>{if(typeof i.raws.before<"u")return r=i.raws.before,r.includes(`
`)&&(r=r.replace(/[^\n]+$/,"")),!1}),typeof r>"u"?r=this.raw(n,null,"beforeRule"):r&&(r=r.replace(/\S/g,"")),r}rawBeforeRule(t){let n;return t.walk(r=>{if(r.nodes&&(r.parent!==t||t.first!==r)&&typeof r.raws.before<"u")return n=r.raws.before,n.includes(`
`)&&(n=n.replace(/[^\n]+$/,"")),!1}),n&&(n=n.replace(/\S/g,"")),n}rawBeforeClose(t){let n;return t.walk(r=>{if(r.nodes&&r.nodes.length>0&&typeof r.raws.after<"u")return n=r.raws.after,n.includes(`
`)&&(n=n.replace(/[^\n]+$/,"")),!1}),n&&(n=n.replace(/\S/g,"")),n}rawBeforeOpen(t){let n;return t.walk(r=>{if(r.type!=="decl"&&(n=r.raws.between,typeof n<"u"))return!1}),n}rawColon(t){let n;return t.walkDecls(r=>{if(typeof r.raws.between<"u")return n=r.raws.between.replace(/[^\s:]/g,""),!1}),n}beforeAfter(t,n){let r;t.type==="decl"?r=this.raw(t,null,"beforeDecl"):t.type==="comment"?r=this.raw(t,null,"beforeComment"):n==="before"?r=this.raw(t,null,"beforeRule"):r=this.raw(t,null,"beforeClose");let i=t.parent,s=0;for(;i&&i.type!=="root";)s+=1,i=i.parent;if(r.includes(`
`)){let o=this.raw(t,null,"indent");if(o.length)for(let a=0;a<s;a++)r+=o}return r}rawValue(t,n){let r=t[n],i=t.raws[n];return i&&i.value===r?i.raw:r}};var mb=vd;vd.default=vd;let TC=mb;function yd(e,t){new TC(t).stringify(e)}var Ou=yd;yd.default=yd;let{isClean:la,my:RC}=Fo,AC=yp,IC=mb,OC=Ou;function bd(e,t){let n=new e.constructor;for(let r in e){if(!Object.prototype.hasOwnProperty.call(e,r)||r==="proxyCache")continue;let i=e[r],s=typeof i;r==="parent"&&s==="object"?t&&(n[r]=t):r==="source"?n[r]=i:Array.isArray(i)?n[r]=i.map(o=>bd(o,n)):(s==="object"&&i!==null&&(i=bd(i)),n[r]=i)}return n}let wd=class{constructor(t={}){this.raws={},this[la]=!1,this[RC]=!0;for(let n in t)if(n==="nodes"){this.nodes=[];for(let r of t[n])typeof r.clone=="function"?this.append(r.clone()):this.append(r)}else this[n]=t[n]}error(t,n={}){if(this.source){let{start:r,end:i}=this.rangeBy(n);return this.source.input.error(t,{line:r.line,column:r.column},{line:i.line,column:i.column},n)}return new AC(t)}warn(t,n,r){let i={node:this};for(let s in r)i[s]=r[s];return t.warn(n,i)}remove(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this}toString(t=OC){t.stringify&&(t=t.stringify);let n="";return t(this,r=>{n+=r}),n}assign(t={}){for(let n in t)this[n]=t[n];return this}clone(t={}){let n=bd(this);for(let r in t)n[r]=t[r];return n}cloneBefore(t={}){let n=this.clone(t);return this.parent.insertBefore(this,n),n}cloneAfter(t={}){let n=this.clone(t);return this.parent.insertAfter(this,n),n}replaceWith(...t){if(this.parent){let n=this,r=!1;for(let i of t)i===this?r=!0:r?(this.parent.insertAfter(n,i),n=i):this.parent.insertBefore(n,i);r||this.remove()}return this}next(){if(!this.parent)return;let t=this.parent.index(this);return this.parent.nodes[t+1]}prev(){if(!this.parent)return;let t=this.parent.index(this);return this.parent.nodes[t-1]}before(t){return this.parent.insertBefore(this,t),this}after(t){return this.parent.insertAfter(this,t),this}root(){let t=this;for(;t.parent&&t.parent.type!=="document";)t=t.parent;return t}raw(t,n){return new IC().raw(this,t,n)}cleanRaws(t){delete this.raws.before,delete this.raws.after,t||delete this.raws.between}toJSON(t,n){let r={},i=n==null;n=n||new Map;let s=0;for(let o in this){if(!Object.prototype.hasOwnProperty.call(this,o)||o==="parent"||o==="proxyCache")continue;let a=this[o];if(Array.isArray(a))r[o]=a.map(l=>typeof l=="object"&&l.toJSON?l.toJSON(null,n):l);else if(typeof a=="object"&&a.toJSON)r[o]=a.toJSON(null,n);else if(o==="source"){let l=n.get(a.input);l==null&&(l=s,n.set(a.input,s),s++),r[o]={inputId:l,start:a.start,end:a.end}}else r[o]=a}return i&&(r.inputs=[...n.keys()].map(o=>o.toJSON())),r}positionInside(t){let n=this.toString(),r=this.source.start.column,i=this.source.start.line;for(let s=0;s<t;s++)n[s]===`
`?(r=1,i+=1):r+=1;return{line:i,column:r}}positionBy(t){let n=this.source.start;if(t.index)n=this.positionInside(t.index);else if(t.word){let r=this.toString().indexOf(t.word);r!==-1&&(n=this.positionInside(r))}return n}rangeBy(t){let n={line:this.source.start.line,column:this.source.start.column},r=this.source.end?{line:this.source.end.line,column:this.source.end.column+1}:{line:n.line,column:n.column+1};if(t.word){let i=this.toString().indexOf(t.word);i!==-1&&(n=this.positionInside(i),r=this.positionInside(i+t.word.length))}else t.start?n={line:t.start.line,column:t.start.column}:t.index&&(n=this.positionInside(t.index)),t.end?r={line:t.end.line,column:t.end.column}:t.endIndex?r=this.positionInside(t.endIndex):t.index&&(r=this.positionInside(t.index+1));return(r.line<n.line||r.line===n.line&&r.column<=n.column)&&(r={line:n.line,column:n.column+1}),{start:n,end:r}}getProxyProcessor(){return{set(t,n,r){return t[n]===r||(t[n]=r,(n==="prop"||n==="value"||n==="name"||n==="params"||n==="important"||n==="text")&&t.markDirty()),!0},get(t,n){return n==="proxyOf"?t:n==="root"?()=>t.root().toProxy():t[n]}}}toProxy(){return this.proxyCache||(this.proxyCache=new Proxy(this,this.getProxyProcessor())),this.proxyCache}addToError(t){if(t.postcssNode=this,t.stack&&this.source&&/\n\s{4}at /.test(t.stack)){let n=this.source;t.stack=t.stack.replace(/\n\s{4}at /,`$&${n.input.from}:${n.start.line}:${n.start.column}$&`)}return t}markDirty(){if(this[la]){this[la]=!1;let t=this;for(;t=t.parent;)t[la]=!1}}get proxyOf(){return this}};var Lu=wd;wd.default=wd;let LC=Lu,Sd=class extends LC{constructor(t){t&&typeof t.value<"u"&&typeof t.value!="string"&&(t={...t,value:String(t.value)}),super(t),this.type="decl"}get variable(){return this.prop.startsWith("--")||this.prop[0]==="$"}};var Nu=Sd;Sd.default=Sd;let NC="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",MC=(e,t=21)=>(n=t)=>{let r="",i=n;for(;i--;)r+=e[Math.random()*e.length|0];return r},PC=(e=21)=>{let t="",n=e;for(;n--;)t+=NC[Math.random()*64|0];return t};var CC={nanoid:PC,customAlphabet:MC};let{SourceMapConsumer:q_,SourceMapGenerator:Y_}=jt,{existsSync:DC,readFileSync:UC}=jt,{dirname:Pc,join:FC}=jt;function $C(e){return Buffer?Buffer.from(e,"base64").toString():window.atob(e)}let Ed=class{constructor(t,n){if(n.map===!1)return;this.loadAnnotation(t),this.inline=this.startWith(this.annotation,"data:");let r=n.map?n.map.prev:void 0,i=this.loadMap(n.from,r);!this.mapFile&&n.from&&(this.mapFile=n.from),this.mapFile&&(this.root=Pc(this.mapFile)),i&&(this.text=i)}consumer(){return this.consumerCache||(this.consumerCache=new q_(this.text)),this.consumerCache}withContent(){return!!(this.consumer().sourcesContent&&this.consumer().sourcesContent.length>0)}startWith(t,n){return t?t.substr(0,n.length)===n:!1}getAnnotationURL(t){return t.replace(/^\/\*\s*# sourceMappingURL=/,"").trim()}loadAnnotation(t){let n=t.match(/\/\*\s*# sourceMappingURL=/gm);if(!n)return;let r=t.lastIndexOf(n.pop()),i=t.indexOf("*/",r);r>-1&&i>-1&&(this.annotation=this.getAnnotationURL(t.substring(r,i)))}decodeInline(t){let n=/^data:application\/json;charset=utf-?8;base64,/,r=/^data:application\/json;base64,/,i=/^data:application\/json;charset=utf-?8,/,s=/^data:application\/json,/;if(i.test(t)||s.test(t))return decodeURIComponent(t.substr(RegExp.lastMatch.length));if(n.test(t)||r.test(t))return $C(t.substr(RegExp.lastMatch.length));let o=t.match(/data:application\/json;([^,]+),/)[1];throw new Error("Unsupported source map encoding "+o)}loadFile(t){if(this.root=Pc(t),DC(t))return this.mapFile=t,UC(t,"utf-8").toString().trim()}loadMap(t,n){if(n===!1)return!1;if(n){if(typeof n=="string")return n;if(typeof n=="function"){let r=n(t);if(r){let i=this.loadFile(r);if(!i)throw new Error("Unable to load previous source map: "+r.toString());return i}}else{if(n instanceof q_)return Y_.fromSourceMap(n).toString();if(n instanceof Y_)return n.toString();if(this.isMap(n))return JSON.stringify(n);throw new Error("Unsupported previous source map format: "+n.toString())}}else{if(this.inline)return this.decodeInline(this.annotation);if(this.annotation){let r=this.annotation;return t&&(r=FC(Pc(t),r)),this.loadFile(r)}}}isMap(t){return typeof t!="object"?!1:typeof t.mappings=="string"||typeof t._mappings=="string"||Array.isArray(t.sections)}};var gb=Ed;Ed.default=Ed;let{SourceMapConsumer:BC,SourceMapGenerator:VC}=jt,{fileURLToPath:Q_,pathToFileURL:ua}=jt,{resolve:xd,isAbsolute:kd}=jt,{nanoid:WC}=CC,Cc=jt,X_=yp,jC=gb,Dc=Symbol("fromOffsetCache"),zC=!!(BC&&VC),K_=!!(xd&&kd),Ll=class{constructor(t,n={}){if(t===null||typeof t>"u"||typeof t=="object"&&!t.toString)throw new Error(`PostCSS received ${t} instead of CSS string`);if(this.css=t.toString(),this.css[0]==="\uFEFF"||this.css[0]==="￾"?(this.hasBOM=!0,this.css=this.css.slice(1)):this.hasBOM=!1,n.from&&(!K_||/^\w+:\/\//.test(n.from)||kd(n.from)?this.file=n.from:this.file=xd(n.from)),K_&&zC){let r=new jC(this.css,n);if(r.text){this.map=r;let i=r.consumer().file;!this.file&&i&&(this.file=this.mapResolve(i))}}this.file||(this.id="<input css "+WC(6)+">"),this.map&&(this.map.file=this.from)}fromOffset(t){let n,r;if(this[Dc])r=this[Dc];else{let s=this.css.split(`
`);r=new Array(s.length);let o=0;for(let a=0,l=s.length;a<l;a++)r[a]=o,o+=s[a].length+1;this[Dc]=r}n=r[r.length-1];let i=0;if(t>=n)i=r.length-1;else{let s=r.length-2,o;for(;i<s;)if(o=i+(s-i>>1),t<r[o])s=o-1;else if(t>=r[o+1])i=o+1;else{i=o;break}}return{line:i+1,col:t-r[i]+1}}error(t,n,r,i={}){let s,o,a;if(n&&typeof n=="object"){let u=n,c=r;if(typeof n.offset=="number"){let d=this.fromOffset(u.offset);n=d.line,r=d.col}else n=u.line,r=u.column;if(typeof c.offset=="number"){let d=this.fromOffset(c.offset);o=d.line,a=d.col}else o=c.line,a=c.column}else if(!r){let u=this.fromOffset(n);n=u.line,r=u.col}let l=this.origin(n,r,o,a);return l?s=new X_(t,l.endLine===void 0?l.line:{line:l.line,column:l.column},l.endLine===void 0?l.column:{line:l.endLine,column:l.endColumn},l.source,l.file,i.plugin):s=new X_(t,o===void 0?n:{line:n,column:r},o===void 0?r:{line:o,column:a},this.css,this.file,i.plugin),s.input={line:n,column:r,endLine:o,endColumn:a,source:this.css},this.file&&(ua&&(s.input.url=ua(this.file).toString()),s.input.file=this.file),s}origin(t,n,r,i){if(!this.map)return!1;let s=this.map.consumer(),o=s.originalPositionFor({line:t,column:n});if(!o.source)return!1;let a;typeof r=="number"&&(a=s.originalPositionFor({line:r,column:i}));let l;kd(o.source)?l=ua(o.source):l=new URL(o.source,this.map.consumer().sourceRoot||ua(this.map.mapFile));let u={url:l.toString(),line:o.line,column:o.column,endLine:a&&a.line,endColumn:a&&a.column};if(l.protocol==="file:")if(Q_)u.file=Q_(l);else throw new Error("file: protocol is not available in this PostCSS build");let c=s.sourceContentFor(o.source);return c&&(u.source=c),u}mapResolve(t){return/^\w+:\/\//.test(t)?t:xd(this.map.consumer().sourceRoot||this.map.root||".",t)}get from(){return this.file||this.id}toJSON(){let t={};for(let n of["hasBOM","css","file","id"])this[n]!=null&&(t[n]=this[n]);return this.map&&(t.map={...this.map},t.map.consumerCache&&(t.map.consumerCache=void 0)),t}};var Mu=Ll;Ll.default=Ll;Cc&&Cc.registerInput&&Cc.registerInput(Ll);let{SourceMapConsumer:_b,SourceMapGenerator:Ba}=jt,{dirname:Va,resolve:vb,relative:yb,sep:bb}=jt,{pathToFileURL:Z_}=jt,HC=Mu,GC=!!(_b&&Ba),qC=!!(Va&&vb&&yb&&bb),YC=class{constructor(t,n,r,i){this.stringify=t,this.mapOpts=r.map||{},this.root=n,this.opts=r,this.css=i}isMap(){return typeof this.opts.map<"u"?!!this.opts.map:this.previous().length>0}previous(){if(!this.previousMaps)if(this.previousMaps=[],this.root)this.root.walk(t=>{if(t.source&&t.source.input.map){let n=t.source.input.map;this.previousMaps.includes(n)||this.previousMaps.push(n)}});else{let t=new HC(this.css,this.opts);t.map&&this.previousMaps.push(t.map)}return this.previousMaps}isInline(){if(typeof this.mapOpts.inline<"u")return this.mapOpts.inline;let t=this.mapOpts.annotation;return typeof t<"u"&&t!==!0?!1:this.previous().length?this.previous().some(n=>n.inline):!0}isSourcesContent(){return typeof this.mapOpts.sourcesContent<"u"?this.mapOpts.sourcesContent:this.previous().length?this.previous().some(t=>t.withContent()):!0}clearAnnotation(){if(this.mapOpts.annotation!==!1)if(this.root){let t;for(let n=this.root.nodes.length-1;n>=0;n--)t=this.root.nodes[n],t.type==="comment"&&t.text.indexOf("# sourceMappingURL=")===0&&this.root.removeChild(n)}else this.css&&(this.css=this.css.replace(/(\n)?\/\*#[\S\s]*?\*\/$/gm,""))}setSourcesContent(){let t={};if(this.root)this.root.walk(n=>{if(n.source){let r=n.source.input.from;r&&!t[r]&&(t[r]=!0,this.map.setSourceContent(this.toUrl(this.path(r)),n.source.input.css))}});else if(this.css){let n=this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>";this.map.setSourceContent(n,this.css)}}applyPrevMaps(){for(let t of this.previous()){let n=this.toUrl(this.path(t.file)),r=t.root||Va(t.file),i;this.mapOpts.sourcesContent===!1?(i=new _b(t.text),i.sourcesContent&&(i.sourcesContent=i.sourcesContent.map(()=>null))):i=t.consumer(),this.map.applySourceMap(i,n,this.toUrl(this.path(r)))}}isAnnotation(){return this.isInline()?!0:typeof this.mapOpts.annotation<"u"?this.mapOpts.annotation:this.previous().length?this.previous().some(t=>t.annotation):!0}toBase64(t){return Buffer?Buffer.from(t).toString("base64"):window.btoa(unescape(encodeURIComponent(t)))}addAnnotation(){let t;this.isInline()?t="data:application/json;base64,"+this.toBase64(this.map.toString()):typeof this.mapOpts.annotation=="string"?t=this.mapOpts.annotation:typeof this.mapOpts.annotation=="function"?t=this.mapOpts.annotation(this.opts.to,this.root):t=this.outputFile()+".map";let n=`
`;this.css.includes(`\r
`)&&(n=`\r
`),this.css+=n+"/*# sourceMappingURL="+t+" */"}outputFile(){return this.opts.to?this.path(this.opts.to):this.opts.from?this.path(this.opts.from):"to.css"}generateMap(){if(this.root)this.generateString();else if(this.previous().length===1){let t=this.previous()[0].consumer();t.file=this.outputFile(),this.map=Ba.fromSourceMap(t)}else this.map=new Ba({file:this.outputFile()}),this.map.addMapping({source:this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>",generated:{line:1,column:0},original:{line:1,column:0}});return this.isSourcesContent()&&this.setSourcesContent(),this.root&&this.previous().length>0&&this.applyPrevMaps(),this.isAnnotation()&&this.addAnnotation(),this.isInline()?[this.css]:[this.css,this.map]}path(t){if(t.indexOf("<")===0||/^\w+:\/\//.test(t)||this.mapOpts.absolute)return t;let n=this.opts.to?Va(this.opts.to):".";return typeof this.mapOpts.annotation=="string"&&(n=Va(vb(n,this.mapOpts.annotation))),t=yb(n,t),t}toUrl(t){return bb==="\\"&&(t=t.replace(/\\/g,"/")),encodeURI(t).replace(/[#?]/g,encodeURIComponent)}sourcePath(t){if(this.mapOpts.from)return this.toUrl(this.mapOpts.from);if(this.mapOpts.absolute){if(Z_)return Z_(t.source.input.from).toString();throw new Error("`map.absolute` option is not available in this PostCSS build")}else return this.toUrl(this.path(t.source.input.from))}generateString(){this.css="",this.map=new Ba({file:this.outputFile()});let t=1,n=1,r="<no source>",i={source:"",generated:{line:0,column:0},original:{line:0,column:0}},s,o;this.stringify(this.root,(a,l,u)=>{if(this.css+=a,l&&u!=="end"&&(i.generated.line=t,i.generated.column=n-1,l.source&&l.source.start?(i.source=this.sourcePath(l),i.original.line=l.source.start.line,i.original.column=l.source.start.column-1,this.map.addMapping(i)):(i.source=r,i.original.line=1,i.original.column=0,this.map.addMapping(i))),s=a.match(/\n/g),s?(t+=s.length,o=a.lastIndexOf(`
`),n=a.length-o):n+=a.length,l&&u!=="start"){let c=l.parent||{raws:{}};(l.type!=="decl"||l!==c.last||c.raws.semicolon)&&(l.source&&l.source.end?(i.source=this.sourcePath(l),i.original.line=l.source.end.line,i.original.column=l.source.end.column-1,i.generated.line=t,i.generated.column=n-2,this.map.addMapping(i)):(i.source=r,i.original.line=1,i.original.column=0,i.generated.line=t,i.generated.column=n-1,this.map.addMapping(i)))}})}generate(){if(this.clearAnnotation(),qC&&GC&&this.isMap())return this.generateMap();{let t="";return this.stringify(this.root,n=>{t+=n}),[t]}}};var wb=YC;let QC=Lu,Td=class extends QC{constructor(t){super(t),this.type="comment"}};var Pu=Td;Td.default=Td;let{isClean:Sb,my:Eb}=Fo,xb=Nu,kb=Pu,XC=Lu,Tb,bp,wp,Rb;function Ab(e){return e.map(t=>(t.nodes&&(t.nodes=Ab(t.nodes)),delete t.source,t))}function Ib(e){if(e[Sb]=!1,e.proxyOf.nodes)for(let t of e.proxyOf.nodes)Ib(t)}let En=class Ob extends XC{push(t){return t.parent=this,this.proxyOf.nodes.push(t),this}each(t){if(!this.proxyOf.nodes)return;let n=this.getIterator(),r,i;for(;this.indexes[n]<this.proxyOf.nodes.length&&(r=this.indexes[n],i=t(this.proxyOf.nodes[r],r),i!==!1);)this.indexes[n]+=1;return delete this.indexes[n],i}walk(t){return this.each((n,r)=>{let i;try{i=t(n,r)}catch(s){throw n.addToError(s)}return i!==!1&&n.walk&&(i=n.walk(t)),i})}walkDecls(t,n){return n?t instanceof RegExp?this.walk((r,i)=>{if(r.type==="decl"&&t.test(r.prop))return n(r,i)}):this.walk((r,i)=>{if(r.type==="decl"&&r.prop===t)return n(r,i)}):(n=t,this.walk((r,i)=>{if(r.type==="decl")return n(r,i)}))}walkRules(t,n){return n?t instanceof RegExp?this.walk((r,i)=>{if(r.type==="rule"&&t.test(r.selector))return n(r,i)}):this.walk((r,i)=>{if(r.type==="rule"&&r.selector===t)return n(r,i)}):(n=t,this.walk((r,i)=>{if(r.type==="rule")return n(r,i)}))}walkAtRules(t,n){return n?t instanceof RegExp?this.walk((r,i)=>{if(r.type==="atrule"&&t.test(r.name))return n(r,i)}):this.walk((r,i)=>{if(r.type==="atrule"&&r.name===t)return n(r,i)}):(n=t,this.walk((r,i)=>{if(r.type==="atrule")return n(r,i)}))}walkComments(t){return this.walk((n,r)=>{if(n.type==="comment")return t(n,r)})}append(...t){for(let n of t){let r=this.normalize(n,this.last);for(let i of r)this.proxyOf.nodes.push(i)}return this.markDirty(),this}prepend(...t){t=t.reverse();for(let n of t){let r=this.normalize(n,this.first,"prepend").reverse();for(let i of r)this.proxyOf.nodes.unshift(i);for(let i in this.indexes)this.indexes[i]=this.indexes[i]+r.length}return this.markDirty(),this}cleanRaws(t){if(super.cleanRaws(t),this.nodes)for(let n of this.nodes)n.cleanRaws(t)}insertBefore(t,n){t=this.index(t);let r=t===0?"prepend":!1,i=this.normalize(n,this.proxyOf.nodes[t],r).reverse();for(let o of i)this.proxyOf.nodes.splice(t,0,o);let s;for(let o in this.indexes)s=this.indexes[o],t<=s&&(this.indexes[o]=s+i.length);return this.markDirty(),this}insertAfter(t,n){t=this.index(t);let r=this.normalize(n,this.proxyOf.nodes[t]).reverse();for(let s of r)this.proxyOf.nodes.splice(t+1,0,s);let i;for(let s in this.indexes)i=this.indexes[s],t<i&&(this.indexes[s]=i+r.length);return this.markDirty(),this}removeChild(t){t=this.index(t),this.proxyOf.nodes[t].parent=void 0,this.proxyOf.nodes.splice(t,1);let n;for(let r in this.indexes)n=this.indexes[r],n>=t&&(this.indexes[r]=n-1);return this.markDirty(),this}removeAll(){for(let t of this.proxyOf.nodes)t.parent=void 0;return this.proxyOf.nodes=[],this.markDirty(),this}replaceValues(t,n,r){return r||(r=n,n={}),this.walkDecls(i=>{n.props&&!n.props.includes(i.prop)||n.fast&&!i.value.includes(n.fast)||(i.value=i.value.replace(t,r))}),this.markDirty(),this}every(t){return this.nodes.every(t)}some(t){return this.nodes.some(t)}index(t){return typeof t=="number"?t:(t.proxyOf&&(t=t.proxyOf),this.proxyOf.nodes.indexOf(t))}get first(){if(this.proxyOf.nodes)return this.proxyOf.nodes[0]}get last(){if(this.proxyOf.nodes)return this.proxyOf.nodes[this.proxyOf.nodes.length-1]}normalize(t,n){if(typeof t=="string")t=Ab(Tb(t).nodes);else if(Array.isArray(t)){t=t.slice(0);for(let i of t)i.parent&&i.parent.removeChild(i,"ignore")}else if(t.type==="root"&&this.type!=="document"){t=t.nodes.slice(0);for(let i of t)i.parent&&i.parent.removeChild(i,"ignore")}else if(t.type)t=[t];else if(t.prop){if(typeof t.value>"u")throw new Error("Value field is missed in node creation");typeof t.value!="string"&&(t.value=String(t.value)),t=[new xb(t)]}else if(t.selector)t=[new bp(t)];else if(t.name)t=[new wp(t)];else if(t.text)t=[new kb(t)];else throw new Error("Unknown node type in node creation");return t.map(i=>(i[Eb]||Ob.rebuild(i),i=i.proxyOf,i.parent&&i.parent.removeChild(i),i[Sb]&&Ib(i),typeof i.raws.before>"u"&&n&&typeof n.raws.before<"u"&&(i.raws.before=n.raws.before.replace(/\S/g,"")),i.parent=this.proxyOf,i))}getProxyProcessor(){return{set(t,n,r){return t[n]===r||(t[n]=r,(n==="name"||n==="params"||n==="selector")&&t.markDirty()),!0},get(t,n){return n==="proxyOf"?t:t[n]?n==="each"||typeof n=="string"&&n.startsWith("walk")?(...r)=>t[n](...r.map(i=>typeof i=="function"?(s,o)=>i(s.toProxy(),o):i)):n==="every"||n==="some"?r=>t[n]((i,...s)=>r(i.toProxy(),...s)):n==="root"?()=>t.root().toProxy():n==="nodes"?t.nodes.map(r=>r.toProxy()):n==="first"||n==="last"?t[n].toProxy():t[n]:t[n]}}}getIterator(){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach+=1;let t=this.lastEach;return this.indexes[t]=0,t}};En.registerParse=e=>{Tb=e};En.registerRule=e=>{bp=e};En.registerAtRule=e=>{wp=e};En.registerRoot=e=>{Rb=e};var Vr=En;En.default=En;En.rebuild=e=>{e.type==="atrule"?Object.setPrototypeOf(e,wp.prototype):e.type==="rule"?Object.setPrototypeOf(e,bp.prototype):e.type==="decl"?Object.setPrototypeOf(e,xb.prototype):e.type==="comment"?Object.setPrototypeOf(e,kb.prototype):e.type==="root"&&Object.setPrototypeOf(e,Rb.prototype),e[Eb]=!0,e.nodes&&e.nodes.forEach(t=>{En.rebuild(t)})};let KC=Vr,Lb,Nb,Eo=class extends KC{constructor(t){super({type:"document",...t}),this.nodes||(this.nodes=[])}toResult(t={}){return new Lb(new Nb,this,t).stringify()}};Eo.registerLazyResult=e=>{Lb=e};Eo.registerProcessor=e=>{Nb=e};var Sp=Eo;Eo.default=Eo;let Rd=class{constructor(t,n={}){if(this.type="warning",this.text=t,n.node&&n.node.source){let r=n.node.rangeBy(n);this.line=r.start.line,this.column=r.start.column,this.endLine=r.end.line,this.endColumn=r.end.column}for(let r in n)this[r]=n[r]}toString(){return this.node?this.node.error(this.text,{plugin:this.plugin,index:this.index,word:this.word}).message:this.plugin?this.plugin+": "+this.text:this.text}};var Mb=Rd;Rd.default=Rd;let ZC=Mb,Ad=class{constructor(t,n,r){this.processor=t,this.messages=[],this.root=n,this.opts=r,this.css=void 0,this.map=void 0}toString(){return this.css}warn(t,n={}){n.plugin||this.lastPlugin&&this.lastPlugin.postcssPlugin&&(n.plugin=this.lastPlugin.postcssPlugin);let r=new ZC(t,n);return this.messages.push(r),r}warnings(){return this.messages.filter(t=>t.type==="warning")}get content(){return this.css}};var Ep=Ad;Ad.default=Ad;const Uc="'".charCodeAt(0),J_='"'.charCodeAt(0),ca="\\".charCodeAt(0),ev="/".charCodeAt(0),fa=`
`.charCodeAt(0),ms=" ".charCodeAt(0),da="\f".charCodeAt(0),ha="	".charCodeAt(0),pa="\r".charCodeAt(0),JC="[".charCodeAt(0),eD="]".charCodeAt(0),tD="(".charCodeAt(0),nD=")".charCodeAt(0),rD="{".charCodeAt(0),iD="}".charCodeAt(0),sD=";".charCodeAt(0),oD="*".charCodeAt(0),aD=":".charCodeAt(0),lD="@".charCodeAt(0),ma=/[\t\n\f\r "#'()/;[\\\]{}]/g,ga=/[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,uD=/.[\n"'(/\\]/,tv=/[\da-f]/i;var cD=function(t,n={}){let r=t.css.valueOf(),i=n.ignoreErrors,s,o,a,l,u,c,d,f,g,b,v=r.length,h=0,m=[],_=[];function y(){return h}function p(x){throw t.error("Unclosed "+x,h)}function S(){return _.length===0&&h>=v}function w(x){if(_.length)return _.pop();if(h>=v)return;let k=x?x.ignoreUnclosed:!1;switch(s=r.charCodeAt(h),s){case fa:case ms:case ha:case pa:case da:{o=h;do o+=1,s=r.charCodeAt(o);while(s===ms||s===fa||s===ha||s===pa||s===da);b=["space",r.slice(h,o)],h=o-1;break}case JC:case eD:case rD:case iD:case aD:case sD:case nD:{let A=String.fromCharCode(s);b=[A,A,h];break}case tD:{if(f=m.length?m.pop()[1]:"",g=r.charCodeAt(h+1),f==="url"&&g!==Uc&&g!==J_&&g!==ms&&g!==fa&&g!==ha&&g!==da&&g!==pa){o=h;do{if(c=!1,o=r.indexOf(")",o+1),o===-1)if(i||k){o=h;break}else p("bracket");for(d=o;r.charCodeAt(d-1)===ca;)d-=1,c=!c}while(c);b=["brackets",r.slice(h,o+1),h,o],h=o}else o=r.indexOf(")",h+1),l=r.slice(h,o+1),o===-1||uD.test(l)?b=["(","(",h]:(b=["brackets",l,h,o],h=o);break}case Uc:case J_:{a=s===Uc?"'":'"',o=h;do{if(c=!1,o=r.indexOf(a,o+1),o===-1)if(i||k){o=h+1;break}else p("string");for(d=o;r.charCodeAt(d-1)===ca;)d-=1,c=!c}while(c);b=["string",r.slice(h,o+1),h,o],h=o;break}case lD:{ma.lastIndex=h+1,ma.test(r),ma.lastIndex===0?o=r.length-1:o=ma.lastIndex-2,b=["at-word",r.slice(h,o+1),h,o],h=o;break}case ca:{for(o=h,u=!0;r.charCodeAt(o+1)===ca;)o+=1,u=!u;if(s=r.charCodeAt(o+1),u&&s!==ev&&s!==ms&&s!==fa&&s!==ha&&s!==pa&&s!==da&&(o+=1,tv.test(r.charAt(o)))){for(;tv.test(r.charAt(o+1));)o+=1;r.charCodeAt(o+1)===ms&&(o+=1)}b=["word",r.slice(h,o+1),h,o],h=o;break}default:{s===ev&&r.charCodeAt(h+1)===oD?(o=r.indexOf("*/",h+2)+1,o===0&&(i||k?o=r.length:p("comment")),b=["comment",r.slice(h,o+1),h,o],h=o):(ga.lastIndex=h+1,ga.test(r),ga.lastIndex===0?o=r.length-1:o=ga.lastIndex-2,b=["word",r.slice(h,o+1),h,o],m.push(b),h=o);break}}return h++,b}function E(x){_.push(x)}return{back:E,nextToken:w,endOfFile:S,position:y}};let Pb=Vr,Nl=class extends Pb{constructor(t){super(t),this.type="atrule"}append(...t){return this.proxyOf.nodes||(this.nodes=[]),super.append(...t)}prepend(...t){return this.proxyOf.nodes||(this.nodes=[]),super.prepend(...t)}};var xp=Nl;Nl.default=Nl;Pb.registerAtRule(Nl);let Cb=Vr,Db,Ub,Mi=class extends Cb{constructor(t){super(t),this.type="root",this.nodes||(this.nodes=[])}removeChild(t,n){let r=this.index(t);return!n&&r===0&&this.nodes.length>1&&(this.nodes[1].raws.before=this.nodes[r].raws.before),super.removeChild(t)}normalize(t,n,r){let i=super.normalize(t);if(n){if(r==="prepend")this.nodes.length>1?n.raws.before=this.nodes[1].raws.before:delete n.raws.before;else if(this.first!==n)for(let s of i)s.raws.before=n.raws.before}return i}toResult(t={}){return new Db(new Ub,this,t).stringify()}};Mi.registerLazyResult=e=>{Db=e};Mi.registerProcessor=e=>{Ub=e};var $o=Mi;Mi.default=Mi;Cb.registerRoot(Mi);let xo={split(e,t,n){let r=[],i="",s=!1,o=0,a=!1,l="",u=!1;for(let c of e)u?u=!1:c==="\\"?u=!0:a?c===l&&(a=!1):c==='"'||c==="'"?(a=!0,l=c):c==="("?o+=1:c===")"?o>0&&(o-=1):o===0&&t.includes(c)&&(s=!0),s?(i!==""&&r.push(i.trim()),i="",s=!1):i+=c;return(n||i!=="")&&r.push(i.trim()),r},space(e){let t=[" ",`
`,"	"];return xo.split(e,t)},comma(e){return xo.split(e,[","],!0)}};var Fb=xo;xo.default=xo;let $b=Vr,fD=Fb,Ml=class extends $b{constructor(t){super(t),this.type="rule",this.nodes||(this.nodes=[])}get selectors(){return fD.comma(this.selector)}set selectors(t){let n=this.selector?this.selector.match(/,\s*/):null,r=n?n[0]:","+this.raw("between","beforeOpen");this.selector=t.join(r)}};var kp=Ml;Ml.default=Ml;$b.registerRule(Ml);let dD=Nu,hD=cD,pD=Pu,mD=xp,gD=$o,nv=kp;const rv={empty:!0,space:!0};function _D(e){for(let t=e.length-1;t>=0;t--){let n=e[t],r=n[3]||n[2];if(r)return r}}let vD=class{constructor(t){this.input=t,this.root=new gD,this.current=this.root,this.spaces="",this.semicolon=!1,this.customProperty=!1,this.createTokenizer(),this.root.source={input:t,start:{offset:0,line:1,column:1}}}createTokenizer(){this.tokenizer=hD(this.input)}parse(){let t;for(;!this.tokenizer.endOfFile();)switch(t=this.tokenizer.nextToken(),t[0]){case"space":this.spaces+=t[1];break;case";":this.freeSemicolon(t);break;case"}":this.end(t);break;case"comment":this.comment(t);break;case"at-word":this.atrule(t);break;case"{":this.emptyRule(t);break;default:this.other(t);break}this.endFile()}comment(t){let n=new pD;this.init(n,t[2]),n.source.end=this.getPosition(t[3]||t[2]);let r=t[1].slice(2,-2);if(/^\s*$/.test(r))n.text="",n.raws.left=r,n.raws.right="";else{let i=r.match(/^(\s*)([^]*\S)(\s*)$/);n.text=i[2],n.raws.left=i[1],n.raws.right=i[3]}}emptyRule(t){let n=new nv;this.init(n,t[2]),n.selector="",n.raws.between="",this.current=n}other(t){let n=!1,r=null,i=!1,s=null,o=[],a=t[1].startsWith("--"),l=[],u=t;for(;u;){if(r=u[0],l.push(u),r==="("||r==="[")s||(s=u),o.push(r==="("?")":"]");else if(a&&i&&r==="{")s||(s=u),o.push("}");else if(o.length===0)if(r===";")if(i){this.decl(l,a);return}else break;else if(r==="{"){this.rule(l);return}else if(r==="}"){this.tokenizer.back(l.pop()),n=!0;break}else r===":"&&(i=!0);else r===o[o.length-1]&&(o.pop(),o.length===0&&(s=null));u=this.tokenizer.nextToken()}if(this.tokenizer.endOfFile()&&(n=!0),o.length>0&&this.unclosedBracket(s),n&&i){if(!a)for(;l.length&&(u=l[l.length-1][0],!(u!=="space"&&u!=="comment"));)this.tokenizer.back(l.pop());this.decl(l,a)}else this.unknownWord(l)}rule(t){t.pop();let n=new nv;this.init(n,t[0][2]),n.raws.between=this.spacesAndCommentsFromEnd(t),this.raw(n,"selector",t),this.current=n}decl(t,n){let r=new dD;this.init(r,t[0][2]);let i=t[t.length-1];for(i[0]===";"&&(this.semicolon=!0,t.pop()),r.source.end=this.getPosition(i[3]||i[2]||_D(t));t[0][0]!=="word";)t.length===1&&this.unknownWord(t),r.raws.before+=t.shift()[1];for(r.source.start=this.getPosition(t[0][2]),r.prop="";t.length;){let u=t[0][0];if(u===":"||u==="space"||u==="comment")break;r.prop+=t.shift()[1]}r.raws.between="";let s;for(;t.length;)if(s=t.shift(),s[0]===":"){r.raws.between+=s[1];break}else s[0]==="word"&&/\w/.test(s[1])&&this.unknownWord([s]),r.raws.between+=s[1];(r.prop[0]==="_"||r.prop[0]==="*")&&(r.raws.before+=r.prop[0],r.prop=r.prop.slice(1));let o=[],a;for(;t.length&&(a=t[0][0],!(a!=="space"&&a!=="comment"));)o.push(t.shift());this.precheckMissedSemicolon(t);for(let u=t.length-1;u>=0;u--){if(s=t[u],s[1].toLowerCase()==="!important"){r.important=!0;let c=this.stringFrom(t,u);c=this.spacesFromEnd(t)+c,c!==" !important"&&(r.raws.important=c);break}else if(s[1].toLowerCase()==="important"){let c=t.slice(0),d="";for(let f=u;f>0;f--){let g=c[f][0];if(d.trim().indexOf("!")===0&&g!=="space")break;d=c.pop()[1]+d}d.trim().indexOf("!")===0&&(r.important=!0,r.raws.important=d,t=c)}if(s[0]!=="space"&&s[0]!=="comment")break}t.some(u=>u[0]!=="space"&&u[0]!=="comment")&&(r.raws.between+=o.map(u=>u[1]).join(""),o=[]),this.raw(r,"value",o.concat(t),n),r.value.includes(":")&&!n&&this.checkMissedSemicolon(t)}atrule(t){let n=new mD;n.name=t[1].slice(1),n.name===""&&this.unnamedAtrule(n,t),this.init(n,t[2]);let r,i,s,o=!1,a=!1,l=[],u=[];for(;!this.tokenizer.endOfFile();){if(t=this.tokenizer.nextToken(),r=t[0],r==="("||r==="["?u.push(r==="("?")":"]"):r==="{"&&u.length>0?u.push("}"):r===u[u.length-1]&&u.pop(),u.length===0)if(r===";"){n.source.end=this.getPosition(t[2]),this.semicolon=!0;break}else if(r==="{"){a=!0;break}else if(r==="}"){if(l.length>0){for(s=l.length-1,i=l[s];i&&i[0]==="space";)i=l[--s];i&&(n.source.end=this.getPosition(i[3]||i[2]))}this.end(t);break}else l.push(t);else l.push(t);if(this.tokenizer.endOfFile()){o=!0;break}}n.raws.between=this.spacesAndCommentsFromEnd(l),l.length?(n.raws.afterName=this.spacesAndCommentsFromStart(l),this.raw(n,"params",l),o&&(t=l[l.length-1],n.source.end=this.getPosition(t[3]||t[2]),this.spaces=n.raws.between,n.raws.between="")):(n.raws.afterName="",n.params=""),a&&(n.nodes=[],this.current=n)}end(t){this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.semicolon=!1,this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.spaces="",this.current.parent?(this.current.source.end=this.getPosition(t[2]),this.current=this.current.parent):this.unexpectedClose(t)}endFile(){this.current.parent&&this.unclosedBlock(),this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.current.raws.after=(this.current.raws.after||"")+this.spaces}freeSemicolon(t){if(this.spaces+=t[1],this.current.nodes){let n=this.current.nodes[this.current.nodes.length-1];n&&n.type==="rule"&&!n.raws.ownSemicolon&&(n.raws.ownSemicolon=this.spaces,this.spaces="")}}getPosition(t){let n=this.input.fromOffset(t);return{offset:t,line:n.line,column:n.col}}init(t,n){this.current.push(t),t.source={start:this.getPosition(n),input:this.input},t.raws.before=this.spaces,this.spaces="",t.type!=="comment"&&(this.semicolon=!1)}raw(t,n,r,i){let s,o,a=r.length,l="",u=!0,c,d;for(let f=0;f<a;f+=1)s=r[f],o=s[0],o==="space"&&f===a-1&&!i?u=!1:o==="comment"?(d=r[f-1]?r[f-1][0]:"empty",c=r[f+1]?r[f+1][0]:"empty",!rv[d]&&!rv[c]?l.slice(-1)===","?u=!1:l+=s[1]:u=!1):l+=s[1];if(!u){let f=r.reduce((g,b)=>g+b[1],"");t.raws[n]={value:l,raw:f}}t[n]=l}spacesAndCommentsFromEnd(t){let n,r="";for(;t.length&&(n=t[t.length-1][0],!(n!=="space"&&n!=="comment"));)r=t.pop()[1]+r;return r}spacesAndCommentsFromStart(t){let n,r="";for(;t.length&&(n=t[0][0],!(n!=="space"&&n!=="comment"));)r+=t.shift()[1];return r}spacesFromEnd(t){let n,r="";for(;t.length&&(n=t[t.length-1][0],n==="space");)r=t.pop()[1]+r;return r}stringFrom(t,n){let r="";for(let i=n;i<t.length;i++)r+=t[i][1];return t.splice(n,t.length-n),r}colon(t){let n=0,r,i,s;for(let[o,a]of t.entries()){if(r=a,i=r[0],i==="("&&(n+=1),i===")"&&(n-=1),n===0&&i===":")if(!s)this.doubleColon(r);else{if(s[0]==="word"&&s[1]==="progid")continue;return o}s=r}return!1}unclosedBracket(t){throw this.input.error("Unclosed bracket",{offset:t[2]},{offset:t[2]+1})}unknownWord(t){throw this.input.error("Unknown word",{offset:t[0][2]},{offset:t[0][2]+t[0][1].length})}unexpectedClose(t){throw this.input.error("Unexpected }",{offset:t[2]},{offset:t[2]+1})}unclosedBlock(){let t=this.current.source.start;throw this.input.error("Unclosed block",t.line,t.column)}doubleColon(t){throw this.input.error("Double colon",{offset:t[2]},{offset:t[2]+t[1].length})}unnamedAtrule(t,n){throw this.input.error("At-rule without name",{offset:n[2]},{offset:n[2]+n[1].length})}precheckMissedSemicolon(){}checkMissedSemicolon(t){let n=this.colon(t);if(n===!1)return;let r=0,i;for(let s=n-1;s>=0&&(i=t[s],!(i[0]!=="space"&&(r+=1,r===2)));s--);throw this.input.error("Missed semicolon",i[0]==="word"?i[3]+1:i[2])}};var yD=vD;let bD=Vr,wD=yD,SD=Mu;function Pl(e,t){let n=new SD(e,t),r=new wD(n);try{r.parse()}catch(i){throw i}return r.root}var Tp=Pl;Pl.default=Pl;bD.registerParse(Pl);let{isClean:zt,my:ED}=Fo,xD=wb,kD=Ou,TD=Vr,RD=Sp,iv=Ep,AD=Tp,ID=$o;const OD={document:"Document",root:"Root",atrule:"AtRule",rule:"Rule",decl:"Declaration",comment:"Comment"},LD={postcssPlugin:!0,prepare:!0,Once:!0,Document:!0,Root:!0,Declaration:!0,Rule:!0,AtRule:!0,Comment:!0,DeclarationExit:!0,RuleExit:!0,AtRuleExit:!0,CommentExit:!0,RootExit:!0,DocumentExit:!0,OnceExit:!0},ND={postcssPlugin:!0,prepare:!0,Once:!0},Pi=0;function gs(e){return typeof e=="object"&&typeof e.then=="function"}function Bb(e){let t=!1,n=OD[e.type];return e.type==="decl"?t=e.prop.toLowerCase():e.type==="atrule"&&(t=e.name.toLowerCase()),t&&e.append?[n,n+"-"+t,Pi,n+"Exit",n+"Exit-"+t]:t?[n,n+"-"+t,n+"Exit",n+"Exit-"+t]:e.append?[n,Pi,n+"Exit"]:[n,n+"Exit"]}function sv(e){let t;return e.type==="document"?t=["Document",Pi,"DocumentExit"]:e.type==="root"?t=["Root",Pi,"RootExit"]:t=Bb(e),{node:e,events:t,eventIndex:0,visitors:[],visitorIndex:0,iterator:0}}function Id(e){return e[zt]=!1,e.nodes&&e.nodes.forEach(t=>Id(t)),e}let Od={},Ci=class Vb{constructor(t,n,r){this.stringified=!1,this.processed=!1;let i;if(typeof n=="object"&&n!==null&&(n.type==="root"||n.type==="document"))i=Id(n);else if(n instanceof Vb||n instanceof iv)i=Id(n.root),n.map&&(typeof r.map>"u"&&(r.map={}),r.map.inline||(r.map.inline=!1),r.map.prev=n.map);else{let s=AD;r.syntax&&(s=r.syntax.parse),r.parser&&(s=r.parser),s.parse&&(s=s.parse);try{i=s(n,r)}catch(o){this.processed=!0,this.error=o}i&&!i[ED]&&TD.rebuild(i)}this.result=new iv(t,i,r),this.helpers={...Od,result:this.result,postcss:Od},this.plugins=this.processor.plugins.map(s=>typeof s=="object"&&s.prepare?{...s,...s.prepare(this.result)}:s)}get[Symbol.toStringTag](){return"LazyResult"}get processor(){return this.result.processor}get opts(){return this.result.opts}get css(){return this.stringify().css}get content(){return this.stringify().content}get map(){return this.stringify().map}get root(){return this.sync().root}get messages(){return this.sync().messages}warnings(){return this.sync().warnings()}toString(){return this.css}then(t,n){return this.async().then(t,n)}catch(t){return this.async().catch(t)}finally(t){return this.async().then(t,t)}async(){return this.error?Promise.reject(this.error):this.processed?Promise.resolve(this.result):(this.processing||(this.processing=this.runAsync()),this.processing)}sync(){if(this.error)throw this.error;if(this.processed)return this.result;if(this.processed=!0,this.processing)throw this.getAsyncError();for(let t of this.plugins){let n=this.runOnRoot(t);if(gs(n))throw this.getAsyncError()}if(this.prepareVisitors(),this.hasListener){let t=this.result.root;for(;!t[zt];)t[zt]=!0,this.walkSync(t);if(this.listeners.OnceExit)if(t.type==="document")for(let n of t.nodes)this.visitSync(this.listeners.OnceExit,n);else this.visitSync(this.listeners.OnceExit,t)}return this.result}stringify(){if(this.error)throw this.error;if(this.stringified)return this.result;this.stringified=!0,this.sync();let t=this.result.opts,n=kD;t.syntax&&(n=t.syntax.stringify),t.stringifier&&(n=t.stringifier),n.stringify&&(n=n.stringify);let i=new xD(n,this.result.root,this.result.opts).generate();return this.result.css=i[0],this.result.map=i[1],this.result}walkSync(t){t[zt]=!0;let n=Bb(t);for(let r of n)if(r===Pi)t.nodes&&t.each(i=>{i[zt]||this.walkSync(i)});else{let i=this.listeners[r];if(i&&this.visitSync(i,t.toProxy()))return}}visitSync(t,n){for(let[r,i]of t){this.result.lastPlugin=r;let s;try{s=i(n,this.helpers)}catch(o){throw this.handleError(o,n.proxyOf)}if(n.type!=="root"&&n.type!=="document"&&!n.parent)return!0;if(gs(s))throw this.getAsyncError()}}runOnRoot(t){this.result.lastPlugin=t;try{if(typeof t=="object"&&t.Once){if(this.result.root.type==="document"){let n=this.result.root.nodes.map(r=>t.Once(r,this.helpers));return gs(n[0])?Promise.all(n):n}return t.Once(this.result.root,this.helpers)}else if(typeof t=="function")return t(this.result.root,this.result)}catch(n){throw this.handleError(n)}}getAsyncError(){throw new Error("Use process(css).then(cb) to work with async plugins")}handleError(t,n){let r=this.result.lastPlugin;try{n&&n.addToError(t),this.error=t,t.name==="CssSyntaxError"&&!t.plugin?(t.plugin=r.postcssPlugin,t.setMessage()):r.postcssVersion}catch(i){console&&console.error&&console.error(i)}return t}async runAsync(){this.plugin=0;for(let t=0;t<this.plugins.length;t++){let n=this.plugins[t],r=this.runOnRoot(n);if(gs(r))try{await r}catch(i){throw this.handleError(i)}}if(this.prepareVisitors(),this.hasListener){let t=this.result.root;for(;!t[zt];){t[zt]=!0;let n=[sv(t)];for(;n.length>0;){let r=this.visitTick(n);if(gs(r))try{await r}catch(i){let s=n[n.length-1].node;throw this.handleError(i,s)}}}if(this.listeners.OnceExit)for(let[n,r]of this.listeners.OnceExit){this.result.lastPlugin=n;try{if(t.type==="document"){let i=t.nodes.map(s=>r(s,this.helpers));await Promise.all(i)}else await r(t,this.helpers)}catch(i){throw this.handleError(i)}}}return this.processed=!0,this.stringify()}prepareVisitors(){this.listeners={};let t=(n,r,i)=>{this.listeners[r]||(this.listeners[r]=[]),this.listeners[r].push([n,i])};for(let n of this.plugins)if(typeof n=="object")for(let r in n){if(!LD[r]&&/^[A-Z]/.test(r))throw new Error(`Unknown event ${r} in ${n.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);if(!ND[r])if(typeof n[r]=="object")for(let i in n[r])i==="*"?t(n,r,n[r][i]):t(n,r+"-"+i.toLowerCase(),n[r][i]);else typeof n[r]=="function"&&t(n,r,n[r])}this.hasListener=Object.keys(this.listeners).length>0}visitTick(t){let n=t[t.length-1],{node:r,visitors:i}=n;if(r.type!=="root"&&r.type!=="document"&&!r.parent){t.pop();return}if(i.length>0&&n.visitorIndex<i.length){let[o,a]=i[n.visitorIndex];n.visitorIndex+=1,n.visitorIndex===i.length&&(n.visitors=[],n.visitorIndex=0),this.result.lastPlugin=o;try{return a(r.toProxy(),this.helpers)}catch(l){throw this.handleError(l,r)}}if(n.iterator!==0){let o=n.iterator,a;for(;a=r.nodes[r.indexes[o]];)if(r.indexes[o]+=1,!a[zt]){a[zt]=!0,t.push(sv(a));return}n.iterator=0,delete r.indexes[o]}let s=n.events;for(;n.eventIndex<s.length;){let o=s[n.eventIndex];if(n.eventIndex+=1,o===Pi){r.nodes&&r.nodes.length&&(r[zt]=!0,n.iterator=r.getIterator());return}else if(this.listeners[o]){n.visitors=this.listeners[o];return}}t.pop()}};Ci.registerPostcss=e=>{Od=e};var Wb=Ci;Ci.default=Ci;ID.registerLazyResult(Ci);RD.registerLazyResult(Ci);let MD=wb,PD=Ou,CD=Tp;const DD=Ep;let Ld=class{constructor(t,n,r){n=n.toString(),this.stringified=!1,this._processor=t,this._css=n,this._opts=r,this._map=void 0;let i,s=PD;this.result=new DD(this._processor,i,this._opts),this.result.css=n;let o=this;Object.defineProperty(this.result,"root",{get(){return o.root}});let a=new MD(s,i,this._opts,n);if(a.isMap()){let[l,u]=a.generate();l&&(this.result.css=l),u&&(this.result.map=u)}}get[Symbol.toStringTag](){return"NoWorkResult"}get processor(){return this.result.processor}get opts(){return this.result.opts}get css(){return this.result.css}get content(){return this.result.css}get map(){return this.result.map}get root(){if(this._root)return this._root;let t,n=CD;try{t=n(this._css,this._opts)}catch(r){this.error=r}if(this.error)throw this.error;return this._root=t,t}get messages(){return[]}warnings(){return[]}toString(){return this._css}then(t,n){return this.async().then(t,n)}catch(t){return this.async().catch(t)}finally(t){return this.async().then(t,t)}async(){return this.error?Promise.reject(this.error):Promise.resolve(this.result)}sync(){if(this.error)throw this.error;return this.result}};var UD=Ld;Ld.default=Ld;let FD=UD,$D=Wb,BD=Sp,VD=$o,ko=class{constructor(t=[]){this.version="8.4.16",this.plugins=this.normalize(t)}use(t){return this.plugins=this.plugins.concat(this.normalize([t])),this}process(t,n={}){return this.plugins.length===0&&typeof n.parser>"u"&&typeof n.stringifier>"u"&&typeof n.syntax>"u"?new FD(this,t,n):new $D(this,t,n)}normalize(t){let n=[];for(let r of t)if(r.postcss===!0?r=r():r.postcss&&(r=r.postcss),typeof r=="object"&&Array.isArray(r.plugins))n=n.concat(r.plugins);else if(typeof r=="object"&&r.postcssPlugin)n.push(r);else if(typeof r=="function")n.push(r);else if(!(typeof r=="object"&&(r.parse||r.stringify)))throw new Error(r+" is not a PostCSS plugin");return n}};var WD=ko;ko.default=ko;VD.registerProcessor(ko);BD.registerProcessor(ko);let jD=Nu,zD=gb,HD=Pu,GD=xp,qD=Mu,YD=$o,QD=kp;function To(e,t){if(Array.isArray(e))return e.map(i=>To(i));let{inputs:n,...r}=e;if(n){t=[];for(let i of n){let s={...i,__proto__:qD.prototype};s.map&&(s.map={...s.map,__proto__:zD.prototype}),t.push(s)}}if(r.nodes&&(r.nodes=e.nodes.map(i=>To(i,t))),r.source){let{inputId:i,...s}=r.source;r.source=s,i!=null&&(r.source.input=t[i])}if(r.type==="root")return new YD(r);if(r.type==="decl")return new jD(r);if(r.type==="rule")return new QD(r);if(r.type==="comment")return new HD(r);if(r.type==="atrule")return new GD(r);throw new Error("Unknown node type: "+e.type)}var XD=To;To.default=To;let KD=yp,jb=Nu,ZD=Wb,JD=Vr,Rp=WD,e3=Ou,t3=XD,zb=Sp,n3=Mb,Hb=Pu,Gb=xp,r3=Ep,i3=Mu,s3=Tp,o3=Fb,qb=kp,Yb=$o,a3=Lu;function se(...e){return e.length===1&&Array.isArray(e[0])&&(e=e[0]),new Rp(e)}se.plugin=function(t,n){let r=!1;function i(...o){console&&console.warn&&!r&&(r=!0,console.warn(t+`: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`),{}.LANG&&{}.LANG.startsWith("cn")&&console.warn(t+`: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`));let a=n(...o);return a.postcssPlugin=t,a.postcssVersion=new Rp().version,a}let s;return Object.defineProperty(i,"postcss",{get(){return s||(s=i()),s}}),i.process=function(o,a,l){return se([i(l)]).process(o,a)},i};se.stringify=e3;se.parse=s3;se.fromJSON=t3;se.list=o3;se.comment=e=>new Hb(e);se.atRule=e=>new Gb(e);se.decl=e=>new jb(e);se.rule=e=>new qb(e);se.root=e=>new Yb(e);se.document=e=>new zb(e);se.CssSyntaxError=KD;se.Declaration=jb;se.Container=JD;se.Processor=Rp;se.Document=zb;se.Comment=Hb;se.Warning=n3;se.AtRule=Gb;se.Result=r3;se.Input=i3;se.Rule=qb;se.Root=Yb;se.Node=a3;ZD.registerPostcss(se);var l3=se;se.default=se;const ve=Dr(l3);ve.stringify;ve.fromJSON;ve.plugin;ve.parse;ve.list;ve.document;ve.comment;ve.atRule;ve.rule;ve.decl;ve.root;ve.CssSyntaxError;ve.Declaration;ve.Container;ve.Processor;ve.Document;ve.Comment;ve.Warning;ve.AtRule;ve.Result;ve.Input;ve.Rule;ve.Root;ve.Node;function ov(e){const t=()=>({postcssPlugin:"rest",Once(n){n.walkDecls(r=>{if(r.prop==="background-image"){const i=r.value.match(/url\("?(.*)"?\)/);if(i&&i[1]){const s=i[1],o=e(s);r.value=`url('${o}')`}}})}});return n=>{try{return!n.match(/url\("?(.*)"?\)/)||n.length>1e4?n:ve([t()]).process(n,{from:void 0}).css}catch{return n}}}const u3=`/**
 * Dark Reader v4.9.57
 * https://darkreader.org/
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.DarkReader = {}));
})(this, (function (exports) { 'use strict';

    /******************************************************************************\r
    Copyright (c) Microsoft Corporation.\r
\r
    Permission to use, copy, modify, and/or distribute this software for any\r
    purpose with or without fee is hereby granted.\r
\r
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\r
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\r
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\r
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\r
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\r
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\r
    PERFORMANCE OF THIS SOFTWARE.\r
    ***************************************************************************** */\r
\r
    var __assign = function() {\r
        __assign = Object.assign || function __assign(t) {\r
            for (var s, i = 1, n = arguments.length; i < n; i++) {\r
                s = arguments[i];\r
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r
            }\r
            return t;\r
        };\r
        return __assign.apply(this, arguments);\r
    };\r
\r
    function __awaiter(thisArg, _arguments, P, generator) {\r
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r
        return new (P || (P = Promise))(function (resolve, reject) {\r
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r
            step((generator = generator.apply(thisArg, _arguments || [])).next());\r
        });\r
    }\r
\r
    function __generator(thisArg, body) {\r
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;\r
        function verb(n) { return function (v) { return step([n, v]); }; }\r
        function step(op) {\r
            if (f) throw new TypeError("Generator is already executing.");\r
            while (_) try {\r
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r
                if (y = 0, t) op = [op[0] & 2, t.value];\r
                switch (op[0]) {\r
                    case 0: case 1: t = op; break;\r
                    case 4: _.label++; return { value: op[1], done: false };\r
                    case 5: _.label++; y = op[1]; op = [0]; continue;\r
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;\r
                    default:\r
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r
                        if (t[2]) _.ops.pop();\r
                        _.trys.pop(); continue;\r
                }\r
                op = body.call(thisArg, _);\r
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r
        }\r
    }\r
\r
    function __values(o) {\r
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;\r
        if (m) return m.call(o);\r
        if (o && typeof o.length === "number") return {\r
            next: function () {\r
                if (o && i >= o.length) o = void 0;\r
                return { value: o && o[i++], done: !o };\r
            }\r
        };\r
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");\r
    }\r
\r
    function __read(o, n) {\r
        var m = typeof Symbol === "function" && o[Symbol.iterator];\r
        if (!m) return o;\r
        var i = m.call(o), r, ar = [], e;\r
        try {\r
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r
        }\r
        catch (error) { e = { error: error }; }\r
        finally {\r
            try {\r
                if (r && !r.done && (m = i["return"])) m.call(i);\r
            }\r
            finally { if (e) throw e.error; }\r
        }\r
        return ar;\r
    }\r
\r
    function __spreadArray(to, from, pack) {\r
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r
            if (ar || !(i in from)) {\r
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r
                ar[i] = from[i];\r
            }\r
        }\r
        return to.concat(ar || Array.prototype.slice.call(from));\r
    }

    var MessageType;
    (function (MessageType) {
        MessageType["UI_GET_DATA"] = "ui-get-data";
        MessageType["UI_SUBSCRIBE_TO_CHANGES"] = "ui-subscribe-to-changes";
        MessageType["UI_UNSUBSCRIBE_FROM_CHANGES"] = "ui-unsubscribe-from-changes";
        MessageType["UI_CHANGE_SETTINGS"] = "ui-change-settings";
        MessageType["UI_SET_THEME"] = "ui-set-theme";
        MessageType["UI_SET_SHORTCUT"] = "ui-set-shortcut";
        MessageType["UI_TOGGLE_ACTIVE_TAB"] = "ui-toggle-active-tab";
        MessageType["UI_MARK_NEWS_AS_READ"] = "ui-mark-news-as-read";
        MessageType["UI_MARK_NEWS_AS_DISPLAYED"] = "ui-mark-news-as-displayed";
        MessageType["UI_LOAD_CONFIG"] = "ui-load-config";
        MessageType["UI_APPLY_DEV_DYNAMIC_THEME_FIXES"] = "ui-apply-dev-dynamic-theme-fixes";
        MessageType["UI_RESET_DEV_DYNAMIC_THEME_FIXES"] = "ui-reset-dev-dynamic-theme-fixes";
        MessageType["UI_APPLY_DEV_INVERSION_FIXES"] = "ui-apply-dev-inversion-fixes";
        MessageType["UI_RESET_DEV_INVERSION_FIXES"] = "ui-reset-dev-inversion-fixes";
        MessageType["UI_APPLY_DEV_STATIC_THEMES"] = "ui-apply-dev-static-themes";
        MessageType["UI_RESET_DEV_STATIC_THEMES"] = "ui-reset-dev-static-themes";
        MessageType["UI_SAVE_FILE"] = "ui-save-file";
        MessageType["UI_REQUEST_EXPORT_CSS"] = "ui-request-export-css";
        MessageType["UI_COLOR_SCHEME_CHANGE"] = "ui-color-scheme-change";
        MessageType["BG_CHANGES"] = "bg-changes";
        MessageType["BG_ADD_CSS_FILTER"] = "bg-add-css-filter";
        MessageType["BG_ADD_STATIC_THEME"] = "bg-add-static-theme";
        MessageType["BG_ADD_SVG_FILTER"] = "bg-add-svg-filter";
        MessageType["BG_ADD_DYNAMIC_THEME"] = "bg-add-dynamic-theme";
        MessageType["BG_EXPORT_CSS"] = "bg-export-css";
        MessageType["BG_UNSUPPORTED_SENDER"] = "bg-unsupported-sender";
        MessageType["BG_CLEAN_UP"] = "bg-clean-up";
        MessageType["BG_RELOAD"] = "bg-reload";
        MessageType["BG_FETCH_RESPONSE"] = "bg-fetch-response";
        MessageType["BG_UI_UPDATE"] = "bg-ui-update";
        MessageType["BG_CSS_UPDATE"] = "bg-css-update";
        MessageType["CS_COLOR_SCHEME_CHANGE"] = "cs-color-scheme-change";
        MessageType["CS_FRAME_CONNECT"] = "cs-frame-connect";
        MessageType["CS_FRAME_FORGET"] = "cs-frame-forget";
        MessageType["CS_FRAME_FREEZE"] = "cs-frame-freeze";
        MessageType["CS_FRAME_RESUME"] = "cs-frame-resume";
        MessageType["CS_EXPORT_CSS_RESPONSE"] = "cs-export-css-response";
        MessageType["CS_FETCH"] = "cs-fetch";
        MessageType["CS_DARK_THEME_DETECTED"] = "cs-dark-theme-detected";
        MessageType["CS_DARK_THEME_NOT_DETECTED"] = "cs-dark-theme-not-detected";
        MessageType["CS_LOG"] = "cs-log";
    })(MessageType || (MessageType = {}));

    var isNavigatorDefined = typeof navigator !== 'undefined';
    var userAgent = isNavigatorDefined ? (navigator.userAgentData && Array.isArray(navigator.userAgentData.brands)) ?
        navigator.userAgentData.brands.map(function (brand) { return "".concat(brand.brand.toLowerCase(), " ").concat(brand.version); }).join(' ') : navigator.userAgent.toLowerCase()
        : 'some useragent';
    var platform = isNavigatorDefined ? (navigator.userAgentData && typeof navigator.userAgentData.platform === 'string') ?
        navigator.userAgentData.platform.toLowerCase() : navigator.platform.toLowerCase()
        : 'some platform';
    var isChromium = userAgent.includes('chrome') || userAgent.includes('chromium');
    var isThunderbird = userAgent.includes('thunderbird');
    var isFirefox = userAgent.includes('firefox') || userAgent.includes('librewolf') || isThunderbird;
    userAgent.includes('vivaldi');
    userAgent.includes('yabrowser');
    userAgent.includes('opr') || userAgent.includes('opera');
    userAgent.includes('edg');
    var isSafari = userAgent.includes('safari') && !isChromium;
    var isWindows = platform.startsWith('win');
    var isMacOS = platform.startsWith('mac');
    (isNavigatorDefined && navigator.userAgentData) ? navigator.userAgentData.mobile : userAgent.includes('mobile');
    var isShadowDomSupported = typeof ShadowRoot === 'function';
    var isMatchMediaChangeEventListenerSupported = (typeof MediaQueryList === 'function' &&
        typeof MediaQueryList.prototype.addEventListener === 'function');
    ((function () {
        var m = userAgent.match(/chrom(?:e|ium)(?:\\/| )([^ ]+)/);
        if (m && m[1]) {
            return m[1];
        }
        return '';
    }))();
    ((function () {
        var m = userAgent.match(/(?:firefox|librewolf)(?:\\/| )([^ ]+)/);
        if (m && m[1]) {
            return m[1];
        }
        return '';
    }))();
    var isDefinedSelectorSupported = (function () {
        try {
            document.querySelector(':defined');
            return true;
        }
        catch (err) {
            return false;
        }
    })();
    var isCSSColorSchemePropSupported = (function () {
        if (typeof document === 'undefined') {
            return false;
        }
        var el = document.createElement('div');
        el.setAttribute('style', 'color-scheme: dark');
        return el.style && el.style.colorScheme === 'dark';
    })();

    function getOKResponse(url, mimeType, origin) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch(url, {
                            cache: 'force-cache',
                            credentials: 'omit',
                            referrer: origin
                        })];
                    case 1:
                        response = _a.sent();
                        if (isFirefox && mimeType === 'text/css' && url.startsWith('moz-extension://') && url.endsWith('.css')) {
                            return [2, response];
                        }
                        if (mimeType && !response.headers.get('Content-Type').startsWith(mimeType)) {
                            throw new Error("Mime type mismatch when loading ".concat(url));
                        }
                        if (!response.ok) {
                            throw new Error("Unable to load ".concat(url, " ").concat(response.status, " ").concat(response.statusText));
                        }
                        return [2, response];
                }
            });
        });
    }
    function loadAsDataURL(url, mimeType) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, getOKResponse(url, mimeType)];
                    case 1:
                        response = _a.sent();
                        return [4, readResponseAsDataURL(response)];
                    case 2: return [2, _a.sent()];
                }
            });
        });
    }
    function readResponseAsDataURL(response) {
        return __awaiter(this, void 0, void 0, function () {
            var blob, dataURL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, response.blob()];
                    case 1:
                        blob = _a.sent();
                        return [4, (new Promise(function (resolve) {
                                var reader = new FileReader();
                                reader.onloadend = function () { return resolve(reader.result); };
                                reader.readAsDataURL(blob);
                            }))];
                    case 2:
                        dataURL = _a.sent();
                        return [2, dataURL];
                }
            });
        });
    }

    var throwCORSError = function (url) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2, Promise.reject(new Error([
                    'Embedded Dark Reader cannot access a cross-origin resource',
                    url,
                    'Overview your URLs and CORS policies or use',
                    '\`DarkReader.setFetchMethod(fetch: (url) => Promise<Response>))\`.',
                    'See if using \`DarkReader.setFetchMethod(window.fetch)\`',
                    'before \`DarkReader.enable()\` works.'
                ].join(' ')))];
        });
    }); };
    var fetcher = throwCORSError;
    function setFetchMethod$1(fetch) {
        if (fetch) {
            fetcher = fetch;
        }
        else {
            fetcher = throwCORSError;
        }
    }
    function callFetchMethod(url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetcher(url)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    }

    if (!window.chrome) {
        window.chrome = {};
    }
    if (!chrome.runtime) {
        chrome.runtime = {};
    }
    var messageListeners = new Set();
    function sendMessage() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var id_1, _a, url, responseType, response, text_1, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(args[0] && args[0].type === MessageType.CS_FETCH)) return [3, 8];
                        id_1 = args[0].id;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 7, , 8]);
                        _a = args[0].data, url = _a.url, responseType = _a.responseType;
                        return [4, callFetchMethod(url)];
                    case 2:
                        response = _b.sent();
                        if (!(responseType === 'data-url')) return [3, 4];
                        return [4, readResponseAsDataURL(response)];
                    case 3:
                        text_1 = _b.sent();
                        return [3, 6];
                    case 4: return [4, response.text()];
                    case 5:
                        text_1 = _b.sent();
                        _b.label = 6;
                    case 6:
                        messageListeners.forEach(function (cb) { return cb({ type: MessageType.BG_FETCH_RESPONSE, data: text_1, error: null, id: id_1 }); });
                        return [3, 8];
                    case 7:
                        error_1 = _b.sent();
                        console.error(error_1);
                        messageListeners.forEach(function (cb) { return cb({ type: MessageType.BG_FETCH_RESPONSE, data: null, error: error_1, id: id_1 }); });
                        return [3, 8];
                    case 8: return [2];
                }
            });
        });
    }
    function addMessageListener(callback) {
        messageListeners.add(callback);
    }
    if (typeof chrome.runtime.sendMessage === 'function') {
        var nativeSendMessage_1 = chrome.runtime.sendMessage;
        chrome.runtime.sendMessage = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            sendMessage.apply(void 0, __spreadArray([], __read(args), false));
            nativeSendMessage_1.apply(chrome.runtime, args);
        };
    }
    else {
        chrome.runtime.sendMessage = sendMessage;
    }
    if (!chrome.runtime.onMessage) {
        chrome.runtime.onMessage = {};
    }
    if (typeof chrome.runtime.onMessage.addListener === 'function') {
        var nativeAddListener_1 = chrome.runtime.onMessage.addListener;
        chrome.runtime.onMessage.addListener = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            addMessageListener(args[0]);
            nativeAddListener_1.apply(chrome.runtime.onMessage, args);
        };
    }
    else {
        chrome.runtime.onMessage.addListener = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return addMessageListener(args[0]);
        };
    }

    var ThemeEngines = {
        cssFilter: 'cssFilter',
        svgFilter: 'svgFilter',
        staticTheme: 'staticTheme',
        dynamicTheme: 'dynamicTheme',
    };

    var DEFAULT_COLORS = {
        darkScheme: {
            background: '#181a1b',
            text: '#e8e6e3',
        },
        lightScheme: {
            background: '#dcdad7',
            text: '#181a1b',
        },
    };
    var DEFAULT_THEME = {
        mode: 1,
        brightness: 100,
        contrast: 100,
        grayscale: 0,
        sepia: 0,
        useFont: false,
        fontFamily: isMacOS ? 'Helvetica Neue' : isWindows ? 'Segoe UI' : 'Open Sans',
        textStroke: 0,
        engine: ThemeEngines.dynamicTheme,
        stylesheet: '',
        darkSchemeBackgroundColor: DEFAULT_COLORS.darkScheme.background,
        darkSchemeTextColor: DEFAULT_COLORS.darkScheme.text,
        lightSchemeBackgroundColor: DEFAULT_COLORS.lightScheme.background,
        lightSchemeTextColor: DEFAULT_COLORS.lightScheme.text,
        scrollbarColor: isMacOS ? '' : 'auto',
        selectionColor: 'auto',
        styleSystemControls: !isCSSColorSchemePropSupported,
        lightColorScheme: 'Default',
        darkColorScheme: 'Default',
        immediateModify: false,
    };

    function isArrayLike(items) {
        return items.length != null;
    }
    function forEach(items, iterator) {
        var e_1, _a;
        if (isArrayLike(items)) {
            for (var i = 0, len = items.length; i < len; i++) {
                iterator(items[i]);
            }
        }
        else {
            try {
                for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                    var item = items_1_1.value;
                    iterator(item);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    }
    function push(array, addition) {
        forEach(addition, function (a) { return array.push(a); });
    }
    function toArray(items) {
        var results = [];
        for (var i = 0, len = items.length; i < len; i++) {
            results.push(items[i]);
        }
        return results;
    }

    function logInfo() {
    }
    function logWarn() {
    }

    function throttle(callback) {
        var pending = false;
        var frameId = null;
        var lastArgs;
        var throttled = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            if (frameId) {
                pending = true;
            }
            else {
                callback.apply(void 0, __spreadArray([], __read(lastArgs), false));
                frameId = requestAnimationFrame(function () {
                    frameId = null;
                    if (pending) {
                        callback.apply(void 0, __spreadArray([], __read(lastArgs), false));
                        pending = false;
                    }
                });
            }
        });
        var cancel = function () {
            cancelAnimationFrame(frameId);
            pending = false;
            frameId = null;
        };
        return Object.assign(throttled, { cancel: cancel });
    }
    function createAsyncTasksQueue() {
        var tasks = [];
        var frameId = null;
        function runTasks() {
            var task;
            while ((task = tasks.shift())) {
                task();
            }
            frameId = null;
        }
        function add(task) {
            tasks.push(task);
            if (!frameId) {
                frameId = requestAnimationFrame(runTasks);
            }
        }
        function cancel() {
            tasks.splice(0);
            cancelAnimationFrame(frameId);
            frameId = null;
        }
        return { add: add, cancel: cancel };
    }

    function getDuration(time) {
        var duration = 0;
        if (time.seconds) {
            duration += time.seconds * 1000;
        }
        if (time.minutes) {
            duration += time.minutes * 60 * 1000;
        }
        if (time.hours) {
            duration += time.hours * 60 * 60 * 1000;
        }
        if (time.days) {
            duration += time.days * 24 * 60 * 60 * 1000;
        }
        return duration;
    }

    function removeNode(node) {
        node && node.parentNode && node.parentNode.removeChild(node);
    }
    function watchForNodePosition(node, mode, onRestore) {
        if (onRestore === void 0) { onRestore = Function.prototype; }
        var MAX_ATTEMPTS_COUNT = 10;
        var RETRY_TIMEOUT = getDuration({ seconds: 2 });
        var ATTEMPTS_INTERVAL = getDuration({ seconds: 10 });
        var prevSibling = node.previousSibling;
        var parent = node.parentNode;
        if (!parent) {
            throw new Error('Unable to watch for node position: parent element not found');
        }
        if (mode === 'prev-sibling' && !prevSibling) {
            throw new Error('Unable to watch for node position: there is no previous sibling');
        }
        var attempts = 0;
        var start = null;
        var timeoutId = null;
        var restore = throttle(function () {
            if (timeoutId) {
                return;
            }
            attempts++;
            var now = Date.now();
            if (start == null) {
                start = now;
            }
            else if (attempts >= MAX_ATTEMPTS_COUNT) {
                if (now - start < ATTEMPTS_INTERVAL) {
                    timeoutId = setTimeout(function () {
                        start = null;
                        attempts = 0;
                        timeoutId = null;
                        restore();
                    }, RETRY_TIMEOUT);
                    return;
                }
                start = now;
                attempts = 1;
            }
            if (mode === 'parent') {
                if (prevSibling && prevSibling.parentNode !== parent) {
                    stop();
                    return;
                }
            }
            if (mode === 'prev-sibling') {
                if (prevSibling.parentNode == null) {
                    stop();
                    return;
                }
                if (prevSibling.parentNode !== parent) {
                    updateParent(prevSibling.parentNode);
                }
            }
            parent.insertBefore(node, prevSibling ? prevSibling.nextSibling : parent.firstChild);
            observer.takeRecords();
            onRestore && onRestore();
        });
        var observer = new MutationObserver(function () {
            if ((mode === 'parent' && node.parentNode !== parent) ||
                (mode === 'prev-sibling' && node.previousSibling !== prevSibling)) {
                restore();
            }
        });
        var run = function () {
            observer.observe(parent, { childList: true });
        };
        var stop = function () {
            clearTimeout(timeoutId);
            observer.disconnect();
            restore.cancel();
        };
        var skip = function () {
            observer.takeRecords();
        };
        var updateParent = function (parentNode) {
            parent = parentNode;
            stop();
            run();
        };
        run();
        return { run: run, stop: stop, skip: skip };
    }
    function iterateShadowHosts(root, iterator) {
        if (root == null) {
            return;
        }
        var walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
            acceptNode: function (node) {
                return node.shadowRoot == null ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
            }
        });
        for (var node = (root.shadowRoot ? walker.currentNode : walker.nextNode()); node != null; node = walker.nextNode()) {
            if (node.classList.contains('surfingkeys_hints_host')) {
                continue;
            }
            iterator(node);
            iterateShadowHosts(node.shadowRoot, iterator);
        }
    }
    var isDOMReady = function () {
        return document.readyState === 'complete' || document.readyState === 'interactive';
    };
    function setIsDOMReady(newFunc) {
        isDOMReady = newFunc;
    }
    var readyStateListeners = new Set();
    function addDOMReadyListener(listener) {
        isDOMReady() ? listener() : readyStateListeners.add(listener);
    }
    function removeDOMReadyListener(listener) {
        readyStateListeners.delete(listener);
    }
    function isReadyStateComplete() {
        return document.readyState === 'complete';
    }
    var readyStateCompleteListeners = new Set();
    function addReadyStateCompleteListener(listener) {
        isReadyStateComplete() ? listener() : readyStateCompleteListeners.add(listener);
    }
    function cleanReadyStateCompleteListeners() {
        readyStateCompleteListeners.clear();
    }
    if (!isDOMReady()) {
        var onReadyStateChange_1 = function () {
            if (isDOMReady()) {
                readyStateListeners.forEach(function (listener) { return listener(); });
                readyStateListeners.clear();
                if (isReadyStateComplete()) {
                    document.removeEventListener('readystatechange', onReadyStateChange_1);
                    readyStateCompleteListeners.forEach(function (listener) { return listener(); });
                    readyStateCompleteListeners.clear();
                }
            }
        };
        document.addEventListener('readystatechange', onReadyStateChange_1);
    }
    var HUGE_MUTATIONS_COUNT = 1000;
    function isHugeMutation(mutations) {
        if (mutations.length > HUGE_MUTATIONS_COUNT) {
            return true;
        }
        var addedNodesCount = 0;
        for (var i = 0; i < mutations.length; i++) {
            addedNodesCount += mutations[i].addedNodes.length;
            if (addedNodesCount > HUGE_MUTATIONS_COUNT) {
                return true;
            }
        }
        return false;
    }
    function getElementsTreeOperations(mutations) {
        var additions = new Set();
        var deletions = new Set();
        var moves = new Set();
        mutations.forEach(function (m) {
            forEach(m.addedNodes, function (n) {
                if (n instanceof Element && n.isConnected) {
                    additions.add(n);
                }
            });
            forEach(m.removedNodes, function (n) {
                if (n instanceof Element) {
                    if (n.isConnected) {
                        moves.add(n);
                        additions.delete(n);
                    }
                    else {
                        deletions.add(n);
                    }
                }
            });
        });
        var duplicateAdditions = [];
        var duplicateDeletions = [];
        additions.forEach(function (node) {
            if (additions.has(node.parentElement)) {
                duplicateAdditions.push(node);
            }
        });
        deletions.forEach(function (node) {
            if (deletions.has(node.parentElement)) {
                duplicateDeletions.push(node);
            }
        });
        duplicateAdditions.forEach(function (node) { return additions.delete(node); });
        duplicateDeletions.forEach(function (node) { return deletions.delete(node); });
        return { additions: additions, moves: moves, deletions: deletions };
    }
    var optimizedTreeObservers = new Map();
    var optimizedTreeCallbacks = new WeakMap();
    function createOptimizedTreeObserver(root, callbacks) {
        var observer;
        var observerCallbacks;
        var domReadyListener;
        if (optimizedTreeObservers.has(root)) {
            observer = optimizedTreeObservers.get(root);
            observerCallbacks = optimizedTreeCallbacks.get(observer);
        }
        else {
            var hadHugeMutationsBefore_1 = false;
            var subscribedForReadyState_1 = false;
            observer = new MutationObserver(function (mutations) {
                if (isHugeMutation(mutations)) {
                    if (!hadHugeMutationsBefore_1 || isDOMReady()) {
                        observerCallbacks.forEach(function (_a) {
                            var onHugeMutations = _a.onHugeMutations;
                            return onHugeMutations(root);
                        });
                    }
                    else if (!subscribedForReadyState_1) {
                        domReadyListener = function () { return observerCallbacks.forEach(function (_a) {
                            var onHugeMutations = _a.onHugeMutations;
                            return onHugeMutations(root);
                        }); };
                        addDOMReadyListener(domReadyListener);
                        subscribedForReadyState_1 = true;
                    }
                    hadHugeMutationsBefore_1 = true;
                }
                else {
                    var elementsOperations_1 = getElementsTreeOperations(mutations);
                    observerCallbacks.forEach(function (_a) {
                        var onMinorMutations = _a.onMinorMutations;
                        return onMinorMutations(elementsOperations_1);
                    });
                }
            });
            observer.observe(root, { childList: true, subtree: true });
            optimizedTreeObservers.set(root, observer);
            observerCallbacks = new Set();
            optimizedTreeCallbacks.set(observer, observerCallbacks);
        }
        observerCallbacks.add(callbacks);
        return {
            disconnect: function () {
                observerCallbacks.delete(callbacks);
                if (domReadyListener) {
                    removeDOMReadyListener(domReadyListener);
                }
                if (observerCallbacks.size === 0) {
                    observer.disconnect();
                    optimizedTreeCallbacks.delete(observer);
                    optimizedTreeObservers.delete(root);
                }
            },
        };
    }

    var anchor;
    var parsedURLCache = new Map();
    function fixBaseURL($url) {
        if (!anchor) {
            anchor = document.createElement('a');
        }
        anchor.href = $url;
        return anchor.href;
    }
    function parseURL($url, $base) {
        if ($base === void 0) { $base = null; }
        var key = "".concat($url).concat($base ? ";".concat($base) : '');
        if (parsedURLCache.has(key)) {
            return parsedURLCache.get(key);
        }
        if ($base) {
            var parsedURL_1 = new URL($url, fixBaseURL($base));
            parsedURLCache.set(key, parsedURL_1);
            return parsedURL_1;
        }
        var parsedURL = new URL(fixBaseURL($url));
        parsedURLCache.set($url, parsedURL);
        return parsedURL;
    }
    function getAbsoluteURL($base, $relative) {
        if ($relative.match(/^data\\\\?\\:/)) {
            return $relative;
        }
        if (/^\\/\\//.test($relative)) {
            return "".concat(location.protocol).concat($relative);
        }
        var b = parseURL($base);
        var a = parseURL($relative, b.href);
        return a.href;
    }
    function isRelativeHrefOnAbsolutePath(href) {
        if (href.startsWith('data:')) {
            return true;
        }
        var url = parseURL(href);
        if (url.protocol !== location.protocol) {
            return false;
        }
        if (url.hostname !== location.hostname) {
            return false;
        }
        if (url.port !== location.port) {
            return false;
        }
        return url.pathname === location.pathname;
    }

    function iterateCSSRules(rules, iterate, onMediaRuleError) {
        forEach(rules, function (rule) {
            if (rule.selectorText) {
                iterate(rule);
            }
            else if (rule.href) {
                try {
                    iterateCSSRules(rule.styleSheet.cssRules, iterate, onMediaRuleError);
                }
                catch (err) {
                    logInfo("Found a non-loaded link.");
                    onMediaRuleError && onMediaRuleError();
                }
            }
            else if (rule.media) {
                var media = Array.from(rule.media);
                var isScreenOrAllOrQuery = media.some(function (m) { return m.startsWith('screen') || m.startsWith('all') || m.startsWith('('); });
                var isPrintOrSpeech = media.some(function (m) { return m.startsWith('print') || m.startsWith('speech'); });
                if (isScreenOrAllOrQuery || !isPrintOrSpeech) {
                    iterateCSSRules(rule.cssRules, iterate, onMediaRuleError);
                }
            }
            else if (rule.conditionText) {
                if (CSS.supports(rule.conditionText)) {
                    iterateCSSRules(rule.cssRules, iterate, onMediaRuleError);
                }
            }
            else {
                logWarn("CSSRule type not supported", rule);
            }
        });
    }
    var shorthandVarDependantProperties = [
        'background',
        'border',
        'border-color',
        'border-bottom',
        'border-left',
        'border-right',
        'border-top',
        'outline',
        'outline-color',
    ];
    var shorthandVarDepPropRegexps = isSafari ? shorthandVarDependantProperties.map(function (prop) {
        var regexp = new RegExp("".concat(prop, ":\\\\s*(.*?)\\\\s*;"));
        return [prop, regexp];
    }) : null;
    function iterateCSSDeclarations(style, iterate) {
        forEach(style, function (property) {
            var value = style.getPropertyValue(property).trim();
            if (!value) {
                return;
            }
            iterate(property, value);
        });
        var cssText = style.cssText;
        if (cssText.includes('var(')) {
            if (isSafari) {
                shorthandVarDepPropRegexps.forEach(function (_a) {
                    var _b = __read(_a, 2), prop = _b[0], regexp = _b[1];
                    var match = cssText.match(regexp);
                    if (match && match[1]) {
                        var val = match[1].trim();
                        iterate(prop, val);
                    }
                });
            }
            else {
                shorthandVarDependantProperties.forEach(function (prop) {
                    var val = style.getPropertyValue(prop);
                    if (val && val.includes('var(')) {
                        iterate(prop, val);
                    }
                });
            }
        }
    }
    var cssURLRegex = /url\\((('.*?')|(".*?")|([^\\)]*?))\\)/g;
    var cssImportRegex = /@import\\s*(url\\()?(('.+?')|(".+?")|([^\\)]*?))\\)? ?(screen)?;?/gi;
    function getCSSURLValue(cssURL) {
        return cssURL.trim().replace(/^url\\((.*)\\)$/, '$1').trim().replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1').replace(/(?:\\\\(.))/g, '$1');
    }
    function getCSSBaseBath(url) {
        var cssURL = parseURL(url);
        return "".concat(cssURL.origin).concat(cssURL.pathname.replace(/\\?.*$/, '').replace(/(\\/)([^\\/]+)$/i, '$1'));
    }
    function replaceCSSRelativeURLsWithAbsolute($css, cssBasePath) {
        return $css.replace(cssURLRegex, function (match) {
            var pathValue = getCSSURLValue(match);
            try {
                return "url(\\"".concat(getAbsoluteURL(cssBasePath, pathValue), "\\")");
            }
            catch (err) {
                return match;
            }
        });
    }
    var cssCommentsRegex = /\\/\\*[\\s\\S]*?\\*\\//g;
    function removeCSSComments($css) {
        return $css.replace(cssCommentsRegex, '');
    }
    var fontFaceRegex = /@font-face\\s*{[^}]*}/g;
    function replaceCSSFontFace($css) {
        return $css.replace(fontFaceRegex, '');
    }

    function evalMath(expression) {
        var rpnStack = [];
        var workingStack = [];
        var lastToken;
        for (var i = 0, len = expression.length; i < len; i++) {
            var token = expression[i];
            if (!token || token === ' ') {
                continue;
            }
            if (operators.has(token)) {
                var op = operators.get(token);
                while (workingStack.length) {
                    var currentOp = operators.get(workingStack[0]);
                    if (!currentOp) {
                        break;
                    }
                    if (op.lessOrEqualThan(currentOp)) {
                        rpnStack.push(workingStack.shift());
                    }
                    else {
                        break;
                    }
                }
                workingStack.unshift(token);
            }
            else if (!lastToken || operators.has(lastToken)) {
                rpnStack.push(token);
            }
            else {
                rpnStack[rpnStack.length - 1] += token;
            }
            lastToken = token;
        }
        rpnStack.push.apply(rpnStack, __spreadArray([], __read(workingStack), false));
        var stack = [];
        for (var i = 0, len = rpnStack.length; i < len; i++) {
            var op = operators.get(rpnStack[i]);
            if (op) {
                var args = stack.splice(0, 2);
                stack.push(op.exec(args[1], args[0]));
            }
            else {
                stack.unshift(parseFloat(rpnStack[i]));
            }
        }
        return stack[0];
    }
    var Operator = (function () {
        function Operator(precedence, method) {
            this.precendce = precedence;
            this.execMethod = method;
        }
        Operator.prototype.exec = function (left, right) {
            return this.execMethod(left, right);
        };
        Operator.prototype.lessOrEqualThan = function (op) {
            return this.precendce <= op.precendce;
        };
        return Operator;
    }());
    var operators = new Map([
        ['+', new Operator(1, function (left, right) { return left + right; })],
        ['-', new Operator(1, function (left, right) { return left - right; })],
        ['*', new Operator(2, function (left, right) { return left * right; })],
        ['/', new Operator(2, function (left, right) { return left / right; })],
    ]);

    function getMatches(regex, input, group) {
        if (group === void 0) { group = 0; }
        var matches = [];
        var m;
        while ((m = regex.exec(input))) {
            matches.push(m[group]);
        }
        return matches;
    }
    function formatCSS(text) {
        function trimLeft(text) {
            return text.replace(/^\\s+/, '');
        }
        function getIndent(depth) {
            if (depth === 0) {
                return '';
            }
            return ' '.repeat(4 * depth);
        }
        if (text.length < 50000) {
            var emptyRuleRegexp = /[^{}]+{\\s*}/;
            while (emptyRuleRegexp.test(text)) {
                text = text.replace(emptyRuleRegexp, '');
            }
        }
        var css = (text
            .replace(/\\s{2,}/g, ' ')
            .replace(/\\{/g, '{\\n')
            .replace(/\\}/g, '\\n}\\n')
            .replace(/\\;(?![^\\(|\\"]*(\\)|\\"))/g, ';\\n')
            .replace(/\\,(?![^\\(|\\"]*(\\)|\\"))/g, ',\\n')
            .replace(/\\n\\s*\\n/g, '\\n')
            .split('\\n'));
        var depth = 0;
        var formatted = [];
        for (var x = 0, len = css.length; x < len; x++) {
            var line = "".concat(css[x], "\\n");
            if (line.includes('{')) {
                formatted.push(getIndent(depth++) + trimLeft(line));
            }
            else if (line.includes('\\}')) {
                formatted.push(getIndent(--depth) + trimLeft(line));
            }
            else {
                formatted.push(getIndent(depth) + trimLeft(line));
            }
        }
        return formatted.join('').trim();
    }
    function getParenthesesRange(input, searchStartIndex) {
        if (searchStartIndex === void 0) { searchStartIndex = 0; }
        var length = input.length;
        var depth = 0;
        var firstOpenIndex = -1;
        for (var i = searchStartIndex; i < length; i++) {
            if (depth === 0) {
                var openIndex = input.indexOf('(', i);
                if (openIndex < 0) {
                    break;
                }
                firstOpenIndex = openIndex;
                depth++;
                i = openIndex;
            }
            else {
                var closingIndex = input.indexOf(')', i);
                if (closingIndex < 0) {
                    break;
                }
                var openIndex = input.indexOf('(', i);
                if (openIndex < 0 || closingIndex < openIndex) {
                    depth--;
                    if (depth === 0) {
                        return { start: firstOpenIndex, end: closingIndex + 1 };
                    }
                    i = closingIndex;
                }
                else {
                    depth++;
                    i = openIndex;
                }
            }
        }
        return null;
    }

    var hslaParseCache = new Map();
    var rgbaParseCache = new Map();
    function parseColorWithCache($color) {
        $color = $color.trim();
        if (rgbaParseCache.has($color)) {
            return rgbaParseCache.get($color);
        }
        if ($color.includes('calc(')) {
            $color = lowerCalcExpression($color);
        }
        var color = parse($color);
        color && rgbaParseCache.set($color, color);
        return color;
    }
    function parseToHSLWithCache(color) {
        if (hslaParseCache.has(color)) {
            return hslaParseCache.get(color);
        }
        var rgb = parseColorWithCache(color);
        if (!rgb) {
            return null;
        }
        var hsl = rgbToHSL(rgb);
        hslaParseCache.set(color, hsl);
        return hsl;
    }
    function clearColorCache() {
        hslaParseCache.clear();
        rgbaParseCache.clear();
    }
    function hslToRGB(_a) {
        var h = _a.h, s = _a.s, l = _a.l, _b = _a.a, a = _b === void 0 ? 1 : _b;
        if (s === 0) {
            var _c = __read([l, l, l].map(function (x) { return Math.round(x * 255); }), 3), r_1 = _c[0], b_1 = _c[1], g_1 = _c[2];
            return { r: r_1, g: g_1, b: b_1, a: a };
        }
        var c = (1 - Math.abs(2 * l - 1)) * s;
        var x = c * (1 - Math.abs((h / 60) % 2 - 1));
        var m = l - c / 2;
        var _d = __read((h < 60 ? [c, x, 0] :
            h < 120 ? [x, c, 0] :
                h < 180 ? [0, c, x] :
                    h < 240 ? [0, x, c] :
                        h < 300 ? [x, 0, c] :
                            [c, 0, x]).map(function (n) { return Math.round((n + m) * 255); }), 3), r = _d[0], g = _d[1], b = _d[2];
        return { r: r, g: g, b: b, a: a };
    }
    function rgbToHSL(_a) {
        var r255 = _a.r, g255 = _a.g, b255 = _a.b, _b = _a.a, a = _b === void 0 ? 1 : _b;
        var r = r255 / 255;
        var g = g255 / 255;
        var b = b255 / 255;
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var c = max - min;
        var l = (max + min) / 2;
        if (c === 0) {
            return { h: 0, s: 0, l: l, a: a };
        }
        var h = (max === r ? (((g - b) / c) % 6) :
            max === g ? ((b - r) / c + 2) :
                ((r - g) / c + 4)) * 60;
        if (h < 0) {
            h += 360;
        }
        var s = c / (1 - Math.abs(2 * l - 1));
        return { h: h, s: s, l: l, a: a };
    }
    function toFixed(n, digits) {
        if (digits === void 0) { digits = 0; }
        var fixed = n.toFixed(digits);
        if (digits === 0) {
            return fixed;
        }
        var dot = fixed.indexOf('.');
        if (dot >= 0) {
            var zerosMatch = fixed.match(/0+$/);
            if (zerosMatch) {
                if (zerosMatch.index === dot + 1) {
                    return fixed.substring(0, dot);
                }
                return fixed.substring(0, zerosMatch.index);
            }
        }
        return fixed;
    }
    function rgbToString(rgb) {
        var r = rgb.r, g = rgb.g, b = rgb.b, a = rgb.a;
        if (a != null && a < 1) {
            return "rgba(".concat(toFixed(r), ", ").concat(toFixed(g), ", ").concat(toFixed(b), ", ").concat(toFixed(a, 2), ")");
        }
        return "rgb(".concat(toFixed(r), ", ").concat(toFixed(g), ", ").concat(toFixed(b), ")");
    }
    function rgbToHexString(_a) {
        var r = _a.r, g = _a.g, b = _a.b, a = _a.a;
        return "#".concat((a != null && a < 1 ? [r, g, b, Math.round(a * 255)] : [r, g, b]).map(function (x) {
            return "".concat(x < 16 ? '0' : '').concat(x.toString(16));
        }).join(''));
    }
    function hslToString(hsl) {
        var h = hsl.h, s = hsl.s, l = hsl.l, a = hsl.a;
        if (a != null && a < 1) {
            return "hsla(".concat(toFixed(h), ", ").concat(toFixed(s * 100), "%, ").concat(toFixed(l * 100), "%, ").concat(toFixed(a, 2), ")");
        }
        return "hsl(".concat(toFixed(h), ", ").concat(toFixed(s * 100), "%, ").concat(toFixed(l * 100), "%)");
    }
    var rgbMatch = /^rgba?\\([^\\(\\)]+\\)$/;
    var hslMatch = /^hsla?\\([^\\(\\)]+\\)$/;
    var hexMatch = /^#[0-9a-f]+$/i;
    function parse($color) {
        var c = $color.trim().toLowerCase();
        if (c.match(rgbMatch)) {
            return parseRGB(c);
        }
        if (c.match(hslMatch)) {
            return parseHSL(c);
        }
        if (c.match(hexMatch)) {
            return parseHex(c);
        }
        if (knownColors.has(c)) {
            return getColorByName(c);
        }
        if (systemColors.has(c)) {
            return getSystemColor(c);
        }
        if ($color === 'transparent') {
            return { r: 0, g: 0, b: 0, a: 0 };
        }
        return null;
    }
    function getNumbers($color) {
        var numbers = [];
        var prevPos = 0;
        var isMining = false;
        var startIndex = $color.indexOf('(');
        $color = $color.substring(startIndex + 1, $color.length - 1);
        for (var i = 0; i < $color.length; i++) {
            var c = $color[i];
            if (c >= '0' && c <= '9' || c === '.' || c === '+' || c === '-') {
                isMining = true;
            }
            else if (isMining && (c === ' ' || c === ',')) {
                numbers.push($color.substring(prevPos, i));
                isMining = false;
                prevPos = i + 1;
            }
            else if (!isMining) {
                prevPos = i + 1;
            }
        }
        if (isMining) {
            numbers.push($color.substring(prevPos, $color.length));
        }
        return numbers;
    }
    function getNumbersFromString(str, range, units) {
        var raw = getNumbers(str);
        var unitsList = Object.entries(units);
        var numbers = raw.map(function (r) { return r.trim(); }).map(function (r, i) {
            var n;
            var unit = unitsList.find(function (_a) {
                var _b = __read(_a, 1), u = _b[0];
                return r.endsWith(u);
            });
            if (unit) {
                n = parseFloat(r.substring(0, r.length - unit[0].length)) / unit[1] * range[i];
            }
            else {
                n = parseFloat(r);
            }
            if (range[i] > 1) {
                return Math.round(n);
            }
            return n;
        });
        return numbers;
    }
    var rgbRange = [255, 255, 255, 1];
    var rgbUnits = { '%': 100 };
    function parseRGB($rgb) {
        var _a = __read(getNumbersFromString($rgb, rgbRange, rgbUnits), 4), r = _a[0], g = _a[1], b = _a[2], _b = _a[3], a = _b === void 0 ? 1 : _b;
        return { r: r, g: g, b: b, a: a };
    }
    var hslRange = [360, 1, 1, 1];
    var hslUnits = { '%': 100, 'deg': 360, 'rad': 2 * Math.PI, 'turn': 1 };
    function parseHSL($hsl) {
        var _a = __read(getNumbersFromString($hsl, hslRange, hslUnits), 4), h = _a[0], s = _a[1], l = _a[2], _b = _a[3], a = _b === void 0 ? 1 : _b;
        return hslToRGB({ h: h, s: s, l: l, a: a });
    }
    function parseHex($hex) {
        var h = $hex.substring(1);
        switch (h.length) {
            case 3:
            case 4: {
                var _a = __read([0, 1, 2].map(function (i) { return parseInt("".concat(h[i]).concat(h[i]), 16); }), 3), r = _a[0], g = _a[1], b = _a[2];
                var a = h.length === 3 ? 1 : (parseInt("".concat(h[3]).concat(h[3]), 16) / 255);
                return { r: r, g: g, b: b, a: a };
            }
            case 6:
            case 8: {
                var _b = __read([0, 2, 4].map(function (i) { return parseInt(h.substring(i, i + 2), 16); }), 3), r = _b[0], g = _b[1], b = _b[2];
                var a = h.length === 6 ? 1 : (parseInt(h.substring(6, 8), 16) / 255);
                return { r: r, g: g, b: b, a: a };
            }
        }
        return null;
    }
    function getColorByName($color) {
        var n = knownColors.get($color);
        return {
            r: (n >> 16) & 255,
            g: (n >> 8) & 255,
            b: (n >> 0) & 255,
            a: 1
        };
    }
    function getSystemColor($color) {
        var n = systemColors.get($color);
        return {
            r: (n >> 16) & 255,
            g: (n >> 8) & 255,
            b: (n >> 0) & 255,
            a: 1
        };
    }
    function lowerCalcExpression(color) {
        var searchIndex = 0;
        var replaceBetweenIndices = function (start, end, replacement) {
            color = color.substring(0, start) + replacement + color.substring(end);
        };
        while ((searchIndex = color.indexOf('calc(')) !== -1) {
            var range = getParenthesesRange(color, searchIndex);
            if (!range) {
                break;
            }
            var slice = color.slice(range.start + 1, range.end - 1);
            var includesPercentage = slice.includes('%');
            slice = slice.split('%').join('');
            var output = Math.round(evalMath(slice));
            replaceBetweenIndices(range.start - 4, range.end, output + (includesPercentage ? '%' : ''));
        }
        return color;
    }
    var knownColors = new Map(Object.entries({
        aliceblue: 0xf0f8ff,
        antiquewhite: 0xfaebd7,
        aqua: 0x00ffff,
        aquamarine: 0x7fffd4,
        azure: 0xf0ffff,
        beige: 0xf5f5dc,
        bisque: 0xffe4c4,
        black: 0x000000,
        blanchedalmond: 0xffebcd,
        blue: 0x0000ff,
        blueviolet: 0x8a2be2,
        brown: 0xa52a2a,
        burlywood: 0xdeb887,
        cadetblue: 0x5f9ea0,
        chartreuse: 0x7fff00,
        chocolate: 0xd2691e,
        coral: 0xff7f50,
        cornflowerblue: 0x6495ed,
        cornsilk: 0xfff8dc,
        crimson: 0xdc143c,
        cyan: 0x00ffff,
        darkblue: 0x00008b,
        darkcyan: 0x008b8b,
        darkgoldenrod: 0xb8860b,
        darkgray: 0xa9a9a9,
        darkgrey: 0xa9a9a9,
        darkgreen: 0x006400,
        darkkhaki: 0xbdb76b,
        darkmagenta: 0x8b008b,
        darkolivegreen: 0x556b2f,
        darkorange: 0xff8c00,
        darkorchid: 0x9932cc,
        darkred: 0x8b0000,
        darksalmon: 0xe9967a,
        darkseagreen: 0x8fbc8f,
        darkslateblue: 0x483d8b,
        darkslategray: 0x2f4f4f,
        darkslategrey: 0x2f4f4f,
        darkturquoise: 0x00ced1,
        darkviolet: 0x9400d3,
        deeppink: 0xff1493,
        deepskyblue: 0x00bfff,
        dimgray: 0x696969,
        dimgrey: 0x696969,
        dodgerblue: 0x1e90ff,
        firebrick: 0xb22222,
        floralwhite: 0xfffaf0,
        forestgreen: 0x228b22,
        fuchsia: 0xff00ff,
        gainsboro: 0xdcdcdc,
        ghostwhite: 0xf8f8ff,
        gold: 0xffd700,
        goldenrod: 0xdaa520,
        gray: 0x808080,
        grey: 0x808080,
        green: 0x008000,
        greenyellow: 0xadff2f,
        honeydew: 0xf0fff0,
        hotpink: 0xff69b4,
        indianred: 0xcd5c5c,
        indigo: 0x4b0082,
        ivory: 0xfffff0,
        khaki: 0xf0e68c,
        lavender: 0xe6e6fa,
        lavenderblush: 0xfff0f5,
        lawngreen: 0x7cfc00,
        lemonchiffon: 0xfffacd,
        lightblue: 0xadd8e6,
        lightcoral: 0xf08080,
        lightcyan: 0xe0ffff,
        lightgoldenrodyellow: 0xfafad2,
        lightgray: 0xd3d3d3,
        lightgrey: 0xd3d3d3,
        lightgreen: 0x90ee90,
        lightpink: 0xffb6c1,
        lightsalmon: 0xffa07a,
        lightseagreen: 0x20b2aa,
        lightskyblue: 0x87cefa,
        lightslategray: 0x778899,
        lightslategrey: 0x778899,
        lightsteelblue: 0xb0c4de,
        lightyellow: 0xffffe0,
        lime: 0x00ff00,
        limegreen: 0x32cd32,
        linen: 0xfaf0e6,
        magenta: 0xff00ff,
        maroon: 0x800000,
        mediumaquamarine: 0x66cdaa,
        mediumblue: 0x0000cd,
        mediumorchid: 0xba55d3,
        mediumpurple: 0x9370db,
        mediumseagreen: 0x3cb371,
        mediumslateblue: 0x7b68ee,
        mediumspringgreen: 0x00fa9a,
        mediumturquoise: 0x48d1cc,
        mediumvioletred: 0xc71585,
        midnightblue: 0x191970,
        mintcream: 0xf5fffa,
        mistyrose: 0xffe4e1,
        moccasin: 0xffe4b5,
        navajowhite: 0xffdead,
        navy: 0x000080,
        oldlace: 0xfdf5e6,
        olive: 0x808000,
        olivedrab: 0x6b8e23,
        orange: 0xffa500,
        orangered: 0xff4500,
        orchid: 0xda70d6,
        palegoldenrod: 0xeee8aa,
        palegreen: 0x98fb98,
        paleturquoise: 0xafeeee,
        palevioletred: 0xdb7093,
        papayawhip: 0xffefd5,
        peachpuff: 0xffdab9,
        peru: 0xcd853f,
        pink: 0xffc0cb,
        plum: 0xdda0dd,
        powderblue: 0xb0e0e6,
        purple: 0x800080,
        rebeccapurple: 0x663399,
        red: 0xff0000,
        rosybrown: 0xbc8f8f,
        royalblue: 0x4169e1,
        saddlebrown: 0x8b4513,
        salmon: 0xfa8072,
        sandybrown: 0xf4a460,
        seagreen: 0x2e8b57,
        seashell: 0xfff5ee,
        sienna: 0xa0522d,
        silver: 0xc0c0c0,
        skyblue: 0x87ceeb,
        slateblue: 0x6a5acd,
        slategray: 0x708090,
        slategrey: 0x708090,
        snow: 0xfffafa,
        springgreen: 0x00ff7f,
        steelblue: 0x4682b4,
        tan: 0xd2b48c,
        teal: 0x008080,
        thistle: 0xd8bfd8,
        tomato: 0xff6347,
        turquoise: 0x40e0d0,
        violet: 0xee82ee,
        wheat: 0xf5deb3,
        white: 0xffffff,
        whitesmoke: 0xf5f5f5,
        yellow: 0xffff00,
        yellowgreen: 0x9acd32,
    }));
    var systemColors = new Map(Object.entries({
        ActiveBorder: 0x3b99fc,
        ActiveCaption: 0x000000,
        AppWorkspace: 0xaaaaaa,
        Background: 0x6363ce,
        ButtonFace: 0xffffff,
        ButtonHighlight: 0xe9e9e9,
        ButtonShadow: 0x9fa09f,
        ButtonText: 0x000000,
        CaptionText: 0x000000,
        GrayText: 0x7f7f7f,
        Highlight: 0xb2d7ff,
        HighlightText: 0x000000,
        InactiveBorder: 0xffffff,
        InactiveCaption: 0xffffff,
        InactiveCaptionText: 0x000000,
        InfoBackground: 0xfbfcc5,
        InfoText: 0x000000,
        Menu: 0xf6f6f6,
        MenuText: 0xffffff,
        Scrollbar: 0xaaaaaa,
        ThreeDDarkShadow: 0x000000,
        ThreeDFace: 0xc0c0c0,
        ThreeDHighlight: 0xffffff,
        ThreeDLightShadow: 0xffffff,
        ThreeDShadow: 0x000000,
        Window: 0xececec,
        WindowFrame: 0xaaaaaa,
        WindowText: 0x000000,
        '-webkit-focus-ring-color': 0xe59700
    }).map(function (_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        return [key.toLowerCase(), value];
    }));
    function getSRGBLightness(r, g, b) {
        return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    }

    function scale(x, inLow, inHigh, outLow, outHigh) {
        return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
    }
    function clamp(x, min, max) {
        return Math.min(max, Math.max(min, x));
    }
    function multiplyMatrices(m1, m2) {
        var result = [];
        for (var i = 0, len = m1.length; i < len; i++) {
            result[i] = [];
            for (var j = 0, len2 = m2[0].length; j < len2; j++) {
                var sum = 0;
                for (var k = 0, len3 = m1[0].length; k < len3; k++) {
                    sum += m1[i][k] * m2[k][j];
                }
                result[i][j] = sum;
            }
        }
        return result;
    }

    function createFilterMatrix(config) {
        var m = Matrix.identity();
        if (config.sepia !== 0) {
            m = multiplyMatrices(m, Matrix.sepia(config.sepia / 100));
        }
        if (config.grayscale !== 0) {
            m = multiplyMatrices(m, Matrix.grayscale(config.grayscale / 100));
        }
        if (config.contrast !== 100) {
            m = multiplyMatrices(m, Matrix.contrast(config.contrast / 100));
        }
        if (config.brightness !== 100) {
            m = multiplyMatrices(m, Matrix.brightness(config.brightness / 100));
        }
        if (config.mode === 1) {
            m = multiplyMatrices(m, Matrix.invertNHue());
        }
        return m;
    }
    function applyColorMatrix(_a, matrix) {
        var _b = __read(_a, 3), r = _b[0], g = _b[1], b = _b[2];
        var rgb = [[r / 255], [g / 255], [b / 255], [1], [1]];
        var result = multiplyMatrices(matrix, rgb);
        return [0, 1, 2].map(function (i) { return clamp(Math.round(result[i][0] * 255), 0, 255); });
    }
    var Matrix = {
        identity: function () {
            return [
                [1, 0, 0, 0, 0],
                [0, 1, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 0, 1]
            ];
        },
        invertNHue: function () {
            return [
                [0.333, -0.667, -0.667, 0, 1],
                [-0.667, 0.333, -0.667, 0, 1],
                [-0.667, -0.667, 0.333, 0, 1],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 0, 1]
            ];
        },
        brightness: function (v) {
            return [
                [v, 0, 0, 0, 0],
                [0, v, 0, 0, 0],
                [0, 0, v, 0, 0],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 0, 1]
            ];
        },
        contrast: function (v) {
            var t = (1 - v) / 2;
            return [
                [v, 0, 0, 0, t],
                [0, v, 0, 0, t],
                [0, 0, v, 0, t],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 0, 1]
            ];
        },
        sepia: function (v) {
            return [
                [(0.393 + 0.607 * (1 - v)), (0.769 - 0.769 * (1 - v)), (0.189 - 0.189 * (1 - v)), 0, 0],
                [(0.349 - 0.349 * (1 - v)), (0.686 + 0.314 * (1 - v)), (0.168 - 0.168 * (1 - v)), 0, 0],
                [(0.272 - 0.272 * (1 - v)), (0.534 - 0.534 * (1 - v)), (0.131 + 0.869 * (1 - v)), 0, 0],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 0, 1]
            ];
        },
        grayscale: function (v) {
            return [
                [(0.2126 + 0.7874 * (1 - v)), (0.7152 - 0.7152 * (1 - v)), (0.0722 - 0.0722 * (1 - v)), 0, 0],
                [(0.2126 - 0.2126 * (1 - v)), (0.7152 + 0.2848 * (1 - v)), (0.0722 - 0.0722 * (1 - v)), 0, 0],
                [(0.2126 - 0.2126 * (1 - v)), (0.7152 - 0.7152 * (1 - v)), (0.0722 + 0.9278 * (1 - v)), 0, 0],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 0, 1]
            ];
        },
    };

    function getBgPole(theme) {
        var isDarkScheme = theme.mode === 1;
        var prop = isDarkScheme ? 'darkSchemeBackgroundColor' : 'lightSchemeBackgroundColor';
        return theme[prop];
    }
    function getFgPole(theme) {
        var isDarkScheme = theme.mode === 1;
        var prop = isDarkScheme ? 'darkSchemeTextColor' : 'lightSchemeTextColor';
        return theme[prop];
    }
    var colorModificationCache = new Map();
    function clearColorModificationCache() {
        colorModificationCache.clear();
    }
    var rgbCacheKeys = ['r', 'g', 'b', 'a'];
    var themeCacheKeys$1 = ['mode', 'brightness', 'contrast', 'grayscale', 'sepia', 'darkSchemeBackgroundColor', 'darkSchemeTextColor', 'lightSchemeBackgroundColor', 'lightSchemeTextColor'];
    function getCacheId(rgb, theme) {
        var resultId = '';
        rgbCacheKeys.forEach(function (key) {
            resultId += "".concat(rgb[key], ";");
        });
        themeCacheKeys$1.forEach(function (key) {
            resultId += "".concat(theme[key], ";");
        });
        return resultId;
    }
    function modifyColorWithCache(rgb, theme, modifyHSL, poleColor, anotherPoleColor) {
        var fnCache;
        if (colorModificationCache.has(modifyHSL)) {
            fnCache = colorModificationCache.get(modifyHSL);
        }
        else {
            fnCache = new Map();
            colorModificationCache.set(modifyHSL, fnCache);
        }
        var id = getCacheId(rgb, theme);
        if (fnCache.has(id)) {
            return fnCache.get(id);
        }
        var hsl = rgbToHSL(rgb);
        var pole = poleColor == null ? null : parseToHSLWithCache(poleColor);
        var anotherPole = anotherPoleColor == null ? null : parseToHSLWithCache(anotherPoleColor);
        var modified = modifyHSL(hsl, pole, anotherPole);
        var _a = hslToRGB(modified), r = _a.r, g = _a.g, b = _a.b, a = _a.a;
        var matrix = createFilterMatrix(theme);
        var _b = __read(applyColorMatrix([r, g, b], matrix), 3), rf = _b[0], gf = _b[1], bf = _b[2];
        var color = (a === 1 ?
            rgbToHexString({ r: rf, g: gf, b: bf }) :
            rgbToString({ r: rf, g: gf, b: bf, a: a }));
        fnCache.set(id, color);
        return color;
    }
    function noopHSL(hsl) {
        return hsl;
    }
    function modifyColor(rgb, theme) {
        return modifyColorWithCache(rgb, theme, noopHSL);
    }
    function modifyLightSchemeColor(rgb, theme) {
        var poleBg = getBgPole(theme);
        var poleFg = getFgPole(theme);
        return modifyColorWithCache(rgb, theme, modifyLightModeHSL, poleFg, poleBg);
    }
    function modifyLightModeHSL(_a, poleFg, poleBg) {
        var h = _a.h, s = _a.s, l = _a.l, a = _a.a;
        var isDark = l < 0.5;
        var isNeutral;
        if (isDark) {
            isNeutral = l < 0.2 || s < 0.12;
        }
        else {
            var isBlue = h > 200 && h < 280;
            isNeutral = s < 0.24 || (l > 0.8 && isBlue);
        }
        var hx = h;
        var sx = l;
        if (isNeutral) {
            if (isDark) {
                hx = poleFg.h;
                sx = poleFg.s;
            }
            else {
                hx = poleBg.h;
                sx = poleBg.s;
            }
        }
        var lx = scale(l, 0, 1, poleFg.l, poleBg.l);
        return { h: hx, s: sx, l: lx, a: a };
    }
    var MAX_BG_LIGHTNESS = 0.4;
    function modifyBgHSL(_a, pole) {
        var h = _a.h, s = _a.s, l = _a.l, a = _a.a;
        var isDark = l < 0.5;
        var isBlue = h > 200 && h < 280;
        var isNeutral = s < 0.12 || (l > 0.8 && isBlue);
        if (isDark) {
            var lx_1 = scale(l, 0, 0.5, 0, MAX_BG_LIGHTNESS);
            if (isNeutral) {
                var hx_1 = pole.h;
                var sx = pole.s;
                return { h: hx_1, s: sx, l: lx_1, a: a };
            }
            return { h: h, s: s, l: lx_1, a: a };
        }
        var lx = scale(l, 0.5, 1, MAX_BG_LIGHTNESS, pole.l);
        if (isNeutral) {
            var hx_2 = pole.h;
            var sx = pole.s;
            return { h: hx_2, s: sx, l: lx, a: a };
        }
        var hx = h;
        var isYellow = h > 60 && h < 180;
        if (isYellow) {
            var isCloserToGreen = h > 120;
            if (isCloserToGreen) {
                hx = scale(h, 120, 180, 135, 180);
            }
            else {
                hx = scale(h, 60, 120, 60, 105);
            }
        }
        if (hx > 40 && hx < 80) {
            lx *= 0.75;
        }
        return { h: hx, s: s, l: lx, a: a };
    }
    function modifyBackgroundColor(rgb, theme) {
        if (theme.mode === 0) {
            return modifyLightSchemeColor(rgb, theme);
        }
        var pole = getBgPole(theme);
        return modifyColorWithCache(rgb, __assign(__assign({}, theme), { mode: 0 }), modifyBgHSL, pole);
    }
    var MIN_FG_LIGHTNESS = 0.55;
    function modifyBlueFgHue(hue) {
        return scale(hue, 205, 245, 205, 220);
    }
    function modifyFgHSL(_a, pole) {
        var h = _a.h, s = _a.s, l = _a.l, a = _a.a;
        var isLight = l > 0.5;
        var isNeutral = l < 0.2 || s < 0.24;
        var isBlue = !isNeutral && h > 205 && h < 245;
        if (isLight) {
            var lx_2 = scale(l, 0.5, 1, MIN_FG_LIGHTNESS, pole.l);
            if (isNeutral) {
                var hx_3 = pole.h;
                var sx = pole.s;
                return { h: hx_3, s: sx, l: lx_2, a: a };
            }
            var hx_4 = h;
            if (isBlue) {
                hx_4 = modifyBlueFgHue(h);
            }
            return { h: hx_4, s: s, l: lx_2, a: a };
        }
        if (isNeutral) {
            var hx_5 = pole.h;
            var sx = pole.s;
            var lx_3 = scale(l, 0, 0.5, pole.l, MIN_FG_LIGHTNESS);
            return { h: hx_5, s: sx, l: lx_3, a: a };
        }
        var hx = h;
        var lx;
        if (isBlue) {
            hx = modifyBlueFgHue(h);
            lx = scale(l, 0, 0.5, pole.l, Math.min(1, MIN_FG_LIGHTNESS + 0.05));
        }
        else {
            lx = scale(l, 0, 0.5, pole.l, MIN_FG_LIGHTNESS);
        }
        return { h: hx, s: s, l: lx, a: a };
    }
    function modifyForegroundColor(rgb, theme) {
        if (theme.mode === 0) {
            return modifyLightSchemeColor(rgb, theme);
        }
        var pole = getFgPole(theme);
        return modifyColorWithCache(rgb, __assign(__assign({}, theme), { mode: 0 }), modifyFgHSL, pole);
    }
    function modifyBorderHSL(_a, poleFg, poleBg) {
        var h = _a.h, s = _a.s, l = _a.l, a = _a.a;
        var isDark = l < 0.5;
        var isNeutral = l < 0.2 || s < 0.24;
        var hx = h;
        var sx = s;
        if (isNeutral) {
            if (isDark) {
                hx = poleFg.h;
                sx = poleFg.s;
            }
            else {
                hx = poleBg.h;
                sx = poleBg.s;
            }
        }
        var lx = scale(l, 0, 1, 0.5, 0.2);
        return { h: hx, s: sx, l: lx, a: a };
    }
    function modifyBorderColor(rgb, theme) {
        if (theme.mode === 0) {
            return modifyLightSchemeColor(rgb, theme);
        }
        var poleFg = getFgPole(theme);
        var poleBg = getBgPole(theme);
        return modifyColorWithCache(rgb, __assign(__assign({}, theme), { mode: 0 }), modifyBorderHSL, poleFg, poleBg);
    }
    function modifyShadowColor(rgb, filter) {
        return modifyBackgroundColor(rgb, filter);
    }
    function modifyGradientColor(rgb, filter) {
        return modifyBackgroundColor(rgb, filter);
    }

    function createTextStyle(config) {
        var lines = [];
        lines.push('*:not(pre, pre *, code, .far, .fa, .glyphicon, [class*="vjs-"], .fab, .fa-github, .fas, .material-icons, .icofont, .typcn, mu, [class*="mu-"], .glyphicon, .icon) {');
        if (config.useFont && config.fontFamily) {
            lines.push("  font-family: ".concat(config.fontFamily, " !important;"));
        }
        if (config.textStroke > 0) {
            lines.push("  -webkit-text-stroke: ".concat(config.textStroke, "px !important;"));
            lines.push("  text-stroke: ".concat(config.textStroke, "px !important;"));
        }
        lines.push('}');
        return lines.join('\\n');
    }

    var FilterMode;
    (function (FilterMode) {
        FilterMode[FilterMode["light"] = 0] = "light";
        FilterMode[FilterMode["dark"] = 1] = "dark";
    })(FilterMode || (FilterMode = {}));
    function getCSSFilterValue(config) {
        var filters = [];
        if (config.mode === FilterMode.dark) {
            filters.push('invert(100%) hue-rotate(180deg)');
        }
        if (config.brightness !== 100) {
            filters.push("brightness(".concat(config.brightness, "%)"));
        }
        if (config.contrast !== 100) {
            filters.push("contrast(".concat(config.contrast, "%)"));
        }
        if (config.grayscale !== 0) {
            filters.push("grayscale(".concat(config.grayscale, "%)"));
        }
        if (config.sepia !== 0) {
            filters.push("sepia(".concat(config.sepia, "%)"));
        }
        if (filters.length === 0) {
            return null;
        }
        return filters.join(' ');
    }

    function toSVGMatrix(matrix) {
        return matrix.slice(0, 4).map(function (m) { return m.map(function (m) { return m.toFixed(3); }).join(' '); }).join(' ');
    }
    function getSVGFilterMatrixValue(config) {
        return toSVGMatrix(createFilterMatrix(config));
    }

    var counter = 0;
    var resolvers$1 = new Map();
    var rejectors = new Map();
    function bgFetch(request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        var id = ++counter;
                        resolvers$1.set(id, resolve);
                        rejectors.set(id, reject);
                        chrome.runtime.sendMessage({ type: MessageType.CS_FETCH, data: request, id: id });
                    })];
            });
        });
    }
    chrome.runtime.onMessage.addListener(function (_a) {
        var type = _a.type, data = _a.data, error = _a.error, id = _a.id;
        if (type === MessageType.BG_FETCH_RESPONSE) {
            var resolve = resolvers$1.get(id);
            var reject = rejectors.get(id);
            resolvers$1.delete(id);
            rejectors.delete(id);
            if (error) {
                reject && reject(error);
            }
            else {
                resolve && resolve(data);
            }
        }
    });

    var AsyncQueue = (function () {
        function AsyncQueue() {
            this.queue = [];
            this.timerId = null;
            this.frameDuration = 1000 / 60;
        }
        AsyncQueue.prototype.addToQueue = function (entry) {
            this.queue.push(entry);
            this.startQueue();
        };
        AsyncQueue.prototype.stopQueue = function () {
            if (this.timerId !== null) {
                cancelAnimationFrame(this.timerId);
                this.timerId = null;
            }
            this.queue = [];
        };
        AsyncQueue.prototype.startQueue = function () {
            var _this = this;
            if (this.timerId) {
                return;
            }
            this.timerId = requestAnimationFrame(function () {
                _this.timerId = null;
                var start = Date.now();
                var cb;
                while ((cb = _this.queue.shift())) {
                    cb();
                    if (Date.now() - start >= _this.frameDuration) {
                        _this.startQueue();
                        break;
                    }
                }
            });
        };
        return AsyncQueue;
    }());

    var imageManager = new AsyncQueue();
    function getImageDetails(url) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var dataURL, error_1, image_1, error_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!url.startsWith('data:')) return [3, 1];
                                    dataURL = url;
                                    return [3, 4];
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    return [4, getImageDataURL(url)];
                                case 2:
                                    dataURL = _a.sent();
                                    return [3, 4];
                                case 3:
                                    error_1 = _a.sent();
                                    reject(error_1);
                                    return [2];
                                case 4:
                                    _a.trys.push([4, 6, , 7]);
                                    return [4, urlToImage(dataURL)];
                                case 5:
                                    image_1 = _a.sent();
                                    imageManager.addToQueue(function () {
                                        resolve(__assign({ src: url, dataURL: dataURL, width: image_1.naturalWidth, height: image_1.naturalHeight }, analyzeImage(image_1)));
                                    });
                                    return [3, 7];
                                case 6:
                                    error_2 = _a.sent();
                                    reject(error_2);
                                    return [3, 7];
                                case 7: return [2];
                            }
                        });
                    }); })];
            });
        });
    }
    function getImageDataURL(url) {
        return __awaiter(this, void 0, void 0, function () {
            var parsedURL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parsedURL = new URL(url);
                        if (!(parsedURL.origin === location.origin)) return [3, 2];
                        return [4, loadAsDataURL(url)];
                    case 1: return [2, _a.sent()];
                    case 2: return [4, bgFetch({ url: url, responseType: 'data-url' })];
                    case 3: return [2, _a.sent()];
                }
            });
        });
    }
    function urlToImage(url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        var image = new Image();
                        image.onload = function () { return resolve(image); };
                        image.onerror = function () { return reject("Unable to load image ".concat(url)); };
                        image.src = url;
                    })];
            });
        });
    }
    var MAX_ANALIZE_PIXELS_COUNT = 32 * 32;
    var canvas;
    var context;
    function createCanvas() {
        var maxWidth = MAX_ANALIZE_PIXELS_COUNT;
        var maxHeight = MAX_ANALIZE_PIXELS_COUNT;
        canvas = document.createElement('canvas');
        canvas.width = maxWidth;
        canvas.height = maxHeight;
        context = canvas.getContext('2d');
        context.imageSmoothingEnabled = false;
    }
    function removeCanvas() {
        canvas = null;
        context = null;
    }
    var MAX_IMAGE_SIZE = 5 * 1024 * 1024;
    function analyzeImage(image) {
        if (!canvas) {
            createCanvas();
        }
        var naturalWidth = image.naturalWidth, naturalHeight = image.naturalHeight;
        if (naturalHeight === 0 || naturalWidth === 0) {
            logWarn("logWarn(Image is empty ".concat(image.currentSrc, ")"));
            return null;
        }
        var size = naturalWidth * naturalHeight * 4;
        if (size > MAX_IMAGE_SIZE) {
            return {
                isDark: false,
                isLight: false,
                isTransparent: false,
                isLarge: false,
                isTooLarge: true,
            };
        }
        var naturalPixelsCount = naturalWidth * naturalHeight;
        var k = Math.min(1, Math.sqrt(MAX_ANALIZE_PIXELS_COUNT / naturalPixelsCount));
        var width = Math.ceil(naturalWidth * k);
        var height = Math.ceil(naturalHeight * k);
        context.clearRect(0, 0, width, height);
        context.drawImage(image, 0, 0, naturalWidth, naturalHeight, 0, 0, width, height);
        var imageData = context.getImageData(0, 0, width, height);
        var d = imageData.data;
        var TRANSPARENT_ALPHA_THRESHOLD = 0.05;
        var DARK_LIGHTNESS_THRESHOLD = 0.4;
        var LIGHT_LIGHTNESS_THRESHOLD = 0.7;
        var transparentPixelsCount = 0;
        var darkPixelsCount = 0;
        var lightPixelsCount = 0;
        var i, x, y;
        var r, g, b, a;
        var l;
        for (y = 0; y < height; y++) {
            for (x = 0; x < width; x++) {
                i = 4 * (y * width + x);
                r = d[i + 0];
                g = d[i + 1];
                b = d[i + 2];
                a = d[i + 3];
                if (a / 255 < TRANSPARENT_ALPHA_THRESHOLD) {
                    transparentPixelsCount++;
                }
                else {
                    l = getSRGBLightness(r, g, b);
                    if (l < DARK_LIGHTNESS_THRESHOLD) {
                        darkPixelsCount++;
                    }
                    if (l > LIGHT_LIGHTNESS_THRESHOLD) {
                        lightPixelsCount++;
                    }
                }
            }
        }
        var totalPixelsCount = width * height;
        var opaquePixelsCount = totalPixelsCount - transparentPixelsCount;
        var DARK_IMAGE_THRESHOLD = 0.7;
        var LIGHT_IMAGE_THRESHOLD = 0.7;
        var TRANSPARENT_IMAGE_THRESHOLD = 0.1;
        var LARGE_IMAGE_PIXELS_COUNT = 800 * 600;
        return {
            isDark: ((darkPixelsCount / opaquePixelsCount) >= DARK_IMAGE_THRESHOLD),
            isLight: ((lightPixelsCount / opaquePixelsCount) >= LIGHT_IMAGE_THRESHOLD),
            isTransparent: ((transparentPixelsCount / totalPixelsCount) >= TRANSPARENT_IMAGE_THRESHOLD),
            isLarge: (naturalPixelsCount >= LARGE_IMAGE_PIXELS_COUNT),
            isTooLarge: false,
        };
    }
    function getFilteredImageDataURL(_a, theme) {
        var dataURL = _a.dataURL, width = _a.width, height = _a.height;
        var matrix = getSVGFilterMatrixValue(theme);
        var svg = [
            "<svg xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\" width=\\"".concat(width, "\\" height=\\"").concat(height, "\\">"),
            '<defs>',
            '<filter id="darkreader-image-filter">',
            "<feColorMatrix type=\\"matrix\\" values=\\"".concat(matrix, "\\" />"),
            '</filter>',
            '</defs>',
            "<image width=\\"".concat(width, "\\" height=\\"").concat(height, "\\" filter=\\"url(#darkreader-image-filter)\\" xlink:href=\\"").concat(dataURL, "\\" />"),
            '</svg>',
        ].join('');
        return "data:image/svg+xml;base64,".concat(btoa(svg));
    }
    function cleanImageProcessingCache() {
        imageManager && imageManager.stopQueue();
        removeCanvas();
    }

    var gradientLength = 'gradient'.length;
    var conicGradient = 'conic-';
    var conicGradientLength = conicGradient.length;
    var radialGradient = 'radial-';
    var linearGradient = 'linear-';
    function parseGradient(value) {
        var result = [];
        var index = 0;
        var startIndex = conicGradient.length;
        var _loop_1 = function () {
            var typeGradient;
            [linearGradient, radialGradient, conicGradient].find(function (possibleType) {
                if (index - possibleType.length >= 0) {
                    var possibleGradient = value.substring(index - possibleType.length, index);
                    if (possibleGradient === possibleType) {
                        if (value.slice(index - possibleType.length - 10, index - possibleType.length - 1) === 'repeating') {
                            typeGradient = "repeating-".concat(possibleType, "gradient");
                            return true;
                        }
                        if (value.slice(index - possibleType.length - 8, index - possibleType.length - 1) === '-webkit') {
                            typeGradient = "-webkit-".concat(possibleType, "gradient");
                            return true;
                        }
                        typeGradient = "".concat(possibleType, "gradient");
                        return true;
                    }
                }
            });
            if (!typeGradient) {
                return "break";
            }
            var _a = getParenthesesRange(value, index + gradientLength), start = _a.start, end = _a.end;
            var match = value.substring(start + 1, end - 1);
            startIndex = end + 1 + conicGradientLength;
            result.push({
                typeGradient: typeGradient,
                match: match,
                offset: typeGradient.length + 2,
                index: index - typeGradient.length + gradientLength,
                hasComma: true,
            });
        };
        while ((index = value.indexOf('gradient', startIndex)) !== -1) {
            var state_1 = _loop_1();
            if (state_1 === "break")
                break;
        }
        if (result.length) {
            result[result.length - 1].hasComma = false;
        }
        return result;
    }

    function getPriority(ruleStyle, property) {
        return Boolean(ruleStyle && ruleStyle.getPropertyPriority(property));
    }
    function getModifiableCSSDeclaration(property, value, rule, variablesStore, ignoreImageSelectors, isCancelled) {
        if (property.startsWith('--')) {
            var modifier = getVariableModifier(variablesStore, property, value, rule, ignoreImageSelectors, isCancelled);
            if (modifier) {
                return { property: property, value: modifier, important: getPriority(rule.style, property), sourceValue: value };
            }
        }
        else if (value.includes('var(')) {
            var modifier = getVariableDependantModifier(variablesStore, property, value);
            if (modifier) {
                return { property: property, value: modifier, important: getPriority(rule.style, property), sourceValue: value };
            }
        }
        else if (property === 'color-scheme') {
            return null;
        }
        else if ((property.includes('color') && property !== '-webkit-print-color-adjust') ||
            property === 'fill' ||
            property === 'stroke' ||
            property === 'stop-color') {
            var modifier = getColorModifier(property, value, rule);
            if (modifier) {
                return { property: property, value: modifier, important: getPriority(rule.style, property), sourceValue: value };
            }
        }
        else if (property === 'background-image' || property === 'list-style-image') {
            var modifier = getBgImageModifier(value, rule, ignoreImageSelectors, isCancelled);
            if (modifier) {
                return { property: property, value: modifier, important: getPriority(rule.style, property), sourceValue: value };
            }
        }
        else if (property.includes('shadow')) {
            var modifier = getShadowModifier(value);
            if (modifier) {
                return { property: property, value: modifier, important: getPriority(rule.style, property), sourceValue: value };
            }
        }
        return null;
    }
    function joinSelectors() {
        var selectors = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selectors[_i] = arguments[_i];
        }
        return selectors.filter(Boolean).join(', ');
    }
    function getModifiedUserAgentStyle(theme, isIFrame, styleSystemControls) {
        var lines = [];
        if (!isIFrame) {
            lines.push('html {');
            lines.push("    background-color: ".concat(modifyBackgroundColor({ r: 255, g: 255, b: 255 }, theme), " !important;"));
            lines.push('}');
        }
        if (isCSSColorSchemePropSupported) {
            lines.push('html {');
            lines.push("    color-scheme: ".concat(theme.mode === 1 ? 'dark' : 'dark light', " !important;"));
            lines.push('}');
        }
        var bgSelectors = joinSelectors(isIFrame ? '' : 'html, body', styleSystemControls ? 'input, textarea, select, button, dialog' : '');
        if (bgSelectors) {
            lines.push("".concat(bgSelectors, " {"));
            lines.push("    background-color: ".concat(modifyBackgroundColor({ r: 255, g: 255, b: 255 }, theme), ";"));
            lines.push('}');
        }
        lines.push("".concat(joinSelectors('html, body', styleSystemControls ? 'input, textarea, select, button' : ''), " {"));
        lines.push("    border-color: ".concat(modifyBorderColor({ r: 76, g: 76, b: 76 }, theme), ";"));
        lines.push("    color: ".concat(modifyForegroundColor({ r: 0, g: 0, b: 0 }, theme), ";"));
        lines.push('}');
        lines.push('a {');
        lines.push("    color: ".concat(modifyForegroundColor({ r: 0, g: 64, b: 255 }, theme), ";"));
        lines.push('}');
        lines.push('table {');
        lines.push("    border-color: ".concat(modifyBorderColor({ r: 128, g: 128, b: 128 }, theme), ";"));
        lines.push('}');
        lines.push('::placeholder {');
        lines.push("    color: ".concat(modifyForegroundColor({ r: 169, g: 169, b: 169 }, theme), ";"));
        lines.push('}');
        lines.push('input:-webkit-autofill,');
        lines.push('textarea:-webkit-autofill,');
        lines.push('select:-webkit-autofill {');
        lines.push("    background-color: ".concat(modifyBackgroundColor({ r: 250, g: 255, b: 189 }, theme), " !important;"));
        lines.push("    color: ".concat(modifyForegroundColor({ r: 0, g: 0, b: 0 }, theme), " !important;"));
        lines.push('}');
        if (theme.scrollbarColor) {
            lines.push(getModifiedScrollbarStyle(theme));
        }
        if (theme.selectionColor) {
            lines.push(getModifiedSelectionStyle(theme));
        }
        return lines.join('\\n');
    }
    function getSelectionColor(theme) {
        var backgroundColorSelection;
        var foregroundColorSelection;
        if (theme.selectionColor === 'auto') {
            backgroundColorSelection = modifyBackgroundColor({ r: 0, g: 96, b: 212 }, __assign(__assign({}, theme), { grayscale: 0 }));
            foregroundColorSelection = modifyForegroundColor({ r: 255, g: 255, b: 255 }, __assign(__assign({}, theme), { grayscale: 0 }));
        }
        else {
            var rgb = parseColorWithCache(theme.selectionColor);
            var hsl = rgbToHSL(rgb);
            backgroundColorSelection = theme.selectionColor;
            if (hsl.l < 0.5) {
                foregroundColorSelection = '#FFF';
            }
            else {
                foregroundColorSelection = '#000';
            }
        }
        return { backgroundColorSelection: backgroundColorSelection, foregroundColorSelection: foregroundColorSelection };
    }
    function getModifiedSelectionStyle(theme) {
        var lines = [];
        var modifiedSelectionColor = getSelectionColor(theme);
        var backgroundColorSelection = modifiedSelectionColor.backgroundColorSelection;
        var foregroundColorSelection = modifiedSelectionColor.foregroundColorSelection;
        ['::selection', '::-moz-selection'].forEach(function (selection) {
            lines.push("".concat(selection, " {"));
            lines.push("    background-color: ".concat(backgroundColorSelection, " !important;"));
            lines.push("    color: ".concat(foregroundColorSelection, " !important;"));
            lines.push('}');
        });
        return lines.join('\\n');
    }
    function getModifiedScrollbarStyle(theme) {
        var lines = [];
        var colorTrack;
        var colorIcons;
        var colorThumb;
        var colorThumbHover;
        var colorThumbActive;
        var colorCorner;
        if (theme.scrollbarColor === 'auto') {
            colorTrack = modifyBackgroundColor({ r: 241, g: 241, b: 241 }, theme);
            colorIcons = modifyForegroundColor({ r: 96, g: 96, b: 96 }, theme);
            colorThumb = modifyBackgroundColor({ r: 176, g: 176, b: 176 }, theme);
            colorThumbHover = modifyBackgroundColor({ r: 144, g: 144, b: 144 }, theme);
            colorThumbActive = modifyBackgroundColor({ r: 96, g: 96, b: 96 }, theme);
            colorCorner = modifyBackgroundColor({ r: 255, g: 255, b: 255 }, theme);
        }
        else {
            var rgb = parseColorWithCache(theme.scrollbarColor);
            var hsl_1 = rgbToHSL(rgb);
            var isLight = hsl_1.l > 0.5;
            var lighten = function (lighter) { return (__assign(__assign({}, hsl_1), { l: clamp(hsl_1.l + lighter, 0, 1) })); };
            var darken = function (darker) { return (__assign(__assign({}, hsl_1), { l: clamp(hsl_1.l - darker, 0, 1) })); };
            colorTrack = hslToString(darken(0.4));
            colorIcons = hslToString(isLight ? darken(0.4) : lighten(0.4));
            colorThumb = hslToString(hsl_1);
            colorThumbHover = hslToString(lighten(0.1));
            colorThumbActive = hslToString(lighten(0.2));
        }
        lines.push('::-webkit-scrollbar {');
        lines.push("    background-color: ".concat(colorTrack, ";"));
        lines.push("    color: ".concat(colorIcons, ";"));
        lines.push('}');
        lines.push('::-webkit-scrollbar-thumb {');
        lines.push("    background-color: ".concat(colorThumb, ";"));
        lines.push('}');
        lines.push('::-webkit-scrollbar-thumb:hover {');
        lines.push("    background-color: ".concat(colorThumbHover, ";"));
        lines.push('}');
        lines.push('::-webkit-scrollbar-thumb:active {');
        lines.push("    background-color: ".concat(colorThumbActive, ";"));
        lines.push('}');
        lines.push('::-webkit-scrollbar-corner {');
        lines.push("    background-color: ".concat(colorCorner, ";"));
        lines.push('}');
        if (isFirefox) {
            lines.push('* {');
            lines.push("    scrollbar-color: ".concat(colorThumb, " ").concat(colorTrack, ";"));
            lines.push('}');
        }
        return lines.join('\\n');
    }
    function getModifiedFallbackStyle(filter, _a) {
        var strict = _a.strict;
        var lines = [];
        var isMicrosoft = ['microsoft.com', 'docs.microsoft.com'].includes(location.hostname);
        lines.push("html, body, ".concat(strict ? "body :not(iframe)".concat(isMicrosoft ? ':not(div[style^="position:absolute;top:0;left:-"]' : '') : 'body > :not(iframe)', " {"));
        lines.push("    background-color: ".concat(modifyBackgroundColor({ r: 255, g: 255, b: 255 }, filter), " !important;"));
        lines.push("    border-color: ".concat(modifyBorderColor({ r: 64, g: 64, b: 64 }, filter), " !important;"));
        lines.push("    color: ".concat(modifyForegroundColor({ r: 0, g: 0, b: 0 }, filter), " !important;"));
        lines.push('}');
        return lines.join('\\n');
    }
    var unparsableColors = new Set([
        'inherit',
        'transparent',
        'initial',
        'currentcolor',
        'none',
        'unset',
    ]);
    function getColorModifier(prop, value, rule) {
        if (unparsableColors.has(value.toLowerCase())) {
            return value;
        }
        var rgb = parseColorWithCache(value);
        if (!rgb) {
            return null;
        }
        if (prop.includes('background')) {
            if ((rule.style.webkitMaskImage && rule.style.webkitMaskImage !== 'none') ||
                (rule.style.webkitMask && !rule.style.webkitMask.startsWith('none')) ||
                (rule.style.mask && rule.style.mask !== 'none') ||
                (rule.style.getPropertyValue('mask-image') && rule.style.getPropertyValue('mask-image') !== 'none')) {
                return function (filter) { return modifyForegroundColor(rgb, filter); };
            }
            return function (filter) { return modifyBackgroundColor(rgb, filter); };
        }
        if (prop.includes('border') || prop.includes('outline')) {
            return function (filter) { return modifyBorderColor(rgb, filter); };
        }
        return function (filter) { return modifyForegroundColor(rgb, filter); };
    }
    var imageDetailsCache = new Map();
    var awaitingForImageLoading = new Map();
    function shouldIgnoreImage(selectorText, selectors) {
        if (!selectorText || selectors.length === 0) {
            return false;
        }
        if (selectors.some(function (s) { return s === '*'; })) {
            return true;
        }
        var ruleSelectors = selectorText.split(/,\\s*/g);
        var _loop_1 = function (i) {
            var ignoredSelector = selectors[i];
            if (ruleSelectors.some(function (s) { return s === ignoredSelector; })) {
                return { value: true };
            }
        };
        for (var i = 0; i < selectors.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return false;
    }
    function getBgImageModifier(value, rule, ignoreImageSelectors, isCancelled) {
        var _this = this;
        try {
            var gradients = parseGradient(value);
            var urls = getMatches(cssURLRegex, value);
            if (urls.length === 0 && gradients.length === 0) {
                return value;
            }
            var getIndices = function (matches) {
                var index = 0;
                return matches.map(function (match) {
                    var valueIndex = value.indexOf(match, index);
                    index = valueIndex + match.length;
                    return { match: match, index: valueIndex };
                });
            };
            var matches_1 = gradients.map(function (i) { return (__assign({ type: 'gradient' }, i)); })
                .concat(getIndices(urls).map(function (i) { return (__assign({ type: 'url', offset: 0 }, i)); }))
                .sort(function (a, b) { return a.index > b.index ? 1 : -1; });
            var getGradientModifier_1 = function (gradient) {
                var typeGradient = gradient.typeGradient, match = gradient.match, hasComma = gradient.hasComma;
                var partsRegex = /([^\\(\\),]+(\\([^\\(\\)]*(\\([^\\(\\)]*\\)*[^\\(\\)]*)?\\))?([^\\(\\), ]|( (?!calc)))*),?/g;
                var colorStopRegex = /^(from|color-stop|to)\\(([^\\(\\)]*?,\\s*)?(.*?)\\)$/;
                var parts = getMatches(partsRegex, match, 1).map(function (part) {
                    part = part.trim();
                    var rgb = parseColorWithCache(part);
                    if (rgb) {
                        return function (filter) { return modifyGradientColor(rgb, filter); };
                    }
                    var space = part.lastIndexOf(' ');
                    rgb = parseColorWithCache(part.substring(0, space));
                    if (rgb) {
                        return function (filter) { return "".concat(modifyGradientColor(rgb, filter), " ").concat(part.substring(space + 1)); };
                    }
                    var colorStopMatch = part.match(colorStopRegex);
                    if (colorStopMatch) {
                        rgb = parseColorWithCache(colorStopMatch[3]);
                        if (rgb) {
                            return function (filter) { return "".concat(colorStopMatch[1], "(").concat(colorStopMatch[2] ? "".concat(colorStopMatch[2], ", ") : '').concat(modifyGradientColor(rgb, filter), ")"); };
                        }
                    }
                    return function () { return part; };
                });
                return function (filter) {
                    return "".concat(typeGradient, "(").concat(parts.map(function (modify) { return modify(filter); }).join(', '), ")").concat(hasComma ? ', ' : '');
                };
            };
            var getURLModifier_1 = function (urlValue) {
                var _a;
                if (shouldIgnoreImage(rule.selectorText, ignoreImageSelectors)) {
                    return null;
                }
                var url = getCSSURLValue(urlValue);
                var isURLEmpty = url.length === 0;
                var parentStyleSheet = rule.parentStyleSheet;
                var baseURL = (parentStyleSheet && parentStyleSheet.href) ?
                    getCSSBaseBath(parentStyleSheet.href) :
                    ((_a = parentStyleSheet.ownerNode) === null || _a === void 0 ? void 0 : _a.baseURI) || location.origin;
                url = getAbsoluteURL(baseURL, url);
                var absoluteValue = "url(\\"".concat(url, "\\")");
                return function (filter) { return __awaiter(_this, void 0, void 0, function () {
                    var imageDetails, awaiters_1, err_1, bgImageValue;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (isURLEmpty) {
                                    return [2, "url('')"];
                                }
                                if (!imageDetailsCache.has(url)) return [3, 1];
                                imageDetails = imageDetailsCache.get(url);
                                return [3, 7];
                            case 1:
                                _a.trys.push([1, 6, , 7]);
                                if (!awaitingForImageLoading.has(url)) return [3, 3];
                                awaiters_1 = awaitingForImageLoading.get(url);
                                return [4, new Promise(function (resolve) { return awaiters_1.push(resolve); })];
                            case 2:
                                imageDetails = _a.sent();
                                if (!imageDetails) {
                                    return [2, null];
                                }
                                return [3, 5];
                            case 3:
                                awaitingForImageLoading.set(url, []);
                                return [4, getImageDetails(url)];
                            case 4:
                                imageDetails = _a.sent();
                                imageDetailsCache.set(url, imageDetails);
                                awaitingForImageLoading.get(url).forEach(function (resolve) { return resolve(imageDetails); });
                                awaitingForImageLoading.delete(url);
                                _a.label = 5;
                            case 5:
                                if (isCancelled()) {
                                    return [2, null];
                                }
                                return [3, 7];
                            case 6:
                                err_1 = _a.sent();
                                logWarn(err_1);
                                if (awaitingForImageLoading.has(url)) {
                                    awaitingForImageLoading.get(url).forEach(function (resolve) { return resolve(null); });
                                    awaitingForImageLoading.delete(url);
                                }
                                return [2, absoluteValue];
                            case 7:
                                bgImageValue = getBgImageValue_1(imageDetails, filter) || absoluteValue;
                                return [2, bgImageValue];
                        }
                    });
                }); };
            };
            var getBgImageValue_1 = function (imageDetails, filter) {
                var isDark = imageDetails.isDark, isLight = imageDetails.isLight, isTransparent = imageDetails.isTransparent, isLarge = imageDetails.isLarge, isTooLarge = imageDetails.isTooLarge, width = imageDetails.width;
                var result;
                if (isTooLarge) {
                    result = "url(\\"".concat(imageDetails.src, "\\")");
                }
                else if (isDark && isTransparent && filter.mode === 1 && !isLarge && width > 2) {
                    logInfo("Inverting dark image ".concat(imageDetails.src));
                    var inverted = getFilteredImageDataURL(imageDetails, __assign(__assign({}, filter), { sepia: clamp(filter.sepia + 10, 0, 100) }));
                    result = "url(\\"".concat(inverted, "\\")");
                }
                else if (isLight && !isTransparent && filter.mode === 1) {
                    if (isLarge) {
                        result = 'none';
                    }
                    else {
                        logInfo("Dimming light image ".concat(imageDetails.src));
                        var dimmed = getFilteredImageDataURL(imageDetails, filter);
                        result = "url(\\"".concat(dimmed, "\\")");
                    }
                }
                else if (filter.mode === 0 && isLight && !isLarge) {
                    logInfo("Applying filter to image ".concat(imageDetails.src));
                    var filtered = getFilteredImageDataURL(imageDetails, __assign(__assign({}, filter), { brightness: clamp(filter.brightness - 10, 5, 200), sepia: clamp(filter.sepia + 10, 0, 100) }));
                    result = "url(\\"".concat(filtered, "\\")");
                }
                else {
                    result = null;
                }
                return result;
            };
            var modifiers_1 = [];
            var matchIndex_1 = 0;
            var prevHasComma_1 = false;
            matches_1.forEach(function (_a, i) {
                var type = _a.type, match = _a.match, index = _a.index, typeGradient = _a.typeGradient, hasComma = _a.hasComma, offset = _a.offset;
                var matchStart = index;
                var prefixStart = matchIndex_1;
                var matchEnd = matchStart + match.length + offset;
                matchIndex_1 = matchEnd;
                if (prefixStart !== matchStart) {
                    if (prevHasComma_1) {
                        modifiers_1.push(function () {
                            var betweenValue = value.substring(prefixStart, matchStart);
                            if (betweenValue[0] === ',') {
                                betweenValue = betweenValue.substring(1);
                            }
                            return betweenValue;
                        });
                    }
                    else {
                        modifiers_1.push(function () { return value.substring(prefixStart, matchStart); });
                    }
                }
                prevHasComma_1 = hasComma || false;
                if (type === 'url') {
                    modifiers_1.push(getURLModifier_1(match));
                }
                else if (type === 'gradient') {
                    modifiers_1.push(getGradientModifier_1({ match: match, index: index, typeGradient: typeGradient, hasComma: hasComma, offset: offset }));
                }
                if (i === matches_1.length - 1) {
                    modifiers_1.push(function () { return value.substring(matchEnd); });
                }
            });
            return function (filter) {
                var results = modifiers_1.filter(Boolean).map(function (modify) { return modify(filter); });
                if (results.some(function (r) { return r instanceof Promise; })) {
                    return Promise.all(results).then(function (asyncResults) {
                        return asyncResults.filter(Boolean).join('');
                    });
                }
                var combinedResult = results.join('');
                if (combinedResult.endsWith(', initial')) {
                    return combinedResult.slice(0, -9);
                }
                return combinedResult;
            };
        }
        catch (err) {
            return null;
        }
    }
    function getShadowModifierWithInfo(value) {
        try {
            var index_1 = 0;
            var colorMatches_1 = getMatches(/(^|\\s)(?!calc)([a-z]+\\(.+?\\)|#[0-9a-f]+|[a-z]+)(.*?(inset|outset)?($|,))/ig, value, 2);
            var notParsed_1 = 0;
            var modifiers_2 = colorMatches_1.map(function (match, i) {
                var prefixIndex = index_1;
                var matchIndex = value.indexOf(match, index_1);
                var matchEnd = matchIndex + match.length;
                index_1 = matchEnd;
                var rgb = parseColorWithCache(match);
                if (!rgb) {
                    notParsed_1++;
                    return function () { return value.substring(prefixIndex, matchEnd); };
                }
                return function (filter) { return "".concat(value.substring(prefixIndex, matchIndex)).concat(modifyShadowColor(rgb, filter)).concat(i === colorMatches_1.length - 1 ? value.substring(matchEnd) : ''); };
            });
            return function (filter) {
                var modified = modifiers_2.map(function (modify) { return modify(filter); }).join('');
                return {
                    matchesLength: colorMatches_1.length,
                    unparseableMatchesLength: notParsed_1,
                    result: modified,
                };
            };
        }
        catch (err) {
            return null;
        }
    }
    function getShadowModifier(value) {
        var shadowModifier = getShadowModifierWithInfo(value);
        if (!shadowModifier) {
            return null;
        }
        return function (theme) { return shadowModifier(theme).result; };
    }
    function getVariableModifier(variablesStore, prop, value, rule, ignoredImgSelectors, isCancelled) {
        return variablesStore.getModifierForVariable({
            varName: prop,
            sourceValue: value,
            rule: rule,
            ignoredImgSelectors: ignoredImgSelectors,
            isCancelled: isCancelled,
        });
    }
    function getVariableDependantModifier(variablesStore, prop, value) {
        return variablesStore.getModifierForVarDependant(prop, value);
    }
    function cleanModificationCache() {
        clearColorModificationCache();
        imageDetailsCache.clear();
        cleanImageProcessingCache();
        awaitingForImageLoading.clear();
    }

    var VAR_TYPE_BGCOLOR = 1 << 0;
    var VAR_TYPE_TEXTCOLOR = 1 << 1;
    var VAR_TYPE_BORDERCOLOR = 1 << 2;
    var VAR_TYPE_BGIMG = 1 << 3;
    var VariablesStore = (function () {
        function VariablesStore() {
            this.varTypes = new Map();
            this.rulesQueue = [];
            this.definedVars = new Set();
            this.varRefs = new Map();
            this.unknownColorVars = new Set();
            this.unknownBgVars = new Set();
            this.undefinedVars = new Set();
            this.initialVarTypes = new Map();
            this.changedTypeVars = new Set();
            this.typeChangeSubscriptions = new Map();
            this.unstableVarValues = new Map();
        }
        VariablesStore.prototype.clear = function () {
            this.varTypes.clear();
            this.rulesQueue.splice(0);
            this.definedVars.clear();
            this.varRefs.clear();
            this.unknownColorVars.clear();
            this.unknownBgVars.clear();
            this.undefinedVars.clear();
            this.initialVarTypes.clear();
            this.changedTypeVars.clear();
            this.typeChangeSubscriptions.clear();
            this.unstableVarValues.clear();
        };
        VariablesStore.prototype.isVarType = function (varName, typeNum) {
            return (this.varTypes.has(varName) &&
                (this.varTypes.get(varName) & typeNum) > 0);
        };
        VariablesStore.prototype.addRulesForMatching = function (rules) {
            this.rulesQueue.push(rules);
        };
        VariablesStore.prototype.matchVariablesAndDependants = function () {
            var _this = this;
            this.changedTypeVars.clear();
            this.initialVarTypes = new Map(this.varTypes);
            this.collectRootVariables();
            this.collectVariablesAndVarDep(this.rulesQueue);
            this.rulesQueue.splice(0);
            this.collectRootVarDependants();
            this.varRefs.forEach(function (refs, v) {
                refs.forEach(function (r) {
                    if (_this.varTypes.has(v)) {
                        _this.resolveVariableType(r, _this.varTypes.get(v));
                    }
                });
            });
            this.unknownColorVars.forEach(function (v) {
                if (_this.unknownBgVars.has(v)) {
                    _this.unknownColorVars.delete(v);
                    _this.unknownBgVars.delete(v);
                    _this.resolveVariableType(v, VAR_TYPE_BGCOLOR);
                }
                else if (_this.isVarType(v, VAR_TYPE_BGCOLOR | VAR_TYPE_TEXTCOLOR | VAR_TYPE_BORDERCOLOR)) {
                    _this.unknownColorVars.delete(v);
                }
                else {
                    _this.undefinedVars.add(v);
                }
            });
            this.unknownBgVars.forEach(function (v) {
                var hasColor = _this.findVarRef(v, function (ref) {
                    return (_this.unknownColorVars.has(ref) ||
                        _this.isVarType(ref, VAR_TYPE_TEXTCOLOR | VAR_TYPE_BORDERCOLOR));
                }) != null;
                if (hasColor) {
                    _this.itarateVarRefs(v, function (ref) {
                        _this.resolveVariableType(ref, VAR_TYPE_BGCOLOR);
                    });
                }
                else if (_this.isVarType(v, VAR_TYPE_BGCOLOR | VAR_TYPE_BGIMG)) {
                    _this.unknownBgVars.delete(v);
                }
                else {
                    _this.undefinedVars.add(v);
                }
            });
            this.changedTypeVars.forEach(function (varName) {
                if (_this.typeChangeSubscriptions.has(varName)) {
                    _this.typeChangeSubscriptions
                        .get(varName)
                        .forEach(function (callback) {
                        callback();
                    });
                }
            });
            this.changedTypeVars.clear();
        };
        VariablesStore.prototype.getModifierForVariable = function (options) {
            var _this = this;
            return function (theme) {
                var varName = options.varName, sourceValue = options.sourceValue, rule = options.rule, ignoredImgSelectors = options.ignoredImgSelectors, isCancelled = options.isCancelled;
                var getDeclarations = function () {
                    var declarations = [];
                    var addModifiedValue = function (typeNum, varNameWrapper, colorModifier) {
                        if (!_this.isVarType(varName, typeNum)) {
                            return;
                        }
                        var property = varNameWrapper(varName);
                        var modifiedValue;
                        if (isVarDependant(sourceValue)) {
                            if (isConstructedColorVar(sourceValue)) {
                                var value = insertVarValues(sourceValue, _this.unstableVarValues);
                                if (!value) {
                                    value = typeNum === VAR_TYPE_BGCOLOR ? '#ffffff' : '#000000';
                                }
                                modifiedValue = colorModifier(value, theme);
                            }
                            else {
                                modifiedValue = replaceCSSVariablesNames(sourceValue, function (v) { return varNameWrapper(v); }, function (fallback) { return colorModifier(fallback, theme); });
                            }
                        }
                        else {
                            modifiedValue = colorModifier(sourceValue, theme);
                        }
                        declarations.push({
                            property: property,
                            value: modifiedValue,
                        });
                    };
                    addModifiedValue(VAR_TYPE_BGCOLOR, wrapBgColorVariableName, tryModifyBgColor);
                    addModifiedValue(VAR_TYPE_TEXTCOLOR, wrapTextColorVariableName, tryModifyTextColor);
                    addModifiedValue(VAR_TYPE_BORDERCOLOR, wrapBorderColorVariableName, tryModifyBorderColor);
                    if (_this.isVarType(varName, VAR_TYPE_BGIMG)) {
                        var property = wrapBgImgVariableName(varName);
                        var modifiedValue = sourceValue;
                        if (isVarDependant(sourceValue)) {
                            modifiedValue = replaceCSSVariablesNames(sourceValue, function (v) { return wrapBgColorVariableName(v); }, function (fallback) { return tryModifyBgColor(fallback, theme); });
                        }
                        var bgModifier = getBgImageModifier(modifiedValue, rule, ignoredImgSelectors, isCancelled);
                        modifiedValue = typeof bgModifier === 'function' ? bgModifier(theme) : bgModifier;
                        declarations.push({
                            property: property,
                            value: modifiedValue,
                        });
                    }
                    return declarations;
                };
                var callbacks = new Set();
                var addListener = function (onTypeChange) {
                    var callback = function () {
                        var decs = getDeclarations();
                        onTypeChange(decs);
                    };
                    callbacks.add(callback);
                    _this.subscribeForVarTypeChange(varName, callback);
                };
                var removeListeners = function () {
                    callbacks.forEach(function (callback) {
                        _this.unsubscribeFromVariableTypeChanges(varName, callback);
                    });
                };
                return {
                    declarations: getDeclarations(),
                    onTypeChange: { addListener: addListener, removeListeners: removeListeners },
                };
            };
        };
        VariablesStore.prototype.getModifierForVarDependant = function (property, sourceValue) {
            var _this = this;
            if (sourceValue.match(/^\\s*(rgb|hsl)a?\\(/)) {
                var isBg_1 = property.startsWith('background');
                var isText_1 = (property === 'color' || property === 'caret-color');
                return function (theme) {
                    var value = insertVarValues(sourceValue, _this.unstableVarValues);
                    if (!value) {
                        value = isBg_1 ? '#ffffff' : '#000000';
                    }
                    var modifier = isBg_1 ? tryModifyBgColor : isText_1 ? tryModifyTextColor : tryModifyBorderColor;
                    return modifier(value, theme);
                };
            }
            if (property === 'background-color') {
                return function (theme) {
                    return replaceCSSVariablesNames(sourceValue, function (v) { return wrapBgColorVariableName(v); }, function (fallback) { return tryModifyBgColor(fallback, theme); });
                };
            }
            if (property === 'color' || property === 'caret-color') {
                return function (theme) {
                    return replaceCSSVariablesNames(sourceValue, function (v) { return wrapTextColorVariableName(v); }, function (fallback) { return tryModifyTextColor(fallback, theme); });
                };
            }
            if (property === 'background' || property === 'background-image' || property === 'box-shadow') {
                return function (theme) {
                    var unknownVars = new Set();
                    var modify = function () {
                        var variableReplaced = replaceCSSVariablesNames(sourceValue, function (v) {
                            if (_this.isVarType(v, VAR_TYPE_BGCOLOR)) {
                                return wrapBgColorVariableName(v);
                            }
                            if (_this.isVarType(v, VAR_TYPE_BGIMG)) {
                                return wrapBgImgVariableName(v);
                            }
                            unknownVars.add(v);
                            return v;
                        }, function (fallback) { return tryModifyBgColor(fallback, theme); });
                        if (property === 'box-shadow') {
                            var shadowModifier = getShadowModifierWithInfo(variableReplaced);
                            var modifiedShadow = shadowModifier(theme);
                            if (modifiedShadow.unparseableMatchesLength !== modifiedShadow.matchesLength) {
                                return modifiedShadow.result;
                            }
                        }
                        return variableReplaced;
                    };
                    var modified = modify();
                    if (unknownVars.size > 0) {
                        return new Promise(function (resolve) {
                            var firstUnknownVar = unknownVars.values().next().value;
                            var callback = function () {
                                _this.unsubscribeFromVariableTypeChanges(firstUnknownVar, callback);
                                var newValue = modify();
                                resolve(newValue);
                            };
                            _this.subscribeForVarTypeChange(firstUnknownVar, callback);
                        });
                    }
                    return modified;
                };
            }
            if (property.startsWith('border') || property.startsWith('outline')) {
                return function (theme) {
                    return replaceCSSVariablesNames(sourceValue, function (v) { return wrapBorderColorVariableName(v); }, function (fallback) { return tryModifyBorderColor(fallback, theme); });
                };
            }
            return null;
        };
        VariablesStore.prototype.subscribeForVarTypeChange = function (varName, callback) {
            if (!this.typeChangeSubscriptions.has(varName)) {
                this.typeChangeSubscriptions.set(varName, new Set());
            }
            var rootStore = this.typeChangeSubscriptions.get(varName);
            if (!rootStore.has(callback)) {
                rootStore.add(callback);
            }
        };
        VariablesStore.prototype.unsubscribeFromVariableTypeChanges = function (varName, callback) {
            if (this.typeChangeSubscriptions.has(varName)) {
                this.typeChangeSubscriptions.get(varName).delete(callback);
            }
        };
        VariablesStore.prototype.collectVariablesAndVarDep = function (ruleList) {
            var _this = this;
            ruleList.forEach(function (rules) {
                iterateCSSRules(rules, function (rule) {
                    rule.style && iterateCSSDeclarations(rule.style, function (property, value) {
                        if (isVariable(property)) {
                            _this.inspectVariable(property, value);
                        }
                        if (isVarDependant(value)) {
                            _this.inspectVarDependant(property, value);
                        }
                    });
                });
            });
        };
        VariablesStore.prototype.collectRootVariables = function () {
            var _this = this;
            iterateCSSDeclarations(document.documentElement.style, function (property, value) {
                if (isVariable(property)) {
                    _this.inspectVariable(property, value);
                }
            });
        };
        VariablesStore.prototype.inspectVariable = function (varName, value) {
            this.unstableVarValues.set(varName, value);
            if (isVarDependant(value) && isConstructedColorVar(value)) {
                this.unknownColorVars.add(varName);
                this.definedVars.add(varName);
            }
            if (this.definedVars.has(varName)) {
                return;
            }
            this.definedVars.add(varName);
            var color = parseColorWithCache(value);
            if (color) {
                this.unknownColorVars.add(varName);
            }
            else if (value.includes('url(') ||
                value.includes('linear-gradient(') ||
                value.includes('radial-gradient(')) {
                this.resolveVariableType(varName, VAR_TYPE_BGIMG);
            }
        };
        VariablesStore.prototype.resolveVariableType = function (varName, typeNum) {
            var initialType = this.initialVarTypes.get(varName) || 0;
            var currentType = this.varTypes.get(varName) || 0;
            var newType = currentType | typeNum;
            this.varTypes.set(varName, newType);
            if (newType !== initialType || this.undefinedVars.has(varName)) {
                this.changedTypeVars.add(varName);
                this.undefinedVars.delete(varName);
            }
            this.unknownColorVars.delete(varName);
            this.unknownBgVars.delete(varName);
        };
        VariablesStore.prototype.collectRootVarDependants = function () {
            var _this = this;
            iterateCSSDeclarations(document.documentElement.style, function (property, value) {
                if (isVarDependant(value)) {
                    _this.inspectVarDependant(property, value);
                }
            });
        };
        VariablesStore.prototype.inspectVarDependant = function (property, value) {
            var _this = this;
            if (isVariable(property)) {
                this.iterateVarDeps(value, function (ref) {
                    if (!_this.varRefs.has(property)) {
                        _this.varRefs.set(property, new Set());
                    }
                    _this.varRefs.get(property).add(ref);
                });
            }
            else if (property === 'background-color' || property === 'box-shadow') {
                this.iterateVarDeps(value, function (v) { return _this.resolveVariableType(v, VAR_TYPE_BGCOLOR); });
            }
            else if (property === 'color' || property === 'caret-color') {
                this.iterateVarDeps(value, function (v) { return _this.resolveVariableType(v, VAR_TYPE_TEXTCOLOR); });
            }
            else if (property.startsWith('border') || property.startsWith('outline')) {
                this.iterateVarDeps(value, function (v) { return _this.resolveVariableType(v, VAR_TYPE_BORDERCOLOR); });
            }
            else if (property === 'background' || property === 'background-image') {
                this.iterateVarDeps(value, function (v) {
                    if (_this.isVarType(v, VAR_TYPE_BGCOLOR | VAR_TYPE_BGIMG)) {
                        return;
                    }
                    var isBgColor = _this.findVarRef(v, function (ref) {
                        return (_this.unknownColorVars.has(ref) ||
                            _this.isVarType(ref, VAR_TYPE_TEXTCOLOR | VAR_TYPE_BORDERCOLOR));
                    }) != null;
                    _this.itarateVarRefs(v, function (ref) {
                        if (isBgColor) {
                            _this.resolveVariableType(ref, VAR_TYPE_BGCOLOR);
                        }
                        else {
                            _this.unknownBgVars.add(ref);
                        }
                    });
                });
            }
        };
        VariablesStore.prototype.iterateVarDeps = function (value, iterator) {
            var varDeps = new Set();
            iterateVarDependencies(value, function (v) { return varDeps.add(v); });
            varDeps.forEach(function (v) { return iterator(v); });
        };
        VariablesStore.prototype.findVarRef = function (varName, iterator, stack) {
            var e_1, _a;
            if (stack === void 0) { stack = new Set(); }
            if (stack.has(varName)) {
                return null;
            }
            stack.add(varName);
            var result = iterator(varName);
            if (result) {
                return varName;
            }
            var refs = this.varRefs.get(varName);
            if (!refs || refs.size === 0) {
                return null;
            }
            try {
                for (var refs_1 = __values(refs), refs_1_1 = refs_1.next(); !refs_1_1.done; refs_1_1 = refs_1.next()) {
                    var ref = refs_1_1.value;
                    var found = this.findVarRef(ref, iterator, stack);
                    if (found) {
                        return found;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (refs_1_1 && !refs_1_1.done && (_a = refs_1.return)) _a.call(refs_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return null;
        };
        VariablesStore.prototype.itarateVarRefs = function (varName, iterator) {
            this.findVarRef(varName, function (ref) {
                iterator(ref);
                return false;
            });
        };
        VariablesStore.prototype.setOnRootVariableChange = function (callback) {
            this.onRootVariableDefined = callback;
        };
        VariablesStore.prototype.putRootVars = function (styleElement, theme) {
            var e_2, _a;
            var _this = this;
            var sheet = styleElement.sheet;
            if (sheet.cssRules.length > 0) {
                sheet.deleteRule(0);
            }
            var declarations = new Map();
            iterateCSSDeclarations(document.documentElement.style, function (property, value) {
                if (isVariable(property)) {
                    if (_this.isVarType(property, VAR_TYPE_BGCOLOR)) {
                        declarations.set(wrapBgColorVariableName(property), tryModifyBgColor(value, theme));
                    }
                    if (_this.isVarType(property, VAR_TYPE_TEXTCOLOR)) {
                        declarations.set(wrapTextColorVariableName(property), tryModifyTextColor(value, theme));
                    }
                    if (_this.isVarType(property, VAR_TYPE_BORDERCOLOR)) {
                        declarations.set(wrapBorderColorVariableName(property), tryModifyBorderColor(value, theme));
                    }
                    _this.subscribeForVarTypeChange(property, _this.onRootVariableDefined);
                }
            });
            var cssLines = [];
            cssLines.push(':root {');
            try {
                for (var declarations_1 = __values(declarations), declarations_1_1 = declarations_1.next(); !declarations_1_1.done; declarations_1_1 = declarations_1.next()) {
                    var _b = __read(declarations_1_1.value, 2), property = _b[0], value = _b[1];
                    cssLines.push("    ".concat(property, ": ").concat(value, ";"));
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (declarations_1_1 && !declarations_1_1.done && (_a = declarations_1.return)) _a.call(declarations_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            cssLines.push('}');
            var cssText = cssLines.join('\\n');
            sheet.insertRule(cssText);
        };
        return VariablesStore;
    }());
    var variablesStore = new VariablesStore();
    function getVariableRange(input, searchStart) {
        if (searchStart === void 0) { searchStart = 0; }
        var start = input.indexOf('var(', searchStart);
        if (start >= 0) {
            var range = getParenthesesRange(input, start + 3);
            if (range) {
                return { start: start, end: range.end };
            }
            return null;
        }
    }
    function getVariablesMatches(input) {
        var ranges = [];
        var i = 0;
        var range;
        while ((range = getVariableRange(input, i))) {
            var start = range.start, end = range.end;
            ranges.push({ start: start, end: end, value: input.substring(start, end) });
            i = range.end + 1;
        }
        return ranges;
    }
    function replaceVariablesMatches(input, replacer) {
        var matches = getVariablesMatches(input);
        var matchesCount = matches.length;
        if (matchesCount === 0) {
            return input;
        }
        var inputLength = input.length;
        var replacements = matches.map(function (m) { return replacer(m.value); });
        var parts = [];
        parts.push(input.substring(0, matches[0].start));
        for (var i = 0; i < matchesCount; i++) {
            parts.push(replacements[i]);
            var start = matches[i].end;
            var end = i < matchesCount - 1 ? matches[i + 1].start : inputLength;
            parts.push(input.substring(start, end));
        }
        return parts.join('');
    }
    function getVariableNameAndFallback(match) {
        var commaIndex = match.indexOf(',');
        var name;
        var fallback;
        if (commaIndex >= 0) {
            name = match.substring(4, commaIndex).trim();
            fallback = match.substring(commaIndex + 1, match.length - 1).trim();
        }
        else {
            name = match.substring(4, match.length - 1).trim();
            fallback = '';
        }
        return { name: name, fallback: fallback };
    }
    function replaceCSSVariablesNames(value, nameReplacer, fallbackReplacer) {
        var matchReplacer = function (match) {
            var _a = getVariableNameAndFallback(match), name = _a.name, fallback = _a.fallback;
            var newName = nameReplacer(name);
            if (!fallback) {
                return "var(".concat(newName, ")");
            }
            var newFallback;
            if (isVarDependant(fallback)) {
                newFallback = replaceCSSVariablesNames(fallback, nameReplacer, fallbackReplacer);
            }
            else if (fallbackReplacer) {
                newFallback = fallbackReplacer(fallback);
            }
            else {
                newFallback = fallback;
            }
            return "var(".concat(newName, ", ").concat(newFallback, ")");
        };
        return replaceVariablesMatches(value, matchReplacer);
    }
    function iterateVarDependencies(value, iterator) {
        replaceCSSVariablesNames(value, function (varName) {
            iterator(varName);
            return varName;
        });
    }
    function wrapBgColorVariableName(name) {
        return "--darkreader-bg".concat(name);
    }
    function wrapTextColorVariableName(name) {
        return "--darkreader-text".concat(name);
    }
    function wrapBorderColorVariableName(name) {
        return "--darkreader-border".concat(name);
    }
    function wrapBgImgVariableName(name) {
        return "--darkreader-bgimg".concat(name);
    }
    function isVariable(property) {
        return property.startsWith('--');
    }
    function isVarDependant(value) {
        return value.includes('var(');
    }
    function isConstructedColorVar(value) {
        return value.match(/^\\s*(rgb|hsl)a?\\(/);
    }
    var rawValueRegex = /^\\d{1,3}, ?\\d{1,3}, ?\\d{1,3}$/;
    function parseRawValue(color) {
        if (rawValueRegex.test(color)) {
            var splitted = color.split(',');
            var resultInRGB_1 = 'rgb(';
            splitted.forEach(function (number) {
                resultInRGB_1 += "".concat(number.trim(), ", ");
            });
            resultInRGB_1 = resultInRGB_1.substring(0, resultInRGB_1.length - 2);
            resultInRGB_1 += ')';
            return { isRaw: true, color: resultInRGB_1 };
        }
        return { isRaw: false, color: color };
    }
    function handleRawValue(color, theme, modifyFunction) {
        var _a = parseRawValue(color), isRaw = _a.isRaw, newColor = _a.color;
        var rgb = parseColorWithCache(newColor);
        if (rgb) {
            var outputColor = modifyFunction(rgb, theme);
            if (isRaw) {
                var outputInRGB = parseColorWithCache(outputColor);
                return outputInRGB ? "".concat(outputInRGB.r, ", ").concat(outputInRGB.g, ", ").concat(outputInRGB.b) : outputColor;
            }
            return outputColor;
        }
        return newColor;
    }
    function tryModifyBgColor(color, theme) {
        return handleRawValue(color, theme, modifyBackgroundColor);
    }
    function tryModifyTextColor(color, theme) {
        return handleRawValue(color, theme, modifyForegroundColor);
    }
    function tryModifyBorderColor(color, theme) {
        return handleRawValue(color, theme, modifyBorderColor);
    }
    function insertVarValues(source, varValues, stack) {
        if (stack === void 0) { stack = new Set(); }
        var containsUnresolvedVar = false;
        var matchReplacer = function (match) {
            var _a = getVariableNameAndFallback(match), name = _a.name, fallback = _a.fallback;
            if (stack.has(name)) {
                containsUnresolvedVar = true;
                return null;
            }
            stack.add(name);
            var varValue = varValues.get(name) || fallback;
            var inserted = null;
            if (varValue) {
                if (isVarDependant(varValue)) {
                    inserted = insertVarValues(varValue, varValues, stack);
                }
                else {
                    inserted = varValue;
                }
            }
            if (!inserted) {
                containsUnresolvedVar = true;
                return null;
            }
            return inserted;
        };
        var replaced = replaceVariablesMatches(source, matchReplacer);
        if (containsUnresolvedVar) {
            return null;
        }
        return replaced;
    }

    var overrides = {
        'background-color': {
            customProp: '--darkreader-inline-bgcolor',
            cssProp: 'background-color',
            dataAttr: 'data-darkreader-inline-bgcolor',
        },
        'background-image': {
            customProp: '--darkreader-inline-bgimage',
            cssProp: 'background-image',
            dataAttr: 'data-darkreader-inline-bgimage',
        },
        'border-color': {
            customProp: '--darkreader-inline-border',
            cssProp: 'border-color',
            dataAttr: 'data-darkreader-inline-border',
        },
        'border-bottom-color': {
            customProp: '--darkreader-inline-border-bottom',
            cssProp: 'border-bottom-color',
            dataAttr: 'data-darkreader-inline-border-bottom',
        },
        'border-left-color': {
            customProp: '--darkreader-inline-border-left',
            cssProp: 'border-left-color',
            dataAttr: 'data-darkreader-inline-border-left',
        },
        'border-right-color': {
            customProp: '--darkreader-inline-border-right',
            cssProp: 'border-right-color',
            dataAttr: 'data-darkreader-inline-border-right',
        },
        'border-top-color': {
            customProp: '--darkreader-inline-border-top',
            cssProp: 'border-top-color',
            dataAttr: 'data-darkreader-inline-border-top',
        },
        'box-shadow': {
            customProp: '--darkreader-inline-boxshadow',
            cssProp: 'box-shadow',
            dataAttr: 'data-darkreader-inline-boxshadow',
        },
        'color': {
            customProp: '--darkreader-inline-color',
            cssProp: 'color',
            dataAttr: 'data-darkreader-inline-color',
        },
        'fill': {
            customProp: '--darkreader-inline-fill',
            cssProp: 'fill',
            dataAttr: 'data-darkreader-inline-fill',
        },
        'stroke': {
            customProp: '--darkreader-inline-stroke',
            cssProp: 'stroke',
            dataAttr: 'data-darkreader-inline-stroke',
        },
        'outline-color': {
            customProp: '--darkreader-inline-outline',
            cssProp: 'outline-color',
            dataAttr: 'data-darkreader-inline-outline',
        },
        'stop-color': {
            customProp: '--darkreader-inline-stopcolor',
            cssProp: 'stop-color',
            dataAttr: 'data-darkreader-inline-stopcolor',
        },
    };
    var overridesList = Object.values(overrides);
    var normalizedPropList = {};
    overridesList.forEach(function (_a) {
        var cssProp = _a.cssProp, customProp = _a.customProp;
        return normalizedPropList[customProp] = cssProp;
    });
    var INLINE_STYLE_ATTRS = ['style', 'fill', 'stop-color', 'stroke', 'bgcolor', 'color'];
    var INLINE_STYLE_SELECTOR = INLINE_STYLE_ATTRS.map(function (attr) { return "[".concat(attr, "]"); }).join(', ');
    function getInlineOverrideStyle() {
        return overridesList.map(function (_a) {
            var dataAttr = _a.dataAttr, customProp = _a.customProp, cssProp = _a.cssProp;
            return [
                "[".concat(dataAttr, "] {"),
                "  ".concat(cssProp, ": var(").concat(customProp, ") !important;"),
                '}',
            ].join('\\n');
        }).join('\\n');
    }
    function getInlineStyleElements(root) {
        var results = [];
        if (root instanceof Element && root.matches(INLINE_STYLE_SELECTOR)) {
            results.push(root);
        }
        if (root instanceof Element || (isShadowDomSupported && root instanceof ShadowRoot) || root instanceof Document) {
            push(results, root.querySelectorAll(INLINE_STYLE_SELECTOR));
        }
        return results;
    }
    var treeObservers = new Map();
    var attrObservers = new Map();
    function watchForInlineStyles(elementStyleDidChange, shadowRootDiscovered) {
        deepWatchForInlineStyles(document, elementStyleDidChange, shadowRootDiscovered);
        iterateShadowHosts(document.documentElement, function (host) {
            deepWatchForInlineStyles(host.shadowRoot, elementStyleDidChange, shadowRootDiscovered);
        });
    }
    function deepWatchForInlineStyles(root, elementStyleDidChange, shadowRootDiscovered) {
        if (treeObservers.has(root)) {
            treeObservers.get(root).disconnect();
            attrObservers.get(root).disconnect();
        }
        var discoveredNodes = new WeakSet();
        function discoverNodes(node) {
            getInlineStyleElements(node).forEach(function (el) {
                if (discoveredNodes.has(el)) {
                    return;
                }
                discoveredNodes.add(el);
                elementStyleDidChange(el);
            });
            iterateShadowHosts(node, function (n) {
                if (discoveredNodes.has(node)) {
                    return;
                }
                discoveredNodes.add(node);
                shadowRootDiscovered(n.shadowRoot);
                deepWatchForInlineStyles(n.shadowRoot, elementStyleDidChange, shadowRootDiscovered);
            });
        }
        var treeObserver = createOptimizedTreeObserver(root, {
            onMinorMutations: function (_a) {
                var additions = _a.additions;
                additions.forEach(function (added) { return discoverNodes(added); });
            },
            onHugeMutations: function () {
                discoverNodes(root);
            },
        });
        treeObservers.set(root, treeObserver);
        var attemptCount = 0;
        var start = null;
        var ATTEMPTS_INTERVAL = getDuration({ seconds: 10 });
        var RETRY_TIMEOUT = getDuration({ seconds: 2 });
        var MAX_ATTEMPTS_COUNT = 50;
        var cache = [];
        var timeoutId = null;
        var handleAttributeMutations = throttle(function (mutations) {
            mutations.forEach(function (m) {
                if (INLINE_STYLE_ATTRS.includes(m.attributeName)) {
                    elementStyleDidChange(m.target);
                }
            });
        });
        var attrObserver = new MutationObserver(function (mutations) {
            if (timeoutId) {
                cache.push.apply(cache, __spreadArray([], __read(mutations), false));
                return;
            }
            attemptCount++;
            var now = Date.now();
            if (start == null) {
                start = now;
            }
            else if (attemptCount >= MAX_ATTEMPTS_COUNT) {
                if (now - start < ATTEMPTS_INTERVAL) {
                    timeoutId = setTimeout(function () {
                        start = null;
                        attemptCount = 0;
                        timeoutId = null;
                        var attributeCache = cache;
                        cache = [];
                        handleAttributeMutations(attributeCache);
                    }, RETRY_TIMEOUT);
                    cache.push.apply(cache, __spreadArray([], __read(mutations), false));
                    return;
                }
                start = now;
                attemptCount = 1;
            }
            handleAttributeMutations(mutations);
        });
        attrObserver.observe(root, {
            attributes: true,
            attributeFilter: INLINE_STYLE_ATTRS.concat(overridesList.map(function (_a) {
                var dataAttr = _a.dataAttr;
                return dataAttr;
            })),
            subtree: true,
        });
        attrObservers.set(root, attrObserver);
    }
    function stopWatchingForInlineStyles() {
        treeObservers.forEach(function (o) { return o.disconnect(); });
        attrObservers.forEach(function (o) { return o.disconnect(); });
        treeObservers.clear();
        attrObservers.clear();
    }
    var inlineStyleCache = new WeakMap();
    var filterProps = ['brightness', 'contrast', 'grayscale', 'sepia', 'mode'];
    function getInlineStyleCacheKey(el, theme) {
        return INLINE_STYLE_ATTRS
            .map(function (attr) { return "".concat(attr, "=\\"").concat(el.getAttribute(attr), "\\""); })
            .concat(filterProps.map(function (prop) { return "".concat(prop, "=\\"").concat(theme[prop], "\\""); }))
            .join(' ');
    }
    function shouldIgnoreInlineStyle(element, selectors) {
        for (var i = 0, len = selectors.length; i < len; i++) {
            var ingnoredSelector = selectors[i];
            if (element.matches(ingnoredSelector)) {
                return true;
            }
        }
        return false;
    }
    function overrideInlineStyle(element, theme, ignoreInlineSelectors, ignoreImageSelectors) {
        var cacheKey = getInlineStyleCacheKey(element, theme);
        if (cacheKey === inlineStyleCache.get(element)) {
            return;
        }
        var unsetProps = new Set(Object.keys(overrides));
        function setCustomProp(targetCSSProp, modifierCSSProp, cssVal) {
            var isPropertyVariable = targetCSSProp.startsWith('--');
            var _a = isPropertyVariable ? {} : overrides[targetCSSProp], customProp = _a.customProp, dataAttr = _a.dataAttr;
            var mod = getModifiableCSSDeclaration(modifierCSSProp, cssVal, { style: element.style }, variablesStore, ignoreImageSelectors, null);
            if (!mod) {
                return;
            }
            var value = mod.value;
            if (typeof value === 'function') {
                value = value(theme);
            }
            if (isPropertyVariable && typeof value === 'object') {
                var typedValue = value;
                typedValue.declarations.forEach(function (_a) {
                    var property = _a.property, value = _a.value;
                    !(value instanceof Promise) && element.style.setProperty(property, value);
                });
            }
            else {
                element.style.setProperty(customProp, value);
                if (!element.hasAttribute(dataAttr)) {
                    element.setAttribute(dataAttr, '');
                }
                unsetProps.delete(targetCSSProp);
            }
        }
        if (ignoreInlineSelectors.length > 0) {
            if (shouldIgnoreInlineStyle(element, ignoreInlineSelectors)) {
                unsetProps.forEach(function (cssProp) {
                    element.removeAttribute(overrides[cssProp].dataAttr);
                });
                return;
            }
        }
        if (element.hasAttribute('bgcolor')) {
            var value = element.getAttribute('bgcolor');
            if (value.match(/^[0-9a-f]{3}$/i) || value.match(/^[0-9a-f]{6}$/i)) {
                value = "#".concat(value);
            }
            setCustomProp('background-color', 'background-color', value);
        }
        if (element.hasAttribute('color') && element.rel !== 'mask-icon') {
            var value = element.getAttribute('color');
            if (value.match(/^[0-9a-f]{3}$/i) || value.match(/^[0-9a-f]{6}$/i)) {
                value = "#".concat(value);
            }
            setCustomProp('color', 'color', value);
        }
        if (element instanceof SVGElement) {
            if (element.hasAttribute('fill')) {
                var SMALL_SVG_LIMIT_1 = 32;
                var value_1 = element.getAttribute('fill');
                if (value_1 !== 'none') {
                    if (!(element instanceof SVGTextElement)) {
                        var handleSVGElement = function () {
                            var _a = element.getBoundingClientRect(), width = _a.width, height = _a.height;
                            var isBg = (width > SMALL_SVG_LIMIT_1 || height > SMALL_SVG_LIMIT_1);
                            setCustomProp('fill', isBg ? 'background-color' : 'color', value_1);
                        };
                        if (isReadyStateComplete()) {
                            handleSVGElement();
                        }
                        else {
                            addReadyStateCompleteListener(handleSVGElement);
                        }
                    }
                    else {
                        setCustomProp('fill', 'color', value_1);
                    }
                }
            }
            if (element.hasAttribute('stop-color')) {
                setCustomProp('stop-color', 'background-color', element.getAttribute('stop-color'));
            }
        }
        if (element.hasAttribute('stroke')) {
            var value = element.getAttribute('stroke');
            setCustomProp('stroke', element instanceof SVGLineElement || element instanceof SVGTextElement ? 'border-color' : 'color', value);
        }
        element.style && iterateCSSDeclarations(element.style, function (property, value) {
            if (property === 'background-image' && value.includes('url')) {
                return;
            }
            if (overrides.hasOwnProperty(property) || (property.startsWith('--') && !normalizedPropList[property])) {
                setCustomProp(property, property, value);
            }
            else {
                var overridenProp = normalizedPropList[property];
                if (overridenProp &&
                    (!element.style.getPropertyValue(overridenProp) && !element.hasAttribute(overridenProp))) {
                    if (overridenProp === 'background-color' && element.hasAttribute('bgcolor')) {
                        return;
                    }
                    element.style.setProperty(property, '');
                }
            }
        });
        if (element.style && element instanceof SVGTextElement && element.style.fill) {
            setCustomProp('fill', 'color', element.style.getPropertyValue('fill'));
        }
        forEach(unsetProps, function (cssProp) {
            element.removeAttribute(overrides[cssProp].dataAttr);
        });
        inlineStyleCache.set(element, getInlineStyleCacheKey(element, theme));
    }

    var metaThemeColorName = 'theme-color';
    var metaThemeColorSelector = "meta[name=\\"".concat(metaThemeColorName, "\\"]");
    var srcMetaThemeColor = null;
    var observer = null;
    function changeMetaThemeColor(meta, theme) {
        srcMetaThemeColor = srcMetaThemeColor || meta.content;
        var color = parseColorWithCache(srcMetaThemeColor);
        if (!color) {
            return;
        }
        meta.content = modifyBackgroundColor(color, theme);
    }
    function changeMetaThemeColorWhenAvailable(theme) {
        var meta = document.querySelector(metaThemeColorSelector);
        if (meta) {
            changeMetaThemeColor(meta, theme);
        }
        else {
            if (observer) {
                observer.disconnect();
            }
            observer = new MutationObserver(function (mutations) {
                loop: for (var i = 0; i < mutations.length; i++) {
                    var addedNodes = mutations[i].addedNodes;
                    for (var j = 0; j < addedNodes.length; j++) {
                        var node = addedNodes[j];
                        if (node instanceof HTMLMetaElement && node.name === metaThemeColorName) {
                            observer.disconnect();
                            observer = null;
                            changeMetaThemeColor(node, theme);
                            break loop;
                        }
                    }
                }
            });
            observer.observe(document.head, { childList: true });
        }
    }
    function restoreMetaThemeColor() {
        if (observer) {
            observer.disconnect();
            observer = null;
        }
        var meta = document.querySelector(metaThemeColorSelector);
        if (meta && srcMetaThemeColor) {
            meta.content = srcMetaThemeColor;
        }
    }

    var themeCacheKeys = [
        'mode',
        'brightness',
        'contrast',
        'grayscale',
        'sepia',
        'darkSchemeBackgroundColor',
        'darkSchemeTextColor',
        'lightSchemeBackgroundColor',
        'lightSchemeTextColor',
    ];
    function getThemeKey(theme) {
        var resultKey = '';
        themeCacheKeys.forEach(function (key) {
            resultKey += "".concat(key, ":").concat(theme[key], ";");
        });
        return resultKey;
    }
    var asyncQueue = createAsyncTasksQueue();
    function createStyleSheetModifier() {
        var renderId = 0;
        var rulesTextCache = new Set();
        var rulesModCache = new Map();
        var varTypeChangeCleaners = new Set();
        var prevFilterKey = null;
        var hasNonLoadedLink = false;
        var wasRebuilt = false;
        function shouldRebuildStyle() {
            return hasNonLoadedLink && !wasRebuilt;
        }
        function modifySheet(options) {
            var rules = options.sourceCSSRules;
            var theme = options.theme, ignoreImageAnalysis = options.ignoreImageAnalysis, force = options.force, prepareSheet = options.prepareSheet, isAsyncCancelled = options.isAsyncCancelled;
            var rulesChanged = (rulesModCache.size === 0);
            var notFoundCacheKeys = new Set(rulesModCache.keys());
            var themeKey = getThemeKey(theme);
            var themeChanged = (themeKey !== prevFilterKey);
            if (hasNonLoadedLink) {
                wasRebuilt = true;
            }
            var modRules = [];
            iterateCSSRules(rules, function (rule) {
                var cssText = rule.cssText;
                var textDiffersFromPrev = false;
                notFoundCacheKeys.delete(cssText);
                if (rule.parentRule instanceof CSSMediaRule) {
                    cssText += ";".concat(rule.parentRule.media.mediaText);
                }
                if (!rulesTextCache.has(cssText)) {
                    rulesTextCache.add(cssText);
                    textDiffersFromPrev = true;
                }
                if (textDiffersFromPrev) {
                    rulesChanged = true;
                }
                else {
                    modRules.push(rulesModCache.get(cssText));
                    return;
                }
                var modDecs = [];
                rule.style && iterateCSSDeclarations(rule.style, function (property, value) {
                    var mod = getModifiableCSSDeclaration(property, value, rule, variablesStore, ignoreImageAnalysis, isAsyncCancelled);
                    if (mod) {
                        modDecs.push(mod);
                    }
                });
                var modRule = null;
                if (modDecs.length > 0) {
                    var parentRule = rule.parentRule;
                    modRule = { selector: rule.selectorText, declarations: modDecs, parentRule: parentRule };
                    modRules.push(modRule);
                }
                rulesModCache.set(cssText, modRule);
            }, function () {
                hasNonLoadedLink = true;
            });
            notFoundCacheKeys.forEach(function (key) {
                rulesTextCache.delete(key);
                rulesModCache.delete(key);
            });
            prevFilterKey = themeKey;
            if (!force && !rulesChanged && !themeChanged) {
                return;
            }
            renderId++;
            function setRule(target, index, rule) {
                var selector = rule.selector, declarations = rule.declarations;
                var getDeclarationText = function (dec) {
                    var property = dec.property, value = dec.value, important = dec.important, sourceValue = dec.sourceValue;
                    return "".concat(property, ": ").concat(value == null ? sourceValue : value).concat(important ? ' !important' : '', ";");
                };
                var cssRulesText = '';
                declarations.forEach(function (declarations) {
                    cssRulesText += "".concat(getDeclarationText(declarations), " ");
                });
                var ruleText = "".concat(selector, " { ").concat(cssRulesText, " }");
                target.insertRule(ruleText, index);
            }
            var asyncDeclarations = new Map();
            var varDeclarations = new Map();
            var asyncDeclarationCounter = 0;
            var varDeclarationCounter = 0;
            var rootReadyGroup = { rule: null, rules: [], isGroup: true };
            var groupRefs = new WeakMap();
            function getGroup(rule) {
                if (rule == null) {
                    return rootReadyGroup;
                }
                if (groupRefs.has(rule)) {
                    return groupRefs.get(rule);
                }
                var group = { rule: rule, rules: [], isGroup: true };
                groupRefs.set(rule, group);
                var parentGroup = getGroup(rule.parentRule);
                parentGroup.rules.push(group);
                return group;
            }
            varTypeChangeCleaners.forEach(function (clear) { return clear(); });
            varTypeChangeCleaners.clear();
            modRules.filter(function (r) { return r; }).forEach(function (_a) {
                var selector = _a.selector, declarations = _a.declarations, parentRule = _a.parentRule;
                var group = getGroup(parentRule);
                var readyStyleRule = { selector: selector, declarations: [], isGroup: false };
                var readyDeclarations = readyStyleRule.declarations;
                group.rules.push(readyStyleRule);
                function handleAsyncDeclaration(property, modified, important, sourceValue) {
                    var asyncKey = ++asyncDeclarationCounter;
                    var asyncDeclaration = { property: property, value: null, important: important, asyncKey: asyncKey, sourceValue: sourceValue };
                    readyDeclarations.push(asyncDeclaration);
                    var currentRenderId = renderId;
                    modified.then(function (asyncValue) {
                        if (!asyncValue || isAsyncCancelled() || currentRenderId !== renderId) {
                            return;
                        }
                        asyncDeclaration.value = asyncValue;
                        asyncQueue.add(function () {
                            if (isAsyncCancelled() || currentRenderId !== renderId) {
                                return;
                            }
                            rebuildAsyncRule(asyncKey);
                        });
                    });
                }
                function handleVarDeclarations(property, modified, important, sourceValue) {
                    var _a = modified, varDecs = _a.declarations, onTypeChange = _a.onTypeChange;
                    var varKey = ++varDeclarationCounter;
                    var currentRenderId = renderId;
                    var initialIndex = readyDeclarations.length;
                    var oldDecs = [];
                    if (varDecs.length === 0) {
                        var tempDec = { property: property, value: sourceValue, important: important, sourceValue: sourceValue, varKey: varKey };
                        readyDeclarations.push(tempDec);
                        oldDecs = [tempDec];
                    }
                    varDecs.forEach(function (mod) {
                        if (mod.value instanceof Promise) {
                            handleAsyncDeclaration(mod.property, mod.value, important, sourceValue);
                        }
                        else {
                            var readyDec = { property: mod.property, value: mod.value, important: important, sourceValue: sourceValue, varKey: varKey };
                            readyDeclarations.push(readyDec);
                            oldDecs.push(readyDec);
                        }
                    });
                    onTypeChange.addListener(function (newDecs) {
                        if (isAsyncCancelled() || currentRenderId !== renderId) {
                            return;
                        }
                        var readyVarDecs = newDecs.map(function (mod) {
                            return { property: mod.property, value: mod.value, important: important, sourceValue: sourceValue, varKey: varKey };
                        });
                        var index = readyDeclarations.indexOf(oldDecs[0], initialIndex);
                        readyDeclarations.splice.apply(readyDeclarations, __spreadArray([index, oldDecs.length], __read(readyVarDecs), false));
                        oldDecs = readyVarDecs;
                        rebuildVarRule(varKey);
                    });
                    varTypeChangeCleaners.add(function () { return onTypeChange.removeListeners(); });
                }
                declarations.forEach(function (_a) {
                    var property = _a.property, value = _a.value, important = _a.important, sourceValue = _a.sourceValue;
                    if (typeof value === 'function') {
                        var modified = value(theme);
                        if (modified instanceof Promise) {
                            handleAsyncDeclaration(property, modified, important, sourceValue);
                        }
                        else if (property.startsWith('--')) {
                            handleVarDeclarations(property, modified, important, sourceValue);
                        }
                        else {
                            readyDeclarations.push({ property: property, value: modified, important: important, sourceValue: sourceValue });
                        }
                    }
                    else {
                        readyDeclarations.push({ property: property, value: value, important: important, sourceValue: sourceValue });
                    }
                });
            });
            var sheet = prepareSheet();
            function buildStyleSheet() {
                function createTarget(group, parent) {
                    var rule = group.rule;
                    if (rule instanceof CSSMediaRule) {
                        var media = rule.media;
                        var index = parent.cssRules.length;
                        parent.insertRule("@media ".concat(media.mediaText, " {}"), index);
                        return parent.cssRules[index];
                    }
                    return parent;
                }
                function iterateReadyRules(group, target, styleIterator) {
                    group.rules.forEach(function (r) {
                        if (r.isGroup) {
                            var t = createTarget(r, target);
                            iterateReadyRules(r, t, styleIterator);
                        }
                        else {
                            styleIterator(r, target);
                        }
                    });
                }
                iterateReadyRules(rootReadyGroup, sheet, function (rule, target) {
                    var index = target.cssRules.length;
                    rule.declarations.forEach(function (_a) {
                        var asyncKey = _a.asyncKey, varKey = _a.varKey;
                        if (asyncKey != null) {
                            asyncDeclarations.set(asyncKey, { rule: rule, target: target, index: index });
                        }
                        if (varKey != null) {
                            varDeclarations.set(varKey, { rule: rule, target: target, index: index });
                        }
                    });
                    setRule(target, index, rule);
                });
            }
            function rebuildAsyncRule(key) {
                var _a = asyncDeclarations.get(key), rule = _a.rule, target = _a.target, index = _a.index;
                target.deleteRule(index);
                setRule(target, index, rule);
                asyncDeclarations.delete(key);
            }
            function rebuildVarRule(key) {
                var _a = varDeclarations.get(key), rule = _a.rule, target = _a.target, index = _a.index;
                target.deleteRule(index);
                setRule(target, index, rule);
            }
            buildStyleSheet();
        }
        return { modifySheet: modifySheet, shouldRebuildStyle: shouldRebuildStyle };
    }

    var STYLE_SELECTOR = 'style, link[rel*="stylesheet" i]:not([disabled])';
    function isFontsGoogleApiStyle(element) {
        if (!element.href) {
            return false;
        }
        try {
            var elementURL = new URL(element.href);
            return elementURL.hostname === 'fonts.googleapis.com';
        }
        catch (err) {
            logInfo("Couldn't construct ".concat(element.href, " as URL"));
            return false;
        }
    }
    function shouldManageStyle(element) {
        return (((element instanceof HTMLStyleElement) ||
            (element instanceof SVGStyleElement) ||
            (element instanceof HTMLLinkElement &&
                element.rel &&
                element.rel.toLowerCase().includes('stylesheet') &&
                element.href &&
                !element.disabled &&
                (isFirefox ? !element.href.startsWith('moz-extension://') : true) &&
                !isFontsGoogleApiStyle(element))) &&
            !element.classList.contains('darkreader') &&
            element.media.toLowerCase() !== 'print' &&
            !element.classList.contains('stylus'));
    }
    function getManageableStyles(node, results, deep) {
        if (results === void 0) { results = []; }
        if (deep === void 0) { deep = true; }
        if (shouldManageStyle(node)) {
            results.push(node);
        }
        else if (node instanceof Element || (isShadowDomSupported && node instanceof ShadowRoot) || node === document) {
            forEach(node.querySelectorAll(STYLE_SELECTOR), function (style) { return getManageableStyles(style, results, false); });
            if (deep) {
                iterateShadowHosts(node, function (host) { return getManageableStyles(host.shadowRoot, results, false); });
            }
        }
        return results;
    }
    var syncStyleSet = new WeakSet();
    var corsStyleSet = new WeakSet();
    var canOptimizeUsingProxy$1 = false;
    document.addEventListener('__darkreader__inlineScriptsAllowed', function () {
        canOptimizeUsingProxy$1 = true;
    });
    var loadingLinkCounter = 0;
    var rejectorsForLoadingLinks = new Map();
    function cleanLoadingLinks() {
        rejectorsForLoadingLinks.clear();
    }
    function manageStyle(element, _a) {
        var update = _a.update, loadingStart = _a.loadingStart, loadingEnd = _a.loadingEnd;
        var prevStyles = [];
        var next = element;
        while ((next = next.nextElementSibling) && next.matches('.darkreader')) {
            prevStyles.push(next);
        }
        var corsCopy = prevStyles.find(function (el) { return el.matches('.darkreader--cors') && !corsStyleSet.has(el); }) || null;
        var syncStyle = prevStyles.find(function (el) { return el.matches('.darkreader--sync') && !syncStyleSet.has(el); }) || null;
        var corsCopyPositionWatcher = null;
        var syncStylePositionWatcher = null;
        var cancelAsyncOperations = false;
        var isOverrideEmpty = true;
        var sheetModifier = createStyleSheetModifier();
        var observer = new MutationObserver(function () {
            update();
        });
        var observerOptions = { attributes: true, childList: true, subtree: true, characterData: true };
        function containsCSSImport() {
            return element instanceof HTMLStyleElement && element.textContent.trim().match(cssImportRegex);
        }
        function hasImports(cssRules, checkCrossOrigin) {
            var result = false;
            if (cssRules) {
                var rule = void 0;
                cssRulesLoop: for (var i = 0, len = cssRules.length; i < len; i++) {
                    rule = cssRules[i];
                    if (rule.href) {
                        if (checkCrossOrigin) {
                            if (rule.href.startsWith('http') && !rule.href.startsWith(location.origin)) {
                                result = true;
                                break cssRulesLoop;
                            }
                        }
                        else {
                            result = true;
                            break cssRulesLoop;
                        }
                    }
                }
            }
            return result;
        }
        function getRulesSync() {
            if (corsCopy) {
                return corsCopy.sheet.cssRules;
            }
            if (containsCSSImport()) {
                return null;
            }
            var cssRules = safeGetSheetRules();
            if (element instanceof HTMLLinkElement &&
                !isRelativeHrefOnAbsolutePath(element.href) &&
                hasImports(cssRules, false)) {
                return null;
            }
            if (hasImports(cssRules, true)) {
                return null;
            }
            return cssRules;
        }
        function insertStyle() {
            if (corsCopy) {
                if (element.nextSibling !== corsCopy) {
                    element.parentNode.insertBefore(corsCopy, element.nextSibling);
                }
                if (corsCopy.nextSibling !== syncStyle) {
                    element.parentNode.insertBefore(syncStyle, corsCopy.nextSibling);
                }
            }
            else if (element.nextSibling !== syncStyle) {
                element.parentNode.insertBefore(syncStyle, element.nextSibling);
            }
        }
        function createSyncStyle() {
            syncStyle = element instanceof SVGStyleElement ?
                document.createElementNS('http://www.w3.org/2000/svg', 'style') :
                document.createElement('style');
            syncStyle.classList.add('darkreader');
            syncStyle.classList.add('darkreader--sync');
            syncStyle.media = 'screen';
            if (element.title) {
                syncStyle.title = element.title;
            }
            syncStyleSet.add(syncStyle);
        }
        var isLoadingRules = false;
        var wasLoadingError = false;
        var loadingLinkId = ++loadingLinkCounter;
        function getRulesAsync() {
            return __awaiter(this, void 0, void 0, function () {
                var cssText, cssBasePath, _a, cssRules, accessError, fullCSSText;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!(element instanceof HTMLLinkElement)) return [3, 7];
                            _a = __read(getRulesOrError(), 2), cssRules = _a[0], accessError = _a[1];
                            if (!((!cssRules && !accessError && !isSafari) ||
                                (isSafari && !element.sheet) ||
                                isStillLoadingError(accessError))) return [3, 5];
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 3, , 4]);
                            return [4, linkLoading(element, loadingLinkId)];
                        case 2:
                            _c.sent();
                            return [3, 4];
                        case 3:
                            _c.sent();
                            wasLoadingError = true;
                            return [3, 4];
                        case 4:
                            if (cancelAsyncOperations) {
                                return [2, null];
                            }
                            _b = __read(getRulesOrError(), 2), cssRules = _b[0], accessError = _b[1];
                            _c.label = 5;
                        case 5:
                            if (cssRules) {
                                if (!hasImports(cssRules, false)) {
                                    return [2, cssRules];
                                }
                            }
                            return [4, loadText(element.href)];
                        case 6:
                            cssText = _c.sent();
                            cssBasePath = getCSSBaseBath(element.href);
                            if (cancelAsyncOperations) {
                                return [2, null];
                            }
                            return [3, 8];
                        case 7:
                            if (containsCSSImport()) {
                                cssText = element.textContent.trim();
                                cssBasePath = getCSSBaseBath(location.href);
                            }
                            else {
                                return [2, null];
                            }
                            _c.label = 8;
                        case 8:
                            if (!cssText) return [3, 13];
                            _c.label = 9;
                        case 9:
                            _c.trys.push([9, 11, , 12]);
                            return [4, replaceCSSImports(cssText, cssBasePath)];
                        case 10:
                            fullCSSText = _c.sent();
                            corsCopy = createCORSCopy(element, fullCSSText);
                            return [3, 12];
                        case 11:
                            _c.sent();
                            return [3, 12];
                        case 12:
                            if (corsCopy) {
                                corsCopyPositionWatcher = watchForNodePosition(corsCopy, 'prev-sibling');
                                return [2, corsCopy.sheet.cssRules];
                            }
                            _c.label = 13;
                        case 13: return [2, null];
                    }
                });
            });
        }
        function details(options) {
            var rules = getRulesSync();
            if (!rules) {
                if (options.secondRound) {
                    return null;
                }
                if (isLoadingRules || wasLoadingError) {
                    return null;
                }
                isLoadingRules = true;
                loadingStart();
                getRulesAsync().then(function (results) {
                    isLoadingRules = false;
                    loadingEnd();
                    if (results) {
                        update();
                    }
                }).catch(function (err) {
                    isLoadingRules = false;
                    loadingEnd();
                });
                return null;
            }
            return { rules: rules };
        }
        var forceRenderStyle = false;
        function render(theme, ignoreImageAnalysis) {
            var rules = getRulesSync();
            if (!rules) {
                return;
            }
            cancelAsyncOperations = false;
            function removeCSSRulesFromSheet(sheet) {
                for (var i = sheet.cssRules.length - 1; i >= 0; i--) {
                    sheet.deleteRule(i);
                }
            }
            function prepareOverridesSheet() {
                if (!syncStyle) {
                    createSyncStyle();
                }
                syncStylePositionWatcher && syncStylePositionWatcher.stop();
                insertStyle();
                if (syncStyle.sheet == null) {
                    syncStyle.textContent = '';
                }
                var sheet = syncStyle.sheet;
                removeCSSRulesFromSheet(sheet);
                if (syncStylePositionWatcher) {
                    syncStylePositionWatcher.run();
                }
                else {
                    syncStylePositionWatcher = watchForNodePosition(syncStyle, 'prev-sibling', function () {
                        forceRenderStyle = true;
                        buildOverrides();
                    });
                }
                return syncStyle.sheet;
            }
            function buildOverrides() {
                var force = forceRenderStyle;
                forceRenderStyle = false;
                sheetModifier.modifySheet({
                    prepareSheet: prepareOverridesSheet,
                    sourceCSSRules: rules,
                    theme: theme,
                    ignoreImageAnalysis: ignoreImageAnalysis,
                    force: force,
                    isAsyncCancelled: function () { return cancelAsyncOperations; },
                });
                isOverrideEmpty = syncStyle.sheet.cssRules.length === 0;
                if (sheetModifier.shouldRebuildStyle()) {
                    addReadyStateCompleteListener(function () { return update(); });
                }
            }
            buildOverrides();
        }
        function getRulesOrError() {
            try {
                if (element.sheet == null) {
                    return [null, null];
                }
                return [element.sheet.cssRules, null];
            }
            catch (err) {
                return [null, err];
            }
        }
        function isStillLoadingError(error) {
            return error && error.message && error.message.includes('loading');
        }
        function safeGetSheetRules() {
            var _a = __read(getRulesOrError(), 2), cssRules = _a[0], err = _a[1];
            if (err) {
                return null;
            }
            return cssRules;
        }
        function watchForSheetChanges() {
            watchForSheetChangesUsingProxy();
            if (!isThunderbird && !(canOptimizeUsingProxy$1 && element.sheet)) {
                watchForSheetChangesUsingRAF();
            }
        }
        var rulesChangeKey = null;
        var rulesCheckFrameId = null;
        function getRulesChangeKey() {
            var rules = safeGetSheetRules();
            return rules ? rules.length : null;
        }
        function didRulesKeyChange() {
            return getRulesChangeKey() !== rulesChangeKey;
        }
        function watchForSheetChangesUsingRAF() {
            rulesChangeKey = getRulesChangeKey();
            stopWatchingForSheetChangesUsingRAF();
            var checkForUpdate = function () {
                if (didRulesKeyChange()) {
                    rulesChangeKey = getRulesChangeKey();
                    update();
                }
                if (canOptimizeUsingProxy$1 && element.sheet) {
                    stopWatchingForSheetChangesUsingRAF();
                    return;
                }
                rulesCheckFrameId = requestAnimationFrame(checkForUpdate);
            };
            checkForUpdate();
        }
        function stopWatchingForSheetChangesUsingRAF() {
            cancelAnimationFrame(rulesCheckFrameId);
        }
        var areSheetChangesPending = false;
        function onSheetChange() {
            canOptimizeUsingProxy$1 = true;
            stopWatchingForSheetChangesUsingRAF();
            if (areSheetChangesPending) {
                return;
            }
            function handleSheetChanges() {
                areSheetChangesPending = false;
                if (cancelAsyncOperations) {
                    return;
                }
                update();
            }
            areSheetChangesPending = true;
            if (typeof queueMicrotask === 'function') {
                queueMicrotask(handleSheetChanges);
            }
            else {
                requestAnimationFrame(handleSheetChanges);
            }
        }
        function watchForSheetChangesUsingProxy() {
            element.addEventListener('__darkreader__updateSheet', onSheetChange);
        }
        function stopWatchingForSheetChangesUsingProxy() {
            element.removeEventListener('__darkreader__updateSheet', onSheetChange);
        }
        function stopWatchingForSheetChanges() {
            stopWatchingForSheetChangesUsingProxy();
            stopWatchingForSheetChangesUsingRAF();
        }
        function pause() {
            observer.disconnect();
            cancelAsyncOperations = true;
            corsCopyPositionWatcher && corsCopyPositionWatcher.stop();
            syncStylePositionWatcher && syncStylePositionWatcher.stop();
            stopWatchingForSheetChanges();
        }
        function destroy() {
            pause();
            removeNode(corsCopy);
            removeNode(syncStyle);
            loadingEnd();
            if (rejectorsForLoadingLinks.has(loadingLinkId)) {
                var reject = rejectorsForLoadingLinks.get(loadingLinkId);
                rejectorsForLoadingLinks.delete(loadingLinkId);
                reject && reject();
            }
        }
        function watch() {
            observer.observe(element, observerOptions);
            if (element instanceof HTMLStyleElement) {
                watchForSheetChanges();
            }
        }
        var maxMoveCount = 10;
        var moveCount = 0;
        function restore() {
            if (!syncStyle) {
                return;
            }
            moveCount++;
            if (moveCount > maxMoveCount) {
                return;
            }
            insertStyle();
            corsCopyPositionWatcher && corsCopyPositionWatcher.skip();
            syncStylePositionWatcher && syncStylePositionWatcher.skip();
            if (!isOverrideEmpty) {
                forceRenderStyle = true;
                update();
            }
        }
        return {
            details: details,
            render: render,
            pause: pause,
            destroy: destroy,
            watch: watch,
            restore: restore,
        };
    }
    function linkLoading(link, loadingId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        var cleanUp = function () {
                            link.removeEventListener('load', onLoad);
                            link.removeEventListener('error', onError);
                            rejectorsForLoadingLinks.delete(loadingId);
                        };
                        var onLoad = function () {
                            cleanUp();
                            resolve();
                        };
                        var onError = function () {
                            cleanUp();
                            reject("Linkelement ".concat(loadingId, " couldn't be loaded. ").concat(link.href));
                        };
                        rejectorsForLoadingLinks.set(loadingId, function () {
                            cleanUp();
                            reject();
                        });
                        link.addEventListener('load', onLoad);
                        link.addEventListener('error', onError);
                        if (!link.href) {
                            onError();
                        }
                    })];
            });
        });
    }
    function getCSSImportURL(importDeclaration) {
        return getCSSURLValue(importDeclaration.substring(7).trim().replace(/;$/, '').replace(/screen$/, ''));
    }
    function loadText(url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!url.startsWith('data:')) return [3, 3];
                        return [4, fetch(url)];
                    case 1: return [4, (_a.sent()).text()];
                    case 2: return [2, _a.sent()];
                    case 3: return [4, bgFetch({ url: url, responseType: 'text', mimeType: 'text/css', origin: window.location.origin })];
                    case 4: return [2, _a.sent()];
                }
            });
        });
    }
    function replaceCSSImports(cssText, basePath, cache) {
        if (cache === void 0) { cache = new Map(); }
        return __awaiter(this, void 0, void 0, function () {
            var importMatches, importMatches_1, importMatches_1_1, match, importURL, absoluteURL, importedCSS, e_1_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        cssText = removeCSSComments(cssText);
                        cssText = replaceCSSFontFace(cssText);
                        cssText = replaceCSSRelativeURLsWithAbsolute(cssText, basePath);
                        importMatches = getMatches(cssImportRegex, cssText);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 10, 11, 12]);
                        importMatches_1 = __values(importMatches), importMatches_1_1 = importMatches_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!importMatches_1_1.done) return [3, 9];
                        match = importMatches_1_1.value;
                        importURL = getCSSImportURL(match);
                        absoluteURL = getAbsoluteURL(basePath, importURL);
                        importedCSS = void 0;
                        if (!cache.has(absoluteURL)) return [3, 3];
                        importedCSS = cache.get(absoluteURL);
                        return [3, 7];
                    case 3:
                        _b.trys.push([3, 6, , 7]);
                        return [4, loadText(absoluteURL)];
                    case 4:
                        importedCSS = _b.sent();
                        cache.set(absoluteURL, importedCSS);
                        return [4, replaceCSSImports(importedCSS, getCSSBaseBath(absoluteURL), cache)];
                    case 5:
                        importedCSS = _b.sent();
                        return [3, 7];
                    case 6:
                        _b.sent();
                        importedCSS = '';
                        return [3, 7];
                    case 7:
                        cssText = cssText.split(match).join(importedCSS);
                        _b.label = 8;
                    case 8:
                        importMatches_1_1 = importMatches_1.next();
                        return [3, 2];
                    case 9: return [3, 12];
                    case 10:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3, 12];
                    case 11:
                        try {
                            if (importMatches_1_1 && !importMatches_1_1.done && (_a = importMatches_1.return)) _a.call(importMatches_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7];
                    case 12:
                        cssText = cssText.trim();
                        return [2, cssText];
                }
            });
        });
    }
    function createCORSCopy(srcElement, cssText) {
        if (!cssText) {
            return null;
        }
        var cors = document.createElement('style');
        cors.classList.add('darkreader');
        cors.classList.add('darkreader--cors');
        cors.media = 'screen';
        cors.textContent = cssText;
        srcElement.parentNode.insertBefore(cors, srcElement.nextSibling);
        cors.sheet.disabled = true;
        corsStyleSet.add(cors);
        return cors;
    }

    var observers = [];
    var observedRoots;
    var undefinedGroups = new Map();
    var elementsDefinitionCallback;
    function collectUndefinedElements(root) {
        if (!isDefinedSelectorSupported) {
            return;
        }
        forEach(root.querySelectorAll(':not(:defined)'), function (el) {
            var tag = el.tagName.toLowerCase();
            if (!tag.includes('-')) {
                var extendedTag = el.getAttribute('is');
                if (extendedTag) {
                    tag = extendedTag;
                }
                else {
                    return;
                }
            }
            if (!undefinedGroups.has(tag)) {
                undefinedGroups.set(tag, new Set());
                customElementsWhenDefined(tag).then(function () {
                    if (elementsDefinitionCallback) {
                        var elements = undefinedGroups.get(tag);
                        undefinedGroups.delete(tag);
                        elementsDefinitionCallback(Array.from(elements));
                    }
                });
            }
            undefinedGroups.get(tag).add(el);
        });
    }
    var canOptimizeUsingProxy = false;
    document.addEventListener('__darkreader__inlineScriptsAllowed', function () {
        canOptimizeUsingProxy = true;
    });
    var resolvers = new Map();
    function handleIsDefined(e) {
        canOptimizeUsingProxy = true;
        if (resolvers.has(e.detail.tag)) {
            var resolve = resolvers.get(e.detail.tag);
            resolve();
        }
    }
    function customElementsWhenDefined(tag) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) {
                        if (window.customElements && typeof customElements.whenDefined === 'function') {
                            customElements.whenDefined(tag).then(function () { return resolve(); });
                        }
                        else if (canOptimizeUsingProxy) {
                            resolvers.set(tag, resolve);
                            document.dispatchEvent(new CustomEvent('__darkreader__addUndefinedResolver', { detail: { tag: tag } }));
                        }
                        else {
                            var checkIfDefined_1 = function () {
                                var elements = undefinedGroups.get(tag);
                                if (elements && elements.size > 0) {
                                    if (elements.values().next().value.matches(':defined')) {
                                        resolve();
                                    }
                                    else {
                                        requestAnimationFrame(checkIfDefined_1);
                                    }
                                }
                            };
                            requestAnimationFrame(checkIfDefined_1);
                        }
                    })];
            });
        });
    }
    function watchWhenCustomElementsDefined(callback) {
        elementsDefinitionCallback = callback;
    }
    function unsubscribeFromDefineCustomElements() {
        elementsDefinitionCallback = null;
        undefinedGroups.clear();
        document.removeEventListener('__darkreader__isDefined', handleIsDefined);
    }
    function watchForStyleChanges(currentStyles, update, shadowRootDiscovered) {
        stopWatchingForStyleChanges();
        var prevStyles = new Set(currentStyles);
        var prevStyleSiblings = new WeakMap();
        var nextStyleSiblings = new WeakMap();
        function saveStylePosition(style) {
            prevStyleSiblings.set(style, style.previousElementSibling);
            nextStyleSiblings.set(style, style.nextElementSibling);
        }
        function forgetStylePosition(style) {
            prevStyleSiblings.delete(style);
            nextStyleSiblings.delete(style);
        }
        function didStylePositionChange(style) {
            return (style.previousElementSibling !== prevStyleSiblings.get(style) ||
                style.nextElementSibling !== nextStyleSiblings.get(style));
        }
        currentStyles.forEach(saveStylePosition);
        function handleStyleOperations(operations) {
            var createdStyles = operations.createdStyles, removedStyles = operations.removedStyles, movedStyles = operations.movedStyles;
            createdStyles.forEach(function (s) { return saveStylePosition(s); });
            movedStyles.forEach(function (s) { return saveStylePosition(s); });
            removedStyles.forEach(function (s) { return forgetStylePosition(s); });
            createdStyles.forEach(function (s) { return prevStyles.add(s); });
            removedStyles.forEach(function (s) { return prevStyles.delete(s); });
            if (createdStyles.size + removedStyles.size + movedStyles.size > 0) {
                update({
                    created: Array.from(createdStyles),
                    removed: Array.from(removedStyles),
                    moved: Array.from(movedStyles),
                    updated: [],
                });
            }
        }
        function handleMinorTreeMutations(_a) {
            var additions = _a.additions, moves = _a.moves, deletions = _a.deletions;
            var createdStyles = new Set();
            var removedStyles = new Set();
            var movedStyles = new Set();
            additions.forEach(function (node) { return getManageableStyles(node).forEach(function (style) { return createdStyles.add(style); }); });
            deletions.forEach(function (node) { return getManageableStyles(node).forEach(function (style) { return removedStyles.add(style); }); });
            moves.forEach(function (node) { return getManageableStyles(node).forEach(function (style) { return movedStyles.add(style); }); });
            handleStyleOperations({ createdStyles: createdStyles, removedStyles: removedStyles, movedStyles: movedStyles });
            additions.forEach(function (n) {
                iterateShadowHosts(n, subscribeForShadowRootChanges);
                collectUndefinedElements(n);
            });
        }
        function handleHugeTreeMutations(root) {
            var styles = new Set(getManageableStyles(root));
            var createdStyles = new Set();
            var removedStyles = new Set();
            var movedStyles = new Set();
            styles.forEach(function (s) {
                if (!prevStyles.has(s)) {
                    createdStyles.add(s);
                }
            });
            prevStyles.forEach(function (s) {
                if (!styles.has(s)) {
                    removedStyles.add(s);
                }
            });
            styles.forEach(function (s) {
                if (!createdStyles.has(s) && !removedStyles.has(s) && didStylePositionChange(s)) {
                    movedStyles.add(s);
                }
            });
            handleStyleOperations({ createdStyles: createdStyles, removedStyles: removedStyles, movedStyles: movedStyles });
            iterateShadowHosts(root, subscribeForShadowRootChanges);
            collectUndefinedElements(root);
        }
        function handleAttributeMutations(mutations) {
            var updatedStyles = new Set();
            var removedStyles = new Set();
            mutations.forEach(function (m) {
                var target = m.target;
                if (target.isConnected) {
                    if (shouldManageStyle(target)) {
                        updatedStyles.add(target);
                    }
                    else if (target instanceof HTMLLinkElement && target.disabled) {
                        removedStyles.add(target);
                    }
                }
            });
            if (updatedStyles.size + removedStyles.size > 0) {
                update({
                    updated: Array.from(updatedStyles),
                    created: [],
                    removed: Array.from(removedStyles),
                    moved: [],
                });
            }
        }
        function observe(root) {
            var treeObserver = createOptimizedTreeObserver(root, {
                onMinorMutations: handleMinorTreeMutations,
                onHugeMutations: handleHugeTreeMutations,
            });
            var attrObserver = new MutationObserver(handleAttributeMutations);
            attrObserver.observe(root, { attributes: true, attributeFilter: ['rel', 'disabled', 'media', 'href'], subtree: true });
            observers.push(treeObserver, attrObserver);
            observedRoots.add(root);
        }
        function subscribeForShadowRootChanges(node) {
            var shadowRoot = node.shadowRoot;
            if (shadowRoot == null || observedRoots.has(shadowRoot)) {
                return;
            }
            observe(shadowRoot);
            shadowRootDiscovered(shadowRoot);
        }
        observe(document);
        iterateShadowHosts(document.documentElement, subscribeForShadowRootChanges);
        watchWhenCustomElementsDefined(function (hosts) {
            var newStyles = [];
            hosts.forEach(function (host) { return push(newStyles, getManageableStyles(host.shadowRoot)); });
            update({ created: newStyles, updated: [], removed: [], moved: [] });
            hosts.forEach(function (host) {
                var shadowRoot = host.shadowRoot;
                if (shadowRoot == null) {
                    return;
                }
                subscribeForShadowRootChanges(host);
                iterateShadowHosts(shadowRoot, subscribeForShadowRootChanges);
                collectUndefinedElements(shadowRoot);
            });
        });
        document.addEventListener('__darkreader__isDefined', handleIsDefined);
        collectUndefinedElements(document);
    }
    function resetObservers() {
        observers.forEach(function (o) { return o.disconnect(); });
        observers.splice(0, observers.length);
        observedRoots = new WeakSet();
    }
    function stopWatchingForStyleChanges() {
        resetObservers();
        unsubscribeFromDefineCustomElements();
    }

    function hexify(number) {
        return ((number < 16 ? '0' : '') + number.toString(16));
    }
    function generateUID() {
        if ('randomUUID' in crypto) {
            var uuid = crypto.randomUUID();
            return uuid.substring(0, 8) + uuid.substring(9, 13) + uuid.substring(14, 18) + uuid.substring(19, 23) + uuid.substring(24);
        }
        return Array.from(crypto.getRandomValues(new Uint8Array(16))).map(function (x) { return hexify(x); }).join('');
    }

    var adoptedStyleOverrides = new WeakMap();
    var overrideList = new WeakSet();
    function createAdoptedStyleSheetOverride(node) {
        var cancelAsyncOperations = false;
        function injectSheet(sheet, override) {
            var newSheets = __spreadArray([], __read(node.adoptedStyleSheets), false);
            var sheetIndex = newSheets.indexOf(sheet);
            var existingIndex = newSheets.indexOf(override);
            if (sheetIndex === existingIndex - 1) {
                return;
            }
            if (existingIndex >= 0) {
                newSheets.splice(existingIndex, 1);
            }
            newSheets.splice(sheetIndex + 1, 0, override);
            node.adoptedStyleSheets = newSheets;
        }
        function destroy() {
            cancelAsyncOperations = true;
            var newSheets = __spreadArray([], __read(node.adoptedStyleSheets), false);
            node.adoptedStyleSheets.forEach(function (adoptedStyleSheet) {
                if (overrideList.has(adoptedStyleSheet)) {
                    var existingIndex = newSheets.indexOf(adoptedStyleSheet);
                    if (existingIndex >= 0) {
                        newSheets.splice(existingIndex, 1);
                    }
                    adoptedStyleOverrides.delete(adoptedStyleSheet);
                    overrideList.delete(adoptedStyleSheet);
                }
            });
            node.adoptedStyleSheets = newSheets;
        }
        function render(theme, ignoreImageAnalysis) {
            node.adoptedStyleSheets.forEach(function (sheet) {
                if (overrideList.has(sheet)) {
                    return;
                }
                var rules = sheet.rules;
                var override = new CSSStyleSheet();
                function prepareOverridesSheet() {
                    for (var i = override.cssRules.length - 1; i >= 0; i--) {
                        override.deleteRule(i);
                    }
                    injectSheet(sheet, override);
                    adoptedStyleOverrides.set(sheet, override);
                    overrideList.add(override);
                    return override;
                }
                var sheetModifier = createStyleSheetModifier();
                sheetModifier.modifySheet({
                    prepareSheet: prepareOverridesSheet,
                    sourceCSSRules: rules,
                    theme: theme,
                    ignoreImageAnalysis: ignoreImageAnalysis,
                    force: false,
                    isAsyncCancelled: function () { return cancelAsyncOperations; },
                });
            });
        }
        return {
            render: render,
            destroy: destroy
        };
    }

    function injectProxy(enableStyleSheetsProxy) {
        document.dispatchEvent(new CustomEvent('__darkreader__inlineScriptsAllowed'));
        var addRuleDescriptor = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, 'addRule');
        var insertRuleDescriptor = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, 'insertRule');
        var deleteRuleDescriptor = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, 'deleteRule');
        var removeRuleDescriptor = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, 'removeRule');
        var documentStyleSheetsDescriptor = enableStyleSheetsProxy ?
            Object.getOwnPropertyDescriptor(Document.prototype, 'styleSheets') : null;
        var shouldWrapHTMLElement = [
            'baidu.com',
            'baike.baidu.com',
            'ditu.baidu.com',
            'map.baidu.com',
            'maps.baidu.com',
            'haokan.baidu.com',
            'pan.baidu.com',
            'passport.baidu.com',
            'tieba.baidu.com',
            'www.baidu.com'
        ].includes(location.hostname);
        var getElementsByTagNameDescriptor = shouldWrapHTMLElement ?
            Object.getOwnPropertyDescriptor(Element.prototype, 'getElementsByTagName') : null;
        var cleanUp = function () {
            Object.defineProperty(CSSStyleSheet.prototype, 'addRule', addRuleDescriptor);
            Object.defineProperty(CSSStyleSheet.prototype, 'insertRule', insertRuleDescriptor);
            Object.defineProperty(CSSStyleSheet.prototype, 'deleteRule', deleteRuleDescriptor);
            Object.defineProperty(CSSStyleSheet.prototype, 'removeRule', removeRuleDescriptor);
            document.removeEventListener('__darkreader__cleanUp', cleanUp);
            document.removeEventListener('__darkreader__addUndefinedResolver', addUndefinedResolver);
            if (enableStyleSheetsProxy) {
                Object.defineProperty(Document.prototype, 'styleSheets', documentStyleSheetsDescriptor);
            }
            if (shouldWrapHTMLElement) {
                Object.defineProperty(Element.prototype, 'getElementsByTagName', getElementsByTagNameDescriptor);
            }
        };
        var addUndefinedResolver = function (e) {
            customElements.whenDefined(e.detail.tag).then(function () {
                document.dispatchEvent(new CustomEvent('__darkreader__isDefined', { detail: { tag: e.detail.tag } }));
            });
        };
        document.addEventListener('__darkreader__cleanUp', cleanUp);
        document.addEventListener('__darkreader__addUndefinedResolver', addUndefinedResolver);
        var updateSheetEvent = new Event('__darkreader__updateSheet');
        function proxyAddRule(selector, style, index) {
            addRuleDescriptor.value.call(this, selector, style, index);
            if (this.ownerNode && !this.ownerNode.classList.contains('darkreader')) {
                this.ownerNode.dispatchEvent(updateSheetEvent);
            }
            return -1;
        }
        function proxyInsertRule(rule, index) {
            var returnValue = insertRuleDescriptor.value.call(this, rule, index);
            if (this.ownerNode && !this.ownerNode.classList.contains('darkreader')) {
                this.ownerNode.dispatchEvent(updateSheetEvent);
            }
            return returnValue;
        }
        function proxyDeleteRule(index) {
            deleteRuleDescriptor.value.call(this, index);
            if (this.ownerNode && !this.ownerNode.classList.contains('darkreader')) {
                this.ownerNode.dispatchEvent(updateSheetEvent);
            }
        }
        function proxyRemoveRule(index) {
            removeRuleDescriptor.value.call(this, index);
            if (this.ownerNode && !this.ownerNode.classList.contains('darkreader')) {
                this.ownerNode.dispatchEvent(updateSheetEvent);
            }
        }
        function proxyDocumentStyleSheets() {
            var _this = this;
            var getCurrentValue = function () {
                var docSheets = documentStyleSheetsDescriptor.get.call(_this);
                var filteredSheets = __spreadArray([], __read(docSheets), false).filter(function (styleSheet) {
                    return !styleSheet.ownerNode.classList.contains('darkreader');
                });
                filteredSheets.item = function (item) {
                    return filteredSheets[item];
                };
                return Object.setPrototypeOf(filteredSheets, StyleSheetList.prototype);
            };
            var elements = getCurrentValue();
            var styleSheetListBehavior = {
                get: function (_, property) {
                    return getCurrentValue()[property];
                }
            };
            elements = new Proxy(elements, styleSheetListBehavior);
            return elements;
        }
        function proxyGetElementsByTagName(tagName) {
            var _this = this;
            if (tagName !== 'style') {
                return getElementsByTagNameDescriptor.value.call(this, tagName);
            }
            var getCurrentElementValue = function () {
                var elements = getElementsByTagNameDescriptor.value.call(_this, tagName);
                return Object.setPrototypeOf(__spreadArray([], __read(elements), false).filter(function (element) {
                    return !element.classList.contains('darkreader');
                }), NodeList.prototype);
            };
            var elements = getCurrentElementValue();
            var nodeListBehavior = {
                get: function (_, property) {
                    return getCurrentElementValue()[Number(property) || property];
                }
            };
            elements = new Proxy(elements, nodeListBehavior);
            return elements;
        }
        Object.defineProperty(CSSStyleSheet.prototype, 'addRule', Object.assign({}, addRuleDescriptor, { value: proxyAddRule }));
        Object.defineProperty(CSSStyleSheet.prototype, 'insertRule', Object.assign({}, insertRuleDescriptor, { value: proxyInsertRule }));
        Object.defineProperty(CSSStyleSheet.prototype, 'deleteRule', Object.assign({}, deleteRuleDescriptor, { value: proxyDeleteRule }));
        Object.defineProperty(CSSStyleSheet.prototype, 'removeRule', Object.assign({}, removeRuleDescriptor, { value: proxyRemoveRule }));
        if (enableStyleSheetsProxy) {
            Object.defineProperty(Document.prototype, 'styleSheets', Object.assign({}, documentStyleSheetsDescriptor, { get: proxyDocumentStyleSheets }));
        }
        if (shouldWrapHTMLElement) {
            Object.defineProperty(Element.prototype, 'getElementsByTagName', Object.assign({}, getElementsByTagNameDescriptor, { value: proxyGetElementsByTagName }));
        }
    }

    var INSTANCE_ID = generateUID();
    var styleManagers = new Map();
    var adoptedStyleManagers = [];
    var filter = null;
    var fixes = null;
    var isIFrame$1 = null;
    var ignoredImageAnalysisSelectors = null;
    var ignoredInlineSelectors = null;
    function createOrUpdateStyle(className, root) {
        if (root === void 0) { root = document.head || document; }
        var element = root.querySelector(".".concat(className));
        if (!element) {
            element = document.createElement('style');
            element.classList.add('darkreader');
            element.classList.add(className);
            element.media = 'screen';
            element.textContent = '';
        }
        return element;
    }
    function createOrUpdateScript(className, root) {
        if (root === void 0) { root = document.head || document; }
        var element = root.querySelector(".".concat(className));
        if (!element) {
            element = document.createElement('script');
            element.classList.add('darkreader');
            element.classList.add(className);
        }
        return element;
    }
    var nodePositionWatchers = new Map();
    function setupNodePositionWatcher(node, alias) {
        nodePositionWatchers.has(alias) && nodePositionWatchers.get(alias).stop();
        nodePositionWatchers.set(alias, watchForNodePosition(node, 'parent'));
    }
    function stopStylePositionWatchers() {
        forEach(nodePositionWatchers.values(), function (watcher) { return watcher.stop(); });
        nodePositionWatchers.clear();
    }
    function createStaticStyleOverrides() {
        var fallbackStyle = createOrUpdateStyle('darkreader--fallback', document);
        fallbackStyle.textContent = getModifiedFallbackStyle(filter, { strict: true });
        document.head.insertBefore(fallbackStyle, document.head.firstChild);
        setupNodePositionWatcher(fallbackStyle, 'fallback');
        var userAgentStyle = createOrUpdateStyle('darkreader--user-agent');
        userAgentStyle.textContent = getModifiedUserAgentStyle(filter, isIFrame$1, filter.styleSystemControls);
        document.head.insertBefore(userAgentStyle, fallbackStyle.nextSibling);
        setupNodePositionWatcher(userAgentStyle, 'user-agent');
        var textStyle = createOrUpdateStyle('darkreader--text');
        if (filter.useFont || filter.textStroke > 0) {
            textStyle.textContent = createTextStyle(filter);
        }
        else {
            textStyle.textContent = '';
        }
        document.head.insertBefore(textStyle, fallbackStyle.nextSibling);
        setupNodePositionWatcher(textStyle, 'text');
        var invertStyle = createOrUpdateStyle('darkreader--invert');
        if (fixes && Array.isArray(fixes.invert) && fixes.invert.length > 0) {
            invertStyle.textContent = [
                "".concat(fixes.invert.join(', '), " {"),
                "    filter: ".concat(getCSSFilterValue(__assign(__assign({}, filter), { contrast: filter.mode === 0 ? filter.contrast : clamp(filter.contrast - 10, 0, 100) })), " !important;"),
                '}',
            ].join('\\n');
        }
        else {
            invertStyle.textContent = '';
        }
        document.head.insertBefore(invertStyle, textStyle.nextSibling);
        setupNodePositionWatcher(invertStyle, 'invert');
        var inlineStyle = createOrUpdateStyle('darkreader--inline');
        inlineStyle.textContent = getInlineOverrideStyle();
        document.head.insertBefore(inlineStyle, invertStyle.nextSibling);
        setupNodePositionWatcher(inlineStyle, 'inline');
        var overrideStyle = createOrUpdateStyle('darkreader--override');
        overrideStyle.textContent = fixes && fixes.css ? replaceCSSTemplates(fixes.css) : '';
        document.head.appendChild(overrideStyle);
        setupNodePositionWatcher(overrideStyle, 'override');
        var variableStyle = createOrUpdateStyle('darkreader--variables');
        var selectionColors = getSelectionColor(filter);
        var darkSchemeBackgroundColor = filter.darkSchemeBackgroundColor, darkSchemeTextColor = filter.darkSchemeTextColor, lightSchemeBackgroundColor = filter.lightSchemeBackgroundColor, lightSchemeTextColor = filter.lightSchemeTextColor, mode = filter.mode;
        var schemeBackgroundColor = mode === 0 ? lightSchemeBackgroundColor : darkSchemeBackgroundColor;
        var schemeTextColor = mode === 0 ? lightSchemeTextColor : darkSchemeTextColor;
        schemeBackgroundColor = modifyBackgroundColor(parseColorWithCache(schemeBackgroundColor), filter);
        schemeTextColor = modifyForegroundColor(parseColorWithCache(schemeTextColor), filter);
        variableStyle.textContent = [
            ":root {",
            "   --darkreader-neutral-background: ".concat(schemeBackgroundColor, ";"),
            "   --darkreader-neutral-text: ".concat(schemeTextColor, ";"),
            "   --darkreader-selection-background: ".concat(selectionColors.backgroundColorSelection, ";"),
            "   --darkreader-selection-text: ".concat(selectionColors.foregroundColorSelection, ";"),
            "}"
        ].join('\\n');
        document.head.insertBefore(variableStyle, inlineStyle.nextSibling);
        setupNodePositionWatcher(variableStyle, 'variables');
        var rootVarsStyle = createOrUpdateStyle('darkreader--root-vars');
        document.head.insertBefore(rootVarsStyle, variableStyle.nextSibling);
        var injectProxyArg = !(fixes && fixes.disableStyleSheetsProxy);
        {
            var proxyScript = createOrUpdateScript('darkreader--proxy');
            proxyScript.append("(".concat(injectProxy, ")(").concat(injectProxyArg, ")"));
            document.head.insertBefore(proxyScript, rootVarsStyle.nextSibling);
            proxyScript.remove();
        }
    }
    var shadowRootsWithOverrides = new Set();
    function createShadowStaticStyleOverrides(root) {
        var inlineStyle = createOrUpdateStyle('darkreader--inline', root);
        inlineStyle.textContent = getInlineOverrideStyle();
        root.insertBefore(inlineStyle, root.firstChild);
        var overrideStyle = createOrUpdateStyle('darkreader--override', root);
        overrideStyle.textContent = fixes && fixes.css ? replaceCSSTemplates(fixes.css) : '';
        root.insertBefore(overrideStyle, inlineStyle.nextSibling);
        var invertStyle = createOrUpdateStyle('darkreader--invert', root);
        if (fixes && Array.isArray(fixes.invert) && fixes.invert.length > 0) {
            invertStyle.textContent = [
                "".concat(fixes.invert.join(', '), " {"),
                "    filter: ".concat(getCSSFilterValue(__assign(__assign({}, filter), { contrast: filter.mode === 0 ? filter.contrast : clamp(filter.contrast - 10, 0, 100) })), " !important;"),
                '}',
            ].join('\\n');
        }
        else {
            invertStyle.textContent = '';
        }
        root.insertBefore(invertStyle, overrideStyle.nextSibling);
        shadowRootsWithOverrides.add(root);
    }
    function replaceCSSTemplates($cssText) {
        return $cssText.replace(/\\\${(.+?)}/g, function (_, $color) {
            var color = parseColorWithCache($color);
            if (color) {
                return modifyColor(color, filter);
            }
            return $color;
        });
    }
    function cleanFallbackStyle() {
        var fallback = document.querySelector('.darkreader--fallback');
        if (fallback) {
            fallback.textContent = '';
        }
    }
    function createDynamicStyleOverrides() {
        cancelRendering();
        var allStyles = getManageableStyles(document);
        var newManagers = allStyles
            .filter(function (style) { return !styleManagers.has(style); })
            .map(function (style) { return createManager(style); });
        newManagers
            .map(function (manager) { return manager.details({ secondRound: false }); })
            .filter(function (detail) { return detail && detail.rules.length > 0; })
            .forEach(function (detail) {
            variablesStore.addRulesForMatching(detail.rules);
        });
        variablesStore.matchVariablesAndDependants();
        variablesStore.setOnRootVariableChange(function () {
            variablesStore.putRootVars(document.head.querySelector('.darkreader--root-vars'), filter);
        });
        variablesStore.putRootVars(document.head.querySelector('.darkreader--root-vars'), filter);
        styleManagers.forEach(function (manager) { return manager.render(filter, ignoredImageAnalysisSelectors); });
        if (loadingStyles.size === 0) {
            cleanFallbackStyle();
        }
        newManagers.forEach(function (manager) { return manager.watch(); });
        var inlineStyleElements = toArray(document.querySelectorAll(INLINE_STYLE_SELECTOR));
        iterateShadowHosts(document.documentElement, function (host) {
            createShadowStaticStyleOverrides(host.shadowRoot);
            var elements = host.shadowRoot.querySelectorAll(INLINE_STYLE_SELECTOR);
            if (elements.length > 0) {
                push(inlineStyleElements, elements);
            }
        });
        inlineStyleElements.forEach(function (el) { return overrideInlineStyle(el, filter, ignoredInlineSelectors, ignoredImageAnalysisSelectors); });
        handleAdoptedStyleSheets(document);
    }
    var loadingStylesCounter = 0;
    var loadingStyles = new Set();
    function createManager(element) {
        var loadingStyleId = ++loadingStylesCounter;
        function loadingStart() {
            if (!isDOMReady() || !didDocumentShowUp) {
                loadingStyles.add(loadingStyleId);
                logInfo("Current amount of styles loading: ".concat(loadingStyles.size));
                var fallbackStyle = document.querySelector('.darkreader--fallback');
                if (!fallbackStyle.textContent) {
                    fallbackStyle.textContent = getModifiedFallbackStyle(filter, { strict: false });
                }
            }
        }
        function loadingEnd() {
            loadingStyles.delete(loadingStyleId);
            logInfo("Removed loadingStyle ".concat(loadingStyleId, ", now awaiting: ").concat(loadingStyles.size));
            if (loadingStyles.size === 0 && isDOMReady()) {
                cleanFallbackStyle();
            }
        }
        function update() {
            var details = manager.details({ secondRound: true });
            if (!details) {
                return;
            }
            variablesStore.addRulesForMatching(details.rules);
            variablesStore.matchVariablesAndDependants();
            manager.render(filter, ignoredImageAnalysisSelectors);
        }
        var manager = manageStyle(element, { update: update, loadingStart: loadingStart, loadingEnd: loadingEnd });
        styleManagers.set(element, manager);
        return manager;
    }
    function removeManager(element) {
        var manager = styleManagers.get(element);
        if (manager) {
            manager.destroy();
            styleManagers.delete(element);
        }
    }
    var throttledRenderAllStyles = throttle(function (callback) {
        styleManagers.forEach(function (manager) { return manager.render(filter, ignoredImageAnalysisSelectors); });
        adoptedStyleManagers.forEach(function (manager) { return manager.render(filter, ignoredImageAnalysisSelectors); });
        callback && callback();
    });
    var cancelRendering = function () {
        throttledRenderAllStyles.cancel();
    };
    function onDOMReady() {
        if (loadingStyles.size === 0) {
            cleanFallbackStyle();
            return;
        }
    }
    var documentVisibilityListener = null;
    var didDocumentShowUp = !document.hidden;
    function watchForDocumentVisibility(callback) {
        var alreadyWatching = Boolean(documentVisibilityListener);
        documentVisibilityListener = function () {
            if (!document.hidden) {
                stopWatchingForDocumentVisibility();
                callback();
                didDocumentShowUp = true;
            }
        };
        if (!alreadyWatching) {
            document.addEventListener('visibilitychange', documentVisibilityListener);
        }
    }
    function stopWatchingForDocumentVisibility() {
        document.removeEventListener('visibilitychange', documentVisibilityListener);
        documentVisibilityListener = null;
    }
    function createThemeAndWatchForUpdates() {
        createStaticStyleOverrides();
        function runDynamicStyle() {
            createDynamicStyleOverrides();
            watchForUpdates();
        }
        if (document.hidden && !filter.immediateModify) {
            watchForDocumentVisibility(runDynamicStyle);
        }
        else {
            runDynamicStyle();
        }
        changeMetaThemeColorWhenAvailable(filter);
    }
    function handleAdoptedStyleSheets(node) {
        try {
            if (Array.isArray(node.adoptedStyleSheets)) {
                if (node.adoptedStyleSheets.length > 0) {
                    var newManger = createAdoptedStyleSheetOverride(node);
                    adoptedStyleManagers.push(newManger);
                    newManger.render(filter, ignoredImageAnalysisSelectors);
                }
            }
        }
        catch (err) {
        }
    }
    function watchForUpdates() {
        var managedStyles = Array.from(styleManagers.keys());
        watchForStyleChanges(managedStyles, function (_a) {
            var created = _a.created, updated = _a.updated, removed = _a.removed, moved = _a.moved;
            var stylesToRemove = removed;
            var stylesToManage = created.concat(updated).concat(moved)
                .filter(function (style) { return !styleManagers.has(style); });
            var stylesToRestore = moved
                .filter(function (style) { return styleManagers.has(style); });
            stylesToRemove.forEach(function (style) { return removeManager(style); });
            var newManagers = stylesToManage
                .map(function (style) { return createManager(style); });
            newManagers
                .map(function (manager) { return manager.details({ secondRound: false }); })
                .filter(function (detail) { return detail && detail.rules.length > 0; })
                .forEach(function (detail) {
                variablesStore.addRulesForMatching(detail.rules);
            });
            variablesStore.matchVariablesAndDependants();
            newManagers.forEach(function (manager) { return manager.render(filter, ignoredImageAnalysisSelectors); });
            newManagers.forEach(function (manager) { return manager.watch(); });
            stylesToRestore.forEach(function (style) { return styleManagers.get(style).restore(); });
        }, function (shadowRoot) {
            createShadowStaticStyleOverrides(shadowRoot);
            handleAdoptedStyleSheets(shadowRoot);
        });
        watchForInlineStyles(function (element) {
            overrideInlineStyle(element, filter, ignoredInlineSelectors, ignoredImageAnalysisSelectors);
            if (element === document.documentElement) {
                var styleAttr = element.getAttribute('style') || '';
                if (styleAttr.includes('--')) {
                    variablesStore.matchVariablesAndDependants();
                    variablesStore.putRootVars(document.head.querySelector('.darkreader--root-vars'), filter);
                }
            }
        }, function (root) {
            createShadowStaticStyleOverrides(root);
            var inlineStyleElements = root.querySelectorAll(INLINE_STYLE_SELECTOR);
            if (inlineStyleElements.length > 0) {
                forEach(inlineStyleElements, function (el) { return overrideInlineStyle(el, filter, ignoredInlineSelectors, ignoredImageAnalysisSelectors); });
            }
        });
        addDOMReadyListener(onDOMReady);
    }
    function stopWatchingForUpdates() {
        styleManagers.forEach(function (manager) { return manager.pause(); });
        stopStylePositionWatchers();
        stopWatchingForStyleChanges();
        stopWatchingForInlineStyles();
        removeDOMReadyListener(onDOMReady);
        cleanReadyStateCompleteListeners();
    }
    var metaObserver;
    function addMetaListener() {
        metaObserver = new MutationObserver(function () {
            if (document.querySelector('meta[name="darkreader-lock"]')) {
                metaObserver.disconnect();
                removeDynamicTheme();
            }
        });
        metaObserver.observe(document.head, { childList: true, subtree: true });
    }
    function createDarkReaderInstanceMarker() {
        var metaElement = document.createElement('meta');
        metaElement.name = 'darkreader';
        metaElement.content = INSTANCE_ID;
        document.head.appendChild(metaElement);
    }
    function isAnotherDarkReaderInstanceActive() {
        if (document.querySelector('meta[name="darkreader-lock"]')) {
            return true;
        }
        var meta = document.querySelector('meta[name="darkreader"]');
        if (meta) {
            if (meta.content !== INSTANCE_ID) {
                return true;
            }
            return false;
        }
        createDarkReaderInstanceMarker();
        addMetaListener();
        return false;
    }
    function createOrUpdateDynamicTheme(filterConfig, dynamicThemeFixes, iframe) {
        filter = filterConfig;
        fixes = dynamicThemeFixes;
        if (fixes) {
            ignoredImageAnalysisSelectors = Array.isArray(fixes.ignoreImageAnalysis) ? fixes.ignoreImageAnalysis : [];
            ignoredInlineSelectors = Array.isArray(fixes.ignoreInlineStyle) ? fixes.ignoreInlineStyle : [];
        }
        else {
            ignoredImageAnalysisSelectors = [];
            ignoredInlineSelectors = [];
        }
        if (filter.immediateModify) {
            setIsDOMReady(function () {
                return true;
            });
        }
        isIFrame$1 = iframe;
        if (document.head) {
            if (isAnotherDarkReaderInstanceActive()) {
                return;
            }
            document.documentElement.setAttribute('data-darkreader-mode', 'dynamic');
            document.documentElement.setAttribute('data-darkreader-scheme', filter.mode ? 'dark' : 'dimmed');
            createThemeAndWatchForUpdates();
        }
        else {
            if (!isFirefox) {
                var fallbackStyle = createOrUpdateStyle('darkreader--fallback');
                document.documentElement.appendChild(fallbackStyle);
                fallbackStyle.textContent = getModifiedFallbackStyle(filter, { strict: true });
            }
            var headObserver_1 = new MutationObserver(function () {
                if (document.head) {
                    headObserver_1.disconnect();
                    if (isAnotherDarkReaderInstanceActive()) {
                        removeDynamicTheme();
                        return;
                    }
                    createThemeAndWatchForUpdates();
                }
            });
            headObserver_1.observe(document, { childList: true, subtree: true });
        }
    }
    function removeProxy() {
        document.dispatchEvent(new CustomEvent('__darkreader__cleanUp'));
        removeNode(document.head.querySelector('.darkreader--proxy'));
    }
    function removeDynamicTheme() {
        document.documentElement.removeAttribute("data-darkreader-mode");
        document.documentElement.removeAttribute("data-darkreader-scheme");
        cleanDynamicThemeCache();
        removeNode(document.querySelector('.darkreader--fallback'));
        if (document.head) {
            restoreMetaThemeColor();
            removeNode(document.head.querySelector('.darkreader--user-agent'));
            removeNode(document.head.querySelector('.darkreader--text'));
            removeNode(document.head.querySelector('.darkreader--invert'));
            removeNode(document.head.querySelector('.darkreader--inline'));
            removeNode(document.head.querySelector('.darkreader--override'));
            removeNode(document.head.querySelector('.darkreader--variables'));
            removeNode(document.head.querySelector('.darkreader--root-vars'));
            removeNode(document.head.querySelector('meta[name="darkreader"]'));
            removeProxy();
        }
        shadowRootsWithOverrides.forEach(function (root) {
            removeNode(root.querySelector('.darkreader--inline'));
            removeNode(root.querySelector('.darkreader--override'));
        });
        shadowRootsWithOverrides.clear();
        forEach(styleManagers.keys(), function (el) { return removeManager(el); });
        loadingStyles.clear();
        cleanLoadingLinks();
        forEach(document.querySelectorAll('.darkreader'), removeNode);
        adoptedStyleManagers.forEach(function (manager) {
            manager.destroy();
        });
        adoptedStyleManagers.splice(0);
        metaObserver && metaObserver.disconnect();
    }
    function cleanDynamicThemeCache() {
        variablesStore.clear();
        parsedURLCache.clear();
        stopWatchingForDocumentVisibility();
        cancelRendering();
        stopWatchingForUpdates();
        cleanModificationCache();
        clearColorCache();
    }

    var blobRegex = /url\\(\\"(blob\\:.*?)\\"\\)/g;
    function replaceBlobs(text) {
        return __awaiter(this, void 0, void 0, function () {
            var promises, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promises = [];
                        getMatches(blobRegex, text, 1).forEach(function (url) {
                            var promise = loadAsDataURL(url);
                            promises.push(promise);
                        });
                        return [4, Promise.all(promises)];
                    case 1:
                        data = _a.sent();
                        return [2, text.replace(blobRegex, function () { return "url(\\"".concat(data.shift(), "\\")"); })];
                }
            });
        });
    }
    var banner = "/*\\n                        _______\\n                       /       \\\\\\n                      .==.    .==.\\n                     ((  ))==((  ))\\n                    / \\"==\\"    \\"==\\"\\\\\\n                   /____|| || ||___\\\\\\n       ________     ____    ________  ___    ___\\n       |  ___  \\\\   /    \\\\   |  ___  \\\\ |  |  /  /\\n       |  |  \\\\  \\\\ /  /\\\\  \\\\  |  |  \\\\  \\\\|  |_/  /\\n       |  |   )  /  /__\\\\  \\\\ |  |__/  /|  ___  \\\\\\n       |  |__/  /  ______  \\\\|  ____  \\\\|  |  \\\\  \\\\\\n_______|_______/__/ ____ \\\\__\\\\__|___\\\\__\\\\__|___\\\\__\\\\____\\n|  ___  \\\\ |  ____/ /    \\\\   |  ___  \\\\ |  ____|  ___  \\\\\\n|  |  \\\\  \\\\|  |___ /  /\\\\  \\\\  |  |  \\\\  \\\\|  |___|  |  \\\\  \\\\\\n|  |__/  /|  ____/  /__\\\\  \\\\ |  |   )  |  ____|  |__/  /\\n|  ____  \\\\|  |__/  ______  \\\\|  |__/  /|  |___|  ____  \\\\\\n|__|   \\\\__\\\\____/__/      \\\\__\\\\_______/ |______|__|   \\\\__\\\\\\n                https://darkreader.org\\n*/\\n\\n/*! Dark reader generated CSS | Licensed under MIT https://github.com/darkreader/darkreader/blob/main/LICENSE */\\n";
    function collectCSS() {
        return __awaiter(this, void 0, void 0, function () {
            function addStaticCSS(selector, comment) {
                var staticStyle = document.querySelector(selector);
                if (staticStyle && staticStyle.textContent) {
                    css.push("/* ".concat(comment, " */"));
                    css.push(staticStyle.textContent);
                    css.push('');
                }
            }
            var css, modifiedCSS, formattedCSS, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        css = [banner];
                        addStaticCSS('.darkreader--fallback', 'Fallback Style');
                        addStaticCSS('.darkreader--user-agent', 'User-Agent Style');
                        addStaticCSS('.darkreader--text', 'Text Style');
                        addStaticCSS('.darkreader--invert', 'Invert Style');
                        addStaticCSS('.darkreader--variables', 'Variables Style');
                        modifiedCSS = [];
                        document.querySelectorAll('.darkreader--sync').forEach(function (element) {
                            forEach(element.sheet.cssRules, function (rule) {
                                rule && rule.cssText && modifiedCSS.push(rule.cssText);
                            });
                        });
                        if (!modifiedCSS.length) return [3, 2];
                        formattedCSS = formatCSS(modifiedCSS.join('\\n'));
                        css.push('/* Modified CSS */');
                        _b = (_a = css).push;
                        return [4, replaceBlobs(formattedCSS)];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        css.push('');
                        _c.label = 2;
                    case 2:
                        addStaticCSS('.darkreader--override', 'Override Style');
                        return [2, css.join('\\n')];
                }
            });
        });
    }

    var isDarkReaderEnabled = false;
    var isIFrame = (function () {
        try {
            return window.self !== window.top;
        }
        catch (err) {
            console.warn(err);
            return true;
        }
    })();
    function enable(themeOptions, fixes) {
        if (themeOptions === void 0) { themeOptions = {}; }
        if (fixes === void 0) { fixes = null; }
        var theme = __assign(__assign({}, DEFAULT_THEME), themeOptions);
        if (theme.engine !== ThemeEngines.dynamicTheme) {
            throw new Error('Theme engine is not supported.');
        }
        createOrUpdateDynamicTheme(theme, fixes, isIFrame);
        isDarkReaderEnabled = true;
    }
    function isEnabled() {
        return isDarkReaderEnabled;
    }
    function disable() {
        removeDynamicTheme();
        isDarkReaderEnabled = false;
    }
    var darkScheme = matchMedia('(prefers-color-scheme: dark)');
    var store = {
        themeOptions: null,
        fixes: null,
    };
    function handleColorScheme() {
        if (darkScheme.matches) {
            enable(store.themeOptions, store.fixes);
        }
        else {
            disable();
        }
    }
    function auto(themeOptions, fixes) {
        if (themeOptions === void 0) { themeOptions = {}; }
        if (fixes === void 0) { fixes = null; }
        if (themeOptions) {
            store = { themeOptions: themeOptions, fixes: fixes };
            handleColorScheme();
            if (isMatchMediaChangeEventListenerSupported) {
                darkScheme.addEventListener('change', handleColorScheme);
            }
            else {
                darkScheme.addListener(handleColorScheme);
            }
        }
        else {
            if (isMatchMediaChangeEventListenerSupported) {
                darkScheme.removeEventListener('change', handleColorScheme);
            }
            else {
                darkScheme.removeListener(handleColorScheme);
            }
            disable();
        }
    }
    function exportGeneratedCSS() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, collectCSS()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    }
    var setFetchMethod = setFetchMethod$1;

    exports.auto = auto;
    exports.disable = disable;
    exports.enable = enable;
    exports.exportGeneratedCSS = exportGeneratedCSS;
    exports.isEnabled = isEnabled;
    exports.setFetchMethod = setFetchMethod;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
`,Qb=[],Xb=[];function pt(e){Qb.push(e)}function Ap(e){Xb.push(e)}pt({id:"7616e262-4d82-570f-ba33-36ff6fe11750",meta:{dependentClassName:["episode__title","episode__number","episode__content"]},rule:{parse:({content:e,utils:t})=>{const n=e.query("#content > article"),r=n.query(".episode__title").text().trim(),i=n.query(".episode__number").text().trim(),s=t.parseTime(i.substr(i.length-12),"MMM DD, YYYY");return{article:{title:r,date:s,content:{html:n.query(".episode__content")}}}}}});pt({id:"f78926c5-35d0-5d2f-92a4-3eaf1743f8a2",meta:{dependentClassName:["email-detail__header","byline","subject","email-detail__body"]},rule:{parse:({content:e,utils:t})=>{const n=e.query(".email-detail__header");return{article:{date:t.parseTime(n.query(".byline").text().trim(),"MMM. DD, YYYY, hh:mm a"),title:n.query(".subject").text().trim(),content:{html:e.query(".email-detail__body")}}}}}});pt({id:"7d572b66-f553-5aca-865d-726335bc2aab",meta:{dependentClassName:["markdown-content"]},rule:{parse:({content:e})=>({article:{title:e.query("h1").text().trim(),content:{html:e.query(".markdown-content")}}})}});pt({id:"ce8aaa52-97ff-508b-8153-59e3134a6d25",meta:{dependentClassName:["mb-8","flex","items-center","text-base","font-medium","text-gray-900","space-x-1","text-sm","text-gray-500","font-semibold","custom-notion","notion","light-mode","notion-page","notion-block-8ae43ff51a7a46dbaa0638b78e8c241c","prose","prose-stone","max-w-full","flex-auto"]},rule:{parse:({content:e,utils:t})=>{const n=e.query(".mb-8.flex.items-center"),r=n.query("p.text-base.font-medium.text-gray-900").text().trim(),i=n.query("img").attr("src"),s=n.query(".flex.space-x-1.text-sm.text-gray-500").text().trim();return{article:{title:e.query("h1 span span.font-semibold").text().trim(),author:{name:r,avatarUrl:i??void 0},content:{html:e.query(".custom-notion main.notion.light-mode.notion-page.notion-block-8ae43ff51a7a46dbaa0638b78e8c241c.prose.prose-stone.max-w-full.flex-auto")},date:t.parseTime(s,"MMM D, yyyy")}}}}});pt({id:"28d44758-e80c-5ce7-b588-434274e3f933",meta:{dependentClassName:["post","date"]},rule:{parse:({content:e,utils:t})=>{const n=e.query(".post"),r=n.query("#title").text().trim(),i=t.parseTime(n.query(".date").text().trim(),"YYYY-MM-DD"),s=n.query("#article"),a=n.queryAll(".tags a").map(l=>({label:l.text().trim()}));return{article:{title:r,date:i,content:{html:s},tags:a}}}}});pt({id:"d8461b23-eda4-5b44-8ae8-c7616a8c35cf",meta:{dependentClassName:["author-info-box","name","meta-box","article-title","article-content"]},rule:{parse:({content:e,utils:t})=>{const n=e.query(".author-info-box").query(".name");return{article:{author:{name:n.query(".name").text()},date:t.parseTime(n.query(".meta-box").query("time").attr("datetime")),title:e.query(".article-title").text().trim(),content:{html:e.query(".article-content")}}}}}});pt({id:"9db2dd0d-b6ef-59ac-93a9-8b3939d2ec37",meta:{dependentClassName:["blog-post-meta__author","blog-post-title","blog-post-meta__date","blog-post-content"]},rule:{parse:({content:e,utils:t})=>{const n=e.query(".blog-post-meta__author"),r=e.query(".blog-post-title"),i=e.query(".blog-post-meta__date"),s=e.query(".blog-post-content");return{article:{title:r.text().trim(),content:{html:s},author:{name:n.text().trim()},date:t.parseTime(i.text())}}}}});pt({id:"49f3a602-e2cc-5588-a279-f316b3b737e2",meta:{dependentClassName:["entry-title","entry-content"]},rule:{parse:({content:e})=>{const t=e.query("h1.entry-title").text(),n=e.query(".entry-content");return{article:{title:t,content:{html:n}}}}}});pt({id:"b5a1efb2-c01a-5f5e-9937-073a4befe40b",meta:{dependentClassName:["title-group","p-name","meta","dt-published"]},rule:{parse:({content:e,utils:t})=>{const n=e.query(".title-group").query("h1.p-name").text().trim(),r=t.parseTime(e.query("p.meta time.dt-published").attr("datetime"),"YYYY-MM-DDTHH:mm:ss.SSSZ");return{article:{title:n,date:r,content:{html:e.query("#content")}}}}}});pt({id:"a72dc7de-8de4-56fb-b0d2-7c60aa68eaf4",meta:{dependentClassName:["art-info","author","art-hd","sf-hidden","content","pubtime"]},rule:{parse:({content:e,utils:t})=>{const n=e.query(".art-info").query(".author"),r=e.query(".art-hd").query("h1").clone();return r.query(".sf-hidden").remove(),{article:{title:r.text(),content:{html:e.query(".content").query("td")},author:{name:n.query("a").text(),url:n.query("a").attr("href")},date:t.parseTime(e.query(".art-info").query(".pubtime").text(),"YYYY-MM-DD HH:mm")}}}}});pt({id:"303695aa-46db-508f-b9f0-853aec2cb72e",meta:{dependentClassName:["header","topic_content"]},rule:{parse:({content:e,utils:t})=>{const n=e.query(".header"),r=n.query("h1").text().trim(),s=n.query("span[title]").attr("title"),o=e.query(".topic_content");return{article:{title:r,content:{html:o},date:t.parseTime(s)}}}}});pt({id:"7377765b-801d-5178-9cf9-28340131f13b",meta:{dependentClassName:["rich_media_meta_text"]},rule:{parse:({content:e,utils:t})=>{const n=e.query("#img-content"),r=n.query("#activity-name").text().trim(),i=t.parseTime(n.query("#publish_time").text().trim(),"YYYY-MM-DD HH:mm"),s=n.query(".rich_media_meta_text").text().trim(),o=n.query("#js_content");return{article:{title:r,date:i,author:{name:s},content:{html:o}}}}}});pt({id:"a83fdb56-d1c4-50cd-af8d-e760a0337863",meta:{dependentClassName:["yuque-doc-content"]},rule:{parse:({content:e})=>({article:{title:e.query("#article-title").text(),content:{html:e.query(".yuque-doc-content")}}})}});pt({id:"b180481c-9448-5c67-9282-f50ecccbd7a6",meta:{dependentClassName:["Post-content","Post-Header","Post-Title","AuthorInfo","AuthorInfo-name","ContentItem-time","Post-RichTextContainer"]},rule:{parse:({content:e,utils:t})=>{const n=e.query(".Post-content"),r=n.query(".Post-Header"),i=r.query(".Post-Title").text().trim(),o=r.query(".AuthorInfo").query(".AuthorInfo-name").text().trim(),a=t.parseTime(n.query(".ContentItem-time").text().trim(),"YYYY-MM-DD HH:mm"),l=n.query(".Post-RichTextContainer");return{article:{title:i,date:a,author:{name:o},content:{html:l}}}}}});function c3(e,t){return{type:"TextElement",value:e,marks:t}}function f3(){return{type:"BreakElement"}}function av(){return{type:"BoldMark"}}function d3(){return{type:"CodeMark"}}function h3(e){return{type:"LinkMark",href:e}}function Fc(e,t){return{type:"HeadingElement",level:e,content:t}}function p3(e){return{type:"BlockquoteElement",content:e}}function m3(e){return{type:"RichTextDocument",body:e}}function Kb(e){return{type:"ParagraphElement",content:e}}function Zb(e,t){return{type:"CodeBlockElement",code:e,language:t}}function Nd(e,t){return{type:"ListElement",content:e,ordered:t}}function Jb(e){return{type:"ListItemElement",content:e}}function g3(e,t){return{type:"ImageElement",url:e,alt:t.alt,title:t.alt}}function Md(e){return e.type==="ListItemElement"}function _3(e){switch(e.type){case"ImageElement":case"BreakElement":case"TextElement":return!0}return!1}function ks(e){const t=[];for(const n of e)if(_3(n))t.push(n);else switch(n.type){case"CodeBlockElement":break;case"BlockquoteElement":case"ListElement":case"ListItemElement":case"ParagraphElement":case"HeadingElement":{t.push(...ks(n.content));break}}return t}Ap({id:"f487131a-5f19-5581-975d-c1dd7cdd363d",meta:null,rule:{order:-1/0,transform:()=>({span:e=>e,h1:e=>Fc(1,ks(e.children())),h2:e=>Fc(2,ks(e.children())),h3:e=>Fc(2,ks(e.children())),p:e=>{if(e.children().length>0)return Kb(ks(e.children()))},code:e=>e.addMark(d3()),strong:e=>e.addMark(av()),b:e=>e.addMark(av()),blockquote:e=>p3(e.children()),a:e=>e.addMark(h3(e.element.attr("href"))),pre:e=>{const t=e.element.children();if(t.length===1){const n=t[0];if(n.nodeType===1){const r=n;if(r.nodeName==="CODE")return Zb(r.text())}}},img:e=>{const t=e.element.attr("src");return t?g3(t,{alt:e.element.attr("alt")??void 0,title:e.element.attr("title")??void 0}):e.skip()},ul:e=>Nd(e.children().filter(Md),!1),ol:e=>Nd(e.children().filter(Md),!0),li:e=>Jb(e.children()),br:()=>f3()})}});Ap({id:"dbb56cea-92b3-5cdf-8095-86d80241b665",meta:null,rule:{transform:()=>({pre:e=>{var n;const t=e.element.children();if(t.length===1){const r=t[0];if(r.nodeType===1){const i=r;if(i.nodeName==="CODE"){const s=i.attr("class");if(s!=null&&s.includes("hljs")){const o=(n=s.match(/language-(\w+)/))==null?void 0:n[1];if(o)return Zb(i.text(),o)}}}}}})}});Ap({id:"8a9f553f-a73f-50f7-93be-86cef471560c",meta:null,rule:{order:-1,transform:()=>({"ne-p":e=>{if(e.children().length>0)return Kb(e.children())},"ne-uli":e=>{if(e.children().length>0)return Nd(e.children().filter(Md))},"ne-uli-i":e=>e.skip(),"ne-uli-c":e=>Jb(e.children())})}});class v3{constructor(t){this.node=t,this.nodeType=3}text(){return this.node.nodeValue??""}}class Er{constructor(t){this.node=t,this.nodeType=1}get nodeName(){return this.node.nodeName}attr(t){return this.node.getAttribute(t)}text(){return this.node.textContent??""}remove(){this.node.remove()}query(t){const n=this.node.querySelector(t);return n?new Er(n):null}clone(){return new Er(this.node.cloneNode(!0))}queryAll(t){return Array.from(this.node.querySelectorAll(t)).map(n=>new Er(n))}children(){return Array.from(this.node.childNodes).map(t=>t.nodeType===3?new v3(t):t.nodeType===1?new Er(t):null).filter(t=>!!t)}html(){return this.node.outerHTML}}const ew=Symbol(),y3=Symbol();class Si{static init(t){return new Si(t)}get marks(){return this.options.marks}get element(){return this.options.element}constructor(t){this.options=t}extend(t){return new Si({...this.options,element:t})}get[ew](){return!0}addMark(t){return new Si({...this.options,marks:this.options.marks.concat(t)})}children(){return this.options.parseChildren(this,this.element)}skip(){return y3}}function b3(e){return!!e&&e instanceof Si&&!!e[ew]}class lv{constructor(t){this.process=new Map,this.handlerMap=new Map;for(const n of t){if(n.processor){const r=n.processor({});Object.keys(r).forEach(i=>{const s=this.process.get(i)||[];s.push(r[i]),this.process.set(i,s)})}if(n.transform){const r=n.transform({});Object.keys(r).forEach(i=>{const s=this.handlerMap.get(i)||[];s.push(r[i]),this.handlerMap.set(i,s)})}}}parseRichText(t){const n=Si.init({marks:[],parseChildren:this.parseChildren.bind(this),element:t});return m3(this.parseNode(n,t))}parseNode(t,n){if(n.nodeType===1)return this.parseElement(t,n);if(n.nodeType===3)return this.parseText(t,n)}parseElement(t,n){const r=n.nodeName.toLocaleLowerCase(),i=this.handlerMap.get(r);let s=t;if(Array.isArray(i))for(const o of i){const a=o(s.extend(n));if(a){if(a===s.skip())return;if(b3(a))s=a;else return a}}return this.parseChildren(s,n)}parseText(t,n){const r=n.text();if(r&&r.trim())return c3(r.trim(),t.marks)}parseChildren(t,n){const r=[];for(const i of n.children()){const s=this.parseNode(t,i);s&&(Array.isArray(s)?s.forEach(o=>r.push(o)):s&&r.push(s))}return r}}function w3(e,t){return e("div",{},...Mt(e,t.body))}function Mt(e,t){return t.map(n=>S3(e,n))}function S3(e,t){switch(t.type){case"BlockquoteElement":return e("blockquote",{},...Mt(e,t.content));case"ParagraphElement":return e("p",{},...Mt(e,t.content));case"HeadingElement":switch(t.level){case 1:return e("h1",{},...Mt(e,t.content));case 2:return e("h2",{},...Mt(e,t.content));case 3:return e("h3",{},...Mt(e,t.content));case 4:return e("h4",{},...Mt(e,t.content));case 5:return e("h5",{},...Mt(e,t.content));case 6:return e("h6",{},...Mt(e,t.content));default:throw new Error("Invalid heading level")}case"CodeBlockElement":return e("pre",{},e("code",{},t.code));case"TextElement":return t.marks.length>0?t.marks.reduce((n,r)=>{switch(r.type){case"BoldMark":return e("b",{},n);case"LinkMark":return e("a",{href:r.href},n);case"CodeMark":return e("code",{},n);default:return e("span",{},n)}},t.value):t.value;case"BreakElement":return e("br",{});case"ImageElement":{const n={src:t.url};return t.alt&&(n.alt=t.alt),t.title&&(n.title=t.title),e("img",n)}case"ListElement":return e(t.ordered?"ol":"ul",{},...Mt(e,t.content));case"ListItemElement":return e("li",{},...Mt(e,t.content))}return""}var E3=`
article pre code {
  background-color: transparent;
}
article h2 {
  font-size: 1.5em;
  line-height: 1.25;
  padding-bottom: 0.3em;
}
article h3 {
  font-size: 1.25em;
  line-height: 1.25;
  padding-bottom: 0.3em;
}
article code {
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 85%;
  white-space: break-spaces;
  background-color: rgba(175, 184, 193, 0.2);
  border-radius: 6px;
}
article blockquote {
  margin: 0;
  padding: 0 1em;
  color: #57606a;
  border-left: 0.25em solid #d0d7de;
}
article:is(p) img {
  max-width: 100%;
}
article img {
  max-width: 100%;
}
`;function uv(e,t){return t.article?e("article",{},e("h1",{},t.article.title),w3(e,t.article.content)):null}function x3(){return E3}function k3(e){const t=e.queryAll("*"),n=new Set;for(const r of t)(r.attr("class")??"").split(" ").forEach(o=>{o&&n.add(o)});return n}function T3(e,t){const{rules:n}=t,r=k3(e),i=n.filter(o=>{const a=o.meta.dependentClassName;return a.length>0?!a.some(l=>!r.has(l)):!0}),s={content:e,utils:{parseTime(o,a){if(!o)return;const l=t.parseTime(o.trim(),a);return isNaN(l)?{timeString:o}:{timeString:o,timestamp:l}}}};for(const o of i)try{const a=o.rule.parse(s);if(a)return a._debugInfo={ruleId:o.id},a}catch(a){o.rule.debug&&(console.log(o.id),console.log(a))}return null}function tw(e,t){const{children:n,content:r,...i}=e,s={...i,content:t(r.html)};return n&&(s.children=n.map(o=>tw(o,t))),s}function R3(e,t){const n={};return e._debugInfo&&(n._debugInfo=e._debugInfo),e.article&&(n.article={...e.article,content:t(e.article.content.html)}),e.discussion&&(n.discussion={...e.discussion,posts:e.discussion.posts.map(r=>tw(r,t))}),n}class A3{constructor(t){this.option=t;const n=T3(t.element,{rules:t.swastRules,parseTime:t.parseTime});n?this.document=R3(n,r=>new lv(t.rastRules.map(i=>i.rule)).parseRichText(r)):this.document=null}articleText(){var t;return this.document?[(t=this.document.article)==null?void 0:t.title]:null}articleHtml(){return this.document?this.option.render(uv(this.option.h,this.document)):null}articleStyle(){return x3()}renderArticle(t){return this.option.render(uv(this.option.h,{article:{title:t.title,content:new lv(this.option.rastRules.map(n=>n.rule)).parseRichText(new Er(t.content))}}))}}function I3(e){return new A3({element:new Er(e.document),swastRules:Qb,rastRules:Xb,parseTime:e.parseTime,h:e.h,render:e.render})}var nw={exports:{}},Yi={};/** @license React v17.0.2
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ut=Vd,mn=T;function xe(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ip=60106,Cl=60107,Op=60108,Lp=60114,Dl=60109,Np=60110,Mp=60112,Ul=60113,Pp=60120,Cp=60115,Dp=60116,rw=60121,iw=60117,sw=60119,ow=60129,aw=60131;if(typeof Symbol=="function"&&Symbol.for){var Ye=Symbol.for;Ip=Ye("react.portal"),Cl=Ye("react.fragment"),Op=Ye("react.strict_mode"),Lp=Ye("react.profiler"),Dl=Ye("react.provider"),Np=Ye("react.context"),Mp=Ye("react.forward_ref"),Ul=Ye("react.suspense"),Pp=Ye("react.suspense_list"),Cp=Ye("react.memo"),Dp=Ye("react.lazy"),rw=Ye("react.block"),iw=Ye("react.fundamental"),sw=Ye("react.scope"),ow=Ye("react.debug_trace_mode"),aw=Ye("react.legacy_hidden")}function qs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cl:return"Fragment";case Ip:return"Portal";case Lp:return"Profiler";case Op:return"StrictMode";case Ul:return"Suspense";case Pp:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Np:return(e.displayName||"Context")+".Consumer";case Dl:return(e._context.displayName||"Context")+".Provider";case Mp:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case Cp:return qs(e.type);case rw:return qs(e._render);case Dp:t=e._payload,e=e._init;try{return qs(e(t))}catch{}}return null}var O3=mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lw={};function Ro(e,t){for(var n=e._threadCount|0;n<=t;n++)e[n]=e._currentValue2,e._threadCount=n+1}function L3(e,t,n,r){if(r&&(r=e.contextType,typeof r=="object"&&r!==null))return Ro(r,n),r[n];if(e=e.contextTypes){n={};for(var i in e)n[i]=t[i];t=n}else t=lw;return t}for(var Qe=new Uint16Array(16),_a=0;15>_a;_a++)Qe[_a]=_a+1;Qe[15]=0;var N3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cv=Object.prototype.hasOwnProperty,fv={},dv={};function uw(e){return cv.call(dv,e)?!0:cv.call(fv,e)?!1:N3.test(e)?dv[e]=!0:(fv[e]=!0,!1)}function M3(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P3(e,t,n,r){if(t===null||typeof t>"u"||M3(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function nt(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){qe[e]=new nt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];qe[t]=new nt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){qe[e]=new nt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){qe[e]=new nt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){qe[e]=new nt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){qe[e]=new nt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){qe[e]=new nt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){qe[e]=new nt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){qe[e]=new nt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Up=/[\-:]([a-z])/g;function Fp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Up,Fp);qe[t]=new nt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Up,Fp);qe[t]=new nt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Up,Fp);qe[t]=new nt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){qe[e]=new nt(e,1,!1,e.toLowerCase(),null,!1,!1)});qe.xlinkHref=new nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){qe[e]=new nt(e,1,!1,e.toLowerCase(),null,!0,!0)});var C3=/["'&<>]/;function mr(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var t=C3.exec(e);if(t){var n="",r,i=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}i!==r&&(n+=e.substring(i,r)),i=r+1,n+=t}e=i!==r?n+e.substring(i,r):n}return e}function D3(e,t){var n=qe.hasOwnProperty(e)?qe[e]:null,r;return(r=e!=="style")&&(r=n!==null?n.type===0:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")),r||P3(e,t,n,!1)?"":n!==null?(e=n.attributeName,r=n.type,r===3||r===4&&t===!0?e+'=""':(n.sanitizeURL&&(t=""+t),e+'="'+(mr(t)+'"'))):uw(e)?e+'="'+(mr(t)+'"'):""}function U3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var F3=typeof Object.is=="function"?Object.is:U3,en=null,Wa=null,fe=null,Ts=!1,Fl=!1,Wn=null,Cu=0;function gr(){if(en===null)throw Error(xe(321));return en}function hv(){if(0<Cu)throw Error(xe(312));return{memoizedState:null,queue:null,next:null}}function $p(){return fe===null?Wa===null?(Ts=!1,Wa=fe=hv()):(Ts=!0,fe=Wa):fe.next===null?(Ts=!1,fe=fe.next=hv()):(Ts=!0,fe=fe.next),fe}function cw(e,t,n,r){for(;Fl;)Fl=!1,Cu+=1,fe=null,n=e(t,r);return fw(),n}function fw(){en=null,Fl=!1,Wa=null,Cu=0,fe=Wn=null}function dw(e,t){return typeof t=="function"?t(e):t}function pv(e,t,n){if(en=gr(),fe=$p(),Ts){var r=fe.queue;if(t=r.dispatch,Wn!==null&&(n=Wn.get(r),n!==void 0)){Wn.delete(r),r=fe.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return fe.memoizedState=r,[r,t]}return[fe.memoizedState,t]}return e=e===dw?typeof t=="function"?t():t:n!==void 0?n(t):t,fe.memoizedState=e,e=fe.queue={last:null,dispatch:null},e=e.dispatch=$3.bind(null,en,e),[fe.memoizedState,e]}function mv(e,t){if(en=gr(),fe=$p(),t=t===void 0?null:t,fe!==null){var n=fe.memoizedState;if(n!==null&&t!==null){var r=n[1];e:if(r===null)r=!1;else{for(var i=0;i<r.length&&i<t.length;i++)if(!F3(t[i],r[i])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),fe.memoizedState=[e,t],e}function $3(e,t,n){if(!(25>Cu))throw Error(xe(301));if(e===en)if(Fl=!0,e={action:n,next:null},Wn===null&&(Wn=new Map),n=Wn.get(t),n===void 0)Wn.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}function $c(){}var xr=null,B3={readContext:function(e){var t=xr.threadID;return Ro(e,t),e[t]},useContext:function(e){gr();var t=xr.threadID;return Ro(e,t),e[t]},useMemo:mv,useReducer:pv,useRef:function(e){en=gr(),fe=$p();var t=fe.memoizedState;return t===null?(e={current:e},fe.memoizedState=e):t},useState:function(e){return pv(dw,e)},useLayoutEffect:function(){},useCallback:function(e,t){return mv(function(){return e},t)},useImperativeHandle:$c,useEffect:$c,useDebugValue:$c,useDeferredValue:function(e){return gr(),e},useTransition:function(){return gr(),[function(e){e()},!1]},useOpaqueIdentifier:function(){return(xr.identifierPrefix||"")+"R:"+(xr.uniqueID++).toString(36)},useMutableSource:function(e,t){return gr(),t(e._source)}},V3={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function W3(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var hw={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},j3=Ut({menuitem:!0},hw),Ys={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},z3=["Webkit","ms","Moz","O"];Object.keys(Ys).forEach(function(e){z3.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ys[t]=Ys[e]})});var H3=/([A-Z])/g,G3=/^ms-/,Mn=mn.Children.toArray,Bc=O3.ReactCurrentDispatcher,q3={listing:!0,pre:!0,textarea:!0},Y3=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,gv={},Vc={};function Q3(e){if(e==null)return e;var t="";return mn.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}var X3=Object.prototype.hasOwnProperty,K3={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function _v(e,t){if(e===void 0)throw Error(xe(152,qs(t)||"Component"))}function Z3(e,t,n){function r(o,a){var l=a.prototype&&a.prototype.isReactComponent,u=L3(a,t,n,l),c=[],d=!1,f={isMounted:function(){return!1},enqueueForceUpdate:function(){if(c===null)return null},enqueueReplaceState:function(y,p){d=!0,c=[p]},enqueueSetState:function(y,p){if(c===null)return null;c.push(p)}};if(l){if(l=new a(o.props,u,f),typeof a.getDerivedStateFromProps=="function"){var g=a.getDerivedStateFromProps.call(null,o.props,l.state);g!=null&&(l.state=Ut({},l.state,g))}}else if(en={},l=a(o.props,u,f),l=cw(a,o.props,l,u),l==null||l.render==null){e=l,_v(e,a);return}if(l.props=o.props,l.context=u,l.updater=f,f=l.state,f===void 0&&(l.state=f=null),typeof l.UNSAFE_componentWillMount=="function"||typeof l.componentWillMount=="function")if(typeof l.componentWillMount=="function"&&typeof a.getDerivedStateFromProps!="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&typeof a.getDerivedStateFromProps!="function"&&l.UNSAFE_componentWillMount(),c.length){f=c;var b=d;if(c=null,d=!1,b&&f.length===1)l.state=f[0];else{g=b?f[0]:l.state;var v=!0;for(b=b?1:0;b<f.length;b++){var h=f[b];h=typeof h=="function"?h.call(l,g,o.props,u):h,h!=null&&(v?(v=!1,g=Ut({},g,h)):Ut(g,h))}l.state=g}}else c=null;if(e=l.render(),_v(e,a),typeof l.getChildContext=="function"&&(o=a.childContextTypes,typeof o=="object")){var m=l.getChildContext();for(var _ in m)if(!(_ in o))throw Error(xe(108,qs(a)||"Unknown",_))}m&&(t=Ut({},t,m))}for(;mn.isValidElement(e);){var i=e,s=i.type;if(typeof s!="function")break;r(i,s)}return{child:e,context:t}}var pw=function(){function e(n,r,i){mn.isValidElement(n)?n.type!==Cl?n=[n]:(n=n.props.children,n=mn.isValidElement(n)?[n]:Mn(n)):n=Mn(n),n={type:null,domNamespace:V3.html,children:n,childIndex:0,context:lw,footer:""};var s=Qe[0];if(s===0){var o=Qe;s=o.length;var a=2*s;if(!(65536>=a))throw Error(xe(304));var l=new Uint16Array(a);for(l.set(o),Qe=l,Qe[0]=s+1,o=s;o<a-1;o++)Qe[o]=o+1;Qe[a-1]=0}else Qe[0]=Qe[s];this.threadID=s,this.stack=[n],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=r,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[],this.uniqueID=0,this.identifierPrefix=i&&i.identifierPrefix||""}var t=e.prototype;return t.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var n=this.threadID;Qe[n]=Qe[0],Qe[0]=n}},t.pushProvider=function(n){var r=++this.contextIndex,i=n.type._context,s=this.threadID;Ro(i,s);var o=i[s];this.contextStack[r]=i,this.contextValueStack[r]=o,i[s]=n.props.value},t.popProvider=function(){var n=this.contextIndex,r=this.contextStack[n],i=this.contextValueStack[n];this.contextStack[n]=null,this.contextValueStack[n]=null,this.contextIndex--,r[this.threadID]=i},t.clearProviders=function(){for(var n=this.contextIndex;0<=n;n--)this.contextStack[n][this.threadID]=this.contextValueStack[n]},t.read=function(n){if(this.exhausted)return null;var r=xr;xr=this;var i=Bc.current;Bc.current=B3;try{for(var s=[""],o=!1;s[0].length<n;){if(this.stack.length===0){this.exhausted=!0;var a=this.threadID;Qe[a]=Qe[0],Qe[0]=a;break}var l=this.stack[this.stack.length-1];if(o||l.childIndex>=l.children.length){var u=l.footer;if(u!==""&&(this.previousWasTextNode=!1),this.stack.pop(),l.type==="select")this.currentSelectValue=null;else if(l.type!=null&&l.type.type!=null&&l.type.type.$$typeof===Dl)this.popProvider(l.type);else if(l.type===Ul){this.suspenseDepth--;var c=s.pop();if(o){o=!1;var d=l.fallbackFrame;if(!d)throw Error(xe(303));this.stack.push(d),s[this.suspenseDepth]+="<!--$!-->";continue}else s[this.suspenseDepth]+=c}s[this.suspenseDepth]+=u}else{var f=l.children[l.childIndex++],g="";try{g+=this.render(f,l.context,l.domNamespace)}catch(b){throw b!=null&&typeof b.then=="function"?Error(xe(294)):b}finally{}s.length<=this.suspenseDepth&&s.push(""),s[this.suspenseDepth]+=g}}return s[0]}finally{Bc.current=i,xr=r,fw()}},t.render=function(n,r,i){if(typeof n=="string"||typeof n=="number")return i=""+n,i===""?"":this.makeStaticMarkup?mr(i):this.previousWasTextNode?"<!-- -->"+mr(i):(this.previousWasTextNode=!0,mr(i));if(r=Z3(n,r,this.threadID),n=r.child,r=r.context,n===null||n===!1)return"";if(!mn.isValidElement(n)){if(n!=null&&n.$$typeof!=null)throw i=n.$$typeof,Error(i===Ip?xe(257):xe(258,i.toString()));return n=Mn(n),this.stack.push({type:null,domNamespace:i,children:n,childIndex:0,context:r,footer:""}),""}var s=n.type;if(typeof s=="string")return this.renderDOM(n,r,i);switch(s){case aw:case ow:case Op:case Lp:case Pp:case Cl:return n=Mn(n.props.children),this.stack.push({type:null,domNamespace:i,children:n,childIndex:0,context:r,footer:""}),"";case Ul:throw Error(xe(294));case sw:throw Error(xe(343))}if(typeof s=="object"&&s!==null)switch(s.$$typeof){case Mp:en={};var o=s.render(n.props,n.ref);return o=cw(s.render,n.props,o,n.ref),o=Mn(o),this.stack.push({type:null,domNamespace:i,children:o,childIndex:0,context:r,footer:""}),"";case Cp:return n=[mn.createElement(s.type,Ut({ref:n.ref},n.props))],this.stack.push({type:null,domNamespace:i,children:n,childIndex:0,context:r,footer:""}),"";case Dl:return s=Mn(n.props.children),i={type:n,domNamespace:i,children:s,childIndex:0,context:r,footer:""},this.pushProvider(n),this.stack.push(i),"";case Np:s=n.type,o=n.props;var a=this.threadID;return Ro(s,a),s=Mn(o.children(s[a])),this.stack.push({type:n,domNamespace:i,children:s,childIndex:0,context:r,footer:""}),"";case iw:throw Error(xe(338));case Dp:return s=n.type,o=s._init,s=o(s._payload),n=[mn.createElement(s,Ut({ref:n.ref},n.props))],this.stack.push({type:null,domNamespace:i,children:n,childIndex:0,context:r,footer:""}),""}throw Error(xe(130,s==null?s:typeof s,""))},t.renderDOM=function(n,r,i){var s=n.type.toLowerCase();if(!gv.hasOwnProperty(s)){if(!Y3.test(s))throw Error(xe(65,s));gv[s]=!0}var o=n.props;if(s==="input")o=Ut({type:void 0},o,{defaultChecked:void 0,defaultValue:void 0,value:o.value!=null?o.value:o.defaultValue,checked:o.checked!=null?o.checked:o.defaultChecked});else if(s==="textarea"){var a=o.value;if(a==null){a=o.defaultValue;var l=o.children;if(l!=null){if(a!=null)throw Error(xe(92));if(Array.isArray(l)){if(!(1>=l.length))throw Error(xe(93));l=l[0]}a=""+l}a==null&&(a="")}o=Ut({},o,{value:void 0,children:""+a})}else if(s==="select")this.currentSelectValue=o.value!=null?o.value:o.defaultValue,o=Ut({},o,{value:void 0});else if(s==="option"){l=this.currentSelectValue;var u=Q3(o.children);if(l!=null){var c=o.value!=null?o.value+"":u;if(a=!1,Array.isArray(l)){for(var d=0;d<l.length;d++)if(""+l[d]===c){a=!0;break}}else a=""+l===c;o=Ut({selected:void 0,children:void 0},o,{selected:a,children:u})}}if(a=o){if(j3[s]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(xe(137,s));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(xe(60));if(!(typeof a.dangerouslySetInnerHTML=="object"&&"__html"in a.dangerouslySetInnerHTML))throw Error(xe(61))}if(a.style!=null&&typeof a.style!="object")throw Error(xe(62))}a=o,l=this.makeStaticMarkup,u=this.stack.length===1,c="<"+n.type;e:if(s.indexOf("-")===-1)d=typeof a.is=="string";else switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":d=!1;break e;default:d=!0}for(p in a)if(X3.call(a,p)){var f=a[p];if(f!=null){if(p==="style"){var g=void 0,b="",v="";for(g in f)if(f.hasOwnProperty(g)){var h=g.indexOf("--")===0,m=f[g];if(m!=null){if(h)var _=g;else if(_=g,Vc.hasOwnProperty(_))_=Vc[_];else{var y=_.replace(H3,"-$1").toLowerCase().replace(G3,"-ms-");_=Vc[_]=y}b+=v+_+":",v=g,h=m==null||typeof m=="boolean"||m===""?"":h||typeof m!="number"||m===0||Ys.hasOwnProperty(v)&&Ys[v]?(""+m).trim():m+"px",b+=h,v=";"}}f=b||null}g=null,d?K3.hasOwnProperty(p)||(g=p,g=uw(g)&&f!=null?g+'="'+(mr(f)+'"'):""):g=D3(p,f),g&&(c+=" "+g)}}l||u&&(c+=' data-reactroot=""');var p=c;a="",hw.hasOwnProperty(s)?p+="/>":(p+=">",a="</"+n.type+">");e:{if(l=o.dangerouslySetInnerHTML,l!=null){if(l.__html!=null){l=l.__html;break e}}else if(l=o.children,typeof l=="string"||typeof l=="number"){l=mr(l);break e}l=null}return l!=null?(o=[],q3.hasOwnProperty(s)&&l.charAt(0)===`
`&&(p+=`
`),p+=l):o=Mn(o.children),n=n.type,i=i==null||i==="http://www.w3.org/1999/xhtml"?W3(n):i==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":i,this.stack.push({domNamespace:i,type:s,children:o,childIndex:0,context:r,footer:a}),this.previousWasTextNode=!1,p},e}();Yi.renderToNodeStream=function(){throw Error(xe(207))};Yi.renderToStaticMarkup=function(e,t){e=new pw(e,!0,t);try{return e.read(1/0)}finally{e.destroy()}};Yi.renderToStaticNodeStream=function(){throw Error(xe(208))};Yi.renderToString=function(e,t){e=new pw(e,!1,t);try{return e.read(1/0)}finally{e.destroy()}};Yi.version="17.0.2";nw.exports=Yi;var J3=nw.exports,mw={exports:{}};(function(e){function t(n,r){if(r&&r.documentElement)n=r,r=arguments[2];else if(!n||!n.documentElement)throw new Error("First argument to Readability constructor should be a document object.");if(r=r||{},this._doc=n,this._docJSDOMParser=this._doc.firstChild.__JSDOMParser__,this._articleTitle=null,this._articleByline=null,this._articleDir=null,this._articleSiteName=null,this._attempts=[],this._debug=!!r.debug,this._maxElemsToParse=r.maxElemsToParse||this.DEFAULT_MAX_ELEMS_TO_PARSE,this._nbTopCandidates=r.nbTopCandidates||this.DEFAULT_N_TOP_CANDIDATES,this._charThreshold=r.charThreshold||this.DEFAULT_CHAR_THRESHOLD,this._classesToPreserve=this.CLASSES_TO_PRESERVE.concat(r.classesToPreserve||[]),this._keepClasses=!!r.keepClasses,this._serializer=r.serializer||function(i){return i.innerHTML},this._disableJSONLD=!!r.disableJSONLD,this._allowedVideoRegex=r.allowedVideoRegex||this.REGEXPS.videos,this._flags=this.FLAG_STRIP_UNLIKELYS|this.FLAG_WEIGHT_CLASSES|this.FLAG_CLEAN_CONDITIONALLY,this._debug){let i=function(s){if(s.nodeType==s.TEXT_NODE)return`${s.nodeName} ("${s.textContent}")`;let o=Array.from(s.attributes||[],function(a){return`${a.name}="${a.value}"`}).join(" ");return`<${s.localName} ${o}>`};this.log=function(){if(typeof console<"u"){let o=Array.from(arguments,a=>a&&a.nodeType==this.ELEMENT_NODE?i(a):a);o.unshift("Reader: (Readability)"),console.log.apply(console,o)}else if(typeof dump<"u"){var s=Array.prototype.map.call(arguments,function(o){return o&&o.nodeName?i(o):o}).join(" ");dump("Reader: (Readability) "+s+`
`)}}}else this.log=function(){}}t.prototype={FLAG_STRIP_UNLIKELYS:1,FLAG_WEIGHT_CLASSES:2,FLAG_CLEAN_CONDITIONALLY:4,ELEMENT_NODE:1,TEXT_NODE:3,DEFAULT_MAX_ELEMS_TO_PARSE:0,DEFAULT_N_TOP_CANDIDATES:5,DEFAULT_TAGS_TO_SCORE:"section,h2,h3,h4,h5,h6,p,td,pre".toUpperCase().split(","),DEFAULT_CHAR_THRESHOLD:500,REGEXPS:{unlikelyCandidates:/-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,okMaybeItsACandidate:/and|article|body|column|content|main|shadow/i,positive:/article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,negative:/-ad-|hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|foot|footer|footnote|gdpr|masthead|media|meta|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget/i,extraneous:/print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,byline:/byline|author|dateline|writtenby|p-author/i,replaceFonts:/<(\/?)font[^>]*>/gi,normalize:/\s{2,}/g,videos:/\/\/(www\.)?((dailymotion|youtube|youtube-nocookie|player\.vimeo|v\.qq)\.com|(archive|upload\.wikimedia)\.org|player\.twitch\.tv)/i,shareElements:/(\b|_)(share|sharedaddy)(\b|_)/i,nextLink:/(next|weiter|continue|>([^\|]|$)|»([^\|]|$))/i,prevLink:/(prev|earl|old|new|<|«)/i,tokenize:/\W+/g,whitespace:/^\s*$/,hasContent:/\S$/,hashUrl:/^#.+/,srcsetUrl:/(\S+)(\s+[\d.]+[xw])?(\s*(?:,|$))/g,b64DataUrl:/^data:\s*([^\s;,]+)\s*;\s*base64\s*,/i,jsonLdArticleTypes:/^Article|AdvertiserContentArticle|NewsArticle|AnalysisNewsArticle|AskPublicNewsArticle|BackgroundNewsArticle|OpinionNewsArticle|ReportageNewsArticle|ReviewNewsArticle|Report|SatiricalArticle|ScholarlyArticle|MedicalScholarlyArticle|SocialMediaPosting|BlogPosting|LiveBlogPosting|DiscussionForumPosting|TechArticle|APIReference$/},UNLIKELY_ROLES:["menu","menubar","complementary","navigation","alert","alertdialog","dialog"],DIV_TO_P_ELEMS:new Set(["BLOCKQUOTE","DL","DIV","IMG","OL","P","PRE","TABLE","UL"]),ALTER_TO_DIV_EXCEPTIONS:["DIV","ARTICLE","SECTION","P"],PRESENTATIONAL_ATTRIBUTES:["align","background","bgcolor","border","cellpadding","cellspacing","frame","hspace","rules","style","valign","vspace"],DEPRECATED_SIZE_ATTRIBUTE_ELEMS:["TABLE","TH","TD","HR","PRE"],PHRASING_ELEMS:["ABBR","AUDIO","B","BDO","BR","BUTTON","CITE","CODE","DATA","DATALIST","DFN","EM","EMBED","I","IMG","INPUT","KBD","LABEL","MARK","MATH","METER","NOSCRIPT","OBJECT","OUTPUT","PROGRESS","Q","RUBY","SAMP","SCRIPT","SELECT","SMALL","SPAN","STRONG","SUB","SUP","TEXTAREA","TIME","VAR","WBR"],CLASSES_TO_PRESERVE:["page"],HTML_ESCAPE_MAP:{lt:"<",gt:">",amp:"&",quot:'"',apos:"'"},_postProcessContent:function(n){this._fixRelativeUris(n),this._simplifyNestedElements(n),this._keepClasses||this._cleanClasses(n)},_removeNodes:function(n,r){if(this._docJSDOMParser&&n._isLiveNodeList)throw new Error("Do not pass live node lists to _removeNodes");for(var i=n.length-1;i>=0;i--){var s=n[i],o=s.parentNode;o&&(!r||r.call(this,s,i,n))&&o.removeChild(s)}},_replaceNodeTags:function(n,r){if(this._docJSDOMParser&&n._isLiveNodeList)throw new Error("Do not pass live node lists to _replaceNodeTags");for(const i of n)this._setNodeTag(i,r)},_forEachNode:function(n,r){Array.prototype.forEach.call(n,r,this)},_findNode:function(n,r){return Array.prototype.find.call(n,r,this)},_someNode:function(n,r){return Array.prototype.some.call(n,r,this)},_everyNode:function(n,r){return Array.prototype.every.call(n,r,this)},_concatNodeLists:function(){var n=Array.prototype.slice,r=n.call(arguments),i=r.map(function(s){return n.call(s)});return Array.prototype.concat.apply([],i)},_getAllNodesWithTag:function(n,r){return n.querySelectorAll?n.querySelectorAll(r.join(",")):[].concat.apply([],r.map(function(i){var s=n.getElementsByTagName(i);return Array.isArray(s)?s:Array.from(s)}))},_cleanClasses:function(n){var r=this._classesToPreserve,i=(n.getAttribute("class")||"").split(/\s+/).filter(function(s){return r.indexOf(s)!=-1}).join(" ");for(i?n.setAttribute("class",i):n.removeAttribute("class"),n=n.firstElementChild;n;n=n.nextElementSibling)this._cleanClasses(n)},_fixRelativeUris:function(n){var r=this._doc.baseURI,i=this._doc.documentURI;function s(l){if(r==i&&l.charAt(0)=="#")return l;try{return new URL(l,r).href}catch{}return l}var o=this._getAllNodesWithTag(n,["a"]);this._forEachNode(o,function(l){var u=l.getAttribute("href");if(u)if(u.indexOf("javascript:")===0)if(l.childNodes.length===1&&l.childNodes[0].nodeType===this.TEXT_NODE){var c=this._doc.createTextNode(l.textContent);l.parentNode.replaceChild(c,l)}else{for(var d=this._doc.createElement("span");l.firstChild;)d.appendChild(l.firstChild);l.parentNode.replaceChild(d,l)}else l.setAttribute("href",s(u))});var a=this._getAllNodesWithTag(n,["img","picture","figure","video","audio","source"]);this._forEachNode(a,function(l){var u=l.getAttribute("src"),c=l.getAttribute("poster"),d=l.getAttribute("srcset");if(u&&l.setAttribute("src",s(u)),c&&l.setAttribute("poster",s(c)),d){var f=d.replace(this.REGEXPS.srcsetUrl,function(g,b,v,h){return s(b)+(v||"")+h});l.setAttribute("srcset",f)}})},_simplifyNestedElements:function(n){for(var r=n;r;){if(r.parentNode&&["DIV","SECTION"].includes(r.tagName)&&!(r.id&&r.id.startsWith("readability"))){if(this._isElementWithoutContent(r)){r=this._removeAndGetNext(r);continue}else if(this._hasSingleTagInsideElement(r,"DIV")||this._hasSingleTagInsideElement(r,"SECTION")){for(var i=r.children[0],s=0;s<r.attributes.length;s++)i.setAttribute(r.attributes[s].name,r.attributes[s].value);r.parentNode.replaceChild(i,r),r=i;continue}}r=this._getNextNode(r)}},_getArticleTitle:function(){var n=this._doc,r="",i="";try{r=i=n.title.trim(),typeof r!="string"&&(r=i=this._getInnerText(n.getElementsByTagName("title")[0]))}catch{}var s=!1;function o(f){return f.split(/\s+/).length}if(/ [\|\-\\\/>»] /.test(r))s=/ [\\\/>»] /.test(r),r=i.replace(/(.*)[\|\-\\\/>»] .*/gi,"$1"),o(r)<3&&(r=i.replace(/[^\|\-\\\/>»]*[\|\-\\\/>»](.*)/gi,"$1"));else if(r.indexOf(": ")!==-1){var a=this._concatNodeLists(n.getElementsByTagName("h1"),n.getElementsByTagName("h2")),l=r.trim(),u=this._someNode(a,function(f){return f.textContent.trim()===l});u||(r=i.substring(i.lastIndexOf(":")+1),o(r)<3?r=i.substring(i.indexOf(":")+1):o(i.substr(0,i.indexOf(":")))>5&&(r=i))}else if(r.length>150||r.length<15){var c=n.getElementsByTagName("h1");c.length===1&&(r=this._getInnerText(c[0]))}r=r.trim().replace(this.REGEXPS.normalize," ");var d=o(r);return d<=4&&(!s||d!=o(i.replace(/[\|\-\\\/>»]+/g,""))-1)&&(r=i),r},_prepDocument:function(){var n=this._doc;this._removeNodes(this._getAllNodesWithTag(n,["style"])),n.body&&this._replaceBrs(n.body),this._replaceNodeTags(this._getAllNodesWithTag(n,["font"]),"SPAN")},_nextNode:function(n){for(var r=n;r&&r.nodeType!=this.ELEMENT_NODE&&this.REGEXPS.whitespace.test(r.textContent);)r=r.nextSibling;return r},_replaceBrs:function(n){this._forEachNode(this._getAllNodesWithTag(n,["br"]),function(r){for(var i=r.nextSibling,s=!1;(i=this._nextNode(i))&&i.tagName=="BR";){s=!0;var o=i.nextSibling;i.parentNode.removeChild(i),i=o}if(s){var a=this._doc.createElement("p");for(r.parentNode.replaceChild(a,r),i=a.nextSibling;i;){if(i.tagName=="BR"){var l=this._nextNode(i.nextSibling);if(l&&l.tagName=="BR")break}if(!this._isPhrasingContent(i))break;var u=i.nextSibling;a.appendChild(i),i=u}for(;a.lastChild&&this._isWhitespace(a.lastChild);)a.removeChild(a.lastChild);a.parentNode.tagName==="P"&&this._setNodeTag(a.parentNode,"DIV")}})},_setNodeTag:function(n,r){if(this.log("_setNodeTag",n,r),this._docJSDOMParser)return n.localName=r.toLowerCase(),n.tagName=r.toUpperCase(),n;for(var i=n.ownerDocument.createElement(r);n.firstChild;)i.appendChild(n.firstChild);n.parentNode.replaceChild(i,n),n.readability&&(i.readability=n.readability);for(var s=0;s<n.attributes.length;s++)try{i.setAttribute(n.attributes[s].name,n.attributes[s].value)}catch{}return i},_prepArticle:function(n){this._cleanStyles(n),this._markDataTables(n),this._fixLazyImages(n),this._cleanConditionally(n,"form"),this._cleanConditionally(n,"fieldset"),this._clean(n,"object"),this._clean(n,"embed"),this._clean(n,"footer"),this._clean(n,"link"),this._clean(n,"aside");var r=this.DEFAULT_CHAR_THRESHOLD;this._forEachNode(n.children,function(i){this._cleanMatchedNodes(i,function(s,o){return this.REGEXPS.shareElements.test(o)&&s.textContent.length<r})}),this._clean(n,"iframe"),this._clean(n,"input"),this._clean(n,"textarea"),this._clean(n,"select"),this._clean(n,"button"),this._cleanHeaders(n),this._cleanConditionally(n,"table"),this._cleanConditionally(n,"ul"),this._cleanConditionally(n,"div"),this._replaceNodeTags(this._getAllNodesWithTag(n,["h1"]),"h2"),this._removeNodes(this._getAllNodesWithTag(n,["p"]),function(i){var s=i.getElementsByTagName("img").length,o=i.getElementsByTagName("embed").length,a=i.getElementsByTagName("object").length,l=i.getElementsByTagName("iframe").length,u=s+o+a+l;return u===0&&!this._getInnerText(i,!1)}),this._forEachNode(this._getAllNodesWithTag(n,["br"]),function(i){var s=this._nextNode(i.nextSibling);s&&s.tagName=="P"&&i.parentNode.removeChild(i)}),this._forEachNode(this._getAllNodesWithTag(n,["table"]),function(i){var s=this._hasSingleTagInsideElement(i,"TBODY")?i.firstElementChild:i;if(this._hasSingleTagInsideElement(s,"TR")){var o=s.firstElementChild;if(this._hasSingleTagInsideElement(o,"TD")){var a=o.firstElementChild;a=this._setNodeTag(a,this._everyNode(a.childNodes,this._isPhrasingContent)?"P":"DIV"),i.parentNode.replaceChild(a,i)}}})},_initializeNode:function(n){switch(n.readability={contentScore:0},n.tagName){case"DIV":n.readability.contentScore+=5;break;case"PRE":case"TD":case"BLOCKQUOTE":n.readability.contentScore+=3;break;case"ADDRESS":case"OL":case"UL":case"DL":case"DD":case"DT":case"LI":case"FORM":n.readability.contentScore-=3;break;case"H1":case"H2":case"H3":case"H4":case"H5":case"H6":case"TH":n.readability.contentScore-=5;break}n.readability.contentScore+=this._getClassWeight(n)},_removeAndGetNext:function(n){var r=this._getNextNode(n,!0);return n.parentNode.removeChild(n),r},_getNextNode:function(n,r){if(!r&&n.firstElementChild)return n.firstElementChild;if(n.nextElementSibling)return n.nextElementSibling;do n=n.parentNode;while(n&&!n.nextElementSibling);return n&&n.nextElementSibling},_textSimilarity:function(n,r){var i=n.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean),s=r.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);if(!i.length||!s.length)return 0;var o=s.filter(l=>!i.includes(l)),a=o.join(" ").length/s.join(" ").length;return 1-a},_checkByline:function(n,r){if(this._articleByline)return!1;if(n.getAttribute!==void 0)var i=n.getAttribute("rel"),s=n.getAttribute("itemprop");return(i==="author"||s&&s.indexOf("author")!==-1||this.REGEXPS.byline.test(r))&&this._isValidByline(n.textContent)?(this._articleByline=n.textContent.trim(),!0):!1},_getNodeAncestors:function(n,r){r=r||0;for(var i=0,s=[];n.parentNode&&(s.push(n.parentNode),!(r&&++i===r));)n=n.parentNode;return s},_grabArticle:function(n){this.log("**** grabArticle ****");var r=this._doc,i=n!==null;if(n=n||this._doc.body,!n)return this.log("No body found in document. Abort."),null;for(var s=n.innerHTML;;){this.log("Starting grabArticle loop");var o=this._flagIsActive(this.FLAG_STRIP_UNLIKELYS),a=[],l=this._doc.documentElement;let lr=!0;for(;l;){l.tagName==="HTML"&&(this._articleLang=l.getAttribute("lang"));var u=l.className+" "+l.id;if(!this._isProbablyVisible(l)){this.log("Removing hidden node - "+u),l=this._removeAndGetNext(l);continue}if(l.getAttribute("aria-modal")=="true"&&l.getAttribute("role")=="dialog"){l=this._removeAndGetNext(l);continue}if(this._checkByline(l,u)){l=this._removeAndGetNext(l);continue}if(lr&&this._headerDuplicatesTitle(l)){this.log("Removing header: ",l.textContent.trim(),this._articleTitle.trim()),lr=!1,l=this._removeAndGetNext(l);continue}if(o){if(this.REGEXPS.unlikelyCandidates.test(u)&&!this.REGEXPS.okMaybeItsACandidate.test(u)&&!this._hasAncestorTag(l,"table")&&!this._hasAncestorTag(l,"code")&&l.tagName!=="BODY"&&l.tagName!=="A"){this.log("Removing unlikely candidate - "+u),l=this._removeAndGetNext(l);continue}if(this.UNLIKELY_ROLES.includes(l.getAttribute("role"))){this.log("Removing content with role "+l.getAttribute("role")+" - "+u),l=this._removeAndGetNext(l);continue}}if((l.tagName==="DIV"||l.tagName==="SECTION"||l.tagName==="HEADER"||l.tagName==="H1"||l.tagName==="H2"||l.tagName==="H3"||l.tagName==="H4"||l.tagName==="H5"||l.tagName==="H6")&&this._isElementWithoutContent(l)){l=this._removeAndGetNext(l);continue}if(this.DEFAULT_TAGS_TO_SCORE.indexOf(l.tagName)!==-1&&a.push(l),l.tagName==="DIV"){for(var c=null,d=l.firstChild;d;){var f=d.nextSibling;if(this._isPhrasingContent(d))c!==null?c.appendChild(d):this._isWhitespace(d)||(c=r.createElement("p"),l.replaceChild(c,d),c.appendChild(d));else if(c!==null){for(;c.lastChild&&this._isWhitespace(c.lastChild);)c.removeChild(c.lastChild);c=null}d=f}if(this._hasSingleTagInsideElement(l,"P")&&this._getLinkDensity(l)<.25){var g=l.children[0];l.parentNode.replaceChild(g,l),l=g,a.push(l)}else this._hasChildBlockElement(l)||(l=this._setNodeTag(l,"P"),a.push(l))}l=this._getNextNode(l)}var b=[];this._forEachNode(a,function(rn){if(!(!rn.parentNode||typeof rn.parentNode.tagName>"u")){var Tn=this._getInnerText(rn);if(!(Tn.length<25)){var Bp=this._getNodeAncestors(rn,5);if(Bp.length!==0){var Bo=0;Bo+=1,Bo+=Tn.split(",").length,Bo+=Math.min(Math.floor(Tn.length/100),3),this._forEachNode(Bp,function(ur,Du){if(!(!ur.tagName||!ur.parentNode||typeof ur.parentNode.tagName>"u")){if(typeof ur.readability>"u"&&(this._initializeNode(ur),b.push(ur)),Du===0)var Uu=1;else Du===1?Uu=2:Uu=Du*3;ur.readability.contentScore+=Bo/Uu}})}}}});for(var v=[],h=0,m=b.length;h<m;h+=1){var _=b[h],y=_.readability.contentScore*(1-this._getLinkDensity(_));_.readability.contentScore=y,this.log("Candidate:",_,"with score "+y);for(var p=0;p<this._nbTopCandidates;p++){var S=v[p];if(!S||y>S.readability.contentScore){v.splice(p,0,_),v.length>this._nbTopCandidates&&v.pop();break}}}var w=v[0]||null,E=!1,x;if(w===null||w.tagName==="BODY"){for(w=r.createElement("DIV"),E=!0;n.firstChild;)this.log("Moving child out:",n.firstChild),w.appendChild(n.firstChild);n.appendChild(w),this._initializeNode(w)}else if(w){for(var k=[],A=1;A<v.length;A++)v[A].readability.contentScore/w.readability.contentScore>=.75&&k.push(this._getNodeAncestors(v[A]));var Y=3;if(k.length>=Y)for(x=w.parentNode;x.tagName!=="BODY";){for(var z=0,C=0;C<k.length&&z<Y;C++)z+=Number(k[C].includes(x));if(z>=Y){w=x;break}x=x.parentNode}w.readability||this._initializeNode(w),x=w.parentNode;for(var L=w.readability.contentScore,P=L/3;x.tagName!=="BODY";){if(!x.readability){x=x.parentNode;continue}var j=x.readability.contentScore;if(j<P)break;if(j>L){w=x;break}L=x.readability.contentScore,x=x.parentNode}for(x=w.parentNode;x.tagName!="BODY"&&x.children.length==1;)w=x,x=w.parentNode;w.readability||this._initializeNode(w)}var N=r.createElement("DIV");i&&(N.id="readability-content");var H=Math.max(10,w.readability.contentScore*.2);x=w.parentNode;for(var G=x.children,Q=0,I=G.length;Q<I;Q++){var M=G[Q],F=!1;if(this.log("Looking at sibling node:",M,M.readability?"with score "+M.readability.contentScore:""),this.log("Sibling has score",M.readability?M.readability.contentScore:"Unknown"),M===w)F=!0;else{var B=0;if(M.className===w.className&&w.className!==""&&(B+=w.readability.contentScore*.2),M.readability&&M.readability.contentScore+B>=H)F=!0;else if(M.nodeName==="P"){var J=this._getLinkDensity(M),Se=this._getInnerText(M),Ee=Se.length;(Ee>80&&J<.25||Ee<80&&Ee>0&&J===0&&Se.search(/\.( |$)/)!==-1)&&(F=!0)}}F&&(this.log("Appending node:",M),this.ALTER_TO_DIV_EXCEPTIONS.indexOf(M.nodeName)===-1&&(this.log("Altering sibling:",M,"to div."),M=this._setNodeTag(M,"DIV")),N.appendChild(M),G=x.children,Q-=1,I-=1)}if(this._debug&&this.log("Article content pre-prep: "+N.innerHTML),this._prepArticle(N),this._debug&&this.log("Article content post-prep: "+N.innerHTML),E)w.id="readability-page-1",w.className="page";else{var Be=r.createElement("DIV");for(Be.id="readability-page-1",Be.className="page";N.firstChild;)Be.appendChild(N.firstChild);N.appendChild(Be)}this._debug&&this.log("Article content after paging: "+N.innerHTML);var he=!0,rt=this._getInnerText(N,!0).length;if(rt<this._charThreshold)if(he=!1,n.innerHTML=s,this._flagIsActive(this.FLAG_STRIP_UNLIKELYS))this._removeFlag(this.FLAG_STRIP_UNLIKELYS),this._attempts.push({articleContent:N,textLength:rt});else if(this._flagIsActive(this.FLAG_WEIGHT_CLASSES))this._removeFlag(this.FLAG_WEIGHT_CLASSES),this._attempts.push({articleContent:N,textLength:rt});else if(this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY))this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY),this._attempts.push({articleContent:N,textLength:rt});else{if(this._attempts.push({articleContent:N,textLength:rt}),this._attempts.sort(function(rn,Tn){return Tn.textLength-rn.textLength}),!this._attempts[0].textLength)return null;N=this._attempts[0].articleContent,he=!0}if(he){var Qi=[x,w].concat(this._getNodeAncestors(x));return this._someNode(Qi,function(rn){if(!rn.tagName)return!1;var Tn=rn.getAttribute("dir");return Tn?(this._articleDir=Tn,!0):!1}),N}}},_isValidByline:function(n){return typeof n=="string"||n instanceof String?(n=n.trim(),n.length>0&&n.length<100):!1},_unescapeHtmlEntities:function(n){if(!n)return n;var r=this.HTML_ESCAPE_MAP;return n.replace(/&(quot|amp|apos|lt|gt);/g,function(i,s){return r[s]}).replace(/&#(?:x([0-9a-z]{1,4})|([0-9]{1,4}));/gi,function(i,s,o){var a=parseInt(s||o,s?16:10);return String.fromCharCode(a)})},_getJSONLD:function(n){var r=this._getAllNodesWithTag(n,["script"]),i;return this._forEachNode(r,function(s){if(!i&&s.getAttribute("type")==="application/ld+json")try{var o=s.textContent.replace(/^\s*<!\[CDATA\[|\]\]>\s*$/g,""),a=JSON.parse(o);if(!a["@context"]||!a["@context"].match(/^https?\:\/\/schema\.org$/)||(!a["@type"]&&Array.isArray(a["@graph"])&&(a=a["@graph"].find(function(d){return(d["@type"]||"").match(this.REGEXPS.jsonLdArticleTypes)})),!a||!a["@type"]||!a["@type"].match(this.REGEXPS.jsonLdArticleTypes)))return;if(i={},typeof a.name=="string"&&typeof a.headline=="string"&&a.name!==a.headline){var l=this._getArticleTitle(),u=this._textSimilarity(a.name,l)>.75,c=this._textSimilarity(a.headline,l)>.75;c&&!u?i.title=a.headline:i.title=a.name}else typeof a.name=="string"?i.title=a.name.trim():typeof a.headline=="string"&&(i.title=a.headline.trim());a.author&&(typeof a.author.name=="string"?i.byline=a.author.name.trim():Array.isArray(a.author)&&a.author[0]&&typeof a.author[0].name=="string"&&(i.byline=a.author.filter(function(d){return d&&typeof d.name=="string"}).map(function(d){return d.name.trim()}).join(", "))),typeof a.description=="string"&&(i.excerpt=a.description.trim()),a.publisher&&typeof a.publisher.name=="string"&&(i.siteName=a.publisher.name.trim());return}catch(d){this.log(d.message)}}),i||{}},_getArticleMetadata:function(n){var r={},i={},s=this._doc.getElementsByTagName("meta"),o=/\s*(dc|dcterm|og|twitter)\s*:\s*(author|creator|description|title|site_name)\s*/gi,a=/^\s*(?:(dc|dcterm|og|twitter|weibo:(article|webpage))\s*[\.:]\s*)?(author|creator|description|title|site_name)\s*$/i;return this._forEachNode(s,function(l){var u=l.getAttribute("name"),c=l.getAttribute("property"),d=l.getAttribute("content");if(d){var f=null,g=null;c&&(f=c.match(o),f&&(g=f[0].toLowerCase().replace(/\s/g,""),i[g]=d.trim())),!f&&u&&a.test(u)&&(g=u,d&&(g=g.toLowerCase().replace(/\s/g,"").replace(/\./g,":"),i[g]=d.trim()))}}),r.title=n.title||i["dc:title"]||i["dcterm:title"]||i["og:title"]||i["weibo:article:title"]||i["weibo:webpage:title"]||i.title||i["twitter:title"],r.title||(r.title=this._getArticleTitle()),r.byline=n.byline||i["dc:creator"]||i["dcterm:creator"]||i.author,r.excerpt=n.excerpt||i["dc:description"]||i["dcterm:description"]||i["og:description"]||i["weibo:article:description"]||i["weibo:webpage:description"]||i.description||i["twitter:description"],r.siteName=n.siteName||i["og:site_name"],r.title=this._unescapeHtmlEntities(r.title),r.byline=this._unescapeHtmlEntities(r.byline),r.excerpt=this._unescapeHtmlEntities(r.excerpt),r.siteName=this._unescapeHtmlEntities(r.siteName),r},_isSingleImage:function(n){return n.tagName==="IMG"?!0:n.children.length!==1||n.textContent.trim()!==""?!1:this._isSingleImage(n.children[0])},_unwrapNoscriptImages:function(n){var r=Array.from(n.getElementsByTagName("img"));this._forEachNode(r,function(s){for(var o=0;o<s.attributes.length;o++){var a=s.attributes[o];switch(a.name){case"src":case"srcset":case"data-src":case"data-srcset":return}if(/\.(jpg|jpeg|png|webp)/i.test(a.value))return}s.parentNode.removeChild(s)});var i=Array.from(n.getElementsByTagName("noscript"));this._forEachNode(i,function(s){var o=n.createElement("div");if(o.innerHTML=s.innerHTML,!!this._isSingleImage(o)){var a=s.previousElementSibling;if(a&&this._isSingleImage(a)){var l=a;l.tagName!=="IMG"&&(l=a.getElementsByTagName("img")[0]);for(var u=o.getElementsByTagName("img")[0],c=0;c<l.attributes.length;c++){var d=l.attributes[c];if(d.value!==""&&(d.name==="src"||d.name==="srcset"||/\.(jpg|jpeg|png|webp)/i.test(d.value))){if(u.getAttribute(d.name)===d.value)continue;var f=d.name;u.hasAttribute(f)&&(f="data-old-"+f),u.setAttribute(f,d.value)}}s.parentNode.replaceChild(o.firstElementChild,a)}}})},_removeScripts:function(n){this._removeNodes(this._getAllNodesWithTag(n,["script","noscript"]))},_hasSingleTagInsideElement:function(n,r){return n.children.length!=1||n.children[0].tagName!==r?!1:!this._someNode(n.childNodes,function(i){return i.nodeType===this.TEXT_NODE&&this.REGEXPS.hasContent.test(i.textContent)})},_isElementWithoutContent:function(n){return n.nodeType===this.ELEMENT_NODE&&n.textContent.trim().length==0&&(n.children.length==0||n.children.length==n.getElementsByTagName("br").length+n.getElementsByTagName("hr").length)},_hasChildBlockElement:function(n){return this._someNode(n.childNodes,function(r){return this.DIV_TO_P_ELEMS.has(r.tagName)||this._hasChildBlockElement(r)})},_isPhrasingContent:function(n){return n.nodeType===this.TEXT_NODE||this.PHRASING_ELEMS.indexOf(n.tagName)!==-1||(n.tagName==="A"||n.tagName==="DEL"||n.tagName==="INS")&&this._everyNode(n.childNodes,this._isPhrasingContent)},_isWhitespace:function(n){return n.nodeType===this.TEXT_NODE&&n.textContent.trim().length===0||n.nodeType===this.ELEMENT_NODE&&n.tagName==="BR"},_getInnerText:function(n,r){r=typeof r>"u"?!0:r;var i=n.textContent.trim();return r?i.replace(this.REGEXPS.normalize," "):i},_getCharCount:function(n,r){return r=r||",",this._getInnerText(n).split(r).length-1},_cleanStyles:function(n){if(!(!n||n.tagName.toLowerCase()==="svg")){for(var r=0;r<this.PRESENTATIONAL_ATTRIBUTES.length;r++)n.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[r]);this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.indexOf(n.tagName)!==-1&&(n.removeAttribute("width"),n.removeAttribute("height"));for(var i=n.firstElementChild;i!==null;)this._cleanStyles(i),i=i.nextElementSibling}},_getLinkDensity:function(n){var r=this._getInnerText(n).length;if(r===0)return 0;var i=0;return this._forEachNode(n.getElementsByTagName("a"),function(s){var o=s.getAttribute("href"),a=o&&this.REGEXPS.hashUrl.test(o)?.3:1;i+=this._getInnerText(s).length*a}),i/r},_getClassWeight:function(n){if(!this._flagIsActive(this.FLAG_WEIGHT_CLASSES))return 0;var r=0;return typeof n.className=="string"&&n.className!==""&&(this.REGEXPS.negative.test(n.className)&&(r-=25),this.REGEXPS.positive.test(n.className)&&(r+=25)),typeof n.id=="string"&&n.id!==""&&(this.REGEXPS.negative.test(n.id)&&(r-=25),this.REGEXPS.positive.test(n.id)&&(r+=25)),r},_clean:function(n,r){var i=["object","embed","iframe"].indexOf(r)!==-1;this._removeNodes(this._getAllNodesWithTag(n,[r]),function(s){if(i){for(var o=0;o<s.attributes.length;o++)if(this._allowedVideoRegex.test(s.attributes[o].value))return!1;if(s.tagName==="object"&&this._allowedVideoRegex.test(s.innerHTML))return!1}return!0})},_hasAncestorTag:function(n,r,i,s){i=i||3,r=r.toUpperCase();for(var o=0;n.parentNode;){if(i>0&&o>i)return!1;if(n.parentNode.tagName===r&&(!s||s(n.parentNode)))return!0;n=n.parentNode,o++}return!1},_getRowAndColumnCount:function(n){for(var r=0,i=0,s=n.getElementsByTagName("tr"),o=0;o<s.length;o++){var a=s[o].getAttribute("rowspan")||0;a&&(a=parseInt(a,10)),r+=a||1;for(var l=0,u=s[o].getElementsByTagName("td"),c=0;c<u.length;c++){var d=u[c].getAttribute("colspan")||0;d&&(d=parseInt(d,10)),l+=d||1}i=Math.max(i,l)}return{rows:r,columns:i}},_markDataTables:function(n){for(var r=n.getElementsByTagName("table"),i=0;i<r.length;i++){var s=r[i],o=s.getAttribute("role");if(o=="presentation"){s._readabilityDataTable=!1;continue}var a=s.getAttribute("datatable");if(a=="0"){s._readabilityDataTable=!1;continue}var l=s.getAttribute("summary");if(l){s._readabilityDataTable=!0;continue}var u=s.getElementsByTagName("caption")[0];if(u&&u.childNodes.length>0){s._readabilityDataTable=!0;continue}var c=["col","colgroup","tfoot","thead","th"],d=function(g){return!!s.getElementsByTagName(g)[0]};if(c.some(d)){this.log("Data table because found data-y descendant"),s._readabilityDataTable=!0;continue}if(s.getElementsByTagName("table")[0]){s._readabilityDataTable=!1;continue}var f=this._getRowAndColumnCount(s);if(f.rows>=10||f.columns>4){s._readabilityDataTable=!0;continue}s._readabilityDataTable=f.rows*f.columns>10}},_fixLazyImages:function(n){this._forEachNode(this._getAllNodesWithTag(n,["img","picture","figure"]),function(r){if(r.src&&this.REGEXPS.b64DataUrl.test(r.src)){var i=this.REGEXPS.b64DataUrl.exec(r.src);if(i[1]==="image/svg+xml")return;for(var s=!1,o=0;o<r.attributes.length;o++){var a=r.attributes[o];if(a.name!=="src"&&/\.(jpg|jpeg|png|webp)/i.test(a.value)){s=!0;break}}if(s){var l=r.src.search(/base64\s*/i)+7,u=r.src.length-l;u<133&&r.removeAttribute("src")}}if(!((r.src||r.srcset&&r.srcset!="null")&&r.className.toLowerCase().indexOf("lazy")===-1)){for(var c=0;c<r.attributes.length;c++)if(a=r.attributes[c],!(a.name==="src"||a.name==="srcset"||a.name==="alt")){var d=null;if(/\.(jpg|jpeg|png|webp)\s+\d/.test(a.value)?d="srcset":/^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/.test(a.value)&&(d="src"),d){if(r.tagName==="IMG"||r.tagName==="PICTURE")r.setAttribute(d,a.value);else if(r.tagName==="FIGURE"&&!this._getAllNodesWithTag(r,["img","picture"]).length){var f=this._doc.createElement("img");f.setAttribute(d,a.value),r.appendChild(f)}}}}})},_getTextDensity:function(n,r){var i=this._getInnerText(n,!0).length;if(i===0)return 0;var s=0,o=this._getAllNodesWithTag(n,r);return this._forEachNode(o,a=>s+=this._getInnerText(a,!0).length),s/i},_cleanConditionally:function(n,r){this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)&&this._removeNodes(this._getAllNodesWithTag(n,[r]),function(i){var s=function(x){return x._readabilityDataTable},o=r==="ul"||r==="ol";if(!o){var a=0,l=this._getAllNodesWithTag(i,["ul","ol"]);this._forEachNode(l,x=>a+=this._getInnerText(x).length),o=a/this._getInnerText(i).length>.9}if(r==="table"&&s(i)||this._hasAncestorTag(i,"table",-1,s)||this._hasAncestorTag(i,"code"))return!1;var u=this._getClassWeight(i);this.log("Cleaning Conditionally",i);var c=0;if(u+c<0)return!0;if(this._getCharCount(i,",")<10){for(var d=i.getElementsByTagName("p").length,f=i.getElementsByTagName("img").length,g=i.getElementsByTagName("li").length-100,b=i.getElementsByTagName("input").length,v=this._getTextDensity(i,["h1","h2","h3","h4","h5","h6"]),h=0,m=this._getAllNodesWithTag(i,["object","embed","iframe"]),_=0;_<m.length;_++){for(var y=0;y<m[_].attributes.length;y++)if(this._allowedVideoRegex.test(m[_].attributes[y].value))return!1;if(m[_].tagName==="object"&&this._allowedVideoRegex.test(m[_].innerHTML))return!1;h++}var p=this._getLinkDensity(i),S=this._getInnerText(i).length,w=f>1&&d/f<.5&&!this._hasAncestorTag(i,"figure")||!o&&g>d||b>Math.floor(d/3)||!o&&v<.9&&S<25&&(f===0||f>2)&&!this._hasAncestorTag(i,"figure")||!o&&u<25&&p>.2||u>=25&&p>.5||h===1&&S<75||h>1;if(o&&w){for(var E=0;E<i.children.length;E++)if(i.children[E].children.length>1)return w;let x=i.getElementsByTagName("li").length;if(f==x)return!1}return w}return!1})},_cleanMatchedNodes:function(n,r){for(var i=this._getNextNode(n,!0),s=this._getNextNode(n);s&&s!=i;)r.call(this,s,s.className+" "+s.id)?s=this._removeAndGetNext(s):s=this._getNextNode(s)},_cleanHeaders:function(n){let r=this._getAllNodesWithTag(n,["h1","h2"]);this._removeNodes(r,function(i){let s=this._getClassWeight(i)<0;return s&&this.log("Removing header with low class weight:",i),s})},_headerDuplicatesTitle:function(n){if(n.tagName!="H1"&&n.tagName!="H2")return!1;var r=this._getInnerText(n,!1);return this.log("Evaluating similarity of header:",r,this._articleTitle),this._textSimilarity(this._articleTitle,r)>.75},_flagIsActive:function(n){return(this._flags&n)>0},_removeFlag:function(n){this._flags=this._flags&~n},_isProbablyVisible:function(n){return(!n.style||n.style.display!="none")&&!n.hasAttribute("hidden")&&(!n.hasAttribute("aria-hidden")||n.getAttribute("aria-hidden")!="true"||n.className&&n.className.indexOf&&n.className.indexOf("fallback-image")!==-1)},parse:function(){if(this._maxElemsToParse>0){var n=this._doc.getElementsByTagName("*").length;if(n>this._maxElemsToParse)throw new Error("Aborting parsing document; "+n+" elements found")}this._unwrapNoscriptImages(this._doc);var r=this._disableJSONLD?{}:this._getJSONLD(this._doc);this._removeScripts(this._doc),this._prepDocument();var i=this._getArticleMetadata(r);this._articleTitle=i.title;var s=this._grabArticle();if(!s)return null;if(this.log("Grabbed: "+s.innerHTML),this._postProcessContent(s),!i.excerpt){var o=s.getElementsByTagName("p");o.length>0&&(i.excerpt=o[0].textContent.trim())}var a=s.textContent;return{title:this._articleTitle,byline:i.byline||this._articleByline,dir:this._articleDir,lang:this._articleLang,content:this._serializer(s),textContent:a,length:a.length,excerpt:i.excerpt,siteName:i.siteName||this._articleSiteName}}},e.exports=t})(mw);var eU=mw.exports,gw={exports:{}};(function(e){var t={unlikelyCandidates:/-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,okMaybeItsACandidate:/and|article|body|column|content|main|shadow/i};function n(i){return(!i.style||i.style.display!="none")&&!i.hasAttribute("hidden")&&(!i.hasAttribute("aria-hidden")||i.getAttribute("aria-hidden")!="true"||i.className&&i.className.indexOf&&i.className.indexOf("fallback-image")!==-1)}function r(i,s={}){typeof s=="function"&&(s={visibilityChecker:s});var o={minScore:20,minContentLength:140,visibilityChecker:n};s=Object.assign(o,s);var a=i.querySelectorAll("p, pre, article"),l=i.querySelectorAll("div > br");if(l.length){var u=new Set(a);[].forEach.call(l,function(d){u.add(d.parentNode)}),a=Array.from(u)}var c=0;return[].some.call(a,function(d){if(!s.visibilityChecker(d))return!1;var f=d.className+" "+d.id;if(t.unlikelyCandidates.test(f)&&!t.okMaybeItsACandidate.test(f)||d.matches("li p"))return!1;var g=d.textContent.trim().length;return g<s.minContentLength?!1:(c+=Math.sqrt(g-s.minContentLength),c>s.minScore)})}e.exports=r})(gw);var tU=gw.exports,nU=eU,rU=tU,vv={Readability:nU,isProbablyReaderable:rU};const yv=`<div>
    <span>Web page parsing failed.</span>
    <span>Feedback address: <a href="https://hamsterbase.com/docs/support.html"
            target="_blank">https://hamsterbase.com/docs/support.html</a></span>
</div>`,iU=`<div>
    <span>网页解析失败</span>
    <span>反馈地址： <a href="https://hamsterbase.com/zh/docs/support.html"
            target="_blank">https://hamsterbase.com/zh/docs/support.html</a></span>
</div>`,sU=`#container{width:100vw;display:flex;justify-content:center;padding-top:50px}#article{width:680px}body{background:white;margin:0}@media screen and (max-width: 479px){#container{padding:12px;box-sizing:border-box}#article{width:100%}}
`;function oU(e){const t=aU(e);return`
<html lang="en">
  <head>
    <style>${t.style}</style>
    <style>${sU}</style>
  </head>
  <body>
    <div id="container">
      <div id="article">${t.html}<div>
    </div>
  </body>
</html>
`}function aU(e){const t=I3({document:e.body,parseTime(s,o){return _p(s,o).toDate().getTime()},render:J3.renderToString,h:V.createElement}),n=t.articleHtml();if(n)return{html:n,style:t.articleStyle()};const r=e.cloneNode(!0);if(vv.isProbablyReaderable(r)){const s=new vv.Readability(r,{serializer(o){return o}}).parse();if(s)return{html:t.renderArticle({title:s.title,content:s.content}),style:t.articleStyle()}}return{error:!0,html:{"en-US":yv,["zh-CN"]:iU}[$("lang","en-US")]??yv,style:""}}function va(e){return e.data.type===db.text?URL.createObjectURL(new Blob([e.data.value],{type:e.mime})):`data:${e.mime};base64, ${e.data.value}`}function ya(e,t){return t?new URL(e,t).toString():e}function lU(e,t,n){const i=new DOMParser().parseFromString(e.main.data.value,"text/html");if(i.querySelectorAll("script").forEach(c=>{c.remove()}),i.querySelectorAll("link").forEach(c=>{const d=c.getAttribute("rel");if(d)switch(d){case"canonical":case"icon":case"search":case"mask-icon":case"dns-prefetch":case"shortcut icon":case"preload":case"archives":case"manifest":case"shotcut icon":case"File-List":case"apple-touch-icon-precomposed":case"apple-touch-icon":{c.remove();return}}const f=c.getAttribute("type");if(f)switch(f){case"application/rss+xml":{c.remove();return}}let g=c.getAttribute("href")??null;if(!g)return;const b=e.main.url;if(!b)return;let v=e.resource.find(h=>h.url===ya(g,b));if(v){if(v.mime==="text/css"){let m=function(_){let y=e.resource.find(p=>p.url===ya(_,v.url));return y?va(y):_};v.data.value=ov(m)(v.data.value)}const h=va(v);c.setAttribute("href",h)}else c.remove()}),i.querySelectorAll("[style]").forEach(c=>{const d=c.getAttribute("style");function f(g){let b=e.resource.find(v=>v.url===ya(g,e.main.url));return b?va(b):g}c.setAttribute("style",ov(f)(d))}),t==="dark"&&i.querySelectorAll("style").length<500){const c=i.createElement("script");c.innerHTML="DarkReader.enable({});",c.setAttribute("nonce","darkreader-run");const d=i.createElement("script");d.innerHTML=u3,d.setAttribute("nonce","darkreader"),i.head.prepend(c),i.head.prepend(d)}i.querySelectorAll("img").forEach(c=>{let d=c.getAttribute("src");if(!d||d!=null&&d.startsWith("data:"))return;const f=e.resource.find(g=>g.url===ya(d,e.main.url));f?c.setAttribute("src",va(f)):c.remove()});const s=document.createElement("meta");s.setAttribute("http-equiv","Content-Security-Policy"),s.setAttribute("Content",`
    default-src 'none';
    style-src 'self' blob: 'unsafe-inline';
    img-src 'self' blob: data: 'unsafe-inline';
    font-src 'self' blob: data: 'unsafe-inline';
    script-src 'nonce-darkreader' 'nonce-darkreader-run' 'sha256-HiLNc7lONoPY5A5Y+POJ4S5UhrHuvGzjZTjw/t3azEU=';
    `),i.head.prepend(s),i.querySelectorAll("meta").forEach(c=>{c.getAttribute("http-equiv")==="Content-Type"&&c.remove()});const o=i.createElement("style");o.textContent=`
  * {
    user-select: text !important;
  }
  `,i.body.appendChild(o);let a="";document.doctype&&(a=`${new XMLSerializer().serializeToString(document.doctype)}
`);let l=i.documentElement.outerHTML;return n&&(console.time(),l=oU(i),console.timeEnd()),URL.createObjectURL(new Blob([a+l],{type:e.main.mime}))}const uU="_article-mode-container_wbex7_1",cU="_article-mode-item_wbex7_9",fU="_article-mode-item-active_wbex7_14",dU="_page_wbex7_18",hU="_page-content_wbex7_25",pU="_iframe-container_wbex7_37",mU="_webpage-iframe_wbex7_42",gn={"article-mode-container":"_article-mode-container_wbex7_1",articleModeContainer:uU,"article-mode-item":"_article-mode-item_wbex7_9",articleModeItem:cU,"article-mode-item-active":"_article-mode-item-active_wbex7_14",articleModeItemActive:fU,page:dU,"page-content":"_page-content_wbex7_25",pageContent:hU,"iframe-container":"_iframe-container_wbex7_37",iframeContainer:pU,"webpage-iframe":"_webpage-iframe_wbex7_42",webpageIframe:mU},gU=({mobileWebpageContentController:e})=>{ir(e.onPageStateChange);const t=Mr(Lr),n=Mr(Po);ir(n.onListChange);const r=n.getList(),i=!!r;return O(PP,{backArrow:i?!0:O(kT,{}),onBack:()=>{if(i)t.go(r.page.pageName);else{t.go("webpages",{});return}},children:ke("div",{className:gn.articleModeContainer,children:[O("div",{onClick:()=>e.updateMode("snapshot"),className:te({[gn.articleModeItem]:!0,[gn.articleModeItemActive]:e.mode==="snapshot"}),children:"快照"}),O("div",{onClick:()=>e.updateMode("article"),className:te({[gn.articleModeItem]:!0,[gn.articleModeItemActive]:e.mode==="article"}),children:"阅读"})]})})},_U=({model:e})=>{const t=Mr(Po),n=Mr(Lr);return ke(pr,{style:{background:"white"},activeKey:null,onChange:r=>{if(e)switch(r){case"1":{e.liked=!e.liked;break}case"2":{e.read=!e.read;break}case"3":{const i=t.getNext(e.id);i?n.go("webpages_content",{webpageId:i}):P_.show($("webpage_content.no_webpage","No Webpage"));break}case"4":{const i=t.getPrevious(e.id);i?n.go("webpages_content",{webpageId:i}):P_.show($("webpage_content.no_webpage","No Webpage"));break}}},children:[O(pr.Item,{title:"喜欢",icon:e!=null&&e.liked?O(Ng,{theme:"filled",fill:"#ff4880"}):O(Ng,{})},"1"),O(pr.Item,{title:"未读",icon:e!=null&&e.read?O(xT,{theme:"filled"}):O(TT,{})},"2"),O(pr.Item,{title:"下一篇",icon:O(ET,{})},"3"),O(pr.Item,{title:"上一篇",icon:O(AT,{})},"4")]})},vU=e=>{const t=e.instance,n=T.useMemo(()=>{if(t.webpageState.status==="loading")return null;const o=t.webpageState;return lU(o.content,"light",t.mode==="article")},[t.webpageState,t.mode]);ir(t.onPageStateChange);const r=t.webpageState,i=r.status==="loaded"?r.model:null,s=T.useRef(null);return T.useEffect(()=>{if(!s.current)return;const o=s.current;o.addEventListener("load",a=>{const l=o.contentWindow;l&&l.addEventListener("scroll",()=>{i&&!i.read&&(i.read=!0)})})},[n]),O("div",{className:gn.page,children:ke("div",{className:gn.pageContent,children:[O(gU,{mobileWebpageContentController:t}),ke("div",{className:gn.iframeContainer,children:[n&&O("iframe",{ref:s,src:n,className:gn.webpageIframe},n),!n&&O("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:"Loading"})]}),O(_U,{model:i})]})})},yU=()=>{const e=Mr(Lr);return ir(e.onPageInstanceChange),ke("div",{children:[e.pageInstance.pageId==="webpages"&&O(vC,{instance:e.pageInstance}),e.pageInstance.pageId==="search"&&O(GP,{instance:e.pageInstance}),e.pageInstance.pageId==="webpages_content"&&O(vU,{instance:e.pageInstance}),O(wC,{})]})};class bv{get pageId(){return"search"}hide(){}}var bU=Object.defineProperty,wU=Object.getOwnPropertyDescriptor,SU=(e,t,n,r)=>{for(var i=r>1?void 0:r?wU(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&bU(t,n,i),i},wv=(e,t)=>(n,r)=>t(n,r,e);let $l=class{constructor(e,t){this.instantiationService=e,this.historyService=t}async init(){return this.instantiationService.createInstance(new ze(bv))}async createInstance(){return this.historyService.push("search"),this.instantiationService.createInstance(new ze(bv))}};$l.pageName="search";$l=SU([wv(0,su),wv(1,zi)],$l);function EU(e){for(var t=[],n=0;n<e.length;){var r=e[n];if(r==="*"||r==="+"||r==="?"){t.push({type:"MODIFIER",index:n,value:e[n++]});continue}if(r==="\\"){t.push({type:"ESCAPED_CHAR",index:n++,value:e[n++]});continue}if(r==="{"){t.push({type:"OPEN",index:n,value:e[n++]});continue}if(r==="}"){t.push({type:"CLOSE",index:n,value:e[n++]});continue}if(r===":"){for(var i="",s=n+1;s<e.length;){var o=e.charCodeAt(s);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||o===95){i+=e[s++];continue}break}if(!i)throw new TypeError("Missing parameter name at ".concat(n));t.push({type:"NAME",index:n,value:i}),n=s;continue}if(r==="("){var a=1,l="",s=n+1;if(e[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;){if(e[s]==="\\"){l+=e[s++]+e[s++];continue}if(e[s]===")"){if(a--,a===0){s++;break}}else if(e[s]==="("&&(a++,e[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));l+=e[s++]}if(a)throw new TypeError("Unbalanced pattern at ".concat(n));if(!l)throw new TypeError("Missing pattern at ".concat(n));t.push({type:"PATTERN",index:n,value:l}),n=s;continue}t.push({type:"CHAR",index:n,value:e[n++]})}return t.push({type:"END",index:n,value:""}),t}function xU(e,t){t===void 0&&(t={});for(var n=EU(e),r=t.prefixes,i=r===void 0?"./":r,s="[^".concat(ti(t.delimiter||"/#?"),"]+?"),o=[],a=0,l=0,u="",c=function(w){if(l<n.length&&n[l].type===w)return n[l++].value},d=function(w){var E=c(w);if(E!==void 0)return E;var x=n[l],k=x.type,A=x.index;throw new TypeError("Unexpected ".concat(k," at ").concat(A,", expected ").concat(w))},f=function(){for(var w="",E;E=c("CHAR")||c("ESCAPED_CHAR");)w+=E;return w};l<n.length;){var g=c("CHAR"),b=c("NAME"),v=c("PATTERN");if(b||v){var h=g||"";i.indexOf(h)===-1&&(u+=h,h=""),u&&(o.push(u),u=""),o.push({name:b||a++,prefix:h,suffix:"",pattern:v||s,modifier:c("MODIFIER")||""});continue}var m=g||c("ESCAPED_CHAR");if(m){u+=m;continue}u&&(o.push(u),u="");var _=c("OPEN");if(_){var h=f(),y=c("NAME")||"",p=c("PATTERN")||"",S=f();d("CLOSE"),o.push({name:y||(p?a++:""),pattern:y&&!p?s:p,prefix:h,suffix:S,modifier:c("MODIFIER")||""});continue}d("END")}return o}function kU(e,t){var n=[],r=vw(e,n,t);return TU(r,n,t)}function TU(e,t,n){n===void 0&&(n={});var r=n.decode,i=r===void 0?function(s){return s}:r;return function(s){var o=e.exec(s);if(!o)return!1;for(var a=o[0],l=o.index,u=Object.create(null),c=function(f){if(o[f]===void 0)return"continue";var g=t[f-1];g.modifier==="*"||g.modifier==="+"?u[g.name]=o[f].split(g.prefix+g.suffix).map(function(b){return i(b,g)}):u[g.name]=i(o[f],g)},d=1;d<o.length;d++)c(d);return{path:a,index:l,params:u}}}function ti(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function _w(e){return e&&e.sensitive?"":"i"}function RU(e,t){if(!t)return e;for(var n=/\((?:\?<(.*?)>)?(?!\?)/g,r=0,i=n.exec(e.source);i;)t.push({name:i[1]||r++,prefix:"",suffix:"",modifier:"",pattern:""}),i=n.exec(e.source);return e}function AU(e,t,n){var r=e.map(function(i){return vw(i,t,n).source});return new RegExp("(?:".concat(r.join("|"),")"),_w(n))}function IU(e,t,n){return OU(xU(e,n),t,n)}function OU(e,t,n){n===void 0&&(n={});for(var r=n.strict,i=r===void 0?!1:r,s=n.start,o=s===void 0?!0:s,a=n.end,l=a===void 0?!0:a,u=n.encode,c=u===void 0?function(A){return A}:u,d=n.delimiter,f=d===void 0?"/#?":d,g=n.endsWith,b=g===void 0?"":g,v="[".concat(ti(b),"]|$"),h="[".concat(ti(f),"]"),m=o?"^":"",_=0,y=e;_<y.length;_++){var p=y[_];if(typeof p=="string")m+=ti(c(p));else{var S=ti(c(p.prefix)),w=ti(c(p.suffix));if(p.pattern)if(t&&t.push(p),S||w)if(p.modifier==="+"||p.modifier==="*"){var E=p.modifier==="*"?"?":"";m+="(?:".concat(S,"((?:").concat(p.pattern,")(?:").concat(w).concat(S,"(?:").concat(p.pattern,"))*)").concat(w,")").concat(E)}else m+="(?:".concat(S,"(").concat(p.pattern,")").concat(w,")").concat(p.modifier);else p.modifier==="+"||p.modifier==="*"?m+="((?:".concat(p.pattern,")").concat(p.modifier,")"):m+="(".concat(p.pattern,")").concat(p.modifier);else m+="(?:".concat(S).concat(w,")").concat(p.modifier)}}if(l)i||(m+="".concat(h,"?")),m+=n.endsWith?"(?=".concat(v,")"):"$";else{var x=e[e.length-1],k=typeof x=="string"?h.indexOf(x[x.length-1])>-1:x===void 0;i||(m+="(?:".concat(h,"(?=").concat(v,"))?")),k||(m+="(?=".concat(h,"|").concat(v,")"))}return new RegExp(m,_w(n))}function vw(e,t,n){return e instanceof RegExp?RU(e,t):Array.isArray(e)?AU(e,t,n):IU(e,t,n)}function ja(e){return t=>{const n=kU(e)(t);return n?n.params:null}}function LU(e,t){return n=>{for(const r of t){const i=e[r](n);if(i)return{type:r,value:i}}return null}}var NU=Object.defineProperty,MU=Object.getOwnPropertyDescriptor,PU=(e,t,n,r)=>{for(var i=r>1?void 0:r?MU(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&NU(t,n,i),i},CU=(e,t)=>(n,r)=>t(n,r,e);let Bl=class{constructor(e,t){this.webpageId=e,this.websiteService=t,this._onPageStateChange=new ie,this.onPageStateChange=this._onPageStateChange.event,this._internalState={status:"loading"},this._mode="article",this.load()}get webpageState(){return this._internalState}get mode(){return this._mode}updateMode(e){this._mode=e,this._onPageStateChange.fire()}get pageId(){return"webpages_content"}hide(){}async load(){const[e,t]=await Promise.all([this.websiteService.getModel(this.webpageId),this.websiteService.getContent(this.webpageId)]);if(!e||!t)return;let n=e.version;e.onModelChanged(r=>{r.auto||this._onPageStateChange.fire();const i=e.operations,s=e.version,o=i.filter(a=>{const l=a.id[1],u=n[a.id[0]];return u?l>u:!0});this.websiteService.update(e.id,{version:s,previousVersion:n,operations:o}).then(()=>{n=s})}),this._internalState={status:"loaded",model:e,content:t},this._onPageStateChange.fire()}};Bl=PU([CU(1,jh)],Bl);var DU=Object.defineProperty,UU=Object.getOwnPropertyDescriptor,FU=(e,t,n,r)=>{for(var i=r>1?void 0:r?UU(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&DU(t,n,i),i},Sv=(e,t)=>(n,r)=>t(n,r,e);const $U={webpage:ja("/webpages_content/:webpageId")};let Vl=class{constructor(e,t){this.instantiationService=e,this.historyService=t}async init(){const e=$U.webpage(this.historyService.pathname);return e?this.instantiationService.createInstance(new ze(Bl,[e.webpageId])):null}async createInstance(e){return this.historyService.push(`webpages_content/${e.webpageId}`),this.instantiationService.createInstance(new ze(Bl,[e.webpageId]))}};Vl.pageName="webpages_content";Vl=FU([Sv(0,su),Sv(1,zi)],Vl);var be=(e=>(e[e.constant=0]="constant",e[e.select=1]="select",e[e.multiple_selection=2]="multiple_selection",e))(be||{});class Wc{constructor(t){this._onDidChange=new ie,this.onDidChange=this._onDidChange.event,this.view=t}get filters(){return this.view.filters}get match(){return this.view.match}get sortBy(){return this.view.sortBy}get limit(){return{enabled:this.view.enableLimit,count:this.view.limit}}toggleMatch(){this.view.match==="and"?this.view.match="or":this.view.match="and",this._onDidChange.fire()}addFilter(t){return this.view.addFilter(t),this._onDidChange.fire(),this.filters.length-1}updateSort(t){this.view.sortBy=t,this._onDidChange.fire()}updateLimit(t){this.view.limit=t.count,this.view.enableLimit=t.enabled,this._onDidChange.fire()}updateFilter(t,n){this.view.updateFilter(t,n),this._onDidChange.fire()}getFilter(t){return this.view.getFilter(t)}deleteFilter(t){this.view.deleteFilter(t),this._onDidChange.fire()}empty(){for(;this.view.filters.length>0;)this.view.deleteFilter(0);this._onDidChange.fire()}}class ar{constructor(t){this.options=t}get key(){return this.options.descriptor.key}getDescriptor(t){const n=this.options;switch(n.type){case be.constant:return n.loadData(t),n.descriptor;case be.multiple_selection:{const{selections:r}=n.getData(t);return{...n.descriptor,selections:r,getRightOperandProps:n.createGetRightOperandProps(r)}}case be.select:{const r=n.getRightOperands(t);return{...n.descriptor,rightOperands:r,getRightOperandLabel:n.createGetRightOperandLabel(r)}}}}getFilter(t){return this.options.getFilter(t)}}class BU extends ar{constructor(){const t=[{label:$("filter_operator.is","is"),value:0},{label:$("filter_operator.is_not","is not"),value:1},{label:$("filter_operator.is_more_than","is more than"),value:2},{label:$("filter_operator.is_less_than","is less than"),value:3}];super({type:be.select,descriptor:{type:be.select,label:$("annotate_count_filter_operator.annotate_count","Annotate Count"),key:"annotation",leftOperandLabel:$("annotate_count_filter_operator.annotate_count","Annotate Count"),operators:t,initValue(n){return{type:be.select,key:"annotation",operator:0,rightOperand:n}},getOperatorLabel(n){const r=t.find(i=>i.value===n.operator);return r?r.label:t[0].label},changeOperator:n=>{let r=t.findIndex(i=>i.value===n.operator);return r=r+1,r>=t.length&&(r=0),{...n,operator:t[r].value}}},createGetRightOperandLabel(n){return r=>{const i=n.find(s=>s.count===r.rightOperand);return i?i.labels:`${r.rightOperand}`}},getRightOperands:n=>{const r=new Set;return n.forEach(i=>r.add(i.annotateCount)),Array.from(r.values()).sort().reverse().map(i=>({labels:`${i}`,count:i}))},getFilter:n=>r=>{switch(n.operator){case 0:return r.annotateCount===n.rightOperand;case 1:return r.annotateCount!==n.rightOperand;case 2:return r.annotateCount>n.rightOperand;case 3:return r.annotateCount<n.rightOperand;default:return r.annotateCount===n.rightOperand}}})}}var yw=(e=>(e[e.day_1=0]="day_1",e[e.week_1=1]="week_1",e[e.month_1=2]="month_1",e[e.day_2=3]="day_2",e[e.week_2=4]="week_2",e[e.month_2=5]="month_2",e))(yw||{}),bw=(e=>(e[e.before=0]="before",e[e.after=1]="after",e))(bw||{});const VU=[{label:"after",value:1},{label:"before",value:0}],WU=[{labels:$("add_time_filter_right_operands.today","Today"),count:0},{labels:$("add_time_filter_right_operands.yesterday","Yesterday"),count:3},{labels:$("add_time_filter_right_operands.this_week","This week"),count:1},{labels:$("add_time_filter_right_operands.last_week","Last week"),count:4},{labels:$("add_time_filter_right_operands.this_month","This month"),count:2},{labels:$("add_time_filter_right_operands.last_month","Last month"),count:5}];class jU extends ar{constructor(){super({type:be.select,descriptor:{type:be.select,label:$("add_time_filter_label.date_added","Date Added"),key:"first-add-time",leftOperandLabel:$("add_time_filter_left_operand.date_added","Date Added"),operators:VU,initValue(t){return{type:be.select,key:"first-add-time",operator:1,rightOperand:t}},getOperatorLabel(t){switch(t.operator){default:case 1:return $("add_time_filter_left_operator.after","after");case 0:return $("add_time_filter_left_operator.before","before")}},changeOperator:t=>{let n;switch(t.operator){default:case 1:{n=0;break}case 0:{n=1;break}}return{...t,operator:n}}},createGetRightOperandLabel(t){return n=>{const r=t.find(i=>i.count===n.rightOperand);return r?r.labels:t[0].labels}},getRightOperands:()=>WU,getFilter:t=>{const n=this.currentTime;return r=>{let i=n();switch(t.rightOperand){default:case 0:{i=i.startOf("day");break}case 3:{i=i.startOf("day").add(-1,"day");break}case 1:{i=i.startOf("week");break}case 4:{i=i.startOf("week").add(-1,"week");break}case 2:{i=i.startOf("month");break}case 5:{i=i.startOf("month").add(-1,"month");break}}switch(t.operator){case 0:return r.firstAddTime<=i.valueOf();case 1:return r.firstAddTime>=i.valueOf();default:{/* istanbul ignore next -- @preserve */return r.firstAddTime<=i.valueOf()}}}}})}currentTime(){return _p()}}class zU extends ar{constructor(){const t=[{label:$("host_filter_operator.is_either_of","is either of"),value:!0},{label:$("host_filter_operator.is_not","is not"),value:!1}],n=[{label:$("host_filter_operator.is","is"),value:!0},{label:$("host_filter_operator.is_not","is not"),value:!1}];super({type:be.multiple_selection,descriptor:{getOperatorLabel:r=>r.rightOperand.length>1?t.find(i=>i.value===r.operator).label:n.find(i=>i.value===r.operator).label,changeOperator:r=>({...r,operator:!r.operator}),type:be.multiple_selection,label:$("host_filter_label.host","Host"),key:"host",leftOperandLabel:$("host_filter_left_operand.host","Host")},getData:r=>{const i=new Set;return r.filter(o=>o.link).forEach(o=>{try{i.add(new URL(o.link).host)}catch{}}),{selections:Array.from(i.values())}},createGetRightOperandProps:()=>r=>{const i=r.rightOperand.join(",");let s;return r.rightOperand.length!==1?s=`${r.rightOperand.length} hosts`:s=r.rightOperand[0],{title:i,label:s}},getFilter:r=>i=>{let s=null;if(i.link)try{s=new URL(i.link).host}catch{}return r.operator?s?r.rightOperand.includes(s):!1:s?!r.rightOperand.includes(s):!0}})}}function jc(e){return[0,1,3,2].includes(e)?e:0}function HU(e){return[0,1].includes(e)?2:0}class GU extends ar{constructor(){const t=[{label:$("label_filter_operator.includes_all_of","includes all of"),value:0},{label:$("label_filter_operator.includes_any_of","includes any of"),value:1},{label:$("label_filter_operator.exclude_if_all","exclude if all"),value:3},{label:$("label_filter_operator.exclude_if_any_of","exclude if any of"),value:2}],n=[{label:$("label_filter_operator.includes","includes"),value:0},{label:$("label_filter_operator.includes","includes"),value:1},{label:$("label_filter_operator.does_not_include","does not include"),value:3},{label:$("label_filter_operator.does_not_include","does not include"),value:2}],r=[{label:$("label_filter_operator.has","has"),value:0},{label:$("label_filter_operator.has","has"),value:1},{label:$("label_filter_operator.not_has","does not has"),value:3},{label:$("label_filter_operator.not_has","does not has"),value:2}];super({type:be.multiple_selection,descriptor:{getOperatorLabel:i=>{let s=jc(i.operator);const o=i.rightOperand.length>1,a=i.rightOperand.length===0;return o?t.find(l=>l.value===s).label:a?r.find(l=>l.value===s).label:n.find(l=>l.value===s).label},changeOperator:i=>{let s=jc(i.operator);return i.rightOperand.length>1?s=(s+1)%4:s=HU(s),{...i,operator:s}},type:be.multiple_selection,label:$("label_filter_label.label","Label"),key:"label",leftOperandLabel:$("label_filter_left_operand.label","Label")},getData:i=>{const s=new Set;return i.filter(a=>a.labels.length>0).forEach(a=>{a.labels.forEach(l=>{s.add(l)})}),{selections:Array.from(s.values())}},createGetRightOperandProps:()=>i=>{let s=i.rightOperand.join(","),o;return i.rightOperand.length===0?(o=$("label_filter_label.any_label","any label"),s=o):i.rightOperand.length===1?o=i.rightOperand[0]:i.rightOperand.length<3?o=i.rightOperand.join(","):o=$("label_filter_label.labels_count","{0} labels",i.rightOperand.length),{title:s,label:o}},getFilter:i=>{const s=i.rightOperand,o=jc(i.operator);return a=>{if(s.length===0)switch(o){case 0:case 1:return a.labels.length!==0;case 3:case 2:return a.labels.length===0}switch(o){case 0:return s.every(l=>a.labels.includes(l));case 1:return s.some(l=>a.labels.includes(l));case 3:return s.every(l=>!a.labels.includes(l));case 2:return s.some(l=>!a.labels.includes(l))}}}})}}class qU extends ar{constructor(){super({type:be.constant,descriptor:{type:be.constant,label:$("like_filter.like","Liked"),key:"liked",leftOperandLabel:$("like_filter_left_operand.page","Page"),equalOperatorLabel:$("like_filter_operator.is","is"),inequalityOperatorLabel:$("like_filter_operator.is_not","is not"),rightOperandLabel:$("like_filter.like","Liked")},loadData:()=>{},getFilter:t=>n=>!!n.liked===t.operator})}}class YU extends ar{constructor(){super({type:be.constant,descriptor:{type:be.constant,label:$("link_duplicate_filter.link_duplicate","Link Duplicate"),key:"link-duplicate",leftOperandLabel:$("link_duplicate_filter_left_operand.link","Link"),equalOperatorLabel:$("link_duplicate_filter_operator.is","is"),inequalityOperatorLabel:$("link_duplicate_filter_operator.is_not","is not"),rightOperandLabel:$("link_duplicate_filter_right_operand.duplicate","Duplicate")},getFilter:t=>n=>{const r=!!n.link&&(this.count.get(n.link)??0)>1;return t.operator?r:!r},loadData:t=>{this.count=new Map,t.forEach(n=>{if(n.link){const r=this.count.get(n.link)??0;this.count.set(n.link,r+1)}})}}),this.count=new Map}}class QU extends ar{constructor(){super({type:be.constant,descriptor:{type:be.constant,label:$("read_status_filter.read_status","Read Status"),key:"read-status",leftOperandLabel:$("read_status_filter_left_operand.page","Page"),equalOperatorLabel:$("read_status_filter_operator.is","is"),inequalityOperatorLabel:$("read_status_filter_operator.is_not","is not"),rightOperandLabel:$("read_status_filter_right_operand.read","Read")},loadData:()=>{},getFilter:t=>n=>!!n.read===t.operator})}}class XU extends ar{constructor(){super({type:be.constant,descriptor:{type:be.constant,label:$("title_duplicate_filter.title_duplicate","Title Duplicate"),key:"title-duplicate",leftOperandLabel:$("title_duplicate_filter_left_operand.title","Title"),equalOperatorLabel:$("title_duplicate_filter_operator.is","is"),inequalityOperatorLabel:$("title_duplicate_filter_operator.is_not","is not"),rightOperandLabel:$("title_duplicate_filter_right_operand.duplicate","Duplicate")},getFilter:t=>n=>{const r=!!n.title&&(this.count.get(n.title)??0)>1;return t.operator?r:!r},loadData:t=>{this.count=new Map,t.forEach(n=>{if(n.title){const r=this.count.get(n.title)??0;this.count.set(n.title,r+1)}})}}),this.count=new Map}}class KU{constructor(t){this.factory=t}getFilterDesc(t){return this.factory.map(n=>n.getDescriptor(t))}getItem(t){const n=this.factory.find(r=>r.key===t.key);return n?n.getFilter(t):()=>!0}getModelFilter(t){const n=t.filters.map(r=>this.getItem(r));return r=>{switch(t.match){case"and":return n.every(i=>i(r));case"or":return n.some(i=>i(r));default:{/* istanbul ignore next -- @preserve */return n.every(i=>i(r))}}}}filterWebpages(t,n){if(!t)return n;const r=this.getModelFilter(t);let i=n.filter(o=>r(o));const s=o=>{if(o.length===1)return o;const a=Math.floor(Math.random()*o.length);return[o[a],...s(o.filter((l,u)=>u!=a))]};switch(t.sortBy){case Pn.add_time_asc:{i.sort((o,a)=>o.firstAddTime-a.firstAddTime);break}case Pn.add_time_desc:{i.sort((o,a)=>-o.firstAddTime+a.firstAddTime);break}case Pn.annotate_count_asc:{i.sort((o,a)=>o.annotateCount-a.annotateCount);break}case Pn.annotate_count_desc:{i.sort((o,a)=>-o.annotateCount+a.annotateCount);break}case Pn.title_asc:{i.sort((o,a)=>o.title.localeCompare(a.title));break}case Pn.title_desc:{i.sort((o,a)=>-o.title.localeCompare(a.title));break}case Pn.random:{i=s(i);break}}return t.limit.enabled&&t.limit.count&&(i=i.slice(0,t.limit.count)),i}}const ZU=new KU([new zU,new qU,new BU,new jU,new YU,new XU,new QU,new GU]);var JU=Object.defineProperty,e4=Object.getOwnPropertyDescriptor,t4=(e,t,n,r)=>{for(var i=r>1?void 0:r?e4(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&JU(t,n,i),i},ba=(e,t)=>(n,r)=>t(n,r,e);let Pd=class{constructor(e,t,n,r,i){this.workbenchWebsiteService=t,this.pageInstanceService=n,this.workbenchMobileWebpageService=r,this.mobileListService=i,this._tabId=null,this.listStateMap=new Map,this._onTabChange=new ie,this.onTabChange=this._onTabChange.event,this._onWebpagesChange=new ie,this.onWebpagesChange=this._onWebpagesChange.event,this.selectTab(e)}get pageId(){return"webpages"}get activeTab(){if(!this._tabId)throw new Error("activeTabId is null");const e=this.tabs.find(t=>t.id===this._tabId);if(!e)throw new Error("activeTab is null");return e}get tabs(){return this.internalTabs.map(e=>({title:e.title,id:e.id,pathname:e.pathname}))}get internalTabs(){const e=this.workbenchMobileWebpageService.webpageViews.map(n=>({title:n.title,id:`webpages_view_${n.id}`,pathname:`webpages/webpages_view/${n.id}`,pageData:{type:"webpages_view",viewId:n.id},filter:async()=>{const r=await this.workbenchMobileWebpageService.getWebpageView(n.id);return new Wc(r)}}));return[{id:"webpages_all",title:$("mobile_webpage.webpages_all","All"),pathname:"webpages/webpages_all",filter:async()=>{const n=ho.create();return new Wc(n)}},{id:"webpages_unread",title:$("mobile_webpage.webpages_unread","Unread"),pathname:"webpages/webpages_unread",filter:async()=>{const n=ho.create();return n.addFilter({type:be.constant,key:"read-status",operator:!1}),n.addFilter({type:be.select,key:"first-add-time",operator:bw.after,rightOperand:yw.week_2}),new Wc(n)}}].concat(e)}selectTab(e){if(this._tabId===e)return;if(this._tabId){const n=this.mobileListService.getList();n&&this.listStateMap.set(this._tabId,n)}const t=this.internalTabs.find(n=>n.id===e)??this.internalTabs[0];this._tabId=t.id,t.filter().then(async n=>{this.workbenchWebsiteService.firstInit||await this.workbenchWebsiteService.init();const r=ZU.filterWebpages(n,this.workbenchWebsiteService.webpages),i=this.listStateMap.get(e),s={scrollOffset:0,itemHeight:()=>69+8,webpages:r,page:{pageName:"webpages"}};i?(s.scrollOffset=this.mobileListService.calculateOffset(s,i),this.mobileListService.updateList(s)):this.mobileListService.updateList(s)}),this._onTabChange.fire(t)}hide(){}selectWebpage(e){this.pageInstanceService.go("webpages_content",{webpageId:e})}};Pd=t4([ba(1,qf),ba(2,Lr),ba(3,Qf),ba(4,Po)],Pd);var n4=Object.defineProperty,r4=Object.getOwnPropertyDescriptor,i4=(e,t,n,r)=>{for(var i=r>1?void 0:r?r4(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&n4(t,n,i),i},Ev=(e,t)=>(n,r)=>t(n,r,e);const s4={webpages_all:ja("/webpages/webpages_all"),webpages_unread:ja("/webpages/webpages_unread"),webpages_view:ja("/webpages/webpages_view/:webpages_view_id")};let Wl=class{constructor(e,t){this.instantiationService=e,this.historyService=t,this.controller=null}async init(){const e=this.parseUrl(this.historyService.pathname);switch(e==null?void 0:e.type){case"webpages_all":return this.initPage("webpages_all");case"webpages_view":return this.initPage(`webpages_view_${e.value.webpages_view_id}`);case"webpages_unread":return this.initPage("webpages_unread")}return null}async createInstance(e){if(e)switch(e.type){case"webpages_unread":return this.initPage("webpages_unread");case"webpages_all":return this.initPage("webpages_all");case"webpages_view":return this.initPage(`webpages_view_${e.viewId}`)}return this.controller?this.controller:this.initPage("webpages_all")}initPage(e){return this.controller?this.controller.selectTab(e):this.controller=this.createController(e),this.controller}createController(e){const t=this.instantiationService.createInstance(new ze(Pd,[e]));return this.historyService.pathname!==t.activeTab.pathname&&this.historyService.push(t.activeTab.pathname),t.onTabChange(n=>{this.historyService.pathname!==n.pathname&&this.historyService.push(n.pathname)}),t}parseUrl(e){return LU(s4,["webpages_all","webpages_unread","webpages_view"])(e)}};Wl.pageName="webpages";Wl=i4([Ev(0,su),Ev(1,zi)],Wl);async function o4(){const e=new qv,t=new Vh(e,!0),n=jS();for(const[l,u]of n)e.set(l,u);const r=new eE(void 0),i=tT(),s=await r.connect(i.host,i.port,i.path,i.query,i.debugLabel),o=new DS(new VS(s),"ipc",null);e.set(zi,new ze(eT,[{base:"/mobile",window}])),e.set(Lr,new ze(Kf)),e.set(xk,Zc.toService(o.getChannel("LegalService"))),e.set(jh,new Tk(o.getChannel("webpages"))),e.set(j0,new wk(o.getChannel("WebpagesView"))),e.set(Qf,new ze(Xf)),e.set(qf,new ze(Yf)),e.set(Po,new ze(Nk)),e.set(G0,new ze(Zf));const[a]=t.invokeFunction(l=>[l.get(Lr)]);await t.invokeFunction(l=>l.get(Qf)).init(),t.invokeFunction(l=>l.get(qf)).init(),await a.init([{name:"webpages",page:t.createInstance(Wl)},{name:"search",page:t.createInstance($l)},{name:"webpages_content",page:t.createInstance(Vl)}]),Fh.render(O(n1.Provider,{value:{instantiationService:t},children:O(yU,{})}),document.getElementById("root"))}fetch("/private/api/login_status").then(e=>{e.status===200?o4():Fh.render(O(tR,{}),document.getElementById("root"))});
//# sourceMappingURL=index-782e1863.js.map
