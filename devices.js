var page = new tabris.Page({
    topLevel: true,
    title: "My Devices"
});

new tabris.ImageView({
    id: "#zdev",
    image: {src: "images/zdev.png"},
    layoutData: {centerX: 0, top: 0, width: 239, height: 101}
}).appendTo(page);

new tabris.ImageView({
    layoutData: {centerX: 0, centerY: 0},
    image: {src: "images/mydevices.png"},
    highlightOnTouch: true
}).on("select", function () {
    page2.open();
    page1.close();
}).appendTo(page);