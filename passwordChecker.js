const validatePassword = (s) => {
    const MINIMUM_LENGTH = 6;
    const MAXIMUM_LENGTH = 20;
    let counter = 0;

    if (s.length < MINIMUM_LENGTH) {
        /* parola nu indeplineste lunigimea minima necesara. Numarul minim de modificari necesare pentru ca parola sa
        fie valida este diferenta dintre valoarea minima valida (6) si lungimea curenta a parolei */
        counter = MINIMUM_LENGTH - s.length;
    } else if (s.length > MAXIMUM_LENGTH) {
        /* parola nu indeplineste lunigimea maxima necesara. Numarul minim de modificari necesare pentru ca parola sa
        fie valida este diferenta dintre lungimea curenta a parolei si valoarea maxima valida (20) */
        counter = s.length - MAXIMUM_LENGTH;
    }

    // verificam daca parola contine cel putin o litera mica
    if (!(/[a-z]/.test(s))) {
        // parola nu contine nicio litera mica, asa ca e nevoie de cel putin o modificare pentru a fi valida
        counter++;
    }

    // verificam daca parola contine cel putin o litera mare
    if (!(/[A-Z]/.test(s))) {
        // parola nu contine nicio litera mare, asa ca e nevoie de cel putin o modificare pentru a fi valida
        counter++;
    }

    // verificam daca parola contine cel putin o cifra
    if (!(/[0-9]/.test(s))) {
        // parola nu contine nicio cifra, asa ca e nevoie de cel putin o modificare pentru a fi valida
        counter++;
    }

    const splitted = s.split("");


    for (let i = 0; i < splitted.length - 2; i++) {
        // verificam ca parola sa nu contina 3 caractere egale consecutive
        const currentChar = splitted[i];
        const nextChar = splitted[i + 1];
        const afterNextChar = splitted[i + 2];

        if (currentChar === nextChar && nextChar === afterNextChar) {
            counter++
        }
    }


    if (counter === 0) {
        console.log("Vaild password!");
    } else {
        console.log("A minimum of " + counter + " change(s) are required")
    }
}

// Parola valida - se va afisa mesajul "Valid password"
validatePassword("abcDEF1")

// Parola cu lungimea mai mica decat 6 caractere - se va afisa mesajul "A minimum of 2 change(s) are required"
validatePassword("abC1")

// Parola cu lungimea mai mare decat 20 caractere - se va afisa mesajul "A minimum of 3 change(s) are required"
validatePassword("abcdefGHIGJKL1234567890")

// Parola fara litere mici - se va afisa mesajul "A minimum of 1 change(s) are required"
validatePassword("ABCDEF1")

// Parola fara litere mari - se va afisa mesajul "A minimum of 1 change(s) are required"
validatePassword("abcdef1")

// Parola fara cifre - se va afisa mesajul "A minimum of 1 change(s) are required"
validatePassword("abcdeFG")
