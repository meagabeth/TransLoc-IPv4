from rest_framework import serializers
from heatmap.models import Location

class LocationSerializer(serializers.ModelSerializer):
  class Meta:
    model = Location
    fields = ('latitude', 'longitude', 'frequency')