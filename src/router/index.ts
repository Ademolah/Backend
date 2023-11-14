import express from "express"

import authentication from "./authentication"

const router = express.Router()

export default (): express.Router => {
    authentication(router)

    return router
}

// export default (router: express.Router) => {
//     return router
// }