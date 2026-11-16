<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 2 - Salvar nomes</title>
</head>
<body>
    <h1>Exercício 2 - Nome, sobrenome e arquivo</h1>

    <form method="POST" action="">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required>

        <label for="sobrenome">Sobrenome:</label>
        <input type="text" id="sobrenome" name="sobrenome" required>

        <button type="submit">Enviar e salvar</button>
    </form>

    <?php
    $nome = "";
    $sobrenome = "";
    $mensagem = "";

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $nome = trim($_POST["nome"] ?? "");
        $sobrenome = trim($_POST["sobrenome"] ?? "");

        if ($nome !== "" && $sobrenome !== "") {
            $linha = $nome . " " . $sobrenome . PHP_EOL;
            $arquivo = fopen(__DIR__ . "/nomes.txt", "a");

            if ($arquivo) {
                if (flock($arquivo, LOCK_EX)) {
                    fwrite($arquivo, $linha);
                    flock($arquivo, LOCK_UN);
                    $mensagem = "Nome salvo no arquivo nomes.txt!";
                } else {
                    $mensagem = "Não foi possível bloquear o arquivo para gravação.";
                }
                fclose($arquivo);
            } else {
                $mensagem = "Não foi possível abrir o arquivo nomes.txt.";
            }
        }
    }
    ?>

    <h2>Dados recebidos pelo PHP</h2>
    <label for="resultadoNome">Nome:</label>
    <input type="text" id="resultadoNome"
           value="<?= htmlspecialchars($nome, ENT_QUOTES, 'UTF-8') ?>" readonly>

    <label for="resultadoSobrenome">Sobrenome:</label>
    <input type="text" id="resultadoSobrenome"
           value="<?= htmlspecialchars($sobrenome, ENT_QUOTES, 'UTF-8') ?>" readonly>

    <p><?= htmlspecialchars($mensagem, ENT_QUOTES, 'UTF-8') ?></p>
</body>
</html>
