import requests
import pytest

API_URL = "http://ergast.com/api/f1/seasons.json"

def test_pagination():
    limit = 10
    offset = 0
    total_season_retrieved = 0
    total_season = None

    while True:
        params = {'limit':limit, 'offset':offset}
        response = requests.get(API_URL, params=params)

        #Imprimir la respuesta 
        print(f'URL: {response.url}')

        #Verificar que la llamada tiene éxito
        assert response.status_code == 200, f"Se esperaba el codigo 200 pero se obtuvo: {response.status_code}"
        
        #Leer los datos de la respuesta
        data = response.json().get('MRData', {})
        total = int(data.get('total', 0))
        if total_season is None:
            total_season = total

        seasons = data.get('SeasonTable', {}).get('Seasons', [])
        print(seasons)
        total_season_retrieved += len(seasons)

        #Verificar que cada llamada trae nuevas temporadas
        assert total_season_retrieved <= total_season, "Se recuperaron mas temporadas de las esperadas"

        if total_season_retrieved >= total_season:
            break

        offset += limit
    
    print(f"Temporadas Totales: {total_season}")
    print(f"Temporadas Recuperadas: {total_season_retrieved}")
    assert total_season_retrieved == total_season, f"Se esperaban {total_season} pero hay {total_season_retrieved}"
