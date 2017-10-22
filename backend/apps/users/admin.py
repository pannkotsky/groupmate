from django.contrib import admin

from .models import EmailUser


@admin.register(EmailUser)
class EmailUserAdmin(admin.ModelAdmin):
    fields = ('email', 'first_name', 'last_name', 'is_staff', 'is_active',)
    readonly_fields = ('date_joined', 'last_updated',)
    list_display = ('email', 'get_full_name')
