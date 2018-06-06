sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device"
], function(Controller, Device) {
	"use strict";

	return Controller.extend("ZSplitApp_Screen.controller.Detail2", {
		// onPressBack: function(oEvent) {

		// 	this.getOwnerComponent().getRouter().navTo("orderDetails");

		// }
		// onNavBack: function(oEvent) {

		// 	this.getOwnerComponent().getRouter().navTo("orderDetails");

		// }
		onPress:function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this).navTo("orderDetails");
		} 

	});

});