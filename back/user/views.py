from django.contrib.auth import authenticate, login
from django.views.generic.base import TemplateResponseMixin
from rest_framework import response
from rest_framework.exceptions import ValidationError
from rest_framework.renderers import TemplateHTMLRenderer
from rest_framework.views import APIView
from user.serializers import UserSerializer

# Create your views here.


class LoginView(APIView):
    def post(self, request):
        user = authenticate(request)
        if user and user.is_active:
            login(request, user)
            return response.Response(status=200)
        return response.Response(status=400)
