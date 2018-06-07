<?php
 echo '<h1>Сторінки</h1>';
$dirs = glob('*.html');

$homepage = file_get_contents('/');
echo $homepage;

//print_r( $dirs);
foreach($dirs as $dir){
  echo '<a href = "./'.$dir.'">'.$dir.'</a><br />';
}