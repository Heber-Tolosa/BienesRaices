const formularioLogin = (req, res) => {
  res.render("auth/login", {});
};

const formularioRegistro = (req, res) => {
  res.render("auth/register", {});
};

export { formularioLogin, formularioRegistro };
