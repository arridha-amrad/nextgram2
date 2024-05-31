"use server";

export const createPostAction = async (prevState: any, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());

  console.log(data);

  return {
    error: {},
  };
};
