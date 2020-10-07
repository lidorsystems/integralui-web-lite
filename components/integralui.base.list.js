/*
  filename: integralui.base.list.js
  version : 20.2.0
  Copyright © 2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web Lite" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web Lite License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/lite/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{IntegralUISpeedMode,IntegralUISortOrder,IntegralUIOrientation,IntegralUISelectionMode,IntegralUIMoveDirection,IntegralUIObjectState}from"./integralui.enums.js";import IntegralUIBase from"./integralui.base.js";import IntegralUIDataService from"../services/integralui.data.service.js";class IntegralUIBaseList extends IntegralUIBase{_ini(){super._ini();this._cDtaService=new IntegralUIDataService();this._cLt=[];this._cDtaItems=[];this._flLt=[];this._scItLt=[];this._ctrCrs="default";this._cMuWhSp=IntegralUISpeedMode.Normal;this._hIt=null;this._opt={allowDrag:!1,allowDrop:!0,currentStyle:null,dataFields:null,selectedItem:null,sorting:IntegralUISortOrder.None};this._cFOj=null;this._keyAct=!1;this._alwUp=!0;this._avgItHt=0;this._blkSz={width:0,height:0};this._cntSz={width:0,height:0};this._cIdx=0;this._cItSpc=0;this._prvIdx=0;this._isUAct=!1;this._prvLngItWh=0;this._lngItWh=0;this._lngItWhValue="auto";this._virt=!0;this._vblRg=100;this._uTmr=null;this._cSclPs={x:0,y:0};this._mxSclPs={x:0,y:0};this._acclr=.5;this._scAct=!1;this._scTmAct=!1;this._prvSclPs={x:0,y:0};this._scBrSz={width:0,height:0};this._scCt=0;this._scLChg={x:0,y:0};this._scSz={width:0,height:0};this._scTmId=null;this._hScOt=IntegralUIOrientation.Horizontal;this._cSel=null;this._cSelMode=IntegralUISelectionMode.One;this._isIClk=!1;this._shtFtSelIt=null;this._rmvIdx=-1;this._cSelItms=[];this._iCsNm="iui-list";this._iCntCsNm=this.itemClassName+"-content";this._rfshTm=null;this._tchStPs={x:0,y:0};this._tchEdPs={x:0,y:0}}connectedCallback(){super.connectedCallback();this._wKeyDn=this._wKeyDn.bind(this);window.addEventListener("keydown",this._wKeyDn);this._wKeyUp=this._wKeyUp.bind(this);window.addEventListener("keyup",this._wKeyUp)}disconnectedCallback(){super.disconnectedCallback();window.removeEventListener("keydown",this._wKeyDn);window.removeEventListener("keyup",this._wKeyUp)}_iniStyle(){this._dfSty={general:{disabled:this._gnrCsNm+"-disabled",focused:this._gnrCsNm+"-focused",normal:this._gnrCsNm,hovered:this._gnrCsNm+"-hovered",selected:this._gnrCsNm+"-selected"},item:{general:{disabled:this._iCsNm+"-disabled",focused:this._iCsNm+"-focused",normal:this._iCsNm,hovered:this._iCsNm+"-hovered",selected:this._iCsNm+"-selected"},content:{disabled:this._iCntCsNm+"-disabled",focused:this._iCntCsNm+"-focused",normal:this._iCntCsNm,hovered:this._iCntCsNm+"-hovered",selected:this._iCntCsNm+"-selected"}}};this._uSty(this.controlStyle);this._uCtrCs();this.refresh()}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i)}static get properties(){return{allowFocus:{type:Boolean,attribute:"allow-focus",reflect:!0},dataFields:{type:Object,attribute:"data-fields"},focusedItem:{type:Object,attribute:"focused-item"},items:{type:Array},itemSpacing:{type:Number,attribute:"item-spacing",reflect:!0},mouseWheelSpeed:{attribute:"mousewheel-speed",converter:{fromAttribute:t=>{switch((t=t.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()){case"veryslow":return IntegralUISpeedMode.VerySlow;case"slow":return IntegralUISpeedMode.Slow;case"fast":return IntegralUISpeedMode.Fast;case"veryfast":return IntegralUISpeedMode.VeryFast;default:return IntegralUISpeedMode.Normal}},toAttribute:t=>{switch(t){case IntegralUISpeedMode.VerySlow:return"VerySlow";case IntegralUISpeedMode.Slow:return"Slow";case IntegralUISpeedMode.Fast:return"Fast";case IntegralUISpeedMode.VeryFast:return"VeryFast";default:return"Normal"}}},reflect:!0},showScroll:{type:Boolean,attribute:"show-scroll",reflect:!0},selectedItem:{type:Object,attribute:"selected-item"},selectionMode:{attribute:"selection-mode",converter:{fromAttribute:t=>{switch((t=t.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()){case"none":return IntegralUISelectionMode.None;default:return IntegralUISelectionMode.One}},toAttribute:t=>{switch(t){case IntegralUISelectionMode.None:return"None";default:return"One"}}},reflect:!0},virtualMode:{type:Boolean,attribute:"virtual-mode",reflect:!0}}}set allowFocus(t){if(this._opt.allowFocus!==t){const e=this._opt.allowFocus;this._opt.allowFocus=t;if(!t)this._cFOj=null;this.refresh();this.requestUpdate("allowFocus",e);this.updateLayout()}}set dataFields(t){const e=this._opt.dataFields;this._uDtFields(t);this.requestUpdate("dataFields",e)}get focusedItem(){return this._cFOj?this._cFOj.data:null}set focusedItem(t){let e=this.allowFocus&&!this._cFOj,i=this.allowFocus&&this._cFOj&&this._cFOj.data!==t;if(e||i){const e=this._cFOj?this._cFOj.data:null;this._cFOj=this._gOjFmIt(t);this._uFcIt();if(this.selectedItem!==t)this._prcSel(null,t);this.requestUpdate("focusedItem",e);this.refresh()}}get items(){return this._cDtaItems}set items(t){const e=this._cDtaItems;this._cDtaItems=t;this._uDt();this.requestUpdate("items",e)}get itemSpacing(){return this._cItSpc}set itemSpacing(t){const e=this._cItSpc;this._cItSpc=t;this.requestUpdate("itemSpacing",e)}get mouseWheelSpeed(){return this._cMuWhSp}set mouseWheelSpeed(t){if(this._cMuWhSp!==t){const e=this._cMuWhSp;this._cMuWhSp=t;this.requestUpdate("mouseWheelSpeed",e)}}get showScroll(){return this._opt.showScroll}set showScroll(t){const e=this.options.showScroll;this._uShSc(t);this.requestUpdate("showScroll",e)}get selectedItem(){return this._cSel}set selectedItem(t){if(this._cSel!==t){const e=this._cSel;let i=this,s=setTimeout(function(){i._prcSel(null,t);i._uSelCntPs();i.requestUpdate("selectedItem",e);clearTimeout(s)},1)}}get selectionMode(){return this._cSelMode}set selectionMode(t){if(this._cSelMode!==t){const e=this._cSelMode;this._cSelMode=t===IntegralUISelectionMode.None?IntegralUISelectionMode.None:IntegralUISelectionMode.One;this._clrPrvSel(this._cSelMode!==IntegralUISelectionMode.None?this._cSel:null);let i=this,s=setTimeout(function(){i.refresh();if(i._cSelMode===IntegralUISelectionMode.None){i._cSel=null;i._inkEv("selectionChanged",{item:null})}i.requestUpdate("selectionMode",e);clearTimeout(s)},1)}}get virtualMode(){return this._virt}set virtualMode(t){if(this._virt!==t){const t=this._virt;this._virt=!0;this.requestUpdate("virtualMode",t);this.updateLayout()}}addItem(t,e){this._calEvAdd("add",t,-1,e)}clearItems(t){if(!t){this.currentSelectedItems.length=0;this.currentSelection=null}this.dataService.clear(t);this._inkEv("clear",{parent:t});this.updateLayout()}insertItemAt(t,e,i){this._calEvAdd("at",t,e,i)}insertItemBefore(t,e){this._calEvAdd("ref",t,-1,null,e)}insertItemAfter(t,e){this._calEvAdd("ref",t,-1,null,e,!0)}removeItem(t){return this._calEvRmv(t)}removeItemAt(t,e){return this._calEvRmv(null,t,e)}_calEvAdd(t,e,i,s,l,c){if(!0!==this._inkEv("itemAdding",{cancel:!1,item:e}).cancel){switch(t){case"at":this._cDtaService.insert(e,i,s);break;case"ref":this._cDtaService.insertByRef(e,l,c);break;default:this._cDtaService.insert(e,-1,s)}this._prcItAdd(e,s);this._inkEv("itemAdded",{item:e})}}_calEvRmv(t,e,i){if(!0!==this._inkEv("itemRemoving",{cancel:!1,item:t}).cancel){this._rmvIdx=this.items?this.items.indexOf(t):-1;let s=this._cDtaService.removeAt(t,e,i);if(s.result){this._prcItRmv(t,i);if(t&&t[this._opt.dataFields.selected]){t[this._opt.dataFields.selected]=!1;this._cSelItms=this._cSelItms.filter(e=>e!==t);if(this._cSel&&this._cmnSrv.isEqual(this._cSel[this._opt.dataFields.id],t[this._opt.dataFields.id]))this._cSel=null;this._inkEv("selectionChanged",{item:this._cSel})}this._inkEv("itemRemoved",{item:s.obj});return!0}}return!1}_prcItAdd(t,e){}_prcItRmv(t,e){}_iClkEv(t,e){if(this._enbl&&1===t.which)this._inkEv("itemClick",{event:t,item:e.data})}_iDClkEv(t,e){if(this._enbl&&1===t.which)this._inkEv("itemDblClick",{event:t,item:e.data})}_iRClkEv(t,e){if(this._enbl)this._inkEv("itemRightClick",{event:t,item:e.data})}_prcLdDt(t,e,i,s){this.clearItems(e);this._uDtFields(i);let l=[];if(t)if(s||void 0===s){let e=[];t.forEach((t,i)=>{t[this._opt.dataFields.items]=[];let s=t[this._opt.dataFields.pid];if(e[s]){if(!e[s][this._opt.dataFields.items])e[s][this._opt.dataFields.items]=[];e[t[this._opt.dataFields.id]]=t;e[s][this._opt.dataFields.items].push(t)}else{e[t[this._opt.dataFields.id]]=t;l.push(t)}});e.length=0}else l=t;if(e){l.map(t=>t[this._opt.dataFields.pid]=e[this._opt.dataFields.id]);e[this._opt.dataFields.items]=l}else if(this.items){this.items.length=0;l.map(t=>this.items.push(t))}this._inkEv("loadComplete");this.updateLayout()}_uDt(){this._cDtaService.init([{data:this.items}])}_uDtFields(t){if(t)this._opt.dataFields={allowDrag:t.allowDrag?t.allowDrag:"allowDrag",allowDrop:t.allowDrop?t.allowDrop:"allowDrop",allowEdit:t.allowEdit?t.allowEdit:"allowEdit",allowFocus:t.allowFocus?t.allowFocus:"allowFocus",autoCheck:t.autoCheck?t.autoCheck:"autoCheck",canSelect:t.canSelect?t.canSelect:"canSelect",checkBoxSettings:t.checkBoxSettings?t.checkBoxSettings:"checkBoxSettings",checked:t.checked?t.checked:"checked",checkState:t.checkState?t.checkState:"checkState",content:t.content?t.content:"content",contentVisibility:t.contentVisibility?t.contentVisibility:"contentVisibility",contextMenu:t.contextMenu?t.contextMenu:"contextMenu",enabled:t.enabled?t.enabled:"enabled",expanded:t.expanded?t.expanded:"expanded",hasChildren:t.hasChildren?t.hasChildren:"hasChildren",icon:t.icon?t.icon:"icon",id:t.id?t.id:"id",items:t.items?t.items:"items",pid:t.pid?t.pid:"pid",selected:t.selected?t.selected:"selected",statusIcon:t.statusIcon?t.statusIcon:"statusIcon",style:t.style?t.style:"style",templateObj:t.templateObj?t.templateObj:"templateObj",text:t.text?t.text:"text",tooltip:t.tooltip?t.tooltip:"tooltip",value:t.value?t.value:"value",visible:t.visible?t.visible:"visible"};else this._opt.dataFields={allowDrag:"allowDrag",allowDrop:"allowDrop",allowEdit:"allowEdit",allowFocus:"allowFocus",autoCheck:"autoCheck",canSelect:"canSelect",checkBoxSettings:"checkBoxSettings",checked:"checked",checkState:"checkState",content:"content",contentVisibility:"contentVisibility",contextMenu:"contextMenu",enabled:"enabled",expanded:"expanded",hasChildren:"hasChildren",icon:"icon",id:"id",items:"items",pid:"pid",selected:"selected",statusIcon:"statusIcon",style:"style",templateObj:"templateObj",text:"text",tooltip:"tooltip",value:"value",visible:"visible"};if(this._cDtaService)this._cDtaService.updateDataFields(this._opt.dataFields)}_uOpt(t){if(t){this._opt={allowDrag:this._cmnSrv.isFieldAvailable(t.allowDrag,!1),allowDrop:this._cmnSrv.isFieldAvailable(t.allowDrop,!0),allowFilter:this._cmnSrv.isFieldAvailable(t.allowFilter,!1),allowFocus:this._cmnSrv.isFieldAvailable(t.allowFocus,!1),dataFields:null,selectedItem:this._cmnSrv.isFieldAvailable(t.selectedItem,this._opt.selectedItem?this._opt.selectedItem:null)};this._uShSc(t.showScroll)}else{this._opt={allowDrag:!1,allowDrop:!0,allowFilter:!1,allowFocus:!1,dataFields:null,selectedItem:null};this._uDtFields();this._uShSc()}}_rstScItLt(){this._scItLt.length=0;this.update()}_uScItLt(){this._rstScItLt()}_uShSc(t){if(t)this._opt.showScroll={horizontal:this._cmnSrv.isFieldAvailable(t.horizontal,!0),vertical:this._cmnSrv.isFieldAvailable(t.vertical,!0)};else this._opt.showScroll={horizontal:!0,vertical:!0}}_calAfSelEv(t){let e={item:t};this._inkEv("afterSelect",e);this._inkEv("selectionChanged",e)}exportToJSON(t,e){e=e?e:null;let i=this.items,s=t?t:[this._opt.dataFields.allowDrag,this._opt.dataFields.allowDrop,this._opt.dataFields.allowEdit,this._opt.dataFields.allowFocus,this._opt.dataFields.autoCheck,this._opt.dataFields.canSelect,this._opt.dataFields.checkBoxSettings,this._opt.dataFields.checked,this._opt.dataFields.checkState,this._opt.dataFields.content,this._opt.dataFields.contentVisibility,this._opt.dataFields.contextMenu,this._opt.dataFields.enabled,this._opt.dataFields.fixed,this._opt.dataFields.fixChildren,this._opt.dataFields.hasChildren,this._opt.dataFields.icon,this._opt.dataFields.id,this._opt.dataFields.selected,this._opt.dataFields.showCheckBox,this._opt.dataFields.statusIcon,this._opt.dataFields.style,this._opt.dataFields.templateObj,this._opt.dataFields.text,this._opt.dataFields.tooltip,this._opt.dataFields.value,this._opt.dataFields.visible];return JSON.stringify(i,s,e)}_clrHvIt(){let t=this;if(t._hIt){let e=setTimeout(function(){let i=t._gOjFmScIt(t._hIt);t._hIt=null;t._uItSty(i);clearTimeout(e)},25)}}cloneItem(t){return this._cDtaService.clone(t)}_crtClnLt(t){let e=[];t.map(t=>e.push(this.cloneItem(t)));return e}_gOjFmIt(t){return this._gOjFmLt(t,this._cLt)}_gOjFmLt(t,e){let i=e.filter(e=>t&&e.data===t);return i.length>0?i[0]:null}_gOjFmScIt(t){return this._gOjFmLt(t,this._scItLt)}_gItCIdx(t){let e=this._gOjFmIt(t);return t&&e&&this._cLt?this._cLt.indexOf(e):-1}_gItScIdx(t){return t&&this._scItLt?this._scItLt.indexOf(t):-1}_gItEl(t){let e=this._gOjFmScIt(t);if(e){let t=this._gItElList(),i=this._gItScIdx(e);if(i>=0&&i<t.length)return t[i]}return null}_gItCntEl(t){let e=this._gOjFmScIt(t);if(e){let t=this._gItCntElList(),i=this._gItScIdx(e);if(i>=0&&i<t.length)return t[i]}return null}_gItElList(){return this._itemElems?this._itemElems:null}_gItCntElList(){return this._itemContentElems?this._itemContentElems:null}getList(t,e){let i=[];switch(t){case"current":i=this._cLt;break;case"selected":i=this._cSelItms;break;default:i=this._cDtaService.getList(e)}return i}getFullList(){return this._flLt}_uCLt(){}_uFulLt(){this._flLt.length=0;return this._flLt}getTopItem(){return!1!==this.virtualMode?this._scItLt.length>0?this._scItLt[0].data:null:null}_isChOf(t,e){return!1}_isIdxIRng(t){return this._cLt?t>=0&&t<this._cLt.length:!1}_isItAlw(t){if(!1===t[this._opt.dataFields.visible])return!1;else return!0}_ftrChdn(t){let e=!1,i=t[this._opt.dataFields.items];if(i)for(let t=0;t<i.length&&!(e=this._isItAlw(i[t]));t++);return e}_isItEnb(t){return!0}_isItHv(t){return!this._scTmAct&&t&&t===this._hIt?!0:!1}_isItSel(t){return t&&!0===t[this._opt.dataFields.selected]?!0:!1}_isPrnOf(t,e){return!1}_uItLt(){}_gLstItIdx(){let t=this._cDtaService.getList();return t?t.length-1:-1}getPrevItem(t){let e=null;if(t){let i=this._cDtaService.getList(),s=i.indexOf(t);if((s=s>0?s-1:-1)>=0)e=i[s]}return e}getNextItem(t){let e=null;if(t){let i=this._cDtaService.getList(),s=i.indexOf(t);if((s=s<i.length-1?s+1:-1)>=0)e=i[s]}return e}moveItem(t,e,i,s){if(t){this._alwUp=!1;let l=-1;switch(e){case IntegralUIMoveDirection.At:l=s;break;case IntegralUIMoveDirection.Down:i=this._getNextItem(t);break;case IntegralUIMoveDirection.First:l=0;break;case IntegralUIMoveDirection.Last:l=this._gLstItIdx();break;case IntegralUIMoveDirection.Up:i=this._getPrevItem(t);break;default:l=-1}if(Array.isArray(t)){if(t.length>0){if(this._gItCIdx(t[0])<=this._gItCIdx(t[t.length-1]))for(let s=0;s<t.length;s++)this._mvItAt(t[s],i,e,l);else for(let s=t.length-1;s>=0;s--)this._mvItAt(t[s],i,e,l)}}else this._mvItAt(t,i,e,l);this._alwUp=!0;this.updateLayout();this._inkEv("itemMoved",{item:t})}}_mvItAt(t,e,i,s){if(this.removeItem(t))if(i===IntegralUIMoveDirection.First||i===IntegralUIMoveDirection.Right||i===IntegralUIMoveDirection.Last||i===IntegralUIMoveDirection.At)this.insertItemAt(t,s,e);else if(i===IntegralUIMoveDirection.Before||i===IntegralUIMoveDirection.Up)this.insertItemBefore(t,e);else if(i===IntegralUIMoveDirection.After||i===IntegralUIMoveDirection.Left||i===IntegralUIMoveDirection.Down)this.insertItemAfter(t,e)}_iMuEnt(t,e){if(this._enbl&&!this._scAct){this._hIt=e.data;this._uItSty(e);this.update();this._inkEv("itemHover",{item:e.data})}}_iMuMv(t,e){if(this._enbl&&!this._scAct){this._hIt=e.data;this._uItSty(e);this._inkEv("itemHover",{item:e.data})}}_iMuLv(t,e){if(this._enbl&&!this._scAct){this._hIt=null;this._uItSty(e);this.update()}}_iGtFc(t){if(this._enbl&&!this._scAct)this.focusedItem=t.data}_iLtFc(t){this.focusedItem=null;this.refresh()}_iKeyDn(t,e){if(this._enbl){let i={cancel:!1,item:e.data,event:t};this._inkEv("keyDown",i);switch(t.keyCode){case 9:break;case 13:this._inkEv("beforeEdit",i);break;case 27:break;case 33:if(!i.cancel&&this._opt.allowFocus){t.preventDefault();this._keyAct=!0;this._prcPgUpKey(e)}break;case 34:if(!i.cancel&&this._opt.allowFocus){t.preventDefault();this._keyAct=!0;this._prcPgDnKey(e)}break;case 35:if(!i.cancel&&this._opt.allowFocus){t.preventDefault();this._keyAct=!0;this._prcEdKey(e)}break;case 36:if(!i.cancel&&this._opt.allowFocus){t.preventDefault();this._keyAct=!0;this._prcHmKey(e)}break;case 37:if(!i.cancel&&this._opt.allowFocus){t.preventDefault();this._keyAct=!0;this._prcLfArwKey(e)}break;case 32:break;case 38:if(!i.cancel&&this._opt.allowFocus){t.preventDefault();this._keyAct=!0;this._prcUpArwKey(e)}break;case 39:if(!i.cancel&&this._opt.allowFocus){t.preventDefault();this._keyAct=!0;this._prcRtArwKey(e)}break;case 40:if(!i.cancel&&this._opt.allowFocus){t.preventDefault();this._keyAct=!0;this._prcDnArwKey(e)}break;default:this._cDftFunc()}}}_iKeyPrs(t,e){if(this._enbl){let i={cancel:!1,item:e.data,event:t};this._inkEv("keyPress",i)}}_iKeyUp(t,e){if(this._enbl){let i={cancel:!1,item:e.data,event:t};this._inkEv("keyUp",i)}}_uFcIt(){if(this._opt.allowFocus&&this._cFOj){let t=this._gItCntEl(this._cFOj.data);if(t)t.focus()}}_prcDnArwKey(t,e){let i=this._gDnIt(t);if(i){this._cFOj=i;let t=this,s=setTimeout(function(){t._prcSel(e,i.data);clearTimeout(s)},1);if(this._isLstIt(i))this.scrollPos({x:this._cSclPs.x,y:this._cSclPs.y+2*this._avgItHt});this.refresh()}return i}_prcEdKey(t,e){let i=null;if(this._scItLt.length>0){this.scrollPos({x:this._cSclPs.x,y:this._mxSclPs.y});let t=this;setTimeout(function(){i=t._scItLt[t._scItLt.length-1];t._cFOj=i;let s=setTimeout(function(){t._prcSel(e,i.data);clearTimeout(s)},1)},1)}return i}_prcHmKey(t,e){let i=null;if(this._scItLt.length>0){this.scrollPos({x:this._cSclPs.x,y:0});let t=this;setTimeout(function(){i=t._scItLt[0];t._cFOj=i;let s=setTimeout(function(){t._prcSel(e,i.data);clearTimeout(s)},1)},1)}return i}_prcLfArwKey(t,e){return null}_prcPgDnKey(t,e){let i=null;if(this._scItLt.length>0){this.scrollPos({x:this._cSclPs.x,y:this._cSclPs.y+this._avgItHt*(this._scItLt.length-1)});let s=this;setTimeout(function(){let l=t.index>=0&&t.index<s._scItLt.length?t.index:s._scItLt.length-1;if(s._cSclPs.y===s._mxSclPs.y)l=s._scItLt.length-1;i=s._scItLt[l];s._cFOj=i;let c=setTimeout(function(){s._prcSel(e,i.data);clearTimeout(c)},1)},1)}return i}_prcPgUpKey(t,e){let i=null;if(this._scItLt.length>0){this.scrollPos({x:this._cSclPs.x,y:this._cSclPs.y-this._avgItHt*(this._scItLt.length-1)});let s=this;setTimeout(function(){let l=t.index>=0&&t.index<s._scItLt.length?t.index:0;if(0===s._cSclPs.y)l=0;i=s._scItLt[l];s._cFOj=i;let c=setTimeout(function(){s._prcSel(e,i.data);clearTimeout(c)},1)},1)}return i}_prcRtArwKey(t,e){return null}_prcUpArwKey(t,e){let i=this._gUpIt(t);if(i){this._cFOj=i;let t=this,s=setTimeout(function(){t._prcSel(e,i.data);clearTimeout(s)},1);if(this._isFstIt(i))this.scrollPos({x:this._cSclPs.x,y:this._cSclPs.y-this._avgItHt})}return i}_gDnIt(t){let e=t.index>=0&&t.index<this._scItLt.length-1?t.index+1:-1;return e>=0?this._scItLt[e]:null}_gUpIt(t){let e=t.index>0?t.index-1:-1;return e>=0?this._scItLt[e]:null}_isFstIt(t){return 0===t.index?!0:!1}_isLstIt(t){return t.index===this._scItLt.length-2?!0:!1}moveFocusFromItem(t,e){if(!this._opt.allowFocus)return null;let i=null,s=this._gOjFmScIt(t);if(s)switch(e){case"down":i=this._prcDnArwKey(s);break;case"end":i=this._prcEdKey(s);break;case"home":i=this._prcHmKey(s);break;case"left":i=this._prcLfArwKey(s);break;case"pagedown":i=this._prcPgDnKey(s);break;case"pageup":i=this._prcPgUpKey(s);break;case"right":i=this._prcRtArwKey(s);break;case"up":i=this._prcUpArwKey(s);break;default:this._cDftFunc()}return i?i.data:null}_wKeyDn(t){if(this._enbl&&this._keyAct)t.preventDefault()}_wKeyUp(t){this._keyAct=!1}_chkSelChg(){if(this._cSelItms.length>0){let t=this.getFullList(),e=[];this._cSelItms.forEach(i=>{if(0===t.filter(t=>this._cmnSrv.isEqual(t[this._opt.dataFields.id],i[this._opt.dataFields.id])).length)e.push(i)});if(e.length>0){let t=[];e.forEach(e=>{e[this._opt.dataFields.selected]=!1;t.push(this._cSelItms.indexOf(e))});if(this._cSel&&e.filter(t=>this._cmnSrv.isEqual(this._cSel[this._opt.dataFields.id],t[this._opt.dataFields.id])).length>0)this._cSel=null;for(let e=t.length-1;e>=0;e--)this._cSelItms.splice(t[e],1);this._inkEv("selectionChanged",{item:this._cSel})}}}_gCntSz(){return{width:0,height:0}}refresh(){}_uBlkSz(){this._blkSz={width:0,height:0}}_rstLyTm(){if(this._uTmr)clearTimeout(this._uTmr);this._uTmr=null}suspendLayout(){this._alwUp=!1}resumeLayout(){this._alwUp=!0;this.updateLayout()}async shouldUpdate(t){t.forEach((t,e)=>{});if(t.has("items"))await this.updateLayout();if(this._eRf){this._clRc={width:this._eRf.clientWidth-2,height:this._eRf.clientHeight-2};if(this._clRc.width!==this._prvClRc.width){this.updateLayout();this._prvClRc.width=this._clRc.width}else if(this._clRc.height!==this._prvClRc.height){this.updateLayout();this._prvClRc.height=this._clRc.height}}return!0}_uCLy(t){}_uItEls(){this._itemElems=this.shadowRoot.querySelectorAll("li[data-item]");this._itemContentElems=this.shadowRoot.querySelectorAll("div[data-item-content]")}async updateLayout(){await this._prcULy();await this._prcULy();this.update()}_prcULy(){let t=this;return new Promise(e=>{t._isUAct=!0;if(t._alwUp){t._rstLyTm();t._uTmr=setTimeout(function(){t._uCLt();t._uFulLt();t._clRc={width:t._eRf.clientWidth,height:t._eRf.clientHeight};t._uScItLt();t.update();let i=setTimeout(function(){t._uItEls();t._uVblRng();setTimeout(function(){t._uItEls();t._uBlkSz();t._chkSelChg();t._avgItHt=0;let i=t._gItElList();if(i&&i.length>0){let e=0;for(let t=0;t<i.length;t++)e+=i[t].offsetHeight;t._avgItHt=Math.floor(e/i.length)}t._uScSz();t._uVblRng();t._uScItLt();t.refresh();let s=setTimeout(function(){t._uBlkSz();t._inkEv("updateComplete");t._isUAct=!1;t._uItEls();clearTimeout(s);e()},1)},1);clearTimeout(i)},1);clearTimeout(t._uTmr)},1)}})}_uScSz(){let t=this;t._cntSz={width:t._clRc.width-2,height:t._clRc.height-2};t._scSz={width:0,height:t._avgItHt*t._cLt.length-t._clRc.height+t._avgItHt};if(t.isVerScrollVisible()){t._cntSz.width-=18;if(t._scSz.width>0)t._scSz.width+=16}if(t.isHorScrollVisible())t._scSz.height+=16;t._scSz.width=t._scSz.width>0?t._scSz.width:0;t._scSz.height=t._scSz.height>0?t._scSz.height:0;t._mxSclPs={x:t._scSz.width,y:t._scSz.height};if(t._cSclPs.x>t._mxSclPs.x)t._chgHScPs(t._mxSclPs.x);if(t._cSclPs.y>t._mxSclPs.y)t._chgVScPs(t._mxSclPs.y);t._scBrSz={width:t.isVerScrollVisible()?t._clRc.width-18:t._clRc.width-4,height:t.isHorScrollVisible()?t._clRc.height-18:t._clRc.height-4};t._scLChg={x:t._scBrSz.width,y:t._scBrSz.height}}_uVblRng(){this._vblRg=1;let t=this._gItElList();if(t&&t.length>0){let e=0;for(let i=0;i<t.length;i++)e+=t[i].offsetHeight;let i=Math.floor(e/t.length);if(i>0)this._vblRg=Math.floor(this._clRc.height/i)+1}}updateView(){this._cIdx=this._avgItHt>0?Math.floor(this._cSclPs.y/this._avgItHt):0;if(this._cIdx!==this._prvIdx){this._uScItLt();this._uBlkSz();this._prvIdx=this._cIdx;this.update();this._uItEls()}}_oCMuEnt(t){if(this._enbl)this.state|=IntegralUIObjectState.Hovered;this._ctrCrs="default"}_oCMuLv(t){this.state&=~IntegralUIObjectState.Hovered;this.update();this._stpScTm()}_oCMuMv(t){if(!this._hIt)this.update()}_iMuDn(t,e){if(this._enbl){this._isIClk=!0;if(this._opt.allowFocus&&1===t.buttons)this._cFOj=e;this._prcSel(t,e.data);if(this._prevClickedObj)this._prevClickedObj.isClicked=!1;e.isClicked=!0;e.clickPos=this._cmnSrv.getClientPos(t,this._eRf);this._prevClickedObj=e}t.stopPropagation()}_iMuUp(t,e){this._isIClk=!1}_oSc(t){if(t.target)if(!this.virtualMode)this.scrollPos({x:t.target.scrollLeft,y:t.target.scrollTop});else{t.target.scrollTop=0;t.target.scrollLeft=0}}scrollPos(t){if(t){this._cSclPs={x:Math.max(0,Math.min(t.x,this._mxSclPs.x)),y:Math.max(0,Math.min(t.y,this._mxSclPs.y))};this.updateView();this._inkEv("scrollPosChanged",{value:this._cSclPs})}return{x:Math.floor(this._cSclPs.x),y:Math.floor(this._cSclPs.y)}}_chgHScPs(t){this._cSclPs.x=Math.max(0,Math.min(t,this._mxSclPs.x));if(this._cSclPs.x!==this._prvSclPs.x){this._inkEv("scrollPosChanged",{value:this.scrollPos()});this._prvSclPs.x=this._cSclPs.x;this.update()}}_chgVScPs(t){this._cSclPs.y=Math.max(0,Math.min(t,this._mxSclPs.y));if(this._cSclPs.y!==this._prvSclPs.y){this.updateView();this._inkEv("scrollPosChanged",{value:this.scrollPos()});this._prvSclPs.y=this._cSclPs.y}}_prcMuWh(t,e){if(this._enbl){this._hIt=null;let i=Math.max(-1,Math.min(1,t.wheelDelta||-t.detail)),s=5;switch(this._mouseWheelSpeed){case IntegralUISpeedMode.VerySlow:s=15;break;case IntegralUISpeedMode.Slow:s=9;break;case IntegralUISpeedMode.Fast:s=3;break;case IntegralUISpeedMode.VeryFast:s=1;break;default:s=5}if(!1!==this.virtualMode){t.preventDefault();if(this.isVerScrollVisible()){let t=Math.floor(this._clRc.height/s);if(this._mouseWheelSpeed===IntegralUISpeedMode.VerySlow&&this._avgItHt>0)t=this._avgItHt;let e=this._cSclPs.y+t*i*-1;if(i>0&&e<=this._avgItHt)e=0;this._chgVScPs(e)}else if(e&&this.isHorScrollVisible()){let t=Math.floor(this._clRc.width/s),e=this._cSclPs.x+t*i*-1;this._chgHScPs(e)}t.stopPropagation()}}}isVerScrollVisible(){return this._enbl&&this._opt.showScroll.vertical&&this._scSz.height>0?!0:!1}isHorScrollVisible(){return this._enbl&&this._opt.showScroll.horizontal&&this._scSz.width>0?!0:!1}_oVScSt(t){this._hIt=null;this._scAct=!0}_oVScEd(t){this._scAct=!1}_oVScChg(t){this._chgVScPs(t.detail.value)}_oHScSt(t){this._hIt=null;this._scAct=!0}_oHScEd(t){this._scAct=!1}_oHScChg(t){this._cSclPs.x=t.detail.value;this._inkEv("scrollPosChanged",{value:this.scrollPos()});this.update()}_scMuEnt(t){this.update()}_prcSc(t){if(this.isVerScrollVisible()){let e=this._cmnSrv.getShiftPos(),i=this._cmnSrv.getMousePos(t);i.x-=e.x;i.y-=e.y;let s=this._cmnSrv.getPageRect(this._eRf),l=s.top+25,c=s.bottom-25;if(this.isHorScrollVisible())c-=16;if(i.y<l&&this._cSclPs.y>0)this._strScTm(!1);else if(i.y>c&&this._cSclPs.y<this._mxSclPs.y)this._strScTm(!0);else this._stpScTm()}else this._stpScTm()}_strScTm(t,e){let i=this;i._rmvDpMk();if(!i._scTmAct){i._acclr=.5;i._scCt=0;i._scTmAct=!0;let s=e?e:100;if(!i._scTmId)i._scTmId=setInterval(function(){i._scTmEps(t)},s)}}_stpScTm(){if(this._scTmId){clearInterval(this._scTmId);this._scTmId=null}this._acclr=.5;this._scCt=0;this._scTmAct=!1}_scTmEps(t){let e=this._cSclPs;if(0===this._scCt)this._scCt=5;this._scCt+=5;this._acclr+=.5;this._scCt+=Math.floor(this._acclr);let i=this._scCt;if(t)if(this._cSclPs.y+i>this._mxSclPs.y)this._cSclPs.y=this._mxSclPs.y;else this._cSclPs.y+=i;else if(this._cSclPs.y-i<0)this._cSclPs.y=0;else this._cSclPs.y-=i;if(e.y<=0||this._cSclPs.y<e.y)this._stpScTm();this.update()}scrollTo(t){if(!1!==this.virtualMode&&t){let e=this._gItCIdx(t);if(e>=0)this.scrollPos({x:this._cSclPs.x,y:this._avgItHt*(e+this._vblRg/2)});this.updateLayout()}}findItemById(t){return this._cDtaService.findObjectById(t)}findItemByText(t){return this._cDtaService.findObjectByText(t)}clearSelection(){this._clrPrvSel();this._cSel=null;this.refresh()}_clrCmpSel(){this._itemList.forEach(t=>t.state&=~IntegralUIObjectState.Selected)}_clrPrvSel(t){for(let e=0;e<this._cSelItms.length;e++)if(t&&!this._cmnSrv.isEqual(this._cSelItms[e][this._opt.dataFields.id],t[this._opt.dataFields.id]))this._cSelItms[e][this._opt.dataFields.selected]=!1;else if(!t)this._cSelItms[e][this._opt.dataFields.selected]=!1;this._cSelItms.length=0;if(t&&this._isItEnb(t))this._cSelItms.push(t)}_isItSelLt(t){let e=!1,i=this._cSelItms;if(t&&i)for(let s=0;s<i.length;s++)if(this._cmnSrv.isEqual(i[s][this._opt.dataFields.id],t[this._opt.dataFields.id])){e=!0;break}return e}_isCtrKPrs(t){return t&&(t.ctrlKey||t.metaKey)}_prcSel(t,e,i){let s=this,l=!0;if(e){if(s.selectionMode===IntegralUISelectionMode.None||!1===e[s._opt.dataFields.canSelect])return;let t=s._cSelItms.length>0;if(!s._isItEnb(e)){s._clrPrvSel();s.refresh();if(t)this._inkEv("selectionChanged",{item:null})}else{let i=s._cSel,c=!0;if(i)c=!this._cmnSrv.isEqual(i[s._opt.dataFields.id],e[s._opt.dataFields.id])||!1===i[s._opt.dataFields.selected];let h={cancel:!1,item:e};s._inkEv("beforeSelect",h);l=!0===h.cancel?!1:!0;if(!0!==h.cancel)if(c){s._clrPrvSel();s._cSel=e;e[s._opt.dataFields.selected]=!0;if(!s._isItSelLt(e))s._cSelItms.push(e);s._calAfSelEv(e);s.refresh()}else if(!(s.selectionMode&IntegralUISelectionMode.MultiSimple)&&(1===s._cSelItms.length||!s._isItSelLt(e))){s._clrPrvSel(e);s.refresh();if(c&&t)s._inkEv("selectionChanged",{item:null})}}}return l}_gItInSty(t){return t.data[this._opt.dataFields.style]||{}}_uItSty(t){if(t){t.style={general:{},content:{}};t.inlineStyle=this._gItInSty(t);t.style.general[this._iCsNm]=!0;t.style.general[this._opt.currentStyle.item.general.normal]=!0;t.style.content[this._iCntCsNm]=!0;t.style.content[this._opt.currentStyle.item.content.normal]=!0;if(!this._isItEnb(t.data)){t.style.general[this._opt.currentStyle.item.general.disabled]=!0;t.style.content[this._opt.currentStyle.item.content.disabled]=!0}else if(this._isItSel(t.data)){t.style.general[this._opt.currentStyle.item.general.selected]=!0;t.style.content[this._opt.currentStyle.item.content.selected]=!0}else if(this._isItHv(t.data)){t.style.general[this._opt.currentStyle.item.general.hovered]=!0;t.style.content[this._opt.currentStyle.item.content.hovered]=!0}if(this._opt.allowFocus&&this._cFOj&&t.data===this._cFOj.data){t.style.general[this._opt.currentStyle.item.general.focused]=!0;t.style.content[this._opt.currentStyle.item.content.focused]=!0}}}_gItSty(t){if(t)return{general:this._gItGnSty(t.general),content:this._gItCntSty(t.content)};else return this._gDfItSty()}_gItGnSty(t){if(this._cmnSrv.isString(t))return t;else if(t)return{disabled:this._cmnSrv.isFieldAvailable(t.disabled,this._iCsNm+"-disabled"),focused:this._cmnSrv.isFieldAvailable(t.focused,this._iCsNm+"-focused"),normal:this._cmnSrv.isFieldAvailable(t.normal,this._iCsNm),hovered:this._cmnSrv.isFieldAvailable(t.hovered,this._iCsNm+"-hovered"),selected:this._cmnSrv.isFieldAvailable(t.selected,this._iCsNm+"-selected")};else return this._gDfItGnSty()}_gItCntSty(t){if(this._cmnSrv.isString(t))return t;else if(t)return{disabled:this._cmnSrv.isFieldAvailable(t.disabled,this._iCntCsNm+"-disabled"),focused:this._cmnSrv.isFieldAvailable(t.focused,this._iCntCsNm+"-focused"),normal:this._cmnSrv.isFieldAvailable(t.normal,this._iCntCsNm),hovered:this._cmnSrv.isFieldAvailable(t.hovered,this._iCntCsNm+"-hovered"),selected:this._cmnSrv.isFieldAvailable(t.selected,this._iCntCsNm+"-selected")};else return this._gDfItCntSty()}_gDfLtSty(){return{general:this._gDfGnSty(),item:this._gDfItSty()}}_gDfItSty(){return{general:this._gDfItGnSty(),content:this._gDfItCntSty()}}_gDfItGnSty(){return{disabled:this._dfSty.item.general.disabled,focused:this._dfSty.item.general.focused,normal:this._dfSty.item.general.normal,hovered:this._dfSty.item.general.hovered,selected:this._dfSty.item.general.selected}}_gDfItCntSty(){return{disabled:this._dfSty.item.content.disabled,focused:this._dfSty.item.content.focused,normal:this._dfSty.item.content.normal,hovered:this._dfSty.item.content.hovered,selected:this._dfSty.item.content.selected}}_uSty(t){if(t)this._opt.currentStyle={general:this._gGnSty(t.general),item:this._gItSty(t.item)};else this._opt.currentStyle=this._gDfLtSty()}_gItTpl(t){let e=this._cmnSrv.isString(t.icon)?t.icon.split(" "):[],i={};e.map(t=>i[t]=!0);return html`\n			<span class=${classMap(i)}></span>\n			<span class="iui-listitem-label" >${t.text}</span>\n		`}_iTchSt(t,e){if(this._enbl){if(this._opt.allowFocus&&1===t.buttons)this._cFOj=e;this._prcSel(t,e.data)}}_iTchMu(t,e){}_iTchEd(t,e){}_ctrTchSt(t){t.preventDefault();if(this._enbl){let e=this._cmnSrv.getTouchData(t);if(e&&e.length>0)this._tchStPs={x:e[0].pageX,y:e[0].pageY}}}_ctrTchEd(t){let e=this;if(e._enbl){let i=e._cmnSrv.getTouchData(t);if(i&&i.length>0)e._tchEdPs={x:i[0].pageX,y:i[0].pageY};let s={dx:e._tchEdPs.x-e._tchStPs.x,dy:e._tchEdPs.y-e._tchStPs.y},l=!1,c=!1,h=e._tchStPs,a={x:e._cSclPs.x,y:e._cSclPs.y},r=setInterval(function(){let t=e._cSclPs;if(s.dx<-20){h.x-=30;if(h.x>e._tchEdPs.x)t.x+=30;else{t.x=a.x-s.dx;l=!0}}else if(s.dx>20){h.x+=30;if(h.x<e._tchEdPs.x)t.x-=30;else{t.x=a.x-s.dx;l=!0}}else l=!0;if(s.dy<-20){h.y-=25;if(h.y>e._tchEdPs.y)t.y+=25;else{t.y=a.y-s.dy;c=!0}}else if(s.dy>20){h.y+=25;if(h.y<e._tchEdPs.y)t.y-=25;else{t.y=a.y-s.dy;c=!0}}else c=!0;e.scrollPos(t);if(l&&c)clearInterval(r)},5);e._tchStPs=e._tchEdPs}}}export default IntegralUIBaseList;