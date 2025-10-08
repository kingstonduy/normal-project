// import React, { useState } from "react";

// const fetchRepos = async ({ queryKey }) => {
//     const [_key, { q, sort, perPage, page }] = queryKey;
//     const params = {
//         q: q || "react",
//         sort: sort === "best-match" ? undefined : sort,
//         order: "desc",
//         per_page: perPage,
//         page,
//     };
//     const res = await axios.get("https://api.github.com/search/repositories", {
//         params,
//     });
//     return res.data;
// };

// export default function Page() {
//     const [search, setSearch] = useState("nextjs");
//     const [sort, setSort] = useState("best-match");
//     const [perPage, setPerPage] = useState(10);
//     const [page, setPage] = useState(1);

//     const { data, isLoading, isError } = useQuery({
//         queryKey: ["repos", { q: search, sort, perPage, page }],
//         queryFn: fetchRepos,
//         keepPreviousData: true,
//     });

//     const totalCount = data?.total_count || 0;
//     const totalPages = Math.ceil(totalCount / perPage);

//     return (
//         <div className="min-h-screen bg-gray-100 p-6">
//             <h1 className="text-3xl font-bold mb-6 text-center">
//                 GitHub Repo Search
//             </h1>

//             <div className="flex flex-wrap justify-center gap-3 mb-6">
//                 <input
//                     type="text"
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     placeholder="Search repositories..."
//                     className="border rounded-lg px-3 py-2 w-64"
//                 />

//                 <select
//                     value={sort}
//                     onChange={(e) => setSort(e.target.value)}
//                     className="border rounded-lg px-3 py-2"
//                 >
//                     <option value="best-match">Best Match</option>
//                     <option value="stars">Stars</option>
//                     <option value="updated">Most Updated</option>
//                 </select>

//                 <select
//                     value={perPage}
//                     onChange={(e) => setPerPage(Number(e.target.value))}
//                     className="border rounded-lg px-3 py-2"
//                 >
//                     {[10, 20, 30, 50].map((n) => (
//                         <option key={n} value={n}>
//                             {n} per page
//                         </option>
//                     ))}
//                 </select>
//             </div>

//             {isLoading && <p className="text-center">Loading...</p>}
//             {isError && (
//                 <p className="text-center text-red-600">Error loading data</p>
//             )}

//             {!isLoading && data && (
//                 <>
//                     <div className="space-y-3">
//                         {data.items.map((repo) => (
//                             <div
//                                 key={repo.id}
//                                 className="bg-white shadow-md p-4 rounded-xl hover:bg-gray-50"
//                             >
//                                 <a
//                                     href={repo.html_url}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="text-blue-600 font-semibold text-lg"
//                                 >
//                                     {repo.full_name}
//                                 </a>
//                                 <p className="text-gray-700">
//                                     {repo.description}
//                                 </p>
//                                 <div className="text-sm text-gray-600 mt-1 flex gap-4">
//                                     ⭐ {repo.stargazers_count} stars
//                                     <span>
//                                         🕒 Updated:{" "}
//                                         {new Date(
//                                             repo.updated_at
//                                         ).toLocaleDateString()}
//                                     </span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="flex justify-center items-center gap-3 mt-6">
//                         <button
//                             onClick={() => setPage((p) => Math.max(1, p - 1))}
//                             disabled={page === 1}
//                             className="px-3 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
//                         >
//                             Prev
//                         </button>

//                         <span>
//                             Page {page} / {totalPages}
//                         </span>

//                         <button
//                             onClick={() =>
//                                 setPage((p) => (p < totalPages ? p + 1 : p))
//                             }
//                             disabled={page >= totalPages}
//                             className="px-3 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
//                         >
//                             Next
//                         </button>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// }
