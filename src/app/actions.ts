"use server";

import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { signOut } from "@/auth";

export async function registerUser(formData: FormData) {
  const name = String(formData.get("name") ?? "");
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const hashed = await bcrypt.hash(password, 10);

  await prisma.user.upsert({
    where: { email },
    update: { name, password: hashed },
    create: { name, email, password: hashed },
  });
}

export async function doSignOut() {
  await signOut({ redirectTo: "/login" });
}
