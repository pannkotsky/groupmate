from rest_framework import serializers

from .models import Topic, Post
from users.serializers import UserSerializer


class PostSerializer(serializers.ModelSerializer):
    author_info = UserSerializer(read_only=True, source='author')
    created = serializers.DateTimeField(read_only=True, allow_null=True)
    modified = serializers.DateTimeField(read_only=True, allow_null=True)

    class Meta:
        model = Post
        fields = ('id', 'text', 'topic', 'author', 'author_info', 'created', 'modified')


class TopicSerializer(serializers.ModelSerializer):
    latest_post = PostSerializer(read_only=True)
    posts_count = serializers.IntegerField(read_only=True)
    created = serializers.DateTimeField(read_only=True, allow_null=True)
    modified = serializers.DateTimeField(read_only=True, allow_null=True)

    class Meta:
        model = Topic
        fields = ('id', 'name', 'author', 'created', 'modified', 'latest_post', 'posts_count')
