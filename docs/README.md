## Pay to Play - The World's Highest Paid Athletes in 2017

#### Background and Overview
Pay to Play is a data visualization of the world's highest paid athletes in 2017, according to Forbes. The total estimated compensation is made up of annual salary and endorsements for the year, and the athletes range from all professional sports of all genders.

The data visualization shows the the number of championships/titles the athlete has won vs. the longevity of their career, and there is visual distinction by sport. There is are championship/titles earned specifics and compensation breakdown included in each athlete's data point.

#### Functionality and MVPs
- [ ] Store data as JSON objects based on Forbes article
- [ ] Create images of proportional size based on annual compensation
- [ ] Distinguish athlete's sport by icon or color
- [ ] Create a box that shows on hover with more detail about the athlete
- [ ] Neatly display data in user friendly chart for clear understanding and visual appeal

#### Wireframes
This app will consist of a single screen with the the visualization, which will include hover elements and filter links.

When a user hovers over an athlete's bubble, a display will pop up that will contain the compensation breakdown and the number of championships.

The filter links will filter by the view by sport. A user can click on one of the links to see only the highest paid athletes in a particular sport.

![web 1920 1](https://user-images.githubusercontent.com/15662012/31064799-aeaa9f1e-a6f4-11e7-89c3-5fa3a2911ff0.png)

#### Architecture and Technologies
This project will be implemented with the following technologies:
* HTML and CSS for component layout
* JavaScript and the D3.js library for special visualization features
* Webpack to bundle and serve up the various scripts

There will be two scripts involved with this project, in addition to the webpack entry file:

`sport_filter.js`: this script will handle the logic for hiding and rendering specific sports based on the filter selected by the user

`hover_details.js`: this script will handle the logic for the on hover effects of rendering additional information

#### Implementation Timeline
###### Over the weekend:
- [x] Research and select dataset/apis for project
- [x] D3.js tutorials and practice to prepare for project
- [x] Retrieve data in JSON format

**Day 1**: Setup webpack, axes, and bubbles
- [ ] Complete `package.json` and `webpack.config.js` files
- [ ] Create axes and provide a scale
- [ ] Create bubbles and provide them with scale based on salary
- [ ] Attach additional data to bubbles with D3

**Day 2**: Locate bubbles on chart and style bubbles
- [ ] Give coordinates to the bubbles that correspond with the axes coordinates
- [ ] Use icons and/or color to distinguish the athlete's sport
- [ ] Create `hover_details.js` and format the bubbles

**Day 3**: Filter by sports
- [ ] Create `sport_filter.js`
- [ ] Add links to filter the view

**Day 4**: Make it look damn good
- [ ] Styling/formatting

##### Bonus Features
- [ ] Crisp, clear, intuitive display of data
- [ ] Additional filtering (gender, location, etc.)
- [ ] External data on the athletes (I would add this manually)
