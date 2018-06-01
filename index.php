<?php

$dirs = array_filter(glob('*'), 'is_dir');
//print_r( $dirs);

echo "<h1>НАШИ ПРОЕКТЫ ПО ВЕРТСКЕ</h1>";
foreach($dirs as $dir){
  echo '<a href = "/'.$dir.'">'.$dir.'</a><br />';
}