
**Calminder**

Studies show that spending only 2 hours outside a week can drastically improve our mental health. In the modern day and age, we spend too much time on our phones, computers, and inside in general. This is a problem especially applicable to students, often bogged down in classes and homework. This can often leave students with little time to go outside. With Calminder, you don't have to schedule outside time yourself- it is automatically and smartly worked into your schedule.
The API balances the time of day and the duration of the gap in schedule to find the optimal break for you to spend outside. 


*note*
the frontend of this project is not yet linked to the backend. the frontend is a prototype, we ran out of time to fully implement it.

**Frontend Installation**

Open all the files into your preferred code editor and open index.html to view the home page.

## Features

- **Smart Break Detection**: Analyzes gaps in your schedule to find free time
- **Optimal Time Selection**: Uses an intelligent algorithm that balances: 
  - Time of day (prioritizes midday hours for better weather/sunlight)
  - Duration of available breaks
- **Calendar Integration**: Built with FullCalendar 5.10.1 for intuitive schedule visualization
- **REST API**: Flask-based backend for schedule analysis

## Installation

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend/src
```

2. Install dependencies:
```bash
pip install -r requirements. txt
```

3. Run the Flask server:
```bash
python app.py
```

The API will be available at `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend/src
```

2. Open `index.html` in your preferred web browser


## How It Works

The algorithm analyzes free time slots between scheduled events using two key factors: 

1. **Noon Offset Score**: Prioritizes times closer to midday (better natural light and weather)
2. **Duration**:  Among top-ranked times, selects the longest available break

This ensures you get the best possible outdoor break suggestion based on both timing and duration. 

## Tech Stack

- **Backend**: Python, Flask, Docker
- **Frontend**: HTML, CSS, JavaScript
- **Calendar Library**: FullCalendar 5.10.1

## License

This project is open source and available for educational purposes.

