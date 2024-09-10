Chart Dashboard Application

Overview

This is a web application built using Next.js for the frontend and Django for the backend, featuring a dashboard that displays multiple types of charts (Candlestick, Line, Bar, and Pie). Data for the charts is fetched from the Django API and displayed using react-chartjs-2 and Chart.js.

Table of Contents

	1.	Getting Started
	2.	Libraries and Tools Used
	3.	Project Structure
	4.	Approach and Thought Process
	5.	Running the Application
	6.	API Endpoints

Getting Started

Prerequisites

Ensure you have the following tools installed:

	•	Node.js (v14+)
	•	npm or yarn
	•	Python (v3.8+)
	•	pip

Frontend Setup (Next.js)

	1.	Clone the repository:
  git clone <repository-url>
  cd chart-dashboard

 	2.	Install the dependencies:
  npm install
  
 	3.	Run the development server:
  npm run dev

The Next.js app should be running at http://localhost:3000.

Backend Setup (Django)

 	1.	Navigate to the backend directory:
  cd chart_backend
  
 	2.	Set up a virtual environment:
  python -m venv venv
  source venv/bin/activate   # For Mac/Linux
  venv\Scripts\activate      # For Windows

 	3.	Install the dependencies:
  pip install -r requirements.txt

 	3.	Set up a virtual environment:
  python -m venv venv
  source venv/bin/activate   # For Mac/Linux
  venv\Scripts\activate      # For Windows

 	4.	Run the Django server:
  python manage.py runserver

The Django API will be running at http://localhost:8000.

Libraries and Tools Used:

Frontend:

	•	Next.js: React-based framework for building server-rendered and static web applications.
	•	Chart.js: Flexible JavaScript charting library.
	•	react-chartjs-2: React wrapper for Chart.js.
	•	Axios: Promise-based HTTP client for making API requests.

Backend:

	•	Django: Python-based web framework for building robust APIs.
	•	Django REST Framework: Toolkit for building Web APIs in Django.
	•	CORS Headers: Middleware to handle CORS (Cross-Origin Resource Sharing) in Django.

Project Structure:
chart-dashboard/
│
├── app/                  # Next.js app folder
│   ├── components/       # Reusable components (e.g., CandlestickChart.js, LineChart.js, etc.)
│   └── pages/            # Next.js pages (e.g., dashboard.js)
│
├── chart_backend/        # Django backend API
│   ├── charts/           # Django app for serving chart data
│   ├── manage.py         # Django management script
│   ├── settings.py       # Django project settings
│   └── urls.py           # URL routing for the Django API
│
├── README.md             # Documentation
├── package.json          # Frontend dependencies and scripts
├── requirements.txt      # Backend dependencies
└── ...

Approach and Thought Process

	1.	Frontend:
	•	Used Next.js for fast server-side rendering and easy routing.
	•	Implemented a dashboard page that contains multiple charts.
	•	Fetched chart data from the Django API using Axios and dynamically populated it in charts using react-chartjs-2.
	•	The charts are rendered using Chart.js, which supports a variety of chart types including Candlestick, Line, Bar, and Pie charts.
 
	2.	Backend:
	•	Set up a simple Django backend with APIs to provide hardcoded data for each chart.
	•	Django REST Framework was used to build and manage the API endpoints.
	•	A dedicated /charts/ app was created to serve different types of chart data (Candlestick, Line, Bar, Pie).
 
	3.	Challenges:
	•	Managed the compatibility between different versions of Chart.js and the chartjs-chart-financial plugin.


  
