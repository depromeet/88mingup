from django.contrib.gis.db.models.functions import Distance
from django.contrib.gis.geos import Point
from django.contrib.gis.measure import Distance as D
from django.db.models import F
from django_filters import rest_framework as filters

from .models import Article


class ArticleFilter(filters.FilterSet):
    radius = filters.NumberFilter(label="distance(km)", method="filter_radius")
    lat = filters.NumberFilter(label="current lat", method="filter_lat")
    lng = filters.NumberFilter(label="current lng", method="filter_lng")

    class Meta:
        model = Article
        fields = ["writer_id"]

    def filter_lat(self, queryset, name, value: float):
        return queryset

    def filter_lng(self, queryset, name, value: float):
        return queryset

    def filter_radius(self, queryset, name, value: float):

        lat = float(self.data["lat"])
        lng = float(self.data["lng"])
        p = Point(lat, lng, srid=4326)
        queryset = queryset.filter(location__distance_lte=(p, D(km=value))).annotate(
            distance=Distance("location", p)
        )

        return queryset
