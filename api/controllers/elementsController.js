'use strict';

var mongoose = require('mongoose'),
  Element = mongoose.model('Elements');



exports.list_all_elements = function(req, res) {
  Element.find({}, function(err, element) {
    if (err)
      res.send(err);
    res.json(element);
  });
};


exports.create_an_element = function(req, res) {
  var new_element = new Element(req.body);
  new_element.save(function(err, element) {
    if (err)
      res.send(err);
    res.json(element);
  });
};

exports.read_an_element = function(req, res) {
  Element.findById(req.params.elementId, function(err, element) {
    if (err)
      res.send(err);
    res.json(element);
  });
};

exports.update_an_element = function(req, res) {
  Element.findOneAndUpdate({_id:req.params.elementId}, req.body, {new: true, useFindAndModify: false}, function(err, element) {
    if (err)
      res.send(err);
    res.json(element);
  });
};
// Element.remove({}).exec(function(){});
exports.delete_an_element = function(req, res) {

  Element.remove({
    _id: req.params.elementId
  }, function(err, element) {
    if (err)
      res.send(err);
    res.json({ message: 'Element successfully deleted' });
  });
};
