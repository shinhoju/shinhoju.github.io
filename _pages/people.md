---
layout: page
permalink: /people/
title: people
description: 
nav: true
nav_order: 4
display_categories: [professor, students]
horizontal: true
---

{% for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>

  {% assign categorized = site.people | where: "category", category | sort: "importance" %}

  <div class="people-list">
    {% for project in categorized %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
  </div>
{% endfor %}