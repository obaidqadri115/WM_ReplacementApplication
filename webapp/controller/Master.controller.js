sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"], function(Controller, JSONModel, Device) {
	"use strict";

	return Controller.extend("ZSplitApp_Screen.controller.Master", {
		onInit: function() {
			this.getOwnerComponent().getRouter().getRoute("master").attachPatternMatched(this._onRouteMatched, this);
			// var odatamodel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZEAM_WM_FIORI_APP_SRV");
			// odatamodel.read(
			// 	"/UserSet?$filter=Userid eq '11412057'&$expand=OPERATIONSSET,RETURNSET",
			// 	null, null, false,
			// 	function(responce) {
			// 		console.log(responce.results[0]);
			// 		// data=responce.results[0];
			// 	},
			// 	function(error) {
			// 		console.log(error);
			// 	});
			// console.log(data); 

		},

		onSelectionChange: function(oEvent) {
			// var sOrderId = oEvent.getSource().getSelectedItem().getBindingContext().getProperty("orderId");
			// this.getOwnerComponent().getRouter().navTo("orderDetails", {
			// 	orderId: sOrderId
				
			var sOrderId = oEvent.getSource().getSelectedItem().getBindingContext().sPath;
			sOrderId = sOrderId.substring(9);
			var data = oEvent.getSource().getSelectedItem().getBindingContext().oModel.oData.results[sOrderId];
			this.getOwnerComponent().getRouter().navTo("orderDetails", {
				order:sOrderId,
				orderData: data
			});
		}
	});

});