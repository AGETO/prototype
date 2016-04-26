var page = new tabris.Page({
    title: "MyZEISS",
    topLevel: true
});

new tabris.ImageView({
    id: "#logo",
    image: {src: "images/zeisslogo.png"},
    layoutData: {centerX: 0, top: 10, width: 106, height: 116}
}).appendTo(page);

new tabris.TextView({
    id: "signin",
    font: "bold 24px",
    text: "Please sign in"
}).appendTo(page);

new tabris.TextView({
    id: "userNameLabel",
    alignment: "left",
    text: "Username"
}).appendTo(page);

new tabris.TextInput({
    id: "userNameInput"
}).appendTo(page);

new tabris.TextView({
    id: "passwordLabel",
    alignment: "left",
    text: "Password"
}).appendTo(page);

new tabris.TextInput({
    id: "passwordInput",
    type: "password"
}).appendTo(page);

new tabris.CheckBox({
    id: "remember",
    align: "center",
    text: "Remember me?"
}).appendTo(page);

new tabris.Button({
    id: "done",
    text: "Sign in",
    background: "white",
    border: "1,126px solid #565656",
    textColor: "black"
}).on("select", function () {
    page1.open();
    page.close();
}).appendTo(page);
//}).on("select", function() {
//  populateMessage();

page.apply({
    "#signin": {layoutData: {centerX: 0, top: "#logo 130"}},
    "#userNameLabel": {layoutData: {left: 95, width: 120, top: "#signin 20"}},
    "#userNameInput": {
        layoutData: {left: 95, right: 95, top: "#userNameLabel 3"},
        border: "1px solid #565656",
        style: "BORDER"
    },
    "#passwordLabel": {layoutData: {left: 95, top: "#userNameInput 10", width: 120}},
    "#passwordInput": {layoutData: {left: 95, right: 95, top: "#passwordLabel 3"}, border: "1px solid #565656"},
    "#remember": {layoutData: {left: 95, top: "#passwordInput 10"}},
    "#done": {layoutData: {centerX: 0, top: "#remember 18"}}
});

page.open();

var page1 = new tabris.Page({
    topLevel: true
});

new tabris.ImageView({
    id: "#myzeiss",
    image: {src: "images/myzeiss.png"},
    layoutData: {centerX: 0, top: 0, width: 239, height: 101}
}).appendTo(page1);

new tabris.ImageView({
    id: "#devices",
    image: {src: "images/mydevices.png"},
    layoutData: {left: 40, top:"#myzeiss 110", width: 104, height: 116},
    highlightOnTouch: true
}).on("tap", function () {
    page2.open();
    page1.close();
}).appendTo(page1);

new tabris.ImageView({
    id: "#new",
    image: {src: "images/new.png"},
    layoutData: {right: 40, top:"#myzeiss 110", width: 124, height: 136}
}).appendTo(page1);

new tabris.ImageView({
    id: "#news",
    image: {src: "images/news.png"},
    layoutData: {left: 40, top:"#devices 245", width: 114, height: 126}
}).appendTo(page1);

new tabris.ImageView({
    id: "#settings",
    image: {src: "images/settings.png"},
    layoutData: {right: 40, top:"#new 250", width: 104, height: 116}
}).appendTo(page1);

new tabris.ImageView({
    id: "#support",
    image: {src: "images/support.png"},
    layoutData: {right: 40, left: 40, top:"#settings 375", height: 116}
}).appendTo(page1);

var page2 = new tabris.Page({
    topLevel: true,
    title: "My Devices"
});

new tabris.ImageView({
    id: "#zdev",
    image: {src: "images/zdev.png"},
    layoutData: {centerX: 0, top: 0},
    elevation: 999
}).appendTo(page2);

new tabris.Button({
    id: "scan",
    text: "Scan",
    background: "white",
    border: "1,126px solid #565656",
    elevation: 9999
}).on("select", function () {
    camera.open();
    page2.close();
}).appendTo(page2);

new tabris.TextInput({
    id: "search",
    text: "Search",
    alignment: "left",
    width: 120,
    elevation: 9999
}).appendTo(page2);

var scrollView = new tabris.ScrollView({
    left: 0, right: 0, top: 0, bottom: 0
}).appendTo(page2);

//device 1 begins
new tabris.ImageView({
    id: "dev1",
    image: {src: "images/device.png"}
}).appendTo(scrollView);

new tabris.TextView({
    id: "dev1info",
    alignment: "left",
    text: "Device type\nXYZ - Identifier"
}).appendTo(scrollView);

