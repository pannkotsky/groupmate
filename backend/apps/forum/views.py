from rest_framework import mixins, permissions, viewsets

from common.pagination import CustomCursorPagination
from .models import Topic, Post, TeacherPost
from .serializers import TopicSerializer, PostSerializer


class TopicViewSet(viewsets.ModelViewSet):
    serializer_class = TopicSerializer
    queryset = Topic.objects.order_by('-created')
    filter_fields = ('author',)


class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.order_by('-created')
    filter_fields = ('author', 'topic')
    pagination_class = CustomCursorPagination


class TeacherPostViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    serializer_class = PostSerializer
    queryset = TeacherPost.objects.all()
    permission_classes = [permissions.AllowAny]
