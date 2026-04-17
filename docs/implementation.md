# Implementation

## Introduction
Our project, Pub Quest, aims to provide users with a map of all nearby pubs, nightclubs, wine bars, and cafe bars, serving as a "pub crawl planner". We had plans to include many additional features including route generation, filtering of location types, and saving created routes, however, some features were cut during the development process as we realised we bit off more than we could chew. As a result, our apps features include: table display of all locations; filtering of said table by venue type; search functionality within the table; live, interactable map with functional pins.

The dataset we used gave us 483 records (currently), as well as a lot of data we could work with, including: UPRN, schedule, schedule_json, east, north, type, name, and address. We cut many of the fields such as UPRN and schedule, since this would not be necessary when it came to developing our app. We kept north and east values as stored variables for when it came to implementing our path finding, however, as this feature ended up being cut, these value became obsolete. We mainly worked with the type, name, address, and contact of the premises.

## Project Structure
```
└── 📁docs
    └── 📁.vs
    └── 📁images
    ├── .DS_Store
    ├── contribution.md
    ├── design.md
    ├── implementation.md
    ├── planning.md
    ├── requirements.md
    └── testing.md
└── 📁PubQuestApp
    └── 📁.vscode
    └── 📁fonts
        ├── MiniPixel.otf
        ├── SuperPixel.ttf
    └── 📁images
        ├── buttonDown.png
        ├── buttonUp.png
        ├── map-border.png
        ├── pubQuestLogo.png
        ├── pubQuestLogoBlack.png
        ├── searchBar.png
        ├── searchButtonDown.png
        ├── searchButtonUp.png
    ├── common.js
    ├── filter.html
    ├── filter.js
    ├── index.html
    ├── map.html
    ├── map.js
    ├── plan.html
    └── style.css
└── readme.md
```

### docs
Stores the documentation files of the project.

### PubQuestApp
Stores all the folders and files that are required for the application, such as fonts, images, HTML, JavaScript, and CSS files.

#### fonts
Stores both fonts used throughout the app.

#### images
Stores all images used throughout the app.

#### common.js
JavaScript file for functions called by multiple other files. For example, all of the HTML files need to call the navToggle function, as it is used to define which button is active in the navigation column. Improves maintainability and reduces amount of duplicate code, as all files that share the same functions can call the common.js file.

#### filter.html
The filter page displays a table, of which results are passed into from the filter.js file, and has 4 toggleable filter buttons above said table, defined within this HTML file.

#### filter.js
Provides the data to be displayed in the filter.html file's table. Also provides filter buttons with functionality, and handles the APIs, passing them into the outputTable function to define data which should be displayed.

#### index.html
This is the landing page of the website, which currently has no content, but we aim to add content to this page in the future if we choose to persue the project further. It allows users to access all other pages through the navigation buttons.

#### map.html
Same layout as other pages in terms of navigation bar, etc. Defines an area for the map to be loaded from map.js script.

#### map.js
Handles the generation of the map for the map.html page, as well as the markers displayed on the map.

#### plan.html
This page is also currently empty as a placeholder for future development, as what was meant to be on this page was cut during this time period of development. Again, we would love to add content to this page, if we choose to continue developing this project, which we are leaning towards.

#### style.css
CSS responsible for most, if not all of, the layout and aesthetics of the site. 

### readme.md
Describes overview of the project. Also provides links to the documentation files, as well as the OpenData Bristol dataset used, and a hosted version of the website throught GitHub Pages.

TODO: provide a table listing the number of jslint warnings/reports for each module.

## Software Architecture
TODO: Describe the major components of your architecture. Are any particular architectural styles being used?

!images/component.png

## Bristol Open Data API
All APIs return the following fields: MAPEAST, MAPNORTH, TYPE_OF_PREMISE, TRADING_NAME, TRADING_ADDRESS, BUSINESS_CONTACT

Results with type being EXACT match to query - https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_leisure_and_culture/MapServer/14/query?where=TYPE_OF_PREMISE%20%3D%20'${enc}'&outFields=MAPEAST,MAPNORTH,TYPE_OF_PREMISE,TRADING_NAME,TRADING_ADDRESS,BUSINESS_CONTACT&outSR=4326&f=json

Results with type being SIMILAIR match to query - https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_leisure_and_culture/MapServer/14/query?where=TYPE_OF_PREMISE%20%LIKE%20'${enc}'&outFields=MAPEAST,MAPNORTH,TYPE_OF_PREMISE,TRADING_NAME,TRADING_ADDRESS,BUSINESS_CONTACT&outSR=4326&f=json

All results - https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_leisure_and_culture/MapServer/14/query?where=1%3D1&outFields=MAPEAST,MAPNORTH,TYPE_OF_PREMISE,TRADING_NAME,TRADING_ADDRESS,BUSINESS_CONTACT&outSR=4326&f=json

Results with any field with SIMILAIR match to search input - https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_leisure_and_culture/MapServer/14/query?where=&text=${enc}&outFields=MAPEAST,MAPNORTH,TYPE_OF_PREMISE,TRADING_NAME,TRADING_ADDRESS,BUSINESS_CONTACT&outSR=4326&f=json

!(images/exactClass.png)
!(images/likeClass.png)
!(images/allClass.png)
!(images/searchClass.png)

# User guide
TODO: Explain how each use-case works by providing step-by-step screenshots for each use-case. This should be based on a tested scenario.