function conflictError(message) {
    return {
      name: "ConflictError",
      message,
    };
  }
  
  function duplicatedEmailError(email) {
    return {
      name: "DuplicatedEmailError",
      message: "O email informado já está sendo utilizado!",
      email,
    };
  }
  
  function unauthorizedError() {
    return {
      name: "UnauthorizedError",
      message: "Você precisa realizar login para continuar",
    };
  }
  
  function notFoundError() {
    return {
      name: "NotFoundError",
      message: "Não encontrado!",
    };
  }
  
  function invalidCredentialsError() {
    return {
      name: "InvalidCredentialsError",
      message: "Credenciais incorretas",
    };
  }
  
  export default {
    conflictError,
    duplicatedEmailError,
    unauthorizedError,
    notFoundError,
    invalidCredentialsError,
  };