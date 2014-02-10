from django.forms import widgets
from rest_framework import serializers
from snippets.models import Snippet, CompanyName, Tab_Details, DropDown_Details


class SnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Snippet
        fields = ('MissionID','Card_Number','Profile','Life_Cycle','End_Activity','End_InActivity','Balance')

class  PersonalInfoSerializer(serializers.ModelSerializer):
	class Meta:
		model = Snippet
		fields = ('First_Name','Last_Name','MissionID')

class AccountInfoSerializer(serializers.ModelSerializer):
	class Meta:
		model = Snippet
		fields = ('MissionID','Card_Number','Profile','Life_Cycle','End_Activity','End_InActivity','Balance','Last_Credit_update','Last_Free_Date','Last_Reload_Date','Last_Reload_amount')

class FullInfoSerializer(serializers.ModelSerializer):
	class Meta:
		model = Snippet
		fields = ('MissionID','Card_Number','Profile','Life_Cycle','End_Activity','End_InActivity','Balance','First_Name','Last_Name' ,'Last_Credit_update','Last_Free_Date','Last_Reload_Date','Last_Reload_amount','Rating_plan') 


### Header service start from here  :D :D ###


class TabSerializer(serializers.ModelSerializer):
	class Meta:
		model = Tab_Details
		fields = ('Tab_Name','Tab_Link','Class',)

class DropDownSerializer(serializers.ModelSerializer):
	class Meta:
		model = DropDown_Details
		fields = ('Tab_Name','Tab_Link',)

class CompanyNameSerializer(serializers.ModelSerializer):
	class Meta : 
		model = CompanyName
		fields = ('Company_Name',)

class HeaderSerializer(serializers.ModelSerializer):
	Tab_Details = TabSerializer(many=True)
	DropDown_Details = DropDownSerializer(many=True)

	class Meta :
		model = CompanyName
		fields = ('Company_Name','Tab_Details','DropDown_Details')


