from rest_framework.routers import SimpleRouter

from .views import TopicViewSet, PostViewSet

router = SimpleRouter()
router.register(r'^topics', TopicViewSet)
router.register(r'^posts', PostViewSet)
