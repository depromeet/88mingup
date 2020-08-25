from django.db.models import F
from django_filters import rest_framework as filters

from .models import Article


class ArticleFilter(filters.FilterSet):
    radius = filters.NumberFilter(label="distance", method="filter_radius")
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
        queryset = queryset.annotate(
            distance=((F("lat") - lat) ** 2) + ((F("lng") - lng) ** 2)
        )

        if value:
            queryset = queryset.filter(distance__lte=value)
            return queryset

        return queryset
