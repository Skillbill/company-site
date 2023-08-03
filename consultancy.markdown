---
title: Consultancy
layout: business_line
header:
  image: "/uploads/consultancy.jpg?v=1"
  texts:
    - At Skillbill, we are passionate about delivering exceptional results for our valued clients. Our approach to project organization encompasses a range of methodologies, from turnkey projects to consulting services. We adopt flexible strategies, including Agile, Waterfall, and hybrid methods, tailored to meet the unique needs of each project.
    - Through unwavering commitment, seamless collaboration, and utmost trustworthiness, we ensure that projects are executed to perfection.
    - If you are intrigued and seek further information, please don't hesitate to reach out to us at <strong>info@skillbill.it</strong>. We'll be more than happy to assist you!
introduction:
  title: "Meet our consultants"
  texts:
    - Each of our consultants specializes in a unique profile, bringing a comprehensive set of skills and capabilities to meet your specific needs.
    - Meet some of them to get an idea of our available profiles!
---

<link rel="stylesheet" href="./css/consultancy.css">
<!-- Consultants -->
<section id="consultants">
  {% for consultant in site.consultancies %}
  <div>
    <p>
      <strong class="rotated">
        Profile {{ consultant.profile }}
      </strong>
    </p>
    <div class="profile">
      <div class="person">
        <div class="header">
            <img
              src="{{ consultant.image }}"
              alt="{{ consultant.profile }}"
              loading="lazy"
              width="150"
              height="150"
            >
            <div>
              <!-- Greeting -->
              <p class="greeting">
                {{ consultant.greeting }}
              </p>
              <!-- Labels -->
              <div class="labels">
                {% for label in consultant.labels.primary %}
                  <span class="label label-accent">{{ label }}</span>
                {% endfor %}
                {% for label in consultant.labels.secondary %}
                  <span class="label">{{ label }}</span>
                {% endfor %}
              </div>
            </div>
          </div>
          <div class="body">
            {{ consultant.content | markdownify }}
          </div>
        </div>
        <div class="skills">
          <div>
            <h5>Technologies</h5>
            <div class="labels">
              {% for tech in consultant.skills.techs %}
                <span class="label label-secondary">{{ tech }}</span>
              {% endfor %}
            </div>
          </div>
          <div>
            <h5>Roles</h5>
            <div class="labels">
              {% for role in consultant.skills.roles %}
                <span class="label label-secondary">{{ role }}</span>
              {% endfor %}
            </div>
          </div>
          <div>
            <h5>Areas</h5>
            <div class="labels">
              {% for area in consultant.skills.areas %}
                <span class="label label-secondary">{{ area }}</span>
              {% endfor %}
            </div>
          </div>
        </div>
      </div>
  </div>
  {% endfor %}
</section>