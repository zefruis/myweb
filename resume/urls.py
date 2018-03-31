from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('education/', views.education),
    path('experince/', views.experince),
    path('projects/', views.projects),
    path('refrences/', views.refrences),
]