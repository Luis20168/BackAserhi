CREATE DATABASE aserhidb;






CREATE TABLE usuarios (
    _id SERIAL PRIMARY KEY,
    identificacion INTEGER UNIQUE,
    nombre VARCHAR(45),
    apellidos VARCHAR(45),
    telefono VARCHAR(45),
    email VARCHAR(50),
    contrasena VARCHAR(128),
    id_rol INTEGER REFERENCES roles(id_rol)


);

CREATE TABLE roles(
    id_rol SERIAL PRIMARY KEY,
    nombre_rol VARCHAR(35)
);


CREATE TABLE modulosxroles(
    id_rol INTEGER REFERENCES roles (id_rol),
    id_modulo INTEGER REFERENCES modulos (id_modulo),
    permisos VARCHAR(45)


);

CREATE TABLE modulos(
    id_modulo SERIAL PRIMARY KEY,
    id_modulo_padre INTEGER UNIQUE,
    nombre_modulo VARCHAR(45) NOT NULL,
    url_modulo VARCHAR(255),
    icono VARCHAR(45),
    orden INTEGER


);
