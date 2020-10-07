/*
  filename: integralui.splitcontainer.js
  version : 20.2.0
  Copyright © 2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web Lite" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web Lite License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/lite/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import{IntegralUIOrientation,IntegralUITheme}from"./integralui.enums.js";import IntegralUIBase from"./integralui.base.js";import{iuiSplitContainerDefaultStyle}from"../styles/integralui.splitcontainer.style.js";import{iuiSplitContainerOfficeStyle}from"../themes/office/integralui.splitcontainer.office.js";import{iuiSplitContainerMidnightStyle}from"../themes/midnight/integralui.splitcontainer.midnight.js";class IntegralUISplitContainer extends IntegralUIBase{_ini(){super._ini();this._pnl1Dt={text:"Panel1"};this._pnl2Dt={text:"Panel2"};this._splAct=!1;this._blkPs={top:"0",right:"auto",bottom:"auto",left:"0"};this._cbtnAlw=!0;this._cntSwp=!1;this._mxPs={x:9999999,y:9999999};this._tbSz={width:0,height:0};this._cOrn=IntegralUIOrientation.Horizontal;this._ctrRc={top:0,right:0,bottom:0,left:0,height:0,width:0,x:0,y:0};this._cSplDst=100;this._pnl1Sz={width:0,height:0};this._pnl2Sz={width:0,height:0};this._splSz={width:0,height:0};this._splBlkSz={width:0,height:0};this._splBBlkSz={width:0,height:0};this._splHdSz={width:0,height:0};this._splStPs={x:0,y:0};this._swpBtnSz={width:0,height:0};this._tb1Sz={width:0,height:0};this._tb1CntSz={width:0,height:0};this._tb2Sz={width:0,height:0};this._tb2CntSz={width:0,height:0};this._cCtrStyStt=iuiSplitContainerDefaultStyle;this._btnCs={};this._hdCs={};this._pnCs={};this._splCs={};this._swpBCs={};this._tbCs={};this._iniStyle()}connectedCallback(){this._winMuUp=this._winMuUp.bind(this);window.addEventListener("mouseup",this._winMuUp)}disconnectedCallback(){window.removeEventListener("mouseup",this._winMuUp)}_iniStyle(){this._gnrCsNm="iui-splitcontainer";this._btnCsName=this._gnrCsNm+"-button";this._hdCsName=this._gnrCsNm+"-handle";this._pnCsName=this._gnrCsNm+"-panel";this._splCsName=this._gnrCsNm+"-splitter";this._swpBCsName=this._gnrCsNm+"-swap-button";this._tbCsName=this._gnrCsNm+"-tab";this._dfSty={general:{disabled:this._gnrCsNm+"-disabled",focused:this._gnrCsNm+"-focused",normal:this._gnrCsNm,hovered:this._gnrCsNm+"-hovered",selected:this._gnrCsNm+"-selected"},panel:{disabled:this._pnCsName+"-disabled",normal:this._pnCsName+"-normal"},splitter:{general:{normal:this._splCsName,horizontal:this._splCsName+"-horizontal",vertical:this._splCsName+"-vertical"},handle:{general:this._hdCsName,horizontal:this._hdCsName+"-horizontal",vertical:this._hdCsName+"-vertical"},swapButton:{disabled:this._swpBCsName+"-disabled",hovered:this._swpBCsName+"-hovered",normal:this._swpBCsName+"-normal",selected:this._swpBCsName+"-selected"},tab:{disabled:this._tbCsName+"-disabled",focused:this._tbCsName+"-focused",hovered:this._tbCsName+"-hovered",normal:this._tbCsName+"-normal",selected:this._tbCsName+"-selected"}}};this._uSty(this._controlStyle);this.refresh()}attributeChangedCallback(t,i,e){super.attributeChangedCallback(t,i,e)}static get properties(){return{orientation:{converter:{fromAttribute:t=>"horizontal"===(t=t.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()?IntegralUIOrientation.Horizontal:IntegralUIOrientation.Vertical,toAttribute:(t,i)=>t===IntegralUIOrientation.Horizontal?"Horizontal":"Vertical"},reflect:!0},panel1:{type:Object},panel2:{type:Object},showButtons:{type:Boolean,attribute:"show-buttons",reflect:!0},splitterDistance:{type:Number,attribute:"splitter-distance",reflect:!0}}}get orientation(){return this._cOrn}set orientation(t){if(this._cOrn!==t){const i=this._cOrn;let e=this,s=setTimeout(function(){e._cOrn=t;e.requestUpdate("orientation",i);e.splitterDistance=e._kpSplPRg(e.splitterDistance);e.refresh();e.updateLayout();e.updateLayout();clearTimeout(s)},1)}}get panel1(){return this._pnl1Dt}set panel1(t){if(this._pnl1Dt!==t){const i=this._pnl1Dt;this._pnl1Dt=t;this.requestUpdate("panel1",i);this.updateLayout()}}get panel2(){return this._pnl2Dt}set panel2(t){if(this._pnl2Dt!==t){const i=this._pnl2Dt;this._pnl2Dt=t;this.requestUpdate("panel2",i);this.updateLayout()}}get showButtons(){return this._cbtnAlw}set showButtons(t){if(this._cbtnAlw!==t){const i=this._cbtnAlw;let e=this,s=setTimeout(function(){e._cbtnAlw=t;e.requestUpdate("panel2",i);e.refresh();e.updateLayout();clearTimeout(s)},100)}}get splitterDistance(){return this._cSplDst}set splitterDistance(t){if(this._cSplDst!==t){const i=this._cSplDst;let e=this,s=setTimeout(function(){e._cSplDst=e._kpSplPRg(t);e.requestUpdate("splitterDistance",i);e.updateLayout();e._inkEv("splitterMoved",{value:t});clearTimeout(s)},1)}}_swpBClk(){if(this._enbl){this._cntSwp=!this._cntSwp;let t=this._pnl1Dt;this._pnl1Dt=this._pnl2Dt;this._pnl2Dt=t;this._inkEv("panelsSwapped");this.updateLayout()}}_kpSplPRg(t){return this.orientation===IntegralUIOrientation.Vertical?Math.min(Math.max(0,t),this._mxPs.x):Math.min(Math.max(0,t),this._mxPs.y)}async updateLayout(){await this._uCtrLy();await this._uCtrLy();this.update()}_uCtrLy(){return new Promise(t=>{let i=this,e=setTimeout(function(){i._splSz={width:0,height:0};let s=i._splitterElem.children;for(let t=0;t<s.length-1;t++){switch(t){case 0:i._tb1Sz={width:s[t].offsetWidth,height:s[t].offsetHeight};break;case 1:i._swpBtnSz={width:s[t].offsetWidth,height:s[t].offsetHeight};break;case 2:i._tb2Sz={width:s[t].offsetWidth,height:s[t].offsetHeight};break;default:i._cDftFunc()}if(i._splSz.width<s[t].offsetWidth)i._splSz.width=s[t].offsetWidth;if(i._splSz.height<s[t].offsetHeight)i._splSz.height=s[t].offsetHeight}i._tb1CntSz={width:i._tab1ContentElem.offsetWidth,height:i._tab1ContentElem.offsetHeight};i._tb2CntSz={width:i._tab2ContentElem.offsetWidth,height:i._tab2ContentElem.offsetHeight};i._splSz.width+=2;i._splSz.height+=2;i._clRc={width:i._eRf.clientWidth-2,height:i._eRf.clientHeight-2};i._pnl1Sz={width:i._cSplDst,height:i._cSplDst};i._pnl2Sz={width:i._clRc.width-i._cSplDst-i._splSz.width-4,height:i._clRc.height-i._cSplDst-i._splSz.height-4};i.update();i._splBBlkSz=i._buttonBlockElem?{width:i._buttonBlockElem.offsetWidth,height:i._buttonBlockElem.offsetHeight}:{width:90,height:0};if(i.orientation===IntegralUIOrientation.Vertical){i._splBlkSz={width:i._splitterElem.clientWidth,height:i._splitterElem.clientHeight-(i._tb1CntSz.width+i._swpBtnSz.height+i._tb2CntSz.width+i._splBBlkSz.height+16)};i._mxPs={x:i._clRc.width-i._splSz.width-4,y:i._clRc.height-i._splSz.width-4}}else{i._splBlkSz={width:i._splitterElem.clientWidth-(i._tb1Sz.width+i._swpBtnSz.width+i._tb2Sz.width+i._splBBlkSz.width+16),height:i._splitterElem.clientHeight};i._mxPs={x:i._clRc.width-i._splSz.height-4,y:i._clRc.height-i._splSz.height-4}}i._splHdSz={width:i._handleElem.offsetWidth,height:i._handleElem.offsetHeight};i.update();clearTimeout(e);t()},10)})}_ctrMuMv(t){if(this._enbl&&1===t.buttons&&this._splAct){let i=this._cmnSrv.getShiftPos(),e={x:t.pageX-this._ctrRc.left-i.x,y:t.pageY-this._ctrRc.top-i.y},s=this._cSplDst;if(this.orientation===IntegralUIOrientation.Vertical){s+=e.x-this._splStPs.x;s=Math.min(Math.max(0,s),this._mxPs.x)}else{s+=e.y-this._splStPs.y;s=Math.min(Math.max(0,s),this._mxPs.y)}if(this._cSplDst!==s){let t={cancel:!1,value:s};this._inkEv("splitterMoving",t);if(!0!==t.cancel){this._cSplDst=s;this.updateLayout()}}this._splStPs=e}}_splMuDn(t){if(this._enbl){let i=this._cmnSrv.getShiftPos(),e={x:t.pageX-this._ctrRc.left-i.x,y:t.pageY-this._ctrRc.top-i.y};if(this.orientation===IntegralUIOrientation.Vertical){if(e.y>this._tb1Sz.height+this._swpBtnSz.height+this._tb2Sz.height+10){this._splStPs=e;this._splAct=!0}}else if(e.x>this._tb1Sz.width+this._swpBtnSz.width+this._tb2Sz.width+10){this._splStPs=e;this._splAct=!0}}}_winMuUp(t){if(this._enbl){this._splAct=!1;this._inkEv("splitterMoved",{value:this._cSplDst})}}_chgOrn(t){this.orientation=t?IntegralUIOrientation.Vertical:IntegralUIOrientation.Horizontal}_gCtrSty(){let t={};if(this._ctrSz.width>0)t.width=this._ctrSz.width+"px";if(this._ctrSz.height>0)t.height=this._ctrSz.height+"px";return t}_gIPn1Sty(){let t={top:"0",left:"0",width:"auto",height:"auto"};if(this.orientation===IntegralUIOrientation.Vertical){t.width=this._pnl1Sz.width+"px";t.height=this._clRc.height+"px"}else t.height=this._pnl1Sz.height+"px";return t}_gIPn2Sty(){let t={top:"0",left:"0",width:"auto",height:"auto"};if(this.orientation===IntegralUIOrientation.Vertical){t.left=this._pnl1Sz.width+this._splSz.width+1+"px";t.width=this._pnl2Sz.width+"px";t.height=this._clRc.height+"px"}else{t.height=this._pnl2Sz.height+"px";t.top=this._pnl1Sz.height+this._splSz.height+"px"}return t}_gISplSty(){let t={top:"0",left:"0",width:"auto",height:"auto"};if(this.orientation===IntegralUIOrientation.Vertical){t.left=this._pnl1Sz.width+"px";t.width=this._splSz.width+"px";t.height=this._clRc.height+"px"}else{t.width=this._clRc.width+"px";t.height=this._splSz.height+"px";t.top=this._pnl1Sz.height+1+"px"}return t}_gITb1Sty(){let t={top:"-1px",left:"0",width:"auto",height:"auto"};if(this.orientation===IntegralUIOrientation.Vertical){t.left="-1px";t["border-left"]="0";t.width=this._tb1CntSz.height+"px";t.height=this._tb1CntSz.width+"px"}else{t.left="-1px";t["border-top"]="0";t.width=this._tb1CntSz.width+"px";t.height=this._tb1CntSz.height+"px"}return t}_gITb1CntSty(){let t={top:"0",left:"0"};if(this.orientation===IntegralUIOrientation.Vertical){t.top=(this._tb1CntSz.width-this._tb1CntSz.height)/2+"px";t.left=(this._tb1CntSz.height-this._tb1CntSz.width)/2+"px"}return t}_gITb2Sty(){let t={top:"auto",right:"auto",bottom:"auto",left:"auto",width:"auto",height:"auto"};if(this.orientation===IntegralUIOrientation.Vertical){t["border-right"]="0";t.right="-1px";t.top=this._tb1CntSz.width+this._swpBtnSz.height+4+"px";t.width=this._tb2CntSz.height+"px";t.height=this._tb2CntSz.width+"px"}else{t.bottom="-1px";t.left=this._tb1CntSz.width+this._swpBtnSz.width+4+"px";t["border-bottom"]="0";t.width=this._tb2CntSz.width+"px";t.height=this._tb2CntSz.height+"px"}return t}_gITb2CntSty(){let t={top:"0",right:"0"};if(this.orientation===IntegralUIOrientation.Vertical){t.top=(this._tb2CntSz.width-this._tb2CntSz.height)/2+"px";t.right=(this._tb2CntSz.height-this._tb2CntSz.width)/2+"px"}return t}_gIHdBSty(){let t={cursor:"ew-resize",width:"auto",height:"auto",top:"auto",left:"auto"};if(this.orientation===IntegralUIOrientation.Vertical){t.height=this._splBlkSz.height+"px";t.top=this._tb1CntSz.width+this._swpBtnSz.height+this._tb2CntSz.width+8+"px";t.left=(this._splBlkSz.width-this._splHdSz.width)/2+"px"}else{t.cursor="ns-resize";t.width=this._splBlkSz.width+"px";t.top=(this._splBlkSz.height-this._splHdSz.height)/2+"px";t.left=this._tb1Sz.width+this._swpBtnSz.width+this._tb2Sz.width+8+"px"}return t}_gIHdSty(){let t={"margin-top":"0","margin-left":"0"};if(this.orientation===IntegralUIOrientation.Vertical)t["margin-top"]=(this._splBlkSz.height-this._splHdSz.height)/2+"px";else t["margin-left"]=(this._splBlkSz.width-this._splHdSz.width)/2+"px";return t}_gISwpBStyle(){if(this.orientation===IntegralUIOrientation.Vertical)return{top:this._tb1CntSz.width+2+"px",left:(this._splSz.width-this._swpBtnSz.width)/2+"px"};else return{top:(this._splSz.height-this._swpBtnSz.height)/2+"px",left:this._tb1CntSz.width+2+"px"}}_gIBtnBStyle(){let t={top:"auto",right:"auto",bottom:"auto",left:"auto"};if(this.orientation===IntegralUIOrientation.Vertical){t.bottom="0px";t.left=Math.abs((this._splBlkSz.width-this._splBBlkSz.width)/2)+"px"}else{t.top=Math.abs((this._splBlkSz.height-this._splBBlkSz.height)/2)+"px";t.right="2px"}return t}_uBtnCs(){this._btnCs={};this._btnCs[this._btnCsName]=!0;this._btnCs[this._opt.currentStyle.splitter.button.general.normal]=!0}_gBtnCs(){return this._btnCs}_uSplCs(){this._splCs={};this._splCs[this._splCsName]=!0;this._splCs[this._opt.currentStyle.splitter.general.normal]=!0;if(this.orientation===IntegralUIOrientation.Vertical)this._splCs[this._opt.currentStyle.splitter.general.vertical]=!0;else this._splCs[this._opt.currentStyle.splitter.general.horizontal]=!0}_gSplCs(){return this._splCs}_uHdCs(){this._hdCs={};this._hdCs[this._hdCsName]=!0;this._hdCs[this._opt.currentStyle.splitter.handle.general]=!0;if(this.orientation===IntegralUIOrientation.Vertical)this._hdCs[this._opt.currentStyle.splitter.handle.vertical]=!0;else this._hdCs[this._opt.currentStyle.splitter.handle.horizontal]=!0}_gHdCs(){return this._hdCs}_uPnCs(){this._pnCs={};this._pnCs[this._pnCsName]=!0;this._pnCs[this._opt.currentStyle.panel.normal]=!0}_gPnCs(){return this._pnCs}_uSwpBCs(){this._swpBCs={};this._swpBCs[this._swpBCsName]=!0;this._swpBCs[this._opt.currentStyle.splitter.swapButton.normal]=!0;if(this.orientation===IntegralUIOrientation.Vertical)this._swpBCs[this._swpBCsName+"-vertical"]=!0}_gSwpBCs(){return this._swpBCs}_uTbCs(){this._tbCs={};this._tbCs[this._tbCsName]=!0;this._tbCs[this._opt.currentStyle.splitter.tab.selected]=!0;if(this.orientation===IntegralUIOrientation.Vertical)this._tbCs[this._tbCsName+"-vertical"]=!0}_gTbCs(){return this._tbCs}_gPnSty(t){if(this._cmnSrv.isString(t))return t;else if(t)return{disabled:this._cmnSrv.isFieldAvailable(t.disabled,this._pnCsName+"-disabled"),normal:this._cmnSrv.isFieldAvailable(t.normal,this._pnCsName)};else return{disabled:this._dfSty.panel.disabled,normal:this._dfSty.panel.normal}}_gSplGnSty(t){if(this._cmnSrv.isString(t))return t;else if(t)return{normal:this._cmnSrv.isFieldAvailable(t.normal,this._splCsName),horizontal:this._cmnSrv.isFieldAvailable(t.horizontal,this._splCsName+"-horizontal"),vertical:this._cmnSrv.isFieldAvailable(t.vertical,this._splCsName+"-vertical")};else return{normal:this._dfSty.splitter.general.normal,horizontal:this._dfSty.splitter.general.horizontal,vertical:this._dfSty.splitter.general.vertical}}_gHdSty(t){if(this._cmnSrv.isString(t))return t;else if(t)return{general:this._cmnSrv.isFieldAvailable(t.general,this._hdCsName),horizontal:this._cmnSrv.isFieldAvailable(t.horizontal,this._hdCsName+"-horizontal"),vertical:this._cmnSrv.isFieldAvailable(t.vertical,this._hdCsName+"-vertical")};else return{general:this._dfSty.splitter.handle.general,horizontal:this._dfSty.splitter.handle.horizontal,vertical:this._dfSty.splitter.handle.vertical}}_gSwpBSty(t){if(this._cmnSrv.isString(t))return t;else if(t)return{disabled:this._cmnSrv.isFieldAvailable(t.disabled,this._swpBCsName+"-disabled"),hovered:this._cmnSrv.isFieldAvailable(t.hovered,this._swpBCsName+"-hovered"),normal:this._cmnSrv.isFieldAvailable(t.normal,this._swpBCsName),selected:this._cmnSrv.isFieldAvailable(t.selected,this._swpBCsName+"-selected")};else return{disabled:this._dfSty.splitter.swapButton.disabled,hovered:this._dfSty.splitter.swapButton.hovered,normal:this._dfSty.splitter.swapButton.normal,selected:this._dfSty.splitter.swapButton.selected}}_gTbSty(t){if(this._cmnSrv.isString(t))return t;else if(t)return{disabled:this._cmnSrv.isFieldAvailable(t.disabled,this._tbCsName+"-disabled"),focused:this._cmnSrv.isFieldAvailable(t.focused,this._tbCsName+"-focused"),hovered:this._cmnSrv.isFieldAvailable(t.hovered,this._tbCsName+"-hovered"),normal:this._cmnSrv.isFieldAvailable(t.normal,this._tbCsName),selected:this._cmnSrv.isFieldAvailable(t.selected,this._tbCsName+"-selected")};else return{disabled:this._dfSty.splitter.tab.disabled,focused:this._dfSty.splitter.tab.focused,hovered:this._dfSty.splitter.tab.hovered,normal:this._dfSty.splitter.tab.normal,selected:this._dfSty.splitter.tab.selected}}_gSplSty(t){if(this._cmnSrv.isString(t))return t;else if(t)return{general:this._gSplGnSty(t.general),handle:this._gHdSty(t.handle),swapButton:this._gSwpBSty(t.swapButton),tab:this._gTbSty(t.tab)};else return this._gDfSplSty()}_gDfSty(){return{general:this._gDfGnSty(),panel:this._gDfPnSty(),splitter:this._gDfSplSty()}}_gDfPnSty(){return{disabled:this._dfSty.panel.disabled,normal:this._dfSty.panel.normal}}_gDfSplSty(){return{general:{normal:this._dfSty.splitter.general.normal,horizontal:this._dfSty.splitter.general.horizontal,vertical:this._dfSty.splitter.general.vertical},handle:{general:this._dfSty.splitter.handle.general,horizontal:this._dfSty.splitter.handle.horizontal,vertical:this._dfSty.splitter.handle.vertical},swapButton:{disabled:this._dfSty.splitter.swapButton.disabled,hovered:this._dfSty.splitter.swapButton.hovered,normal:this._dfSty.splitter.swapButton.normal,selected:this._dfSty.splitter.swapButton.selected},tab:{disabled:this._dfSty.splitter.tab.disabled,focused:this._dfSty.splitter.tab.focused,hovered:this._dfSty.splitter.tab.hovered,normal:this._dfSty.splitter.tab.normal,selected:this._dfSty.splitter.tab.selected}}}_uSty(t){if(t)this._opt.currentStyle={general:this._gGnSty(t.general),panel:this._gPnSty(t.panel),splitter:this._gSplSty(t.splitter)};else this._opt.currentStyle=this._gDfSty()}_uThSt(t){this._cThmSettings=css``;switch(t){case IntegralUITheme.Office:this._cThmSettings.cssText=this._cmnSrv.replaceAll(iuiSplitContainerOfficeStyle.cssText,"../icons",this._cRsPt);break;case IntegralUITheme.Midnight:this._cThmSettings.cssText=this._cmnSrv.replaceAll(iuiSplitContainerMidnightStyle.cssText,"../icons",this._cRsPt);break;default:this._cThmSettings.cssText=""}}firstUpdated(t){this._uRf();this.updateLayout()}refresh(){this._uCtrCs();this._uSplCs();this._uHdCs();this._uPnCs();this._uSwpBCs();this._uTbCs();this.update();this._uRf()}render(){return html`\n            <style>\n                ${this._cCtrStyStt}\n                ${this._cCmSty}\n                ${this._cThmSettings}\n            </style>\n            <div data-ctrl="splitcontainer" class=${classMap(this._gCtrCs())} style=${styleMap(this._gCtrSty())} @mousemove="${t=>this._ctrMuMv(t)}">\n                <div id="panel1" class=${classMap(this._gPnCs())} style=${styleMap(this._gIPn1Sty())}>\n                    ${this._cntSwp?html`<slot name="iui-panel2"></slot>`:html`<slot name="iui-panel1"></slot>`}\n                </div>\n                <div id="splitter" class=${classMap(this._gSplCs())} style=${styleMap(this._gISplSty())} @mousedown="${t=>this._splMuDn(t)}">\n                    <div class=${classMap(this._gTbCs())} style=${styleMap(this._gITb1Sty())}>\n                        <div id="tab1Content" style=${styleMap(this._gITb1CntSty())}>\n                            ${this._pnl1Dt.text?html`<span>${this._pnl1Dt.text}</span>`:html``}\n                        </div>\n                    </div>\n                    <div id="btnSwap" class=${classMap(this._gSwpBCs())} style=${styleMap(this._gISwpBStyle())} @click="${t=>this._swpBClk()}">\n                        <span></span>\n                    </div>\n                    <div class=${classMap(this._gTbCs())} style=${styleMap(this._gITb2Sty())}>\n                        <div id="tab2Content" style=${styleMap(this._gITb2CntSty())}>\n                            ${this._pnl2Dt.text?html`<span>${this._pnl2Dt.text}</span>`:html``}\n                        </div>\n                    </div>\n                    <div class=${classMap(this._gHdCs())} style=${styleMap(this._gIHdBSty())}>\n                        <span id="handle" style=${styleMap(this._gIHdSty())}></span>\n                    </div>\n                    ${this._cbtnAlw?html`\n                            <div id="buttonBlock" class="iui-splitcontainer-button-block" style=${styleMap(this._gIBtnBStyle())}>\n                                <div class=${classMap({"iui-splitcontainer-button":!0,"iui-splitcontainer-button-vertical":!0,"iui-splitcontainer-button-selected":this.orientation===IntegralUIOrientation.Vertical})} style=${styleMap({display:this.orientation===IntegralUIOrientation.Vertical?"block":"inline-block"})} @click="${t=>this._chgOrn(!0)}">\n                                    <span></span>\n                                </div>\n                                <div class=${classMap({"iui-splitcontainer-button":!0,"iui-splitcontainer-button-horizontal":!0,"iui-splitcontainer-button-selected":this.orientation===IntegralUIOrientation.Horizontal})} style=${styleMap({display:this.orientation===IntegralUIOrientation.Vertical?"block":"inline-block"})} @click="${t=>this._chgOrn()}">\n                                    <span></span>\n                                </div>\n                            </div>`:html``}\n                </div>\n                <div id="panel2" class=${classMap(this._gPnCs())} style=${styleMap(this._gIPn2Sty())}>\n                    ${this._cntSwp?html`<slot name="iui-panel1"></slot>`:html`<slot name="iui-panel2"></slot>`}\n                </div>\n            </div>\n        `}_uCtrStyStt(t){this._cCtrStyStt=css``;this._cCtrStyStt.cssText=this._cmnSrv.replaceAll(iuiSplitContainerDefaultStyle.cssText,"../icons",t)}_uRf(){this._buttonBlockElem=this.shadowRoot.querySelector("#buttonBlock");this._eRf=this.shadowRoot.querySelector("div[data-ctrl=splitcontainer]");this._handleElem=this.shadowRoot.querySelector("#handle");this._panel1Elem=this.shadowRoot.querySelector("#panel1");this._panel2Elem=this.shadowRoot.querySelector("#panel2");this._splitterElem=this.shadowRoot.querySelector("#splitter");this._tab1ContentElem=this.shadowRoot.querySelector("#tab1Content");this._tab2ContentElem=this.shadowRoot.querySelector("#tab2Content");this._ctrRc=this._cmnSrv.getPageRect(this._eRf)}}window.customElements.define("iui-splitcontainer",IntegralUISplitContainer);export default IntegralUISplitContainer;