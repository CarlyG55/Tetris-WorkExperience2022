import { ApiRouterBuilder } from './apiRouterBuilder.js'
import { exampleEndpoint } from './endpoints/exampleEndpoint.js'
import { UserDataEndpoint } from './endpoints/UserDataEndpoint.js'

const routerBuilder = new ApiRouterBuilder()
routerBuilder.addGetEndpoint('/', exampleEndpoint)
routerBuilder.addGetEndpoint('/leaderboard', UserDataEndpoint)

export const apiRouter = routerBuilder.router