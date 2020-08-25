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
    commenter = serializers.SlugRelatedField(
        read_only = True,
        slug_field = "name"
     )

    class Meta:
        model = Comment
        fields = [
            "id",
            "article",
            "commenter",
            "content",
        ]

class ArticleLikeSerializer(ModelSerializer):

    class Meta:
        model = ArticleLike
        fields = [
            "id",
            "article",
            "liker",
        ]

class ArticleWithCommentSerializer(ModelSerializer):
    media_contents = MediaContentSerializer(many=True, read_only=True)
    comments = CommentSerializer(many=True, read_only=True)
    article_likes = ArticleLikeSerializer(many=True, read_only=True)

    class Meta:
        model = Article
        # fields='__all__'
        fields = [
            "id",
            "title",
            "description",
            "lat",
            "lng",
            "writer",
            "media_contents",
            "article_likes",
            "comments",
            "created_at",
            "address",
            "like_users",
        ]



class ArticleSerializer(ModelSerializer):
    media_contents = MediaContentSerializer(many=True, read_only=True)

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
            "created_at",
            "address",
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
            "address",
        ]

    def create(self, validated_data):
        ids = validated_data.pop("file_ids")
        instance = super().create(validated_data)

        contents = MediaContent.objects.filter(id__in=ids)
        instance.media_contents.add(*contents)

        return instance




