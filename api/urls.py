from django.urls import path, include
# from api import views as api_views
from api import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'locations', views.LocationViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # path('', api_views.location_list),
    # path('locations/', api_views.location_list),
]
