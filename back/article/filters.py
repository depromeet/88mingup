from django_filters import rest_framework as filters

from .models import Article


class ArticleFilter(filters.FilterSet):
    min_lat = filters.NumberFilter(field_name="lat", lookup_expr="gte")
    max_lat = filters.NumberFilter(field_name="lat", lookup_expr="lte")
    min_lng = filters.NumberFilter(field_name="lng", lookup_expr="gte")
    max_lng = filters.NumberFilter(field_name="lng", lookup_expr="lte")

    class Meta:
        model = Article
        fields = ["lat", "lng"]
