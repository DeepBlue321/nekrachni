export const envEnum = {
    PROD: "PROD",
    DEV: "DEV",
    MOCKUP: "MOCKUP",
};
export const env = envEnum.MOCKUP;


export function devConsoleLogs(string) {
    if (env != envEnum.PROD){
        console.log(string)
    }
}

export function devConsoleErrors(string, error) {
    if (env != envEnum.PROD){
        console.error(string, error)
    }
}
