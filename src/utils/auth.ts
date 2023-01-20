export function hasGroup (userGroups: UserGroup[], validGroups: UserGroup[]): boolean {
    return validGroups.filter(e => userGroups.includes(e) ?? false).length > 0
}
