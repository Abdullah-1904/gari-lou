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
  to: string;
  from: string;
}

export interface IRespondBooking {
  request_id_from: string;
  post_id: number;
  to: string;
  status: Tables<"bookings">["status"];
}

export interface ApiResponse<T> {
  data: T;
}

export interface DatabaseUser {
  email: Tables<"user">["email"];
}
