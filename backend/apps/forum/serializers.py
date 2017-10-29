from rest_framework import serializers

from .models import Topic, Post


class PostSerializer(serializers.ModelSerializer):
    created = serializers.DateTimeField(read_only=True, allow_null=True)
    modified = serializers.DateTimeField(read_only=True, allow_null=True)

    class Meta:
        model = Post
        fields = ('id', 'text', 'topic', 'author', 'created', 'modified')


class TopicSerializer(serializers.ModelSerializer):
    posts = PostSerializer(read_only=True, many=True)
    created = serializers.DateTimeField(read_only=True, allow_null=True)
    modified = serializers.DateTimeField(read_only=True, allow_null=True)

    class Meta:
        model = Topic
        fields = ('id', 'name', 'author', 'posts', 'created', 'modified')
