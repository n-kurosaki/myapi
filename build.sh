#!/usr/bin/env bash
docker login
docker build -t myapi:1.0 .
