<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 3 - Tabuada com PHP</title>
</head>
<body>
    <h1>Exercício 3 - Tabuada calculada no servidor</h1>

    <form method="GET" action="">
        <label for="numero">Digite um número:</label>
        <input type="number" id="numero" name="numero" min="0" max="100"
               value="<?= htmlspecialchars($_GET['numero'] ?? '1', ENT_QUOTES, 'UTF-8') ?>" required>
        <button type="submit">Calcular tabuada</button>
    </form>

    <?php
    if (isset($_GET["numero"]) && $_GET["numero"] !== "") {
        $numero = filter_var($_GET["numero"], FILTER_VALIDATE_INT);

        if ($numero !== false && $numero >= 0 && $numero <= 100) {
            echo "<h2>Tabuada do " . $numero . "</h2>";
            echo "<ul>";
            for ($i = 0; $i <= 10; $i++) {
                $resultado = $numero * $i;
                echo "<li>" . $numero . " x " . $i . " = " . $resultado . "</li>";
            }
            echo "</ul>";
        } else {
            echo "<p>Digite um número inteiro entre 0 e 100.</p>";
        }
    }
    ?>
</body>
</html>
