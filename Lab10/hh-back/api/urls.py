from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.companies),
    path('companies/<int:id>', views.companyDetails),
    path('companies/<int:id>/vacancies', views.vacanciesOfCompany.as_view()),
    path('vacancies', views.vacancyList.as_view()),
    path('vacancies/<int:id>', views.vacancyDetails.as_view()),
    path('vacancies/top_ten', views.topTenVacancies.as_view())
]
