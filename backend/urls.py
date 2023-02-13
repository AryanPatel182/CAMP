from django.urls import path
from backend import views

urlpatterns = [
    path("student/", views.StudentList.as_view())
]
