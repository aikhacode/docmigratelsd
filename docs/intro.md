---
sidebar_position: 1
slug: /
---

# Intro

Abstract Class Migration Kit untuk melakukan :
- Interaksi migrasi dan operasi table secara **ORM dan Query** di class database **$wpdb wordpress** 
- Interaksi Impor & Ekspor table database dengan format csv dan json

Contoh penggunaan class Migration
```shell

class Report extends Migration
{
    protected static $table_name;
}

```
# Setting minimal Server Php
Penggunaan class ini menganut konsep OOP pada php.
Setting minimal ideal ( php.ini ) di php server hosting untuk melakukan proses migrasi > 1 Million row yang disarankan adalah :
```text title="edit php.ini"
...
max_execution_time = 120
...
memory_limit = 512M
...
```


