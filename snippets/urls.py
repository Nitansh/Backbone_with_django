from django.conf.urls import patterns, url
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = patterns('snippets.views',
    url(r'^profile_info/$', 'snippet_list'),
    url(r'^profile_info/(?P<pk>[0-9]+)$', 'snippet_detail'),
    url(r'^personal_info/$', 'personal_info_list'),
    url(r'^personal_info/(?P<pk>[0-9]+)$', 'personal_detail'),
    url(r'^account_info/$', 'account_info_list'),
    url(r'^account_info/(?P<pk>[0-9]+)$', 'account_detail'),
    url(r'^full_api/$', 'full_list'),
    url(r'^header_api/$', 'header_list'),
    url(r'^company_api/$', 'company_list'),
    url(r'^tab_api/$', 'tab_list'),
    url(r'^dropdown_api/$', 'dropdown_list'),
    url(r'^full_api/(?P<pk>[0-9]+)$', 'Full_detail'),
 	url(r'^my_code/$', 'render_index'),
)

urlpatterns = format_suffix_patterns(urlpatterns)