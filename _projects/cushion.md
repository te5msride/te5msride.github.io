---
layout: project
title: "Cushion: Soft Robotics Simulation in Grasshopper, Powered by SOFA"
permalink: /projects/cushion/
featured: true
order: -1
year: 2026
tags: [soft robotics, simulation, software, grasshopper, sofa, parametric design, open source]

thumbnail: /assets/img/projects/cushion-thumb.png
hover_video: /assets/video/cushion-gripper.mp4

hero_video: /assets/video/cushion-gripper.mp4
hero_poster: /assets/img/projects/cushion-thumb.png

summary: "Open-source Grasshopper plugin that runs SOFA soft-body FEM directly from parametric models. Define a body, its cavities or tendons, and an actuation schedule, and get trajectories, forces, and deformed shapes back on the canvas."

paper:
  title: "GitHub • Zenodo DOI 10.5281/zenodo.21625292"
  url: https://github.com/te5msride/cushion

citation: |
  Exley, T., Nardin, A. B.
  Cushion: a Grasshopper plugin for soft-robotics simulation powered by SOFA (v0.1.0).
  Zenodo, 2026. doi:10.5281/zenodo.21625292
---

## Overview

**Cushion** is the soft layer between Grasshopper and [SOFA](https://www.sofa-framework.org/). You describe a soft robot the way you already model in Rhino/Grasshopper: a deformable body, the pneumatic cavities or tendons that drive it, and a schedule of pressures or pulls over time. Cushion meshes the geometry, writes a runnable SOFA scene, launches the simulation, and brings the results (trajectories, forces, contacts, deformed shapes) back onto the canvas.

The scene structure follows the [Monolithic Units](/projects/monolithic-units/) pipeline (RoboSoft 2026): corotational tetrahedral FEM, a homogenized lattice material, MeshROI-based local stiffening, and SoftRobots pressure and cable constraints.

## Highlights

- **v0.1.0 released** July 2026: open source (LGPL-2.1), archived on Zenodo
- Available on [food4Rhino](https://www.food4rhino.com/en/app/cushion?lang=en) and Rhino's Package Manager
- Worked examples: PneuNet gripper and tendon-driven continuum robot
- **Invited talk at [SOFA Week 2026](https://www.sofa-framework.org/sofa-events/sofa-week-2026/)** (Nov 25–27, Lille)

## Tendon continuum robot

<video autoplay muted loop playsinline style="width:100%;border-radius:8px;margin-bottom:1rem">
  <source src="/assets/video/cushion-continuum.mp4" type="video/mp4">
</video>

## Links

- Code: [github.com/te5msride/cushion](https://github.com/te5msride/cushion)
- Archive: [doi:10.5281/zenodo.21625292](https://doi.org/10.5281/zenodo.21625292)
- Videos: [YouTube playlist](https://www.youtube.com/playlist?list=PLZcYzST93d40), with a release overview and installation tutorial

Developed with Anderson B. Nardin (Soft BioRobotics Perception, IIT).
