{
  "root": "dist/",
  "https_only": true,
  "routes": {
    "/**": "index.html"
  },
  "proxies": {
    "/api/": {
      "origin": "https://httpbin.org/"
    }
  }
}