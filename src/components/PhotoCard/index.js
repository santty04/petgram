import React, {useEffect, useRef, useState} from "react";
import { Article, ImgWrapper, Img, Button } from "./styles";
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";



export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE}) => {
  const [show, element] = useNearScreen()

  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  
  
  return (
    <Article ref={element}>
      {
        show && 
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={DEFAULT_IMAGE} alt="" />
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
