<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login com PHP</title>
</head>
<body>
    <h1>Tela de login - PHP</h1>

    <form method="POST" action="">
        <label for="usuario">Usuário:</label>
        <input type="text" id="usuario" name="usuario" required>

        <br><br>

        <label for="senha">Senha:</label>
        <input type="password" id="senha" name="senha" required>

        <br><br>

        <button type="submit">Entrar</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $usuario = $_POST["usuario"] ?? "";
        $senha = $_POST["senha"] ?? "";

        if ($usuario === "Joao" && $senha === "1234") {
            echo "<p>Você esta logado</p>";
        } else {
            echo "<p>Usuário ou senha errados</p>";
        }
    }
    ?>
</body>
</html>
