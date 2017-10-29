# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-10-29 07:42
from __future__ import unicode_literals

import common.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='emailuser',
            name='phone',
            field=common.fields.PhoneField(error_messages={'unique': 'That phone number is already taken.'}, max_length=15, null=True, unique=True),
        ),
    ]
