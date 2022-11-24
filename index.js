import express from "express";
import calculatorRouter from "./src/routes/calculator.router.js";
import { PORT } from "./src/configs/environment.js";

//tarea 7

const app = express();

app.listen(PORT, () => {
    console.log(`Server started ${PORT}`);
});

app.get('/inicio', (req, res) => {
    const alumno = [
        {nombre: "Vicente Aburto", titulo: "/Tarea n°7 Express"},
    ];
    const concatenacion = alumno[0].nombre + alumno[0].titulo;
    res.send(`${concatenacion}`);
});

//usar ruta (arreglar NO FUNCIONA)
app.use("/probarSuma", calculatorRouter);

//operaciones
app.get("/operations/sum", (req, res) =>{
    const nums = [
        {id: 1, valor: 3},
        {id: 2, valor: 1},
    ];
    const result = nums[0].valor + nums[1].valor;
    res.send(`Result: ${result}`);
});


app.get('/operations/substraction', (req, res) =>{
    const nums = [
        {id: 1, valor: 15},
        {id: 2, valor: 32},
    ];
    const result = nums[0].valor - nums[1].valor;
    res.send(`Result: ${result}`);
});

app.get('/operations/multiplication', (req, res) =>{
    const nums = [
        {id: 1, valor: 29},
        {id: 2, valor: 3},
    ];
    const result = nums[0].valor * nums[1].valor;
    res.send(`Result: ${result}`);
});

app.get('/operations/division', (req, res) =>{
    const nums = [
        {id: 1, valor: 22},
        {id: 2, valor: 11},
    ];
    const result = nums[0].valor / nums[1].valor;
    res.send(`Result: ${result}`);
});