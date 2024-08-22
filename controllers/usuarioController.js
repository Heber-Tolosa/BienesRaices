const formularioLogin = (req, res) => {
  res.render("auth/login", {
    pagina: "Iniciar sesion",
  });
};

const formularioRegistro = (req, res) => {
  res.render("auth/register", {
    pagina: "Crear cuenta",
  });
};

export { formularioLogin, formularioRegistro };
