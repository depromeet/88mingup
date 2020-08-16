from django import template
from django.urls import NoReverseMatch, reverse
from django.utils.html import escape, format_html, smart_urlquote
from django.utils.safestring import SafeData, mark_safe

register = template.Library()


@register.simple_tag
def optional_logout(request, user):
    """
    Include a logout snippet if REST framework's logout view is in the URLconf.
    """
    try:
        logout_url = reverse("logout")
    except NoReverseMatch:
        snippet = format_html('<li class="navbar-text">{user}</li>', user=escape(user))
        return mark_safe(snippet)

    snippet = """<li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            {user}
            <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
            <li><a href='{href}?next={next}'>Log out</a></li>
        </ul>
    </li>"""
    snippet = format_html(
        snippet, user=escape(user), href=logout_url, next=escape(request.path)
    )

    return mark_safe(snippet)


@register.simple_tag
def optional_login(request):
    """
    Include a login snippet if REST framework's login view is in the URLconf.
    """
    try:
        login_url = reverse("login")
    except NoReverseMatch:
        return ""

    # snippet = "<li><a href='{href}?next={next}'>Log in</a></li>"
    snippet = """<li><a id="custom-login-btn" href="javascript:loginWithKakao()">
  <img
    src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
    width="222"
  />
</a></li>"""
    snippet = format_html(snippet, href=login_url, next=escape(request.path))

    return mark_safe(snippet)
