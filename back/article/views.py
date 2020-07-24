from django.shortcuts import render
from .models import Article
from .serializers import ArticleSerializer
from rest_framework.viewsets import ModelViewSet


class ArticleViewSet(ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


article_list = ArticleViewSet.as_view({
    'get': 'list',
    'post': 'create',
})

article_detail = ArticleViewSet.as_view({
    'get': 'retrieve',
    'delete': 'destroy'
})
