// priority: 1000
export function AddForTextLines(text, textLines, initNum) {
    for (let i = 0; i < textLines.length; i++) {
        text.add(initNum++, textLines[i])
    }
    return initNum
}
