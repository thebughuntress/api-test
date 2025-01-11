# api-test

## MongoDB Setup Guide

### 1. Create a New MongoDB Cluster

- Log in to [MongoDB Atlas](https://www.mongodb.com)
- Create a new cluster 
   - Remember username and password
   - Add your IP address or `0.0.0.0/0` to allow access from anywhere.

---

### 2. Connect to Cluster

- Copy the connection string from your cluster.
- Replace the placeholders for the username and password with your credentials.
- Open `dbConnection.js` and set up the default connection string.
  ```javascript
  const mongoDB = "mongodb+srv://<db_username>:<db_password>@cluster0.hs5b0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  ```

---

### 3. Start MongoDB

- Start the application using the following command:

  ```bash
  node app.js
  ```

---
### 4. Import Data Using MongoDB Compass

- Download and install [MongoDB Compass](https://www.mongodb.com/try/download/compass) if it is not already installed.

---

### 5. Set Up the Database and Collection

1. Open MongoDB Compass and connect to your cluster.
2. Create a new database named **`shop`**.
3. Within the `shop` database, create a collection named **`articles`**.
4. Import your JSON file (e.g., `articles.json`) into the `articles` collection.

---

### 6. Start the Application with a Specific Database

To start the app with the `shop` database, use:

```bash
node app.js "shop"
```
Then, verify the data by navigating to [http://localhost:3030/shop/articles](http://localhost:3030/shop/articles).

---
### 7. Handle CORS for Frontend Integration

To resolve CORS errors and allow frontend connections, update `app.js` by configuring CORS to include the frontend port:


```javascript
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173"],
  credentials: true,
}));
```
---
### 8. Update Connection String

Modify the connection string in `dbConnection.js` to include the database name (e.g., `shop`).

  ```javascript
  const mongoDB = "mongodb+srv://<db_username>:<db_password>@cluster0.hs5b0.mongodb.net/<DATABASE_NAME>?retryWrites=true&w=majority&appName=Cluster0"
  ```
    


---

### 9. Create an API Directory for Reusable Requests
Create an [api](./src/api/) directory and add reusable request modules.

---

### 10. Test Data Fetching
Ensure data is fetched successfully as demonstrated in [App.jsx](./src/App.jsx).
