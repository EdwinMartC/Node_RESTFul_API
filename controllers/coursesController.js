const db = require('../database/connection.js');

class CoursesController{
    constructor(){

    }

    search(req, res){
        res.json({msg: "Consulta de cursos"});
    }

    searchDetail(req, res){
        const {id} = req.params;
        res.json({msg: `Consulta de curso con id ${id}`});
    }

    insert(req, res){
        res.json({msg: "Agregar curso"});
    }

    update(req, res){
        res.json({msg: "Actualización de curso"});
    }

    delete(req, res){
        res.json({msg: "Borrado de curso"});
    }
}

module.exports = new CoursesController();