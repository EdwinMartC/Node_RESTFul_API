const db = require('../database/connection.js');

class StudentsController{
    constructor(){

    }

    search(req, res){
        //res.json({msg: "Consulta de estudiantes"});
        try{
            db.query(`SELECT * FROM student;`,
                /*[],*/ (error, rows) => {
                    if(error){
                        res.status(400).send(error);
                    }
                    res.status(200).json(rows);
                });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    searchDetail(req, res){
        /*res.json({msg: `Consulta de estudiante con id ${id}`});*/
        const {id} = req.params;
        try{
            db.query(`SELECT * FROM student WHERE id=?;`,
                [id], (error, rows) => {
                    if(error){
                        res.status(400).send(error);
                    }
                    res.status(200).json(rows[0]);  //mostrar el único (primer) resultado como objeto
                });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    insert(req, res){
        //res.json({msg: "Agregar estudiante"});
        try {
            const {dni, firstName, lastName, mail} = req.body; // Accede al cuerpo de la solicitud
            db.query(`INSERT INTO courses.student 
                    (id, dni, firstName, lastName, mail) 
                    VALUES (NULL, ?, ?, ?, ?);`,
                [dni, firstName, lastName, mail], (error, rows) => {
                    if(error){
                        res.status(400).send(error);
                    }
                    else{
                        res.status(201).json({id: rows.insertId});
                    }
                });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    update(req, res){
        //res.json({msg: "Actualización de estudiante"});
        const {id} = req.params;
        try {
            const {dni, firstName, lastName, mail} = req.body; // Accede al cuerpo de la solicitud
            db.query(`UPDATE courses.student 
                    SET dni=?, firstName=?, lastName=?, mail=?
                    WHERE id=?;`,
                [dni, firstName, lastName, mail, id], (error, rows) => {
                    if(error){
                        res.status(400).send(error);
                    }
                    if(rows.affectedRows == 1)
                        res.status(200).json({answer: "Registro Actualizado con éxito"});
                });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    delete(req, res){
        //res.json({msg: "Borrado de estudiante"});
        const {id} = req.params;
        try {
            db.query(`DELETE FROM courses.student 
                    WHERE id=?;`,
                [id], (error, rows) => {
                    if(error){
                        res.status(400).send(error);
                    }
                    if(rows.affectedRows == 1)
                        res.status(200).json({answer: "Registro Eliminado con éxito"});
                });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = new StudentsController();