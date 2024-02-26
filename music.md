---
layout: page
title: Music
permalink: /music/
---

<p>I have been writing songs for a few years. More recently it has been mostly what has been described as being acoustic-comedy-punk which is fine with me.</p>

<ul>
  {% for post in site.categories.music %}
    {% if post.url %}
        <li><h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
          <p>{{ post.content }}</p>
        </li>
    {% endif %}
  {% endfor %}
</ul>

[jekyll-organization]: https://github.com/jekyll
