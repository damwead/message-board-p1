import UserProfile from "../../components/UserProfile";
import PostFeed from "../../components/PostFeed";

import { getUserWithUsername, postToJSON } from "../../lib/firebase";
import { query, collection, where, getDocs, limit, orderBy, getFirestore } from 'firebase/firestore';


export async function getServerSideProps({ query: urlQuery }) {
  // it'll be run automaticly on server

  const { username } = urlQuery;

  const userDoc = await getUserWithUsername(username);

  if (!userDoc) {
    return {
      notFound: true,
    };
  }

  // We need to retrive user posts
  // JSON serializable data
  let user = null;
  let posts = null;

  if (userDoc) {
    user = userDoc.data();

    const postsQuery = query(
      collection(getFirestore(), userDoc.ref.path, 'posts'),
      where('published', '==', true),
      orderBy('createdAt', 'desc'), // descend order
      limit(5)
    );
    posts = (await getDocs(postsQuery)).docs.map(postToJSON); // need to be serializable to JSON
  }

  return {
    props: { user, posts}, 
  }
}


export default function UserProfilePage({user, posts}) {
  return (
    <main>
      <UserProfile user={user} />
      <PostFeed posts={posts} />
    </main>
  )
}
