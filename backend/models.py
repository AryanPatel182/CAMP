from django.contrib.auth.models import AbstractUser
from django.db import models



class CustomUser(AbstractUser):
    # Any extra fields would go here
    def __str__(self):
        return self.email

class Work(models.Model):
    employee = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    startTime = models.CharField(max_length=50)
    endTime = models.CharField(max_length=50)
