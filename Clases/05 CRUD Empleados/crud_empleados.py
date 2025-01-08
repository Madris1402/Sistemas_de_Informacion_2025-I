from modelo.ddl import DatabaseConfig as dbc
import modelo.ddl as ddl
import pandas as pd

# Insertar empleado individual
def insertar_empleado(conn, empleado):
    sql = ''' INSERT INTO Empleado(nombre, apellidos, curp, fecha_nacimiento, id_estado_residencia)
              VALUES(?,?,?,?,?) '''
    ddl.ejecutar_consulta(conn, sql, parametros=empleado)

# Insertar empleados desde un archivo CSV
def insertar_empleados_desde_csv(conn, archivo_csv):
    df = pd.read_csv(archivo_csv)
    for index, row in df.iterrows():
        empleado = (row['nombre'], row['apellidos'], row['curp'], row['fecha_nacimiento'], row['id_estado_residencia'])
        insertar_empleado(conn, empleado)

# Consultar todos los empleados
def consultar_empleados(conn):
    rs = ddl.ejecutar_lectura(conn, "SELECT * FROM Empleado")
    return rs

# Actualizar empleado
def actualizar_empleado(conn, id, empleado):
    sql = ''' UPDATE Empleado
              SET nombre = ?, apellidos = ?, curp = ?, fecha_nacimiento = ?, id_estado_residencia = ?
              WHERE id = ? '''
    empleado += (id,)  # Agrega el ID al final de la tupla de empleado
    ddl.ejecutar_consulta(conn, sql, parametros=empleado)

# Eliminar empleado
def eliminar_empleado(conn, id):
    sql = 'DELETE FROM Empleado WHERE id=?'
    ddl.ejecutar_consulta(conn, sql, parametros=(id,))

def main():
    db_config = dbc()  # Crea una instancia de la clase
    conn = db_config.crear_conn() 
    if conn is not None:
        # Insertar empleados desde un archivo CSV
        insertar_empleados_desde_csv(conn, '/Users/omarmendoza/Documents/materias/SI/pruebas/CRUDEmpleados/empleados.csv')

        # Consultar todos los empleados
        empleados = consultar_empleados(conn)
        for empleado in empleados:
            print(empleado)

# Testeamos el modelo
if __name__ == '__main__':
    main()