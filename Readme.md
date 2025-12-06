Project : Task Management Application

This is a full-stack Task Management Application built as part of the SuPrazo Technologies Jr. Software Developer Intern Technical Assessment.

Hosted Links:

Frontend (React + Vercel) → https://task-manager-frontend-hkb8.vercel.app/
Backend (Spring Boot + Render) → https://taskmanager-i1of.onrender.com/api/tasks

The app allows users to:
->Add new tasks
->View all tasks
->Update task status (In Progress / Completed)
->Delete tasks

It uses Spring Boot (Java) for the backend, MySQL for database storage, and React.js for the frontend interface.

Tools & Technologies:

- Java
- Spring Boot Frame work
- MySQL
- React.js
- Axios, Postman

- Dependencies:
->Spring Web
->Spring Data JPA
->MySQL Driver



How to Run/View the Project :

1. Clone or Download the Project
git clone https://github.com/lok-01/TaskManager.git

(or just unzip the downloaded folder)

 2. Setup MySQL Database

Open your MySQL WorkBench and run:

CREATE DATABASE taskdb;

Update credentials inside
backend/src/main/resources/application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/taskdb
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true



3.Change Backend API URLs (For Local Setup)

By default, the frontend is connected to the hosted backend on Render.
If you want to run everything locally, change the backend API URLs inside these files:

📁 frontend/src/App.js
Replace:

https://taskmanager-i1of.onrender.com/api/tasks


with:

http://localhost:8080/api/tasks


Example:

// Before (hosted)
axios.post("https://taskmanager-i1of.onrender.com/api/tasks", task);

// After (local)
axios.post("http://localhost:8080/api/tasks", task);


🔧 Update Backend CORS Settings 

If you are switching between hosted and local setups,
update the CORS configuration in:

📁 backend/src/main/java/com/example/taskmanager/controller/TaskController.java

For hosted frontend:
@CrossOrigin(origins = "https://task-manager-frontend-hkb8.vercel.app/")

For local frontend:
@CrossOrigin(origins = "http://localhost:3000")


3. Run the Backend

Open a terminal inside the backend folder and run:

mvn spring-boot:run  or  ./mvnw clean spring-boot:run


Once it starts, backend runs at:
 -> http://localhost:8080


4. Run the Frontend

Open another terminal inside the frontend folder and run:

npm install
npm start


Frontend runs at:
-> http://localhost:3000

5. Test Functionality

->Open http://localhost:3000
->Add new tasks with title and description
->Click “Mark Completed” or “Mark In Progress”
->Click “Delete” to remove a task
->All changes are instantly saved in MySQL.

 API Endpoints
- GET `/api/tasks`-Get all tasks
- POST `/api/tasks`-Create a new task
- PUT `/api/tasks/{id}`-Update task details or status
- DELETE `/api/tasks/{id}`-Delete a task

Folder Structure :

TaskManager/
├── backend/
│   ├── src/main/java/com/example/taskmanager/
│   │   ├── controller/TaskController.java
│   │   ├── model/Task.java
│   │   ├── repository/TaskRepository.java
│   │   ├── service/TaskService.java
│   │   └── TaskManagerApplication.java
│   └── src/main/resources/application.properties
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── TaskForm.js
    │   │   └── TaskList.js
    │   ├── App.js
    │   ├── App.css
    │   └── index.js
