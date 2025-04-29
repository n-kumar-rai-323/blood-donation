const Model = require("./registerModel");
const { genHash } = require("../../utils/secure");
const { genOTP } = require("../../utils/token");
const { sendEmail } = require("../../services/mailer");

const register = async (payload) => {
  const { password, ...rest } = payload; // Remove isActive from destructuring
  try {
    const userExist = await Model.findOne({ email: rest?.email });
    if (userExist) throw new Error("This email has already been taken");
    rest.password = genHash(password);
    const newUser = await Model.create({ ...rest, isActive: false }); // Include isActive
    if (!newUser) throw new Error("User registration failed during creation.");
    const myToken = genOTP();
    const updatedUser = await Model.updateOne({ email: newUser.email }, { token: myToken });
    if (updatedUser.modifiedCount === 0) {
      console.warn("Token update failed for user:", newUser.email);
      // Decide if this is a critical error or if you can proceed
    }
    const isEmailSent = await genEmailToken({
      to: newUser?.email,
      subject: "welcome to blood donation famly",
      msg: `<h1> Your OTP code for email varification is ${myToken}</h1>`,
    });
    if (!isEmailSent) throw new Error("User mail sending failed.");
    return { data: null, msg: "Please check your email for verification" };
  } catch (error) {
    console.error("Registration error:", error);
    throw new Error(`Registration failed: ${error.message}`); // Re-throw with more context
  }
};

const genEmailToken = async ({ to, subject, msg }) => {
  const { messageId } = await sendEmail({
    to,
    subject,
    htmlMessage: msg,
  });
  return messageId ? true : false;
};
module.exports = { register, genEmailToken };
