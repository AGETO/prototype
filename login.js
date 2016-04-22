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
}).on("click", function () {
    window.location("dashboard.js");
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
