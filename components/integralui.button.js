/*
  filename: integralui.button.js
  version : 20.2.0
  Copyright © 2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web Lite" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web Lite License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/lite/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import{IntegralUIObjectState,IntegralUITheme}from"./integralui.enums.js";import IntegralUIBaseValue from"./integralui.base.value.js";import{iuiButtonDefaultStyle}from"../styles/integralui.button.style.js";import{iuiButtonOfficeStyle}from"../themes/office/integralui.button.office.js";import{iuiButtonMidnightStyle}from"../themes/midnight/integralui.button.midnight.js";class IntegralUIButton extends IntegralUIBaseValue{constructor(){super();this._pCtr=null;this._prsVl=!1;this._gnrCsNm="iui-button";this._cntCSName=this._gnrCsNm+"-content";this._cCtrStyStt=iuiButtonDefaultStyle;this._iniStyle()}_ini(){super._ini();this._iniStyle()}connectedCallback(){}disconnectedCallback(){}setParent(t){this._pCtr=t}attributeChangedCallback(t,e,s){super.attributeChangedCallback(t,e,s)}static get properties(){return{pressed:{type:Boolean,reflect:!0}}}get pressed(){return this._prsVl}set pressed(t){if(this._prsVl!==t){const e=this._prsVl;this._prsVl=t;if(this._prsVl)this.state|=IntegralUIObjectState.Selected;else this.state&=~IntegralUIObjectState.Selected;this.refresh();this._inkEv("pressedChanged",{pressed:this._prsVl});this.requestUpdate("pressed",e)}}_ctrMuDn(t){if(this._enbl&&this._pCtr&&1===t.which)this._pCtr.invokeCtrlMethod("PRESS",this)}_ctrMuEt(t){if(this._enbl)this.state|=IntegralUIObjectState.Hovered}_ctrMuLv(t){if(this._enbl)this.state&=~IntegralUIObjectState.Hovered}_uThSt(t){this._cThmSettings=css``;switch(t){case IntegralUITheme.Office:this._cThmSettings.cssText=this._cmnSrv.replaceAll(iuiButtonOfficeStyle.cssText,"../icons",this._cRsPt);break;case IntegralUITheme.Midnight:this._cThmSettings.cssText=this._cmnSrv.replaceAll(iuiButtonMidnightStyle.cssText,"../icons",this._cRsPt);break;default:this._cThmSettings.cssText=""}}_ctrTchSt(t){t.preventDefault();if(this._enbl&&this._pCtr)this._pCtr.invokeCtrlMethod("PRESS",this)}firstUpdated(t){this._eRf=this.shadowRoot.querySelector("div[data-ctrl=button]");this.updateLayout()}render(){return html`\n            <style>\n                ${this._cCtrStyStt}\n                ${this._cThmSettings}\n                ${this._cCmSty}\n            </style>\n            <div data-ctrl="button" class=${classMap(this._gCtrCs())} style=${styleMap(this._gCtrSty())} draggable="true" @dragstart="${t=>this._prvDgSt(t)}" @mousedown="${t=>this._ctrMuDn(t)}" @mouseenter="${t=>this._ctrMuEt(t)}" @mouseleave="${t=>this._ctrMuLv(t)}" @touchstart="${t=>this._ctrTchSt(t)}">\n                <div class=${classMap(this._gCntCs())}>\n                    <slot></slot>\n                </div>\n            </div>\n        `}_uCtrStyStt(t){this._cCtrStyStt=css``;this._cCtrStyStt.cssText=this._cmnSrv.replaceAll(iuiButtonDefaultStyle.cssText,"../icons",t)}}window.customElements.define("iui-button",IntegralUIButton);export default IntegralUIButton;