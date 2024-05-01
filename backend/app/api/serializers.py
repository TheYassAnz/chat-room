# Description: Serializer is used to format Django Data to JSON.
from rest_framework import serializers
from .models import Room


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__' # This will serialize all fields in the Room model.