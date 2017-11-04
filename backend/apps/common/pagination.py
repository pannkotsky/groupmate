from collections import OrderedDict

from rest_framework.pagination import CursorPagination
from rest_framework.response import Response


class CustomCursorPagination(CursorPagination):
    """Custom CursorPagination which includes total count."""

    def paginate_queryset(self, queryset, request, view=None):
        self.count = queryset.count()
        return super(CustomCursorPagination, self).paginate_queryset(queryset, request, view)

    def get_paginated_response(self, data):
        return Response(OrderedDict([
            ('count', self.count),
            ('next', self.get_next_link()),
            ('previous', self.get_previous_link()),
            ('results', data)
        ]))
