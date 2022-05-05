const path = require('path');

function getMessages(req,res){
    path.join(__dirname,'..','public','skimountain.jpg')
    res.sendFile(path.join(__dirname,'..','public','skimountain.jpg'));
    // res.send('<ul><li>Hellooo1 Rastogi</li></ul>')
}
function postMessages(req,res){
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessages
};