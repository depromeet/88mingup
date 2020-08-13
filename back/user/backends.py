import dataclasses
import typing
import uuid

import requests
from commons.constants import Constants
from django.contrib.auth import get_user_model
from rest_framework import authentication


class KakaoAuthentication(authentication.BaseAuthentication):
    def authenticate(self, request, **kwargs):
        UserModel = get_user_model()

        access_token = request.data["response"]["access_token"]
        response = requests.get(
            Constants.KAKAO_API_HOST,
            headers={"Authorization": f"Bearer :{access_token}"},
        ).json()

        user_kakao_id = response["id"]
        app_id = response["app_id"]
        if app_id != Constants.KAKAO_APP_ID:
            raise Exception("인증 문제가 발생했습니다.")

        user, _ = UserModel.objects.get_or_create(kakao_id=user_kakao_id)
        return user

    def get_user(self, user_id):
        try:
            user = get_user_model().objects.get(id=user_id)
        except get_user_model().DoesNotExist:
            user = None
        return user