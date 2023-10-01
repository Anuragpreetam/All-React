# parcel does
-Dev build
-Local Server
-Hot reload/ hot module replacement
-Caching = faster builds 
-Image Optimisation
-Minification for production build
-Bundling
-Compress

parcel dev build- npx parcel index.html

parcel production build - npx parcel build index.html (you'll get an error here, you can remove it by removing main from package.json file)
After succcessful build, the files are prod files are generated inside dist folder