"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
import CardLoadingSkelaton from "./CardLoadingSkelaton";

const PromptCardList = ({ data, handleTagClick }) => (
  <div className="mt-16 prompt_layout">
    {data.map((prompt) => (
      <PromptCard
        key={prompt._id}
        prompt={prompt}
        handleTagClick={handleTagClick}
      />
    ))}
  </div>
);

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const filterPosts = (searchText) => {
    const regex = new RegExp(searchText, "i"); // 'i' is a flag for case-insensitive search

    return posts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const filterPostByTag = (searchText) => {
    const regex = new RegExp(searchText, "i"); // 'i' is a flag for case-insensitive search

    return posts.filter((item) => regex.test(item.tag));
  };

  const fetchPosts = async () => {
    setLoading(true);
    const response = await fetch("/api/prompt");
    const data = await response.json();
    setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (searchText === "") {
      const timer = setTimeout(() => {
        setSearchResults([]);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [searchText]);

  const handleSearchChange = (text) => {
    setSearchText(text);
    const result = filterPosts(text);
    if (result.length > 0) {
      setSearchResults(result);
    }
  };

  const searchByTag = (tag) => {
    setSearchText(tag);
    const result = filterPostByTag(tag);
    if (result.length > 0) {
      setSearchResults(result);
    }
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center gap-3">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={(e) => handleSearchChange(e.target.value)}
          required
          className="search_input peer"
        />
        {searchText !== "" && (
          <button
            type="button"
            onClick={() => setSearchText("")}
            className="px-5 py-1.5 text-sm bg-black text-white rounded-full capitalize"
          >
            Clear
          </button>
        )}
      </form>

      {loading ? (
        <div className="w-full mt-16">
          <CardLoadingSkelaton />
          <CardLoadingSkelaton />
          <CardLoadingSkelaton />
          <CardLoadingSkelaton />
        </div>
      ) : (
        <PromptCardList
          data={searchResults.length > 0 ? searchResults : posts}
          handleTagClick={(tag) => searchByTag(tag)}
        />
      )}
    </section>
  );
};

export default Feed;
