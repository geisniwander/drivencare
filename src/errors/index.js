function conflictError(message) {
    return {
      name: "ConflictError",
      message,
    };
  }

  function ConflictDateError(message) {
    return {
      name: "ConflictDateError",
      message:`A data/horário não estão disponíveis (consulta agendada no horário ou fora do horário de atendimento). Lembre-se: o horário de funcionamento é entre
      as 07:00:00 horas e as 18:00:00 e só é possível agendar consultas em horarios cheios ou com meia hora, como: 07:00:00, 07:30:00, 08:00:00.`,
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