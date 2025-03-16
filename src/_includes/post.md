---
layout: "socials-sidebar.liquid"
---

# {{ title }}

## *by {{ author }}.*

{% if header %}

![{{ header.alt }}]({{ header.src }})

{% endif %}

{{ content }}
