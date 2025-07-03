const db = require('../database/connection.js');

class CoursesController{
    constructor(){

    }

    search(req, res){
        try{
            db.query(`SELECT * FROM courses;`,
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
            db.query(`SELECT * FROM courses WHERE id=?;`,
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
            const {courseName, descriptionCourse, teacherId} = req.body; // Accede al cuerpo de la solicitud
            db.query(`INSERT INTO courses.courses 
                    (id, courseName, descriptionCourse, teacherId) 
                    VALUES (NULL, ?, ?, ?);`,
                [courseName, descriptionCourse, teacherId], (error, rows) => {
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
            const {nameCourse, descriptionCourse, teacherId} = req.body; // Accede al cuerpo de la solicitud
            db.query(`UPDATE courses.courses 
                    SET nameCourse=?, descriptionCourse=?, teacherId=?
                    WHERE id=?;`,
                [nameCourse, descriptionCourse, teacherId, id], (error, rows) => {
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
            db.query(`DELETE FROM courses.courses 
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

    associateStudent(req, res){
        try {
            const {courseId, studentId} = req.body; // Accede al cuerpo de la solicitud
            db.query(`INSERT INTO courses.courses_students 
                    (courseId, studentId) 
                    VALUES (?, ?);`,
                [courseId, studentId], (error, rows) => {
                    if(error){
                        res.status(400).send(error);
                    }
                    else{
                        res.status(201).json({answer: 'Estudiante registrado con éxito'});
                    }
                });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = new CoursesController();