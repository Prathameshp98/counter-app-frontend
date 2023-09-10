
export const saveCounters = async(rawData: any) => {

    const data = rawData.map((each: any) => {
        return {counterId: each.id, name: each.name, value: each.value}
    })

    const requiredData = {
        data: data
    }

    console.log(data)

    const res = await fetch('https://counterappbackend1-prathameshpatil2812.b4a.run/save-counters',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requiredData),
    })
    return await res.json()
}