//session servono per archiviare temporaneamente i dati di un utente specifico, quindi è essenziale per aggiungere autenticazione alla nosta API//

import session from "express-session";

import config from "../../config";

export function initSessionMiddleware(appEnvironment: string) {

    const isProduction = appEnvironment === "production";

    return session({
        secret: config.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: isProduction,
        },
        proxy: isProduction,
    });
}
