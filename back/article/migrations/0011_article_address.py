# Generated by Django 3.1 on 2020-08-25 12:22

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0010_auto_20200816_2320'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='address',
            field=models.TextField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
