from django.shortcuts import render
from myapp.models import AssetInventory,Student

# Create your views here.
def index(request):
    return render(request,'grc/index.html')

def about(request):
    return render(request,'grc/about.html')

def services(request):
    return render(request,'grc/services.html')

def login(request):
    return render(request,'grc/login.html')

def asset_inventory(request):
    # return render(request,'grc/asset_inventory.html')
    assets = AssetInventory.objects.all()
    # for x in assets:
    #     print(x.hostname)
    return render(request, 'grc/asset_inventory.html', {'asset': assets})

def register(request):
    students = Student.objects.all()
    # for x in students:
    #     print(x.roll)
    return render(request,"grc/register.html",{'student':students})

def contact(request):
    return render(request,'grc/contact.html')


