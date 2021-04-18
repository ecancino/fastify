import { Static, Type } from '@sinclair/typebox'

const User = Type.Object({
    username: Type.String(),
    //   mail: Type.Optional(Type.String({ format: "email" })),
});

console.log(User)

export type UserType = Static<typeof User>;
