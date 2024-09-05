export async function getBlogData(pageNumber) {
  const limit = 10;
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/getdata?page=${pageNumber}&limit=${limit}`);
  const { data, currentPage, totalPages } = await response.json();
 // Log data to verify
 return { posts: data, paginatedPosts: data, totalPages, currentPage };
}
