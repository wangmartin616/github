import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { UserListItem } from "@components";
import {
  useSearchUserLazyQuery,
  SearchUserQuery,
  UserInfoFragment,
} from "@graphql/types";

const Home = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery] = useDebounce(query, 1000);
  const [queryResults, setQueryResults] = useState<
    SearchUserQuery | null | undefined
  >(null);

  const [searchQuery] = useSearchUserLazyQuery();

  useEffect(() => {
    search(debouncedQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery]);

  const search = async (query: string) => {
    try {
      const { data } = await searchQuery({
        variables: {
          query,
        },
      });
      setQueryResults(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleItemClick = useCallback(
    (user: UserInfoFragment) => {
      navigate(`/${user.login}`);
    },
    [navigate]
  );

  return (
    <div className="section">
      <div className="text-center mb-5">
        <div className="text-3xl font-bold mb-2">Search Github Users</div>
        <input
          id="query-input"
          className="w-96 max-w-full text-lg border border-gray-700 rounded p-2"
          placeholder="Search by name, username..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        {queryResults?.search.nodes?.map((item) =>
          item?.__typename === "User" ? (
            <UserListItem key={item.id} user={item} onClick={handleItemClick} />
          ) : null
        )}
      </div>
    </div>
  );
};

export { Home };
