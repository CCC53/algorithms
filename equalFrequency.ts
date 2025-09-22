// https://leetcode.com/problems/remove-letter-to-equalize-frequency/description/?envType=problem-list-v2&envId=string

function equalFrequency(word: string): boolean {
    const freqMap = new Map<string, number>();
    for(let i = 0; i < word.length; i++) {
        if(freqMap.has(word[i])) {
            freqMap.set(word[i], freqMap.get(word[i]) + 1);
        } else {
            freqMap.set(word[i], 1);
        }
    }
    for (const [key, val] of freqMap) {
        const m = new Map(freqMap);
        val === 1 ? m.delete(key) : m.set(key, val - 1);
        if (new Set(m.values()).size === 1) {
            return true;
        }
    }
  return false;
};