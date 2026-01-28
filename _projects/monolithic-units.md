---
layout: project
title: "Monolithic Units: Actuation, Sensing, and Simulation for Integrated Soft Robot Design"
permalink: /projects/monolithic-units/
featured: true
order: 1
year: 2026
tags: [soft robotics, monolithic, sensing, simulation, pneumatic, lattice]

# Card media (Work / Home)
thumbnail: /assets/img/projects/MU-thumb.png
hover_video: /assets/video/MU-hero.mp4

# Project page hero
hero_video: /assets/video/MU-hero.mp4
hero_poster: /assets/img/projects/MU-thumb.png

summary: "A monolithic actuator–lattice–sensor building block (MU) with simulation-informed optical waveguide placement to preserve mechanical response."

paper:
  title: "RoboSoft 2026 (accepted) • arXiv"
  url: https://arxiv.org/pdf/2511.13120

citation: |
  Exley, T., Nardin, A. B., Trunin, P., Cafiso, D., Beccai, L.
  Monolithic Units: Actuation, Sensing, and Simulation for Integrated Soft Robot Design.
  RoboSoft 2026. (accepted). arXiv:2511.13120
---

## Overview

This work introduces the **Monolithic Unit (MU)**: a reproducible building block that integrates **pneumatic actuation**, a **compliant lattice envelope**, and **candidate optical waveguide sensing paths** into a single printed body. The workflow links **parametric design**, **experimental homogenization**, and **simulation** to embed sensing while minimizing changes to the baseline mechanical response.

## My responsibilities

- Worked across an **interdisciplinary team** (materials characterization, simulation, sensing integration)
- Built a **workflow for optimizing sensor placement** inside a bladder-like pneumatic actuator that is half-embedded in a lattice
- Implemented the **parametric design framework in Grasshopper (Rhinoceros 3D)** and supported exporting geometry + lattice node coordinates for simulation-driven evaluation

## Key idea

Treat sensor placement as a **discrete optimization problem** over a finite set of manufacturable waveguide paths derived from lattice nodes, and select the path that **minimizes deviation** from the baseline actuation response in simulation (baseline “Model A” vs sensorized “Model α”).

---
