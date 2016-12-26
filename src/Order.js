import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

var orderSchema = new mongoose.Schema({
  _id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
  calendar: String,
  year: Number,
  month: Number,
  date: Number,
  hour: Number,
  total: Number,
  paymentType: String,
  status: String,
  order: {}
});

module.exports = mongoose.model('fborder', orderSchema);
