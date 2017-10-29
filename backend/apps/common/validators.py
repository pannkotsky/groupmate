from django.core.validators import RegexValidator
from django.utils.translation import ugettext_lazy as _


class PhoneValidator(RegexValidator):
    regex = r'^[-0-9+()\s]*$'
    message = _('Enter a valid phone number')
