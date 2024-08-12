import { useState, useEffect } from "react";
import PostCard from "./PostCard";

const PostList = ({ posts }) => {
  const [sortedPosts, setSortedPosts] = useState(posts);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [sortType, setSortType] = useState("newest");

  useEffect(() => {
    let sorted = [...posts];

    if (sortType === "newest") {
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
      sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    setSortedPosts(sorted);
  }, [sortType, posts]);

  useEffect(() => {
    setCurrentPage(1); // Reset ke halaman 1 jika postsPerPage diubah
  }, [postsPerPage]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get('/api/ideas', {
//         params: {
//           'page[number]': currentPage,
//           'page[size]': postsPerPage,
//           sort: sortType,
//         },
//       });
//      console.log(response.data)
//     } catch (error) {
//       console.error('Failed to fetch posts', error);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

  return (
    <div className="px-20">
      <div className="flex justify-between mb-10">
        <p>
          Showing {indexOfFirstPost + 1} - {indexOfLastPost} of{" "}
          {sortedPosts.length}
        </p>

        <div className="flex">
          <div className="mr-5">
            <label>Show per page:</label>
            <select
              value={postsPerPage}
              onChange={(e) => setPostsPerPage(Number(e.target.value))}
              className="ml-2 p-2 border rounded"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
          <div>
            <label>Sort by:</label>
            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className="ml-2 p-2 border rounded"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <div className="flex justify-center my-10">
       
        <div className="flex">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="p-2 border rounded disabled:opacity-50"
          >
            Previous
          </button>

          <div className="mx-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`p-2 border rounded mx-1 ${
                  currentPage === i + 1 ? "bg-orange-500 text-white" : ""
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="p-2 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostList;
