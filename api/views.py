from api.serializers import locationSerializer
from heatmap.models import location
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.decorators import api_view

@api_view([
  'GET',
])

def api_root(request, format=None):
  return Response({
    'locations':
    reverse('location-list', request=request, format=format)
  })

class LocationListView(generics.ListAPIView):
  """
  Retrieves list of all locations
  """
  queryset = location.objects.all()
  serializer_class = locationSerializer