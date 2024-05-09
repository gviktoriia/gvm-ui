import { Admin } from "@prisma/client";
import prisma from "./prisma";

type LoginFn = (email: string, password: string) => Promise<Admin>;

export const login: LoginFn = async (email, password) => {
    const admin = await prisma.admin.findFirst({
        where: {
            email: email,
        },
    });

    if (admin && (await password === admin.password)) {
        admin.password = "";
        return admin;
    } else throw new Error("Admin now found!")
}

