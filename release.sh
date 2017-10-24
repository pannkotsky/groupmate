#!/usr/bin/env bash

pushd frontend
npm run build
popd
python manage.py collectstatic --noinput
python manage.py migrate --noinput
