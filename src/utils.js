export function clearPhone(value) {
    return value.replace(/[^\d\+]/g, "");
}
