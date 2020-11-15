# Generated by Django 3.1.1 on 2020-11-15 16:49

import boards.models
from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Board',
            fields=[
                ('id', models.UUIDField(default=uuid.UUID('92f9af84-6909-421a-bff6-43c55117d5a5'), editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=50)),
                ('description', models.TextField(blank=True)),
                ('content', models.JSONField(default=boards.models.defult_dict)),
            ],
        ),
    ]
