'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ElementSchema = new Schema({

  stamp: {
    type: Number,
    default: null
  },

  banch: {
    type: Number,
    default: null
  },

  serial: {
    type: Number,
    default: null
  },

  clad: {
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

  diameterThree: {
    type: Number,
    default: null
  },

  diameterFour: {
    type: Number,
    default: null
  },

  diameterAvg: {
    type: Number,
    default: null
  },

  expBoronWgt: {
    type: Number,
    default: null
  },

  expTitanateWgt: {
    type: Number,
    default: null
  },

  actElementWgt: {
    type: Number,
    default: null
  },

  actBoronWgt: {
    type: Number,
    default: null
  },

  actBoronHgt: {
    type: Number,
    default: null
  },

  actTitanateWgt: {
    type: Number,
    default: null
  },

  actTitanateHgt: {
    type: Number,
    default: null
  },

  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed', 'checked', 'defect', 'reserve', 'assembled', 'experiment']
    }],
    default: ['pending']
  },

  actBoronDensity: {
    type: Number,
    default: null
  },

  actTitanateDensity: {
    type: Number,
    default: null
  },

  nozzle: {
    type: Number,
    default: null
  },

  nozzleAvg: {
    type: Number,
    default: null
  },

  stampAvg: {
    type: Number,
    default: null
  },

  container: {
    type: Number,
    default: null
  },
  
  cladWgt: {
    type: Number,
    default: null
  },

  cladDepth: {
    type: Number,
    default: null
  },

  productionInterval: {
    type: Number,
    default: null
  },

  agentWgt: {
    type: Number,
    default: null
  },

  stand: {
    type: String,
    default: null
  },

  tipWgt: {
    type: Number,
    default: null
  },

  expElementWgt: {
    type: Number,
    default: null
  }
},

{
  timestamps: true
});

module.exports = mongoose.model('Elements', ElementSchema);