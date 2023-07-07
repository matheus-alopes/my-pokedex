import { FavoritePokemonContainer, LisItemLink, ListItemContainer, ListItemDescription, ListItemImage, PokemonImageTypeContainer, PokemonTypeList, PokemonType, ListItemName } from "./styles"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState, useEffect } from "react"
import { FavoritesContext } from "../../contexts/favorites-provider"

export const Pokemon = (props) => {
  const { favoritePokemonsIds, toggleFavorite } = useContext(FavoritesContext)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(
    () => {
      setIsFavorite(
        favoritePokemonsIds.includes(props.id)
      )
    }
    , 
    [favoritePokemonsIds, props.id]
  )

  const handleToggleFavorite = () => {
    if(favoritePokemonsIds.length <= 11) {
      toggleFavorite(props.id)
      setIsFavorite(!isFavorite)
    } 

    if(favoritePokemonsIds.length >= 11 && isFavorite) {
      toggleFavorite(props.id)
      setIsFavorite(!isFavorite)
    }

    if(favoritePokemonsIds.length > 11 && !isFavorite) {
      window.alert("You can only have 12 favorite Pokémon")
    }
  }

  return (
    <ListItemContainer>
      <FavoritePokemonContainer>
        <FontAwesomeIcon
          icon={faStar}
          style={{
            color: isFavorite ? "yellow" : "var(--button-background-color)"
          }}
          onClick={handleToggleFavorite}
        />
      </FavoritePokemonContainer>

      <Link
        to={`/pokemon/${props.id}`}
        onClick={localStorage.setItem("pageCounter", props.listPage)}
      >
        <LisItemLink>
          <PokemonImageTypeContainer>
            <ListItemImage image={props.image} />

            <PokemonTypeList>
              {
                props.type && props.type.map(
                  type => <PokemonType key={type.slot}>{type.type.name}</PokemonType>
                )
              }
            </PokemonTypeList>
          </PokemonImageTypeContainer>

          <ListItemName>{props.name}</ListItemName>
          <ListItemDescription>{props.description}</ListItemDescription>
        </LisItemLink>
      </Link>
    </ListItemContainer>
  )
}