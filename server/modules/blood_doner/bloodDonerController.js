const bloodDoner= require("../blood_doner/bloodDonerModel")

const donerRegister= async(payload)=>{
    const result = await bloodDoner.create(payload)
    return result;
}

module.exports ={ donerRegister}