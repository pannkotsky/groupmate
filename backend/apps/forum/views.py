from rest_framework import viewsets

from .models import Topic, Post
from .serializers import TopicSerializer, TopicDetailSerializer, PostSerializer


class TopicViewSet(viewsets.ModelViewSet):
    serializers = {
        'retrieve': TopicDetailSerializer,
        'default': TopicSerializer
    }
    queryset = Topic.objects.order_by('-created')
    filter_fields = ('author',)

    def get_serializer_class(self):
        return self.serializers.get(self.action, self.serializers['default'])


class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.order_by('-created')
    filter_fields = ('author', 'topic')
