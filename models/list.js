const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listSchema = new Schema({
    skill: { type: String, required: true },
    client: { type: String, required: true },
    date: { type: Date, required: true },
    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
    experience: { type: String, required: true },
    current: { type: String, required: true },
    expected: { type: String, required: true },
    notice: { type: String, required: true },
    status1: { type: String, required: true },
    status2: { type: String, required: true },
}, {
    timestamps: true,
});

const List = mongoose.model('List', listSchema);

module.exports = List;