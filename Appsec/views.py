from django.shortcuts import render


# Create your views here.

def base(request):
    return render(request,'base.html')

def productlist(request):
    return render(request,'productlist.html')

def addproduct(request):
    return render(request,'addproduct.html')

def editproduct(request):
    return render(request,'editproduct.html')

def productdetails(request):
    return render(request,'productdetails.html')