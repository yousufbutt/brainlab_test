from django.urls import path

from main_app.views import Home, CheckAnswer

urlpatterns = [
  
    path('home/', Home.as_view()),
    path('home/check_answer/', CheckAnswer.as_view()),
   
]