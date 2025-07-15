const curriculum = {
  "Ciclo I": [
    { id: "filosofia", name: "Filosofía" },
    { id: "comunicacion", name: "Comunicación" },
    { id: "matematica", name: "Matemática" },
    { id: "comportamiento", name: "Comportamiento Humano" },
    { id: "metodos", name: "Métodos de Estudio" },
    { id: "historia", name: "Historia de la Cultura Peruana" },
    { id: "desarrollo_pers1", name: "Act. Desarrollo Personal I" }
  ],
  "Ciclo II": [
    { id: "teologia", name: "Teología" },
    { id: "neurofisiologia", name: "Neurofisiología" },
    { id: "tecnologia", name: "Tecnología de los Medios" },
    { id: "sociologia", name: "Sociología de la Educación" },
    { id: "ingles1", name: "Inglés I" },
    { id: "liderazgo", name: "Liderazgo Personal" },
    { id: "redaccion", name: "Redacción Académica", prereqs: ["comunicacion"] },
    { id: "desarrollo_pers2", name: "Act. Desarrollo Personal II" }
  ],
  "Ciclo III": [
    { id: "logica", name: "Lógica" },
    { id: "realidad", name: "Realidad Nacional" },
    { id: "ecologia", name: "Ecología y Desarrollo Sostenible" },
    { id: "psico_evo", name: "Psicología Evolutiva" },
    { id: "plastica", name: "Expresión Plástica" },
    { id: "ingles2", name: "Inglés II", prereqs: ["ingles1"] },
    { id: "musica", name: "Música" },
    { id: "desarrollo_soc1", name: "Act. Desarrollo Social I" }
  ],
  "Ciclo IV": [
    { id: "iglesia", name: "Iglesia y Doctrina Social" },
    { id: "teoria_edu", name: "Teoría de la Educación" },
    { id: "literatura_lat", name: "Literatura Peruana y Latinoamericana" },
    { id: "psicomotricidad", name: "Psicomotricidad" },
    { id: "ingles3", name: "Inglés III", prereqs: ["ingles2"] },
    { id: "desarrollo_humano", name: "Desarrollo Humano: Infancia y Niñez" },
    { id: "psico_apr", name: "Psicología del Aprendizaje" },
    { id: "desarrollo_soc2", name: "Act. Desarrollo Social II" }
  ],
  "Ciclo V": [
    { id: "antropologia", name: "Antropología Filosófica" },
    { id: "admin", name: "Administración Educacional" },
    { id: "didactica_gen", name: "Didáctica General" },
    { id: "estim1", name: "Estimulación Temprana I" },
    { id: "did_musica", name: "Didáctica de la Música", prereqs: ["musica"] },
    { id: "did_ingles", name: "Didáctica del Inglés", prereqs: ["ingles3"] },
    { id: "ppp1", name: "Práctica Preprofesional Inicial I" },
    { id: "auxilios", name: "Primeros Auxilios (E)" }
  ],
  "Ciclo VI": [
    { id: "filosofia_edu", name: "Filosofía de la Educación" },
    { id: "estim2", name: "Estimulación Temprana II", prereqs: ["estim1"] },
    { id: "expresion_oral", name: "Didáctica de la Expresión Oral" },
    { id: "estadistica", name: "Estadística Educativa", prereqs: ["matematica"] },
    { id: "curriculo", name: "Currículo" },
    { id: "ppp2", name: "Práctica Preprofesional Inicial II", prereqs: ["ppp1"] },
    { id: "voz", name: "Impostación de la Voz (E)" }
  ],
  "Ciclo VII": [
    { id: "axiologia", name: "Axiología" },
    { id: "interculturalidad", name: "Educación e Interculturalidad" },
    { id: "lectura_escritura", name: "Didáctica de la Lectura y Escritura", prereqs: ["expresion_oral"] },
    { id: "literatura_inf", name: "Literatura Infantil" },
    { id: "program_curr", name: "Programación Curricular", prereqs: ["curriculo"] },
    { id: "evaluacion", name: "Evaluación Educacional" },
    { id: "ppp3", name: "Práctica Preprofesional Intermedia I", prereqs: ["ppp2"] }
  ],
  "Ciclo VIII": [
    { id: "etica", name: "Ética Profesional" },
    { id: "gestion", name: "Gestión Educativa" },
    { id: "proyectos_curr", name: "Proyectos Curriculares", prereqs: ["program_curr"] },
    { id: "did_ciencias_nat", name: "Didáctica Ciencias Naturales" },
    { id: "did_mate", name: "Didáctica Matemática" },
    { id: "did_sociales", name: "Didáctica Ciencias Sociales" },
    { id: "instrumentos_eval", name: "Diseño de Instrumentos de Evaluación", prereqs: ["evaluacion"] },
    { id: "ppp4", name: "Práctica Preprofesional Intermedia II", prereqs: ["ppp3"] }
  ],
  "Ciclo IX": [
    { id: "diversidad", name: "Atención a la Diversidad (E)" },
    { id: "inclusion", name: "Inclusión Educativa (E)" },
    { id: "estrategias", name: "Estrategias de Inclusión (E)" },
    { id: "invest1", name: "Investigación Educacional I" },
    { id: "diseno_aprend", name: "Diseño de Proyectos de Aprendizaje", prereqs: ["proyectos_curr"] },
    { id: "ppp_final1", name: "Práctica Preprofesional Final I", prereqs: ["ppp4"] }
  ],
  "Ciclo X": [
    { id: "propuestas", name: "Propuestas Pedagógicas para la Infancia" },
    { id: "invest2", name: "Investigación Educacional II", prereqs: ["invest1"] },
    { id: "ppp_final2", name: "Práctica Preprofesional Final II", prereqs: ["ppp_final1"] }
  ]
};

const container = document.getElementById("curriculum-container");

function createCourse(course) {
  const div = document.createElement("div");
  div.className = "course";
  div.id = course.id;
  div.innerText = course.name;
  if (course.prereqs && course.prereqs.length > 0) {
    div.classList.add("locked");
  }
  div.addEventListener("click", () => {
    if (div.classList.contains("locked")) return;
    div.classList.toggle("approved");
    updateUnlocks();
  });
  return div;
}

function renderCurriculum() {
  for (const ciclo in curriculum) {
    const row = document.createElement("div");
    row.className = "cycle-row";
    const title = document.createElement("h2");
    title.textContent = ciclo;
    row.appendChild(title);
    curriculum[ciclo].forEach(course => {
      const courseElem = createCourse(course);
      row.appendChild(courseElem);
    });
    container.appendChild(row);
  }
}

function updateUnlocks() {
  for (const ciclo in curriculum) {
    curriculum[ciclo].forEach(course => {
      const element = document.getElementById(course.id);
      if (element.classList.contains("approved") || !course.prereqs) return;
      const fulfilled = course.prereqs.every(pr => {
        const prElem = document.getElementById(pr);
        return prElem && prElem.classList.contains("approved");
      });
      if (fulfilled) {
        element.classList.remove("locked");
      } else {
        element.classList.add("locked");
      }
    });
  }
}

renderCurriculum();
