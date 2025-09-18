export async function load(){
    const userData = await fetch ('https://fdnd.directus.app/items/person/149')
    const userDataResponse = await userData.json()

    console.log(userDataResponse)

    return { user: userDataResponse.data}
}

const favFilters = [
    ["fav_property",'Property'],
    ["fav_kitchen",'Gerecht'],
    ["fav_book_genre",'Genre'],
    ["fav_country",'Land'],
    ["fav_coffee",'Koffie'],
    ["fav_emoji",'Emoji']
];

console.log(favFilters)