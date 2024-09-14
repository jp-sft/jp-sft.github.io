// Charger les données depuis cv.json et peupler la page
fetch("cv.json")
  .then((response) => response.json())
  .then((data) => {
    // Détails personnels
    document.getElementById("profile-image").src =
      data.personal_details.profile_image;
    document.getElementById("name").textContent = data.personal_details.name;
    document.getElementById("main-name").textContent =
      data.personal_details.name;
    document.getElementById("email").textContent = data.personal_details.email;
    document.getElementById("phone").textContent = data.personal_details.phone;
    document.getElementById("linkedin").href = data.personal_details.linkedin;
    document.getElementById("github").href = data.personal_details.github;
    document.getElementById("portfolio").href = data.personal_details.portfolio;

    // Résumé
    document.getElementById("summary").textContent = data.summary;

    // Langues
    const languagesDiv = document.getElementById("languages");
    data.languages.forEach((lang) => {
      const langDiv = document.createElement("div");
      langDiv.className = "langue";

      const langName = document.createElement("span");
      langName.textContent = lang.language;

      const levelDiv = document.createElement("div");
      for (let i = 0; i < 5; i++) {
        const dot = document.createElement("span");
        dot.className = i < lang.level ? "dot-select" : "dot";
        levelDiv.appendChild(dot);
      }

      langDiv.appendChild(langName);
      langDiv.appendChild(levelDiv);
      languagesDiv.appendChild(langDiv);
    });

    // Centres d'intérêt
    const interestsDiv = document.getElementById("interests");
    data.interests.forEach((interest) => {
      const p = document.createElement("p");
      const icon = document.createElement("span");
      icon.className = "material-symbols-outlined";
      icon.textContent = "code"; // Vous pouvez changer l'icône en fonction de l'intérêt
      const text = document.createElement("span");
      text.textContent = interest;
      p.appendChild(icon);
      p.appendChild(text);
      interestsDiv.appendChild(p);
    });

    // Expériences professionnelles
    const experiencesDiv = document.getElementById("experiences");
    data.experiences.forEach((exp) => {
      const expDiv = document.createElement("div");
      const h3 = document.createElement("h3");
      h3.textContent = `${exp.title}, ${exp.company}${
        exp.location ? ", " + exp.location : ""
      }`;
      const period = document.createElement("p");
      period.innerHTML = `<b>Période :</b> ${exp.period}`;
      const ul = document.createElement("ul");
      exp.responsibilities.forEach((resp) => {
        const li = document.createElement("li");
        li.textContent = resp;
        ul.appendChild(li);
      });
      expDiv.appendChild(h3);
      expDiv.appendChild(period);
      expDiv.appendChild(ul);
      experiencesDiv.appendChild(expDiv);
    });

    // Projets académiques
    const projectsDiv = document.getElementById("academic-projects");
    data.academic_projects.forEach((proj) => {
      const projectDiv = document.createElement("div");
      projectDiv.className = "academic-project";
      const icon = document.createElement("span");
      icon.className = "material-symbols-outlined";
      icon.textContent = "article";
      const contentDiv = document.createElement("div");
      const strong = document.createElement("strong");
      strong.className = "name";
      strong.textContent = proj.name;
      const teckDiv = document.createElement("div");
      teckDiv.className = "teck";
      const teckTitle = document.createElement("span");
      teckTitle.className = "title";
      teckTitle.textContent = "Technologies utilisées";
      const teckContent = document.createElement("p");
      teckContent.className = "teck-content";
      teckContent.textContent = proj.technologies.join(", ");
      teckDiv.appendChild(teckTitle);
      teckDiv.appendChild(teckContent);
      const descDiv = document.createElement("div");
      descDiv.className = "desc";
      const descContent = document.createElement("p");
      descContent.className = "desc-content";
      descContent.textContent = proj.description;
      descDiv.appendChild(descContent);
      contentDiv.appendChild(strong);
      contentDiv.appendChild(teckDiv);
      contentDiv.appendChild(descDiv);
      projectDiv.appendChild(icon);
      projectDiv.appendChild(contentDiv);
      projectsDiv.appendChild(projectDiv);
    });

    // Certifications
    const certificationsUl = document.getElementById("certifications");
    data.certifications.forEach((cert) => {
      const li = document.createElement("li");
      li.textContent = cert;
      certificationsUl.appendChild(li);
    });

    // Compétences Techniques
    const skillsUl = document.getElementById("technical-skills");
    for (const category in data.technical_skills) {
      const li = document.createElement("li");
      li.innerHTML = `<b>${category} :</b> ${data.technical_skills[
        category
      ].join(", ")}`;
      skillsUl.appendChild(li);
    }

    // Projets Personnels
    const personalProjectsDiv = document.getElementById("personal-projects");
    data.personal_projects.forEach((proj) => {
      const projectDiv = document.createElement("div");
      projectDiv.className = "academic-project";
      const icon = document.createElement("span");
      icon.className = "material-symbols-outlined";
      icon.textContent = "article";
      const contentDiv = document.createElement("div");
      const strong = document.createElement("strong");
      strong.className = "name";
      strong.textContent = proj.name;
      const teckDiv = document.createElement("div");
      teckDiv.className = "teck";
      const teckTitle = document.createElement("span");
      teckTitle.className = "title";
      teckTitle.textContent = "Technologies utilisées";
      const teckContent = document.createElement("p");
      teckContent.className = "teck-content";
      teckContent.textContent = proj.technologies.join(", ");
      teckDiv.appendChild(teckTitle);
      teckDiv.appendChild(teckContent);
      const descDiv = document.createElement("div");
      descDiv.className = "desc";
      const descContent = document.createElement("p");
      descContent.className = "desc-content";
      descContent.textContent = proj.description;
      descDiv.appendChild(descContent);
      contentDiv.appendChild(strong);
      contentDiv.appendChild(teckDiv);
      contentDiv.appendChild(descDiv);
      projectDiv.appendChild(icon);
      projectDiv.appendChild(contentDiv);
      personalProjectsDiv.appendChild(projectDiv);
    });

    // Formation
    const educationDiv = document.getElementById("education");
    data.education.forEach((edu) => {
      const p = document.createElement("p");
      p.className = "formation";
      const degree = document.createElement("b");
      degree.className = "formation";
      degree.textContent = edu.degree;
      const year = document.createElement("b");
      year.className = "annee";
      year.textContent = edu.year;
      p.appendChild(degree);
      p.appendChild(year);
      educationDiv.appendChild(p);
    });
  })
  .catch((error) =>
    console.error("Erreur lors du chargement des données du CV:", error)
  );
