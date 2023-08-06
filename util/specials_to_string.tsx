export function specials_to_string(specialties: []) {
    let res = ""
    for (let i = 0; i < specialties?.length; i++) {
        if (i == specialties?.length - 1) {
            res += specialties[i]
        } else {
            res += specialties[i] + " • "
        }
    }
    return res; 
}