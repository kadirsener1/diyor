<?php
header("Content-Type: application/json");

// API KEY BURAYA
$apiKey = "sk-proj-6tT_WHG08hYwgvnIAL_4G7k9cdufFCFY6UFfpVgotZajoS1rXBcWoDlA2rgaLpO3yaBJVgI9gPT3BlbkFJ6kCfsztGEqkcAGXtv0mdc5m_rVRC16VPEhjHJlyqmdbciwnHyfaL7tjJgJx97O6MQqimj6HeIAA";

$data = json_decode(file_get_contents("php://input"), true);

$kitap = $data["kitap"] ?? "";
$yazar = $data["yazar"] ?? "";

if (!$kitap || !$yazar) {
    echo json_encode(["error" => "Eksik veri"]);
    exit;
}

$prompt = "\"$kitap\" adlı kitap ($yazar) için kısa yorum yap:

📖 Konu:
🎭 Tür:
🎓 Seviye:
⭐ Puan (1-5):

Kısa ve net yaz.";

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://api.openai.com/v1/chat/completions");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);

curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer $apiKey"
]);

curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    "model" => "gpt-4o-mini",
    "messages" => [
        ["role" => "user", "content" => $prompt]
    ],
    "temperature" => 0.7
]));

$result = curl_exec($ch);

if (curl_errno($ch)) {
    echo json_encode(["error" => curl_error($ch)]);
    exit;
}

curl_close($ch);

$response = json_decode($result, true);

if (isset($response["error"])) {
    echo json_encode(["error" => $response["error"]["message"]]);
    exit;
}

echo json_encode([
    "cevap" => $response["choices"][0]["message"]["content"]
]);
