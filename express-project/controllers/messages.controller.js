const path = require('path')

function getMessages(req, res) {
  res.send("<ul><li>Helloo Albert!</li></ul>");
}

function postMessage(req, res) {
  
  res.sendFile(path.join(__dirname, '..', 'public/images', 'skimountain.jpg'))
  res.send("Updating messages....");
}

module.exports = {
  getMessages,
  postMessage
};