const db = require('../database/connection.js');

class StudentsController{
    constructor(){

    }

    search(req, res){
        res.json({msg: "Consulta de estudiantes"});
    }

    searchDetail(req, res){
        const {id} = req.params;
        res.json({msg: `Consulta de estudiante con id ${id}`});
    }

    insert(req, res){
        res.json({msg: "Agregar estudiante"});
    }

    update(req, res){
        res.json({msg: "Actualización de estudiante"});
    }

    delete(req, res){
        res.json({msg: "Borrado de estudiante"});
    }
}

module.exports = new StudentsController();