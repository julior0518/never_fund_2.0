const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Vote = new Schema(
  {
    user: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    ticket: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    votetype: { type: Number, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = Vote;
