from django.shortcuts import render

# Create your views here.

def home(request):
    context = {}
    return render(request, 'home.html', context)

def education(request):
    context = {}
    return render(request, 'education.html', context)

def experience(request):
    context = {}
    return render(request, 'experience.html', context)

def projects(request):
    context = {}
    return render(request, 'projects.html', context)

def refrences(request):
    context = {}
    return render(request, 'refrences.html', context)