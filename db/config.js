// const mongoose = require("mongoose");
// console.log(process.env.DB_NAME);
// module.exports = {
//   connect: () => {
//     try {
//       const options = {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       };
//         // const uri = `mongodb://localhost:27017/newsportal`
//       // const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.eilfw7v.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
//       mongoose.set("strictQuery", false);
//       mongoose.connect(uri, options).catch((err) => {
//         console.log("mongoose error", err);
//       });
//     } catch (error) {
//       console.log("mongodb error", error);
//     }
//   },
// };

const mongoose = require ("mongoose");
mongoose.connect('mongodb://localhost:27017/newspaper')