from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path('products/', views.products),
    path('products/<int:id>', views.productDetails),
    path('categories/', views.categories),
    path('categories/<int:id>', views.categoryDetail),
    path('categories/<int:id>/products', views.productsFromCategory)
]
