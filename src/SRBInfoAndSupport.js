/**
 * @fileOverview SRBInfoAndSupport - Function library of SRB Consulting Team GmbH
 * @module SRBInfoAndSupport
 */
/* global SettingsHandler:true */
/* global html2canvas:true */
/* global sap:true */

// eslint-disable-next-line
window.SRBInfoAndSupport = (function () {
  "use strict";

  var pub = {
    /**
     * This function is used to initialize the library
     * @public
     * @memberOf module:SRBInfoAndSupport
     * @param {Object} sapui5ComponentOrConfigObject UI5 Component configuration object | Alternativle a configuration object, see examples below
     * @author Michael Henninger - SRB Consulting Team
     * @example
     * SRBInfoAndSupport.init({appname: "My testing app",version: "1.1.1", licenses: { MyLicense: "ABCABC" }, copyright: "My version of the copyright", latestCommitHash: "asf82oap"} )
     */
    init: function (sapui5ComponentOrConfigObject) {
      var componentId;
      var manifest;
      if (sapui5ComponentOrConfigObject.getId) {
        componentId = sapui5ComponentOrConfigObject.getId();
        manifest = sap.ui.getCore().getComponent(componentId).getManifestObject()._oManifest;
        this.version = manifest._version;
        this.licenseObject = manifest._srbVersionInfo.licenses || {};
        this.appCopyright = manifest._srbVersionInfo.copyright + "\n";
        this.appName = manifest._srbVersionInfo.productName;
        this.latestCommitHash = manifest._srbVersionInfo.latestCommitHash;
      } else {
        var configObject = sapui5ComponentOrConfigObject;
        this.version = configObject.version;
        this.licenseObject = configObject.licenses || {};
        this.appCopyright = configObject.copyright + "\n";
        this.appName = configObject.appname;
        this.latestCommitHash = configObject.latestCommitHash;
      }
    },

    /**
     * This function initializes a hidden feature. The feature is open the overview dialog or the support dialog, or both. The magic thing is that the dialogs are shown only after clicking on a specific DOM element a specific number of times in a specific time range. The number of clicks is `10` in a time range of `2000` milliseconds.
     * @public
     * @memberOf module:SRBInfoAndSupport
     * @param {Object} config - Configuration object, configuring the hidden info feature.
     * @author Michael Henninger - SRB Consulting Team
     * @example
     * SRBInfoAndSupport.initHiddenInfo({ overviewDialog: true, supportDialog: false, domElementId: "__component0---Startpage--filterSearch" });
     */
    initHiddenInfo: function (config) {
      var that = this;
      var clickCounter = 0;

      if (!config) {
        config = {};
      }

      setInterval(function () {
        clickCounter = 0;
      }, 2000);

      var domElement = document.getElementById(config.domElementId) || document.getElementById("content");

      if (document.getElementById(config.domElementId) === null && config.domElementId === undefined) {
        console.warn("Using dom element with id >content<");
      } else if (document.getElementById(config.domElementId) === null && config.domElementId !== undefined) {
        console.warn("Dom element with id: >" + config.domElementId + "< not found. Using dom element with id >content<");
      }

      domElement.onclick = function () {
        clickCounter++;

        if (clickCounter === 10) {
          if (config.showOverviewDialog) {
            that.showOverviewDialog();
          }

          if (config.overviewDialog === true) {
            that.showOverviewDialog();
          }
          if (config.supportDialog === true) {
            that.showSupportDialog();
          }
          if (config.supportDialog !== true && config.overviewDialog !== true) {
            that.showOverviewDialog();
          }
        }
      };
    },

    /**
     * Creates document css classes and adds them to the DOM
     * @public
     * @memberOf module:SRBInfoAndSupport
     * @param {String} className - The classname of the css class that has to be created
     * @param {Object} attributes - css class attributes as object with key-value declaration that have to be added to the generated class
     * @author Michael Henninger - SRB Consulting Team
     */
    createStyleClass: function (className, attributes) {
      var style = document.createElement("style");
      var styleCache = {};
      style.type = "text/css";

      var attributeString = "";

      Object.keys(attributes).forEach(function (key) {
        attributeString += key + ": " + attributes[key];
      });

      style.innerHTML = className + " { " + attributeString + "}"; //'.cssClass { color: #F00; }';
      style.id = className;

      // Check if the class has already been created.
      // If it is available, do not create the dom class again
      if (styleCache[className] === undefined || styleCache[className === false]) {
        document.getElementsByTagName("head")[0].appendChild(style);

        styleCache[className] = true;
      }

      return style;
    },

    /**
     * Captures a screenshot via html2canvas
     * @public
     * @memberOf module:SRBInfoAndSupport
     * @returns {Promise} The promise is resolved with a paramter containing the html canvas. It is rejected if a error happened or html2canvas is not found
     * @author Michael Henninger - SRB Consulting Team
     */
    captureScreenshot: function () {
      if (typeof html2canvas === "undefined") {
        console.warn("html2canvas not found, proceeding without a screenshot.");

        return new Promise((resolve, reject) => {
          reject();
        });
      } else {
        return html2canvas(document.body);
      }
    },

    /**
     * Gets the copyright information
     * @public
     * @memberOf module:SRBInfoAndSupport
     * @returns {String} The copyright text
     * @author Michael Henninger - SRB Consulting Team
     */
    getCopyRight: function () {
      return this.copyright;
    },

    /**
     * Gets the license object
     * @public
     * @memberOf module:SRBInfoAndSupport
     * @returns {Object} License object, containing key-value pairs. Key = Name of the license, Value = The license text
     * @author Michael Henninger - SRB Consulting Team
     */
    getLicenseObject: function () {
      return this.licenseObject || {};
    },

    /**
     * Gets the version of the app
     * @public
     * @memberOf module:SRBInfoAndSupport
     * @returns {String} The version as text
     * @author Michael Henninger - SRB Consulting Team
     */
    getVersion: function () {
      return this.version;
    },

    /**
     * Gets the commit hash
     * @public
     * @memberOf module:SRBInfoAndSupport
     * @returns {String} The commit hash as text
     * @author Michael Henninger - SRB Consulting Team
     */
    getGitCommitHash: function () {
      return this.latestCommitHash;
    },

    /**
     * Gets the name of the app
     * @public
     * @memberOf module:SRBInfoAndSupport
     * @returns {String} The app name as text
     * @author Michael Henninger - SRB Consulting Team
     */
    getAppName: function () {
      return this.appName;
    },

    /**
     * Gets the url of the browser
     * @public
     * @memberOf module:SRBInfoAndSupport
     * @returns {String} URL as text
     * @author Michael Henninger - SRB Consulting Team
     */
    getFullUrl: function () {
      return window.location.href;
    },

    /**
     * Gets the current protocol used by the browser
     * @public
     * @memberOf module:SRBInfoAndSupport
     * @returns {String} Protocol as text
     * @author Michael Henninger - SRB Consulting Team
     */
    getProtocol: function () {
      return location.protocol;
    },

    /**
     * Gets the current port used by the browser
     * @public
     * @memberOf module:SRBInfoAndSupport
     * @returns {String} Port as text
     * @author Michael Henninger - SRB Consulting Team
     */
    getPort: function () {
      return location.port;
    },

    /**
     * Gets the hostname of the current URL
     * @public
     * @memberOf module:SRBInfoAndSupport
     * @returns {String} Hostname as text
     * @author Michael Henninger - SRB Consulting Team
     */
    getHostname: function () {
      return location.hostname;
    },

    /**
     * Gets navigator details
     * @public
     * @memberOf module:SRBInfoAndSupport
     * @returns {String} Navigator details as text
     * @author Michael Henninger - SRB Consulting Team
     */
    getNavigatorDetails: function () {
      return navigator.appVersion;
    },

    /**
     * Gets the current browser zoom
     * @public
     * @memberOf module:SRBInfoAndSupport
     * @returns {Number} Zoom percentage as plain number e.g. 100
     * @author Michael Henninger - SRB Consulting Team
     */
    getZoom: function () {
      var ratio = 0,
        screen = window.screen,
        ua = navigator.userAgent.toLowerCase();

      if (window.devicePixelRatio !== undefined) {
        ratio = window.devicePixelRatio;
      } else if (~ua.indexOf("msie")) {
        if (screen.deviceXDPI && screen.logicalXDPI) {
          ratio = screen.deviceXDPI / screen.logicalXDPI;
        }
      } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
        ratio = window.outerWidth / window.innerWidth;
      }

      if (ratio) {
        ratio = Math.round(ratio * 100);
      }

      return ratio;
    },

    /**
     * Gets the current window screen size in pixels
     * @public
     * @memberOf module:SRBInfoAndSupport
     * @returns {String} Screen dimensions in for of XxY. E.g. '1152x1920'
     * @author Michael Henninger - SRB Consulting Team
     */
    getScreensize: function () {
      return window.screen.availHeight + "x" + window.screen.availWidth;
    },

    /**
     * Downloads a data URI from the browser. A filename can be configured
     * @public
     * @memberOf module:SRBInfoAndSupport
     * @param {String} name - Name of the file to be downloaded
     * @param {String} uri - Data URI
     * @author Michael Henninger - SRB Consulting Team
     */
    downloadURI: function (name, uri) {
      try {
        const downloadLink = document.createElement("a");
        downloadLink.href = uri;
        downloadLink.download = name;

        // Trigger the download
        document.body.appendChild(downloadLink);
        downloadLink.click();

        // Clean up
        setTimeout(() => {
          URL.revokeObjectURL(downloadLink.href);
          document.body.removeChild(downloadLink);
        }, 100);
      } catch (error) {
        console.error("Error downloading the file:", error.message);
      }
    },

    /**
     * Used to get a object containing all necessary support information. Also used by the support dialog function
     * @public
     * @memberOf module:SRBInfoAndSupport
     * @returns {Object} Containing all necessary support information
     * @author Michael Henninger - SRB Consulting Team
     */
    getSupportObject: function () {
      var supportObject = {};

      supportObject.ProductName = this.getAppName();
      supportObject.Version = this.getVersion();
      supportObject.CommitHash = this.getGitCommitHash();

      if (typeof SettingsHandler !== "undefined") {
        var profileData = SettingsHandler.getGlobalProfileData();
        supportObject.Client = profileData.UserMandt;
        supportObject.FullName = profileData.FullName;
        supportObject.Language = profileData.Language;
      }

      supportObject.Hostname = this.getHostname();
      supportObject.Port = this.getPort();
      supportObject.Protocol = this.getProtocol();
      supportObject.FullURL = this.getFullUrl();
      supportObject.Navigator = this.getNavigatorDetails();
      supportObject.DeviceZoom = this.getZoom();
      supportObject.Screensize = this.getScreensize();

      // Dynamically added local storage items:
      supportObject.localStorageItems = { ...localStorage };

      return supportObject;
    },

    /**
     * This function is used to initialize the library
     * @public
     * @memberOf module:SRBInfoAndSupport
     * @param {String} title The title of the support dialog as string
     * @param {Object} opt Options for this method: {captureScreenshot: true | false}
     * @author Michael Henninger - SRB Consulting Team
     * @example
     * SRBInfoAndSupport.showSupportDialog({captureScreenshot: true})
     */
    showSupportDialog: function (title, opt) {
      var that = this;
      if (opt === undefined) {
        opt = {};
      }

      this.createStyleClass(".supportDialogList > header.sapMListHdr", {
        padding: "0px !important",
      });

      title = title || "Support Information";

      var supportObject = this.getSupportObject();

      var destroyDialog = function () {
        dialog.destroy();
      };

      var propertyList = new sap.m.List({
        headerText: "General",
      }).addStyleClass("sapUiSizeCompact supportDialogList");
      var localStorageItemList = new sap.m.List({
        headerText: "Local Storage",
      }).addStyleClass("sapUiSizeCompact supportDialogList");
      var attachmentList = new sap.m.List({
        headerText: "Attachments",
      }).addStyleClass("sapUiSizeCompact supportDialogList");

      Object.keys(supportObject).forEach(function (supportProperty) {
        var ignoreForPropertyList = ["localStorageItems"];

        if (!ignoreForPropertyList.includes(supportProperty)) {
          propertyList.addItem(
            new sap.m.CustomListItem({
              content: new sap.m.FlexBox({
                alignItems: "Start",
                justifyContent: "SpaceBetween",
                items: [
                  new sap.m.Label({
                    text: supportProperty,
                  }),
                  new sap.m.ExpandableText({
                    overflowMode: sap.m.ExpandableTextOverflowMode.InPlace,
                    text: supportObject[supportProperty],
                    wrappingType: sap.m.WrappingType.Hyphenated,
                    textDirection: sap.ui.core.TextDirection.RTL,
                  }),
                ],
              }),
            })
          );
        }

        if (supportProperty === "localStorageItems") {
          Object.keys(supportObject[supportProperty]).forEach(function (localStorageItemKey) {
            localStorageItemList.addItem(
              new sap.m.CustomListItem({
                content: new sap.m.FlexBox({
                  alignItems: "Start",
                  justifyContent: "SpaceBetween",
                  items: [
                    new sap.m.Label({
                      text: localStorageItemKey,
                    }),
                    new sap.m.ExpandableText({
                      overflowMode: sap.m.ExpandableTextOverflowMode.InPlace,
                      text: supportObject[supportProperty][localStorageItemKey],
                      wrappingType: sap.m.WrappingType.Hyphenated,
                    }),
                  ],
                }),
              })
            );
          });
        }
      });

      var screenshotImage = new sap.m.Image({ width: "100%" });
      var content = [propertyList, localStorageItemList, attachmentList];

      var dialog = new sap.m.Dialog({
        title: title,
        type: "Message",
        content: content,
        resizable: true,
        draggable: true,
        stretch: sap.ui.Device.system.phone,
        buttons: [
          new sap.m.Button({
            text: "Send via Email",
            type: "Emphasized",
            press: function (oEvent) {
              var button = oEvent.getSource();

              button.setType("Success");

              sap.m.URLHelper.triggerEmail("", title + new Date().toLocaleString(), JSON.stringify({ ...supportObject }, null, 4));

              setTimeout(function () {
                button.setType("Emphasized");
              }, 2000);
            },
          }),
          new sap.m.Button({
            text: "Copy to clipboard",
            type: "Emphasized",
            press: function (oEvent) {
              var button = oEvent.getSource();

              navigator.clipboard
                .writeText(
                  JSON.stringify(
                    {
                      ...supportObject,
                      ...{ screenshotDataUrl: that.screenshotDataUrl },
                    },
                    null,
                    4
                  )
                )
                .then(
                  function () {
                    button.setType("Success");

                    setTimeout(function () {
                      button.setType("Emphasized");
                    }, 2000);
                  },
                  function (err) {
                    // eslint-disable-next-line
                    alert("Could not copy text: ", err);
                  }
                );
            },
          }),
          new sap.m.Button({
            text: "OK",
            press: function () {
              dialog.close();
            },
          }),
        ],
        afterClose: function () {
          destroyDialog();
        },
      });

      if (opt.captureScreenshot === true || opt.captureScreenshot === undefined) {
        this.captureScreenshot().then(
          function (canvas) {
            that.screenshotDataUrl = canvas.toDataURL();
            screenshotImage.setSrc(that.screenshotDataUrl);
            attachmentList.addItem(
              new sap.m.CustomListItem({
                content: new sap.m.FlexBox({
                  alignItems: "Start",
                  justifyContent: "SpaceBetween",
                  items: [
                    new sap.m.Label({
                      text: "Screenshot",
                    }),
                    new sap.m.Button({
                      text: "Show",
                      press: function (oEvent) {
                        that.screenshotPopover = new sap.m.ResponsivePopover({
                          resizable: true,
                          contentWidth: "50%",
                          title: "Screenshot",
                          content: new sap.m.FlexBox({
                            height: "100%",
                            items: [screenshotImage],
                            alignItems: "Start",
                            justifyContent: "Center",
                          }),
                          placement: sap.m.PlacementType.Horizontal,
                          verticalScrolling: false,
                          beginButton: new sap.m.Button({
                            press: function () {
                              that.downloadURI("screenshot_" + new Date().getTime() + ".png", that.screenshotDataUrl);
                            },
                            icon: "sap-icon://download",
                          }),
                        });

                        that.screenshotPopover.openBy(oEvent.getSource());
                      },
                    }),
                  ],
                }),
              })
            );
            dialog.open();
          },
          function () {
            dialog.open();
          }
        );
      } else {
        dialog.open();
      }
    },

    /**
     * This function is used to initialize the library
     * @public
     * @memberOf module:SRBInfoAndSupport
     * @param {Stromg} title The title of the support dialog as string
     * @author Michael Henninger - SRB Consulting Team
     * @example
     * SRBInfoAndSupport.showSupportDialog({captureScreenshot: true})
     */
    showOverviewDialog: function (title) {
      var that = this;
      title = title || "Information";

      var destroyDialog = function () {
        dialog.destroy();
      };

      var htmlText = "";
      var productDetails =
        `<h2>` +
        this.getAppName() +
        `</h2>
          <p>Frontend version number: <code>` +
        this.getVersion() +
        `</code></p>` +
        `<p>Commit hash: <code>` +
        this.getGitCommitHash() +
        `</code></p>`;

      htmlText += productDetails;

      if (this.getCopyRight() !== undefined && this.getCopyRight() !== "") {
        htmlText += `<hr>`;
        htmlText += `<h3>Copyright</h3>`;
        htmlText += `<p>` + this.getCopyRight() + `</p>`;
      }

      if (Object.keys(this.getLicenseObject()).length > 0) {
        htmlText += `<hr>`;
        htmlText += `<p><h2>Licenses</h2></p>`;

        Object.keys(this.getLicenseObject()).forEach(function (licKey) {
          htmlText += `<h4>` + licKey + `</h4>`;
          htmlText += `<p>` + that.getLicenseObject()[licKey] + `</p>`;
        });
      }

      var content = new sap.m.FormattedText({
        htmlText: htmlText,
      });

      var dialog = new sap.m.Dialog({
        title: title,
        type: "Message",
        content: content,
        endButton: new sap.m.Button({
          text: "OK",
          press: function () {
            dialog.close();
          },
        }),
        afterClose: function () {
          destroyDialog();
        },
      });

      dialog.open();
    },
  };

  return pub;
})();
