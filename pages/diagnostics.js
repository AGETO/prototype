exports.create = function () {


	var page = new tabris.Page({
		title: "Device diagnostics",
		topLevel: false
	}).on('backButtonPressed', function () {
		require("./devices.js").create('devices.js').open();
	});

	new tabris.Button({
		layoutData: {left: 220, top: 35, right: 10},
		text: "Scan Barcode"
	}).on("select", scanBarcode).appendTo(page);

	new tabris.TextView({
		layoutData: {left:50, top: 40},
		text: "Picture?"
	}).appendTo(page);

	new tabris.TextView({
		layoutData: {left:50, top: 60},
		text: "ID?"
	}).appendTo(page);

	new tabris.TextView({
		layoutData: {left:50, top: 80},
		text: "Something?"
	}).appendTo(page);

	new tabris.TextView({
		layoutData: {left:50, top: 100},
		text: "Something else?"
	}).appendTo(page);

	new tabris.TextView({
		id: "ledColor",
		layoutData: {left:25, top: 200},
		text: "Is the main control led green?"
	}).appendTo(page);
	
	var composite1 = new tabris.Composite({
		layoutData: {left: 0, top: 0, bottom: 0, right: "50%"},
	}).appendTo(page);

	["Yes", "No"].forEach(function(title) {
		new tabris.RadioButton({
		layoutData: {left:'prev() 25', top:230},
			text: title
		}).on("change:selection", function(widget, selection) {
			if (selection) {
				console.log(widget.get("text") + " selected");
			}
		}).appendTo(composite1);
	});

	new tabris.TextView({
		id: "errorDisplay",
		layoutData: {left:25, top: 280},
		text: "Is an error displayed in device lcd?"
	}).appendTo(page);

	var composite2 = new tabris.Composite({
		layoutData: {left: 0, top: 0, bottom: 0, right: "50%"},
	}).appendTo(page);

	["Yes", "No"].forEach(function(title) {
		new tabris.RadioButton({
		layoutData: {left:'prev() 25', top:310},
			text: title
		}).on("change:selection", function(widget, selection) {
			if (selection) {
				console.log(widget.get("text") + " selected");
			}
		}).appendTo(composite2);
	});

	var resultView = new tabris.TextView({
		layoutData: {top: "prev() 20", left: 20, right: 20},
		markupEnabled: true
	}).appendTo(page);

	new tabris.Button({
		layoutData:{top:350, centerX:0},
		text: 'Call'
	}).on("select", function(){
		callNow();
		//cordova.InAppBrowser.open('tel:56853479', '_system');
	}).appendTo(page);

	function scanBarcode() {
		cordova.plugins.barcodeScanner.scan(function (result) {
			resultView.set("text", result.cancelled ?
				"<b>Scan cancelled</b>" :
				"<b>Scan result:</b> " + result.text + " (" + result.format + ")");
		}, function (error) {
			resultView.set("text", "<b>Error:</b> " + error);
		});
	}

	//Example function using 
	function callNow() {
		if (message) {
			message.dispose();
		}
		var message = new tabris.TextView({
			layoutData: {centerX:0, top:400},
			text: "Please contact our technical support via phone under …: "
		}).appendTo(page);
	}

	function getAnswers() {
		var answer = "Something";
		page.children("RadioButton").forEach(function(button) {
			if (button.get("selection")) {
				ledAnswer = button.get("text");
				displayAnswer = button.get("text");
			}
		});
		return answer;
	}



	return page;
};