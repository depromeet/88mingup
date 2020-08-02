from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from rest_framework.viewsets import ModelViewSet

from .models import Article, MediaContent
from .serializers import ArticleSerializer, MediaContentSerializer


class ArticleViewSet(ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class MediaContentViewSet(ModelViewSet):
    queryset = MediaContent.objects.all()
    serializer_class = MediaContentSerializer


article_list = ArticleViewSet.as_view({"get": "list", "post": "create",})

article_detail = ArticleViewSet.as_view({"get": "retrieve", "delete": "destroy"})

media_content_list = MediaContentViewSet.as_view({"get": "list", "post": "create"})
