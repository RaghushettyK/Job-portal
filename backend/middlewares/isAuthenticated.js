import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "User not authenticated",
            success: false
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY || "fallback_dev_secret");

        // Save userId to req for further use
        req.id = decoded.userId;
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error.message);
        return res.status(401).json({
            message: "Invalid or expired token",
            success: false
        });
    }
};

export default isAuthenticated;
