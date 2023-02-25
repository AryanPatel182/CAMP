from django.urls import path, include
from backend import views

urlpatterns = [
    path('auth/', include('rest_auth.urls')),
    path('auth/register/', include('rest_auth.registration.urls')),    
]
