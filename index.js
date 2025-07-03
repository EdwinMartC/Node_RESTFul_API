const express = require('express');
const app = express ();
app.use(express.json());
const PORT = process.env.PORT || 3000;
const studentsRoutes = require('./routes/StudentsRoutes.js');
const teachersRoutes = require('./routes/teachersRoutes.js');
const coursesRoutes = require('./routes/coursesRoutes.js');

app.use(express.json());
app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

//response.send(status)// is now a function that takes the JSON object as the argument.

app.get("/", (request, response) => {
   const status = {
      "Status": "Running"
   };
   
   response.send(status);
});

//para las rutas declaradas usar al módulo correspondiente
app.use("/estudiantes", studentsRoutes); 
app.use("/profesores", teachersRoutes);
app.use("/cursos", coursesRoutes);