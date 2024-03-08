# api/urls.py
from django.contrib import admin
from django.urls import path
from ecommerce import views  # Import your app's views here

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),  # Direct the base URL to the home view
]
