const ensure = require('ensure-login');
const express = require('express');
const expressSession = require('express-session');
const multer = require('multer');

const PORT = process.env.PORT || 5000;

const main = async () => {
  const upload = multer();
  const app = express();

  app.use(express.urlencoded({extended: true}));
  app.use(express.json());
  app.use(
    expressSession({
      saveUninitialized: true,
      resave: true,
      name: 'frontend.sid',
      secret: 'abc'
    })
  );
  app.use('/healthcheck', require('express-healthcheck')());
  app.use(
    '/public',
    express.static(__dirname + '/node_modules/react-bootstrap/dist/')
  );

  app.set('views', __dirname + '/Views');
  app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine());

  app.get('/', require('./Routes/Public').public);

  const authorisedNamespace = express.Router()

  authorisedNamespace.get(
    '/generate',
    require('./Routes/Authorised').generate
  );

  authorisedNamespace.post(
    '/generate',
    upload.none(),
    require('./Routes/Authorised').generated
  );

  app.use('/auth', authorisedNamespace);

  app.use(async function (err, req, res, next) {
    console.log(err);
    res.status(500).send('Something broke!')
  });

  app.listen(PORT, () => {

  });
};

main()
  .catch(async (err) => {
    console.log(err);
  });
