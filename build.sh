#!/usr/bin/env bash
docker login
docker build -t myapi:1.0 .
docker tag myapi:1.0 nkurosaki/myapi:1.0
docker push nkurosaki/myapi:1.0
