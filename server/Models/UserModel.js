    const mongoose = require('mongoose');
    const bcrypt = require("bcrypt");

    const userSchema = mongoose.Schema({
        id: {
            type: String,
            required: [true, "이름을 적어주세요"],
            unique: true,
            maxlength: 10,
        },
        password: {
            type: String,
            required: [true, "비밀번호를 적어주세요"],
            // minlength: 5,
        },
        pwcheck: {
            type: String,
            required: [true, "비밀번호를 다시 적어주세요"],
            // minlength: 5,
        },
        name: {
            type: String,
            required: [true, "이름을 적어주세요"],
            // minlength: 5,
        },
        phone: {
            type: String,
            required: [true, "핸드폰 번호를 적어주세요"],
            // minlength: 5,
        },
        email: {
            type: String,
            trim: true,  // 스페이스와 같은 공백을 없애주는 역할
            unique: 1,  // 똑같은 이메일을 쓰지 못하도록
            required: [true, "이메일을 적어주세요"],
            // minlength: 5,
        },
        token: {
            type:String,
        },
        tokenExp: {
            type: Number,
        }
    })

    userSchema.pre("save", async function (next) {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, salt);
        next();
    });

    userSchema.statics.login = async function (id, password) {
        const user = await this.findOne({ id }); // 로그인 시도한 아이디를 찾는다.
        if (user) {
            console.log('user : '+user)
        const auth = await bcrypt.compare(password, user.password);
        if (auth) { // 암호화된 비밀번호 체크
            return user;
        }
        throw Error("비밀번호 에러");
        }
        throw Error("아이디 에러");
    };

    module.exports = mongoose.model("Users", userSchema);