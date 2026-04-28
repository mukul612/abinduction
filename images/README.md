# Image download target

Attempted to fetch all images from:
- https://abinduction.in
- https://abelectricals.com

In this execution environment, outbound HTTP/HTTPS requests are blocked by the configured proxy (`403 Forbidden` on CONNECT/request), so images could not be downloaded here.

To run locally (with open internet), use:

```bash
mkdir -p images/abinduction.in images/abelectricals.com
wget --recursive --level=inf --no-parent --page-requisites \
  --accept jpg,jpeg,png,gif,webp,svg,avif,bmp,tif,tiff,ico \
  --domains abinduction.in \
  -P images/abinduction.in https://abinduction.in/

wget --recursive --level=inf --no-parent --page-requisites \
  --accept jpg,jpeg,png,gif,webp,svg,avif,bmp,tif,tiff,ico \
  --domains abelectricals.com \
  -P images/abelectricals.com https://abelectricals.com/
```
