import uuid

from commons.models import BaseModel
from django.contrib.auth.models import AbstractBaseUser
from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.


class User(BaseModel, AbstractBaseUser):

    kakao_id = models.IntegerField()
    name = models.CharField(max_length=128)
    password = models.CharField(max_length=128, blank=True, null=True)
    profile_url = models.URLField(null=True, blank=True)

    USERNAME_FIELD = "id"

    def get_username(self) -> str:
        return self.name
