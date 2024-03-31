from django.contrib import admin

from . import models

# Register your models here.

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name',)

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)

admin.site.register(models.Product, ProductAdmin)
admin.site.register(models.Category, CategoryAdmin)