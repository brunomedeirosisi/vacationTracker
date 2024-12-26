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