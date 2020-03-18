from django.urls import path

from main.views import UserListView, RateView

urlpatterns = [
    path('rate', RateView.as_view(), name='rate'),
    path('', UserListView.as_view(), name='index'),
]
