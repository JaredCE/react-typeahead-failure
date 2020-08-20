exports.generate = async function(req, res) {
  data = {
    '12354645': {
      'name': 'bleep'
    },
    '12354635': {
      'name': 'itunes'
    },
    '12314645': {
      'name': 'amazon'
    },
  }
  if (data) {
    res.render('generate', {
      title: 'SSH Key Server - Generate a key pair',
      username: 'hi',
      musicServices: data,
    });
  }
}
