interface PermLevels {
    [levelIndex: number]: {
        MaxChange: number | undefined, CanSetXp: boolean | undefined,
        CanRemoveXp: boolean | undefined, CanAddXp: boolean | undefined,
        CanKick: boolean | undefined, CanRespawn: boolean | undefined
    }
}


interface Settings extends PermLevels {
    ApiKey: string,
    KeyId: string,
    GroupId: number,

    IgnorePermLevels: boolean | undefined

    PlayerAdmin: {
        [UserId: number]: number
    },

    GroupAdmin: {
        [GroupId: number]: { [RankId: number]: number }
    }
}
