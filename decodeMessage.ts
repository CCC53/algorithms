// https://leetcode.com/problems/decode-the-message/

function decodeMessage(key: string, message: string): string {
    const alpha = [...'abcdefghijklmnopqrstuvwxyz'];
    const noSpaces = new Set(key.replace(/\s/g, ''));
    const keyMap = new Map<string, string>();
    let i = 0;
    let res = '';
    noSpaces.forEach(v => {
        keyMap.set(v, alpha[i]);
        i++;
    });
    keyMap.set(' ', ' ');
    for(let i = 0; i < message.length; i++) {
        res += keyMap.get(message[i])
    }
    return res;
};