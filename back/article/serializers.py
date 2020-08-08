from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from .models import Article, MediaContent


class MediaContentSerializer(ModelSerializer):
    class Meta:
        model = MediaContent
        fields = [
            "file",
        ]


class ArticleSerializer(ModelSerializer):
    media_content_set = MediaContentSerializer(many=True, read_only=True)

    class Meta:
        model = Article
        fields = [
            "title",
            "description",
            "lat",
            "lng",
            "writer",
            "media_content_set",
            "popularity",
        ]
