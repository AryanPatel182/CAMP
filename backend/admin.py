from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from .forms import CustomUserChangeForm, CustomUserCreationForm
from .models import CustomUser, Work


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ['email']
admin.site.register(CustomUser, CustomUserAdmin)

class WorkAdmin(admin.ModelAdmin):
    model = Work
    list_display = ['employee', 'startTime', 'endTime']
admin.site.register(Work, WorkAdmin)
