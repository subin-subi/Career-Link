import FeedOne from "./FeedOne";
import PollPost from "./PollPost";

export default function FeedPage() {
  return (
    <div className="flex flex-col gap-4">
      <FeedOne />
      <PollPost />
    </div>
  );
}
