import prisma from "../../../../lib/prisma";

const posts = async() => {
    await prisma.post.findMany();
} 