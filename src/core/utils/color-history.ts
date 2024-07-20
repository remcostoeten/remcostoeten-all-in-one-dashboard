export const getColorHistory = (): string[] => {
    const history = localStorage.getItem("colorHistory");
    return history ? JSON.parse(history) : [];
};

export const addColorToHistory = (color: string) => {
    let history = getColorHistory();
    if (!history.includes(color)) {
        history = [color, ...history.slice(0, 9)]; // Keep only the last 10 colors
        localStorage.setItem("colorHistory", JSON.stringify(history));
    }
};
