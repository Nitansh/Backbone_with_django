from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from snippets.models import Snippet, CompanyName, Tab_Details, DropDown_Details
from snippets.serializers import SnippetSerializer, PersonalInfoSerializer, AccountInfoSerializer, FullInfoSerializer, HeaderSerializer, TabSerializer, DropDownSerializer, CompanyNameSerializer
from django.shortcuts import render

@api_view(['GET', 'POST'])
def snippet_list(request):
    """
    List all snippets, or create a new snippet.
    """
    if request.method == 'GET':
        snippets = Snippet.objects.all()
        serializer = SnippetSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = SnippetSerializer(data=request.DATA)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','POST'])
def company_list(request):
    """
    List all snippets, or create a new snippet.
    """
    if request.method == 'GET':
        snippets1 = CompanyName.objects.all()
        serializer = CompanyNameSerializer(snippets1,  many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CompanyNameSerializer(data=request.DATA)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','POST'])
def tab_list(request):
    """
    List all snippets, or create a new snippet.
    """
    if request.method == 'GET':
        snippets2 = Tab_Details.objects.all()
        serializer = TabSerializer(snippets2, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = TabSerializer(data=request.DATA)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','POST'])
def dropdown_list(request):
    """
    List all snippets, or create a new snippet.
    """
    if request.method == 'GET':
        snippets3 = DropDown_Details.objects.all()
        serializer = DropDownSerializer(snippets3,  many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = DropDownSerializer(data=request.DATA)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET','PUT'])
def header_list(request):
    """
    List all snippets, or create a new snippet.
    """
    if request.method == 'GET':
        snippets1 = CompanyName.objects.all()
        snippets2 = Tab_Details.objects.all()
        snippets3 = DropDown_Details.objects.all()
        serializer = HeaderSerializer(snippets1, snippets2, snippets3,  many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = HeaderSerializer(data=request.DATA)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET', 'POST'])
def personal_info_list(request):
    """
    List all snippets, or create a new snippet.
    """
    if request.method == 'GET':
        snippets = Snippet.objects.all()
        serializer = PersonalInfoSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PersonalInfoSerializer(data=request.DATA)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def account_info_list(request):
    """
    List all snippets, or create a new snippet.
    """
    if request.method == 'GET':
        snippets = Snippet.objects.all()
        serializer = AccountInfoSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = AccountInfoSerializer(data=request.DATA)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def full_list(request):
    """
    List all snippets, or create a new snippet.
    """
    if request.method == 'GET':
        snippets = Snippet.objects.all()
        serializer = FullInfoSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = FullInfoSerializer(data=request.DATA)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def snippet_detail(request, pk):
    """
    Retrieve, update or delete a snippet instance.
    """              
    try:
        snippet = Snippet.objects.get(pk=pk)
    except Snippet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = SnippetSerializer(snippet)
        return Response(serializer.data)

@api_view(['GET'])
def personal_detail(request, pk):
    """
    Retrieve, update or delete a snippet instance.
    """              
    try:
        snippet = Snippet.objects.get(pk=pk)
    except Snippet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = PersonalInfoSerializer(snippet)
        return Response(serializer.data)

@api_view(['GET'])
def account_detail(request, pk):
    """
    Retrieve, update or delete a snippet instance.
    """              
    try:
        snippet = Snippet.objects.get(pk=pk)
    except Snippet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = AccountInfoSerializer(snippet)
        return Response(serializer.data)

@api_view(['GET', 'PUT', 'DELETE'])
def Full_detail(request, pk):
    """
    Retrieve, update or delete a snippet instance.
    """              
    try:
        snippet = Snippet.objects.get(pk=pk)
    except Snippet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = FullInfoSerializer(snippet)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = FullInfoSerializer(snippet, data=request.DATA)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



def render_index(request):
   return render(request, 'index.html');