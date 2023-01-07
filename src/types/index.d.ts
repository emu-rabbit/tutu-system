declare type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>
declare type InRange<MIN extends number, MAX extends number> = Exclude<Enumerate<MAX>, Enumerate<MIN>> | MAX
