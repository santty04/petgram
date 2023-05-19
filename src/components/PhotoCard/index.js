import React, {useEffect, useRef, useState} from "react";
import { Article, ImgWrapper, Img, Button } from "./styles";
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";

export const PhotoCard = ({ id, likes = 0, src }) => {
  const [show, element] = useNearScreen()

  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const Icon = liked ? MdFavorite : MdFavoriteBorder
  
  return (
    <Article ref={element}>
      {
        show && 
          <>
            <a href={`?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} alt="" />
              </ImgWrapper>
            </a>

            <Button onClick={() => setLiked(!liked)}>
              <Icon size='32px' /> {likes} Likes!
            </Button>
          </>
      }
    </Article>
  )
}
