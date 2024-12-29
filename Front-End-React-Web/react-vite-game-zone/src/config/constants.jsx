const environment = "production"
export const constant = {
    URL: (environment == 'production' ? {
        api: 'http://192.168.1.7:3000',
        socket: 'http://192.168.1.7:3000',
        web: 'http://192.168.1.7:3000',
    } : {
        api: 'http://192.168.1.7:3000',
        socket: 'http://192.168.1.7:3000',
        web: 'http://192.168.1.7:3000',
    }),
}