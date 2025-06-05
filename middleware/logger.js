
const logger =(req,res,next)=>{
     const method = req.method;
     const url = req.url;
     const time = new Date().getFullYear();
     console.log(method,url,time);
     // res.send("middleware");
     next()
}
 module.exports = logger // export the logger middleware function so that we can use it in other files
