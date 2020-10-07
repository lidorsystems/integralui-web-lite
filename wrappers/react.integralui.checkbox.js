/*
  filename: react.integralui.checkbox.js
  version : 20.2.0
  Copyright © 2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web Lite" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web Lite License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/lite/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1;i.configurable=!0;if("value"in i)i.writable=!0;Object.defineProperty(e,i.key,i)}}return function(t,r,i){if(r)e(t.prototype,r);if(i)e(t,i);return t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function _inherits(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}import React,{Component}from"react";import"../components/integralui.checkbox.js";var IntegralUICheckBoxComponent=function(e){_inherits(t,Component);function t(e){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.ctrlRef=React.createRef();return r}_createClass(t,[{key:"componentDidMount",value:function(){var e=this;this._initProps();if(this.ctrlRef&&this.ctrlRef.current){if(this.props.checkedChanged)this.ctrlRef.current.addEventListener("checkedChanged",function(t){return e.props.checkedChanged(t)});if(this.props.checkStateChanged)this.ctrlRef.current.addEventListener("checkStateChanged",function(t){return e.props.checkStateChanged(t)});if(this.props.enabledChanged)this.ctrlRef.current.addEventListener("enabledChanged",function(t){return e.props.enabledChanged(t)});if(this.props.sizeChanged)this.ctrlRef.current.addEventListener("sizeChanged",function(t){return e.props.sizeChanged(t)});if(this.props.stateChanged)this.ctrlRef.current.addEventListener("stateChanged",function(t){return e.props.stateChanged(t)});if(this.props.valueChanged)this.ctrlRef.current.addEventListener("valueChanged",function(t){return e.props.valueChanged(t)})}}},{key:"componentWillUnmount",value:function(){if(this.ctrlRef&&this.ctrlRef.current){if(this.props.checkedChanged)this.ctrlRef.current.removeEventListener("checkedChanged",this.props.checkedChanged);if(this.props.checkStateChanged)this.ctrlRef.current.removeEventListener("checkStateChanged",this.props.checkStateChanged);if(this.props.enabledChanged)this.ctrlRef.current.removeEventListener("enabledChanged",this.props.enabledChanged);if(this.props.sizeChanged)this.ctrlRef.current.removeEventListener("sizeChanged",this.props.sizeChanged);if(this.props.stateChanged)this.ctrlRef.current.removeEventListener("stateChanged",this.props.stateChanged);if(this.props.valueChanged)this.ctrlRef.current.removeEventListener("valueChanged",this.props.valueChanged)}}},{key:"componentDidUpdate",value:function(e){this._updateData(e)}},{key:"_initProps",value:function(){if(this.ctrlRef&&this.ctrlRef.current){if(this._isDefined(this.props.allowAnimation))this.ctrlRef.current.allowAnimation=this.props.allowAnimation;if(this._isDefined(this.props.checked))this.ctrlRef.current.checked=this.props.checked;if(this._isDefined(this.props.checkState))this.ctrlRef.current.checkState=this.props.checkState;if(this._isDefined(this.props.controlStyle))this.ctrlRef.current.controlStyle=this.props.controlStyle;if(this._isDefined(this.props.customStyle))this.ctrlRef.current.customStyle=this.props.customStyle;if(this._isDefined(this.props.data))this.ctrlRef.current.data=this.props.data;if(this._isDefined(this.props.enabled))this.ctrlRef.current.enabled=this.props.enabled;if(this._isDefined(this.props.name))this.ctrlRef.current.name=this.props.name;if(this._isDefined(this.props.resourcePath))this.ctrlRef.current.resourcePath=this.props.resourcePath;if(this._isDefined(this.props.size))this.ctrlRef.current.size=this.props.size;if(this._isDefined(this.props.state))this.ctrlRef.current.state=this.props.state;if(this._isDefined(this.props.theme))this.ctrlRef.current.theme=this.props.theme;if(this._isDefined(this.props.threeState))this.ctrlRef.current.threeState=this.props.threeState;if(this._isDefined(this.props.value))this.ctrlRef.current.value=this.props.value}}},{key:"_isDefined",value:function(e){return void 0!==e?!0:!1}},{key:"_updateData",value:function(e){if(this.ctrlRef&&this.ctrlRef.current){if(this.props.allowAnimation!==e.allowAnimation)this.ctrlRef.current.allowAnimation=this.props.allowAnimation;if(this.props.checked!==e.checked)this.ctrlRef.current.checkState=this.props.checkState;if(this.props.checkState!==e.checkState)this.ctrlRef.current.checked=this.props.checked;if(this.props.controlStyle!==e.controlStyle)this.ctrlRef.current.controlStyle=this.props.controlStyle;if(this.props.customStyle!==e.customStyle)this.ctrlRef.current.customStyle=this.props.customStyle;if(this.props.data!==e.data)this.ctrlRef.current.data=this.props.data;if(this.props.enabled!==e.enabled)this.ctrlRef.current.enabled=this.props.enabled;if(this.props.name!==e.name)this.ctrlRef.current.name=this.props.name;if(this.props.resourcePath!==e.resourcePath)this.ctrlRef.current.resourcePath=this.props.resourcePath;if(this.props.size!==e.size)this.ctrlRef.current.size=this.props.size;if(this.props.state!==e.state)this.ctrlRef.current.state=this.props.state;if(this.props.theme!==e.theme)this.ctrlRef.current.theme=this.props.theme;if(this.props.threeState!==e.threeState)this.ctrlRef.current.threeState=this.props.threeState;if(this.props.value!==e.value)this.ctrlRef.current.value=this.props.value}}},{key:"refresh",value:function(){if(this.ctrlRef&&this.ctrlRef.current)this.ctrlRef.current.refresh()}},{key:"updateLayout",value:function(){if(this.ctrlRef&&this.ctrlRef.current)this.ctrlRef.current.updateLayout()}},{key:"render",value:function(){return React.createElement("iui-checkbox",{id:this.props.id,ref:this.ctrlRef},this.props.children)}}]);return t}();export default IntegralUICheckBoxComponent;