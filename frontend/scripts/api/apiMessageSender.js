const protocol = window.location.protocol
const hostname = window.location.hostname
const port = protocol.startsWith('https') ? "443" : window.location.port
const apiUrl = `${protocol}//${hostname}:${port}/api`
console.log(apiUrl)

class ApiMessageSender {
    async get(path) {
        const content = {
            method: 'GET'
        }
        return this.send(path, content)
    }

    async post(path, req) {
        const content = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req)
        }
        return this.send(path, content)
    }

    async send(path, content) {
        let res = await fetch(`${apiUrl}${path}`, content)
        return res.json()
    }
}

export const apiMessageSender = new ApiMessageSender()