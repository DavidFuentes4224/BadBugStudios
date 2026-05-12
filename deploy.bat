@ECHO OFF
ECHO Building React app...
call npm run build
IF %ERRORLEVEL% NEQ 0 (
    ECHO Build failed! Aborting deploy.
    PAUSE
    EXIT /B 1
)
ECHO Deploying to production...
netlify deploy --prod --dir build
ECHO Complete
PAUSE