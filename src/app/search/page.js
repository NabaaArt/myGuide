"use client";
import { useSearchParams } from "next/navigation";

const Searchpage = () => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");
  return <div>search</div>;
};

export default Searchpage;
