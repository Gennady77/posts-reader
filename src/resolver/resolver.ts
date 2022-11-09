import { getPostsResponseInterface, PostEntryInterface, PostResponseInterface } from '../model/interface';

export function getPostsResponseResolver(response: getPostsResponseInterface): PostEntryInterface[] {
  return response.data.posts.map(postResponseResolver);
}

export function postResponseResolver(response: PostResponseInterface): PostEntryInterface {
  const { id, from_id, from_name, message, created_time } = response;

  return {
    id,
    fromId: from_id,
    fromName: from_name,
    message,
    createdTime: new Date(created_time),
  };
}