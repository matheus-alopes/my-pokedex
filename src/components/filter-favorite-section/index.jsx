import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FilterFavoriteContainer, FilterFavoriteIcon, FilterFavoriteTitle } from "./styles"
import { useContext, useEffect } from "react";
import { FavoritesContext } from "../../contexts/favorites-provider";

export const FilterFavoriteSection = () => {
    const { filterFavorites, setFilterFavorites } = useContext(FavoritesContext);

    useEffect(
        ()=> {
            localStorage.setItem("filterFavorites", filterFavorites)
        }
        ,
        [filterFavorites]
    )

    function handdleFilterFavorite() {
       filterFavorites ? setFilterFavorites(false) : setFilterFavorites(true)
    }

    return (
        <FilterFavoriteContainer>
            <FilterFavoriteTitle>Filter Favorites</FilterFavoriteTitle>

            <FilterFavoriteIcon filterFavorites={filterFavorites}>
                <FontAwesomeIcon
                    icon={faStar}
                    style={
                        {
                            color: filterFavorites ? "rgb(255, 243, 50)" : "white"
                        } 
                    }
                    onClick={handdleFilterFavorite}
                />
            </FilterFavoriteIcon>
        </FilterFavoriteContainer>
    )
}