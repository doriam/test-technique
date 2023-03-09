const getAllFunctions = require("./functions").default;
const op = new getAllFunctions();

//Test function annee_bissextile()
test("Retourne 365 pour l'année 2023 car elle n'est pas bissextile", () => {

    expect(op.annee_bissextile(2023)).toBe(365);

});

//Test function annee_bissextile()
test("Retourne 366 pour l'année 2024 car est bissextile", () => {

    expect(op.annee_bissextile(2024)).toBe(366);

});

//Test function samEtdim()
test("Retourne 104 pour la quantité de samedis et dimanches dans l'année 2020 ", () => {

    expect(op.samEtdim(2020)).toBe(104);

});

//Test function samEtdim()
test("Retourne 105 pour la quantité de samedis et dimanches dans l'année 2023 ", () => {

    expect(op.samEtdim(2023)).toBe(105);

});

//Test function jours_feries()
test("Retourne 9 pour la quantité de jours fériés ne tombant pas le week-end dans l'année 2020 ", () => {

    expect(op.jours_feries(2020)).toBe(9);

});

//Test function jours_feries()
test("Retourne 9 pour la quantité de jours fériés ne tombant pas le week-end dans l'année 2023 ", () => {

    expect(op.jours_feries(2023)).toBe(9);

});

//Test function jours_rtt();
test("Retourne le nombre de jours de RTT de l'année 2020", () => {

    expect(op.jours_rtt(2020, 218, 25)).toBe(10);

});

//Test function jours_rtt();
test("Retourne le nombre de jours de RTT de l'année 2023", () => {

    expect(op.jours_rtt(2023, 218, 25)).toBe(8);

});