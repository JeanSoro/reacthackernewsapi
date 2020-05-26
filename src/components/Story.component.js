import React, { useState, useEffect } from 'react';
import { getStory } from '../services/hackerNewsApi'

export const StoryComponent = ({ storyId }) => {

  const [story, setStory] = useState({})

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data))
  }, [])

  if (!story && !story.url) {
    return (
      <h1>No story</h1>
    )
  }

  return (
    <>
      <a href={story.url}>
        <p>{story.title}</p>
      </a>
      By: <p>{story.by}</p>
      Posted: <p>{story.time}</p>
    </>
  )
}