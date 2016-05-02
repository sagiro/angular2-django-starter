from django.conf.urls import url
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='index.html'), name="home"),
] + static('/', document_root='dist')
