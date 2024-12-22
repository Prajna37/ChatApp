import multer from 'multer';
import {GridFsStorage} from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.db_username;
const PASSWORD = process.env.db_password;

const storage = new GridFsStorage({
    url:"mongodb+srv://<db_username>:<db_password>@cluster0.d2qhi.mongodb.net/",

    options: {useUnifiedTopology: true, useNewUrlParser: true},
    file: (request, file) =>{
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.mimeType) === -1){
            return `${Date.now()}-file-${file.originalname}`;
        }

        return{
            bucketName: "photos",
            filename: `${Date.now()}-file-${file.originalname}`
        }
    }

});

export default multer({storage});