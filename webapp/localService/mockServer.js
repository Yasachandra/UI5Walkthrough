sap.ui.define([
    "sap/ui/core/util/MockServer",
    "sap/base/util/UriParameters"
], function (MockServer, UriParameters) {
    "use strict";

    return {
        init: function () {
            // Create the mock server
            const oMockServer = new MockServer({
                rootUri: "https://services.odata.org/V2/Northwind/Northwind.svc/"
            });
            const oUriParameters = new UriParameters.fromQuery(window.location.search);

            // Configure the mock server with a delay
            MockServer.config({
                autoRespond: true,
                autoRespondAfter: oUriParameters.get("serverDelay") || 500
            });

            // Simulate
            const sPath = "../localService";
            oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockData");

            // Start
            oMockServer.start();
        }
    };
});