from .models import EmailUser


class EmailOrPhoneModelBackend:
    def authenticate(self, username=None, password=None):
        if '@' in username:
            kwargs = {'email__iexact': username}
        else:
            kwargs = {'phone': username}
        try:
            user = EmailUser.objects.get(**kwargs)
            if user.check_password(password):
                return user
        except EmailUser.DoesNotExist:
            return None

    def get_user(self, user_id):
        try:
            return EmailUser.objects.get(pk=user_id)
        except EmailUser.DoesNotExist:
            return None
