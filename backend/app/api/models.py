from django.db import models

import uuid


# Create your models here.
def generate_unique_code():
    return str(uuid.uuid4()).upper()[:8]  # Génère un code unique de 8 caractères

class Room(models.Model):
    code = models.CharField(max_length=50, null=False, primary_key=True, unique=True, editable=False)
    name = models.CharField(max_length=50, null=False)
    creation_date = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.code:  # Vérifie si le code est déjà défini
            self.code = generate_unique_code()
        super(Room, self).save(*args, **kwargs)
    
class Post(models.Model):
    text = models.TextField()
    creation_date = models.DateTimeField(auto_now_add=True)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)