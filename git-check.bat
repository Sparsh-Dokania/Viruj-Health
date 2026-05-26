@echo off
cd /d "d:\codes\Projects\Viruj Lander.worktrees\agents-viruj-health-redesign-rebuild"
echo === GIT STATUS ===
git status --short
echo.
echo === GIT LOG (Last 5 commits) ===
git log --oneline -5
echo.
echo === Checking for uncommitted changes ===
git diff --name-only
