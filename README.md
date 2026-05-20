# 💈 Kontainer do Imperador — Barbershop Dashboard

Painel de controle premium para a **Kontainer do Imperador Barbershop**, desenvolvido em HTML/CSS/JS puro com visual SaaS de alto nível.

## 🚀 Como subir no GitHub Pages

### Opção 1 — Upload direto (mais fácil)
1. Acesse [github.com](https://github.com) e crie um repositório (ex: `barbershop-dashboard`)
2. Clique em **"Add file" → "Upload files"**
3. Faça upload do `index.html`
4. Vá em **Settings → Pages → Source → main / root**
5. Clique em **Save**
6. Acesse: `https://seuusuario.github.io/barbershop-dashboard`

### Opção 2 — Via Git
```bash
git init
git add index.html
git commit -m "feat: barbershop dashboard"
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
git push -u origin main
```
Depois ative o GitHub Pages em **Settings → Pages**.

---

## 🔐 Login padrão
| Campo | Valor |
|-------|-------|
| Usuário | `admin` |
| Senha | `1234` |

---

## 📦 Funcionalidades

| Módulo | Status |
|--------|--------|
| Dashboard com métricas em tempo real | ✅ |
| Gráficos animados (Chart.js) | ✅ |
| Sistema de agendamentos | ✅ |
| Gestão de clientes + busca | ✅ |
| Gestão de barbeiros + ranking | ✅ |
| Controle financeiro + fluxo de caixa | ✅ |
| Controle de estoque com alertas | ✅ |
| Configurações do sistema | ✅ |
| Tela de login fictícia | ✅ |
| Design dark premium (preto + dourado) | ✅ |
| Responsivo mobile/tablet/desktop | ✅ |
| Sidebar recolhível | ✅ |
| Modal de cadastro | ✅ |
| Notificações toast | ✅ |

---

## 🎨 Stack Técnica
- HTML5 + CSS3 + JavaScript puro
- Chart.js via CDN
- Google Fonts (Playfair Display + DM Sans)
- localStorage ready para persistência futura
- Preparado para integração com Firebase / Supabase

---

## 📁 Estrutura
```
/
└── index.html   ← arquivo único, tudo incluso
```

> Para expansão futura, separe em `style.css`, `app.js` e pasta `components/`.

---

Made with ♥ for **Kontainer do Imperador Barbershop** · Est. 2021
