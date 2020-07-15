'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TipSchema = new Schema({

  id: {
    type: Number,
    default: null
  },

  diameterOne: {
    type: Number,
    default: null
  },

  diameterTwo: {
    type: Number,
    default: null
  },

  diameterAvg: {
    type: Number,
    default: null
  },

  tipWgt: {
    type: Number,
    default: null
  }
},

{
  timestamps: true
});

module.exports = mongoose.model('Tips', TipSchema);