from django.http import JsonResponse
from .models import Product
from .models import Category
from .serializers import CategorySerializer, ProductSerializer

# Create your views here.
def products(request):
    if request.method == "GET":
        products = list(Product.objects.all().values())
        serializer = ProductSerializer(products, many=True)
        return JsonResponse({'products': serializer.data})
    
def productDetails(request, id):
    if request.method == "GET":
        try:
            product = Product.objects.get(pk=id)
            serializer = ProductSerializer(product)
            return JsonResponse(serializer.data)
        except Product.DoesNotExist as err:
            return JsonResponse({
                'error': str(err)
            })
        
def categories(request):
    if request.method == "GET":
        categories = list(Category.objects.all().values())
        serializer = CategorySerializer(categories, many=True)
        return JsonResponse({'categories': serializer.data})
    
def categoryDetail(request, id):
    if request.method == "GET":
        try:
            product = Category.objects.get(pk=id)
            serializer = CategorySerializer(product)
            return JsonResponse(serializer.data)
        except Product.DoesNotExist as err:
            return JsonResponse({
                'error': str(err)
            })
        
def productsFromCategory(request, id):
    if request.method == "GET":
        try:
            products = list(Product.objects.filter(category_id=id).values())
            serializer = ProductSerializer(products, many=True)
            return JsonResponse({'products': serializer.data})
        except Product.DoesNotExist as err:
            return JsonResponse({
                'error': str(err)
            })
        