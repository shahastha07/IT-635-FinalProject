db = db.getSiblingDB("employeedb")

db.createCollection("employee", {
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: [ "EmployeeId", "Department", "ManagerName" ],
			properties: {
				EmployeeId: {
					bsonType: "int",
					minimum: 0,
					maximum: 999999,
					description: "EmployeeID must be between 000000 and 999999"
				},
				Department: {
					bsonType: "string",
					description: "Ex. Software Engineering, Marketing, Sales"
				},
				ManagerName: {
					bsonType: "string",
					description: "Manager name"
				}
			}
		}
	}
});
db.createCollection("tasks");
db.createCollection("resources");

db.employee.insertOne( { EmployeeId : NumberInt(129261), Department: "Software Engineering", ManagerName: "Patel" } );
db.employee.insertOne( { EmployeeId: NumberInt(110911), Department: "Software Engineering",ManagerName : "Shah" } );



