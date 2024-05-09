"use server";

import { create } from "domain";
import prisma from "../../lib/prisma";
import { revalidatePath } from "next/cache";

export const createPost = async (formData: FormData) => {
    
    const title = formData.get("title");
    const category = formData.get("category");
    const description = formData.get("description");
    const image = formData.get("image");

    try{
        const createdPost = await prisma.post.create({
        data: {
            title: title as string,
            category: category as string,
            author: "GVM admin",
            description: description as string,
            image: image as string,
            adminId: 1,
        },
        });

        if(createdPost) {
            console.log('Post created successfully: ', createdPost)
            revalidatePath("/blog");
        } else {
            console.log('Failed to create post.')}
        } catch(error) {
        console.log('Error creating post: ', error);
    }
};


export const editPost = async (routeId: Number, formData: FormData) => {
    
    const title = formData.get("title");
    const category = formData.get("category");
    const description = formData.get("description");
    const image = formData.get("image");

    try{
        const editedPost = await prisma.post.update({
            where: {
                id: routeId as number,
            },
        data: {
            title: title as string,
            category: category as string,
            author: "GVM admin",
            description: description as string,
            image: image as string,
            adminId: 1,
        },
        });

        if (editedPost) {
            console.log('Post updated successfully:', editedPost);
            revalidatePath("/blog");
        } else {
            console.log('Failed to update post.');
        }
    } catch (error) {
        console.error('Error updating post:', error);
    }
};


export const deletePost = async (routeId: Number) => {

    await prisma.post.delete({
        where: {
            id: routeId as number,
        },
    });

    revalidatePath("/blog");
};