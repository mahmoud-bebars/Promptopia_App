"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import MyProfile from "@components/MyProfile";

const CreatorProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const creatorName = searchParams.get("name");

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await fetch(`/api/users/${params.id}/posts`);
      const data = await response.json();

      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <MyProfile
      name={creatorName}
      desc={`Welcome to ${creatorName} Profile`}
      data={posts}
      loading={loading}
    />
  );
};

export default CreatorProfile;
