/**
 * @fileOverview Component.js - JS component to initialize the application
 * @class demoApp.Component
 */
/* global SRBLib:true */
sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/Device", "demoApp/model/models"], function (UIComponent, Device, models) {
  "use strict";

  return UIComponent.extend("demoApp.Component", {
    metadata: {
      manifest: "json"
    },

    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * In this method we define the global demoApp for all i18n files
     * @public
     * @memberOf demoApp.Component
     * @author Michael Henninger - SRB Consulting Team
     */
    init: function () {
      // call the base component's init function
      UIComponent.prototype.init.apply(this, arguments);

      // set the device model
      this.setModel(models.createDeviceModel(), "device");

      // create the views based on the url/hash
      this.getRouter().initialize();
    },

    /**
     * This method can be used to create a new sap.m.App
     * @public
     * @memberOf demoApp.Component
     * @returns {Object} - sap.m.App
     * @author Michael Henninger - SRB Consulting Team
     */
    createContent: function () {
      var app = new sap.m.App({
        id: "App"
      });
      var appType = "App";
      var appBackgroundColor = "#FFFFFF";
      if (appType === "App" && appBackgroundColor) {
        app.setBackgroundColor(appBackgroundColor);
      }

      return app;
    }
  });
});
