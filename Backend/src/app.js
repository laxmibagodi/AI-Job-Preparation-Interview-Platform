/**
 * Express Application Configuration
 * ===================================
 * Core API server setup with middleware configuration for:
 * - JSON parsing and cookie handling
 * - CORS protection with credentials support
 * - RESTful route management
 * - Enterprise-grade error handling
 */

const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

// Middleware Configuration
app.use(express.json({ limit: "50mb" })) // Support large file uploads
app.use(express.urlencoded({ limit: "50mb", extended: true }))
app.use(cookieParser())
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

// Health Check Endpoint
app.get("/api/health", (req, res) => {
    res.status(200).json({ 
        status: "OK", 
        message: "AI Interview Platform API is running",
        timestamp: new Date().toISOString()
    })
})

// Routes Configuration
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")

app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)

// 404 Handler
app.use("*", (req, res) => {
    res.status(404).json({ 
        success: false, 
        message: "Route not found" 
    })
})

// Global Error Handler
app.use((err, req, res, next) => {
    console.error("Error:", err.message)
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
        ...(process.env.NODE_ENV === "development" && { stack: err.stack })
    })
})

module.exports = app