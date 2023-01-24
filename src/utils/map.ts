export const userGroupMap = (userGroup: UserGroup) => ({
    rabbit: '兔子大帝',
    owner: '主人',
    user: '兔粉'
})[userGroup]

export const itemMap = (item: string) => ({
    poop: '兔兔精華',
    summon_ticket: '兔兔召喚券',
    headshot_ticket: '兔兔頭槌卷',
    bite_ticket: '兔兔咬咬券',
    swoop_ticket: '兔兔飛撲券',
    rub_ticket: '兔兔蹭蹭券'
})[item] || item
