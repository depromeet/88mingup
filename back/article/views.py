from django.http import HttpResponse
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.filters import OrderingFilter
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.viewsets import ModelViewSet

from .filters import ArticleFilter
from .models import Article, ArticleLike, Comment, MediaContent
from .serializers import (
    ArticleCreateSerializer,
    ArticleLikeSerializer,
    ArticleSerializer,
    ArticleWithCommentSerializer,
    CommentSerializer,
    MediaContentSerializer,
)


class ArticleViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    filter_backends = (
        DjangoFilterBackend,
        OrderingFilter,
    )
    filterset_class = ArticleFilter
    ordering_fields = ["distance"]

    def get_serializer_class(self):
        if self.action == "create":
            return ArticleCreateSerializer
        if self.action == "retrieve":
            return ArticleWithCommentSerializer
        return ArticleSerializer

    def get_permissions(self):
        permission_classes = [AllowAny]
        if self.action == "create":
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]


class MediaContentViewSet(viewsets.ModelViewSet):
    queryset = MediaContent.objects.all()
    serializer_class = MediaContentSerializer


class ArticleLikeViewSet(viewsets.ModelViewSet):
    queryset = ArticleLike.objects.all()
    serializer_class = ArticleLikeSerializer

    def create(self,request):
        article_id = request.POST['article']
        user = request.POST['liker']
        article = get_object_or_404(Article, pk=article_id)

        if article.like_users.filter(id=user):
            article.like_users.remove(user)
        else:
            article.like_users.add(user)

        return HttpResponse(status=200)


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
