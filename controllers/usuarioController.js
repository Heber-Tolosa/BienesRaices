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

const formularioForgetPassword = (req, res) => {
  res.render("auth/forgetPassword", {
    pagina: "Recuperar acceso a tu cuenta",
  });
};

export { formularioLogin, formularioRegistro, formularioForgetPassword };
