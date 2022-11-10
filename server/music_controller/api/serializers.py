# Translate python code into JSON
from rest_framework import serializers
from .models import Room


class RoomSerializers(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = (
            "id",
            "code",
            "host",
            "guest_can_pause",
            "votes_to_skip",
            "created_at",
        )


class CreateRoomSerializer(serializers.ModelSerializer):
    # payload in post req
    class Meta:
        model = Room
        # serialize request
        fields = ("guest_can_pause", "votes_to_skip")
