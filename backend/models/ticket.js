const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Ticket = new Schema(
  {
    title: { type: String, required: true },
    contract: { type: String, required: true },
    description: { type: String, required: true },
    totalVotes: { type: Number, required: true },
    positiveVotes: { type: Number, required: true },
    negativeVotes: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = Ticket;
