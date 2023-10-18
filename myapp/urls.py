from django.urls import path
from . import views
from Appsec.urls import path

urlpatterns = [
path('', views.index,name='index'),
path('about/', views.about,name='about'),
path('services/', views.services,name='services'),
path('login/', views.login,name='login'),
path('register/', views.register,name='register'),
path('asset_inventory/', views.asset_inventory,name='asset_inventory'),
path('contact/', views.contact,name='contact'),
]
