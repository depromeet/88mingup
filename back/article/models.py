import uuid
from django.db import models
from user.models import User
from commons.models import BaseModel
from django.contrib.auth.models import AbstractBaseUser
from django.db import models
from django.utils.translation import gettext_lazy as _


class Article(BaseModel):

    identification = models.UUIDField(default=uuid.uuid4, editable=False)
    title = models.CharField(_("Title"), max_length=20, blank=False, null=False)
    content=models.TextField(blank=False, null=False)
    lat=models.FloatField(null=False,blank=False)
    lng= models.FloatField(null=False,blank=False)

    def get_article_title(self) -> str:
        return str(self.title)

    #def get_username(self) -> str:
     #   return str(self.identification)