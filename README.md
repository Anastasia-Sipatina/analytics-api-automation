# Analytics API Automation (Google Apps Script)

Automation scripts for exporting web analytics data to Google Sheets.

## Overview

This project contains Google Apps Script code for:

- Yandex Metrika (API, CSV)
- Yandex Direct (API, TSV export)

The script runs daily exports and appends data to Google Sheets.

---

## Features

- Config-based architecture
- Multiple Yandex Direct accounts support
- Dynamic metrics and dimensions

---

## Architecture

All dynamic parameters are stored in `Config.gs`:

- Tokens
- Account IDs
- Date ranges
- Field names
- Report settings
- Goals and metrics

---

## Setup

1. Create a Google Spreadsheet.
2. Open **Extensions → Apps Script**.
3. Copy files from `/src` into your Apps Script project.
4. Create `Config.gs` based on `Config.example.gs`.
5. Fill in real tokens and identifiers.
6. Run `runAll()` once and grant permissions.

---

## Security

This repository contains an anonymized version of the scripts.  

---

## Use Case

Designed for marketing and product analytics teams who need automated daily reporting from Yandex platforms into Google Sheets.
