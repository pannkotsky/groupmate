from .common import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = dotenv.get('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'USER': dotenv.get('DB_USER'),
        'NAME': dotenv.get('DB_NAME'),
        'PASSWORD': dotenv.get('DB_PASSWORD'),
        'HOST': dotenv.get('DB_HOST'),
        'PORT': dotenv.get('DB_PORT'),
    }
}

INTERNAL_IPS = ['192.168.56.1']

INSTALLED_APPS += (
    'autofixture',
)

STATICFILES_DIRS.append(
    os.path.join(BASE_DIR, os.pardir, 'frontend', 'build'),
)
