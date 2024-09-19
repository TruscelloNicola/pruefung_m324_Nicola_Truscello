
if ! command -v markdown-it &> /dev/null
then
    echo "markdown-it could not be found, installing it..."
    npm install markdown-it
fi

npx markdown-it task-3.md -o task-3.html
echo "Conversion complete. task-3.html has been created."
