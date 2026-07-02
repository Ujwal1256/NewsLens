const STORAGE_KEY = "newslens_bookmarks";

export const getBookmarks = () => {
  const bookmarks = localStorage.getItem(STORAGE_KEY);

  return bookmarks ? JSON.parse(bookmarks) : [];
};

export const saveBookmarks = (bookmarks) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
};

export const isBookmarked = (url) => {
  return getBookmarks().some((article) => article.url === url);
};

export const addBookmark = (article) => {
  const bookmarks = getBookmarks();

  if (!bookmarks.find((item) => item.url === article.url)) {
    bookmarks.push(article);
    saveBookmarks(bookmarks);
  }
};

export const removeBookmark = (url) => {
  const bookmarks = getBookmarks().filter(
    (article) => article.url !== url
  );

  saveBookmarks(bookmarks);
};

export const toggleBookmark = (article) => {
  if (isBookmarked(article.url)) {
    removeBookmark(article.url);
  } else {
    addBookmark(article);
  }
};