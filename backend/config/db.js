const mongoose = require('mongoose');
require("dotenv").config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            "mongodb+srv://finalyear916:finalyear916@cluster0.ihwhy0e.mongodb.net/FinalYearProject?retryWrites=true&w=majority&appName=Cluster0",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );

        console.log(
            `MongoDB Connected: ${conn.connection.host}`
        );
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit with failure
    }
}

module.exports = connectDB;
