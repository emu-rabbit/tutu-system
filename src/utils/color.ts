export const statusColor = (status: number | null) => {
    if (!status) return '#bbbbbb'
    if (status < 10) {
        return '#ad0000'
    } else if (status < 25) {
        return '#b94e4e'
    } else if (status < 45) {
        return '#db871f'
    } else if (status < 60) {
        return '#dba326'
    } else if (status < 70) {
        return '#69c5c1'
    } else if (status < 85) {
        return '#748bdd'
    }
    return '#26d36b'
}
