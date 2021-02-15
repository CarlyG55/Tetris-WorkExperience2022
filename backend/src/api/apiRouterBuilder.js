import express from 'express'

export class ApiRouterBuilder {
    constructor() {
        this.router = express.Router()
        this.router.use(express.json())
    }

    addGetEndpoint(path, handler) {
        this.router.get(path, (req, res) => {
            res.json(handler(req.body))
        })
    }

    addPostEndpoint(path, handler) {
        this.router.post(path, (req, res) => {
            handler(req.body)
            res.send('OK')
        })
    }
}