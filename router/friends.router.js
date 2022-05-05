const express = require('express');

const { getFriendIndividual , getFriends  ,postFriends } =require('../controllers/friends.controller');

const friendsRouter = express.Router();

friendsRouter.use((req,res,next)=>{
    console.log(`IP at :- ${req.ip}`);
    next()
})

friendsRouter.post('/',postFriends);
friendsRouter.get('/',getFriends);
friendsRouter.get('/:friendID',getFriendIndividual);

module.exports = friendsRouter;