from django.shortcuts import render
from rest_framework import generics
from .serializers import RoomSerializers
from .models import Room

# Create your views here.


# API View
class RoomView(generics.CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializers
