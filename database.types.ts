export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      bookings: {
        Row: {
          buyer_id: string | null;
          created_at: string;
          from: string | null;
          id: number;
          post_id: number | null;
          status: Database["public"]["Enums"]["booking_status"];
          to: string | null;
        };
        Insert: {
          buyer_id?: string | null;
          created_at?: string;
          from?: string | null;
          id?: number;
          post_id?: number | null;
          status?: Database["public"]["Enums"]["booking_status"];
          to?: string | null;
        };
        Update: {
          buyer_id?: string | null;
          created_at?: string;
          from?: string | null;
          id?: number;
          post_id?: number | null;
          status?: Database["public"]["Enums"]["booking_status"];
          to?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "bookings_buyer_id_fkey";
            columns: ["buyer_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["user_id"];
          },
          {
            foreignKeyName: "bookings_post_id_fkey";
            columns: ["post_id"];
            isOneToOne: false;
            referencedRelation: "postings";
            referencedColumns: ["id"];
          }
        ];
      };
      cities: {
        Row: {
          created_at: string;
          id: number;
          name: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string | null;
        };
        Relationships: [];
      };
      postings: {
        Row: {
          category: Database["public"]["Enums"]["car_category"] | null;
          city_id: number | null;
          created_at: string;
          description: string | null;
          id: number;
          image: string | null;
          is_available: boolean | null;
          is_booked: boolean | null;
          name: string | null;
          price: number | null;
          seller_id: string | null;
        };
        Insert: {
          category?: Database["public"]["Enums"]["car_category"] | null;
          city_id?: number | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          image?: string | null;
          is_available?: boolean | null;
          is_booked?: boolean | null;
          name?: string | null;
          price?: number | null;
          seller_id?: string | null;
        };
        Update: {
          category?: Database["public"]["Enums"]["car_category"] | null;
          city_id?: number | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          image?: string | null;
          is_available?: boolean | null;
          is_booked?: boolean | null;
          name?: string | null;
          price?: number | null;
          seller_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "postings_city_id_fkey";
            columns: ["city_id"];
            isOneToOne: false;
            referencedRelation: "cities";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "postings_seller_id_fkey";
            columns: ["seller_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["user_id"];
          }
        ];
      };
      requests: {
        Row: {
          created_at: string;
          id: number;
          is_negotiable: boolean | null;
          is_responded: boolean;
          offer: number | null;
          post_id: number;
          request_from_id: string;
          seller_id: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          is_negotiable?: boolean | null;
          is_responded?: boolean;
          offer?: number | null;
          post_id: number;
          request_from_id: string;
          seller_id: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          is_negotiable?: boolean | null;
          is_responded?: boolean;
          offer?: number | null;
          post_id?: number;
          request_from_id?: string;
          seller_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "requests_post_id_fkey";
            columns: ["post_id"];
            isOneToOne: false;
            referencedRelation: "postings";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "requests_request_from_id_fkey";
            columns: ["request_from_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["user_id"];
          },
          {
            foreignKeyName: "requests_seller_id_fkey";
            columns: ["seller_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["user_id"];
          }
        ];
      };
      user: {
        Row: {
          created_at: string;
          email: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          email?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string;
          email?: string | null;
          user_id?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      requesting_user_id: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
    };
    Enums: {
      booking_status: "pending" | "accepted" | "rejected";
      car_category:
        | "Sedan"
        | "Coupe"
        | "Sports Car"
        | "Station Wagon"
        | "Crossover (CUV)"
        | "Sport Utility Vehicles (SUVs)"
        | "Hatchback";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
