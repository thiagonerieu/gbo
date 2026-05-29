/gamebook-organiser
│
├── /public                    ← site vitrine, blog, vendas
│   ├── index.html
│   ├── blog.html
│   ├── pricing.html
│   └── /assets
│       ├── /css
│       │   ├── public-base.css
│       │   ├── public-home.css
│       │   └── public-blog.css
│       ├── /js
│       └── /imgs
│
├── /app                       ← aplicação interna (após login)
│   ├── dashboard.html
│   ├── project.html
│   └── /assets
│       ├── /css
│       │   ├── app-base.css
│       │   ├── app-dashboard.css
│       │   └── app-project.css
│       ├── /js
│       │   ├── app-auth.js
│       │   ├── app-charts.js
│       │   └── app-project.js
│       └── /imgs
│
├── /auth                      ← login, signup, recuperação
│   ├── login.html
│   ├── signup.html
│   └── account-recovery.html
│
├── /shared                    ← tudo que é compartilhado entre as partes
│   ├── /css
│   │   └── base.css           ← reset, tipografia, variáveis CSS
│   ├── /js
│   │   └── utils.js
│   ├── /fonts
│   └── /icons
│
└── /imgs                      ← imagens globais (logo, og:image, etc.)
   
/shared/js/utils.js          ← funções reutilizáveis (validação, formatação)
/auth/auth.js                ← login, signup, recovery
/app/js/charts.js            ← gráficos
/app/js/projects.js          ← CRUD de projetos
/app/js/ui.js                ← sidebar, menus, dark mode