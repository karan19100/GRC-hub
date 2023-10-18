from django.urls import path
from . import views

urlpatterns = [

path('base/', views.base,name='base'),
path('productlist/', views.productlist,name='productlist'),
path('addproduct/', views.addproduct,name='addproduct'),
path('editproduct/', views.editproduct,name='editproduct'),
path('productdetails/', views.productdetails,name='productdetails'),

]