# Description: Serializer is used to format Django Data to JSON.
from rest_framework import serializers
from .models import Room, Post


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__' # This will serialize all fields in the Room model.
        
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__' # This will serialize all fields in the Post model.