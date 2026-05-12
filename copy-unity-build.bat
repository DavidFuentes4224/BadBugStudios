@ECHO OFF
ECHO Unity WebGL Build Copy Tool
ECHO ============================
ECHO.

IF "%~1"=="" (
    SET /P UNITY_BUILD_DIR=Enter the path to your Unity WebGL build output folder: 
) ELSE (
    SET UNITY_BUILD_DIR=%~1
)

IF NOT EXIST "%UNITY_BUILD_DIR%" (
    ECHO ERROR: Directory "%UNITY_BUILD_DIR%" does not exist.
    PAUSE
    EXIT /B 1
)

SET DEST="%~dp0public\Build"

ECHO Copying Unity build files from "%UNITY_BUILD_DIR%" to %DEST%...
IF NOT EXIST %DEST% MKDIR %DEST%
XCOPY /E /Y /I "%UNITY_BUILD_DIR%\*" %DEST%

IF %ERRORLEVEL% NEQ 0 (
    ECHO ERROR: Copy failed.
    PAUSE
    EXIT /B 1
)

ECHO.
ECHO Done! Unity build files are now in public\Build\
ECHO Run deploy.bat to build and deploy the site.
PAUSE
