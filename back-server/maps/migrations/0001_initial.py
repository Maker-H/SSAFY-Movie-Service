# Generated by Django 3.2.18 on 2023-05-25 00:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Map',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sido', models.CharField(max_length=100)),
                ('gusi', models.CharField(max_length=100)),
                ('dong', models.CharField(max_length=100)),
                ('nx', models.IntegerField()),
                ('ny', models.IntegerField()),
                ('longitude', models.FloatField()),
                ('latitude', models.FloatField()),
            ],
        ),
    ]
