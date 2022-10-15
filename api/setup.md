. Configure the httpd.conf file

Run:
    $docker-compose up

To Open terminal on instance run:
    $docker container exec -it apache-server /bin/bash

Set https:
    1. Listen 443 (configure on httpd.conf)
    2. Got to https://certbot.eff.org/ and follow the instructions there
    