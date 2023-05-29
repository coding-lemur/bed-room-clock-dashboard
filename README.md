# Bedroom Clock Dashboard

## Description

It's the dashboard for the [Bedroom Clock](https://github.com/coding-lemur/bed-room-clock).

![alt screenshot](/public/screenshot.png)

## FAQ

### Why the dashbaord isn't hosted on the ESP32 directly?

1. ESP32 have not enough space. If we build the project the static files (js, css, ...) are to big for the internal storage of the ESP. So ESP32s webserver tunneling all specific request to the Github Pages URL and only execute API requsts internal.
2. If you use the internal storage of the ESP32, you have to flash it for each dashboard update and it's complicated to keep settings because they stored on the device also.

### Can I selfhost the Dashboard locally?

Yes, it is possible to run the dashboard from your own server.

You have to build the project with the command

```bash
npm run build
```

and copy the content of the `dist` folder to a public endpoint (maybe a nginx on your server). It's also possible to make a Docker container with the dashboard.

Now you have to change some URLs in the [bedroom-clock firmware](https://github.com/coding-lemur/bed-room-clock):

Clone the repo and open `src/main.cpp`.

Change the value of the two variables "externalBaseUrl" and "indexPath" so it matches your own server URL (domain or IP address)

```c++
const char *externalBaseUrl = "http://192.168.178.5";
const char *indexPath = "/folder/index.html";
```

## General project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run dev
```

### Compiles and minifies for production

```bash
npm run build
```
