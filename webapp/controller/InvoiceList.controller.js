sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "../model/formatter"
], function (Controller, JSONModel, Filter, FilterOperator, formatter) {
    "use strict"
    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        formatter,
        onInit: function () {
            const oViewModel = new JSONModel({
                currency: "INR"
            });
            this.getView().setModel(oViewModel, "view");
        },

        onFilterInvoices: function (oEvent) {
            // Build filter array
            const aFilter = [];
            const sQuery = oEvent.getParameter("query");
            if (sQuery) {
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
            }

            // Filter binding
            const oList = this.byId("invoiceList");
            const oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        },

        onPress: function (oEvent) {
			const oRouter = this.getOwnerComponent().getRouter();

            const oItem = oEvent.getSource();
			oRouter.navTo("detail", {
                invoicePath: encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
            });
		}
    })
})