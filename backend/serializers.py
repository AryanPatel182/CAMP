from rest_framework.serializers import ModelSerializer
from .models import CustomUser, Work


class UserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email', 'last_login', 'date_joined', 'is_staff')

class WorkSerialize(ModelSerializer):
    class Meta:
        model = Work
        fields = ('employee', 'startTime', 'endTime')