sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"jquery.sap.global"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("ZSplitApp_Screen.controller.Detail1", {

		onInit: function() {
			this.getOwnerComponent().getRouter().getRoute("orderDetails").attachPatternMatched(this._onRouteMatched, this);
			this.getOwnerComponent().getAggregation("rootControl").byId("splitapp");
		},
		_onRouteMatched: function(oEvent) {
			// var orderId = oEvent.getParameter("arguments").orderId;
			// // var productId = oEvent.getParameter("arguments").productId;
			// this.getView().bindElement("/orders/" + orderId);

			var detailData = oEvent.getParameter("arguments");
			// var productId = oEvent.getParameter("arguments").productId;
			var model = new sap.ui.model.json.JSONModel(detailData);
			this.getView().setModel(model);
		},
		onPressComplete: function(oEvent) {

			this.getOwnerComponent().getRouter().navTo("detail3");

		},
		onNavTo: function(oEvent) {

			this.getOwnerComponent().getRouter().navTo("completionForm");

		}
		

	});

});