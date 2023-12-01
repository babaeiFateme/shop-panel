export const priceConverter = (number) => {
    return `${new Intl.NumberFormat().format(number)} ریال`
}
