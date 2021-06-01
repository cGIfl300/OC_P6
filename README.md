# OC_P6 - Create a Web User Interface using Python

## Clone the project

To clone this project, you can [download it on github](https://github.com/cGIfl300/OC_P6/archive/refs/heads/master.zip)
.  
Or clone it using git `git clone https://github.com/cGIfl300/OC_P6`.

## Build the project

`npm run build`

## Installing the project

Copy index.html and the dist/ directory at the root of your webserver.  
This version is for testing purposes only and use localhost as REST API provider.  
You will need to have the REST API server running at localhost. See
[OCMovies API](https://github.com/cGIfl300/OC_P6/cloned_api_server/OCMovies-API-EN-FR) for further details.

## How to add a slide?

Add the tags to the **index.html** file were you want the carousel to be.

```HTML
<div carousel="best"></div>
```

Where _best_ can be replaced by the category you want to show.
