from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    id = models.BigAutoField(primary_key=True)


class Task(models.Model):
    task = models.CharField(max_length=200)
    created = models.DateTimeField(auto_now_add=True)
    complete = models.BooleanField(default=False)
    user = models.ForeignKey(User, related_name="task", on_delete=models.CASCADE)