from django import forms

class StarsForm(forms.Form):
    stars = forms.IntegerField(widget = forms.NumberInput(),label = "Stars")
