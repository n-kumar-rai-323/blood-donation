const router = require("express").Router();
const bloodDonation = require("../modules/blood_donation/bloodDonationRoute");
const bloodDoner = require("../modules/blood_doner/bloodDonerRoute");
const mainRegister = require("../modules/mainRegister/registerRoute");
router.use("/donation", bloodDonation);
router.use("/donor", bloodDoner);
router.use("/register", mainRegister);
module.exports = router;