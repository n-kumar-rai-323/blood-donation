const router = require("express").Router();
const useDonerController=require("./bloodDonerController")

router.post('/donor', async (req, res) => {
  try {
    const donorData = req.body;
    console.log('Received donor data:', donorData);

    // Backend validation (example)
    if (!donorData.name) {
      return res.status(400).json({ error: 'Name is required on the server.' });
    }

    // Database interaction (example - assuming you have a Donor model)
    const newDonor = await useDonerController.donerRegister(donorData);
    console.log('Donor created:', newDonor);

    res.status(201).json({ message: 'Donor registered successfully!', data: newDonor });

  } catch (error) {
    console.error("Error registering donor:", error);
    res.status(500).json({ error: 'Failed to register donor on the server.' });
  }
});
module.exports=router
