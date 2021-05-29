var client = require('../db_connection')
//get all by category

exports.getresbycat=(req,res)=>{
    client.query(`SELECT * from restaurant WHERE cat ='${req.body.cat}'`,(err,result)=>{
        if (err){
            res.status(res.statusCode).json({
                errorCode: err.message,
                status: res.statusCode,
              });
        }else{
            res.status(res.statusCode).json({
                message: "restaurants",
                data:result,
              });
        }
    })
//
}

//add 
exports.addres=(req,res)=>{
    if(req.body.nameRes==undefined){
        res.status(res.statusCode).json({
          message: "name not found",
          error:true,
          status: res.statusCode,
        });
        return
      }
    client.query(`INSERT INTO restaurant ( image_res,nameRes , description ,cat) VALUES ('${req.body.image_res}','${req.body.nameRes}','${req.body.description}','${req.body.cat}') `,(err,result)=>{
        if (err){
            res.status(res.statusCode).json({
                errorCode: err.message,
                status: res.statusCode,
              });
        }else{
            res.status(res.statusCode).json({
                message: "restaurant add",
                data:result,
              });
        }
    })

}
//get by id res
exports.getbyid=(req,res)=>{
    client.query(`SELECT * from restaurant WHERE id ='${req.body.id}'`,(err,result)=>{
        if (err){
            res.status(res.statusCode).json({
                errorCode: err.message,
                status: res.statusCode,
              });
        }else{
            res.status(res.statusCode).json({
                message: "restaurants",
                data:result,
              });
        }
    })

}

//delete
exports.deleteres=(req,res)=>{
  client.query(`DELETE FROM restaurant WHERE id ='${req.body.id}' `, function (err, result) {
    if (err){
      res.status(res.statusCode).json({
          errorCode: err.message,
          status: res.statusCode,
        });
  }else{
      res.status(res.statusCode).json({
          message: "restaurant deleted",
          data:result,
        });
  
        

      }
  })
}