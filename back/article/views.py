from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from rest_framework.viewsets import ModelViewSet
from .models import Article, MediaContent
from .serializers import ArticleSerializer, MediaContentSerializer
from django_filters.rest_framework import DjangoFilterBackend
from .filters import ArticleFilter
from rest_framework.filters import OrderingFilter


class ArticleViewSet(ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    filter_backends = (DjangoFilterBackend,OrderingFilter,)
    filterset_class = ArticleFilter
    ordering_fields = ["lat","popularity","lng","created_at","updated_at"]

class MediaContentViewSet(ModelViewSet):
    queryset = MediaContent.objects.all()
    serializer_class = MediaContentSerializer
