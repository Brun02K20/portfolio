import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  es: {
    translation: {
      common: {
        ok: "OK",
      },
      header: {
        about: "About",
        experience: "Experience",
        skills: "Skills",
        projects: "Projects",
        education: "Education",
        contact: "Contact",
      },
      about: {
        role: "Bruno Virinni - Fullstack Developer",
        p1: "I'm a Fullstack Developer with over four years of experience in software development and a University Information Systems Developer Analyst, a graduate of the UTN, currently in my final year of Information Systems Engineering.",
        p2: "Throughout my career, I've worked on various projects on both the backend and frontend, utilizing modern technologies to build efficient, scalable, and user-centric solutions. I stand out for my ability to quickly adapt to new environments and languages, and for my mindset focused on problem-solving and continuous improvement.",
        p3: "In my free time I enjoy exercising, spending time with friends, and playing video games.",
        downloadCv: "Download CV",
        contactMe: "Contact Me",
        projects: "Projects",
      },
      experience: {
        title: "Experience",
        subtitlePrefix: "My professional journey so far. More details",
        subtitleLink: "here",
        items: {
          cw: {
            period: "08.2024 - present",
            position: "Sr. FullStack Developer; Team Leader & CoFounder",
            company: "CodeandoWeb - Digital Business Solutions",
            points: [
              "Digital solutions for businesses: commercial websites, management systems, and payment gateways.",
              "Requirements gathering, scope definition, and project estimation in direct contact with clients.",
            ],
          },
          engSsr: {
            period: "06.2024 - 01.2026",
            position: "Ssr. FullStack Developer & Team Leader",
            company: "EngTrade - Consulting Services",
            points: [
              "Active participation in software architecture and technical planning, considering scalability, availability, and long-term maintenance.",
              "Participation in multiple software projects with an end-to-end product vision, from analysis and design to development and deployment, including commercial platforms and ERP systems.",
              "Estimation and planning of software projects, aligning technical solutions with product and business requirements.",
            ],
          },
          engJr: {
            period: "12.2021 - 06.2024",
            position: "Jr. FullStack Developer",
            company: "EngTrade - Consulting Services",
            points: [
              "Development of software products in JavaScript.",
              "Increasing the scalability of existing systems.",
              "Optimizing queries in databases.",
              "Designing intuitive and user-friendly interfaces.",
              "Training new employees within the organization.",
            ],
          },
        },
      },
      skills: {
        title: "Skills",
        frontend: "Frontend",
        backend: "Backend",
        database: "Database",
        tools: "Tools & AI",
        cloud: "Cloud & DevOps",
        learning: "Learning",
      },
      projects: {
        title: "Projects",
        liveSite: "Live Site",
        frontend: "Frontend",
        backend: "Backend",
        github: "Github",
        items: {
          doctorfyTitle: "DoctorFY - Medical Platform",
          doctorfyDesc:
            "Medical appointment information system within 72 hours. More than 200 users on launch day. Featuring appointment scheduling, patient dashboard, waiting room system, and consultation management for healthcare professionals. Work done for ENGTRADE.",
          flexTitle: "Flex Trainer",
          flexDesc:
            "Fitness tracking application with workout routines, progress monitoring, tutorial videos, QR scanning, and personalized training plans. Perfect for gym enthusiasts and fitness professionals.",
          kokusTitle: "Kokus - Guest Experience App",
          kokusDesc:
            "Guest experience application for hostels, offering personalized recommendations, local insights, and activities. Enhances guest satisfaction and engagement.",
          coffeeTitle: "Coffee To Go - Restaurant Website",
          coffeeDesc:
            "Modern coffee shop website with online ordering system, menu display, location services, and social media integration. Features clean design and mobile-responsive layout. Work done for ARRE.",
          cardelliDesc:
            "Modern tire shop website with online ordering system, menu display, location services, and social media integration. Features clean design and mobile-responsive layout. Work done for Cardelli.",
          mclDesc:
            "Modern car shop website with online ordering system, menu display, location services, and social media integration. Features clean design and mobile-responsive layout. Work done for MCL.",
          alvarezDesc:
            "Modern dry construction website with online ordering system, menu display, location services, and social media integration. Features clean design and mobile-responsive layout. Work done for Alvarez.",
          courseDesc:
            "Educational platform for managing academic courses, subjects, and student progress. Features organized curriculum structure and progress tracking.",
          currencyDesc:
            "Financial application for currency exchange rates, historical data analysis, and real-time market information with Argentine peso focus.",
          cardelliTitle: "Cardelli - Tire shop",
          mclTitle: "MCL - Car shop",
          alvarezTitle: "Alvarez - Dry construction",
          courseTitle: "Course Management System",
          currencyTitle: "Currency Exchange Platform",
        },
      },
      education: {
        title: "Education",
        subtitle: "My academic background and ongoing learning journey.",
        periodPresent: "03.2021 - present",
        degree1: "Information Systems Engineer",
        degree2: "Full Stack Web Development",
        degree3: "University Information Systems Developer Analyst",
        institutionPlatzi: "Platzi - Online Courses",
        subjects: {
          dsAlgo: "Data Structures and Algorithms",
          dbSystems: "Database Systems",
          seQa: "Software Engineering and Quality Assurance",
          webDev: "Web Development",
          networks: "Computer Networks",
          ai: "Artificial Intelligence",
          dataScience: "Data Science",
          softwareDev: "Software Development",
          systemsDesign: "Information Systems Design",
          databases: "Databases",
          systemsAnalysis: "Information Systems Analysis",
          backendApps: "Backend Applications",
        },
      },
      contact: {
        title: "Contact Me",
        getInTouch: "Get In Touch",
        intro:
          "I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!",
        email: "Email",
        phone: "Phone",
        location: "Location",
        sendMessage: "Send Message",
        namePlaceholder: "John Doe",
        emailPlaceholder: "email@example.com",
        messagePlaceholder: "Hi, I would like to...",
        sending: "Sending...",
        send: "Send Message",
        notice: "Notice",
        success: "Message sent successfully!",
        error: "Error sending message. Please try again later.",
      },
      footer: {
        rights: "All rights reserved.",
      },
    },
  },
  en: {
    translation: {
      common: {
        ok: "Aceptar",
      },
      header: {
        about: "Sobre mí",
        experience: "Experiencia",
        skills: "Habilidades",
        projects: "Proyectos",
        education: "Educación",
        contact: "Contacto",
      },
      about: {
        role: "Bruno Virinni - Desarrollador Fullstack",
        p1: "Soy Desarrollador Fullstack con más de cuatro años de experiencia en desarrollo de software y Analista Universitario en Sistemas de Información, egresado de la UTN, actualmente cursando el último año de Ingeniería en Sistemas de Información.",
        p2: "A lo largo de mi carrera trabajé en diversos proyectos tanto de backend como de frontend, utilizando tecnologías modernas para construir soluciones eficientes, escalables y centradas en el usuario. Me destaco por mi capacidad de adaptación rápida a nuevos entornos y lenguajes, y por una mentalidad enfocada en la resolución de problemas y la mejora continua.",
        p3: "En mi tiempo libre disfruto hacer ejercicio, pasar tiempo con amigos y jugar videojuegos.",
        downloadCv: "Descargar CV",
        contactMe: "Contactarme",
        projects: "Proyectos",
      },
      experience: {
        title: "Experiencia",
        subtitlePrefix: "Mi recorrido profesional hasta ahora. Más detalles",
        subtitleLink: "aquí",
        items: {
          cw: {
            period: "08.2024 - actualidad",
            position: "Sr. Desarrollador FullStack; Team Leader y CoFounder",
            company: "CodeandoWeb - Soluciones Digitales para Negocios",
            points: [
              "Soluciones digitales para empresas: sitios comerciales, sistemas de gestión y pasarelas de pago.",
              "Relevamiento de requerimientos, definición de alcance y estimación de proyectos en contacto directo con clientes.",
            ],
          },
          engSsr: {
            period: "06.2024 - 01.2026",
            position: "Ssr. Desarrollador FullStack y Team Leader",
            company: "EngTrade - Servicios de Consultoría",
            points: [
              "Participación activa en arquitectura de software y planificación técnica, considerando escalabilidad, disponibilidad y mantenimiento a largo plazo.",
              "Participación en múltiples proyectos de software con visión end-to-end, desde análisis y diseño hasta desarrollo y despliegue, incluyendo plataformas comerciales y sistemas ERP.",
              "Estimación y planificación de proyectos de software, alineando soluciones técnicas con requerimientos de producto y negocio.",
            ],
          },
          engJr: {
            period: "12.2021 - 06.2024",
            position: "Jr. Desarrollador FullStack",
            company: "EngTrade - Servicios de Consultoría",
            points: [
              "Desarrollo de productos de software en JavaScript.",
              "Aumento de la escalabilidad de sistemas existentes.",
              "Optimización de consultas en bases de datos.",
              "Diseño de interfaces intuitivas y fáciles de usar.",
              "Capacitación de nuevos empleados dentro de la organización.",
            ],
          },
        },
      },
      skills: {
        title: "Habilidades",
        frontend: "Frontend",
        backend: "Backend",
        database: "Base de datos",
        tools: "Herramientas e IA",
        cloud: "Cloud y DevOps",
        learning: "Aprendiendo",
      },
      projects: {
        title: "Proyectos",
        liveSite: "Sitio",
        frontend: "Frontend",
        backend: "Backend",
        github: "Github",
        items: {
          doctorfyTitle: "DoctorFY - Plataforma Médica",
          doctorfyDesc:
            "Sistema de gestión de turnos médicos en 72 horas. Más de 200 usuarios el día del lanzamiento. Incluye agenda de turnos, panel del paciente, sala de espera y gestión de consultas para profesionales de la salud. Trabajo realizado para ENGTRADE.",
          flexTitle: "Flex Trainer",
          flexDesc:
            "Aplicación de seguimiento fitness con rutinas de entrenamiento, monitoreo de progreso, videos tutoriales, escaneo QR y planes personalizados. Ideal para entusiastas del gimnasio y profesionales del fitness.",
          kokusTitle: "Kokus - App de Experiencia para Huéspedes",
          kokusDesc:
            "Aplicación de experiencia para huéspedes de hostels, con recomendaciones personalizadas, información local y actividades. Mejora la satisfacción y el engagement de los huéspedes.",
          coffeeTitle: "Coffee To Go - Sitio Web Gastronómico",
          coffeeDesc:
            "Sitio web moderno para cafetería con sistema de pedidos online, visualización de menú, ubicación e integración con redes sociales. Diseño limpio y responsive. Trabajo realizado para ARRE.",
          cardelliDesc:
            "Sitio web moderno para gomería con sistema de pedidos online, visualización de catálogo, ubicación e integración con redes sociales. Diseño limpio y responsive. Trabajo realizado para Cardelli.",
          mclDesc:
            "Sitio web moderno para concesionaria con sistema de pedidos online, visualización de catálogo, ubicación e integración con redes sociales. Diseño limpio y responsive. Trabajo realizado para MCL.",
          alvarezDesc:
            "Sitio web moderno para construcción en seco con sistema de pedidos online, visualización de servicios, ubicación e integración con redes sociales. Diseño limpio y responsive. Trabajo realizado para Alvarez.",
          courseDesc:
            "Plataforma educativa para gestionar cursos académicos, materias y progreso de estudiantes. Incluye estructura curricular organizada y seguimiento de avance.",
          currencyDesc:
            "Aplicación financiera para cotizaciones de divisas, análisis histórico y datos de mercado en tiempo real con foco en peso argentino.",
          cardelliTitle: "Cardelli - Gomería",
          mclTitle: "MCL - Concesionaria",
          alvarezTitle: "Alvarez - Construcción en seco",
          courseTitle: "Sistema de Gestión de Cursos",
          currencyTitle: "Plataforma de Cotizaciones",
        },
      },
      education: {
        title: "Educación",
        subtitle: "Mi formación académica y aprendizaje continuo.",
        periodPresent: "03.2021 - actualidad",
        degree1: "Ingeniería en Sistemas de Información",
        degree2: "Desarrollo Web Full Stack",
        degree3: "Analista Universitario en Sistemas de Información",
        institutionPlatzi: "Platzi - Cursos Online",
        subjects: {
          dsAlgo: "Estructuras de Datos y Algoritmos",
          dbSystems: "Sistemas de Bases de Datos",
          seQa: "Ingeniería de Software y Aseguramiento de Calidad",
          webDev: "Desarrollo Web",
          networks: "Redes de Computadoras",
          ai: "Inteligencia Artificial",
          dataScience: "Ciencia de Datos",
          softwareDev: "Desarrollo de Software",
          systemsDesign: "Diseño de Sistemas de Información",
          databases: "Bases de Datos",
          systemsAnalysis: "Análisis de Sistemas de Información",
          backendApps: "Aplicaciones Backend",
        },
      },
      contact: {
        title: "Contacto",
        getInTouch: "Hablemos",
        intro:
          "Siempre estoy interesado en nuevas oportunidades y proyectos desafiantes. Ya sea que tengas una consulta o simplemente quieras saludar, ¡escribime!",
        email: "Email",
        phone: "Teléfono",
        location: "Ubicación",
        sendMessage: "Enviar mensaje",
        namePlaceholder: "Juan Pérez",
        emailPlaceholder: "email@ejemplo.com",
        messagePlaceholder: "Hola, me gustaría...",
        sending: "Enviando...",
        send: "Enviar mensaje",
        notice: "Aviso",
        success: "¡Mensaje enviado con éxito!",
        error: "Error al enviar el mensaje. Intentá nuevamente más tarde.",
      },
      footer: {
        rights: "Todos los derechos reservados.",
      },
    },
  },
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  })
}

export default i18n