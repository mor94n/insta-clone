import './App.css';
import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";
import PostCard from "./components/PostCard";
import Header from './components/Header';

function App() {

  //fetchPosts makes a GET request to the api and retrieves number of posts based on page number and limit.
  const fetchPosts = async ({ pageParam = 1 }) => {  
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${pageParam}&limit=10`
    );
    const results = await response.json();
    return { results, nextPage: pageParam + 1, totalPages: 100 };
  };

 //useInfiniteQuery is a react hook
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
  useInfiniteQuery("posts", fetchPosts, {  //posts is the query key and fetchPosts //getNextPageParam stops react fetching more data
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
      return undefined;
    },
  });

  return (
    <div className="App">
      <Header />
      <main>

          <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
            {data.pages.map((page) =>
              page.results.map((post) => <PostCard key={post.id} post={post} />)
            )}
          </InfiniteScroll>
      
      </main>
    </div>
  );
}

export default App;
