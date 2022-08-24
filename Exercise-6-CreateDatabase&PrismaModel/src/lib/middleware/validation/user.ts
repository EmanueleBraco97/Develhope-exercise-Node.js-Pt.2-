import {Static, Type} from "@sinclair/typebox";

export const userSchema = Type.Object({
    name: Type.String(),
    surname: Type.String(),
    role: Type.String()

},  { additionalProperties: false});

export type UserData = Static<typeof userSchema>
