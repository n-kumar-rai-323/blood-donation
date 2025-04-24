const router =require("express").Router()
const userDonationController = require("./bloodDonationController")

router.post("/donationRegister", async (req, res, next) => {
    try {
      console.log("Request Body:", req.body); // Add this line
      const result = await userDonationController.DonationRegister(req.body);
      res.json({ data: result, msg: "Donation Registered successfully" });
    } catch (e) {
      next(e);
    }
  });

module.exports=router