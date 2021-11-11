from django.http.response import JsonResponse
from django.shortcuts import render
from django.views.generic import View
import requests
import random

# Create your views here.

def get_cities():

    response = requests.get('https://countriesnow.space/api/v0.1/countries/capital')
    return response.json()

class Home(View):
    def get(self, request):
        
        city_captial_dict = get_cities()
        print (len(city_captial_dict['data']))
        
        country_number = random.randint(0,len(city_captial_dict['data']))
        country  =  city_captial_dict['data'][country_number]
        print (country)

        return render(request, "main_app/home.html" ,{  "country" :  country['name'], 
                                                        "position": country_number
                                                     })

    

class CheckAnswer(View):
    def get(self, request):
        print (request.GET)
        print  (request.GET['guess'])
        print  (request.GET['position'])
        print(get_cities()['data'][22])

        guess =  request.GET['guess'].lower()   
        position = int(request.GET['position'])
        
        if guess == get_cities()['data'][position]['capital'].lower():
            return JsonResponse({'result': "You are Correct"})
        else:
            return JsonResponse({'result': "You are Incorrect Try Again"})
        