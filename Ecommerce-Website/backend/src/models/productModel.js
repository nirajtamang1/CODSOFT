import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
});
export default mongoose.model("product", productSchema);
