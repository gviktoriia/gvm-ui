import StandardLayout from "@/app/components/layouts/StandardLayout";
import CreatePost from "@/app/components/Post/CreatePost";

const page = async () => {
  return <StandardLayout title="Add new post" content={<CreatePost />} />;
};

export default page;
