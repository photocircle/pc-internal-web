import { CircleMember, Group, Profile } from "../generated/web_app_grpc_pb.js"

export const StatusCodeMessage: { [key: string]: string } = {
    ACCOUNT_EXISTS: "Account already exists",
    ACCOUNT_SUSPENDED: "Account suspended",
    BAD_REQUEST: "Bad request",
    CIRCLE_ALREADY_JOINED: "Circle already joined",
    FORBIDDEN: "Forbidden",
    INVALID_AUTH: "Invalid auth",
    NOT_FOUND: "Not found",
    NOT_MODIFIED: "Not modified",
    NO_PASSWORD_SET: "No password set",
    SUCCESS: "Success",
    UNACCEPTABLE_PASSWORD: "Unacceptable password",
    UNKNOWN_STATUS: "Unknown status",
    UUID_CONFLICT: "UUID conflict",
    AUTH_OTP_REQUIRED: "OTP required. Please login using mobile app.",
    INVALID_OTP: "The OTP was not correct.",
    WEB_ACCESS_DENIED: "PhotoCircle for Web is currently only available to business users.",
}

export enum Status {
    Idle,
    Running,
    Complete
}

export interface IGroupParent extends Group.AsObject {
    children?: IGroupParent[] | Group.AsObject[];
}

export interface IProfileWithColor extends Profile.AsObject {
    color?: string
    isWorkspaceMember?: boolean
}

export interface IMemberWithColor extends CircleMember.AsObject {
    color?: string
}