new tabris.TextView({
    id: "status",
    alignment: "left",
    text: "Status"
}).appendTo(scrollView);

new tabris.TextView({
    id: "warnings",
    alignment: "left",
    text: "Device warnings"
}).appendTo(scrollView);

new tabris.TextView({
    id: "messages",
    alignment: "left",
    text: "Messages"
}).appendTo(scrollView);

new tabris.TextView({
    id: "details",
    aligment: "left",
    text: "Details...",
    highlightOnTouch: true
}).on("tap", function () {
    page3.open();
    page2.close();
}).appendTo(scrollView);

new tabris.ImageView({
    id: "line",
    image: {src:"images/joon.png"}
}).appendTo(scrollView);
//device 1 ends

//"Filter by" button
new tabris.Button({
    id: "filter",
    text: "Filter by...",
    background: "white",
    border: "1,126px solid #565656"
}).on("select", function () {
    //camera.open();
}).appendTo(scrollView);

//device 2 begins
new tabris.ImageView({
    id: "dev2",
    image: {src: "images/device.png"}
}).appendTo(scrollView);

new tabris.TextView({
    id: "dev2info",
    alignment: "left",
    text: "Device type\nXYZ - Identifier"
}).appendTo(scrollView);

new tabris.TextView({
    id: "status2",
    alignment: "left",
    text: "Status"
}).appendTo(scrollView);

new tabris.TextView({
    id: "warnings2",
    alignment: "left",
    text: "Device warnings"
}).appendTo(scrollView);

new tabris.TextView({
    id: "messages2",
    alignment: "left",
    text: "Messages"
}).appendTo(scrollView);

new tabris.TextView({
    id: "details2",
    aligment: "left",
    text: "Details...",
    highlightOnTouch: true
}).on("tap", function () {
    page3.open();
    page2.close();
}).appendTo(scrollView);

new tabris.ImageView({
    id: "line2",
    image: {src:"images/joon.png"}
}).appendTo(scrollView);
//device 2 ends

//device 3 begins
new tabris.ImageView({
    id: "dev3",
    image: {src: "images/device.png"}
}).appendTo(scrollView);

new tabris.TextView({
    id: "dev3info",
    alignment: "left",
    text: "Device type\nXYZ - Identifier"
}).appendTo(scrollView);

new tabris.TextView({
    id: "status3",
    alignment: "left",
    text: "Status"
}).appendTo(scrollView);

new tabris.TextView({
    id: "warnings3",
    alignment: "left",
    text: "Device warnings"
}).appendTo(scrollView);

new tabris.TextView({
    id: "messages3",
    alignment: "left",
    text: "Messages"
}).appendTo(scrollView);

new tabris.TextView({
    id: "details3",
    aligment: "left",
    text: "Details...",
    highlightOnTouch: true
}).on("tap", function () {
    page3.open();
    page2.close();
}).appendTo(scrollView);

new tabris.ImageView({
    id: "line3",
    image: {src:"images/joon.png"}
}).appendTo(scrollView);
//device 3 ends

//device 4 begins
new tabris.ImageView({
    id: "dev4",
    image: {src: "images/device.png"}
}).appendTo(scrollView);

new tabris.TextView({
    id: "dev4info",
    alignment: "left",
    text: "Device type\nXYZ - Identifier"
}).appendTo(scrollView);

new tabris.TextView({
    id: "status4",
    alignment: "left",
    text: "Status"
}).appendTo(scrollView);

new tabris.TextView({
    id: "warnings4",
    alignment: "left",
    text: "Device warnings"
}).appendTo(scrollView);

new tabris.TextView({
    id: "messages4",
    alignment: "left",
    text: "Messages"
}).appendTo(scrollView);

new tabris.TextView({
    id: "details4",
    aligment: "left",
    text: "Details...",
    highlightOnTouch: true
}).on("tap", function () {
    page3.open();
    page2.close();
}).appendTo(scrollView);

new tabris.ImageView({
    id: "line4",
    image: {src:"images/joon.png"}
}).appendTo(scrollView);
//device 4 ends

//drawer
var drawer = new tabris.Drawer();

var support = new tabris.ImageView({
    id: "fordrawer",
    image: {src:"images/fordrawer.png"}
}).on("tap", function() {
    drawer.open();
}).appendTo(page2);


//Pete o'Donnell
new tabris.ImageView({
    id: "pete",
    layoutData: {left: 10, top: 10},
    image: {src: "images/pete.png"}
}).appendTo(drawer);

