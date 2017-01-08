import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

var storeSchema = new mongoose.Schema({
  _id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
  name: String,
  phone: String,
  email: String
},
{
  timestamps: true
});


module.exports = mongoose.model('Store', storeSchema);
