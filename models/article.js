const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    author: {type: String, required: true},
    title: {type: String, required: true},
    ulr: {type: String, required: true},
    description: { type: String, required: true},
    publishedAt: { type:Date},
});

module.exports =  Question = mongoose.model('question', questionSchema);