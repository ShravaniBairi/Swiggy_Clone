
export const filterRestuarants = (searchText, listOfRestuarants) => {
    const lowerData = searchText.toLowerCase();
    const data = listOfRestuarants.filter((restuarants)=> restuarants?.info?.name?.toLowerCase().includes(lowerData));

    return data;
  }

  