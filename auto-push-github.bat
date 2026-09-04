@echo off
setlocal
title Auto Push to GitHub

REM === Your GitHub repository ===
set "REPO_URL=https://github.com/zainktk56/JavaScript-Assignment-01-SMIT---Web-Mobile-App-Development.git"
set "BRANCH=main"

echo.
echo ==========================================
echo      AUTO PUSH TO GITHUB
echo ==========================================
echo.

REM Make sure Git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed or is not available in PATH.
    echo Install Git for Windows, then run this file again.
    pause
    exit /b 1
)

REM Run from the folder where this BAT file is located
cd /d "%~dp0"

REM Initialize Git if this folder is not already a repository
if not exist ".git" (
    echo Initializing Git repository...
    git init
    if errorlevel 1 goto :error
)

REM Make sure the branch is called main
git checkout -B "%BRANCH%" >nul 2>&1

REM Configure the correct GitHub remote
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo Adding GitHub remote...
    git remote add origin "%REPO_URL%"
) else (
    git remote set-url origin "%REPO_URL%"
)

echo Adding changed files...
git add -A
if errorlevel 1 goto :error

REM Check whether there is anything new to commit
git diff --cached --quiet
if not errorlevel 1 (
    echo.
    echo No new changes to commit.
    echo Checking whether the local branch still needs to be pushed...
    git push -u origin "%BRANCH%"
    if errorlevel 1 goto :error
    echo.
    echo Everything is already up to date.
    pause
    exit /b 0
)

REM Create an automatic timestamped commit message
for /f "tokens=1-4 delims=/ " %%a in ("%date%") do set "TODAY=%%a-%%b-%%c-%%d"
set "NOW=%time: =0%"
set "COMMIT_MSG=Auto update - %date% %NOW%"

echo Creating commit...
git commit -m "%COMMIT_MSG%"
if errorlevel 1 goto :error

REM Sync remote changes before pushing.
REM If there is a merge conflict, Git will stop instead of overwriting work.
echo Syncing with GitHub...
git pull --rebase origin "%BRANCH%"
if errorlevel 1 (
    echo.
    echo SYNC STOPPED.
    echo Git may need you to resolve a conflict manually.
    echo After resolving it, run:
    echo     git rebase --continue
    echo Then run this BAT file again.
    pause
    exit /b 1
)

echo Pushing to GitHub...
git push -u origin "%BRANCH%"
if errorlevel 1 goto :error

echo.
echo ==========================================
echo SUCCESS: Your latest code is on GitHub.
echo ==========================================
echo.
pause
exit /b 0

:error
echo.
echo ==========================================
echo ERROR: The Git operation could not finish.
echo Check the message above for details.
echo ==========================================
echo.
pause
exit /b 1
