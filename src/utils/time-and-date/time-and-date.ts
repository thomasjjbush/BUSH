export const getMonthAndYear = (dateString: Date | string): string => {
    if (!dateString) return;

    const date = new Date(dateString);
    return `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
};
