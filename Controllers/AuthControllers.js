
const UserModel = require ("../Models/UserModel");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: maxAge,
    })
} 

const handleErrors = (err) => {
    let errors = { id: "", password: "", pwcheck: "", name: "", phone: "", email: "", };
  
    console.log(err);
    if (err.message === "incorrect id") {
      errors.id = "아이디가 없습니다.";
    }
  
    if (err.message === "incorrect password") {
      errors.password = "비밀번호가 틀렸습니다.";
    }

    if (err.message === "incorrect pwcheck") {
      errors.pwcheck = "That pwcheck is incorrect";
    }

    if (err.message === "incorrect name") {
      errors.name = "That name is incorrect";
    }

    if (err.message === "incorrect phone") {
      errors.phone = "That phone is incorrect";
    }
  
    if (err.code === 11000) {
      errors.email = "Email is already registered";
      return errors;
    }
  
    if (err.message.includes("Users validation failed")) {
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
    }
  
    return errors;
  };


  // 가입 시도할때 실행
  module.exports.register = async (req, res, next) => {
    console.log('AuthControllers register 실행')
      try {
        const { id, password, pwcheck, name, phone, email } = req.body;
        const user = await UserModel.create({ id, password, pwcheck, name, phone, email });
        const token = createToken(user._id);
    
        res.cookie("jwt", token, {
          withCredentials: true,
          httpOnly: false,
          maxAge: maxAge * 1000,
        });
    
        res.status(201).json({ user: user._id, created: true });
      } catch (err) { //가입 실패
        console.log(err);
        const errors = handleErrors(err);
        res.json({ errors, created: false });
      }
    };
  
  // 로그인 시도할때 실행

  // UserModel 스키마에서 먼저 실행
  module.exports.login = async (req, res) => {

    const { id, password, name } = req.body;
    try { // 로그인 시도
      const user = await UserModel.login(id, password); //UserModel static에서 id와 password
      // console.log('user.id : ' + user.id)
      // console.log('user.password : ' + user.password)
      // console.log('user.name : ' + user.name)

      const token = createToken(user._id);
      res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });
      res.status(200).json({ user: user._id, status: true });
    } catch (err) { // 로그인 실패
      const errors = handleErrors(err);
      res.json({ errors, status: false });
    }
  };