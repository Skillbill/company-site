---
title: Fanplanet
date: 2026-07-20 12:00:00 +02:00
image: "/uploads/fanplanet-home.png"
description: Fanplanet is a multi-tenant, direct-to-fan streaming platform that lets
  artists and rights-holders distribute premium video and audio on every screen,
  without an intermediary.
layout: product
---

Fanplanet is a **multi-tenant, direct-to-fan streaming platform** that lets artists and rights-holders distribute premium video and audio straight to their audience — on every screen they own — **without surrendering the fan relationship or their margin to an intermediary**. A single shared infrastructure hosts many artists, each with their own branding, catalogue, and content management.

{% include image.html url="/uploads/fanplanet-home.png" caption="Fanplanet — fan experience" alt="Fanplanet home screen" %}

---

## One codebase, every screen

Fanplanet reaches **six platforms from a single codebase** — Web, iOS, Android, Android TV, LG webOS, and Samsung Tizen — built in Vue 3 and TypeScript with Capacitor, sharing roughly **94% of its code** across all targets and a unified input model for D-pad, remote, mouse, and touch. One build reaches everything from 2020-era smart TVs to current browsers.

{% include image.html url="/uploads/fanplanet-video-details.png" caption="Adaptive video playback with studio-grade DRM" alt="Fanplanet video detail screen" %}{: .inline .right}

Playback is **adaptive and protected**: DASH and HLS are delivered through Shaka Player and secured with **Widevine and FairPlay** DRM, with device-concurrency limits enforced *inside the DRM license itself* — where a client cannot decline them. Behind the scenes, an **event-driven transcoding pipeline** (S3 → AWS MediaConvert) builds the full quality ladder automatically on every upload.

---

## Built for rights-holders

{% include image.html url="/uploads/fanplanet-admin-siae.png" caption="SIAE royalty reporting in the Admin UI" alt="Fanplanet SIAE reporting" %}{: .inline .right}

Fanplanet lets artists and content creators receive funding **directly from their fans**, maximizing revenue and brand control. It supports **four monetization models** — free, subscription, permanent purchase (EST), and rental — with cross-platform billing handled through RevenueCat over Google Play and the App Store. Every purchase is confirmed server-side by webhook, never trusted from the client.

Crucially, it ships the tooling generic platforms lack: **ADI-compliant metadata, ISRC tracklists, and Italian SIAE royalty reporting** as first-class features — a legal precondition for operating at scale in Italy.

{% include image.html url="/uploads/fanplanet-admin-collection.png" caption="Content management in the Admin UI" alt="Fanplanet admin collection management" %}

An **Admin UI** covers content upload, metadata, collections, and royalty reports, with role-based access for platform operators, artists, and fans. Onboarding a new artist is a data operation — branding and catalogue — not a redeployment.

---

## Serverless and privacy-first

Fanplanet is **fully serverless on AWS** — Aurora Serverless PostgreSQL, Lambda, Cognito, CloudFront, and MediaConvert — so cost is proportional to usage: near-zero at idle, with the CDN flattening concurrent-viewer load to a near-constant origin cost. Privacy is built into the structure: **fan personal data never enters the relational database** (only an opaque identity token is stored), the database has no path to the internet, and all infrastructure is provisioned as code with Terraform.

---

## Contact us

If you are interested, write to [info@skillbill.it](mailto:info@skillbill.it) for a private demo!
