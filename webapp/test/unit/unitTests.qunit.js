/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ns/ui5app/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
