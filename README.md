# 🚀 ZecPath

ZecPath is an AI-powered interview preparation and recruitment platform designed to help candidates improve their technical skills and enable recruiters to conduct efficient hiring processes. The platform provides coding assessments, interview scheduling, AI-based evaluations, and candidate management in a modern and user-friendly interface.

---

## 📌 Project Overview

ZecPath is a full-stack web application that connects recruiters and candidates through an interactive interview ecosystem. It offers coding challenges, AI-assisted evaluations, candidate tracking, notifications, and interview management to streamline the recruitment process.

The platform focuses on:

* Simplifying technical interviews.
* Providing AI-driven feedback and evaluations.
* Managing candidates and recruiters efficiently.
* Creating a responsive and accessible user experience.

---

## ✨ Features

### 👨‍💼 Recruiter Features

* Create and manage interviews.
* Schedule candidate interviews.
* View candidate profiles and submissions.
* AI-based interview evaluation and feedback.
* Notification system.
* Dashboard with analytics and statistics.
* Manage premium subscriptions.

### 👨‍💻 Candidate Features

* User authentication and profile management.
* Browse and apply for interviews.
* Participate in coding assessments.
* Receive AI-generated performance feedback.
* Track interview progress and status.
* View notifications and updates.

### 🤖 AI Features

* AI-powered interview analysis.
* Candidate skill evaluation.
* Performance scoring and feedback.
* Intelligent recommendations.

### 🎨 User Interface Features

* Fully responsive design.
* Dark mode support.
* Accessible components with ARIA attributes.
* Error handling and fallback screens.
* Loading states and retry mechanisms.

---

## 🛠 Tech Stack

### Frontend

* React.js
* React Router DOM
* Tailwind CSS
* Context API
* Axios
* Lucide React


### Authentication

* JWT Authentication
* Cookies and Sessions

### AI Integration

* Gemini API / AI Models

### Tools & Libraries

* Cloudinary
* SweetAlert2
* React Hook Form
* Vite
* Git & GitHub

---

## 📂 Project Structure

```
ZecPath/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── services/
│   │   └── assets/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── utils/
│
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/zecpath.git
cd zecpath
```

### 2. Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd ../server
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the server directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

GEMINI_API_KEY=your_gemini_api_key
```

### 4. Run the Backend

```bash
npm run dev
```

### 5. Run the Frontend

```bash
cd client
npm run dev
```

### 6. Open the Application

Frontend:

```bash
http://localhost:5173
```

Backend:

```bash
http://localhost:5000
```

---

## 🔒 Security Features

* JWT Authentication
* Protected Routes
* Password Hashing
* Input Validation
* Secure Cookies
* Error Handling Middleware
* CORS Configuration

---

## 📱 Responsive Design

ZecPath is optimized for:

* Desktop
* Tablet
* Mobile Devices

---

## 🚀 Future Enhancements

* Video Interview Support
* Real-Time Chat
* Audio Calls
* Screen Sharing
* Advanced AI Insights
* Resume Parsing
* Email Notifications
* Analytics Dashboard

---

## 👨‍💻 Author

**Subin Das S**

MERN Stack Developer

---

## 📄 License

This project is licensed under the MIT License.
