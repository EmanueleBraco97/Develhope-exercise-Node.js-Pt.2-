import cors from 'cors';

export function initCorsMiddleware(){
    const corsOptions = {
        origin: "http://localhost:8080",
        credential: true
    };

    return cors(corsOptions);
}
