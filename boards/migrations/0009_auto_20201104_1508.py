# Generated by Django 3.1.1 on 2020-11-04 12:08

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('boards', '0008_auto_20201104_1222'),
    ]

    operations = [
        migrations.AlterField(
            model_name='board',
            name='id',
            field=models.UUIDField(default=uuid.UUID('5082854f-4676-456a-be3a-e1438cb7e2ed'), editable=False, primary_key=True, serialize=False),
        ),
    ]
