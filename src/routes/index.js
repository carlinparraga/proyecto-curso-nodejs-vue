import { Router } from "express";

import authController from "./../controllers/auth.controller";
import * as authMiddleware from "../middleware/auth.middleware";
export const Route = Router();

Route.post("/auth/registro", authController.registro);
Route.post("/auth/login", authController.login);
Route.get("/auth/perfil", authMiddleware.auth, authController.perfil);

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
