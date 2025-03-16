---
layout: "socials-sidebar.liquid"
---

<link rel="stylesheet" href="/static/style/post.css">

# {{ title }}

## *by {{ author }}.*

{% if date %}

{{ date | date: '%B %d, %Y' }} {% if updated %}(Updated {{ updated | date: '%B %d, %Y' }}){% endif %}

{% endif %}

{% if header %}

<img id="header" src="{{ header.src }}" alt="{{ header.alt }}">

{% endif %}

{{ content }}
