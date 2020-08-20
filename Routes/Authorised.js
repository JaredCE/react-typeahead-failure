exports.generate = async function(req, res) {
  res.render('generate', {
    title: 'SSH Key Server - Generate a key pair',
    username: 'hi'
  });
}
