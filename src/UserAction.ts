"use server";

export const loginAction = async (prevState: any, data: FormData) => {
  await new Promise((res) => setTimeout(res, 3000));
  return {
    message: "Successful",
    type: "success",
  };
  // await new Promise((res) => setTimeout(res, 3000));

  // return { email, password };
};
