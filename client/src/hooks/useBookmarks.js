import { useEffect, useState } from "react";

import {
  getBookmarks,
  toggleBookmark,
  isBookmarked,
} from "../services/bookmark.service";

const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    setBookmarks(getBookmarks());
  }, []);

  const handleToggleBookmark = (article) => {
    toggleBookmark(article);
    setBookmarks(getBookmarks());
  };

  const checkBookmarked = (url) => {
    return isBookmarked(url);
  };

  return {
    bookmarks,
    toggleBookmark: handleToggleBookmark,
    isBookmarked: checkBookmarked,
  };
};

export default useBookmarks;