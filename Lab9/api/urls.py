from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.companies),
    path('companies/<int:id>', views.companyDetails),
    path('companies/<int:id>/vacancies', views.vacanciesOfCompany),
    path('vacancies', views.vacancies),
    path('vacancies/<int:id>', views.vacancyDetails),
    path('vacancies/top_ten', views.topTenVacancies)
]
