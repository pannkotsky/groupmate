from .common import *
import dj_database_url

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = dotenv.get('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# Update database configuration with $DATABASE_URL.
db_from_env = dj_database_url.config(conn_max_age=500)
DATABASES['default'].update(db_from_env)

STATICFILES_DIRS += [
    os.path.join(PROJECT_ROOT, 'frontend', 'dist'),
    os.path.join(PROJECT_ROOT, 'WebpageZPI-73', 'dist'),
    os.path.join(PROJECT_ROOT, 'WebpageZPI-73', 'src', 'components')
]

ALLOWED_HOSTS = [
    '0.0.0.0',
    'groupmate.herokuapp.com'
]
