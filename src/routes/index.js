import { Router } from "express";

import authController from "./../controllers/auth.controller";
import usuarioController from "./../controllers/usuario.controller";
import categoriaController from "./../controllers/categoria.controller";
import * as authMiddleware from "../middleware/auth.middleware";
export const Route = Router();

Route.post("/auth/registro", authController.registro);
Route.post("/auth/login", authController.login);
Route.get("/auth/perfil", authMiddleware.auth, authController.perfil);

//usuarios
Route.get("/usuario", usuarioController.listar);
Route.post("/usuario", usuarioController.guardar);
Route.get("/usuario/:id", usuarioController.mostrar);
Route.put("/usuario/:id", usuarioController.modificar);
Route.delete("/usuario/:id", usuarioController.eliminar);

//categoria
Route.get("/categoria", categoriaController.listar);
Route.post("/categoria", categoriaController.guardar);
Route.get("/categoria/:id", categoriaController.mostrar);
Route.put("/categoria/:id", categoriaController.modificar);
Route.delete("/categoria/:id", categoriaController.eliminar);

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
