export interface City {
  id: number;
  created_at: string;
  name: string;
}

export interface SupabaseResponse<T> {
  data: T;
}
