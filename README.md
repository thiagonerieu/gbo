/gamebook-organiser
│
├── /app                                    ← aplicação interna (após login)
│   ├── gbo-app-account.html
│   ├── project.html
│   └── /assets
│       ├── /css
│       │   ├── gbo-app-account.css
│       │   ├── .css
│       │   └── .css
│       ├── /imgs
│       └── /js
│           ├── gbo-app-account.js
│           ├── .js
│           └── .js
├── /auth                                   ← login, signup, recuperação
│   ├── /css
│   │   ├── gbo-auth-account-recovery.css
│   │   ├── gbo-auth-login.css
│   │   └── gbo-auth-signup.css   
│   ├── /js
│   │    ├── gbo-auth-account-recovery.js
│   │    ├── gbo-auth-login.js
│   │    └── gbo-auth-signup.js
│   ├── gbo-auth-account-recovery.html
│   ├── gbo-auth-login.html
│   └── gbo-auth-signup.html
├── /imgs                                   ← imagens globais (logo, og:image, etc.)
├── /public                                 ← site vitrine, blog, vendas
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
└── /shared                                 ← tudo que é compartilhado entre as partes
    ├── /css
    │   └── gbo-base.css                    ← reset, tipografia, variáveis CSS
    ├── /js
    │   └── utils.js
    ├── /fonts
    └── /icons

/shared/js/utils.js          ← funções reutilizáveis (validação, formatação)
/auth/auth.js                ← login, signup, recovery 
/app/js/charts.js            ← gráficos
/app/js/projects.js          ← CRUD de projetos
/app/js/ui.js                ← sidebar, menus, dark mode