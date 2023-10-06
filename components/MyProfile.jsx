import React from "react";
import PromptCard from "./PromptCard";
import CardLoadingSkelaton from "./CardLoadingSkelaton";
import Image from "next/image";
const MyProfile = ({ name, desc, data, handleEdit, handleDelete, loading }) => {
  return (
    <section className="w-full">
      <div className="w-full flex items-center gap-2">
        <h1 className="head_text text-left">
          <span className="blue_gradient">{name}</span> Profile
        </h1>
      </div>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt_layout">
        {loading ? (
          <>
            <CardLoadingSkelaton />
            <CardLoadingSkelaton />
            <CardLoadingSkelaton />
            <CardLoadingSkelaton />
          </>
        ) : (
          <>
            {data.map((prompt) => (
              <PromptCard
                key={prompt._id}
                prompt={prompt}
                handleEdit={() => handleEdit && handleEdit(prompt)}
                handleDelete={() => handleDelete && handleDelete(prompt)}
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default MyProfile;
