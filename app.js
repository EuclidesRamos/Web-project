const app = require('./config/server.js');
const database = require('./config/database.js');

const home = require('./routing/home.js');
const login = require('./routing/login.js');
const register = require('./routing/register.js');
const about = require('./routing/about.js');
const wedo = require('./routing/wedo.js');



// Em andamento
app.use('/', home);
app.use('/login', login);
app.use('/register', register);
app.use('/about', about);
app.use('/wedo', wedo);

