# Pub Quest
Our project, Pub Quest, aims to provide users with a map of all nearby pubs, nightclubs, wine bars, and cafe bars, serving as a "pub crawl planner". We had plans to include many additional features including route generation, filtering of location types, and saving created routes, however, some features were cut during the development process as we realised we bit off more than we could chew. As a result, our apps features include: table display of all locations; filtering of said table by venue type; search functionality within the table; live, interactable map with functional pins.

The dataset we used gave us 483 records (currently), as well as a lot of data we could work with, including: UPRN, schedule, schedule_json, east, north, type, name, and address. We cut many of the fields such as UPRN and schedule, since this would not be necessary when it came to developing our app. We kept north and east values as stored variables for when it came to implementing our path finding, however, as this feature ended up being cut, these value became obsolete. We mainly worked with the type, name, and address of the premises.

Pubs and Nightclubs Dataset - https://opendata.bristol.gov.uk/datasets/679b33d9fd27450f9363787efc4d3456_14/explore

Buttons, Logo - Drawn by Tyler
SuperPixel (font used in titles and buttons) - link: https://www.fontspace.com/super-pixel-font-f112028
MiniPixel (GomePixel - font used in "Filter Local Venues" table) - link: https://www.fontspace.com/gome-pixel-font-f119163

## Documentation
1. [Planning](docs/planning.md)
2. [Requirements](docs/requirements.md)
3. [Design](docs/design.md)
4. [Implementation](docs/implementation.md)
5. [Testing](docs/testing.md)

## Website (Hosted through Github Pages)
https://guestie808.github.io/PubQuest/

## How to use

### Navigation
On the left hand side, there are 3 *togglable* buttons, giving access to 4 different pages. While being toggleable, only one button can be active at a time. Buttons changes visually when toggled on and off.

### Pages

#### Index
Contains nothing yet, but future plans to add extra info, images, route templates, etc.

#### Filter Local Venues
Brings up a table of all records from dataset. Above table, there are 4 *toggleable* buttons, all being limited to one being active at a time, with corresponding visuals to show which is active at what time. The search function at the top right hand corner of the page is linked to this page, so whatever is typed into the search box when the search button is pressed will be used as the query to find records that contain data that are a "like" match (not a complete match).

#### View Local Venues
Opens page with live map, with interactable pins

#### Plan A Crawl
Empty at the moment due to cut features during development, but ready for a route creator to be added to the site