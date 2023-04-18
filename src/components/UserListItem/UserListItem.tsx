import { memo } from "react";
import { UserInfoFragment } from "@graphql/types";

type TUserListItem = {
  user: UserInfoFragment;
  onClick: (user: UserInfoFragment) => void;
};

const UserListItem = memo(({ user, onClick }: TUserListItem) => {
  const handleClick = () => {
    onClick(user);
  };

  return (
    <div
      className="flex gap-5 bg-white shadow p-4 rounded cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={user.avatarUrl}
        className="w-20 h-20 rounded-full"
        alt={user.login}
      />
      <div className="flex-1">
        <div className="text-lg font-semibold text-black">{user.name}</div>
        <div className="text-gray-700">{user.login}</div>
        <div className="text-gray-700 mt-1">
          Total repositories: {user.repositories.totalCount}
        </div>
      </div>
    </div>
  );
});

export { UserListItem };
