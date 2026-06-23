---
layout: wide
title: work
permalink: /work/
nav: true
nav_order: 2
description: Selected projects in soft robotics, thermal actuation, sensing, and biomechanics ML.
---

<div class="work-hero">
  <video class="work-hero__video" autoplay muted loop playsinline preload="metadata"
    poster="{{ '/assets/img/projects/melegros-thumb.png' | relative_url }}">
    <source src="{{ '/assets/video/hero.mp4' | relative_url }}" type="video/mp4" />
  </video>
  <div class="work-hero__overlay">
    <h1 class="work-hero__title">Work</h1>
    <p class="work-hero__sub">Selected projects in soft robotics, thermal actuation, sensing, and biomechanics.</p>
  </div>
</div>

<div class="work-controls">
  <input id="work-search" class="work-search" type="search" placeholder="Search projects…" autocomplete="off" />
</div>

{% include work_grid.html %}

<script defer src="{{ '/assets/js/work.js' | relative_url }}"></script>
