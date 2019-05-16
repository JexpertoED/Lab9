# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.auth import login, authenticate
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password, check_password
from django.http import Http404
from django.shortcuts import render, redirect

# Create your views here.
from models import Article


def archive(request):
    return render(request, 'archive.html', {"posts": Article.objects.all()})


def get_article(request, article_id):
    try:
        post = Article.objects.get(id=article_id)
        return render(request, 'article.html', {"post": post})
    except Article.DoesNotExist:
        raise Http404


def create_post(request):
    if not request.user.is_anonymous():
        if request.method == "POST":
            form = {
                'text': request.POST["text"],
                'title': request.POST["title"]
            }

            art = None
            try:
                art = Article.objects.get(title=form["title"])
            except Article.DoesNotExist:
                pass
            if form["text"] and form["title"] and art is None:
                art = Article.objects.create(text=form["text"],
                                             title=form["title"],
                                             author=request.user)
                return redirect('get_article', article_id=art.id)
            else:
                if art is not None:
                    form['errors'] = u"Название статьи не уникально!"
                else:
                    form['errors'] = u"Не все поля заполнены!"
                return render(request, 'create_post.html', {'form': form})
        else:
            return render(request, 'create_post.html', {})
    else:
        raise Http404


def create_user(request):
    if request.method == "POST":
        userdata = {
            'username': request.POST["username"],
            'email': request.POST["email"],
            'password': request.POST["password"]
        }
        user = None
        try:
            user = User.objects.get(username=userdata["username"])
            user = User.objects.get(email=userdata["email"])
            print (u"This user already exists")
        except User.DoesNotExist:
            print (u"This user doesn't exist")
        if userdata["username"] and userdata["email"] and userdata["password"] and user is None:
            User.objects.create(username=userdata["username"],
                                email=userdata["email"],
                                password=make_password(userdata["password"]))
            return redirect('home')
        else:
            if user is not None:
                userdata['errors'] = u"Логин или почта уже заняты"
            else:
                userdata['errors'] = u"Не все поля заполнены"
            return render(request, 'signup.html', {'userdata': userdata})
    else:
        return render(request, 'signup.html', {})


def user_auth(request):
    if request.method == "POST":
        userdata = {
            'username': request.POST["username"],
            'password': request.POST["password"]
        }
        if userdata["username"] and userdata["password"]:
            user = authenticate(username=userdata["username"], password=userdata["password"])
            if user is None:
                userdata['errors'] = u"Такой пользователь не зарегестрирован!"
                return render(request, 'auth.html', {'userdata': userdata})
            else:
                login(request, user)
                return redirect('home')
        else:
            userdata['errors'] = u"Не все поля заполнены"
            return render(request, 'auth.html', {'userdata': userdata})
    else:
        return render(request, 'auth.html', {})
