from django.shortcuts import render
from django.http import HttpRequest, HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics, permissions, renderers

from .serializers import UserSerializer
from .models import User

# Create your views here.

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'user': 'id/username',
    }
    return Response(api_urls)






"""OLD CODE API CALLS KEEP FOR LATER"""

# @api_view(['POST'])
# def registerParent(request):
#     if request.method == 'POST':
#         username = request.data["email"]
#         email = request.data["email"]
#         password = request.data["password"]
#         first_name = request.data["first_name"]
#         last_name = request.data["last_name"]

#         # Attempt to create new user
#         try:
#             user = User.objects.create_user(username=username, email=email, password=password, first_name=first_name, last_name=last_name)
#             user.save()
#         except:
#             pass

#     return Response("Successfully Registered")


# @api_view(['POST'])
# def login_view(request):
#     if request.method == "POST":

#         # Attempt to sign user in
#         email = request.data["email"]
#         password = request.data["password"]
#         user = authenticate(request, username=email, password=password)

#         profile = {
#             "user": email,
#             "navigate": "/portal",
#         }

#         # Check if authentication successful
#         if user is not None:
#             login(request, user)
#             return Response(profile)
#         else:
#             return Response("/login")

# def logout_view(request):
#     logout(request)


# @api_view(['GET'])
# def parentUserList(request):
#     users = User.objects.all()
#     serializer = UserSerializer(users, many=True)
#     return Response(serializer.data)

