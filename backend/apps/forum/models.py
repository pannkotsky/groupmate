from django.db import models

from model_utils.models import TimeStampedModel

from users.models import EmailUser


class Topic(TimeStampedModel):
    name = models.CharField(max_length=100)
    author = models.ForeignKey(
        EmailUser,
        related_name='created_topics',
        null=True,
        on_delete=models.SET_NULL
    )

    def latest_post(self):
        posts = self.posts.order_by('-created')
        if posts:
            return posts[0]
        return None

    def posts_count(self):
        return self.posts.count()

    def __str__(self):
        return self.name


class Post(TimeStampedModel):
    text = models.TextField()
    topic = models.ForeignKey(
        Topic,
        related_name='posts',
        on_delete=models.CASCADE
    )
    author = models.ForeignKey(
        EmailUser,
        related_name='posts',
        null=True,
        on_delete=models.SET_NULL
    )

    def __str__(self):
        text = self.text if len(self.text) < 20 else self.text[:17] + '...'
        return "{} {}: {}".format(
            self.created.strftime('%d.%m.%Y'),
            self.author,
            text
        )


class TeacherPost(Post):
    class Meta:
        proxy = True
