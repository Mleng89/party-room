from django.shortcuts import render
from rest_framework import generics, status
from .serializers import RoomSerializers, CreateRoomSerializer
from .models import Room
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.


# API View
class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializers


# /post
class RoomCreate(generics.CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializers


class CreateRoomView(APIView):
    serializer_class = CreateRoomSerializer

    def post(self, req, format=None):
        if not self.req.session.exist(self.req.session.session_key):
            self.req.session.create()
        serializer = self.serializer_class(data=req.data)

        if serializer.is_valid():
            guest_can_pause = serializer.data.guest_can_pause
            votes_to_skip = serializer.data.votes_to_skip
            host = self.req.session.session_key
            queryset = Room.objects.filter(host=host)
            if queryset.exists():
                room = queryset[0]
                room.guest_can_pause = guest_can_pause
                room.votes_to_skip = votes_to_skip
                room.save(update_fields=["guest_can_pause", "votes_to_skip"])
            else:
                room = Room(
                    host=host,
                    guest_can_pause=guest_can_pause,
                    votes_to_skip=votes_to_skip,
                )
                room.save()
                return Response(
                    RoomSerializers(room).data, stats=status.HTTP_201_CREATED
                )
        return Response(
            {"Bad Request": "Invalid data..."}, status=status.HTTP_400_BAD_REQUEST
        )
