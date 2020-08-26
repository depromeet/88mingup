from os import path
from uuid import uuid1

from commons.models import BaseModel
from django.conf import settings
# from django.db import models
from django.contrib.gis.db import models
from django.contrib.gis.geos import Point
from user.models import User


class Article(BaseModel):
    title = models.CharField(max_length=20)
    description = models.TextField()
    lat = models.FloatField()
    lng = models.FloatField()
    location = models.PointField(geography=True, null=True, srid=4326)
    writer = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    media_contents = models.ManyToManyField("MediaContent")
    address = models.TextField()
    like_users = models.ManyToManyField(
        User, through="ArticleLike", related_name="like_users",
    )

    def save(self, *args, **kwargs):
        self.location = Point(self.lat, self.lng)
        super().save(*args, **kwargs)


def upload_to(instance, filename):
    _, ext = path.splitext(filename)
    return f"upload/{settings.ENVIRONMENT}/{uuid1()}{ext})"


class MediaContent(BaseModel):
    file = models.FileField(null=False, blank=False, upload_to=upload_to)

class ArticleLike(BaseModel):
    article = models.ForeignKey(Article, on_delete=models.DO_NOTHING)
    liker = models.ForeignKey(User, on_delete=models.DO_NOTHING)


class Comment(BaseModel):
    article = models.ForeignKey(
        Article, related_name="comments", on_delete=models.DO_NOTHING
    )
    commenter = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    content = models.CharField(max_length=100)
