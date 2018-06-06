sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"ZSplitApp_Screen/model/models",
	"sap/ui/model/json/JSONModel"

], function(UIComponent, Device, models, JSONModel) {
	"use strict";

	return UIComponent.extend("ZSplitApp_Screen.Component", {

		metadata: {
			manifest: "json"
		},

		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			this.getRouter().initialize();

			// var oModel = new JSONModel({
			// 	'orders': [{
			// 		"orderId": 0,
			// 		"orderName": "Order 1",
			// 		"products": [{
			// 			"productId": 0,
			// 			"productName": "Work 1-A"

			// 		}, {
			// 			"productId": 1,
			// 			"productName": "Work 1-B"
			// 		}, {
			// 			"productId": 2,
			// 			"productName": "Work 1-C"
			// 		}, {
			// 			"productId": 3,
			// 			"productName": "Work 1-D"
			// 		}, {
			// 			"productId": 4,
			// 			"productName": "Work 1-F"
			// 		}]
			// 	}, {
			// 		"orderId": 1,
			// 		"orderName": "Order 2",
			// 		"products": [{
			// 			"productId": 0,
			// 			"productName": "Work 2-A"
			// 		}, {
			// 			"productId": 1,
			// 			"productName": "Work 2-B"
			// 		}, {
			// 			"productId": 2,
			// 			"productName": "Work 2-C"
			// 		}, {
			// 			"productId": 3,
			// 			"productName": "Work 2-D"
			// 		}, {
			// 			"productId": 4,
			// 			"productName": "Work 2-F"
			// 		}]
			// 	}]
			// });
			var data;
			var odatamodel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZEAM_WM_FIORI_APP_SRV");
			odatamodel.read(
				"/UserSet?$filter=Userid eq '11133536'&$expand=OPERATIONSSET,RETURNSET",
				null, null, false,
				function(responce) {
					console.log(responce.results[0]);
					data = responce.results[0];
				},
				function(error) {
					console.log(error);
				});
			var oprset;
			var rlength = data.RETURNSET.results.length;
			if ((rlength === null) || (rlength === "") || (rlength === 0)) {
				oprset = data.OPERATIONSSET;
			} else {
				oprset = data.RETURNSET.results;

			}
			var jModel = new JSONModel(oprset); //data – which we are consuming from odata service 
			this.setModel(jModel);
			// console.log(oprset);
			// this.setModel(oprset);

		}
	});
});