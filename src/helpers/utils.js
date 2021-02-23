export const truncate = (text, limit) => {
    return text.length > limit ? `${text.substr(0, limit)}...` : text;
};
