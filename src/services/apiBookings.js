import { getToday } from "../utils/helpers";

import supabase from "./supabase";

export async function getBookings() {
  const { data, error } = await supabase
    .from("bookings")
    .select(
      "id,created_at,startDate, endDate,numNights,numGuests,status,totalPrice,cabins(name),guests(fullName,email)"
    );

  if (error) {
    throw new Error("bookings could not be loaded.");
  }
  return data;
}

export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cabins(*),guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error("booking not found");
  }
  return data;
}
