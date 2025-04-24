const router =require("express").Router()

const bloodDonation=require("../modules/blood_donation/bloodDonationRoute")
const  bloodDoner = require("../modules/blood_doner/bloodDonerRoute")
router.use("/donation", bloodDonation)
router.use("/donor",bloodDoner)


module.exports=router