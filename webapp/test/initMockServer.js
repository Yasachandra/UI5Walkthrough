sap.ui.define([
    "../localService/mockServer"
], function (mockServer) {
    "use strict";

    // Initialize the mock server
    mockServer.init();

    // Initialize the embedded component on the HTML page
    sap.ui.require(["sap/ui/core/ComponentSupport"]);
})