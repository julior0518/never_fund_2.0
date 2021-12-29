const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

router.get('/', (req, res) => res.send('This is groot!'));

router.post('/tacos', controllers.createTaco);
router.post('/users', controllers.createUser);
router.post('/tickets', controllers.createTicket);
router.post('/votes', controllers.createVote);

router.get('/tacos', controllers.getAllTacos);
router.get('/users', controllers.getAllUsers);
router.get('/tickets', controllers.getAllTickets);
router.get('/Votes', controllers.getAllVotes);

router.get('/tacos/:id', controllers.getTacosById);
router.get('/users/:id', controllers.getUserById);
router.get('/tickets/:id', controllers.getTicketById);
router.get('/Votes/:id', controllers.getVoteById);

router.get('/user/:nameUser', controllers.getUserByUsername);

router.put('/tacos/:id', controllers.updateTaco);
router.put('/users/:id', controllers.updateUser);
router.put('/tickets/:id', controllers.updateTicket);
router.put('/Votes/:id', controllers.updateVote);

router.delete('/tacos/:id', controllers.deleteTaco);
router.delete('/users/:id', controllers.deleteUser);
router.delete('/tickets/:id', controllers.deleteTicket);
router.delete('/votes/:id', controllers.deleteVote);

module.exports = router;
