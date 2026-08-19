# Location Tracer

> A lightweight Flask app that reads your browser location and presents it in a clear, minimal dashboard.

<div align="center">

**Request your coordinates. See the result instantly.**

[Getting Started](#getting-started) · [How It Works](#how-it-works) · [Privacy](#privacy)

</div>

---

## Overview

Location Tracer combines a small Python server with the browser's built-in Geolocation API. Press **Get My Location**, allow location access, and the app reports:

- Latitude
- Longitude
- Estimated accuracy in meters

The server renders the page with Flask, while location access happens directly in the browser.

## Preview

```text
+--------------------------------------+
|          Python Location Tracker     |
|                                      |
|  Click the button to get your        |
|  location.                           |
|                                      |
|          [ Get My Location ]         |
|                                      |
|  Latitude:  ---                      |
|  Longitude: ---                      |
|  Accuracy:  ---                      |
+--------------------------------------+
```

## Project Structure

```text
Location_Tracer/
|-- venv/                  # Local Python virtual environment
|-- app.py                 # Flask application and route
|-- templates/
|   `-- index.html         # Main page
|-- static/
|   |-- style.css          # Page styling
|   `-- script.js          # Geolocation behavior
`-- README.md
```

## Getting Started

### 1. Create and activate the virtual environment

PowerShell:

```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```

If PowerShell blocks activation for this session, run:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\venv\Scripts\Activate.ps1
```

### 2. Install Flask

```powershell
python -m pip install Flask
```

### 3. Start the application

```powershell
python app.py
```

Then open [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser.

## How It Works

1. Flask serves `templates/index.html` at `/`.
2. The browser loads `static/script.js`.
3. Clicking the button requests permission through `navigator.geolocation`.
4. The returned coordinates and accuracy are written into the page.
5. `static/style.css` controls the presentation.

## Browser Permissions

Location access must be approved in the browser. The browser may also require a secure context such as `https://` when the app is deployed. Localhost development is supported by modern browsers.

If the request fails, check that:

- Location services are enabled on your device.
- The browser has permission to access your location.
- You are opening the app through the Flask server, not by double-clicking the HTML file.
- Another application is not blocking location access.

## Privacy

Location data is requested by the browser and displayed in the current page. This project does not send coordinates to a database or third-party service. Treat displayed coordinates as sensitive information and only grant permission when you trust the page.

## Development

Run Flask with debug mode enabled during local development:

```powershell
python app.py
```

Edit the files in `templates/` and `static/`, then refresh the browser to see changes.

## License

No license has been specified for this project yet.
