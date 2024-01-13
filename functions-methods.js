// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com


function getEmailDomainSplit (email) {
    return email.split("@")[1];
}

console.log (getEmailDomainSplit("n.eeken@novi-education.nl"));
console.log(getEmailDomainSplit("t.mellink@novi.nl"));
console.log(getEmailDomainSplit("a.wiersma@outlook.com"));

function getEmailDomainSubString (email) {
    let at = email.indexOf("@")
    return email.substring( at + 1)
}
console.log (getEmailDomainSubString("n.eeken@novi-education.nl"));
console.log(getEmailDomainSubString("t.mellink@novi.nl"));
console.log(getEmailDomainSubString("a.wiersma@outlook.com"));


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

// Is een switch beter of slechter, geeft een gele lijn onder de breaks?

/*function typeOfEmail (email) {
    let type = getEmailDomain(email);
    switch (email) {
        case "novi-education.nl" :
            return "Student";
            break;
        case "novi.nl" :
            return "Medewerker";
            break;
        default :
            return "Extern";
            break;
    }
}*/


function typeOfEmail (email) {
    let type = getEmailDomainSplit(email);
    if (type === "novi-education.nl") {
        return "Student";
    } else if (type === "novi.nl") {
        return "Medewerker";
    } else {
        return "Extern";
    }
}

console.log(typeOfEmail("n.eeken@novi-education.nl"))
console.log(typeOfEmail("t.mellink@novi.nl"))
console.log(typeOfEmail("novi.nlaapjesk@outlook.com"))
console.log(typeOfEmail("a.wiersma@outlook.com"))

// Fuc

/*function typeOfEmailSub (email) {
    let type = getEmailDomainSubString(email);
    if (type === "novi-education.nl") {
        return "Student";
    } else if (type === "novi.nl") {
        return "Medewerker";
    } else {
        return "Extern";
    }
}

console.log(typeOfEmailSub("n.eeken@novi-education.nl"))
console.log(typeOfEmailSub("t.mellink@novi.nl"))
console.log(typeOfEmailSub("novi.nlaapjesk@outlook.com"))
console.log(typeOfEmailSub("a.wiersma@outlook.com"))*/

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity (email) {
    // Maakt in ze geheel er een boolean van waardoor ik geen LET of IF/ELSE moet gebruiken
    return   email.includes("@") && email.endsWith(".nl") || email.endsWith(".com")  && email.includes(",") !== true ;
}

console.log(checkEmailValidity("n.eeken@novi.nl")) // geeft true
console.log(checkEmailValidity("tessmellink@novi.nl")) // geeft true
console.log(checkEmailValidity("n.eekenanovi.nl")) // geeft false
console.log(checkEmailValidity("n.eeken@novinl.")) // geeft false
console.log(checkEmailValidity("tessmellink@novi,nl")) // geeft false
console.log(checkEmailValidity("slfarmer94@gmail.com")) // geeft true