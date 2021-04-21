sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "./controller/HelloDialog",
    "sap/ui/Device"
], function (UIComponent, JSONModel, HelloDialog, Device) {
    "use strict"
    return UIComponent.extend("sap.ui.demo.walkthrough.component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            // Call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // Set data models
            const oData = {
                recipient: {
                    name: "UI5"
                }
            };
            const oModel = new JSONModel(oData);
            this.setModel(oModel);

            // Set device model
			var oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");

            // Set dialog
            this._helloDialog = new HelloDialog(this.getRootControl());

            // Create the views based on url/hash
            this.getRouter().initialize();
        },

        exit: function () {
            this._helloDialog.destroy();
            delete this._helloDialog;
        },
        
        openHelloDialog: function () {
            this._helloDialog.open();
        }
    })
})