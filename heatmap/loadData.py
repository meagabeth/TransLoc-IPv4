# import psycopg2

# conn = psycopg2.connect("host=localhost dbname=addressData user=meagabeth")
# cur = conn.cursor()
# cur.execute("""
# CREATE TABLE addressData(
#   network inet PRIMARY KEY,
#   geoname_id integer,
#   registered_country_geoname_id integer,
#   represented_country_geoname_id integer,
#   is_anonymous_proxy integer,
#   is_satellite_provider integer,
#   postal_code integer,
#   latitude decimal,
#   longitude decimal,
#   accuracy_radius integer
# )
# """)

# with open('test.csv', 'r') as f:
#   next(f)
#   cur.copy_from(f, "postgresql", sep=',')

# conn.commit()

import csv

with open('test.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if line_count == 1:
            print(f'Column names are {", ".join(row)}')
            line_count += 1
        else:
            line_count += 1
    print(f'Processed {line_count} lines.')