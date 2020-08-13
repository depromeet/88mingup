from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from .models import Article, MediaContent, ArticleLike, Comment


class MediaContentSerializer(ModelSerializer):
    class Meta:
        model = MediaContent
        fields = [
            "id",
            "file",
        ]

class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = [
            "id",
            "article",
            "commenter",
            "content",
        ]

class ArticleSerializer(ModelSerializer):
    media_contents = MediaContentSerializer(many=True, read_only=True)
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Article
        fields = [
            "id",
            "title",
            "description",
            "lat",
            "lng",
            "writer",
            "media_contents",
            "comments",
        ]


class ArticleCreateSerializer(ModelSerializer):

    file_ids = serializers.ListField(child=serializers.IntegerField(), write_only=True)
    writer = serializers.HiddenField(default=serializers.CurrentUserDefault())
    media_contents = MediaContentSerializer(many=True, read_only=True)

    class Meta:
        model = Article
        fields = [
            "id",
            "title",
            "description",
            "lat",
            "lng",
            "file_ids",
            "writer",
            "media_contents",
        ]

    def create(self, validated_data):
        ids = validated_data.pop("file_ids")
        instance = super().create(validated_data)

        contents = MediaContent.objects.filter(id__in=ids)
        instance.media_contents.add(*contents)

        return instance


class ArticleLikeSerializer(ModelSerializer):
    class Meta:
        model = ArticleLike
        fields = [
            "id",
            "article",
            "liker",
        ]


