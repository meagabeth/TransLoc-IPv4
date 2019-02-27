
CREATE TABLE addressData (
   network inet PRIMARY KEY,
   geoname_id integer,
   registered_country_geoname_id integer,
   represented_country_geoname_id integer,
   is_anonymous_proxy integer,
   is_satellite_provider integer,
   postal_code integer,
   latitude decimal,
   longitude decimal,
   accuracy_radius integer,
);

COPY addressData FROM 'test.csv' HEADER

INSERT INTO addressData (latitude, longitude)