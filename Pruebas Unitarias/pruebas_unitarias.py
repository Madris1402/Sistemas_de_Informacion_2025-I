#Madrigal Urencio Ricardo

import unittest
from funciones import *

class TestFunciones(unittest.TestCase):
    # Prueba para verificar si el numero es primo
    def test_es_primo(self):
        print("\nMadrigal Urencio Ricardo")
        print("\nValidar es_primo")
        self.assertTrue(es_primo(5)) # el 5 es primo
        self.assertFalse(es_primo(4)) # el 4 no es primo


    # Prueba para validar si un numero es divisible entre otro
    def test_es_divisible(self):
        print("\nMadrigal Urencio Ricardo")
        print(" \nValidar es_divisible")
        self.assertTrue(es_divisible(10, 2)) #10 es divisible entre 2
        self.assertFalse(es_divisible(10, 3)) #10 no es divisible entre 3

    # Prueba para verificar que una cadena contiene otra
    def test_contiene_subcadena(self):
        print("\nMadrigal Urencio Ricardo")
        print("\nValidar Contiene Subcadena")
        self.assertTrue(contiene_subcadena("Hola Mundo", "Patito23")) # "Hola Mundo" contiene cadena "Mundo"
        self.assertFalse(contiene_subcadena("Hola Mundo", "Tierra")) # "Hola Mundo" no contiene "Tierra"

#Ejecutar Pruebas Unitarias
if __name__ == '__main__':
    unittest.main()
