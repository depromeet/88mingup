from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated

from .models import Article, MediaContent
from .serializers import (
    ArticleCreateSerializer,
    ArticleSerializer,
    MediaContentSerializer,
)


class ArticleViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Article.objects.all()

    def get_serializer_class(self):
        if self.action == "create":
            return ArticleCreateSerializer
        return ArticleSerializer

    def get_permissions(self):
        permission_classes = [AllowAny]
        if self.action == "create":
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]


class MediaContentViewSet(viewsets.ModelViewSet):
    queryset = MediaContent.objects.all()
    serializer_class = MediaContentSerializer
