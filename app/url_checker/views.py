from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.http import JsonResponse
import logging
import urllib.request
import os

from django.utils import timezone
from .models import Question

@csrf_exempt
def getall(request):
    finallist = []
    for tdos in Question.objects.all():
        finallist.append([int(tdos.id), tdos.question_text])
    return JsonResponse({'listt': finallist}, safe=False)

@csrf_exempt
def deleteTodo(request):
    iddel = request.body.decode("utf-8")
    if (iddel != ""):
        todel = Question.objects.get(id = iddel)
        todel.delete()
    finallist = []
    for tdos in Question.objects.all():
        finallist.append([int(tdos.id), tdos.question_text])
    return JsonResponse({'listt': finallist}, safe=False)

@csrf_exempt
def makenew(request):
    if (request.body.decode("utf-8") != ""):
        q = Question(question_text=request.body.decode("utf-8"), pub_date=timezone.now())
        q.save()
    finallist = []
    for tdos in Question.objects.all():
        finallist.append([int(tdos.id), tdos.question_text])
    return JsonResponse({'listt': finallist}, safe=False)

class FrontendAppView(View):
    """
    Serves the compiled frontend entry point (only works if you have run `yarn
    run build`).
    """
    def get(self, request):
        print (os.path.join(settings.REACT_APP_DIR, 'build', 'index.html'))
        try:
            with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            logging.exception('Production build of app not found')
            return HttpResponse(
                """
                This URL is only used when you have built the production
                version of the app. Visit http://localhost:3000/ instead, or
                run `yarn run build` to test the production version.
                """,
                status=501,
            )