const friends = require('../Models/friends.model');

function getFriends(req,res){
    res.json(friends);
}

function getFriendIndividual(req,res){
    const friendID = Number(req.params.friendID);
    const friend = friends[friendID];
    if(friend){
        res.status(200).json(friend);
    }
    else{
        res.status(404).json({
            error:"Invalid Friend,Does not exist",
        });
    }
}

function postFriends(req,res){
    if(!req.body.name){
        return res.status(400).json({
            error:'Invalid Friend Name'
        });
    }
    const newFriend = {
        name : req.body.name,
        id: friends.length
    };
    friends.push(newFriend);
    res.json(newFriend);
}

module.exports={
    postFriends,
    getFriends,
    getFriendIndividual
};