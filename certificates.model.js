const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    name: String,
    status: String,
    expires_on: Number,
    domains: Array
});

module.exports = mongoose.model('Note', NoteSchema);