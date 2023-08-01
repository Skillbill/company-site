---
title: Consultancy
layout: page
decription: consultancy RUST . consultancy C++ . consultancy Java . consultancy Kotlin
  . consultancy Javascript . consultancy Typescrit . consultancy RDBMS . consultancy
  Cloud . consultancy Vue . consultancy React . consultancy Developer . consultancy
  Project Leader .consultancy Software Architect . consultancy Fullstack Developer
  . consultancy Mobile Developer . consultancy Devops Developer . consultancy AWS
  . consultancy Azure . consultancy Blockchain . consultancy WEB3
---

{% include image.html url="/uploads/consultancy.jpg?v=1" height="580" alt="" %}

## Consultancy

Here at Skillbill we love getting our clients' projects done. We organize our teams in ways from turnkey project to consulting. We follow Agile, Waterfall methodologies or some mixed ones.
With the correct commitment, collaboration and trustines we carry out projects in the good way.
Below our current available profiles. If you are interested and want information, write to [info@skillbill.it](mailto:info@skillbill.it)

<div class="consultancies-container">
  {% for consultant in site.consultancies %}
    <div>
      <div>
        <div>
          <h3>{{ consultant.title }}</h3>
          <p>
            {{ consultant.content | markdownify }}
          </p>
        </div>
      </div>
      <div>
        <div>
          <h3>Technologies</h3>
          {% for tech in consultant.techs %}
            <span>{{ tech }}</span>
          {% endfor %}      
        </div>
        <div>
          <h3>Roles</h3>
          {% for role in consultant.roles %}
            <span>{{ role }}</span>
          {% endfor %}      
        </div>
        <div>
          <h3>Areas</h3>
          {% for area in consultant.areas %}
            <span>{{ area }}</span>
          {% endfor %}      
        </div>
      </div>
    </div>
  {% endfor %}
</div>