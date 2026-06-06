export const sortRecentlyCreatedFirst = (links) => {
    return links.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
}

export const sortOldestCreatedFirst = (links) => {
    return [...links].sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
}
