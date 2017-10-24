#!/usr/bin/env bash

pushd frontend
npm install && npm run build
popd
python manage.py collectstatic --noinput
python manage.py migrate --noinput
