'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;

var orderSchema = new _mongoose2.default.Schema({
  _id: { type: String, required: true, unique: true, index: true, default: _mongoose2.default.Types.ObjectId },
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

module.exports = _mongoose2.default.model('fborder', orderSchema);