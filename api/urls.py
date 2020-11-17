from django.urls import path
from . import views

urlpatterns = [
	path('api/board/update_list_title', views.update_list_title, name='update_list_title'),
	path('api/board/create_list', views.create_list, name='create_list'),
	path('api/board/delete_list', views.delete_list, name='delete_list'),
	path('api/board/create_sticker', views.create_sticker, name='create_sticker'),
	path('api/board/update_sticker_text', views.update_sticker_text, name='update_sticker_text'),
	path('api/board/delete_sticker', views.delete_sticker, name='delete_sticker'),
]