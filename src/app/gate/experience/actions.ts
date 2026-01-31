"use server";
import {prisma} from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { IExperience, IActionResponse, IDeleteResponse } from "@/types/admin";

export async function saveExperience(
  data: IExperience
): Promise<IActionResponse<IExperience>> {
  try {
    const payload = {
      company: data.company,
      role: data.role,
      period: data.period,
      location: data.location || "",
      impactMetric: data.impactMetric,
      description: data.description || "",
      tasks: data.tasks.filter(t => t.trim() !== ""),     // Clean empty entries
      techStack: data.techStack.filter(s => s.trim() !== ""),
    };

    const entry = await prisma.experience.upsert({
      where: { id: data.id ?? -1 },
      update: payload,
      create: payload,
    });

    revalidatePath("/gate/experience");
    revalidatePath("/"); // Update public portfolio view

    return { success: true, data: entry as unknown as IExperience };
  } catch (error) {
    console.error("POSTGRES_UPSERT_ERROR:", error);
    return { success: false, error: "Database synchronization failed." };
  }
}

export async function deleteExperience(id: number): Promise<IDeleteResponse> {
  try {
    // Verification: Ensure the ID is valid before attempting DB operation
    if (!id || id < 0) throw new Error("Invalid Node ID");

    await prisma.experience.delete({
      where: { id },
    });

    // Purge cache for both the Admin panel and the Public Portfolio
    revalidatePath("/gate/experience");
    revalidatePath("/");

    return { success: true, id };
  } catch (error) {
    console.error("POSTGRES_DELETE_ERROR:", error);
    return { 
      success: false, 
      error: "Node termination failed. Ensure database connectivity." 
    };
  }
}