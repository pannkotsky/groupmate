from django.db import models
from django.utils.translation import ugettext_lazy as _

from .validators import PhoneValidator


class PhoneField(models.CharField):
    description = _("Phone number")
    default_validators = [PhoneValidator()]

    def __init__(self, *args, **kwargs):
        kwargs['max_length'] = 15
        super(PhoneField, self).__init__(*args, **kwargs)
