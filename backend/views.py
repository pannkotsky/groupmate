import json

from django.contrib.auth.decorators import login_required
from django.conf import settings
from django.core.urlresolvers import reverse
from django.shortcuts import render, redirect


def index(request):
    if request.user.is_authenticated():
        return redirect(reverse("app"))
    template = 'backend/landing.html'
    return render(request, template)


@login_required
def app(request):
    if not request.user.is_authenticated():
        return redirect(settings.LOGIN_REDIRECT_URL)
    context = {
        'permissions': json.dumps(list(request.user.get_all_permissions()))
    }
    template = 'backend/app.html'
    return render(request, template, context)
