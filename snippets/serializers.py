from django.forms import widgets
from rest_framework import serializers
from snippets.models import Snippet


class SnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Snippet
        fields = ('MissionID','Card_Number','Profile','Life_Cycle','End_Activity','End_InActivity','Balance')

class  PersonalInfoSerializer(serializers.ModelSerializer):
	class Meta:
		model = Snippet
		fields = ('First_name','Last_Name','MissionID')

class AccountInfoSerializer(serializers.ModelSerializer):
	class Meta:
		model = Snippet
		fields = ('MissionID','Card_Number','Profile','Life_Cycle','End_Activity','End_InActivity','Balance','Last_Credit_update','Last_Free_Date','Last_Reload_Date','Last_Reload_amount')
