function loginWithKakao() {
  Kakao.Auth.login({
    success: function (obj) {
      $.post("/api/v1/auth/login", { ...obj }, function (data, status) {
        if (status === "success") {
          location.reload(true);
        } else {
          alert("문제가 발생했습니다 clogic에게 문의하세요");
        }
      });
    },
  });
}
