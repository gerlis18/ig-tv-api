var Recurso = require('../models/recurso');

function guardarRecurso(req, res) {
    var recurso = new Recurso({
        tipoKudo: {
            nombre: req.body.tipoKudo.nombre
        },
        titulo: req.body,titulo,
        descripcion: req.body.descripcion,
        mensaje: req.body.mensaje,
        fuenteKudo: {
            nombre: req.body.fuenteKudo.nombre
        }
    })

    recurso.save((err, recurso) => {
        if (err) {
            return res.status(500)
            .json({
                status: false,
                statusCode: res.statusCode,
                err
            })

            res.status(200)
            .json({
                status: res.status,
                statusCode: res.statusCode,
                recurso
            })
        }
    });
}

function consultarRecurso(req, res) {
    Recurso.find((err, recurso) => {
        if (err) {
            return res.status(500)
            .json({
                status: res.status,
                statusCode: res.statusCode,
                err
            })
        }

        res.status(200)
            .json({
                status: res.status,
                statusCode: res.statusCode,
                recurso
            })
    });
}

module.exports = {
    guardarRecurso,
    consultarRecurso
}