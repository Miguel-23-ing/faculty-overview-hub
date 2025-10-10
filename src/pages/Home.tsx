import { Link } from "react-router-dom";
import { BookOpen, Microscope, GraduationCap, Briefcase, Building2, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const sections = [
  {
    id: "docencia",
    title: "Docencia",
    description: "Cursos, estudiantes y evaluaciones",
    icon: BookOpen,
    stats: "12 cursos activos",
    path: "/docencia",
    color: "from-primary/20 to-primary/5"
  },
  {
    id: "investigacion",
    title: "Investigación",
    description: "Proyectos y semilleros de investigación",
    icon: Microscope,
    stats: "5 proyectos activos",
    path: "/investigacion",
    color: "from-accent/20 to-accent/5"
  },
  {
    id: "formacion",
    title: "Formación",
    description: "Nivel académico y certificaciones",
    icon: GraduationCap,
    stats: "PhD en Ingeniería",
    path: "/formacion",
    color: "from-success/20 to-success/5"
  },
  {
    id: "actividades",
    title: "Actividades Académicas",
    description: "Cargos y responsabilidades administrativas",
    icon: Briefcase,
    stats: "3 cargos activos",
    path: "/actividades",
    color: "from-warning/20 to-warning/5"
  },
  {
    id: "organizaciones",
    title: "Organizaciones",
    description: "Proyectos y capacitaciones con empresas",
    icon: Building2,
    stats: "8 colaboraciones",
    path: "/organizaciones",
    color: "from-info/20 to-info/5"
  },
  {
    id: "escalafon",
    title: "Escalafón Docente",
    description: "Puntaje, categoría y evaluaciones",
    icon: TrendingUp,
    stats: "350/500 puntos",
    path: "/escalafon",
    color: "from-primary/20 to-accent/5"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-secondary/50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4 tracking-tight">
            Gestión Docente
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Panel general para visualizar rápidamente la disponibilidad y actividades de los profesores
          </p>
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
                    
                    <div className="pt-4 border-t border-border">
                      <span className="text-sm font-medium text-primary">
                        {section.stats}
                      </span>
                    </div>
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
