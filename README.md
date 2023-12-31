# <p align = "center"> SocialPostify </p>
<p align = "center">
<br/>

## ✏️ Descrição
<p align="justify" >Projeto que implementa uma API capaz de realizar o agendamento de consultas médicas, nesse sentido, um paciente pode agendar e vizualizar agendamentos de consultas e um médico pode visualizar suas consultas agendadas, podendo confirmar ou cancerlar
 cada uma delas. Também é possível que o paciente e médico visualizem um histórico das consultas agendadas e realizadas.</p>

</br>

## ➡️ Rotas

## Consultas
<h4> /appointments/create</h4>
Rota com autenticação de paciente, informe pelo body os campos "doctor_id", "date" no formato yyyy-mm-dd e "time" no formato hh:mm:ss. Regras de negócio: o horário de funcionamento é entre as 07:00:00 e as 18:00:00, então não é possível agendar consultas antes ou depois desses horários; Consultas só podem ser agendadas de 30 em 30 minutos, ou seja, em horários como 07:00:00, 07:30:00, 08:00:00 então, agendamentos em horários como 07:15:00, 07:45:00 não podem ser agendados, mesmo que estivessem disponíveis.
 
<h4> /appointments/patient</h4>
Rota com autenticação de paciente, encontra todas as consultas de um paciente, não é necessário passar nenhum body

<h4> /appointments/doctor</h4>
Rota com autenticação de medico, encontra todas as consultas de um medico, não é necessário passar nenhum body

<h4> /appointments/finish/:appointment_id</h4>
Rota com autenticação de medico, finaliza uma consulta, necessário informar id da consulta pelo params

<h4> /appointments/cancel/:appointment_id</h4>
Rota com autenticação de medico, cancela uma consulta, necessário informar id da consulta pelo params

<h4> /appointments/finished/patient</h4>
Rota com autenticação de paciente, retorna um histórico de consultas finalizadas de um paciente, não é necessário informar nenhum dado pelo body 

<h4> /appointmentsfinished/doctor</h4>
Rota com autenticação de medico, retorna um histórico de consultas finalizadas de um medico, não é necessário informar nenhum dado pelo body

## Médicos

<h4> /doctors/signup</h4>
Rota para criar cadastro de médico, informe pelo body: "name", "email", "password", "confirmPassword", "specialty", "city" e "state"

<h4> /doctors/signin</h4>
Rota para logar médico, informe "email" e "password" pelo body

<h4> /doctors/specialty</h4>
Rota para retornar todos os médicos de uma especialidade, enviar "specialty" pelo body 

<h4> /doctors/city</h4>
Rota para retornar todos os médicos de uma cidade, enviar "city" pelo body 

<h4> /doctors/state</h4>
Rota para retornar todos os médicos de um estado, enviar "state" pelo body 

<h4> /doctors/name</h4>
Rota para retornar todos os médicos com certo nome, enviar "name" pelo body

<h4> /doctors/schedule</h4>
Rota para retornar todos os horários disponíveis de um médico em um dia específico, enviar "id" do médico e "date" no formato yyyy-mm-aa pelo body . Atenção: o horário é salvo sem time zone, então a agenda será enviada dessa maneira, sendo necessária realizar a conversão dos horários. Exemplo: uma consulta agendada as 07:00:00 (com o horário informado dessa maneira) é agendada no bd as 10:00:00.

## Pacientes

<h4> /patients/signup</h4>
Rota para criar cadastro de paciente, informe pelo body: "name", "email", "password" e "confirmPassword"

<h4> /patients/signin</h4>
Rota para logar paciente, informe "email" e "password" pelo body

##  <p align = "left"> :white_circle: Tecnologias</p>

- [NODEJS](https://nodejs.org/en)
- [POSTGRESQL](https://www.postgresql.org/)
</br>
