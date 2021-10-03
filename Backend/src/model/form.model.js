const { Schema, model } = require("mongoose");

//form schema for taking inputs from the form and storing in the form of database
const formSchema = new Schema(
  {
    name: { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("form", formSchema);
