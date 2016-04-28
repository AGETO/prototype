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

var nameInput = new tabris.TextInput({
    id: "userNameInput"
}).appendTo(page);

new tabris.TextView({
    id: "passwordLabel",
    alignment: "left",
    text: "Password"
}).appendTo(page);

var passwordInput = new tabris.TextInput({
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
	var name = nameInput.get("text");
	var password = passwordInput.get("text");
	loginUser(name,password);
}).appendTo(page);

new tabris.Button({
    id: "other",
    text: "Sign in wo user",
    background: "white",
    border: "1,126px solid #565656",
	layoutData:{centerX:0, top: "#done 10"},
    textColor: "black"
}).on("select", function () {
	require("./menu.js").create('menu.js').open();
	page.close();
}).appendTo(page);

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

function loginUser(name, password){
	var xhttp = new XMLHttpRequest();
	var url = "https://something-phoenix913.c9users.io:8081/api/user";
	var params = "name=" + name + "&password=" + password;
	xhttp.open("POST", url, true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200){
		if(xhttp.responseText === "true"){
			require("./menu.js").create('menu.js').open();
			page.close();
		}else{
            new tabris.TextView({
                layoutData: {top: "#signin 2", centerX: 0},
                text: "Wrong username or password!",
                font: "14px",
                textColor: "red"
            }).appendTo(page);
		}
	}};
	
	xhttp.send(params);
}