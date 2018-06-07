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

			var detailData = oEvent.getParameter("arguments");
			var model = new sap.ui.model.json.JSONModel(detailData);
			this.getView().setModel(model);
		},
		onPressComplete: function(oEvent) {

			this.getOwnerComponent().getRouter().navTo("detail3");

		},
		onNavTo: function(oEvent) {

			this.getOwnerComponent().getRouter().navTo("completionForm");

		},
			onClick: function() {
			var orderNo = this.getView().byId("name11").getValue();
			var operationNo = this.getView().byId("name12").getValue();
			var orderSts = "ENRT";

			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/SAP/ZEAM_WM_FIORI_APP_SRV/", true, "", "");
			var oEntry = {};
			oEntry.Aufnr = orderNo;
			oEntry.Vornr = operationNo;
			oEntry.Status = orderSts;

			oModel.create("/OpUserStatusSet", oEntry, {
				method: "POST",
				success: function(data) {
					alert(JSON.stringify(data));
				},
				error: function() {

				}
			});

		}
		

	});

});