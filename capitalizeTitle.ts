// https://leetcode.com/problems/capitalize-the-title/
function capitalizeTitle(title: string): string {
    const splitted = title.split(' ').map(s => {
        if (s.length <= 2) {
            return s.toLowerCase()
        }
        const aux = s.toLowerCase();
        return aux.replace(aux[0], aux[0].toUpperCase())
    });
    return splitted.join(' ');
};