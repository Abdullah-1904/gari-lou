import { Tables } from "../database.types";

export interface City {
  id: number;
  created_at: string;
  name: string;
}

export interface SupabaseResponse<T> {
  data: T;
}

export interface ICreateNewBooking {
  request_id_from: string;
  post_id: number;
  seller_id: string;
  to: string;
  from: string;
}

export interface IRespondBooking {
  request_id: number;
  seller_id: string;
  buyer_id: string;
  action: "accepted" | "rejected";
  post_id: number;
}

export interface ApiResponse<T> {
  data: T;
}

export interface DatabaseUser {
  email: Tables<"user">["email"];
}
