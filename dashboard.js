var page = new tabris.Page({
    topLevel: true
});

new tabris.ImageView({
    id: "#logo",
    image: {src: "images/myzeiss.png"},
    layoutData: {centerX: 0, top: 10, width: 239, height: 101}
}).appendTo(page);

