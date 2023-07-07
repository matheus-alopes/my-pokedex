import styled, {css} from "styled-components"
import interrogation from "../../assets/images/interrogation.png"

const ListItemContainer = styled.li`
  width: 500px;
  max-height: 333px;
  margin: 15px 0;
  padding: 15px 0 0 15px;
  background-color: var(--pokemon-list-container-color);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  &:hover {
    box-shadow: var(--box-shadow) 0px 5px 15px;
    transition: 0.3s ease-in-out;
  }
  @media (max-width: 1350px) {
    width: 400px;
    padding: 12px 0 0 12px;
  };
  @media (max-width: 1100px) {
    width: 90%;
  };
  @media (max-width: 650px) {
    max-height: 200px;
  };
  @media (max-width: 400px) {
    width: 80%;
    padding: 20px 10px 0 10px;
  };
`

const FavoritePokemonContainer = styled.div`
  font-size: 28px;
  position: absolute;
  top: 4px;
  right: 10px;
  @media (max-width: 1350px) {
    font-size: 24px;
  };
  @media (max-width: 650px) {
    font-size: 22px;
  };
`

const LisItemLink = styled.div`
  height: 100%;
  display: grid;
  grid-template-areas: "img-type name"
                      "img-type description"; 
  @media (max-width: 400px) {
    grid-template-areas: "name name"
                         " img-type img-type";
  };
`

const PokemonImageTypeContainer = styled.div`
  grid-area: img-type;
  min-width: 160px;
  margin: 0 auto 15px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 650px) {
    min-width: 120px;
  };
  @media (max-width: 400px) {
    flex-direction: row;
    gap: 10px;
  };
`

const ListItemImage = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 1.5px solid var(--pokemon-list-image-border-color);
  ${
    props => `background-image: url(${props.image})`
  };
  background-repeat: no-repeat;
  background-size: contain;
  ${
    props => props.image == interrogation && css `background-size: 40%`
  };
  background-color: var(--pokemon-list-image-container-color);
  background-position: center;
  @media (max-width: 1350px) {
    width: 120px;
    height: 120px;
  };
  @media (max-width: 650px) {
    width: 100px;
    height: 100px;
  };
  @media (max-width: 500px) {
    width: 90px;
    height: 90px;
  };
`

const PokemonTypeList = styled.ul`
    margin-top: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 3;
    @media (max-width: 650px) {
      gap: 6px;
    };
    @media (max-width: 400px) {
      margin-top: 0;
      flex-wrap: wrap;
    };
`

const PokemonType = styled.li`
    padding: 3px 5px;
    border: 1px solid var(--pokemon-list-image-border-color);
    border-radius: 5px;
    background-color: var(--pokemon-list-description-container-color);
    color: var(--pokemon-list-description-font-color);
    @media (max-width: 1350px) {
      font-size: 14px;
    };
    @media (max-width: 650px) {
      padding: 2px 4px;
      font-size: 12px;
    };
`

const ListItemName = styled.p`
  grid-area: name;
  margin-top: 8px;
  padding: 15px 3px 0 15px;
  font-weight: bold;
  font-size: 28px;
  word-break: break-word;
  color: var(--pokemon-list-name-font-color);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  @media (max-width: 1350px) {
    font-size: 22px;
  };
  @media (max-width: 650px) {
    font-size: 20px;
  };
  @media (max-width: 500px) {
    font-size: 16px;
  };
  @media (max-width: 400px) {
    margin: 10px 0;
    padding: 0;
    justify-content: center;
    text-align: center;
  };
`

const ListItemDescription = styled.p`
  grid-area: description;
  margin: 12px 0 0 12px;
  padding: 15px;
  line-height: 22px;
  text-align: justify;
  border: 5px inset var(--pokemon-list-description-border-color);
  border-bottom-right-radius: 30px;
  background-color: var(--pokemon-list-description-container-color);
  color: var(--pokemon-list-description-font-color);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
    border: 1px solid black;
  };
  &::-webkit-scrollbar-track {
    background: var(--pokemon-ability-container-color);
  };
  @media (max-width: 1350px) {
    margin: 11px 0 0 11px;
    padding: 13px;
    font-size: 14px;
    line-height: 16px;
  };
  @media (max-width: 650px) {
    margin: 10px 0 0 10px;
    padding: 10px;
    font-size: 13px;
    line-height: 16px;
  };
  @media (max-width: 500px) {
    padding: 8px;
    font-size: 12px;
    line-height: 14px;
  };
  @media (max-width: 400px) {
    display: none;
  };
`

export {ListItemContainer, FavoritePokemonContainer, LisItemLink, ListItemDescription, ListItemImage, PokemonImageTypeContainer, PokemonTypeList, PokemonType, ListItemName}