# Generated by Django 3.1.1 on 2020-11-04 08:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('boards', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Person',
            new_name='Board',
        ),
    ]