var client = require('../db_connection')

exports.getcat=(req,res)=>{
    client.query(`SELECT * from category`,(err,result)=>{
        if (err){
            res.status(res.statusCode).json({
                errorCode: err.message,
                status: res.statusCode,
              });
        }else{
            res.status(res.statusCode).json({
                message: "cate",
                data:result,
              });
        }
    })
//
}

//addcat
exports.addcat=(req,res)=>{
    if(req.body.name==undefined){
        res.status(res.statusCode).json({
          message: "name not found",
          error:true,
          status: res.statusCode,
        });
        return
      }
    client.query(`INSERT INTO category (name , image) VALUES ('${req.body.name}','${req.body.image}') `,(err,result)=>{
        if (err){
            res.status(res.statusCode).json({
                errorCode: err.message,
                status: res.statusCode,
              });
        }else{
            res.status(res.statusCode).json({
                message: "category add",
                data:result,
              });
        }
    })

}
//deletecat
exports.deletecat=(req,res)=>{
    client.query(`DELETE FROM category WHERE idres ='${req.body.idres}' `, function (err, result) {
        if (err) {
          res.status(res.statusCode).json({
            errorCode: err,
            status: res.statusCode,
          });
  
        } else {
          if (result.affectedRows == 0) {
            res.status(res.statusCode).json({
              errorCode: "category not found ",
              status: res.statusCode,
            });
          } else {
            sendmail(req.body.email, "rejected")
            res.status(res.statusCode).json({
              errorCode: "catrgory is deleted",
              status: res.statusCode,
            });
          }
  
        }
    })
  

}