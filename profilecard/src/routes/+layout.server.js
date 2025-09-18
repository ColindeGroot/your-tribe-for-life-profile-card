export async function load() {
  const userData = await fetch('https://fdnd.directus.app/items/person/149');
  const userDataResponse = await userData.json();

  console.log(userDataResponse);


  // filter fav items eruit zodat ik deze met een loop kan weergeven in een van de slides
  // bestaat uit een onderwerp en de content die erbij hoort (subject,content)
  const favFilters = [
    ["fav_property", "Property"],
    ["fav_kitchen", "Gerecht"],
    ["fav_book_genre", "Genre"],
    ["fav_country", "Land"],
    ["fav_coffee", "Koffie"],
    ["fav_emoji", "Emoji"]
  ];

  return { user: userDataResponse.data, fav: favFilters };
}



