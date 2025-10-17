import { Link } from "react-router-dom";
import { BookOpen, Microscope, GraduationCap, Briefcase, Building2, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { professorProfile, computeAvailability } from "@/lib/profile";
import { cursosPregradoData, cursosPosgradoData } from "./Docencia";
import { proyectosData as proyectosInvestigacion } from "./Investigacion";
import { proyectosData as proyectosOrganizaciones, formacionesData } from "./Organizaciones";
import { formacionData, certificacionesData } from "./Formacion";
import { actividadesAcademicasData, actividadesAdministrativasData } from "./Actividades";



const sections = [
  {
    id: "docencia",
    title: "Docencia",
    description: "Cursos, estudiantes y evaluaciones",
    icon: BookOpen,
    path: "/docencia",
    color: "from-primary/20 to-primary/5"
  },
  {
    id: "actividades",
    title: "Roles",
    description: "Cargos y responsabilidades administrativas",
    icon: Briefcase,
    path: "/actividades",
    color: "from-warning/20 to-warning/5"
  },
  {
    id: "formacion",
    title: "Formación",
    description: "Nivel académico y certificaciones",
    icon: GraduationCap,
    path: "/formacion",
    color: "from-success/20 to-success/5"
  },
  {
    id: "organizaciones",
    title: "Organizaciones",
    description: "Proyectos y capacitaciones con empresas",
    icon: Building2,
    path: "/organizaciones",
    color: "from-info/20 to-info/5"
  },
  {
    id: "investigacion",
    title: "Investigación",
    description: "Proyectos y semilleros de investigación",
    icon: Microscope,
    path: "/investigacion",
    color: "from-accent/20 to-accent/5"
  },
  {
    id: "escalafon",
    title: "Escalafón Docente",
    description: "Puntaje, categoría y evaluaciones",
    icon: TrendingUp,
    path: "/escalafon",
    color: "from-primary/20 to-accent/5"
  }
];

const Home = () => {
  const docenciaCourses = [...cursosPregradoData, ...cursosPosgradoData];
  const docenciaHours = docenciaCourses.reduce((s, c) => s + (c.horasSemanales || 0), 0);

  // TODO: llenar horas investigacion y organizaciones si tienes ese dato en los proyectos
  const investigacionHours = 0;
  const organizacionesHours = 0;

  const availability = computeAvailability(docenciaHours, investigacionHours, organizacionesHours, 48);

  // Función para generar el contenido específico de cada tarjeta
  const getSectionStats = (sectionId: string) => {
    switch (sectionId) {
      case "docencia":
        return (
          <div className="pt-4 border-t border-border space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Cursos Activos</span>
              <span className="font-medium text-primary">{docenciaCourses.filter(c => c.estado === "Activo").length}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total de asignaturas</span>
              <span className="font-medium">{docenciaCourses.length}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Horas Semanales</span>
              <span className="font-medium">{docenciaHours}h</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">de 48h asignadas</span>
              <span className="font-medium text-primary">Disponibilidad: {availability.available}h ({availability.percent}%)</span>
            </div>
          </div>
        );
      case "investigacion":
        return (
          <div className="pt-4 border-t border-border space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Proyectos activos</span>
              <span className="font-medium text-primary">{proyectosInvestigacion.filter(p => p.estado === "Activo").length}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Índice de profesores</span>
              <span className="font-medium">{proyectosInvestigacion.reduce((s, p) => s + (p.indiceProfesores || 0), 0)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Productos completados</span>
              <span className="font-medium text-primary">{proyectosInvestigacion.reduce((sum, p) => sum + p.productos.filter(pr => pr.completado).length, 0)} / {proyectosInvestigacion.reduce((sum, p) => sum + p.productos.filter(pr => pr.comprometido).length, 0)}</span>
            </div>
          </div>
        );
      case "formacion":
        return (
          <div className="pt-4 border-t border-border">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Cantidad de formaciones</span>
              <span className="font-medium text-primary">{formacionData.length + (certificacionesData?.length || 0)}</span>
            </div>
          </div>
        );
      case "actividades":
        return (
          <div className="pt-4 border-t border-border">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Roles activos</span>
              <span className="font-medium text-primary">{actividadesAcademicasData.length + actividadesAdministrativasData.length}</span>
            </div>
            <div className="text-xs text-muted-foreground mt-1">Académicos y administrativos</div>
          </div>
        );
      case "organizaciones":
        return (
          <div className="pt-4 border-t border-border space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Proyectos</span>
              <span className="font-medium">{proyectosOrganizaciones.length}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Formaciones</span>
              <span className="font-medium text-primary">{formacionesData.length}</span>
            </div>
          </div>
        );
      case "escalafon":
        return (
          <div className="pt-4 border-t border-border">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Puntos / Categoría</span>
              <span className="font-medium text-primary">350 / 500</span>
            </div>
            <div className="text-xs text-muted-foreground mt-1">Progreso hacia siguiente nivel</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-secondary/50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Profile info (vista del jefe viendo datos del profesor) */}
        <header className="text-center mb-12">
          <Card className="bg-card/50 border-border backdrop-blur-sm">
            <CardContent className="p-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">{professorProfile.nombre}</h1>
              <div className="flex justify-center items-center gap-4 text-muted-foreground">
                <span>{professorProfile.correo}</span>
                <span>•</span>
                <span>{professorProfile.telefono}</span>
                <span>•</span>
                <span>{professorProfile.lugar}</span>
              </div>
            </CardContent>
          </Card>
        </header>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link 
                key={section.id} 
                to={section.path}
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/50 bg-card border-border">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h2 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {section.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {section.description}
                    </p>
                    
                    {getSectionStats(section.id)}
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
