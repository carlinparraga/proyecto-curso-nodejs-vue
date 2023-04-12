import { Router } from "express";

export const Route = Router();
import authController from "./../controllers/auth.controller";

Route.post("/auth/registro", authController.registro);

//declarar end point

/* Route.get('/producto', (req, res) => {
    res.send(["Teclado", "Monitor", "Mouse"]);
}) */

/*
Route.get('/producto',productController.listaProducto);
Route.post('/producto',productController.guardarProducto);
Route.get('/producto/:id',productController.mostrarProducto);
Route.put('/producto/:id',productController.modificarProducto);
Route.delete('/producto/:id',productController.eliminarProducto);*/

//module.exports = Route;
