import uuid

from commons.models import BaseModel
from django.contrib.auth.models import AbstractBaseUser
from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.


class User(BaseModel, AbstractBaseUser):

    identification = models.UUIDField(default=uuid.uuid4, editable=False)
    password = models.CharField(_("password"), max_length=128, blank=True, null=True)

    def get_username(self) -> str:
        return str(self.identification)
