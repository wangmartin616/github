import { memo } from "react";
import { RepositoryInfoFragment } from "@graphql/types";

type TRepositoryListItem = {
  repository: RepositoryInfoFragment;
};

const RepositoryListItem = memo(({ repository }: TRepositoryListItem) => {
  return (
    <div className="flex flex-col gap-5 bg-white shadow p-4 rounded cursor-pointer">
      <div className="flex-1">
        <a
          className="text-lg font-semibold text-black hover:underline"
          href={repository.url}
        >
          {repository.name}
        </a>
        <div className="text-gray-700 line-clamp-3 mt-2">
          {repository.description}
        </div>
      </div>

      <div className="flex items-center">
        <div
          className="w-3 h-3 rounded-full"
          style={{
            backgroundColor: repository.primaryLanguage?.color || "black",
          }}
        />
        <div className="text-gray-700 ml-1">
          {repository.primaryLanguage?.name}
        </div>
      </div>
    </div>
  );
});

export { RepositoryListItem };
