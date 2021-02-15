export const getPageQueryParameters = () => {
    const urlParams = window.location.search
    const params = urlParams.replace('?', '').split('&')

    return params.reduce((acc, cur) => {
        const keyVal = cur.split('=')
        return {
            ...acc,
            ...Object.fromEntries([ keyVal ])
        }
    }, {})
}