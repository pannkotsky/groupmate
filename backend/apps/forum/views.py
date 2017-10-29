from rest_framework import viewsets

from .models import Topic, Post
from .serializers import TopicSerializer, PostSerializer


class TopicViewSet(viewsets.ModelViewSet):
    serializer_class = TopicSerializer
    queryset = Topic.objects.order_by('-created')
    filter_fields = ('author',)


class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.order_by('-created')
    filter_fields = ('author', 'topic')
