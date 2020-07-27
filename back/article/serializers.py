from rest_framework import serializers
from .models import Article,Images
from rest_framework.serializers import ModelSerializer

class ImageSerializer(ModelSerializer):
    class Meta:
        model=Images
        fields=[
            'article',
            'image',
        ]
class ArticleSerializer(ModelSerializer):
    images_set=ImageSerializer(many=True,read_only=True)

    class Meta:
        model = Article
        fields=[
            'title',
            'content',
            'lat',
            'lng',
            'writer',
            'images_set',
        ]