new tabris.TextView({
    id: "pinfo",
    text: "Pete o'Donnell",
    layoutData: {left: "#pete 5", top: 10},
    font: "bold 20px"
}).appendTo(drawer);

new tabris.TextView({
    id: "ppos",
    text: "Chief Support Engineer\nDevice Family XYZ",
    layoutData: {left: "#pete 5", top: "#pinfo 2"},
    font: "16px"
}).appendTo(drawer);

new tabris.TextView({
    id: "pstat",
    text: "Status (Available/In Chat)",
    layoutData: {left: "#pete 5", top: "#ppos 2"},
    font: "16px"
}).appendTo(drawer);

new tabris.ImageView({
    id: "icons1",
    image: {src: "images/icons.png"},
    layoutData: {left: 0, right: 0, top: "#pstat 2"}
}).appendTo(drawer);

//Robert Salino

new tabris.ImageView({
    id: "robert",
    layoutData: {left: 10, top: "#icons1 5"},
    image: {src: "images/techsupport.png"}
}).appendTo(drawer);

new tabris.TextView({
    id: "rinfo",
    text: "Robert Salino",
    layoutData: {left: "#robert 5", top: "#icons1 5"},
    font: "bold 20px"
}).appendTo(drawer);

new tabris.TextView({
    id: "rpos",
    text: "Support Technician\nDevice Family XYZ",
    layoutData: {left: "#robert 5", top: "#rinfo 2"},
    font: "16px"
}).appendTo(drawer);

new tabris.TextView({
    id: "rstat",
    text: "Status (Available/In Chat)",
    layoutData: {left: "#robert 5", top: "#rpos 2"},
    font: "16px"
}).appendTo(drawer);

new tabris.ImageView({
    id: "icons2",
    image: {src: "images/icons.png"},
    layoutData: {left: 0, right: 0, top: "#rstat 2"}
}).appendTo(drawer);

//Virgina Robertson

new tabris.ImageView({
    id: "virgina",
    layoutData: {left: 10, top: "#icons2 5"},
    image: {src: "images/comm.png"}
}).appendTo(drawer);

new tabris.TextView({
    id: "vinfo",
    text: "Virgina Robertson",
    layoutData: {left: "#virgina 5", top: "#icons2 5"},
    font: "bold 20px"
}).appendTo(drawer);

new tabris.TextView({
    id: "vpos",
    text: "Key Account\nManager",
    layoutData: {left: "#virgina 5", top: "#vinfo 2"},
    font: "16px"
}).appendTo(drawer);

new tabris.TextView({
    id: "vstat",
    text: "Status (Available/In Chat)",
    layoutData: {left: "#virgina 5", top: "#vpos 2"},
    font: "16px"
}).appendTo(drawer);

new tabris.ImageView({
    id: "icons1",
    image: {src: "images/icons.png"},
    layoutData: {left: 0, right: 0, top: "#vstat 2"}
}).appendTo(drawer);

//Drawer styling



