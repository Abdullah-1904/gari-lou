import React from "react";
import { Card } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { Tables } from "../../../../database.types";

const PostDetail = ({ item }: { item: Tables<"postings"> }) => {
  return (
    // style={{ width: "300px", margin: "20px" }}
    <Card className="col-span-1 p-6">
      <h3 className="scroll-m-20 text-2xl capitalize font-semibold tracking-tight">
        {item?.name}
      </h3>
      <p>
        <b>Category:</b> {item.category}
      </p>
      <p><b>Description:</b> {item.description}</p>
      <p>Price: Rs. {item.price}</p>
      <Badge color={item.is_available ? "green" : "red"}>
        {item.is_available ? "Available" : "Booked"}
      </Badge>
      <p>Created on: {new Date(item.created_at).toLocaleDateString()}</p>
    </Card>
  );
};

export default PostDetail;
