exports.create = function () {

    var page = new tabris.Page({
        topLevel: true
    });
    // ... add some more widgets, apply layout, etc ...
    new tabris.ImageView({
        id: "#myzeiss",
        image: {src: "images/myzeiss.png"},
        layoutData: {centerX: 0, top: 0, width: 239, height: 101}
    }).appendTo(page);

    new tabris.ImageView({
        id: "#devices",
        image: {src: "images/mydevices.png"},
        layoutData: {left: 40, top: "#myzeiss 110", width: 104, height: 116},
        highlightOnTouch: true
    }).on("tap", function () {
        require("./devices.js").create('devices.js').open();
    }).appendTo(page);

    new tabris.ImageView({
        id: "#diagnostics",
        image: {src: "images/qr.png"},
        layoutData: {right: 57, top: "#myzeiss 110", width: 74, height: 86}
    }).on("tap", function () {
        require("./diagnostics.js").create('diagnostics.js').open();
    }).appendTo(page);

    new tabris.TextView({
        id: "device_d",
        text: "Device\nDiagnostics",
        alignment: "center",
        layoutData: {right: 42, top: "#diagnostics 189"},
        font: "20px"
    }).appendTo(page);

    new tabris.ImageView({
        id: "#news",
        image: {src: "images/news.png"},
        layoutData: {left: 40, top: "#devices 245", width: 114, height: 126}
    }).appendTo(page);

    new tabris.ImageView({
        id: "#settings",
        image: {src: "images/settings.png"},
        layoutData: {right: 40, top: "#diagnostics 250", width: 104, height: 116}
    }).appendTo(page);

    new tabris.ImageView({
        id: "#support",
        image: {src: "images/support.png"},
        layoutData: {left: 40, top: "#settings 375", height: 116}
    }).appendTo(page);

    new tabris.ImageView({
        id: "addnew",
        image: {src: "images/newdevice.jpg"},
        layoutData: {right: 46, top: "#settings 355", width: 104, height: 116}
    }).on("tap", function () {
        require("./codescanner.js").create('codescanner.js').open();
    }).appendTo(page);

    new tabris.TextView({
        id: "addnew",
        text: "Register Device",
        alignment: "right",
        layoutData: {right: 32, top: "#zdev 460"},
        font: "20px"
    }).appendTo(page);

    return page;
};

