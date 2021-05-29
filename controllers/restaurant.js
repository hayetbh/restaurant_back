var client = require('../db_connection')
//get all by category
exports.findById = (id, result) => {
    sql.query(`SELECT * FROM restaurant WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found customer: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };


exports.getres=(req,res)=>{
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