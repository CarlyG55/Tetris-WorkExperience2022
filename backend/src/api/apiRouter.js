import { ApiRouterBuilder } from './apiRouterBuilder.js'
import { exampleEndpoint } from './endpoints/exampleEndpoint.js'

const routerBuilder = new ApiRouterBuilder()
routerBuilder.addGetEndpoint('/', exampleEndpoint)

export const apiRouter = routerBuilder.router