from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from .models import Article, MediaContent


class MediaContentSerializer(ModelSerializer):
    class Meta:
        model = MediaContent
        fields = [
            "id",
            "file",
        ]


class ArticleSerializer(ModelSerializer):
    media_contents = MediaContentSerializer(many=True, read_only=True)

    class Meta:
        model = Article
        fields = [
            "title",
            "description",
            "lat",
            "lng",
            "writer",
            "media_contents",
        ]


class ArticleCreateSerializer(ModelSerializer):

    file_ids = serializers.ListField(child=serializers.IntegerField())

    class Meta:
        model = Article
        fields = ["title", "description", "lat", "lng", "file_ids"]

    def create(self, validated_data):
        ids = validated_data.pop("file_ids")
        instance = super().create(validated_data)

        contents = MediaContent.objects.filter(id__in=ids)
        instance.media_contents.add(*contents)

        return instance
