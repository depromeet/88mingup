from rest_framework import serializers
from user.models import User
from article.serializers import CommentSerializer
from article.serializers import ArticleSerializer
from article.serializers import ArticleLikeSerializer
from article.serializers import ArticleLikeCountSerializer

class UserSerializer(serializers.ModelSerializer):
    article_count = serializers.SerializerMethodField()
    comment_count = serializers.SerializerMethodField()
    like_count = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            "name",
            "profile_url",
            "created_at",
            "updated_at",
            "comment_count",
            "article_count",
            "like_count"
        ]

    def get_article_count(self, obj):
        return obj.article_set.count()

    def get_comment_count(self, obj):
        return obj.comment_set.count()

    def get_like_count(self, obj):
        count=0
        all_articles = obj.article_set.all()
        for article in all_articles :
            count+= article.like_users.count()
        return count


