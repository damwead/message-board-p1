import UserProfile from "../../components/UserProfile";
import PostFeed from "../../components/PostFeed";

export async function getServerSideProps({ query }) {



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
