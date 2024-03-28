const mongoose = require("mongoose");

module.exports = async () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    try {
        await mongoose.connect(process.env.DB, connectionParams);
        console.log("Connected to database successfully");
    } catch (error) {
        console.error("Could not connect to database:", error);
    }
};
