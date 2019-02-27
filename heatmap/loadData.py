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
import json

# with open('test.csv') as csv_file:
#     csv_reader = csv.reader(csv_file, delimiter=',')
#     line_count = 0
#     for row in csv_reader:
#         if line_count == 1:
#             print(f'Column names are {", ".join(row)}')
#             line_count += 1
#         else:
#             line_count += 1
#     print(f'Processed {line_count} lines.')
    # col_num = 0
    # for column in row:
    #   if col_num == 1:
    #     print(f'Column contains {column}')
    #     col_num += 1
    #   else: 
    #     col_num += 1
    # print(column[1])

lat_list = []

with open('test.csv') as test:
  reader = csv.reader(test)
  for eachline in reader:
    lat_list.append(eachline)

print(lat_list[2])

csvfile = open('test.csv', 'r')
jsonfile = open('test.json', 'w')

fieldnames = ("IPnetwork", "col2", "col3", "col4")
read = csv.DictReader(csvfile, fieldnames)
for line in read:
  json.dump(line, jsonfile)
  jsonfile.write('/n')