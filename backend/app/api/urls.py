from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RoomViewSet, PostViewSet

router = DefaultRouter()
router.register('rooms', RoomViewSet, 'room')
router.register('posts', PostViewSet, 'post')

urlpatterns = [
    path('', include(router.urls)),
]