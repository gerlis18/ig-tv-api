var Schema = require('mongoose').Schema;
var Recurso = require('./recurso');
var mongoose = require('mongoose');
var TipoPublicacion = require('./tipo-publicacion');

var Publicacion = Schema({
    recurso: {
        type: mongoose.Schema.Types.ObjectId, ref: "Recurso",
        required
    },
    tipoPublicacion: {
        type: TipoPublicacion,
        required
    },
    nombre: {
        type: String,
        required
    },
    descripcion: {
        type: String,
        required
    },
    fechaInicio: {
        type: Date
    },
    fechaFin: {
        type: Date
    },
    duracion: {
        type: Number,
        default: 10
    },
    orden: {
        type: Number,
        required
    },
    estado: {
        type: Boolean
    }
});

module.exports = require('mongoose').model('Publicacion', Publicacion);