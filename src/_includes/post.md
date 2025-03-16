---
layout: "socials-sidebar.liquid"
---

# {{ title }}

## *by {{ author }}.* - {% if date %}{{ date | date: '%B %d, %Y' }} {% if updated %}(Updated {{ updated | date: '%B %d, %Y' }}){% endif %}{% endif %}

{% if header %}

![{{ header.alt }}]({{ header.src }})

{% endif %}

{{ content }}
