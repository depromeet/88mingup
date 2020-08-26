from article.serializers import ArticleSerializer, CommentSerializer
from rest_framework import serializers
from user.models import User


class UserSerializer(serializers.ModelSerializer):
    article_set = ArticleSerializer(many=True)
    comment_set = CommentSerializer(many=True)

    class Meta:
        model = User
        fields = [
            "name",
            "profile_url",
            "created_at",
            "updated_at",
            "comment_set",
            "article_set",
        ]
