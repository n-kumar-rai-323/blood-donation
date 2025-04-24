const User = require("./bloodDonationModel")


const DonationRegister= async(payload)=>{
    const result = await User.create(payload)
    return result;

}


module.exports= {DonationRegister}