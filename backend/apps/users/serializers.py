from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id', 'first_name', 'last_name', 'email', 'phone', 'last_login',
            'is_active', 'date_joined', 'last_updated', 'get_full_name'
        )
