const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modelSchema = new Schema({
    name: {
        type: String
    },
    created: {
        type: Date
    },
    updated: {
        type: Date
    },
    createby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    },
    updateby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    }
});

// modelSchema.pre('save', (next) => {
//     // const model = mongoose.model('Template', modelSchema);
//     let data = this;
//     // console.log(model);
//     if (data.isNew) {
//         console.log('create');
//         // create
//         // data.created = new Date();
//         next();
//     } else {
//         // console.log('update');
//         // update
//         data.updated = new Date();
//         // console.log(data);
//         next();
//     }
// })

const model = mongoose.model('data', modelSchema);
module.exports = model;