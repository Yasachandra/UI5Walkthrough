sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
], function (Controller, JSONModel, formatter) {
    "use strict"
    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        formatter,
        onInit: function () {
            const oViewModel = new JSONModel({
                currency: "INR"
            });
            this.getView().setModel(oViewModel, "view");
        }
    })
})