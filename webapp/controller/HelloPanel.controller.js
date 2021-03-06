sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict"
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {

        onShowHello: function () {
            // Read message from i18n model
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecepient = this.getView().getModel().getProperty("/recipient/name")
            const sMsg = oBundle.getText("helloMsg", [sRecepient]);
            // Show message
            MessageToast.show(sMsg);
        },

        onOpenDialog: function () {
            this.getOwnerComponent().openHelloDialog();
        }
    });
});