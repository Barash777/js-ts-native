export function sum(a: number, b: number) {
    return a + b
}

export function mult(a: number, b: number) {
    return a * b
}

export function splitIntoWords(str: string) : Array<string> {
    return str.toLowerCase().split(' ').map(w => {
        return w.trim().replace("  ", " ");
    })
}