---
title: Efesto
date: 2026-07-20 12:00:00 +02:00
image: "/uploads/efesto-line-overview.png"
description: Efesto is a general-purpose SCADA/HMI platform to monitor and control
  large, distributed infrastructure — stations, lines, buildings and field devices — in
  real time.
layout: product
---

Efesto is a **general-purpose SCADA/HMI platform for the real-time supervision and control of large, distributed infrastructure**. Born from Skillbill's railway SCADA experience, it gives operators a single console to monitor and command stations, lines, trains, buildings, and field devices through interactive synoptic diagrams that scale from a single monitor to a multi-panel video wall, with fully standard HTML5 output.

Efesto is built on a **hub-and-spoke architecture** with a real-time event bus at its core: a central server coordinates every operator workstation, broadcasting device state and commands so that what one controller sees and does stays consistent across the whole control room.

{% include image.html url="/uploads/efesto-line-overview.png" caption="Line synoptic — panoramic overview" alt="Efesto line synoptic overview" %}

---

## Real-time operations

The operator interface (HMI) is designed for fast, unambiguous interaction: field devices visually show their operating status, and controllers can send commands to individual devices or entire groups through a powerful selection-and-actuation model. Synoptics are linked to one another — from a full-screen home page down to embedded components on each view — so navigating between a line, a station, a platform, or a single train is immediate.

{% include image.html url="/uploads/efesto-cctv.png" caption="Station-level CCTV monitoring" alt="Efesto CCTV video wall" %}{: .inline .right}

Efesto integrates the systems an operator actually needs in one place:

- **CCTV / video** — live camera grids and video walls with PTZ control and digital zoom, delivered over HLS/DASH.
- **Communications** — intercom and telephony with call presets, plus public-address / passenger-information messaging, message presets, and text-to-speech.
- **Alarms & events** — real-time notifications with severity levels, scoped to the operator's zone of responsibility.

---

## Authoring & configuration

{% include image.html url="/uploads/efesto-synoptic-editor.png" caption="Visual synoptic editor" alt="Efesto synoptic editor" %}{: .inline .right}

Everything an installation needs is modeled and configured through a dedicated **Configurator**, with no code required. A drag-and-drop **visual synoptic editor** lets integrators compose plant schematics — stations, lines, sections, buildings, floor levels, and trains — with a live "Preview HMI" workflow, a component and asset tree, and bulk import/export of area configurations.

The Configurator also governs the operational side of a deployment:

- **Access control** — SSO with zone-based, role-aware permissions down to the individual workstation.
- **Workspaces** — workstations, members, and the mapping of applications to each station.
- **Internationalization** — a full translation workflow with publish and audit steps (the interface currently ships in five languages).

---

## Diagnostics & field integration

{% include image.html url="/uploads/efesto-diagnostics.png" caption="Diagnostics — rack and cabinet view" alt="Efesto diagnostics rack view" %}{: .inline .right}

For maintainers, Efesto provides SCADA-style **diagnostics** with a device-type catalog (compressors, pumps, UPS, network switches, CPU/RAM, and more), input/output scans, and drill-down all the way to racks and individual switch ports.

On the field side, a dedicated module connects to **MODBUS TCP** probes and sensors with auto-discovery and time-series persistence, and the platform is being extended with thermal-camera (FLIR) and distributed fiber-sensing integrations for perimeter and asset monitoring.

---

## Technology

Efesto runs on a modern, containerized stack — **Node.js** and **Socket.IO** for the real-time core, **React** and **SolidJS** front-ends, **PostgreSQL** for configuration and **InfluxDB** for field time-series, all orchestrated with **Docker** behind an Nginx reverse proxy. It supports both **cloud-hosted and on-premises** deployments, so it fits everything from a single site to a large multi-station transit network.

---

## Contact us

If you are interested, write to [info@skillbill.it](mailto:info@skillbill.it) for a private demo!
