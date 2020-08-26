import math

from django.contrib.gis.geos import Point
from rest_framework import serializers
from rest_framework.fields import SerializerMethodField
from rest_framework.serializers import ModelSerializer

from .models import Article, ArticleLike, Comment, MediaContent


class MediaContentSerializer(ModelSerializer):
    class Meta:
        model = MediaContent
        fields = [
            "id",
            "file",
        ]


class ArticleCommentSerializer(ModelSerializer):
    commenter = serializers.SlugRelatedField(read_only=True, slug_field="name")
    commenter_profile = serializers.SerializerMethodField()

    def get_commenter_profile(self, obj):
        return obj.commenter.profile_url

    class Meta:
        model = Comment
        fields = [
            "id",
            "article",
            "commenter",
            "content",
            "commenter_profile",
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


class CommentCreateSerializer(ModelSerializer):

    commenter = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Comment
        fields = ["id", "article", "commenter", "content"]


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
    comments = ArticleCommentSerializer(many=True, read_only=True)
    article_likes = ArticleLikeSerializer(many=True, read_only=True)

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
            "article_likes",
            "comments",
            "created_at",
            "address",
            "like_users",
        ]


class ArticleSerializer(ModelSerializer):
    media_contents = MediaContentSerializer(many=True, read_only=True)
    distance = SerializerMethodField()

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
            "distance",
        ]

    def get_distance(self, obj: Article):

        if hasattr(obj, "distance"):
            return obj.distance.m
        return None


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
            "location",
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

class ArticleLikeCountSerializer(ModelSerializer):
    like_count=serializers.SerializerMethodField()

    def get_like_count(self, obj):
        return obj.liker.count()

    class Meta:
        model = ArticleLike
        fields = [
            "id",
            "article",
            "liker",
            "like_count",
        ]

class ArticleWithCountSerializer(ModelSerializer):
    media_contents = MediaContentSerializer(many=True, read_only=True)
    comment_count = serializers.SerializerMethodField()
    like_count = serializers.SerializerMethodField()
    writer = serializers.SlugRelatedField(
        read_only = True,
        slug_field = "name"
     )

    def get_comment_count(self, obj):
        return obj.comments.count()

    def get_like_count(self, obj):
        return obj.like_users.count()

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
            "like_count",
            "comment_count",
            "created_at",
            "address",
        ]
