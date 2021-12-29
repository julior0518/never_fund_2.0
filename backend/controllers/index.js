const { Taco, User, Ticket, Vote } = require('../models');

const createTaco = async (req, res) => {
  try {
    const esteTaco = await new Taco(req.body);
    await esteTaco.save();
    return res.status(201).json({
      esteTaco
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const createUser = async (req, res) => {
  try {
    const esteUser = await new User(req.body);
    await esteUser.save();
    return res.status(201).json({
      esteUser
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const createTicket = async (req, res) => {
  try {
    const esteTicket = await new Ticket(req.body);
    await esteTicket.save();
    return res.status(201).json({
      esteTicket
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const createVote = async (req, res) => {
  try {
    const esteVote = await new Vote(req.body);
    await esteVote.save();
    return res.status(201).json({
      esteVote
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
///////////////////// create data

const getAllTacos = async (req, res) => {
  try {
    const todosLosTacos = await Taco.find();
    return res.status(200).json({ todosLosTacos });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getAllUsers = async (req, res) => {
  try {
    const todosLosUsers = await User.find();
    return res.status(200).json({ todosLosUsers });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getAllTickets = async (req, res) => {
  try {
    const todosLosTickets = await Ticket.find();
    return res.status(200).json({ todosLosTickets });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getAllVotes = async (req, res) => {
  try {
    const todosLosVotes = await Vote.find();
    return res.status(200).json({ todosLosVotes });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getTacosById = async (req, res) => {
  try {
    const { id } = req.params;
    const esteTacoId = await Taco.findById(id);
    if (esteTacoId) {
      return res.status(200).json({ esteTacoId });
    }
    return res.status(404).send('This ID is not real');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const esteUserId = await User.findById(id);
    if (esteUserId) {
      return res.status(200).json({ esteUserId });
    }
    return res.status(404).send('This ID is not real');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getTicketById = async (req, res) => {
  try {
    const { id } = req.params;
    const esteTicketId = await Ticket.findById(id);
    if (esteTicketId) {
      return res.status(200).json({ esteTicketId });
    }
    return res.status(404).send('This ID is not real');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getVoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const esteVoteId = await Vote.findById(id);
    if (esteVoteId) {
      return res.status(200).json({ esteVoteId });
    }
    return res.status(404).send('This ID is not real');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getUserByUsername = async (req, res) => {
  try {
    const { nameUser } = req.params;
    const esteUsername = await User.find({ nameUser: nameUser });
    if (esteUsername) {
      return res.status(200).json({ esteUsername });
    }
    return res.status(404).send('This Username does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//////////////////get data
const updateTaco = async (req, res) => {
  try {
    const { id } = req.params;
    Taco.findByIdAndUpdate(id, req.body, { new: true }, (err, user) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!user) {
        res.status(500).send('not found!');
      }
      return res.status(200).json(user);
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    User.findByIdAndUpdate(id, req.body, { new: true }, (err, user) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!user) {
        res.status(500).send('not found!');
      }
      return res.status(200).json(user);
    });
  } catch (error) {
    return res.status(500).send(error.message);
    //// console.log(error.message) return res.status(500)
  }
};
const updateTicket = async (req, res) => {
  try {
    const { id } = req.params;
    Ticket.findByIdAndUpdate(id, req.body, { new: true }, (err, user) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!user) {
        res.status(500).send('not found!');
      }
      return res.status(200).json(user);
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const updateVote = async (req, res) => {
  try {
    const { id } = req.params;
    Vote.findByIdAndUpdate(id, req.body, { new: true }, (err, user) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!user) {
        res.status(500).send('not found!');
      }
      return res.status(200).json(user);
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
///////// update data
const deleteTaco = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Taco.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('deleted');
    }
    throw new Error('not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('deleted');
    }
    throw new Error('not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const deleteTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Ticket.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('deleted');
    }
    throw new Error('not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const deleteVote = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Vote.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('deleted');
    }
    throw new Error('not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
/////////// delete data

module.exports = {
  createTaco,
  createTicket,
  createUser,
  createVote,
  getAllTacos,
  getAllTickets,
  getAllUsers,
  getAllVotes,
  getTacosById,
  getUserById,
  getVoteById,
  getTicketById,
  updateTaco,
  updateUser,
  updateVote,
  updateTicket,
  deleteTaco,
  deleteUser,
  deleteVote,
  deleteTicket,
  getUserByUsername
};
