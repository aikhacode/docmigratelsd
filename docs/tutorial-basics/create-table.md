---
sidebar_position: 1
---

# Create table

Sebelum menggunakan di plugin, sebaiknya panggil semua require class di directory `dbcore` dengan `bootstrap.php` yang telah tersedia 
```
require 'dbcore/bootstrap.php';
...
```
## Class Definisi
Setelah itu definisikan namespace LSD\Migration + table class turunan dari class migration beserta nama table dan definisi schema structur table di database wordpress. Contoh:
```jsx
<?php

namespace LSD\Migration;

class Report extends Migration
{
    protected static $table_name;

    public function __construct()
    {
        static::$table_name = 'lsddonation_reports';
        $this->version = '0.1';
        $this->create_table();
    }

    public function create_table()
    {
        require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        
        $sql = "CREATE TABLE " . static::get_table_name() . " (
        report_id bigint(20) NOT NULL AUTO_INCREMENT,
        user_id bigint(20) NOT NULL,
        program_id bigint(20) NOT NULL,
        name mediumtext NOT NULL,
        ... -> dan field lainnya yg akan didefinisikan
        PRIMARY KEY  (report_id)
    ) CHARACTER SET utf8 COLLATE utf8_general_ci;";

    dbDelta($sql);
    update_option('lsdd_migration_db_version', $this->version);
}

``` 
## Instance Class
Setelah terdefinisi semua schema struktur table maka sebaiknya memberi instance class dengan operator **new** supaya dapat digunakan dengan baik mengingat banyak di dalam class menggunakan operator **$this->...** Contoh:
```jsx
$report = new Report();
```

## Drop Table
Class turunan dapat di drop tablenya
```
   ...
   $report->drop_table();
   ...
```

## Empty Table
Class turunan dapat di empty tablenya

```
   ...
   $report->empty_table();
   ...
```


