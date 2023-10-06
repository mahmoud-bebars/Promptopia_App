"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import Form from "@components/Form";
import FormLoadingSkelaton from "@components/FormLoadingSkelaton";

const UpdatePrompt = () => {
  const router = useRouter();
  const session = useSession();
  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  const promptId = searchParams.get("id");

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();
      if (data.creator._id !== session?.data?.user?.id) {
        router.push("/");
      } else {
        setPost({ prompt: data.prompt, tag: data.tag });
        setLoading(false);
      }
    };
    fetchPost();
  }, []);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/profile");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!session) {
    router.push("/");
  }

  return (
    <>
      {loading ? (
        <FormLoadingSkelaton />
      ) : (
        <Form
          type="Update"
          post={post}
          setPost={setPost}
          submitting={submitting}
          handleSubmit={updatePrompt}
        />
      )}
    </>
  );
};

export default UpdatePrompt;

/* example: you are a professional web Developer. i'm going to provide you with a snippet of code & you can give me advice on how to make it cleaner, more readable & more Efficient */
