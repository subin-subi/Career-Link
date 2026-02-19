import FeedOne from "./FeedOne";
import PollPost from "./PollPost";
import PostCard from "./PostCard";
import PostWithImage from "./PostWithImage";

export default function FeedPage() {
  return (
    <div className="flex flex-col gap-4">
      <FeedOne />
      <PollPost />
      <PostCard/>
      <PostWithImage/>
    </div>
  );
}
