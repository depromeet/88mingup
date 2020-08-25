from rest_framework import serializers
from user.models import User
from article.serializers import CommentSerializer
from article.serializers import ArticleSerializer

from back.article.serializers import ArticleLikeSerializer


class UserSerializer(serializers.ModelSerializer):
    article_set = ArticleSerializer(many=True)
    comment_set = CommentSerializer(many=True)

    class Meta:
        model = User
        fields = ["name", "profile_url", "created_at", "updated_at", "comment_set", "article_set"]
