from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('education/', views.education),
    path('experience/', views.experience),
    path('projects/', views.projects),
    path('refrences/', views.refrences),
]