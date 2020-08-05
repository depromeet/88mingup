from django.contrib.auth import authenticate, login
from rest_framework import response
from rest_framework.views import APIView
from user.serializers import UserSerializer

# Create your views here.


class LoginView(APIView):
    def post(self, request):
        user = authenticate(request)
        login(request, user)
        serializer = UserSerializer(data=user)
        try:
            serializer.is_valid(raise_exception=True)
        except AssertionError:
            return response.Response(serializer.errors, status=400)
        return response.Response(serializer.data)
