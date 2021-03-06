const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const movieRoute = require("./routes/movies")
const listRoute = require("./routes/lists")

dotenv.config();

async function main() {
    await mongoose.connect(process.env.MONGOOSE_KEY).then(() => {
        console.log('db connected')
    }).catch((error) => {
        console.log(error)
    });
    app.use(express.json())
    app.use("/api/auth", authRoute)
    app.use("/api/users", userRoute)
    app.use("/api/movies", movieRoute)
    app.use("/api/lists", listRoute)
}
main()


app.listen(8800, () => {
    console.log('backend server is running')
})