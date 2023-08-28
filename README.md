# Group_project_3

Contributors: Michaela Johnson, Jessica Pilon, Tracy Tachick

Folders and Files:
healthdata_postgresql_table (code and snapshot of healthdata table in PostgreSQL, MJ)
Code --> AppProj3.py (flask app, TT)
Code --> Template --> index.html (MJ)
Code --> static --> js --> logic.js (pie chart + drop down, MJ), logic2.js (line graph, MJ and JP), logic3.js (map, TT)
Code --> static --> css --> style.css
Code --> static --> resources--> healthdata.csv (source data, all worked on)

Topic:  
Mortalities based on chronic diseases in the US, overtime and per state. 
A review U.S. Chronic Disease Indicators from U.S. Department of Health & Human Services.

The questions we're asking of the data:
-Top causes of mortality per state
-# of mortalities reported per year
-demographic info per state

Interactive Visuals:
-Drop-down box to choose a state with resulting pie chart displaying top causes of mortality
-Line graph showing # of reported mortalities changing over course of 10 years
-Map with hover-data on mortalities

Process:
-search for data on chronic disease, download csv from data.gov (link below) after reviewing contents
-clean and filter the csv based on relevance and accuracy; blank fields or cases based on % or per 100,00 cases deleted. Lat and long parsed into seperate columns.
-Database and table created in postgresql to store csv.
-Flask and psycopg2 used in py file to run html on local server, and read the postgresql database into an api (json format).
-index.html is run through local server, displaying web page.
-logic.js files (1-3) populate interactive charts on web page by utilizing json data.

Data source(s):
https://catalog.data.gov/dataset/u-s-chronic-disease-indicators-cdi

Link to Repo:
https://github.com/InsomniYak28/Group_project_3.git
