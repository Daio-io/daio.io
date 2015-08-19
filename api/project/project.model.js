'use strict';

const mongoose = require('mongoose');
const projectSchema = mongoose.Schema({

    name: { type: String, required: false },
    description: { type: String, required: false },
    meta: { type: String, required: false },
    projectURL: { type: String, required: false },
    imageURL: String,
    labels: [String]

});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;