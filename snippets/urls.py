from django.conf.urls import patterns, url
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = patterns('snippets.views',
    url(r'^profile_info/$', 'snippet_list'),
    url(r'^profile_info/(?P<pk>[0-9]+)$', 'snippet_detail'),
 	url(r'^my_code/$', 'render_index'),
)

urlpatterns = format_suffix_patterns(urlpatterns)