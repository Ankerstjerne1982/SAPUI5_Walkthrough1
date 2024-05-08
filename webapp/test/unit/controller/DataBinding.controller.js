/*global QUnit*/

sap.ui.define([
	"databinding/controller/DataBinding.controller"
], function (Controller) {
	"use strict";

	QUnit.module("DataBinding Controller");

	QUnit.test("I should test the DataBinding controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
