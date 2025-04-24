const router = require("express").Router();
const useDonerController=require("./bloodDonerController")


router.post("/donor", async (req, res, next) => {
  try {
   console.log("Request body:", req.body)
   const result = await useDonerController.donerRegister(req.body)
   res.json({data: result, msg:"Doner Register Sussfully"})
  } catch (e) {
    next(e);
  }
});
module.exports=router
