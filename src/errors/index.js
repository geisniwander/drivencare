function conflictError(message) {
    return {
      name: "ConflictError",
      message,
    };
  }

  function ConflictDateError(message) {
    return {
      name: "ConflictDateError",
      message:"A data/horário não estão disponíveis (consulta agendada no horário ou fora do horário de atendimento",
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

  function invalidAppointmentError() {
    return {
      name: "InvalidAppointmentError",
      message: "Consulta não encontrada",
    };
  }
  
  export default {
    conflictError,
    duplicatedEmailError,
    unauthorizedError,
    notFoundError,
    invalidCredentialsError,
    ConflictDateError,
    invalidAppointmentError
  };