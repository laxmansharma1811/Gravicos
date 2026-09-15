@echo off
REM Gravicos Website - Quick Start Script for Windows

echo.
echo 🚀 Gravicos Website - Setup
echo ================================

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js version: %NODE_VERSION%

REM Install dependencies
echo.
echo 📦 Installing dependencies...
call npm install

REM Run development server
echo.
echo 🎉 Setup complete!
echo.
echo Starting development server...
echo Open http://localhost:3000 in your browser
echo.

call npm run dev
pause
