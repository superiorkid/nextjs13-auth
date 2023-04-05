import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { prisma } from "@/app/libs/prisma";
import { User } from "@prisma/client";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email as string,
      },
    });

    if (!user) return null;

    // exclude id & password
    const currentUser: Exclude<User, "id" | "password"> = exclude(user, [
      "id",
      "password",
    ]);

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString() || null,
    };
  } catch (error: any) {
    return null;
  }
}

// Exclude keys from user
function exclude(user: any, keys: any) {
  for (let key of keys) {
    delete user[key];
  }

  return user;
}
