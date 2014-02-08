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