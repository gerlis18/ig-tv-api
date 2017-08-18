var Schema = require('mongoose').Schema;
var TipoKudo = require('./tipo-kudo');
var FuenteKudo = require('./fuente-kudo');

module.exports = {
    tipoKudo : TipoKudo,
    titulo: { 
        type: String,
        required: 'El titulo es requerido'
     },
    descripcion: {
        type: String,
        required: 'Descripcion requerida'
    },
    mensaje: {
        type: String,
    },
    fuente: FuenteKudo
}