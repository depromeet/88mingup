from django.contrib import admin
from article.models import Article,Images
from user.models import User
# Register your models here.
admin.site.register(Article)
admin.site.register(User)
admin.site.register(Images)
