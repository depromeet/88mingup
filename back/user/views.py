import requests
from commons.constants import Constants
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect, render
from django.urls import reverse
from django.views.generic.base import TemplateResponseMixin
from rest_framework import generics, response
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
            serializer = UserSerializer(instance=user)
            return response.Response(data=serializer.data, status=200)
        return response.Response(status=400)


class LogoutView(APIView):
    def get(self, request):
        logout(request)
        return redirect(request.query_params.get("next", "/"))


class AuthenticatedCheckAPI(APIView):
    def get(self, request):
        user = request.user
        if not user:
            return response.Response(status=404)

        if user.is_anonymous:
            return response.Response(status=404)

        if not user.is_active:
            return response.Response(status=403)

        serializer = UserSerializer(instance=user)
        return response.Response(data=serializer.data, status=200)
