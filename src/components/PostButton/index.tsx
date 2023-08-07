import { postInfo } from "@/api";
import { Info } from "@/types";
import Button from "@/components/common/Button";

export default function PostButton({ data }: { data: Info }) {
  const PostInfoFunc = () => {
    postInfo(data);
  };
  return <Button onClick={PostInfoFunc}>저장</Button>;
}
