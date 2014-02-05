from django.db import models




class Snippet(models.Model):
	created = models.DateTimeField(auto_now_add=True)
	First_Name = models.TextField()
	Last_Name = models.TextField()
	Mission=models.IntegerField()

	class Meta:
		ordering = ('created',)