![screen shot 2017-10-06 at 9 48 13 am](https://user-images.githubusercontent.com/15662012/31290082-0e2619a8-aa80-11e7-80d1-a4508c926925.png)

# Pay to Play
Pay to Play is a data visualization analyzing a subset of the most highly compensated athletes in 2017, according to a [Forbes Article](https://www.forbes.com/athletes/#419a014f55ae). It allows users to see see statistics like number of major championships won, years competing as a professional, total compensation, and additional info when hovering over the athlete's bubble. It also allows for filtering by sport and compensation bracket.

Check it out here: [http://paytoplay.tech](http://www.paytoplay.tech/)

## Technology
Pay to Play is a frontend application built on JavaScript, HTML, and CSS. The D3.js library (v4) was used to attach data to HTML elements, which enables the user to smoothly and quickly access information about the athletes:
```
var svg = d3.select("body").append("svg")
    .attr('class', 'grid')
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
```
```
var athletes = svg.append('g')
  .attr('class', 'athletes')
```

## Features
### Athlete Tooltip
In order to create an tooltip with data, D3.js was used to assign JSON data to the athlete HTML elements. With this data stored, I used D3 to create a mouseover tooltip effect which shows specific athlete information related to their compensation and professional career.

INSERT SNAPSHOT HERE

### Combination Filtering
The user has the option to filter the view both by sport and by total compensation. Using a combination of D3, HTML, and CSS, I used class addition and removal to create filters that adjust the visibility of groups of elements. By styling visibility based on the presence of multiple classes rather than a single class, the athletes shown is derived from multiple filters as opposed to just one.

INSERT SNAPSHOT HERE

## Future Considerations
* If additional reliable data is obtained, it would be interesting to see what these athletes make in salary relative to their team's salary cap
* Adding country data for the athletes
