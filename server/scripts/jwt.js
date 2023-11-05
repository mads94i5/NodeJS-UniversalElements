import { randomBytes } from "crypto";
export const jwtAccessSecret = process.env.JWT_ACCESS_SECRET || randomBytes(64).toString("hex");
export const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET || randomBytes(64).toString("hex");
export const jwtCookieOptions = { 
    httpOnly: true, 
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
}