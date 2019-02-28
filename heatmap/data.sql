DROP TABLE IF EXISTS heatmap_location;

CREATE TABLE heatmap_location (
  id SERIAL NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  frequency INTEGER NOT NULL
);

-- CSV into temporary table with all data

CREATE TEMP TABLE alldata (
   network TEXT,
   geoname_id FLOAT,
   registered_country_geoname_id FLOAT,
   represented_country_geoname_id FLOAT,
   is_anonymous_proxy FLOAT,
   is_satellite_provider FLOAT,
   postal_code TEXT,
   latitude FLOAT,
   longitude FLOAT,
   accuracy_radius FLOAT
);

-- from temporary table, copy only the data from latitude and longitude columns into new table

\copy alldata FROM './Geolite2-City-Blocks-IPv4.csv' CSV HEADER;

INSERT INTO heatmap_location (latitude, longitude, frequency)
SELECT latitude, longitude, Count(*) as frequency
FROM alldata
WHERE latitude IS NOT NULL
AND longitude IS NOT NULL
GROUP BY latitude, longitude

-- SELECT MAX(frequency) FROM heatmap_location