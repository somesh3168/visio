---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---
  <div class="hero-image" id="home">
    <img src="{{ '/assets/images/eye-clinic-banner.jpg' | relative_url }}" alt="Eye Care Clinic">
    <!-- Call to Action Button -->
  <div class="hero-overlay d-flex justify-content-center align-items-center button-container">
  <!-- <span>We Provide<strong> BEST VISION CARE</strong></span> -->
    <a href="#" class="button button-wiggle cta-button" data-bs-toggle="modal" data-bs-target="#googleFormModal">Book Appointment</a>
    <!-- <a href="#" class="button button-wiggle">Book Appointment</a> -->
  </div>
  </div>



<!-- {% include treatments.html %} -->
{% include treatments2.html %}
{% include location.html %}
{% include contact.html %}
{% include about.html %}