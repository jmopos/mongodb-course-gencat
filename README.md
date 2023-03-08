### Mongosh Path
C:\Users\jordi\Downloads\mongosh-1.7.1-win32-x64\bin

### Newman
[Exemple de Newman Mongo DB API](https://github.com/jmopos/mongodb-course-gencat/blob/master/newman/MongoDB%20Data%20API-2023-03-02-16-18-52-173-0.html)

[Exemple de Newman API externa](https://github.com/jmopos/mongodb-course-gencat/blob/master/newman/NttData-student-gencat-2023-03-02-16-17-05-428-0.html)

### Mongosh Executes an external javascript file
mongosh "127.0.0.1/school" "C:\Users\jordi\Downloads\mongosh-1.7.1-win32-x64\bin\scripts\GetStudents.js"
mongosh 127.0.0.1/school C:\Users\jordi\Downloads\mongosh-1.7.1-win32-x64\bin\scripts\CreateSchoolSchema.js
mongosh "mongodb+srv://cluster0.dsb8fht.mongodb.net/school" --apiVersion 1 --username jordi
mongosh "mongodb+srv://cluster0.dsb8fht.mongodb.net/school" --apiVersion 1 --username jordi C:\Users\jordi\Downloads\mongosh-1.7.1-win32-x64\bin\scripts\GetStudents.js

### Python
-You must install firs pymongo via pip
python -m pip install pymongo
