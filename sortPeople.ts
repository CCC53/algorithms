// https://leetcode.com/problems/sort-the-people/

function sortPeople(names: string[], heights: number[]): string[] {
    interface People {
        name: string;
        height: number;
    }
    const arr: People[] = [];
    for(let i = 0; i < names.length; i++) {
        arr.push({ name: names[i], height: heights[i] });
    }
    arr.sort((a,b) => b.height - a.height);
    return arr.map(p => p.name);
};