"use client";

import React, { useRef, useState } from "react";
import StandardForm from "../forms/StandardForm";
import { Alert, Box, Grid } from "@mui/material";
import MultilineForm from "../forms/MultilineForm";
import BorderedButton from "../buttons/BorderedButton";
import { createPost } from "../../../../actions/post/actions";
import { Check } from "@mui/icons-material";
import { BLOG_ROUTE } from "../../../../utils/routesUtil";

const CreatePost = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [isPostCreated, setIsPostCreated] = useState<boolean | null>(null);

  const handleSubmit = async (formData: FormData) => {
    try {
      ref.current?.reset();
      await createPost(formData);
      setIsPostCreated(true);
    } catch (error) {
      console.error("Error creating post:", error);
      setIsPostCreated(false);
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
          <StandardForm title="Title" name="title" required />
        </Grid>
        <Grid item justifyContent="center" textAlign="center">
          <StandardForm title="Category" name="category" required />
        </Grid>
        <Grid item justifyContent="center" textAlign="center">
          <MultilineForm title="Description" name="description" required />
        </Grid>
        <Grid item justifyContent="center" textAlign="center">
          <StandardForm title="Image link" name="image" required />
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
            Create
          </button>
          <BorderedButton title="Cancel" link={BLOG_ROUTE} />
        </Box>
        {isPostCreated === true ? (
          <Alert icon={<Check fontSize="inherit" />} severity="success">
            The post was created successfully!
          </Alert>
        ) : isPostCreated === false ? (
          <Alert icon={<Check fontSize="inherit" />} severity="error">
            The post wasn&apos;t created.
          </Alert>
        ) : null}
      </Grid>
    </form>
  );
};

export default CreatePost;
