from django.conf.urls import url, include
from django.contrib.auth.views import login, logout_then_login
from django.contrib import admin

from users.change_password_view import change_password
from users.urls import router as users_router
from forum.urls import router as forum_router

from .router import DefaultRouter
from .views import app, index


router = DefaultRouter()
router.extend(users_router)
router.extend(forum_router)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(router.urls, namespace='api')),
    url(r'^app/', app, name='app'),
    url('^auth/login/$', login, name='login'),
    url('^auth/logout/$', logout_then_login, name='logout'),
    url('^auth/change_password/', change_password, name='change_password'),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url('^$', index, name='index'),
]
