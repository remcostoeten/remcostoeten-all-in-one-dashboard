
import React from 'react';

interface HeaderProps {
  title: string;
  showSearch?: boolean;
  showFilter?: boolean;
  showAdd?: boolean;
  showEdit?: boolean;
  onSearch?: (query: string) => void;
  onFilter?: () => void;
  onAdd?: () => void;
  onEdit?: () => void;
}
const Header: React.FC<HeaderProps> = ({
  title,
  showSearch = false,
  showFilter = false,
  showAdd = false,
  showEdit = false,
  onSearch,
  onFilter,
  onAdd,
  onEdit,
}) => {
  return (
    <div className="bg-blue-alternative text-text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <div className="flex items-center space-x-4">
          {showSearch && (
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-bg-ghost hover:bg-bg-ghost-hover focus:bg-bg-ghost-active rounded-md py-2 px-4 outline-none"
                onChange={(e) => onSearch && onSearch(e.target.value)}
              />
              <svg
                className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-icon-on-bg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          )}
          {showFilter && (
            <button
              className="bg-bg-ghost hover:bg-bg-ghost-hover active:bg-bg-ghost-active rounded-md py-2 px-4"
              onClick={onFilter}
            >
              Filter
            </button>
          )}
          {showAdd && (
            <button
              className="bg-button-primary hover:bg-button-primary-hover text-white rounded-md py-2 px-4"
              onClick={onAdd}
            >
              + Add {title}
            </button>
          )}
          {showEdit && (
            <button
              className="bg-bg-ghost hover:bg-bg-ghost-hover active:bg-bg-ghost-active rounded-md py-2 px-4"
              onClick={onEdit}
            >
              Edit {title}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;