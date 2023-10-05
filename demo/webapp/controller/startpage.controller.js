/**
 * @fileOverview startpage.controller.js - JS Contoller for the startpage
 * @class demoApp.controller.startpage
 */
/* global SRBLib:true */
/* global AppConfig:true */
/* global DataHandler:true */
/* global TreeGenerator:true */
/* global BreadcrumbsGenerator:true */
sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("demoApp.controller.startpage", {
    /**
     * This method is called upon initialization of the View. The controller can perform its internal setup in this hook.
     * @public
     * @memberOf demoApp.controller.startpage
     * @author Michael Henninger - SRB Consulting Team
     */
    onInit: function () {
      this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      this.oRouter.getTarget("startpage").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
    },

    /**
     * This method is called every time the user navigates to this view
     * @public
     * @param {Object} oEvent - Event which is triggered after navigation to this view
     * @memberOf demoApp.controller.startpage
     * @author Michael Henninger - SRB Consulting Team
     */
    handleRouteMatched: function (oEvent) {},

    /**
     * This method is called every time the View is rendered, after the HTML is placed in the DOM-Tree. It can be used to apply additional changes to the DOM after the Renderer has finished.
     * @public
     * @memberOf demoApp.controller.startpage
     * @author Michael Henninger - SRB Consulting Team
     */
    onAfterRendering: function () {}
  });
});
