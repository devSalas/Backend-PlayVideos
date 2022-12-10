const { default: mongoose } = require("mongoose");

const User = require("./models/User");

const getUsers = async () => {
  return await User.find({});
};
const getUser = async (id) => {
  return await User.findById(id);
};
const verificarUsuario = async (body) => {
  const { email, password } = body;
  console.log(18, email, password);
  return await User.findOne({ email: email, password: password });
};

const createUser = async (body) => {
  console.log(body);
  const { name, subscribed, img, email, password } = body;
  if (!name || !email) return;

  const getUsuario = await User.find({ email: email });
  console.log(25, getUsuario);
  if (getUsuario.length > 0)
    return { message: "el usuario ya existe", status: false, user: getUsuario };

  const newUser = new User({
    name,
    email,
    subscribed,
    img,
    password,
    date: new Date(),
  });

  return { user: newUser.save(), status: true, message: "usuario creado" };
};

const deleteUser = async (userId) => {
  console.log(userId);
  return User.findByIdAndDelete(userId);
};

const updateUser = async (userId, body) => {
  console.log("llego aqui,51");
  return User.findByIdAndUpdate(userId, body);
};

module.exports = {
  getUsers,
  getUser,
  verificarUsuario,
  createUser,
  deleteUser,
  updateUser,
};
