"use client";

import { AppDispatch, RootState } from "@/store";
import { fetchUsersRequest } from "@/store/users/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  return <div>hello world</div>;
}
