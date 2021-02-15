export const exampleEndpoint = (request) => {
    console.log(`Request: ${JSON.stringify(request)}`)
    return { message: "Hello World!" }
}