
import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hackerNewsApi';
import { StoryComponent } from '../components/Story.component'

export const StoriesContainer = () => {

  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => data && setStoryIds(data));

  }, []);


  return (

    <>

      <h1>Hacker News stories</h1>

      {storyIds.map(storyId => {
        return <StoryComponent key={storyId} storyId={storyId} />
      })}
    </>



  )
}