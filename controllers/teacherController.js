class TeacherController{
    constructor(){

    }

    search(req, res){
        res.json({msg: "Consulta de profesores"});
    }

    searchDetail(req, res){
        const { id } = req.params;
        res.json({msg: `Consulta de profesor con id ${id}`});
    }

    insert(req, res){
        res.json({msg: "Agregar profesor"});
    }

    update(req, res){
        res.json({msg: "Actualización de profesor"});
    }

    delete(req, res){
        res.json({msg: "Borrado de profesor"});
    }
}

module.exports = new TeacherController();