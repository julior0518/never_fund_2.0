const mongoose = require('mongoose');
const User = require('./user');
const Schema = mongoose.Schema;

const Ticket = new Schema(
  {
    title: { type: String, required: true },
    contract: { type: String, required: true },
    description: { type: String, required: true },
    positiveVotes: { type: Number, required: false },
    negativeVotes: { type: Number, required: false },
    user: [{ type: Schema.Types.ObjectId, ref: 'user' }]
  },
  { timestamps: true }
);

module.exports = Ticket;
