from django.contrib import admin
from heatmap.models import Location


class LocationAdmin(admin.ModelAdmin):
  model = Location
  list_display = ['latitude', 'longitude']


admin.site.register(Location, LocationAdmin)