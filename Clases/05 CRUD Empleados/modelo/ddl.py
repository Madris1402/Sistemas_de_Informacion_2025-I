import sqlite3
from sqlite3 import Error

class DatabaseConfig:
    def __init__(self, db_file='empleados.db'):
        self.DB_FILE = db_file
    
    # Método para crear una conexión a la base de datos
    def crear_conn(self):
        conn = None
        try:
            conn = sqlite3.connect(self.DB_FILE)
            print("Conexión a SQLite DB exitosa")
        except Error as e:
            print(f"El error '{e}' ocurrió")

        return conn

db_config = DatabaseConfig()

# Función para ejecutar una consulta
def ejecutar_consulta(conn, consulta, parametros=()):
    cursor = conn.cursor()
    try:
        cursor.execute(consulta, parametros)
        conn.commit()
        print("Consulta ejecutada exitosamente")
    except Error as e:
        print(f"El error '{e}' ocurrió")

# Función para ejecutar una consulta de lectura
def ejecutar_lectura(conn, consulta):
    cursor = conn.cursor()
    resultado = None
    try:
        cursor.execute(consulta)
        resultado = cursor.fetchall()
        return resultado
    except Error as e:
        print(f"El error '{e}' ocurrió")

# Crear las tablas
def crear_tablas(conn):
    sql_crear_tabla_empleado = """ 
        CREATE TABLE IF NOT EXISTS Empleado (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            apellidos TEXT NOT NULL,
            curp TEXT NOT NULL,
            fecha_nacimiento TEXT NOT NULL,
            id_estado_residencia INTEGER NOT NULL,
            FOREIGN KEY (id_estado_residencia) REFERENCES Estado (id),
            UNIQUE (curp)
        ); """
    
    sql_crear_tabla_estados = """ 
        CREATE TABLE IF NOT EXISTS Estado (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        UNIQUE (nombre)
    ); """

    sql_crear_tabla_departamento = """
    CREATE TABLE IF NOT EXISTS departamento (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        descripcion TEXT NOT NULL,
        jefe_id INTEGER,
        FOREIGN KEY (jefe_id) REFERENCES empleado (id),
        UNIQUE (nombre)
    );
    """

    sql_crear_tabla_proyecto = """
    CREATE TABLE IF NOT EXISTS proyecto (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        descripcion TEXT NOT NULL,
        duracion_semanas INTEGER NOT NULL,
        presupuesto REAL NOT NULL,
        tipo TEXT NOT NULL,
        UNIQUE (nombre)
    );
    """

    sql_crear_tabla_empleado_proyecto = """
    CREATE TABLE IF NOT EXISTS empleado_proyecto (
        empleado_id INTEGER,
        proyecto_id INTEGER,
        pago REAL NOT NULL,
        PRIMARY KEY (empleado_id, proyecto_id),
        FOREIGN KEY (empleado_id) REFERENCES empleado (id),
        FOREIGN KEY (proyecto_id) REFERENCES proyecto (id)
    );
    """

    ejecutar_consulta(conn, sql_crear_tabla_empleado)
    ejecutar_consulta(conn, sql_crear_tabla_estados)
    ejecutar_consulta(conn, sql_crear_tabla_departamento)
    ejecutar_consulta(conn, sql_crear_tabla_proyecto)
    ejecutar_consulta(conn, sql_crear_tabla_empleado_proyecto)

# Insertar estados
def insertar_estado(conn):
    sql = ''' INSERT INTO Estado(nombre) VALUES(?) '''
    
    estados = [
        'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas', 'Chihuahua',
        'Coahuila', 'Colima', 'Durango', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'México',
        'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo',
        'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas'
    ]

    for estado in estados:
        ejecutar_consulta(conn, sql, parametros=(estado,))
    
    
# ... (aquí puedes agregar funciones para insertar, actualizar, eliminar y consultar empleados, departamentos y proyectos)
