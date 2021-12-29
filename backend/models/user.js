const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
  {
    wallet: { type: String, required: false },
    nameUser: { type: String, required: true },
    nameFirst: { type: String, required: false },
    nameLast: { type: String, required: false },
    email: { type: String, required: false },
    phoneNumber: { type: Number, required: false },
    address: { type: String, required: false },
    password: { type: String, required: true },
    description: { type: String, required: false },
    image: { type: String, required: false },
    ticketsCreated: [{ type: Schema.Types.ObjectId, ref: 'tickets' }],
    votesCreated: [{ type: Schema.Types.ObjectId, ref: 'tickets' }]
  },
  { timestamps: true }
);

module.exports = User;
