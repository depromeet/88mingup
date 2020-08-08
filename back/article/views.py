from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from rest_framework.viewsets import ModelViewSet
from .models import Article, MediaContent
from .serializers import ArticleSerializer, MediaContentSerializer
from haversine import haversine

class ArticleViewSet(ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def get_queryset(self):
        qs=super().get_queryset()
        user_lat = self.request.query_params.get("user_lat","")
        user_lng = self.request.query_params.get("user_lng", "")
        user_position = (37.5, 126.6)  # (lat, lon)
        return_qs=[]

        for i in range(len(qs)) :
            article_position=(qs[i].lat,qs[i].lng)
            if(haversine(user_position,article_position) < 20) :
                return_qs.append(qs[i])

        return return_qs


class MediaContentViewSet(ModelViewSet):
    queryset = MediaContent.objects.all()
    serializer_class = MediaContentSerializer
