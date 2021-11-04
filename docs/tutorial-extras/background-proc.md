---
sidebar_position: 2
---

# Background Process

Untuk mensimulasikan background process migrasi di dalam plugin wordpress, salah satu metode yang bisa digunakan adalah menggunakan metode admin-ajax.php yang telah disediakan di halaman admin wordpress. Dimana dalam ajax call bersifat async sehingga bisa dimanfaatkan untuk simulasi background process.
```jsx title="Init action dalam plugin"
<?php
   add_action('wp_ajax_my_action', 'my_action');
   add_action('wp_ajax_nopriv_my_action', 'my_action');

   function my_action(){
       ...
   }
```

## JQUERY Ajax
Untuk pemanggilan async ajax kita manfaatkan library jquery yang telah disediakan/diload secara default di wordpress 

contoh:
```js
...
    jQuery.ajax({
            url: ajaxurl,
            dataType: 'json',
            type: 'POST',
            data: {
                action: 'my_action',
                atype: 'get_arr_titles',
                fname: curr_table_name
            }
        })
...
```
## Definisikan admin-ajax.php Function

supaya admin-ajax dapat berkomunikasi dengan plugin maka definisikan kebutuhan function yang diperlukan. Contoh:

```jsx
...
function my_action()
    {
        if (isset($_GET['atype'])) $atype = $_GET['atype'];
        elseif (isset($_POST['atype']))  $atype = $_POST['atype'];

        $response = array();
        switch ($atype) {

            case 'get_data':
              $response = $this->get_data();
            break;
            ... // method lain yang diperlukan 
            
        }

        header('Content-Type: application/json');
        echo json_encode($response);
        exit();
    }
...
```

