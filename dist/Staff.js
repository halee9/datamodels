'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;

var Schema = _mongoose2.default.Schema;

var clockSchema = new Schema({
  type: { type: Date, default: Date.now },
  date: Date
});

var staffSchema = new Schema({
  name: { type: String, required: true },
  passcode: { type: String, required: true },
  clocks: [clockSchema]
}, {
  timestamps: true
});

module.exports = _mongoose2.default.model('Staff', staffSchema);