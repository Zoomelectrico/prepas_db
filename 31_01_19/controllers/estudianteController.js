const Estudiante = require("../models/Estudiante");

exports.getEstudiantes = async (req, res) => {
  let estudiantes = await Estudiante.findAll();
  estudiantes = estudiantes.map(val => val.dataValues);
  if (estudiantes) {
    return res.render("table", { title: "Tabla", estudiantes });
  }
};

exports.create = async (req, res) => {
  const { nombre, apellido, carnet, correo } = req.body;

  const estudiante = await Estudiante.build({
    nombre,
    apellido,
    carnet,
    correo
  });
  await estudiante.save();
  if (!!estudiante) {
    return res.redirect("/read");
  }
  // req.flash({ 'error': 'No se creo' });
};

exports.getEstudiante = async (req, res) => {
  const { carnet } = req.params;
  const estudiante = await Estudiante.findOne({ where: { carnet } });
  res.render("read", { title: estudiante.carnet, estudiante });
};

exports.update = async (req, res) => {
  const { nombre, apellido, carnet, correo } = req.body;
  const estudiante = await Estudiante.update(
    { nombre, apellido, carnet, correo },
    { where: { carnet } }
  );
  // await estudiante.save();
  if (!!estudiante) {
    return res.redirect("/read");
  }
};

exports.delete = async (req, res) => {};
