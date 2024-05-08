"use server";

import prisma from "../../lib/prisma";
import { revalidatePath } from "next/cache";

export const createPost = async (formData: FormData) => {
    
    const title = formData.get("title");
    const category = formData.get("category");
    const description = formData.get("description");
    const image = formData.get("image");

    await prisma.post.create({
      data: {
        title: title as string,
        category: category as string,
        author: "GVM admin",
        description: description as string,
        image: image as string,
        createdAt: new Date(),
        lastModifiedAt: new Date(),
        adminId: 1,
      },
    });

    revalidatePath("/blog/create");
};