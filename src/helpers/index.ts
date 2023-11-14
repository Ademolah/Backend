//using authentication helpers to help encrypt password or decrypt a random token
import crypto from "crypto"
import "dotenv/config"

const SECRET = process.env.SECRET

//creating the randomizer
export const random = () => crypto.randomBytes(128).toString('base64')
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex')
}