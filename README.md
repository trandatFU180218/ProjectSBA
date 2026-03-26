=============DeltaBook - Book Management System================

================Description================

DeleteBook is a full-stack web application for managing a book library.
The system allows users to perform basic CRUD operations such as adding, viewing, updating, and deleting books.

This project is built using ReactJS (Frontend) and Spring Boot (Backend), following RESTful API principles.

================Tech Stack================
 - Frontend
ReactJS (Hooks: useState, useEffect)
Axios
React Router
CSS / Bootstrap
 - Backend
Spring Boot
Spring Data JPA
REST API
Database
SQL Server

================Features================
 - View list of books
 - Add new book
 - Edit book information
 - Delete book
 - Search / filter books
 -  Authentication with JWT

================Project Structure================
Frontend (React)
src/
 ├── components/
 ├── pages/
 ├── services/     
 ├── App.js
Backend (Spring Boot)
src/main/java/
 ├── controller/
 ├── DTO/
 ├── service/
 ├── repository/
 ├── entity/
================Installation & Run Locally================
1. Clone project
git clone https://github.com/trandatFU180218/ProjectSBA.git
cd my-frontend
2. Run Backend (Spring Boot)
Open project in IntelliJ / Eclipse
Configure database in application.properties:
server.servlet.context-path=/backend
spring.datasource.url=jdbc:sqlserver://localhost:1433;databaseName=library_management;encrypt=false;
spring.datasource.username=sa
spring.datasource.password=123
spring.jpa.hibernate.ddl-auto=update
Run project:
mvn spring-boot:run

👉 Backend will run at:

http://localhost:8080/backend
3. Run Frontend (React)
cd my-frontend
npm run dev

👉 Frontend will run at:

http://localhost:5173
🔗 API Configuration

Make sure the frontend calls the correct backend URL:

const API_URL = "http://localhost:8080/backend/books";
⚠️ Notes
This project runs locally only (no deployment yet)
Ensure SQL Server is running before starting backend
Enable CORS in Spring Boot if frontend cannot connect

💡 Learning Outcomes
Build full-stack CRUD application using ReactJS and Spring Boot
Understand RESTful API integration
Use React Hooks (useState, useEffect)
Handle form with controlled components
Connect frontend and backend
👤 Author
Tran Tien Dat