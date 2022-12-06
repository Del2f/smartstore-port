    
    const express = require('express');
    const cors = require('cors');
    const mongoose = require('mongoose');
    const cookieParser = require("cookie-parser");
    const path = require('path');
    const bodyParser = require('body-parser')
    const authRoutes = require('./Routes/AuthRoutes');
    require('dotenv').config(); // 환경에 따라 바뀌는 환경 변수를 한곳에 모아서 관리하는 라이브러리
    const app = express();

    mongoose.connect(process.env.DB_URL, { dbName: 'smartstore', useNewUrlParser: true,})
    .then(() => console.log('MongoDB Connected'))
    .catch((e) => console.log('MongoDB error:', e))
    
    const db = mongoose.connection; //mongoose로 연결한 첫번째 연결을 의미합니다.

    const handleOpen = () => console.log("connected to DB!");
    const handleError = (error) => console.log("DB Error", error);
    
    db.on("error", handleError);
    db.once("open", handleOpen);
    
    app.use(
        cors({
            origin: ["http://localhost:3000"],
            methods: ["GET", "POST"],
            credentials: true,
        })
        );
        
    app.use(cookieParser());
    app.use(express.json());
    app.use("/", authRoutes);
    app.use(bodyParser.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/smartstore', express.static(path.join(__dirname, '/smartstore/public/build')));
    
    app.listen(8080, function () {
        console.log('listening on 8080')
    }); 

    app.get('/smartstore/*', function(req, res){
        res.sendFile(path.join(__dirname, '/smartstore/public/build/index.html'));
    })
