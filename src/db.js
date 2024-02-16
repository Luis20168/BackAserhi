import pkg from 'pg';
const { Pool } = pkg;

// pool nos permite crear una nueva conexión
const pool = new Pool({
    user: 'postgres',
    password: 'luis',
    host: 'localhost',
    port: 5432,
    database: 'postgres' //cambia la db
});


// // Nombre de la nueva base de datos a crear
// const nombreBaseDeDatos = 'aserhidb';

// // Consulta SQL para verificar si la base de datos ya existe
// const consultaVerificarBaseDeDatos = `SELECT 1 FROM pg_database WHERE datname = '${nombreBaseDeDatos}';`;

// // Ejecutar la consulta para verificar si la base de datos existe
// pool.query(consultaVerificarBaseDeDatos, (error, resultado) => {
//   if (error) {
//     console.error('Error al verificar la base de datos:', error);
//   } else {
//     if (resultado.rows.length === 0) {
//       // La base de datos no existe, por lo que la creamos
//       const consultaCrearBaseDeDatos = `CREATE DATABASE ${nombreBaseDeDatos};`;
//       pool.query(consultaCrearBaseDeDatos, (errorCrear, resultadoCrear) => {
//         if (errorCrear) {
//           console.error('Error al crear la base de datos:', errorCrear);
//         } else {
//           console.log('Base de datos creada correctamente');
//         }
//       });
//     } else {
//       console.log('La base de datos ya existe, no se hace nada');
//     }
//   }
// });



// // Consulta SQL para verificar si las tablas ya existen
// const consultaVerificarTablas = `
//   SELECT EXISTS (
//     SELECT 1
//     FROM   information_schema.tables 
//     WHERE  table_schema = 'public'
//     AND    table_name IN ('usuarios', 'roles', 'modulosxroles', 'modulos')
//   );
// `;

// // Ejecutar la consulta para verificar si las tablas ya existen
// pool.query(consultaVerificarTablas, (error, resultado) => {
//   if (error) {
//     console.error('Error al verificar las tablas:', error);
//   } else {
//     if (resultado.rows[0].exists) {
//       console.log('Tablas cargadas');
//     } else {
//       // Las tablas no existen, por lo que las creamos
//       const consultasCrearTablas = `
//         CREATE TABLE usuarios (
//           _id SERIAL PRIMARY KEY,
//           identificacion INTEGER UNIQUE,
//           nombre VARCHAR(45),
//           apellidos VARCHAR(45),
//           telefono VARCHAR(45),
//           email VARCHAR(50),
//           contrasena VARCHAR(128),
//           id_rol INTEGER REFERENCES roles(id_rol)
//         );

//         CREATE TABLE roles (
//           id_rol SERIAL PRIMARY KEY,
//           nombre_rol VARCHAR(35)
//         );

//         CREATE TABLE modulosxroles (
//           id_rol INTEGER REFERENCES roles(id_rol),
//           id_modulo INTEGER REFERENCES modulos(id_modulo),
//           permisos VARCHAR(45)
//         );

//         CREATE TABLE modulos (
//           id_modulo SERIAL PRIMARY KEY,
//           id_modulo_padre INTEGER UNIQUE,
//           nombre_modulo VARCHAR(45) NOT NULL,
//           url_modulo VARCHAR(255),
//           icono VARCHAR(45),
//           orden INTEGER
//         );
//       `;
//       pool.query(consultasCrearTablas, (errorCrear, resultadoCrear) => {
//         if (errorCrear) {
//           console.error('Error al crear las tablas:', errorCrear);
//         } else {
//           console.log('Tablas creadas correctamente');
//         }
//       });
//     }
//   }
// });

export default pool;


