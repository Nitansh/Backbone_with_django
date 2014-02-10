from django.db import models




class Snippet(models.Model):
	Created = models.DateTimeField(auto_now_add=True)
	MissionID      = models.IntegerField()
	Card_Number    = models.TextField()
	Profile        = models.TextField()
	Life_Cycle     = models.TextField()
	End_Activity   = models.TextField()
	End_InActivity = models.TextField()
	Balance        = models.IntegerField()
	Rating_plan    = models.TextField()
	First_Name     = models.TextField()
	Last_Name      = models.TextField()
	Last_Credit_update = models.TextField()
	Last_Free_Date   = models.TextField()
	Last_Reload_Date = models.TextField()
	Last_Reload_amount = models.IntegerField(default = 0)

	class Meta:
		ordering = ('Created',)

class CompanyName(models.Model) : 
	Created = models.DateTimeField(auto_now_add=True)
	Company_Name = models.TextField(max_length=50)

class Tab_Details(models.Model) : 
	Company = models.ForeignKey(CompanyName, related_name='Tab_Details')
	Tab_Name = models.TextField(max_length=50)
	Tab_Link  = models.TextField(max_length=50)
	Class     = models.TextField(max_length=10)

class DropDown_Details(models.Model):
	Company = models.ForeignKey(CompanyName, related_name='DropDown_Details')
	Tab_Name = models.TextField(max_length=50)
	Tab_Link  = models.TextField(max_length=50)
