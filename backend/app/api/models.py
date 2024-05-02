from django.db import models

import string
import random
all_characters = string.digits + string.ascii_letters
generatedCode = ''.join(random.choices(all_characters, k=7))

# Create your models here.
class Room(models.Model):
    code = models.CharField(max_length=50, null=False, unique=True, primary_key=True, default=generatedCode.upper(), auto_created=True, editable=False)
    name = models.CharField(max_length=50, null=False)
    creation_date = models.DateTimeField(auto_now_add=True)
    
class Post(models.Model):
    text = models.TextField()
    creation_date = models.DateTimeField(auto_now_add=True)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)