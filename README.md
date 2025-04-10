# Task Quest: Gamified To-Do List Application

Task Quest transforms the ordinary to-do list into an engaging RPG-style adventure where completing tasks earns you experience points, levels, and achievements!

![WhatsApp Image 2025-04-10 at 10 52 47_56bc85a8](https://github.com/user-attachments/assets/5b59d491-4428-44c2-9101-19e43c0de9a3)

![WhatsApp Image 2025-04-10 at 10 53 19_433b9dd8](https://github.com/user-attachments/assets/07b229f5-8626-496c-bf28-72dcef8d0651)


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
