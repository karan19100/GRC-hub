from django.db import connections
from django.db import models

# Create your models here.

class AssetInventory(models.Model):
    ip = models.CharField(max_length=100)
    hostname = models.CharField(max_length=100)
    owner = models.CharField(max_length=100)

    class Meta:
        db_table = "asset_inventory"   	
        unique_together = ('ip', 'hostname', 'owner')

class Student(models.Model):   
    roll = models.CharField(max_length=100)
    sclass = models.CharField(max_length=100)
    fname = models.CharField(max_length=100)
    lname = models.CharField(max_length=100)
    class Meta:
        db_table = "students"