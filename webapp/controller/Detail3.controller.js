sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ZSplitApp_Screen.controller.Detail3", {
		onInit: function() {
			this.getOwnerComponent().getRouter().getRoute("orderDetails").attachPatternMatched(this._onRouteMatched, this);

		},
		//Getting data from odata service
		_onRouteMatched: function(oEvent) {
			// var orderId = oEvent.getParameter("arguments").orderId;
			// // var productId = oEvent.getParameter("arguments").productId;
			// this.getView().bindElement("/orders/" + orderId);

			var detailData = oEvent.getParameter("arguments");
			// var productId = oEvent.getParameter("arguments").productId;
			var model = new sap.ui.model.json.JSONModel(detailData);
			this.getView().setModel(model);
		},
		onPress2: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this).navTo("orderDetails");
		}

	});

});