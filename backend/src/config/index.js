import dotenv from 'dotenv';
import connectDB from '../db/connect.js';


dotenv.config({
          path: './.env'
});
const startServer = async () => {
          try {
                    await connectDB();
                    app.on('error') => {
        console.log("ERROR,error");
        throw error;
} app.listen(process.env.PORT)

          } catch (error) {
                  
           }

        }