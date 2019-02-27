from rest_framework import serializers
from heatmap.models import location

class locationSerializer(serializers.ModelSerializer):
  class Meta:
    model = location
    fields = (`latitude`, `longitude`)