export const environment = {
    //En environment.prod.ts lo pondriamos en true
    production: false,
    rutaBack: 'http://localhost:8080/api/',
    enableDebug: true,
    logLevel: 'debug',
    useMockData: false,
    features: {
        enableChat: true,
        //En environment.prod.ts lo pondriamos en true
        enableAnalytics: false
    }
};
