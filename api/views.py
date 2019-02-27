from heatmap.models import Location
from api.serializers import LocationSerializer
from django.http import JsonResponse
from rest_framework.renderers import JSONRenderer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.decorators import api_view

@api_view((
  'GET',
))

# def api_root(request, format=None):
#   return Response({
#     'Locations':
#     reverse('location-list', request=request, format=format)
#   })

def location_list(request):
  """
  List all locations
  """
  if request.method == 'GET':
    locations = Location.objects.all()
    serializer = LocationSerializer(locations, many=True)
    return JsonResponse(serializer.data, safe=False)




class LocationListView(generics.ListAPIView):
  """
  Retrieves list of all Locations
  """
  queryset = Location.objects.all()
  serializer_class = LocationSerializer