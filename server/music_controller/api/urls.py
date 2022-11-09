from django.urls import path
from .views import RoomView, RoomCreate

urlpatterns = [path("", RoomView.as_view()), path("post", RoomCreate.as_view())]
