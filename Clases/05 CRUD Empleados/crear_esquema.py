from modelo.ddl import DatabaseConfig as dbc
import modelo.ddl as ddl

def main():
    db_config = dbc()  # Crea una instancia de la clase
    conn = db_config.crear_conn() 
    
    if conn is not None:
        # Crear tablas
        ddl.crear_tablas(conn)
        ddl.insertar_estado(conn)
        rs = ddl.ejecutar_lectura(conn, "SELECT * FROM Estado")
        print(rs)
    else:
        print("Error! No se pudo conectar a la base de datos.")

# Testeamos el modelo
if __name__ == '__main__':
    main()
