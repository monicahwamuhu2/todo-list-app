# Task Quest: Gamified To-Do List Application

Task Quest transforms the ordinary to-do list into an engaging RPG-style adventure where completing tasks earns you experience points, levels, and achievements!

## Live Demo

Check out the live application: [Task Quest Live Demo](https://silly-muffin-ca39e5.netlify.app/)

*Note: The frontend is deployed on Netlify. For the full experience with persistent data storage, you'll need to set up the backend server locally or deploy it to a service like Render or Heroku following the deployment instructions below.*

## Features

- **Experience System**: Earn XP for completing tasks and level up
- **Achievement Badges**: Unlock achievements for reaching different milestones
- **Task Categories**: Organize tasks as Adventures, Daily Quests, or Boss Battles
- **Priority Levels**: Assign priorities with visual indicators
- **Task Streaks**: Maintain a streak by completing tasks daily
- **Dark/Light Mode**: Toggle between comfortable viewing modes
- **Offline Support**: Continue using the app even when the server is unavailable
- **Countdown Timers**: Visual reminders for urgent tasks

## Project Structure

```
Task-Quest/
├── Frontend/
│   └── index.html
├── Backend/
│   ├── server.js
│   ├── package.json
│   └── data/
│       └── tasks.json
└── README.md
```

## Installation and Setup

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Backend Setup

1. Create a new directory for the project:
```bash
mkdir Task-Quest
cd Task-Quest
mkdir Frontend Backend
```

2. Navigate to the Backend directory and initialize npm:
```bash
cd Backend
npm init -y
```

3. Install required dependencies:
```bash
npm install express cors body-parser
```

4. Create the server.js file using the provided code.

5. Create a data directory for persistent storage:
```bash
mkdir data
```

### Frontend Setup

1. Navigate to the Frontend directory:
```bash
cd ../Frontend
```

2. Create index.html file using the provided code.

## Running the Application

1. Start the backend server:
```bash
cd Backend
node server.js
```

2. Open the frontend in your browser:
   - If you have a local server installed (like VS Code's Live Server extension), use it to serve the Frontend directory
   - Alternatively, you can directly open the Frontend/index.html file in your browser

3. The application should now be running on http://localhost:3000

## Deployment Options

### Option 1: Deploy on Netlify (Frontend)

The frontend is currently deployed on Netlify at [https://silly-muffin-ca39e5.netlify.app/](https://silly-muffin-ca39e5.netlify.app/).

To deploy your own version:

1. Fork or clone this repository to your GitHub account
2. Log in to [Netlify](https://netlify.com)
3. Click "New site from Git" and select your repository
4. Configure build settings:
   - Base directory: `Frontend` (if using the project structure described above)
   - Build command: Leave blank
   - Publish directory: `Frontend`
5. Click "Deploy site"

### Option 2: Deploy Backend on Render

1. Create a new Web Service on [Render](https://render.com)
2. Link your repository 
3. Configure your service:
   - Build Command: `npm install`
   - Start Command: `node server.js`
   - Root Directory: `Backend` (if using the project structure described above)
4. Update the API URLs in your frontend to point to your Render service URL

### Option 3: Deploy with Docker

1. Create a Dockerfile in the project root:
```dockerfile
FROM node:14

WORKDIR /app

COPY Backend/package*.json ./
RUN npm install

COPY Backend ./
COPY Frontend ./public

EXPOSE 3000

CMD ["node", "server.js"]
```

2. Build and run the Docker container:
```bash
docker build -t task-quest .
docker run -p 3000:3000 task-quest
```

### Option 4: Connect Frontend to Local Backend

If you've deployed the frontend on Netlify but want to use a local backend during development:

1. Run the backend server locally on port 3000
2. Use a CORS proxy extension in your browser to allow the frontend to communicate with your local backend
3. Alternatively, modify the backend to accept requests from your Netlify domain

## Customization Options

### Add More Categories

Edit the `taskCategory` select element in index.html to add more quest types:

```html
<select id="taskCategory">
    <option value="adventure">Adventure</option>
    <option value="daily">Daily Quest</option>
    <option value="boss">Boss Battle</option>
    <option value="crafting">Crafting</option>
    <option value="exploration">Exploration</option>
</select>
```

### Add More Achievements

1. Add new badges to the badges container in HTML:
```html
<div class="badge" id="badge-legend">
    <i class="fas fa-crown"></i>
    <div class="badge-tooltip">Legend: Reach level 10</div>
</div>
```

2. Add the badge check logic to the `checkForBadges` function:
```javascript
// Legend badge (level 10)
if (playerStats.level >= 10 && !playerStats.earnedBadges.includes('legend')) {
    playerStats.earnedBadges.push('legend');
}
```

### Customize XP System

Modify the `calculateXP` function to change how XP is awarded:

```javascript
function calculateXP(task) {
    let xp = 30; // Increase base XP
    
    // Higher bonus for priorities
    if (task.priority === 'high') {
        xp += 30;
    } else if (task.priority === 'medium') {
        xp += 15;
    }
    
    // Add more custom rules
    return xp;
}
```

## Advanced Features to Consider

1. **User Accounts**: Add authentication to allow multiple users
2. **Social Features**: Share achievements with friends
3. **Task Recurrence**: Set up repeating tasks on a schedule
4. **Inventory System**: Collect virtual items for completing tasks
5. **Task Dependencies**: Create quests with multiple steps
6. **Customizable Themes**: Let users select different visual themes
7. **Mobile App**: Convert to a React Native or Flutter mobile app
8. **Push Notifications**: Remind users of upcoming deadlines
9. **Voice Commands**: Add voice recognition for adding tasks
10. **Analytics Dashboard**: Track productivity patterns over time

## License

MIT License

## Credits

- Icons by [Font Awesome](https://fontawesome.com/)
- Live demo hosted on [Netlify](https://silly-muffin-ca39e5.netlify.app/)
