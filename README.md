# 🏥 ClinicPlus — Site Cabinet Médical Généraliste

![CI/CD](https://github.com/VOTRE_USERNAME/clinicplus/actions/workflows/ci-cd.yml/badge.svg)

> Projet scolaire — CI/CD avec GitHub Actions & GitHub Pages

---

## 📄 Pages du site

| Page | Fichier | Description |
|------|---------|-------------|
| Accueil | `index.html` | Hero, services, médecins, témoignages |
| Médecins | `medecins.html` | Équipe complète avec disponibilités |
| Services | `services.html` | Catalogue des soins + FAQ |
| Rendez-vous | `rendez-vous.html` | Formulaire de prise de RDV |
| Contact | `contact.html` | Formulaire + horaires + carte |

---

## 🚀 Installation locale

```bash
git clone https://github.com/VOTRE_USERNAME/clinicplus.git
cd clinicplus
npm install
npm run lint
```

---

## 🌿 Stratégie de branches

```
main
 └── feature/accueil
 └── feature/medecins
 └── feature/services
 └── feature/rendez-vous
 └── feature/contact
```

---

## ⚙️ Pipeline CI/CD

- **Sur PR** → Lint HTML + CSS (bloque le merge si erreur)
- **Sur push main** → Lint puis déploiement GitHub Pages

---

## 🌐 Site déployé

**URL :** https://VOTRE_USERNAME.github.io/clinicplus/
