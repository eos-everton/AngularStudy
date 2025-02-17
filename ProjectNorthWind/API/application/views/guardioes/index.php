<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Lista de Guardiões</title>
</head>
<body>
    <h1>Lista de Guardiões</h1>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Título</th>
            <th>Raça</th>
            <th>Forma Animal</th>
            <th>Descrição</th>
            <th>Imagem</th>
        </tr>
        <?php foreach ($guardiões as $guardiao): ?>
        <tr>
            <td><?= $guardiao['id'] ?></td>
            <td><?= $guardiao['nome'] ?></td>
            <td><?= $guardiao['titulo'] ?></td>
            <td><?= $guardiao['raca'] ?></td>
            <td><?= $guardiao['forma_animal'] ?: 'N/A' ?></td>
            <td><?= $guardiao['descricao'] ?></td>
			<td><?= $guardiao['images']  ?></td>
        </tr>
        <?php endforeach; ?>
    </table>
</body>
</html>
