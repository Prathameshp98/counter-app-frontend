
export const fetchCounters = async() => {
    const res = await fetch('https://counterappbackend1-prathameshpatil2812.b4a.run/get-counters')
    return res.json()
}