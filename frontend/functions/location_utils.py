from geopy.geocoders import Nominatim
from geopy.distance import geodesic
from google.cloud.firestore import GeoPoint
geolocator = Nominatim(user_agent="exun-hackathons-app")

from geopy.geocoders import Nominatim
geolocator = Nominatim(user_agent='myapplication')

def get_city_coords(city: str) -> tuple:
    """Returns the coordinates of the city"""
    print(city)
    location = geolocator.geocode(city)
    if location is None:
        return (0, 0)
    

    update = GeoPoint(location.latitude, location.longitude)


    return [location, update]

