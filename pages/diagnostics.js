exports.create = function () {


    var page = new tabris.Page({
        title: "Device diagnostics",
        topLevel: false
    }).on('backButtonPressed', function () {
        require("./devices.js").create('devices.js').open();
    });

    //header
    new tabris.ImageView({
        id: "zdev",
        image: {src: "images/logo.png"},
        layoutData: {left: 3, top: 0, height: 65, width: 58},
        elevation: 1,
        opacity: 1.0
    }).appendTo(page);

    new tabris.TextView({
        id: "myzeiss",
        layoutData: {left: "#zdev 3", top: 17},
        text: "MyZEISS",
        font: "20px",
        textColor: "#221f8c"
    }).appendTo(page);

    new tabris.ImageView({
        image: {src: "images/joon2.png"},
        layoutData: {left: 0, right: 0, top: "#myzeiss 25"},
        opacity: 0.3
    }).appendTo(page);
//header end

    new tabris.Button({
        layoutData: {left: 200, top: "#zdev 60"},
        text: "Scan Barcode"
    }).on("select", scanBarcode).appendTo(page);

    new tabris.ImageView({
        layoutData: {left: 5, top: "#zdev 10", width: 150, height: 150},
        image: {src: "images/static_qr.jpg"}
    }).appendTo(page);

    var resultView = new tabris.TextView({
        layoutData: {top: "prev() 50", left: 20, right: 20},
        markupEnabled: true
    }).appendTo(page);

    new tabris.Button({
        id: "ok",
        text: "OK",
        layoutData: {bottom: 70, centerX: 0}
    }).on("select", function () {
        reDirect();
    }).appendTo(page);

    function reDirect() {

        var a = globalResult.text;
        if (/Handysurf/.test(a)) {
            require("./questions.js").create("questions.js").open();
        } else if (/DuraMax/.test(a)) {
            require("./duramax_q.js").create('duramax_q.js').open();
        }
    }

    var globalResult;

    function scanBarcode() {
        cordova.plugins.barcodeScanner.scan(function (result) {
                globalResult = result;
                resultView.set("text", result.cancelled ?
                    "<b>Scan cancelled</b>" :
                "<b>Scan result:</b> " + result.text + " (" + result.format + ")");
            },
            function (error) {
                resultView.set("text", "<b>Error:</b> " + error);
            });
    }

    return page;
};