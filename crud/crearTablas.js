// Importar el módulo mysql
const mysql = require('mysql');

// Configurar los detalles de la conexión a la base de datos
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root123',
  database: 'prueba'
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error de conexión: ', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

// Definir la sentencia SQL para crear la tabla
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS medico (
  id_medico INT AUTO_INCREMENT PRIMARY KEY,
  nombre_medico VARCHAR(30) NOT NULL,
  apellidos_medicos VARCHAR(30) NOT NULL
);
  CREATE TABLE IF NOT EXISTS paciente (
    id_paciente INT AUTO_INCREMENT PRIMARY KEY,
    nombre_paciente VARCHAR(30) NOT NULL,
    apellidos_paciente VARCHAR(30) NOT NULL
  );
  CREATE TABLE IF NOT EXISTS ingreso (
    id_ingreso INT AUTO_INCREMENT PRIMARY KEY,
    fecha_ingreso DATE, 
    fecha_salida DATE,
    FOREIGN KEY (id_paciente) REFERENCES paciente(id_paciente),
    FOREIGN KEY (id_medico) REFERENCES medico(id_medico)
  );`;

// Ejecutar la sentencia SQL para crear la tabla
connection.query(createTableQuery, (err, result) => {
  if (err) {
    console.error('Error al crear la tabla: ', err);
    return;
  }
  console.log('Tabla creada correctamente');
});

//Cerrar la conexión cuando hayas terminado
connection.end();