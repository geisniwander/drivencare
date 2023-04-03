# ROTAS

## Consultas
### /appointments/create
Rota com autenticação de paciente, informe pelo body os campos "doctor_id", "date" no formato yyyy-mm-dd e "time" no formato hh:mm:ss
 
### /appointments/patient
Rota com autenticação de paciente, encontra todas as consultas de um paciente, não é necessário passar nenhum body

### /appointments/doctor
Rota com autenticação de medico, encontra todas as consultas de um medico, não é necessário passar nenhum body

### /appointments/finish
Rota com autenticação de medico, finaliza uma consulta, necessário informar "appointment_id" pelo body

### /appointments/cancel
Rota com autenticação de medico, cancela uma consulta, necessário informar "appointment_id" pelo body

### /appointments/finished/patient
Rota com autenticação de paciente, retorna um histórico de consultas finalizadas de um paciente, não é necessário informar nenhum dado pelo body 

### /appointmentsfinished/doctor
Rota com autenticação de medico, retorna um histórico de consultas finalizadas de um medico, não é necessário informar nenhum dado pelo body

#

## Médicos

### /doctors/signup
Rota para criar cadastro de médico, informe pelo body: "name", "email", "password", "confirmPassword", "specialty", "city" e "state"

### /doctors/signin
Rota para logar médico, informe "email" e "password" pelo body

### /doctors/specialty
Rota para retornar todos os médicos de uma especialidade, enviar "specialty" pelo body 

### /doctors/city
Rota para retornar todos os médicos de uma cidade, enviar "city" pelo body 

### /doctors/state
Rota para retornar todos os médicos de um estado, enviar "state" pelo body 

### /doctors/name
Rota para retornar todos os médicos com certo nome, enviar "name" pelo body 

#
## Pacientes

### /patients/signup
Rota para criar cadastro de paciente, informe pelo body: "name", "email", "password" e "confirmPassword"

### /patients/signin
Rota para logar paciente, informe "email" e "password" pelo body
