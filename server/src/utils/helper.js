import JsonWebToken from "jsonwebtoken";

export const signToken = (payload) => {
    return JsonWebToken.sign(payload, process.env.JWT_SECRET, {expiresIn: "7d"});
}

export const verifyToken = (token) => {
    const decoded = JsonWebToken.verify(token, process.env.JWT_SECRET)
    return decoded.id;
}