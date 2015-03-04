'use strict';

var mongoose = require('mongoose');
var projectSchema = mongoose.Schema({

    name: { type: String, required: true },
    description: { type: String, required: true },
    projectURL: { type: String, required: true },
    platform: { type: String, required: true },
    imageURL: String

});

var Project = mongoose.model('Project', projectSchema);

module.exports = Project;