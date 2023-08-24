CREATE TABLE healthdata (
	Year integer,
	LocationAbbr VARCHAR(3),
	LocationDesc VARCHAR(50),
	Topic VARCHAR(50),
	TopicDesc VARCHAR(200),
	DataValue integer,
	Category VARCHAR(15),
	CategoryDesc VARCHAR(40),
	CategoryAbbr VARCHAR(5),
	Lat DECIMAL,
	Lon DECIMAL,
	LatLon VARCHAR(100)
);

SELECT * FROM healthdata;