page2.apply({

    "#search": {layoutData: {top: 14, left: 160, right: 80}, font: "13px", opacity: 0.3, border: "0px"},
    "#scan": {layoutData: {left: "#search 10", right: 10, top: 12, height: 38}, font: "12px", opacity: 0.8},
    "#fordrawer": {layoutData:{left: -75, top: 100}},

    //device 1
    "#dev1": {layoutData: {left: 10, top: "#zdev 80"}, width: 141, height: 124},
    "#dev1info": {layoutData: {left: "#dev1 5", top: "#zdev 75"}, font: "bold 18px"},
    "#status": {layoutData: {left: "#dev1 5", top:"#dev1info 2"}, font:"14px"},
    "#warnings": {layoutData: {left: "#dev1 5", top:"#status 2"}, font:"14px"},
    "#messages": {layoutData: {left: "#dev1 5", top:"#warnings 2"}, font:"14px"},
    "#details": {layoutData: {left: "#dev1 5", top: "#messages 2"}, font: "14px", textColor:"blue"},
    "#line": {layoutData:{left: 0, right: 0, top:"#details 6"}, opacity: 0.3},

    //"Filter by..."
    "#filter": {layoutData: {left: "#dev1info 5", top:"zdev 80", height: 40, right: 5}, font:"12px", opacity: 0.8},

    //device 2
    "#dev2": {layoutData: {left: 10, top: "#line 5"}, width: 141, height: 124},
    "#dev2info": {layoutData: {left: "#dev2 5", top: "#line 5"}, font: "bold 18px"},
    "#status2": {layoutData: {left: "#dev2 5", top:"#dev2info 2"}, font:"14px"},
    "#warnings2": {layoutData: {left: "#dev2 5", top:"#status2 2"}, font:"14px"},
    "#messages2": {layoutData: {left: "#dev2 5", top:"#warnings2 2"}, font:"14px"},
    "#details2": {layoutData: {left: "#dev2 5", top: "#messages2 2"}, font: "14px", textColor:"blue"},
    "#line2": {layoutData:{left: 0, right: 0, top:"#details2 6"}, opacity: 0.3},

    //device 3
    "#dev3": {layoutData: {left: 10, top: "#line2 5"}, width: 141, height: 124},
    "#dev3info": {layoutData: {left: "#dev3 5", top: "#line2 5"}, font: "bold 18px"},
    "#status3": {layoutData: {left: "#dev3 5", top:"#dev3info 2"}, font:"14px"},
    "#warnings3": {layoutData: {left: "#dev3 5", top:"#status3 2"}, font:"14px"},
    "#messages3": {layoutData: {left: "#dev3 5", top:"#warnings3 2"}, font:"14px"},
    "#details3": {layoutData: {left: "#dev3 5", top: "#messages3 2"}, font: "14px", textColor:"blue"},
    "#line3": {layoutData:{left: 0, right: 0, top:"#details3 6"}, opacity: 0.3},

    //device 4
    "#dev4": {layoutData: {left: 10, top: "#line3 5"}, width: 141, height: 124},
    "#dev4info": {layoutData: {left: "#dev3 5", top: "#line3 5"}, font: "bold 18px"},
    "#status4": {layoutData: {left: "#dev3 5", top:"#dev4info 2"}, font:"14px"},
    "#warnings4": {layoutData: {left: "#dev3 5", top:"#status4 2"}, font:"14px"},
    "#messages4": {layoutData: {left: "#dev3 5", top:"#warnings4 2"}, font:"14px"},
    "#details4": {layoutData: {left: "#dev3 5", top: "#messages4 2"}, font: "14px", textColor:"blue"},
    "#line4": {layoutData:{left: 0, right: 0, top:"#details4 6"}, opacity: 0.3}
});

//Device Details
var page3 = new tabris.Page({
    topLevel: true,
    title: "Device Details"
});

new tabris.ImageView({
    id: "zdev",
    image: {src: "images/zdev2.png"},
    layoutData: {centerX: 0, top: 0},
    elevation: 999
}).appendTo(page3);

new tabris.ImageView({
    id: "devpic",
    image: {src: "images/device.png"}
}).appendTo(page3);

new tabris.TextView({
    id: "dinf",
    alignment: "left",
    text: "Device type\nXYZ - Identifier"
}).appendTo(page3);

new tabris.TextView({
    id: "updates",
    alignment: "right",
    text: "Available update(s)"
}).appendTo(page3);

new tabris.TextView({
    id: "warnings",
    alignment: "right",
    text: "Device warnings"
}).appendTo(page3);

new tabris.Button({
    id: "trouble",
    text: "Troubleshoot",
    background: "white"
}).appendTo(page3);

//tabs with "Messages", etc
var tabFolder = new tabris.TabFolder({
    layoutData: {left: 15, top: "#trouble 10", right: 15, bottom: 10},
    paging: true // enables swiping. To still be able to open the developer console in iOS, swipe from the bottom right.
}).appendTo(page3);

var msg = new tabris.Tab({
    title: "Messages" // converted to upper-case on Android
}).appendTo(tabFolder);

var scrollView2 = new tabris.ScrollView({
    left: 15, right: 15, top: 10, bottom: 0
}).appendTo(msg);

new tabris.TextView({
    id: "date",
    text: "Tuesday 19th Apr",
    layoutData: {top: 10, centerX: 0},
    font: "bold 16px"
}).appendTo(scrollView2);

new tabris.ImageView({
    id: "divide",
    image: {src: "images/joon2.png"},
    layoutData: {top: "#date 10", left: 0, right: 0}
}).appendTo(scrollView2);

new tabris.TextView({
    id: "time",
    text: "12:54",
    layoutData: {top: "#divide 10", left: 25},
    font: "16px"
}).appendTo(scrollView2);

new tabris.TextView({
    id: "heading",
    text: "Device - Diagnostics",
    layoutData: {top: "#divide 5", centerX: 0},
    font: "bold 15px"
}).appendTo(scrollView2);

