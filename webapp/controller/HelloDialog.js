sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment",
    "sap/ui/core/syncStyleClass"
], function (ManagedObject, Fragment, syncStyleClass) {
    "use strict"

    return ManagedObject.extend("sap.ui.demo.walkthrough.controller.HelloDialog", {

        constructor: function (oView) {
            this._oView = oView;
        },

        exit: function () {
            delete this._oView;
        },

        open: function () {
            const oView = this._oView;
            let oFragmentController;

            // Create the dialog lazily
            if(!oView.byId("helloDialog")) {
                oFragmentController = {
                    onCloseDialog: function () {
                        oView.byId("helloDialog").close();
                    }
                }
                // Load frangment asynchronously
                Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.demo.walkthrough.view.HelloDialog",
                    controller: oFragmentController
                })
                .then(function (oDialog) {
                    // Connect dialog to the root view of this component
                    oView.addDependent(oDialog);

                    // forward compact/cozy style into dialog
					syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, oDialog);
                    
                    oDialog.open();
                });
            } else {
                oView.byId("helloDialog").open();
            }
        }
    })
})