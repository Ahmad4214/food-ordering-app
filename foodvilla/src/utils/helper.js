export const filteredData = ( inputText, restaurant )=>{
    const newfilteredData = restaurant.filter((res)=>{
        return res?.info?.name?.toLowerCase().includes(inputText.toLowerCase())
    })
    return newfilteredData
}