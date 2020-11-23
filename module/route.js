var controller = require('./controller');

module.exports = (app) => {
    app.route('/')
        .get(controller.getAll)
        .post(controller.create)

    app.route('/:id')
        .get(controller.read)
        .put(controller.update)
        .delete(controller.delete)

    app.param('id',controller.getById)
}