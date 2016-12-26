import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

var clockSchema = new Schema({
  type: { type: Date, default: Date.now },
  date: Date
});

var staffSchema = new Schema({
  name: { type: String, required: true },
  passcode: { type: String, required: true },
  clocks: [clockSchema]
},
{
  timestamps: true
});

module.exports = mongoose.model('Staff', staffSchema);
