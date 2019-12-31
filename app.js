const app = require('./config/server.js');
require('./config/database.js');


// Em andamento
app.use('/', home);
app.use('/login', login);
app.use('/register', register);
app.use('/about', about);
app.use('/wedo', wedo);

