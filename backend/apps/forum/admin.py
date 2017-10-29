from django.contrib import admin

from .models import Topic, Post


@admin.register(Topic)
class TopicAdmin(admin.ModelAdmin):
    list_display = ('name', 'author', 'created')
    readonly_fields = ('created', 'modified')


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'created')
    readonly_fields = ('created', 'modified')
