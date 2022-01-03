const mongoose = require('mongoose');
const UserSchema = require('./user');
const TicketSchema = require('./ticket');
const VoteSchema = require('./vote');

const User = mongoose.model('users', UserSchema);
const Ticket = mongoose.model('tickets', TicketSchema);
const Vote = mongoose.model('votes', VoteSchema);

module.exports = {
  User,
  Ticket,
  Vote
};
