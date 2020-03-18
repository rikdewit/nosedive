from django.shortcuts import render, redirect

from django.views.generic import TemplateView, View

from main.models import Profile
from django.contrib.auth.models import User
from main.forms import StarsForm

class UserListView(TemplateView):

    template_name= 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        form = StarsForm()
        users = User.objects.all()
        context['users'] = users
        context['form'] = form
        return context


    def post(self,request, **kwargs):
        form = StarsForm(self.request.POST)
        data = form.data
        print(data)
        if form.is_valid():
            print("form redirect!")
        else:
            print("invalid form")

        rated_user = User.objects.get(username=data['rated_user'])
        given_rating = float(data['stars'])

        print(rated_user)
        current_rating = rated_user.profile.rating
        print(current_rating)
        times_rated = rated_user.profile.times_rated

        my_rating = request.user.profile.rating
        new_rating = current_rating-(my_rating/5)*(current_rating - given_rating)*(1/(times_rated+1))
        rated_user.profile.rating = new_rating
        rated_user.profile.times_rated += 1
        rated_user.save()
        return redirect('/main/')

class RateView(View):
    pass    
#    def post(self, request, **kwargs):
#        form = StarsForm(self.request.POST)

