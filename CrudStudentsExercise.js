//Find all students
print("Find all students")
printjson(db.students.find({}))
print("Find all students and limit to one student ")
printjson(db.students.find({}).limit(1))

//Find first student according insertion order
print("Find first student according insertion order")
printjson(db.students.findOne({}))

//Find all students ordered by name
print("Find all students ordered by name")
printjson(db.students.find().sort({name: 1}))
//Insert one student with insertOne instruction
db.students.insertOne({
  name: "John Smith",
  major: "Computer Science",
  gpa: 3.8
})

//Insert multiple students with insertMany instruction
db.students.insertMany([
  {
    name: "Pepito",
    major: "Computer Science",
    gpa: 3.2
  },
  {
    name: "Jane Doe",
    major: "Mathematics",
    gpa: 3.5
  },
  {
    name: "Bob Johnson",
    major: "History",
    gpa: 3.2
  }
])

//Update a student with updateOne instruction
db.students.updateOne(
  { name: "John Smith" },
  { $set: { gpa: 3.9 } }
)

//Update multiple students with updateMany instruction
db.students.updateMany(
  { major: "Computer Science" },
  { $inc: { gpa: 0.1 } }
)



//Delete multiple students with deleteMany instruction
db.students.deleteMany(
  { gpa: { $lt: 1 } }
)

print("Delete")

db.students.deleteMany(
  { major: "Computer Science"}
)

