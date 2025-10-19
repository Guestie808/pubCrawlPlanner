# Project Proposal
Pub Crawl Planner

## Business Case


### Problem statement
- HTML web based app used to plan a Pub Crawl for young and middle aged adults, with additional features to try and make the pub crawl more interesting and hassle free.
- Attempting to solve the problem that many new residents of Bristol may have; finding new pubs/ nightclubs to visit with friends.

### Business benefits
- Provides easier way to organise a night out, encouraging exploration of local areas, espeicially to people new to the city.
- Offers additional features to help make a night out more enjoyable such as activities, challenges, forfeits, etc.
- Smaller pubs gaining brand awareness and potentially earning long-term customer loyalty
- Helps organise when and where live music/ other events are taking place

### Options Considered
- BarCrawl: https://www.barcrawl.co.uk/
    + Range of cities to choose from (low relevance as limited to Bristol Dataset)
    + Embedded google maps view
        - Issues with embed not showing correct pub locations
    + Ability to save crawl after login
    + Can view existing pubs crawls created by other users
    + Saves most recently created pub crawl using cookies
    + Can view crawls created by other users, which can also be sorted by city
    + Ability to search for all pubs in a city
    + Can submit reviews on the site for specific venues
        - Rarely used feature as most pubs lack any reviews written on the site: sourcing reviews from external sites such as Google Maps would be more effective
    - Unfriendly UI: very confusing and looks like it was made 20 years ago
    - Limited to number of pubs, cant do time limit
    - Issues generating the crawl intself: not generating all requested pubs crawl
    - Fairly limited information included on pub description pages

- DayTrips: https://www.daytrips.ai/pub-crawl
    + AI meaning large amount of data at its disposal
    + Allows users to tailor their crawl to their prefered drink
        - Can only select prefered drinks from different types of beers
    + Includes both time spent out and number of pubs to visit
    + Suggests time spent at each location
    + Generates GoogleMaps embed with route plotted out
    + Links to each pub included with descriptions of each too
    - Cant select specific starting location or general location: limited to city
    - Logo not suited to dark mode, affecting sites appeal to users
    - No tab thumbnail, also affecting the sites overall appeal
    - AI doesn't have dedicated use to this application, so may generate useless results based on user input: works similairly to any other AI framework

- Vondy: https://www.vondy.com/pub-crawl-generator--lVUgFVhf
    + AI meaning large amount of data at its disposal
    + Gives a list of templates to generate a crawl from
        - Doesn't allow any specification of location or any other info: limited relevance
    + Provides description and activies for each locaiton on the crawl
    + Travel tips included, such as footware, travel methods and opening times
    - Doesn't consider opening times, relying on the user doing so externally
    - Asks if user would like illustration of the map, however, no way to reply yes
    - AI doesn't have dedicated use to this application, so may generate useless results based on user input: works similairly to any other AI framework

- Pubs Galore: https://www.pubsgalore.co.uk/pub-crawl-planner/pub-selection-tool.php:
    + Home page is a map showing pubs in the area
    + Clicking on specific pubs shows a large amount of info, including address, reviews, links to the venues sites, and an embedded map to show location
    - Unfriendly user interface that looks like it was designed 20 years ago: hard to find desired features, very cluttered and text heavy


### Expected Risks
- Laws involving drinking must be emphasised
- Time restraints
- Limited experience using HTML and JavaScript
- Only so much data that can be extracted from the dataset, potentially limiting features included in the final project

## Project Scope
TODO: Scope of the System of Interest. Include a bullet list of things from your context diagram that are in scope.

![Insert your Context Diagram Here](images/context.png)
