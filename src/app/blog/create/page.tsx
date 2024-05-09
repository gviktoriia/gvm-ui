import StandardLayout from "@/app/components/layouts/StandardLayout";
import CreatePost from "@/app/components/Post/CreatePost";
import { createPost } from "../../../../actions/post/actions";
import prisma from "../../../../lib/prisma";

const page = async () => {
  return <StandardLayout title="Add new post" content={<CreatePost />} />;
};

export default page;
