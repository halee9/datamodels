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

let Staff = mongoose.model('Staff', staffSchema);

Staff.getAll = () => {
  return new Promise((resolve, reject) => {
    Staff.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports = Staff;
