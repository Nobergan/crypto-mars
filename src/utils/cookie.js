const SITE_WAS_VISITED_COOKIE_NAME = 'siteWasVisited';

function getCookieByName(name) {
  if (!name) {
    return "";
  }
  const matches = document.cookie.match(new RegExp(
    '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
  ));
  return matches ? decodeURIComponent(matches[1]) : "";
}

export function markSiteAsVisited() {
  document.cookie = SITE_WAS_VISITED_COOKIE_NAME + '=true';
}

// Old cookie name is needed for saving redirect logic from previous code (before refactoring).
export function wasSiteAlreadyVisited(oldCookieName) {
  return !!getCookieByName(SITE_WAS_VISITED_COOKIE_NAME) || !!getCookieByName(oldCookieName);
}
