from django.contrib.gis.db.models.functions import Distance
from django.contrib.gis.geos import Point
from django.http import HttpResponse
from django_filters.rest_framework import DjangoFilterBackend
from requests import Response
from rest_framework import status, viewsets
from rest_framework.filters import OrderingFilter
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .filters import ArticleFilter
from .models import Article, ArticleLike, Comment, MediaContent
from .serializers import (
    ArticleCreateSerializer,
    ArticleLikeSerializer,
    ArticleSerializer,
    ArticleWithCommentSerializer,
    CommentSerializer,
    MediaContentSerializer,
    ArticleWithCountSerializer,
)


class ArticleViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    filter_backends = (
        DjangoFilterBackend,
        OrderingFilter,
    )
    filterset_class = ArticleFilter
    ordering_fields = ["lat", "lng", "created_at", "updated_at"]

    def get_queryset(self):
        request = self.request
        params = request.query_params
        lat = params.get("lat")
        lng = params.get("lng")

        if not lat or not lng:
            return self.queryset

        p = Point(float(lat), float(lng), srid=4326)

        self.queryset = self.queryset.annotate(distance=Distance("location", p))
        return self.queryset

    def get_serializer_class(self):
        if self.action == "create":
            return ArticleCreateSerializer
        if self.action == "retrieve":
            return ArticleWithCommentSerializer
        if self.action == "list":
            return ArticleWithCountSerializer
        return ArticleSerializer

    def get_permissions(self):
        permission_classes = self.permission_classes
        if self.action == "create":
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]


class MediaContentViewSet(viewsets.ModelViewSet):
    queryset = MediaContent.objects.all()
    serializer_class = MediaContentSerializer


class ArticleLikeViewSet(viewsets.ModelViewSet):
    queryset = ArticleLike.objects.all()
    serializer_class = ArticleLikeSerializer

    def create(self, request):
        article_id = request.POST["article"]
        user = request.POST["liker"]
        article = get_object_or_404(Article, pk=article_id)

        if article.like_users.filter(id=user):
            article.like_users.remove(user)
        else:
            article.like_users.add(user)

        return HttpResponse(status=200)


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
