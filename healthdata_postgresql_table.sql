CREATE TABLE healthdata (
	YearStart integer,
	YearEnd integer,
	LocationAbbr VARCHAR(3),
	LocationDesc VARCHAR(50),
	Topic VARCHAR(50),
	TopicDesc VARCHAR,
	DataValue integer,
	Category VARCHAR(15),
	CategoryDesc VARCHAR(40),
	GeoLocation VARCHAR,
	CategoryAbbr VARCHAR(6)
);

SELECT * FROM healthdata;

