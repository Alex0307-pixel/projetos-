<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 1 - Nome e sobrenome</title>
</head>
<body>
    <h1>Exercício 1 - Nome e sobrenome</h1>

    <form method="POST" action="">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required>

        <label for="sobrenome">Sobrenome:</label>
        <input type="text" id="sobrenome" name="sobrenome" required>

        <button type="submit">Enviar</button>
    </form>

    <?php
    $nome = "";
    $sobrenome = "";

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $nome = trim($_POST["nome"] ?? "");
        $sobrenome = trim($_POST["sobrenome"] ?? "");
    }
    ?>

    <h2>Dados recebidos pelo PHP</h2>
    <label for="resultadoNome">Nome:</label>
    <input type="text" id="resultadoNome"
           value="<?= htmlspecialchars($nome, ENT_QUOTES, 'UTF-8') ?>" readonly>

    <label for="resultadoSobrenome">Sobrenome:</label>
    <input type="text" id="resultadoSobrenome"
           value="<?= htmlspecialchars($sobrenome, ENT_QUOTES, 'UTF-8') ?>" readonly>
</body>
</html>
