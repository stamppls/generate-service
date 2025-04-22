let User = require('./User/User');

module.exports = (app) => {
    app.use('/', User)
}
