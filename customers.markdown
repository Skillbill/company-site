---
title: Our latest customers
date: 2022-07-28 12:11:00 +02:00
layout: customers
---

## Our latest customers

Skillbill’s Customer is usually a large (even multinational) or medium-large company, most often with a strong technological focus. We favor long-term relationships with our customers, including the transfer of our skills as part of the service.
These are some of the customers we work with to achieve their goals. For us, our customers are partners and our goal is to achieve measurable results.
Following the customers we work with in the last year.

<div class="customers-container">
  {% for customer in site.customers %}
    <a href="{{ customer.link }}" target="_blank" rel="noopener noreferrer">
      <img src="{{ customer.image }}" alt="{{ customer.title }} logo" loading="lazy">
      <div>
        <h3>{{ customer.title }}</h3>
        <p>
          {{ customer.content | markdownify }}
        </p>
      </div>
    </a>
  {% endfor %}
</div>
