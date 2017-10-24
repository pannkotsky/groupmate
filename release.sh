#!/usr/bin/env bash

pushd frontend
npm run build
pwd
python manage.py collectstatic --noinput
python manage.py migrate --noinput
