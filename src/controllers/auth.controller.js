import models from "./../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

var BCRYPT_SALT_ROUNDS = 12;

export default {
  async registro(req, res) {
    const { nombres, apellidos, email, password } = req.body;

    let user = await models.User.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      //cifrar password
      const saltRounds = 10;
      const hash = await bcrypt.hash(password, saltRounds);
      await models.User.create({
        nombres,
        apellidos,
        email,
        password: hash,
      });

      return res.status(200).send({
        mensaje: "Usuario registrado",
      });
    }

    return res.status(422).send({
      mensaje: "Usuario no registrado",
    });
  },

  async login(req, res) {
    const { email, password } = req.body;
    //busqueda usuario por email y password
    let user = await models.User.findOne({
      while: {
        email: email,
      },
    });
    //comprobar usuario existe
    if (!user) {
      return res.status(422).send({ mensaje: "Credenciales incorrectas" });
    }
    let correcto = await bcrypt.compare(password, user.password);
    if (correcto) {
      let payload = {
        id: user.id,
        email: user.email,
        time: new Date(),
      };
      const token = jwt.sign(payload, "Mi_clave_secreta", {
        expiresIn: 60 * 60,
      });

      return res.status(200).send({
        acces_token: token,
        usuario: user,
        error: false,
      });
    } else {
      return res.status(422).send({
        mensaje: "Contraseña incorrecta",
      });
    }

    //verificar contraseña
  },
  perfil(req, res) {
    res.status(200).send({
      mensaje: "Mi Perfil",
      usuario: user,
    });
  },
};
