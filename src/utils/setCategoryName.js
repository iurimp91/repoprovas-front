export default function setCategoryName(category) {
    if (category === "P1") {
        return "Prova 1";
    } else if (category === "P2") {
        return "Prova 2";
    } else if (category === "P3") {
        return "Prova 3";
    } else if (category === "2ch") {
        return "Prova Segunda Chamada";
    } else {
        return "Outras";
    }
}