new tabris.TextView({
    id: "subject",
    text: "Warning message summary",
    layoutData: {top: "#heading 2", centerX: 0},
    font: "12px"
}).appendTo(scrollView2);

new tabris.ImageView({
    id: "divide2",
    image: {src: "images/joon2.png"},
    opacity: 0.6,
    layoutData: {top: "#subject 2", left: 0, right: 0}
}).appendTo(scrollView2);

new tabris.TextView({
    id: "time2",
    text: "13:13",
    layoutData: {top: "#divide2 10", left: 25},
    font: "16px"
}).appendTo(scrollView2);

new tabris.TextView({
    id: "heading2",
    alignment: "center",
    text: "Peter Davis,\nZEISS Support Americas",
    layoutData: {top: "#divide2 5", centerX: 0},
    font: "bold 15px"
}).appendTo(scrollView2);

new tabris.TextView({
    id: "subject2",
    text: "Message Subject",
    layoutData: {top: "#heading2 2", centerX: 0},
    font: "12px"
}).appendTo(scrollView2);

new tabris.ImageView({
    id: "divide3",
    image: {src: "images/joon2.png"},
    layoutData: {top: "#subject2 2", left: 0, right: 0},
    opacity: 0.6
}).appendTo(scrollView2);

new tabris.TextView({
    id: "date2",
    text: "Friday 15th Apr",
    layoutData: {top: "#divide3 5", centerX: 0},
    font: "16px"
}).appendTo(scrollView2);

new tabris.ImageView({
    id: "divide4",
    image: {src: "images/joon2.png"},
    layoutData: {top: "#date2 5", left: 0, right: 0}
}).appendTo(scrollView2);

new tabris.TextView({
    id: "time3",
    text: "15:17",
    layoutData: {top: "#divide4 10", left: 25},
    font: "16px"
}).appendTo(scrollView2);

new tabris.TextView({
    id: "heading3",
    alignment: "center",
    text: "Peter Davis,\nZEISS Support Americas",
    layoutData: {top: "#divide4 5", centerX: 0},
    font: "15px"
}).appendTo(scrollView2);

new tabris.TextView({
    id: "subject3",
    text: "Message Subject",
    layoutData: {top: "#heading3 2", centerX: 0},
    font: "12px"
}).appendTo(scrollView2);

new tabris.ImageView({
    id: "divide5",
    image: {src: "images/joon2.png"},
    layoutData: {top: "#subject3 2", left: 0, right: 0},
    opacity: 0.6
}).appendTo(scrollView2);

new tabris.TextView({
    id: "time4",
    text: "21:27",
    layoutData: {top: "#divide5 10", left: 25},
    font: "16px"
}).appendTo(scrollView2);

new tabris.TextView({
    id: "heading4",
    alignment: "center",
    text: "Peter Davis,\nZEISS Support Americas",
    layoutData: {top: "#divide5 5", centerX: 0},
    font: "15px"
}).appendTo(scrollView2);

new tabris.TextView({
    id: "subject4",
    text: "Message Subject",
    layoutData: {top: "#heading4 2", centerX: 0},
    font: "12px"
}).appendTo(scrollView2);

new tabris.ImageView({
    id: "divide6",
    image: {src: "images/joon2.png"},
    layoutData: {top: "#subject4 2", left: 0, right: 0},
    opacity: 0.6
}).appendTo(scrollView2);

var maint = new tabris.Tab({
    title: "Maintenance"
}).appendTo(tabFolder);

new tabris.TextView({
    text: "Content of Tab Maintenance",
    centerX: 0, top: 50
}).appendTo(maint);

var stat = new tabris.Tab({
    title: "Statistics"
}).appendTo(tabFolder);

new tabris.TextView({
    text: "Content of Tab Statistics",
    centerX: 0, top: 50
}).appendTo(stat);

page3.apply({
    "#devpic": {layoutData: {top: "#zdev 10", left: 5}, width: 161, height: 144},
    "#dinf": {layoutData: {top: "#zdev 10", left: "#devpic 5"}, font: "bold 20px"},
    "#updates": {layoutData: {left: "#devpic 5", top: "#warnings 2"}, font: "18px"},
    "#warnings": {layoutData: {left: "#devpic 5", top: "#dinf 2"}, font: "18px"},
    "#trouble": {layoutData: {top: "#updates 10", left: "#devpic 25"}, font: "15px", opacity: 0.8}
});

