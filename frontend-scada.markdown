---
title: FRONTEND-SCADA
date: 2021-04-15 09:44:00 +02:00
layout: page
---

![SCADA_Systems_Layout.png](/uploads/SCADA_Systems_Layout.png)

<a href="https://commons.wikimedia.org/wiki/File:SCADA_Systems_Layout.png">deramsey</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons

# Frontend-Scada

Usually SCADA systems are very large vertical products with legacy implementations because they have been developed over many years. We played a different role this trend helping our clients with Research and Development activities needed in their new challenges.

Skillbill worked on two railways SCADA projects: a Centralized Traffic Control (CTC) system for an Italian railway section and the Generic Application for Subway Network Control.

CTC consists of a highly reliable bus for bidirectional communication between the control rooms and the railway. The communication bus translates the signals into actions for the GUI and internal logics. The graphical interface is a stand-alone application using a web-view.
The rendering is done via vector graphic allowing to show synoptics on any screen even composed of several panels and of any size.
The system implements logics such as train locator, prediction panel and other analysis of the traffic.
It is possible to control audio and video communication devices.
Workstations have authorization and profiling for a fine control of commands.

The Generic Application for Subway Network Control has a Web HMI interface and an Authoring tool.
Thanks to our specific experiences in web development we developed a streamlined and highly usable interface: each operator interaction has been designed for a simple and quick interaction and the information is always accessible and easy to find.
The devices in the field visually show their operating status.
Thanks to a powerful implementation of the selection and actuation methods, for the user it is possible and easy to quickly send commands to individual devices or to groups of them.
Synoptics are connected to each other through the use of the Home Page in full-screen format and as a smaller component placed in the various pages: moving between one location and the other is impressively smooth and fast!

As for the CTC, the application has the graphical interface completely vectorial and responsive, which means that the same output can be stretched from a single PC monitor to a multi-monitor video wall without losing definition neither changing the application itself.

All the elements of a given installation have been positioned and configured using the Authoring tool. It is responsible to configure other specific installation aspects like authorization, user profiles and internationalization.

The first installation supports PA/PID, CCTV and INTERCOM systems.

As proof of concept, Skillbill has also developed its own general purpose fully SCADA solution based on the work we did with the railways SCADA UI. For instance a working sample of the control of a multi-site solar generator network is available, as well as an implementation of a data center monitoring and control system with a mixed source of SCADA signals, IoT sensors and SNMP/IP devices. This PoC and its demo have been developed in order to show the full potential of the powerful SCADA UI made by Skillbill, in terms of responsiveness, scalability and interoperability, with a fully standard HTML5 output.

If you are interested in a demo, do not hesitate to contact us by writing to info @ skillbil.it