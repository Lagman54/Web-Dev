from django.contrib import admin
from . import models


class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name',)


class VacancyAdmin(admin.ModelAdmin):
    list_display = ('name',)


admin.site.register(models.Company, CompanyAdmin)
admin.site.register(models.Vacancy, VacancyAdmin)
