<a name="module_SRBInfoAndSupport"></a>

## SRBInfoAndSupport
SRBInfoAndSupport - Function library of SRB Consulting Team GmbH


* [SRBInfoAndSupport](#module_SRBInfoAndSupport)
    * [.init(sapui5ComponentOrConfigObject)](#module_SRBInfoAndSupport.init)
    * [.initHiddenInfo(config)](#module_SRBInfoAndSupport.initHiddenInfo)
    * [.createStyleClass(className, attributes)](#module_SRBInfoAndSupport.createStyleClass)
    * [.captureScreenshot()](#module_SRBInfoAndSupport.captureScreenshot) ⇒ <code>Promise</code>
    * [.getCopyRight()](#module_SRBInfoAndSupport.getCopyRight) ⇒ <code>String</code>
    * [.getLicenseObject()](#module_SRBInfoAndSupport.getLicenseObject) ⇒ <code>Object</code>
    * [.getVersion()](#module_SRBInfoAndSupport.getVersion) ⇒ <code>String</code>
    * [.getGitCommitHash()](#module_SRBInfoAndSupport.getGitCommitHash) ⇒ <code>String</code>
    * [.getAppName()](#module_SRBInfoAndSupport.getAppName) ⇒ <code>String</code>
    * [.getFullUrl()](#module_SRBInfoAndSupport.getFullUrl) ⇒ <code>String</code>
    * [.getProtocol()](#module_SRBInfoAndSupport.getProtocol) ⇒ <code>String</code>
    * [.getPort()](#module_SRBInfoAndSupport.getPort) ⇒ <code>String</code>
    * [.getHostname()](#module_SRBInfoAndSupport.getHostname) ⇒ <code>String</code>
    * [.getNavigatorDetails()](#module_SRBInfoAndSupport.getNavigatorDetails) ⇒ <code>String</code>
    * [.getZoom()](#module_SRBInfoAndSupport.getZoom) ⇒ <code>Number</code>
    * [.getScreensize()](#module_SRBInfoAndSupport.getScreensize) ⇒ <code>String</code>
    * [.downloadURI(name, uri)](#module_SRBInfoAndSupport.downloadURI)
    * [.getSupportObject()](#module_SRBInfoAndSupport.getSupportObject) ⇒ <code>Object</code>
    * [.showSupportDialog(title, opt)](#module_SRBInfoAndSupport.showSupportDialog)
    * [.showOverviewDialog(title)](#module_SRBInfoAndSupport.showOverviewDialog)

<a name="module_SRBInfoAndSupport.init"></a>

### SRBInfoAndSupport.init(sapui5ComponentOrConfigObject)
This function is used to initialize the library

**Kind**: static method of [<code>SRBInfoAndSupport</code>](#module_SRBInfoAndSupport)  
**Access**: public  
**Author**: Michael Henninger - SRB Consulting Team  

| Param | Type | Description |
| --- | --- | --- |
| sapui5ComponentOrConfigObject | <code>Object</code> | UI5 Component configuration object | Alternativle a configuration object, see examples below |

**Example**  
```js
SRBInfoAndSupport.init({appname: "My testing app",version: "1.1.1", licenses: { MyLicense: "ABCABC" }, copyright: "My version of the copyright", latestCommitHash: "asf82oap"} )
```
<a name="module_SRBInfoAndSupport.initHiddenInfo"></a>

### SRBInfoAndSupport.initHiddenInfo(config)
This function initializes a hidden feature. The feature is open the overview dialog or the support dialog, or both. The magic thing is that the dialogs are shown only after clicking on a specific DOM element a specific number of times in a specific time range. The number of clicks is `10` in a time range of `2000` milliseconds.

**Kind**: static method of [<code>SRBInfoAndSupport</code>](#module_SRBInfoAndSupport)  
**Access**: public  
**Author**: Michael Henninger - SRB Consulting Team  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | Configuration object, configuring the hidden info feature. |

**Example**  
```js
SRBInfoAndSupport.initHiddenInfo({ overviewDialog: true, supportDialog: false, domElementId: "__component0---Startpage--filterSearch" });
```
<a name="module_SRBInfoAndSupport.createStyleClass"></a>

### SRBInfoAndSupport.createStyleClass(className, attributes)
Creates document css classes and adds them to the DOM

**Kind**: static method of [<code>SRBInfoAndSupport</code>](#module_SRBInfoAndSupport)  
**Access**: public  
**Author**: Michael Henninger - SRB Consulting Team  

| Param | Type | Description |
| --- | --- | --- |
| className | <code>String</code> | The classname of the css class that has to be created |
| attributes | <code>Object</code> | css class attributes as object with key-value declaration that have to be added to the generated class |

<a name="module_SRBInfoAndSupport.captureScreenshot"></a>

### SRBInfoAndSupport.captureScreenshot() ⇒ <code>Promise</code>
Captures a screenshot via html2canvas

**Kind**: static method of [<code>SRBInfoAndSupport</code>](#module_SRBInfoAndSupport)  
**Returns**: <code>Promise</code> - The promise is resolved with a paramter containing the html canvas. It is rejected if a error happened or html2canvas is not found  
**Access**: public  
**Author**: Michael Henninger - SRB Consulting Team  
<a name="module_SRBInfoAndSupport.getCopyRight"></a>

### SRBInfoAndSupport.getCopyRight() ⇒ <code>String</code>
Gets the copyright information

**Kind**: static method of [<code>SRBInfoAndSupport</code>](#module_SRBInfoAndSupport)  
**Returns**: <code>String</code> - The copyright text  
**Access**: public  
**Author**: Michael Henninger - SRB Consulting Team  
<a name="module_SRBInfoAndSupport.getLicenseObject"></a>

### SRBInfoAndSupport.getLicenseObject() ⇒ <code>Object</code>
Gets the license object

**Kind**: static method of [<code>SRBInfoAndSupport</code>](#module_SRBInfoAndSupport)  
**Returns**: <code>Object</code> - License object, containing key-value pairs. Key = Name of the license, Value = The license text  
**Access**: public  
**Author**: Michael Henninger - SRB Consulting Team  
<a name="module_SRBInfoAndSupport.getVersion"></a>

### SRBInfoAndSupport.getVersion() ⇒ <code>String</code>
Gets the version of the app

**Kind**: static method of [<code>SRBInfoAndSupport</code>](#module_SRBInfoAndSupport)  
**Returns**: <code>String</code> - The version as text  
**Access**: public  
**Author**: Michael Henninger - SRB Consulting Team  
<a name="module_SRBInfoAndSupport.getGitCommitHash"></a>

### SRBInfoAndSupport.getGitCommitHash() ⇒ <code>String</code>
Gets the commit hash

**Kind**: static method of [<code>SRBInfoAndSupport</code>](#module_SRBInfoAndSupport)  
**Returns**: <code>String</code> - The commit hash as text  
**Access**: public  
**Author**: Michael Henninger - SRB Consulting Team  
<a name="module_SRBInfoAndSupport.getAppName"></a>

### SRBInfoAndSupport.getAppName() ⇒ <code>String</code>
Gets the name of the app

**Kind**: static method of [<code>SRBInfoAndSupport</code>](#module_SRBInfoAndSupport)  
**Returns**: <code>String</code> - The app name as text  
**Access**: public  
**Author**: Michael Henninger - SRB Consulting Team  
<a name="module_SRBInfoAndSupport.getFullUrl"></a>

### SRBInfoAndSupport.getFullUrl() ⇒ <code>String</code>
Gets the url of the browser

**Kind**: static method of [<code>SRBInfoAndSupport</code>](#module_SRBInfoAndSupport)  
**Returns**: <code>String</code> - URL as text  
**Access**: public  
**Author**: Michael Henninger - SRB Consulting Team  
<a name="module_SRBInfoAndSupport.getProtocol"></a>

### SRBInfoAndSupport.getProtocol() ⇒ <code>String</code>
Gets the current protocol used by the browser

**Kind**: static method of [<code>SRBInfoAndSupport</code>](#module_SRBInfoAndSupport)  
**Returns**: <code>String</code> - Protocol as text  
**Access**: public  
**Author**: Michael Henninger - SRB Consulting Team  
<a name="module_SRBInfoAndSupport.getPort"></a>

### SRBInfoAndSupport.getPort() ⇒ <code>String</code>
Gets the current port used by the browser

**Kind**: static method of [<code>SRBInfoAndSupport</code>](#module_SRBInfoAndSupport)  
**Returns**: <code>String</code> - Port as text  
**Access**: public  
**Author**: Michael Henninger - SRB Consulting Team  
<a name="module_SRBInfoAndSupport.getHostname"></a>

### SRBInfoAndSupport.getHostname() ⇒ <code>String</code>
Gets the hostname of the current URL

**Kind**: static method of [<code>SRBInfoAndSupport</code>](#module_SRBInfoAndSupport)  
**Returns**: <code>String</code> - Hostname as text  
**Access**: public  
**Author**: Michael Henninger - SRB Consulting Team  
<a name="module_SRBInfoAndSupport.getNavigatorDetails"></a>

### SRBInfoAndSupport.getNavigatorDetails() ⇒ <code>String</code>
Gets navigator details

**Kind**: static method of [<code>SRBInfoAndSupport</code>](#module_SRBInfoAndSupport)  
**Returns**: <code>String</code> - Navigator details as text  
**Access**: public  
**Author**: Michael Henninger - SRB Consulting Team  
<a name="module_SRBInfoAndSupport.getZoom"></a>

### SRBInfoAndSupport.getZoom() ⇒ <code>Number</code>
Gets the current browser zoom

**Kind**: static method of [<code>SRBInfoAndSupport</code>](#module_SRBInfoAndSupport)  
**Returns**: <code>Number</code> - Zoom percentage as plain number e.g. 100  
**Access**: public  
**Author**: Michael Henninger - SRB Consulting Team  
<a name="module_SRBInfoAndSupport.getScreensize"></a>

### SRBInfoAndSupport.getScreensize() ⇒ <code>String</code>
Gets the current window screen size in pixels

**Kind**: static method of [<code>SRBInfoAndSupport</code>](#module_SRBInfoAndSupport)  
**Returns**: <code>String</code> - Screen dimensions in for of XxY. E.g. '1152x1920'  
**Access**: public  
**Author**: Michael Henninger - SRB Consulting Team  
<a name="module_SRBInfoAndSupport.downloadURI"></a>

### SRBInfoAndSupport.downloadURI(name, uri)
Downloads a data URI from the browser. A filename can be configured

**Kind**: static method of [<code>SRBInfoAndSupport</code>](#module_SRBInfoAndSupport)  
**Access**: public  
**Author**: Michael Henninger - SRB Consulting Team  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Name of the file to be downloaded |
| uri | <code>String</code> | Data URI |

<a name="module_SRBInfoAndSupport.getSupportObject"></a>

### SRBInfoAndSupport.getSupportObject() ⇒ <code>Object</code>
Used to get a object containing all necessary support information. Also used by the support dialog function

**Kind**: static method of [<code>SRBInfoAndSupport</code>](#module_SRBInfoAndSupport)  
**Returns**: <code>Object</code> - Containing all necessary support information  
**Access**: public  
**Author**: Michael Henninger - SRB Consulting Team  
<a name="module_SRBInfoAndSupport.showSupportDialog"></a>

### SRBInfoAndSupport.showSupportDialog(title, opt)
This function is used to initialize the library

**Kind**: static method of [<code>SRBInfoAndSupport</code>](#module_SRBInfoAndSupport)  
**Access**: public  
**Author**: Michael Henninger - SRB Consulting Team  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>String</code> | The title of the support dialog as string |
| opt | <code>Object</code> | Options for this method: {captureScreenshot: true | false} |

**Example**  
```js
SRBInfoAndSupport.showSupportDialog({captureScreenshot: true})
```
<a name="module_SRBInfoAndSupport.showOverviewDialog"></a>

### SRBInfoAndSupport.showOverviewDialog(title)
This function is used to initialize the library

**Kind**: static method of [<code>SRBInfoAndSupport</code>](#module_SRBInfoAndSupport)  
**Access**: public  
**Author**: Michael Henninger - SRB Consulting Team  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>Stromg</code> | The title of the support dialog as string |

**Example**  
```js
SRBInfoAndSupport.showSupportDialog({captureScreenshot: true})
```
