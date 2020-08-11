from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.filters import OrderingFilter
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.viewsets import ModelViewSet

from .filters import ArticleFilter
from .models import Article, MediaContent
from .serializers import (
    ArticleCreateSerializer,
    ArticleSerializer,
    MediaContentSerializer,
)


class ArticleViewSet(viewsets.ModelViewSet):
    # permission_classes = [IsAuthenticated] TODO(clogic): 살려야함
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    filter_backends = (
        DjangoFilterBackend,
        OrderingFilter,
    )
    filterset_class = ArticleFilter
    ordering_fields = ["lat", "lng", "popularity", "created_at", "updated_at"]

    def get_serializer_class(self):
        if self.action == "create":
            return ArticleCreateSerializer
        return ArticleSerializer

    # TODO(clogic): 살려야함
    # def get_permissions(self):
    #     permission_classes = [AllowAny]
    #     if self.action == "create":
    #         permission_classes = [IsAuthenticated]
    #     return [permission() for permission in permission_classes]


class MediaContentViewSet(viewsets.ModelViewSet):
    queryset = MediaContent.objects.all()
    serializer_class = MediaContentSerializer
