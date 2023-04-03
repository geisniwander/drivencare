# ROTAS

## Consultas
### /appointments/create
Rota com autenticação de paciente, informe pelo body os campos "doctor_id", "date" no formato yyyy-mm-dd e "time" no formato hh:mm:ss. Regras de negócio: o horário de funcionamento é entre as 07:00:00 e as 18:00:00, então não é possível agendar consultas antes ou depois desses horários; Consultas só podem ser agendadas de 30 em 30 minutos, ou seja, em horários como 07:00:00, 07:30:00, 08:00:00 então, agendamentos em horários como 07:15:00, 07:45:00 não podem ser agendados, mesmo que estivessem disponíveis.
 
### /appointments/patient
Rota com autenticação de paciente, encontra todas as consultas de um paciente, não é necessário passar nenhum body

### /appointments/doctor
Rota com autenticação de medico, encontra todas as consultas de um medico, não é necessário passar nenhum body

### /appointments/finish/:appointment_id
Rota com autenticação de medico, finaliza uma consulta, necessário informar id da consulta pelo params

### /appointments/cancel/:appointment_id
Rota com autenticação de medico, cancela uma consulta, necessário informar id da consulta pelo params

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

### /doctors/schedule
Rota para retornar todos os horários disponíveis de um médico em um dia específico, enviar "id" do médico e "date" no formato yyyy-mm-aa pelo body . Atenção: o horário é salvo sem time zone, então a agenda será enviada dessa maneira, sendo necessária realizar a conversão dos horários. Exemplo: uma consulta agendada as 07:00:00 (com o horário informado dessa maneira) é agendada no bd as 10:00:00.

#
## Pacientes

### /patients/signup
Rota para criar cadastro de paciente, informe pelo body: "name", "email", "password" e "confirmPassword"

### /patients/signin
Rota para logar paciente, informe "email" e "password" pelo body
