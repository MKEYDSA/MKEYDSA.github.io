---
layout: "socials-sidebar.liquid"
---

<link rel="stylesheet" href="/static/style/post.css">

<h1 id="title">{{ title }}</h1>

<h2 id="author"><em>by {{ author }}.</em></h2>

{% if date %}

<span class="date">{{ date | date: '%B %d, %Y' }} {% if updated %}(Updated {{ updated | date: '%B %d, %Y' }}){% endif %}</span>

{% endif %}

{% if header %}

<img id="header" src="{{ header.src }}" alt="{{ header.alt }}">

{% endif %}

{{ content }}
