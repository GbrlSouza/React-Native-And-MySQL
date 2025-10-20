<?php
include_once('conexao.php');

$query = $pdo -> query('select * from usuarios ');
$resulte = $query -> fetchAll(PDO::FETCH_ASSOC);

for ($i = 0; $i < count($resulte); $i++) {
    foreach ($resulte[$i] as $key => $value) {
        $dados[] = array(
            'id' => $resulte[$i]['id'],
            'nome' => $resulte[$i]['nome'],
            'email' => $resulte[$i]['email'],
            'senha' => $resulte[$i]['senha']
        );
    }
}