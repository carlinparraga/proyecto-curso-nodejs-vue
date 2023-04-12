import models from "./../models";

export default {
  async registro(req, res) {
    const { nombre, apellidos, email, password } = req.body;

    let user = await models.User.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      //cifrar password
      await models.User.create({
        nombre,
        apellidos,
        email,
        password,
      });

      return res.status(200).send({
        mensaje: "Usuario registrado",
      });
    }

    return res.status(422).send({
      mensaje: "Usuario no registrado",
    });
  },

  login(req, res) {},
  perfil(req, res) {},
};
