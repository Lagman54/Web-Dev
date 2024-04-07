from django.shortcuts import render
from django.http import JsonResponse
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer


# Create your views here.
def companies(request):
    if request.method == "GET":
        serializer = CompanySerializer(list(Company.objects.all()), many=True)
        return JsonResponse({'companies': serializer.data})


def companyDetails(request, id):
    if request.method == "GET":
        try:
            serializer = CompanySerializer(Company.objects.get(pk=id))
            return JsonResponse(serializer.data)
        except Company.DoesNotExist as err:
            return JsonResponse({'error': str(err)})


def vacanciesOfCompany(request, id):
    if request.method == "GET":
        serializer = VacancySerializer(
            Vacancy.objects.filter(company__pk=id),
            many=True
        )
        return JsonResponse({'vacancies': serializer.data})


def vacancies(request):
    if request.method == "GET":
        serializer = VacancySerializer(list(Vacancy.objects.all()), many=True)
        return JsonResponse({'vacancies': serializer.data})


def vacancyDetails(request, id):
    if request.method == "GET":
        try:
            serializer = VacancySerializer(Vacancy.objects.get(pk=id))
            return JsonResponse(serializer.data)
        except Vacancy.DoesNotExist as err:
            return JsonResponse({'error': str(err)})


def topTenVacancies(request):
    if request.method == "GET":
        serializer = VacancySerializer(
            Vacancy.objects.all().order_by('-salary')[:10],
            many=True
        )
        return JsonResponse({'vacancies': serializer.data})