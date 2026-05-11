import { supabase } from "../lib/supabaseClient";

const BUCKET_NAME = "birthday-assets";

export const createSlug = (name) => {
  const safeName = name || "birthday-surprise";

  const cleanName = safeName
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const randomCode = Math.random().toString(36).substring(2, 7);

  return `${cleanName}-${randomCode}`;
};

export const uploadBirthdayAsset = async (file, folder = "general") => {
  if (!file) {
    throw new Error("No file selected");
  }

  const fileExtension = file.name.split(".").pop();

  const fileName = `${Date.now()}-${Math.random()
    .toString(36)
    .substring(2, 8)}.${fileExtension}`;

  const filePath = `${folder}/${fileName}`;

  const { data, error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    console.error("Storage upload error:", error);
    throw error;
  }

  const { data: publicUrlData } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(data.path);

  return {
    path: data.path,
    url: publicUrlData.publicUrl,
  };
};

export const saveBirthdayPage = async (birthdayData) => {
  const slug = createSlug(birthdayData?.name);

  const pagePayload = {
    slug,
    title: birthdayData?.hero?.title || "Birthday Surprise",
    recipient_name: birthdayData?.name || "",
    page_data: birthdayData,
    is_published: true,
  };

  console.log("Saving birthday page payload:", pagePayload);

  const { data, error } = await supabase
    .from("birthday_pages")
    .insert(pagePayload)
    .select()
    .single();

  if (error) {
    console.error("Supabase insert error:", error);
    throw error;
  }

  console.log("Saved birthday page:", data);

  return data;
};

export const getBirthdayPageBySlug = async (slug) => {
  if (!slug) {
    throw new Error("Page slug is missing");
  }

  console.log("Fetching birthday page by slug:", slug);

  const { data, error } = await supabase
    .from("birthday_pages")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  if (error) {
    console.error("Supabase fetch error:", error);
    throw error;
  }

  if (!data) {
    throw new Error("No birthday page found for this slug");
  }

  console.log("Fetched birthday page:", data);

  return data;
};