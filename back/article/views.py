from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from rest_framework.viewsets import ModelViewSet
from .models import Article, MediaContent
from .serializers import ArticleSerializer, MediaContentSerializer
from haversine import haversine
from django_filters import rest_framework as filters
from django_filters.rest_framework import DjangoFilterBackend
from .filters import ArticleFilter
from rest_framework.filters import OrderingFilter


class ArticleViewSet(ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    filter_backends = (DjangoFilterBackend,OrderingFilter,)
    filterset_class=ArticleFilter
    ordering_fields=['lat','popularity','lng']

    # def get_queryset(self):
    #     print("test",self.request.query_params.get("user_lat",""))
    #     print("ttttest", self.request.query_params.get("user_lng",""))
    #     return self.queryset\
    #         .filter(lat=self.request.query_params.get('user_lat'))\
    #         .filter(lng=self.request.query_params.get('user_lng'))
        # qs=super().get_queryset()
        # user_lat = self.request.query_params.get("user_lat","")
        # user_lng = self.request.query_params.get("user_lng", "")
        # near_article=[]
        #
        # if(user_lat and user_lng):
        #     user_position = (37.5, 126.6)
        #     for i in range(len(qs)) :
        #         article_position=(qs[i].lat,qs[i].lng)
        #         if(haversine(user_position,article_position) < 20) :
        #             near_article.append(qs[i])
        #
        # return near_article


class MediaContentViewSet(ModelViewSet):
    queryset = MediaContent.objects.all()
    serializer_class = MediaContentSerializer
