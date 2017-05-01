---
layout: page
title: List of Materials
---
{% capture tags %}{% for item in site.texts %}{% for t in item.tags%}{{ t }}{% unless forloop.last %}^{% endunless %}{% endfor %}{% unless forloop.last %}^{% endunless %}{% endfor %}
{% endcapture %}{% assign tag_list = tags | strip | strip_newlines| split: "^" | uniq %}{% for uniq_t in tag_list %}- {{ uniq_t }}
{% endfor %}

{% comment %}
=======================
The purpose of this snippet is to list all your posts posted with a certain tag.
=======================
{% endcomment %}
{% for tag in tags %}
    <h2 id="{{ tag | slugify }}">{{ tag }}</h2>
    <ul>
     {% for post in site.texts %}
         {% if post.tags contains tag %}
         <li>
         <p>
         <a href="{{ text.url }}">
         {{ texts.title }}
         </a>
         <small>- {{ texts.folio }}</small>
         <br/>
         {% for tag in texts.tags %}
             <a class="tag small" href="#{{ tag | slugify }}">{{ tag }}</a>
         {% endfor %}
         </p>
         </li>
         {% endif %}
     {% endfor %}
    </ul>
{% endfor %}


<!--
replace +++collection+++ with .posts, .pages, or a collection in config
 replace +++tags+++ with the yml list you're interested in (materials?)
 dont reformat (with new lines + etc), because it will impact the format of the compiled yml file
# outputs a single, unique yml list in the format:
# - tag1
# - tag2 
# - tag3
# - ...
-->
