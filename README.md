![pay_to_play](https://user-images.githubusercontent.com/15662012/31289543-eea7670a-aa7d-11e7-9d63-b73ed0c9d4d4.gif)

# Pay to Play
Pay to Play is a data visualization analyzing a subset of the most highly compensated athletes in 2017, according to a [Forbes Article](https://www.forbes.com/athletes/#419a014f55ae). It allows users to see see statistics like number of major championships won, years competing as a professional, total compensation, and additional info when hovering over the athlete's bubble. It also allows for filtering by sport and compensation bracket.

Check it out here: [http://paytoplay.tech](http://www.paytoplay.tech/)

## Technology
Pay to Play is a frontend application built on JavaScript, HTML, and CSS. The D3.js library (v4) was used to attach data to HTML elements, which enables the user to smoothly and quickly access information about the athletes:
```
athletes.selectAll('.circle')
  .data(athletesJson.athletes)
  .enter()
```

## Features
