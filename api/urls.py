from django.urls import path, include
from api import views as api_views

urlpatterns = [
    path('', api_views.location_list),
    # path('locations/', api_views.location_list),
]
