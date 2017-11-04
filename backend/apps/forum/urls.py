from rest_framework.routers import SimpleRouter

from .views import TopicViewSet, PostViewSet, TeacherPostViewSet

router = SimpleRouter()
router.register(r'^topics', TopicViewSet)
router.register(r'^posts', PostViewSet)
router.register(r'^teacherposts', TeacherPostViewSet)
