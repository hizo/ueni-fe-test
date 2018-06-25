# UENI Front-end Interview Test

Task: Build a basic web application with ReactJS based on the assets in the zip file provided.

Files:

- step_1.png
- step_2.png
- reviews-data.json
- businesses-data.json

## Application

The application has only two pages, step-1 and step-2. Step-1 lists the data from businesses-data in a grid like fashion, whist the step-2 represents the summary page of the selected business.

### Requirements

#### Step-1

- List all business data in businesses-data.json by default (not sorted or filtered)
- Show the business image, description, location and name
- Have functionality to sort the business in alphabetical order
- Have functionality to filter by category
- Click on the business forwards the user to step-2 with details of the business clicked on

#### Step-2

- Show the business image, description, location, name and calculated reviews score.
- If no reviews data available, show a message "No reviews"

#### Design

The images of the steps provided are wireframes of the pages. Base the layout of the page from them, but you can use preferred styling tools. Adapt the wireframes for range of devices.

#### Data

businesses-data.json has all the needed data for step-1. For step-2 you will need to combine the data from reviews-data.json. The field names are self-explanatory.

## My Solution

- I used `create-react-app` for the sake of keeping the demo configuration simple
- I chose `react-bootstrap` as a UI kit, used for buttons, images and dropdown. I am aware that the current version is a bit obsolete since it doesn't support **Bootstrap 4** yet, but it's a tool I'm familiar with. I also know that including the whole Bootstrap is overkill for this simple demo, but gets the job done.
- I used `grid-styled` for a flexbox based grid-like layout. I am not using **CSS Grid** in production yet. `styled-components` are used for further manual CSS rules in a couple of places.
- I used `react-router` to get the job done fast. Also overkill for 2 pages.

### `npm start` or `yarn start`

Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

### `npm run build` or `yarn build`

Builds the app for production to the build folder. If you want to run production build, you need to serve the files from the root of a webserver, since I didn't use `react-router's HashRouter`.
