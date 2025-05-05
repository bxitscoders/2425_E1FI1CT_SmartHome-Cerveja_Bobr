export type user = {
    _id: string,
    permission_level: number,
    email: string,
    password: string
}

export type daemon = {
    _id: string,
    auth_token: string,
    polling_rate: number
}