import time
import argparse
from selenium import webdriver
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.firefox.options import Options
# from selenium.webdriver.firefox.service import Service
# from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.by import By

parser = argparse.ArgumentParser(
    description="Realizar una búsqueda en google")

parser.add_argument('tema', metavar='T', type=str,
                    nargs='?', default='México',
                    help='El tema a buscar en google')


args = parser.parse_args()

driver_path = "./driver_path/geckodriver.exe"
navegador_path = "C:/Program Files/Mozilla Firefox/firefox.exe"

service = Service(executable_path=driver_path)
navegador_options = Options()
navegador_options.binary_location = navegador_path

driver = webdriver.Firefox(service=service, options=navegador_options)
#driver = webdriver.Chrome(service=service, options=navegador_options)

#Abrir el navegador e ir a Google
driver.get('https://www.google.com/')


caja_busqueda = driver.find_element(By.NAME, 'q')

#Pasar un tema a buscar
caja_busqueda.send_keys(args.tema)
time.sleep(5)

caja_busqueda.submit()
time.sleep(5)

webdriver.F