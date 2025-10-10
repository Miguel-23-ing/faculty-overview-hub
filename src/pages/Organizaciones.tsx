import { Link } from "react-router-dom";
import { ArrowLeft, Building2, TrendingUp, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const organizacionesData = [
  {
    id: 1,
    empresa: "TechCorp Colombia",
    tipo: "Capacitación",
    actividad: "Curso de Machine Learning Aplicado",
    duracion: "3 meses",
    fechaInicio: "Enero 2025",
    fechaFin: "Marzo 2025",
    estado: "En progreso",
    descripcion: "Capacitación en técnicas avanzadas de ML para el equipo de desarrollo"
  },
  {
    id: 2,
    empresa: "Banco Nacional",
    tipo: "Consultoría",
    actividad: "Implementación de Sistema de IA para Detección de Fraude",
    duracion: "6 meses",
    fechaInicio: "Octubre 2024",
    fechaFin: "Marzo 2025",
    estado: "En progreso",
    descripcion: "Diseño e implementación de modelo predictivo para detección de fraude"
  },
  {
    id: 3,
    empresa: "StartupHub",
    tipo: "Asesoría",
    actividad: "Asesoría en Arquitectura de Software",
    duracion: "2 meses",
    fechaInicio: "Noviembre 2024",
    fechaFin: "Diciembre 2024",
    estado: "Completado",
    descripcion: "Revisión y mejora de la arquitectura de software de la plataforma"
  },
  {
    id: 4,
    empresa: "IndustriasTech",
    tipo: "Proyecto",
    actividad: "Desarrollo de Sistema de Gestión IoT",
    duracion: "8 meses",
    fechaInicio: "Julio 2024",
    fechaFin: "Febrero 2025",
    estado: "En progreso",
    descripcion: "Creación de plataforma IoT para monitoreo industrial"
  },
  {
    id: 5,
    empresa: "EduTech Solutions",
    tipo: "Capacitación",
    actividad: "Workshop de Desarrollo Ágil",
    duracion: "1 mes",
    fechaInicio: "Septiembre 2024",
    fechaFin: "Septiembre 2024",
    estado: "Completado",
    descripcion: "Talleres prácticos sobre metodologías ágiles de desarrollo"
  }
];

const Organizaciones = () => {
  const proyectosActivos = organizacionesData.filter(o => o.estado === "En progreso").length;
  const proyectosCompletados = organizacionesData.filter(o => o.estado === "Completado").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-secondary/50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6 hover:bg-secondary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al panel principal
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Organizaciones</h1>
          <p className="text-muted-foreground">Proyectos, capacitaciones y colaboraciones con empresas</p>
        </div>

        {/* Resumen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Colaboraciones</p>
                  <p className="text-3xl font-bold text-primary">{organizacionesData.length}</p>
                </div>
                <Building2 className="h-10 w-10 text-primary/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">En Progreso</p>
                  <p className="text-3xl font-bold text-accent">{proyectosActivos}</p>
                </div>
                <TrendingUp className="h-10 w-10 text-accent/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Completados</p>
                  <p className="text-3xl font-bold text-success">{proyectosCompletados}</p>
                </div>
                <CheckCircle className="h-10 w-10 text-success/60" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Distribución por tipo */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Distribución por Tipo de Actividad</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Capacitación", "Consultoría", "Asesoría", "Proyecto"].map((tipo) => {
                const count = organizacionesData.filter(o => o.tipo === tipo).length;
                return (
                  <div key={tipo} className="text-center p-4 bg-secondary/50 rounded-lg">
                    <p className="text-2xl font-bold text-primary mb-1">{count}</p>
                    <p className="text-sm text-muted-foreground">{tipo}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Lista de proyectos */}
        <div className="space-y-4">
          {organizacionesData.map((org) => (
            <Card key={org.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{org.actividad}</CardTitle>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="default">{org.tipo}</Badge>
                      <Badge variant={org.estado === "En progreso" ? "secondary" : "outline"}>
                        {org.estado}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm font-medium text-primary mb-1">Empresa: {org.empresa}</p>
                  <p className="text-sm text-muted-foreground">{org.descripcion}</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Duración</p>
                    <p className="font-medium text-foreground">{org.duracion}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Fecha inicio</p>
                    <p className="font-medium text-foreground">{org.fechaInicio}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Fecha fin</p>
                    <p className="font-medium text-foreground">{org.fechaFin}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Organizaciones;
