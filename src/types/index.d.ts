declare type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>
declare type InRange<MIN extends number, MAX extends number> = Exclude<Enumerate<MAX>, Enumerate<MIN>> | MAX

declare type UserGroup = 'rabbit' | 'owner' | 'user'

declare type RabbitRecord = {
    id: string,
    status: number,
    createAt: string,
    message: string
}

declare type Reply = {
    id: string,
    username: string,
    content: string,
    public: boolean,
    createAt: string
}

declare type ItemStack = {
    id: string,
    name: string,
    count: number
}

declare type Item = {
    id: string,
    name: string
}

declare type User = {
    id: string,
    email: string,
    username: string,
    userGroup: UserGroup[]
}

declare type SelectorOption = {
    text: string,
    value: string
}
