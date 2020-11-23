const mongoose = require('mongoose');
const Model = require('./model');
const _ = require('lodash');

exports.getAll = (req, res) => {
    Model.find((err, data) => {
        res.jsonp({
            status: "200",
            data: data
        })
    })
}

exports.create = (req, res) => {
    const model = new Model(req.body);
    model.createby = req.user;
    model.created = new Date();
    model.save((err, data) => {
        if (err) {
            return res.status(400).send({
                status: 400,
                message: err.message
            });
        } else {
            res.jsonp({
                status: 200,
                data: data
            });
        };
    })
}

exports.getById = (req, res, next, id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({
            status: 400,
            message: 'Id is invalid'
        });
    }

    Model.findById(id, function (err, data) {
        if (err) {
            return res.status(400).send({
                status: 400,
                message: err.message
            })
        } else {
            req.data = data ? data : {};
            next();
        }
    })
}

exports.read = (req, res) => {
    res.jsonp({
        status: 200,
        data: req.data ? req.data : {}
    });
};

exports.update = (req, res) => {
    const updData = _.extend(req.data, req.body);
    updData.updateby = req.user;
    updData.updated = new Date();
    updData.save(function (err, data) {
        if (err) {
            return res.status(400).send({
                status: 400,
                message: err.message
            });
        } else {
            res.jsonp({
                status: 200,
                data: data
            });
        };
    });
};

exports.delete = (req, res) => {
    req.data.remove(function (err, data) {
        if (err) {
            return res.status(400).send({
                status: 400,
                message: err.message
            });
        } else {
            res.jsonp({
                status: 200,
                data: data
            });
        };
    });
};