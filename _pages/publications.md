---
layout: page
title: publications
permalink: /publications/
nav: true
---

Below are selected highlights followed by the full list. On any item, click “Details” to view/export the BibTeX.

## featured

{% bibliography --file papers --query @*[selected=true] %}

---

## all publications

{% bibliography --file papers %}

<!--
OPTIONAL: If you want explicit sections for manuscript status, add a custom BibTeX field like:
  status = {submitted}
  status = {inpress}
…then uncomment the blocks below.

## submitted / under review
{% bibliography --file papers --query @*[status=submitted] %}

## in press
{% bibliography --file papers --query @*[status=inpress] %}

OPTIONAL: Show only recent items (e.g., 2021+)
{% bibliography --file papers --query @*[year>=2021] %}
-->

<!--
Notes:
- "featured" pulls items where your .bib has:  selected = {true}
- Grouping by year and the "Details" links use your scholar settings in _config.yml.
- To attach a local PDF to an entry, add in BibTeX:  pdf = {/assets/papers/yourfile.pdf}
- To show venue short tags, add:  abbr = {IROS}  (al-folio’s bib template displays it).
-->
