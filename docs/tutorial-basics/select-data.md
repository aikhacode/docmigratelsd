---
sidebar_position: 2
---

# Select, Insert, Update, Delete Data from table

Untuk penggunaan select data / field pada table yg sudah didefinisikan  

## Get Table name
```jsx
$table_name = $report->get_table_name();
```

## Select data

```jsx
  ...
  $report = new Report();
  $hasil = $report->get();  // All data
  $hasil = $report->get(3); // Get data dengan id=3 
  ...
```
## Insert Data
```jsx
  ...
    $last_insert_id = $report->insert([
    'name'  => '...',
    'title' => '...'
      ]);
// or multiple insert dengan array 
    $last_insert_id = $report->insert([[
      'name'  => '...',
      'title' => '...'
    ], [
      'name'  => '...',
      'title' => '...'
    ]]);
  ...
```
## Update data
```
...
  $report->update([
    'field_name1'  => 'field_value1',
    'field_name2' => 'field_value1',
    ... // dan field name yag lainnya bila diperlukan
  ]);
...
```
# Using Query
Menggunakan query untuk interaksi operasi database
```
  ...
  $query = $report->query()
  ... -> custom query
  ->execute();
  ...
```  
## Where for search
```
$userInput = '20%';
$report->query()
  ->delete()
  ->where('name', 'like', '%pattern%') // pattern search where
  ->execute();
```
## Select query
```
  $report->query()
  ->select('id', 'name')
  ->get();
```
## Delete query
```
  $report->query()
  ->delete()
  ->where('name', 'wp')
  ->execute();
``` 
## Group, having, limit query
```
  $report->query()
  ->group_by('name')
  ->having(["SUM(price)"], ">", 10) // raw column value dalam array
  ->get();
```
## Limit Offset query
```
  $report->query()
  ->limit(5)
  ->offset(10)
  ->order_by('description')
  ->order_by('name', 'desc')
  ->get();
```
## Direct wpdb
```
   $hasil = $report->wpdb()->get_results('SELECT * from table');
```
