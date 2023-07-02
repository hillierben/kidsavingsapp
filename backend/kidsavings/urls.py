from django.urls import path, include

from . import views

urlpatterns = [
    path("", views.apiOverview, name="apiOverview"),



    # OLD URLS FOR LATER
    # path("parent-users/", views.parentUserList, name="parent-users"),
    # path("register-parent/", views.registerParent, name="register-parent"),
    # path("login/", views.login_view, name="login"),
    # path("logout/", views.logout, name="logout"),
]