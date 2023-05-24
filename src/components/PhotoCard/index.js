import React, {useEffect, useRef, useState} from "react";
import { Article, ImgWrapper, Img } from "./styles";
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton";
import { useLikePhoto } from "../../container/ToggleLikeMutation";
import { Link } from "@reach/router";

export const PhotoCard = ({ id, likes = 0, src }) => {
  const [show, element] = useNearScreen()

  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)


  const [toggleLike] = useLikePhoto()
  const handleFavButtonClick = () => {
    console.log(`id de la photo ${id}`)
    setLiked(!liked)
    toggleLike({ variables: { input: { id: id } } })
  }
  
  return (
    <Article ref={element}>
      {
        show && 
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt="" />
              </ImgWrapper>
            </Link>

            
            <FavButton liked={liked} likes={likes} onClick={handleFavButtonClick} />
          </>
      }
    </Article>
  )
}
