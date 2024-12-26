# vacationTracker
Vacation tracker for analyse the team vacation impact per project


Back-end
.
├── src
│   ├ 
│   │── services
│   │   │   ├── projectService.js
│   │   │   ├── dedicationService.js
│   │   │   └── vacationService.js
│   ├── domain/
│   │   ├── entities/
│   │   │   ├── employee.js
│   │   │   ├── project.js
│   │   │   └── vacation.js
│   │   └── repositories/
│   │       ├── employeeRepository.js
│   │       ├── projectRepository.js
│   │       └── vacationRepository.js
│   ├── infrastructure
│   │   ├── database
│   │   │   └── mongoose.js
│   │   ├── web
│   │   │   ├── routes
│   │   │   │   ├── projectRoutes.js
│   │   │   │   ├── dedicationRoutes.js
│   │   │   │   └── vacationRoutes.js
│   │   │   └── server.js
│   └── utils
│       └── validationSchemas.js
├── .env
├── .gitignore
└── README.md

https://docs.dhtmlx.com/gantt/samples/?sample=%2704_customization/11_split_task.html%27&filter=%27%27
https://docs.dhtmlx.com/gantt/desktop__split_tasks.html



data: [
			{id: 11, text: "Project #1", type: "project", progress: 0, open: true, start_date: "02-04-2023 00:00", end_date: "02-04-2024 00:00", parent: 0},
			{id: 13, text: "Fulano #1", start_date: "03-04-2023 00:00", type: "project", render:"split", parent: "11", progress: 0.5, open: false, duration: 11,role:"dev"},
			{id: 17, text: "03-04 -> 05-04", start_date: "03-04-2023 00:00",  duration: 2, parent: "13", progress: 0, open: true },
			{id: 18, text: "05-04 -> 07-04", start_date: "05-04-2023 00:00", duration: 2, parent: "13", progress: 0, open: true},
			{id: 19, text: "08-04 -> 09-04", start_date: "08-04-2023 00:00", duration: 1, parent: "13", progress: 0, open: true},
		
			{id: 14, text: "Fulano #2", start_date: "03-04-2023 00:00", type: "project", render:"split", parent: "11", progress: 0.5, open: false, duration: 11,role:"design"},
			{id: 20, text: "03-04 -> 05-04", start_date: "03-04-2023 00:00",  duration: 2, parent: "14", progress: 0, open: true },
			{id: 21, text: "05-04 -> 07-04", start_date: "05-04-2023 00:00", duration: 2, parent: "14", progress: 0, open: true},
			{id: 22, text: "08-04 -> 09-04", start_date: "08-04-2023 00:00", duration: 1, parent: "14", progress: 0, open: true},

			{id: 16, text: "Final milestone", start_date: "15-04-2023 00:00", duration: 0, type: "milestone", parent: "11", progress: 0, open: true, duration: 0}
		]