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
        id: "#new",
        image: {src: "images/new.png"},
        layoutData: {right: 40, top: "#myzeiss 110", width: 124, height: 136}
    }).on("tap", function () {
        require("./codescanner.js").create('codescanner.js').open();
    }).appendTo(page);

    new tabris.ImageView({
        id: "#news",
        image: {src: "images/news.png"},
        layoutData: {left: 40, top: "#devices 245", width: 114, height: 126}
    }).appendTo(page);

    new tabris.ImageView({
        id: "#settings",
        image: {src: "images/settings.png"},
        layoutData: {right: 40, top: "#new 250", width: 104, height: 116}
    }).appendTo(page);

    new tabris.ImageView({
        id: "#support",
        image: {src: "images/support.png"},
        layoutData: {right: 40, left: 40, top: "#settings 375", height: 116}
    }).appendTo(page);


    return page;
};

