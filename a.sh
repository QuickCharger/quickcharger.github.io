git add -A
if [ $? -eq 0 ]; then
-   echo 'need commit'
else
-   echo "Skipping commit step due to empty add."  
fi