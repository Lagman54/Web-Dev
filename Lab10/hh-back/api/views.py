from django.http import JsonResponse
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics


@api_view(['GET'])
def companies(request):
    serializer = CompanySerializer(list(Company.objects.all()), many=True)
    return JsonResponse(serializer.data, safe=False)


@api_view(['GET'])
def companyDetails(request, id):
    try:
        serializer = CompanySerializer(Company.objects.get(pk=id))
        return JsonResponse(serializer.data)
    except Company.DoesNotExist as err:
        return JsonResponse({'error': str(err)})


class vacanciesOfCompany(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        companyId = self.kwargs['id']
        return Vacancy.objects.filter(company__pk=companyId)


class vacancyList(generics.ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


class vacancyDetails(generics.RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    lookup_field = "id"


class topTenVacancies(generics.ListAPIView):
    queryset = Vacancy.objects.all().order_by('-salary')[:10]
    serializer_class = VacancySerializer