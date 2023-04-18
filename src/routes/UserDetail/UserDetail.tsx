import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RepositoryListItem } from "@components";
import {
  UserRepositoriesInfoFragment,
  useGetUserLazyQuery,
} from "@graphql/types";
import { notEmpty } from "@services/utils";

const UserDetail = () => {
  const { userLogin } = useParams();
  const [userInfo, setUserInfo] = useState<
    UserRepositoriesInfoFragment | null | undefined
  >(null);
  const [getUserQuery] = useGetUserLazyQuery();

  useEffect(() => {
    if (userLogin) {
      getUser(userLogin);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLogin]);

  const getUser = async (login: string) => {
    try {
      const { data } = await getUserQuery({
        variables: {
          login,
        },
      });
      setUserInfo(data?.user);
    } catch (e) {
      console.log(e);
    }
  };

  if (!userInfo) {
    return null;
  }

  return (
    <div className="section flex flex-col md:flex-row gap-10">
      <div>
        <img
          src={userInfo.avatarUrl}
          className="w-60 h-60 rounded-full"
          alt={userInfo.login}
        />
        <div className="mt-4">
          <div className="text-xl font-semibold text-black">
            {userInfo.name}
          </div>
          <div className="text-lg text-gray-700">{userInfo.login}</div>
          <div className="text-lg text-gray-700 mt-1">
            Total repositories: {userInfo.repositories.totalCount}
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="text-lg font-semibold text-black mb-5">
          Repositories
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {userInfo.repositories.nodes?.filter(notEmpty).map((item) => (
            <RepositoryListItem repository={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { UserDetail };
