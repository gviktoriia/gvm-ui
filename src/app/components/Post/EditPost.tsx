"use client";
import React, { useRef, useState } from "react";
import { editPost } from "../../../../actions/post/actions";
import { Alert, Box, Grid } from "@mui/material";
import StandardForm from "../forms/StandardForm";
import MultilineForm from "../forms/MultilineForm";
import BorderedButton from "../buttons/BorderedButton";
import { usePathname } from "next/navigation";
import { Post } from "@prisma/client";
import { Check } from "@mui/icons-material";
import { BLOG_ROUTE } from "../../../../utils/routesUtil";

interface EditPostProps {
  postsInfo: Post[];
}

const EditPost: React.FC<EditPostProps> = ({ postsInfo }) => {
  const ref = useRef<HTMLFormElement>(null);
  const [isPostUpdated, setIsPostUpdated] = useState<boolean | null>(null);

  const path: string = usePathname();
  const firstSlashIndex = path.indexOf("/");
  const secondSlashIndex = path.indexOf("/", firstSlashIndex + 1);
  const thirdSlashIndex = path.indexOf("/", secondSlashIndex + 2);
  const routeId: string = path.substring(secondSlashIndex + 1, thirdSlashIndex);

  const filteredPost = postsInfo.filter(
    (post) => post.id.toString() === routeId
  );

  if (filteredPost.length === 0) {
    return <div>Post not found</div>;
  }
  const post = filteredPost[0];

  const handleSubmit = async (formData: FormData) => {
    try {
      ref.current?.reset();
      await editPost(Number(routeId), formData);
      setIsPostUpdated(true);
    } catch (error) {
      console.error("Error editing post:", error);
      setIsPostUpdated(false);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(new FormData(e.target as HTMLFormElement));
      }}
      style={{
        display: "flex",
        width: "100%",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        textAlign="center"
        gap={3}
        width={{ xs: "100%", sm: "80%", md: "60%" }}
      >
        <Grid item justifyContent="center" textAlign="center">
          <StandardForm
            title="Title"
            name="title"
            required
            defaultValue={post.title}
          />
        </Grid>
        <Grid item justifyContent="center" textAlign="center">
          <StandardForm
            title="Category"
            name="category"
            required
            defaultValue={post.category}
          />
        </Grid>
        <Grid item justifyContent="center" textAlign="center">
          <MultilineForm
            title="Description"
            name="description"
            required
            defaultValue={post.description}
          />
        </Grid>
        <Grid item justifyContent="center" textAlign="center">
          <StandardForm
            title="Image link"
            name="image"
            required
            defaultValue={post.image}
          />
        </Grid>
        <Box display="flex" textAlign="center" justifyContent="center" gap={3}>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              width: "100px",
              height: "30px",
              borderRadius: "20px",
              textTransform: "none",
            }}
          >
            Edit
          </button>
          <BorderedButton title="Cancel" link={BLOG_ROUTE} />
        </Box>
        {isPostUpdated === true ? (
          <Alert icon={<Check fontSize="inherit" />} severity="success">
            The post was updated successfully!
          </Alert>
        ) : isPostUpdated === false ? (
          <Alert icon={<Check fontSize="inherit" />} severity="error">
            The post wasn&apos;t updated.
          </Alert>
        ) : null}
      </Grid>
    </form>
  );
};

export default EditPost;
