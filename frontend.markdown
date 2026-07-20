---
title: Frontend SCADA
description: Innovative front-end for SCADA systems.
layout: business_line
header:
  image: "/uploads/Front%20end%20-%20SCADA.png"
  texts:
  - SCADA systems often comprise extensive, vertically integrated products with legacy
    implementations due to their long development history.
  - However, at our company, we break away from this trend. We pride ourselves on
    assisting our clients in tackling new challenges by offering innovative Research
    and Development solutions.
  - Discover how our approach sets us apart in the world of SCADA systems.
introduction:
  title: Explore our projects
  texts:
  - Discover the unique solutions we crafted to address our clients' specific challenges
    in a new era of possibilities.
---

Skillbill worked on two railways SCADA projects:

* Centralized Traffic Control (CTC) system for an Italian railway section 

* Generic Application for Subway Network Control.

**CTC consists of a highly reliable bus for bidirectional communication between the control rooms and the railway**. The communication bus translates the signals into actions for the GUI and internal logics. The graphical interface is a stand-alone application using a web-view.
Rendering is done using vector graphics, allowing synoptics to be shown on any screen, even those composed of several panels of any size.
The system implements logics such as train locator, prediction panel and other analysis of the traffic.
It is possible to control audio and video communication devices.
Workstations have authorization and profiling for a fine control of commands.

**The Generic Application for Subway Network Control has a Web HMI interface and an Authoring tool**.
Thanks to our specific experiences in web development we developed a streamlined and highly usable interface: each operator interaction has been designed for a simple and quick interaction and the information is always accessible and easy to find.

The devices in the field visually show their operating status.
Thanks to a powerful implementation of the selection and actuation methods, users can quickly send commands to individual devices or groups of them.
Synoptics are connected to each other through the use of the Home Page in full-screen format and as a smaller component placed in the various pages: navigating between locations is impressively smooth and fast!

As for the CTC, the application has a completely vector-based and responsive graphical interface, which means the same output can scale from a single PC monitor to a multi-monitor video wall without losing resolution or changing the application itself.

All the elements of a given installation have been positioned and configured using the Authoring tool. It is responsible to configure other specific installation aspects like authorization, user profiles and internationalization.

The first installation supports PA/PID, CCTV and INTERCOM systems.

## Efesto — our SCADA/HMI platform

{% assign efesto = site.products | where: "title", "Efesto" | first %}
This experience led us to build **[Efesto]({{ efesto.url | relative_url }})**, our own general-purpose SCADA/HMI platform, based on the work we did on the railway SCADA UIs. Efesto lets operators monitor and control large, distributed infrastructure in real time — from stations, lines and trains to buildings and field devices — with integrated CCTV, communications, diagnostics, and a visual synoptic editor. Working demos include the control of a multi-site solar generator network and a data-center monitoring system that mixes SCADA signals, IoT sensors, and SNMP/IP devices, showcasing the platform's responsiveness, scalability, and interoperability with a fully standard HTML5 output.

[Discover Efesto →]({{ efesto.url | relative_url }})

If you are interested in a demo, do not hesitate to contact us by writing to [info@skillbill.it](mailto:info@skillbill.it)