var mongoose = require('mongoose');
var TipoRecurso = require('./tipo-recurso');

var Recurso = {
    tipoRecurso: { type: TipoRecurso, required: true},
    nombre: {
        type: String,
        required: 'nombre es requerido'
    },
    descripcion: {
        type: String,
        required: 'descripcion es requerido'
    },
    fechaCreacion: {
        type: Date,
        required: 'fecha de creacion es requerido'
    },
    ruta: {
        type: String,
        required: 'ruta es requerida'
    },
    orden: {
        type: Number,
        required: 'orden es requerida'
    },
    estado: {
        type: Boolean,
        required: 'estado es requerido'
    }
};

module.exports = mongoose.model('Recurso', Recurso);