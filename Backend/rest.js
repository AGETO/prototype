var mysql = require("mysql");
function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {
    router.get("/",function(req,res){
           res.json({"Message" : "Hello World !"});
    });
    router.post("/users",function(req,res){
		var newUser = req.body;
        var query = "INSERT INTO ??(??,??) VALUES (?,?)";
        var table = ["user","password","name",md5(newUser.password),newUser.name];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
				res.status(409);
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "User Added !"});
            }
        });
    });
	
	router.get("/users",function(req,res){
        var query = "SELECT * FROM ??";
        var table = ["user"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
				res.status(500);
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });
    
    router.post("/user",function(req,res){
    var username    =  req.body.name;
    var password    =  req.body.password;
    var query = "select 1 from ?? where ?? like ? and ?? like ?";
    var table = ["user", "username", username, "password", md5(password)];
    query = mysql.format(query,table);
    var q = connection.query(query,function(err,rows){
        if(err) {
		    res.status(500);
            res.json({"Error" : true, "Message" : "Error executing MySQL query."});
            console.log(err);
        } else if(rows.length > 0) {
            res.json(true);
            console.log(err);
        }else{
            res.json(false);
            console.log(err);
        }});
    });

    router.post("/user/devices",function(req,res){
    var user_id =  req.body.id;
    var query = "select device_name, status from ?? where ?? like ?";
    var table = ["device", "user_id", user_id];
    query = mysql.format(query,table);
    var q = connection.query(query,function(err,rows){
        if(err) {
		    res.status(500);
            res.json({"Error" : true, "Message" : "Error executing MySQL query, " + err});
        } else if(rows.length > 0) {
            res.json(rows);
        }else{
            res.json(rows);
        }});
    });


    router.get("/users/:email",function(req,res){
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["user","email",req.params.email];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
				res.status(500);
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
				if (rows.length == 0) {
					res.status(404);
					res.json({"Error" : false, "Message" : "User not found"});
				}
				else {
					res.json({"Error" : false, "Message" : "Success", "Users" : rows});
				}
            }
        });
    });
	
	
	router.put("/users/:email",function(req,res){
		var updateUser = req.body;
		if (updateUser.password == null || updateUser.password.length < 1) {
			res.status(400);
			res.json({"Error" : false, "Message" : "No password provided"});
		} else {
			var query = "UPDATE ?? SET ?? = ?, ?? = ? WHERE ?? = ?";
			var table = ["user","password",md5(updateUser.password),"name",updateUser.name,"email",req.params.email];
			query = mysql.format(query,table);
			connection.query(query,function(err,rows){
				if(err) {
					res.status(500);
					res.json({"Error" : true, "Message" : "Error executing MySQL query"});
				} else {
					if (rows.affectedRows == 0) {
						res.status(404);
						res.json({"Error" : false, "Message" : "User not found"});
					} else {
					   res.json({"Error" : false, "Message" : "Updated the password for email "+req.params.email});
					}
				}
			});
		}
    });
	
	router.delete("/users/:email",function(req,res){
        var query = "DELETE from ?? WHERE ??=?";
        var table = ["user","email",req.params.email];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
				res.status(500);
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Deleted the user with email "+req.params.email});
            }
        });
    });
	
	
}

module.exports = REST_ROUTER;