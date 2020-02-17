# Eat Da Burger!!

### Overview

The burger app pretty much follows the instructions right down the line. The user can run the app from port 8080 in localhost or a Heroku link. (Haven't pushed yet.) The app is implemented using Bootstrap and Handlebars running against a node server running express and mySql with an MVC and ORM architecture 

When the page opens it will display a (comically) simple page listing two columns from the database. On the left, burgers a user has added to her list of burgers that our not-yet-eaten, and on the right burgers that were entered AND eaten. 

An input in the jumbotron allows the user to add a new burger, which will be added to the list on the left. Each uneaten burger will have a DEVOUR button, which will move the burger from left to right, i.e., uneaten to eaten. 

### Questions/Issues

1) I didn't (yet) use arrays to make the ORM maximally flexible. In fact, it was while I was coding this that I really realized some of the point of the ORM. 

2) My burger controller does 2 two calls to selectWhere(). In order to send two datasets to the page, I have them indented. I have the feeling I could do that better with CBs, but I'm not sure how. ?? 

3) My INSERT code doesn't (yet) do duplicate checking. That'd be pretty boilerplate for an app out in the world, imo. 

4) The database is really simple, though one improvement I'd have suggested for the syllabus is to add a DTTM_ADDED or whatever to it. It'd give the developer an option to display the two lists in a meaningful way, i.e., chronological order. Not sure how mySql works, but in Oracle typically unordered data is returned in reverse order of insertion, but it's not guaranteed. It's good form to force the ordering to be what a user would like to see. 

### Additional Comments

The instructions said this would be a difficult assignment, and they were right. This was challenging. Taking everything out of one or two files and building a more elaborate folder and file structure was torture. The requires and app.uses were killing me.

OTOH, the visual part of the assignment was PERFECT. Very simple, nothing to get in the way of struggling with MVC and ORM. Lol. I was really able to focus on the point of the exercise. 


