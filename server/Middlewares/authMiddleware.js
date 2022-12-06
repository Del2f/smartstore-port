const UserModel = require ("../Models/UserModel");
const jwt = require("jsonwebtoken");


// 페이지를 이동할때마다 로그인 되어있는지 확인
// 클라이언트 쿠키에서 토큰을 가져와 복호화 한 다음, 클라이언트의 토큰과 데이터베이스의 토큰이 일치하는지 확인한다.
module.exports.checkUser = (req, res, next) => {
  console.log('checkuser 미들웨어 테스트')
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
        if (err) {
          res.json({ status: false });
          next();
        } else {
          const user = await UserModel.findById(decodedToken.id);
          if (user) res.json({ status: true, user: user.id });
          else res.json({ status: false });
          next();
        }
      }
    );
  } else {
    res.json({ status: false });
    next();
  }
};
