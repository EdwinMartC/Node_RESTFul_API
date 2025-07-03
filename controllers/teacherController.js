const db = require('../database/connection.js');

class TeacherController{
    constructor(){

    }

    search(req, res){
        try{
            db.query(`SELECT * FROM teacher;`,
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
        const {id} = req.params;
        try{
            db.query(`SELECT * FROM teacher WHERE id=?;`,
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
        try {
            const {dni, firstName, lastName, mail, profesion, telephone} = req.body; // Accede al cuerpo de la solicitud
            db.query(`INSERT INTO courses.teacher 
                    (id, dni, firstName, lastName, mail, profesion, telephone) 
                    VALUES (NULL, ?, ?, ?, ?, ?, ?);`,
                [dni, firstName, lastName, mail, profesion, telephone], (error, rows) => {
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
        const {id} = req.params;
        try {
            const {dni, firstName, lastName, mail, profesion, telephone} = req.body; // Accede al cuerpo de la solicitud
            db.query(`UPDATE courses.teacher 
                    SET dni=?, firstName=?, lastName=?, mail=?, profesion = ?, telephone = ?
                    WHERE id=?;`,
                [dni, firstName, lastName, mail, profesion, telephone, id], (error, rows) => {
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
        const {id} = req.params;
        try {
            db.query(`DELETE FROM courses.teacher 
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

module.exports = new TeacherController();