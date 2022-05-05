const path = require('path');

function getMessages(req,res){
    //res.sendFile(path.join(__dirname,'..','public','skimountain.jpg'));
    // res.send('<ul><li>Hellooo1 Rastogi</li></ul>')
    res.render('messages',{
        title:'Message to friend',
        friend:'Heronara',
    })
}
function postMessages(req,res){
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessages
};