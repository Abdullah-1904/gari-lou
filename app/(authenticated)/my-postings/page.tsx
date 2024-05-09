"use client";
import React from "react";
import { Button } from "../../../components/ui/button";
import { Plus } from "lucide-react";
import NewPostDialog from "../../../components/postings/new-post-dialog";
import { getCols } from "../../../components/postings/columns";
import MyPostingsTable from "../../../components/postings/my-postings-table";
import { createClient } from "../../../lib/supabase/browserClient";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { cities } from "../../../constants/data";
import { useAuth } from "@clerk/nextjs";
import { deletePosting } from "../../utils/function";

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

  const queryClient = useQueryClient();

  const handleDeletePosting = async (id: number) => {
    deletePosting(id).then(async () => {
      await queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    });
  };

  const cols = getCols({ deletePosting: handleDeletePosting });

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">My Postings</h2>
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
        {
          <MyPostingsTable
            columns={cols}
            isLoading={isLoading}
            data={
              posts
                ? posts?.map((post) => {
                    const city = cities.find((c) => c.id === post.city_id);
                    return {
                      ...post,
                      city: city?.name,
                    };
                  })
                : []
            }
          />
        }
      </div>
      <NewPostDialog
        isOpen={isNewPostModalOpen}
        onChange={setIsNewPostModalOpen}
      />
    </div>
  );
};

export default MyPostings;
