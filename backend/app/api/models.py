from django.db import models

# Create your models here.
class Room(models.Model):
    code = models.CharField(max_length=50, null=False, unique=True, primary_key=True)
    name = models.CharField(max_length=50, null=False)
    creation_date = models.DateTimeField(auto_now_add=True)
    