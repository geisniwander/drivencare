--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: public.appointments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."public.appointments" (
    id integer NOT NULL,
    patient_id integer NOT NULL,
    doctor_id integer NOT NULL,
    date date NOT NULL,
    "time" time without time zone,
    canceled boolean DEFAULT false,
    finished boolean DEFAULT false
);


--
-- Name: public.appointments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."public.appointments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: public.appointments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."public.appointments_id_seq" OWNED BY public."public.appointments".id;


--
-- Name: public.doctors; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."public.doctors" (
    id integer NOT NULL,
    email text NOT NULL,
    name text NOT NULL,
    password text NOT NULL,
    specialty text NOT NULL,
    city text NOT NULL,
    state text NOT NULL
);


--
-- Name: public.doctors_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."public.doctors_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: public.doctors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."public.doctors_id_seq" OWNED BY public."public.doctors".id;


--
-- Name: public.patients; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."public.patients" (
    id integer NOT NULL,
    email text NOT NULL,
    name text NOT NULL,
    password text NOT NULL
);


--
-- Name: public.patients_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."public.patients_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: public.patients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."public.patients_id_seq" OWNED BY public."public.patients".id;


--
-- Name: public.appointments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.appointments" ALTER COLUMN id SET DEFAULT nextval('public."public.appointments_id_seq"'::regclass);


--
-- Name: public.doctors id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.doctors" ALTER COLUMN id SET DEFAULT nextval('public."public.doctors_id_seq"'::regclass);


--
-- Name: public.patients id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.patients" ALTER COLUMN id SET DEFAULT nextval('public."public.patients_id_seq"'::regclass);


--
-- Data for Name: public.appointments; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."public.appointments" VALUES (22, 4, 8, '2023-04-04', '08:00:00', false, false);
INSERT INTO public."public.appointments" VALUES (23, 4, 8, '2023-04-04', '07:00:00', false, false);
INSERT INTO public."public.appointments" VALUES (24, 4, 8, '2023-04-04', '17:30:00', false, false);
INSERT INTO public."public.appointments" VALUES (25, 4, 7, '2023-04-04', '07:00:00', false, false);
INSERT INTO public."public.appointments" VALUES (26, 4, 7, '2023-04-04', '08:00:00', false, false);
INSERT INTO public."public.appointments" VALUES (27, 4, 7, '2023-04-04', '08:30:00', false, false);
INSERT INTO public."public.appointments" VALUES (28, 4, 7, '2023-04-04', '10:00:00', false, false);
INSERT INTO public."public.appointments" VALUES (29, 4, 7, '2023-04-04', '09:00:00', false, false);
INSERT INTO public."public.appointments" VALUES (31, 4, 7, '2023-04-05', '08:30:00', false, false);
INSERT INTO public."public.appointments" VALUES (30, 4, 7, '2023-04-05', '07:00:00', true, true);
INSERT INTO public."public.appointments" VALUES (32, 4, 7, '2023-04-05', '10:00:00', false, false);


--
-- Data for Name: public.doctors; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."public.doctors" VALUES (7, 'm1@mail.com', 'm1', '$2b$10$gC76UOmsFsII3GHx4cF55eRs8wBEpoDzSQYMGpx9Akj68tW4bj8Ye', 'clinico', 'cacoal', 'rondônia');
INSERT INTO public."public.doctors" VALUES (8, 'm2@mail.com', 'm2', '$2b$10$3Q8Og3EyzIkH..9tixluJ.Jf6I7AVgmAZ8hlj4bNqx5G8aON9maAC', 'clinico', 'cacoal', 'rondônia');
INSERT INTO public."public.doctors" VALUES (9, 'm3@mail.com', 'm3', '$2b$10$C0E6V4bSjG3P0XVVM/O3Gu/gNEN5yQ8WY7VI1cluerCJ2ck0IfK5a', 'clinico', 'cacoal', 'rondônia');
INSERT INTO public."public.doctors" VALUES (10, 'm4@mail.com', 'm4', '$2b$10$OHAOpaDk.oSgQsB.2h.2mOLhcOvp9cqVQ0BDe7tkQaydrYB8HzNwS', 'clinico', 'cacoal', 'rondônia');


--
-- Data for Name: public.patients; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."public.patients" VALUES (4, 'p1@mail.com', 'p1', '$2b$10$eeizCiJBZeu.LX8g0eG5zOt2elFhyh77Wce.xw2G1AiXOclAYBq7C');
INSERT INTO public."public.patients" VALUES (5, 'p2@mail.com', 'p2', '$2b$10$QRhi7S4svtlKs/QbU8qOyOS5hyys4qeTiHhJouhs5OY.vQJ0zwTRq');
INSERT INTO public."public.patients" VALUES (6, 'p3@mail.com', 'p3', '$2b$10$2zrZ.86I5wz67/4yDqJWNeI9ODMvve.d2lXOaEay6WGO9UfGmr55m');
INSERT INTO public."public.patients" VALUES (7, 'p4@mail.com', 'p4', '$2b$10$lD2Vscr.XexcrwxGsMJg3OI4tsvNemdj9P0IZewW4WSs3Hpp0FCqO');


--
-- Name: public.appointments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."public.appointments_id_seq"', 32, true);


--
-- Name: public.doctors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."public.doctors_id_seq"', 10, true);


--
-- Name: public.patients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."public.patients_id_seq"', 7, true);


--
-- Name: public.appointments appointments_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.appointments"
    ADD CONSTRAINT appointments_pk PRIMARY KEY (id);


--
-- Name: public.doctors doctors_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.doctors"
    ADD CONSTRAINT doctors_pk PRIMARY KEY (id);


--
-- Name: public.patients patients_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.patients"
    ADD CONSTRAINT patients_pk PRIMARY KEY (id);


--
-- Name: public.doctors public.doctors_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.doctors"
    ADD CONSTRAINT "public.doctors_email_key" UNIQUE (email);


--
-- Name: public.patients public.patients_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.patients"
    ADD CONSTRAINT "public.patients_email_key" UNIQUE (email);


--
-- Name: public.appointments appointments_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.appointments"
    ADD CONSTRAINT appointments_fk0 FOREIGN KEY (patient_id) REFERENCES public."public.patients"(id);


--
-- Name: public.appointments appointments_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.appointments"
    ADD CONSTRAINT appointments_fk1 FOREIGN KEY (doctor_id) REFERENCES public."public.doctors"(id);


--
-- PostgreSQL database dump complete
--

