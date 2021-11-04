---
sidebar_position: 1
---

# Migration dan Impor/Ekspor 

Secara garis besar proses migration dan impor/ekspor csv/json dapat dilakukan dengan proses sbb:
- call instance turunan class migration
- definisikan method untuk proses migrasinya karena tiap proses mungkin bisa berubah gaya migrasinya maka didefinisikan tiap class turunannya masing masing
- definisikan method impor/ekspor sesuai format yang diperlukan

## Contoh Migrasi
Berikut contoh metode migrasi dari report di pecah ke pasangan meta key dan meta value 

```jsx
...
public function migrate_to_meta(Migration $table_meta)
    {
        $fields = $this->get_column_titles();

        $id = $fields[0];
        $tblname1 = $this->get_table_name();
        $tblname2 = $table_meta->get_table_name();

        $limit = 10000;
        $offset = 0;
        $rownum = $this->query()->execute("select count($id) as jml from $tblname1");


        $jmlrow = $rownum[0]['jml'];
        
        $max_execution_time = ini_get('max_execution_time');
        ini_set('max_execution_time', 0);

        while ($offset < $jmlrow) {
            $rows = $this->query()->execute("select * from $tblname1 limit $limit offset $offset");
            $data = array();
            $i = 0;
            foreach ($rows as $row) {
                $data[$i] = array(
                    'report_id' => $row['report_id'],
                    'meta_key' => 'user_id',
                    'meta_value' => $row['user_id']
                );
                $i++;
                $data[$i] = array(
                    'report_id' => $row['report_id'],
                    'meta_key' => 'program_id',
                    'meta_value' => $row['program_id']
                );
                $i++;
                $data[$i] = array(
                    'report_id' => $row['report_id'],
                    'meta_key' => 'name',
                    'meta_value' => $row['name']
                );
                $i++;
                $data[$i] = array(
                    'report_id' => $row['report_id'],
                    'meta_key' => 'messages',
                    'meta_value' => $row['messages']
                );
                $i++;
                $data[$i] = array(
                    'report_id' => $row['report_id'],
                    'meta_key' => 'date',
                    'meta_value' => $row['date']
                );
            }

            $table_meta->insert($data);


            $lendata = count($data);

            $offset = $offset + $limit;
        }

        

        ini_set('max_execution_time', $max_execution_time);
         return array(
            "fields" => $fields,
            "jml_row" => $rownum,
            
            

        );
    }
}
...
```

## Impor & Ekspor CSV

Impor csv dapat dilakukan dengan mendefinisikan instance class Impor_From_CSV dengan paramater data content dari CSV

```jsx
...
    $data = new Import_From_CSV(file_get_contents(__DIR__ . '/test/file.csv'));
    $reports->import($data);
...
```

Ekspor csv dapat dilakukan dengan mendefinisikan instance class Export_To_CSV dengan paramater data content table

```jsx
...   
    $data = new Export_To_CSV($reports->query()->get_results());
    $reports->export($data);
...
```

## Impor & Ekspor JSON

Impor json dapat dilakukan dengan mendefinisikan instance class Impor_From_JSON dengan paramater data content dari json

```jsx
...
    $data = new Import_From_JSON(file_get_contents(__DIR__ . '/test/file.json'));
    $reports->import($data);
...
```

Ekspor json dapat dilakukan dengan mendefinisikan instance class Export_To_JSON dengan paramater data content table

```jsx
...   
    $data = new Export_To_JSON($reports->query()->get_results());
    $reports->export($data);
...
```

