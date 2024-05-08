"use client";

import React, { useRef } from "react";
import StandardForm from "../forms/StandardForm";
import { Box, Grid } from "@mui/material";
import MultilineForm from "../forms/MultilineForm";
import FilledButton from "../buttons/FilledButton";
import BorderedButton from "../buttons/BorderedButton";
import { createPost } from "../../../../actions/post/actions";

const CreatePost = () => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      action={async (formData) => {
        ref.current?.reset();
        await createPost(formData);
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
          <StandardForm title="Title" name="title" />
        </Grid>
        <Grid item justifyContent="center" textAlign="center">
          <StandardForm title="Category" name="category" />
        </Grid>
        <Grid item justifyContent="center" textAlign="center">
          <MultilineForm title="Description" name="description" />
        </Grid>
        <Grid item justifyContent="center" textAlign="center">
          <StandardForm title="Image link" name="image" />
        </Grid>
        <Box display="flex" textAlign="center" justifyContent="center" gap={3}>
          <FilledButton title="Create" />
          <BorderedButton title="Cancel" link="/blog" />
        </Box>
      </Grid>
    </form>
  );
};

export default CreatePost;
