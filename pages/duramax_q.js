exports.create = function (apiBaseURL) {


    var page = new tabris.Page({
        title: "Device diagnostics",
        topLevel: false
    }).on('backButtonPressed', function () {
        require("./devices.js").create(apiBaseURL).open();
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


    new tabris.TextView({
        id: "ledColor",
        layoutData: {centerX: 0, top: "#zdev 80"},
        text: "Is the main control led green?",
        font: "bold 26px"
    }).appendTo(page);

    var composite = new tabris.Composite({
        layoutData: {left: 85, top: 60, bottom: 0}
    }).appendTo(page);

    ["Yes", "No"].forEach(function (title) {
        new tabris.RadioButton({
            layoutData: {left: 'prev() 25', top: 192},
            text: title
        }).on("change:selection", function (widget, selection) {
            if (selection) {
                console.log(widget.get("text") + " selected");
            }
        }).appendTo(composite);
    });


    new tabris.Button({
        layoutData: {top: 350, centerX: 0},
        text: 'Call Support'
    }).on("select", function () {
        cordova.InAppBrowser.open('tel:56853479', '_system');
    }).appendTo(page);

    new tabris.Button({
        layoutData: {top: 420, centerX: 0},
        text: 'Next'
    }).on("select", function () {
        require("./duramax_q1.js").create(apiBaseURL).open();
    }).appendTo(page);

    return page;
};