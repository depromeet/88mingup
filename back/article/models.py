import uuid
from os import path
from uuid import uuid1

from commons.models import BaseModel
from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _
from user.models import User


class Article(BaseModel):
    title = models.CharField(_("Title"), max_length=20, blank=False, null=False)
    description = models.TextField(blank=False, null=False)
    lat = models.FloatField(null=False, blank=False)
    lng = models.FloatField(null=False, blank=False)
    writer = models.ForeignKey(
        User, on_delete=models.DO_NOTHING, null=False, blank=False
    )
    media_contents = models.ManyToManyField("MediaContent")


def upload_to(instance, filename):
    _, ext = path.splitext(filename)
    return f"upload/{settings.ENVIRONMENT}/{uuid1()}{ext})"


class MediaContent(BaseModel):
    file = models.FileField(null=False, blank=False, upload_to=upload_to)
