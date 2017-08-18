var recursoRouter = require('./recurso-routes');

module.exports = (app) =>  {
    app.use('/recurso', recursoRouter);
    
}