const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://arjun:arjun@cluster0.3wtn3cm.mongodb.net/firstcry?retryWrites=true&w=majority");
// const connection = mongoose.connect("mongodb+srv://manish-nishad:manish-nishad@cluster0.4yljajf.mongodb.net/firstcry?retryWrites=true&w=majority")


module.exports = { connection }