const mongoose = require('mongoose');
const TacoSchema = require('./taco');
const UserSchema = require('./user');
const TicketSchema = require('./ticket');
const VoteSchema = require('./vote');

const Taco = mongoose.model('takos', TacoSchema);
const User = mongoose.model('users', UserSchema);
const Ticket = mongoose.model('tickets', TicketSchema);
const Vote = mongoose.model('votes', VoteSchema);

module.exports = {
  Taco,
  User,
  Ticket,
  Vote
};
