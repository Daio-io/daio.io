'use strict';

var mongoose = require('mongoose');
var projectSchema = mongoose.Schema({

    name: { type: String, required: false },
    description: { type: String, required: false },
    meta: { type: String, required: false },
    projectURL: { type: String, required: false },
    imageURL: String,
    labels: [String]

});

var Project = mongoose.model('Project', projectSchema);

module.exports = Project;