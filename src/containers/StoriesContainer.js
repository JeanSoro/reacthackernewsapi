
import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hackerNewsApi';

export const StoriesContainer = () => {

  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => data && setStoryIds(data))
  }, []);


  return (
    <div>{JSON.stringify(storyIds)}</div>
  )
}