---
layout: default
title: Network Scanning & Recon (Nmap)
---

# Network Scanning & Recon (Nmap)

**Date:** 2025-10-06 · **Env:** Home lab (VMs on NAT)  
**Objective:** Identify live hosts, enumerate services/versions, prioritise risk.

## Scope
- In-scope: `192.168.1.0/24` (lab only)
- Out-of-scope: non-owned devices
- Method: safe scripts only; no brute forcing

## Commands
```bash
nmap -sn 192.168.1.0/24 -oA outputs/01-host-discovery
nmap -T4 --top-ports 100 -sS 192.168.1.0/24 -oA outputs/02-top100
nmap -p- -sS -sV -sC -O <TARGET_IP> -oA outputs/03-full-enum-<TARGET_IP>
