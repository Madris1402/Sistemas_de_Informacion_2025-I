import requests
import unittest

class TestGitApi(unittest.TestCase):
    def test_get_repositorios(self):
        url = "https://api.github.com/users/omarmendoza564/repos"
        response = requests.get(url)

        #Verificar que la respuesta sea exitosa
        print (f"Codigo de respuesta{response.status_code}")
        self.assertEqual(response.status_code,200)
        self.assertNotEqual(response.status_code,404)

        #Verificar que existan repositorios
        #print(response.json())
        print(f"Numero de repositorios {len(response.json())}")
        self.assertTrue(len(response.json())>0)
        self.assertFalse(len(response.json())==0)

        #Ver los repositorios
        repos = [repo['name'] for repo in response.json() ]
        print (repos)
        self.assertIn('crudEmpleados', repos)
        self.assertNotIn('patito23', repos)

        print(type(repos[0]))
        print(f"La clase del codigo de resuesta es {type(response.status_code)}")
        self.assertIsInstance(response.status_code, int)
        self.assertNotIsInstance(response.status_code, str)


if __name__ == '__main__' :
    unittest.main()