import express from 'express'
import { fileURLToPath } from 'url'
import path from 'path'
import { apiRouter } from './api/apiRouter.js'

/*
This is the entry point of our application.
We use a library called Express to set up our web server.
*/

// Create the app
const app = express()

// Set the port we use to receive incoming web traffic.
// On the live server, Heroku sets the port in an environment variable.
// For development, we use port 3000.
const port = process.env.PORT || 3000

// Find path of client directory
const getClientDirectory = () => {
    const currentModuleFile = fileURLToPath(import.meta.url)
    const currentModuleDirectory = path.dirname(currentModuleFile)
    return path.join(currentModuleDirectory, '../../frontend/pages')
}

const getStylesDirectory = () => {
    const currentModuleFile = fileURLToPath(import.meta.url)
    const currentModuleDirectory = path.dirname(currentModuleFile)
    return path.join(currentModuleDirectory, '../../frontend/styles')
}

const getScriptsDirectory = () => {
    const currentModuleFile = fileURLToPath(import.meta.url)
    const currentModuleDirectory = path.dirname(currentModuleFile)
    return path.join(currentModuleDirectory, '../../frontend/scripts')
}

// All files in the frontend directory available at "<siteurl>/<filename>"
app.use('/', express.static(getClientDirectory(), { extensions: ['html'] }))
app.use('/static/styles/', express.static(getStylesDirectory()))
app.use('/static/scripts/', express.static(getScriptsDirectory()))

// API endpoints available at "<siteurl>/api/<endpoint>"
app.use('/api', apiRouter)

// Receive incoming traffic
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})