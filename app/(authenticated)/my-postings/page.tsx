"use client";
import React from "react";
import { Button } from "../../../components/ui/button";
import { Plus } from "lucide-react";
import NewPostDialog from "../../../components/postings/new-post-dialog";
import { columns } from "../../../components/postings/columns";
import MyPostingsTable from "../../../components/postings/my-postings-table";
import { createClient } from "../../../lib/supabase/browserClient";
import { useQuery } from "@tanstack/react-query";
import { cities } from "../../../constants/data";
import { useAuth } from "@clerk/nextjs";

const supabase = createClient();

const fetchPosts = async (user_id: string) => {
  const { data, error } = await supabase
    .from("postings")
    .select()
    .eq("seller_id", user_id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const MyPostings = () => {
  const [isNewPostModalOpen, setIsNewPostModalOpen] = React.useState(false);
  const { userId } = useAuth();

  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(userId),
  });

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-medium">My Postings</h1>
        <Button onClick={() => setIsNewPostModalOpen(true)}>
          <Plus />
          New Posting
        </Button>
      </div>
      {/* Will display all of my postings */}
      <div className="py-10">
        <p className="mb-6">
          The following are all your postings, you can edit delete them.
        </p>
        {!isLoading && (
          <MyPostingsTable
            columns={columns}
            data={posts?.map((post) => {
              const city = cities.find((c) => c.id === post.city_id);
              return {
                ...post,
                city: city?.name,
              };
            })}
          />
        )}
      </div>
      <NewPostDialog
        isOpen={isNewPostModalOpen}
        onChange={setIsNewPostModalOpen}
      />
    </div>
  );
};

export default MyPostings;
