# Description: Import models here to allows them to be accessible in the Django admin interface.

from django.contrib import admin
from api import models

# Register your models here.
admin.site.register(models.Room)