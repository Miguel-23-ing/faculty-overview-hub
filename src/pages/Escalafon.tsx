import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, Award, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const categorias = [
  { nombre: "Auxiliar", puntosMax: 500, descripcion: "Nivel inicial" },
  { nombre: "Asistente", puntosMax: 500, descripcion: "Nivel intermedio" },
  { nombre: "Asociado", puntosMax: 500, descripcion: "Nivel avanzado" },
  { nombre: "Titular", puntosMax: 500, descripcion: "Nivel máximo" }
];

const datosActuales = {
  categoria: "Asociado",
  puntajeActual: 350,
  puntajeMaximo: 500
};

const historialCalificaciones = [
  { semestre: "2022-1", calificacion: 4.2 },
  { semestre: "2022-2", calificacion: 4.5 },
  { semestre: "2023-1", calificacion: 4.3 },
  { semestre: "2023-2", calificacion: 4.7 },
  { semestre: "2024-1", calificacion: 4.6 },
  { semestre: "2024-2", calificacion: 4.8 },
  { semestre: "2025-1", calificacion: 4.9 }
];

const evaluacionesDetalladas = [
  {
    id: 1,
    fecha: "Diciembre 2024",
    calificacion: 4.9,
    evaluador: "Comité de Evaluación Docente",
    observaciones: "Excelente desempeño en docencia e investigación"
  },
  {
    id: 2,
    fecha: "Junio 2024",
    calificacion: 4.6,
    evaluador: "Comité de Evaluación Docente",
    observaciones: "Muy buen desempeño, se destacan las publicaciones"
  },
  {
    id: 3,
    fecha: "Diciembre 2023",
    calificacion: 4.7,
    evaluador: "Comité de Evaluación Docente",
    observaciones: "Sobresaliente en actividades de extensión"
  }
];

const Escalafon = () => {
  const promedioCalificaciones = (
    historialCalificaciones.reduce((sum, item) => sum + item.calificacion, 0) / 
    historialCalificaciones.length
  ).toFixed(2);

  const porcentajeProgreso = (datosActuales.puntajeActual / datosActuales.puntajeMaximo) * 100;

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
          <h1 className="text-4xl font-bold text-foreground mb-2">Escalafón Docente</h1>
          <p className="text-muted-foreground">Puntaje, categoría, evaluaciones y trayectoria académica</p>
        </div>

        {/* Resumen principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Categoría Actual</p>
                  <p className="text-2xl font-bold text-primary">{datosActuales.categoria}</p>
                </div>
                <Award className="h-10 w-10 text-primary/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Puntaje Actual</p>
                  <p className="text-2xl font-bold text-accent">
                    {datosActuales.puntajeActual}/{datosActuales.puntajeMaximo}
                  </p>
                </div>
                <Target className="h-10 w-10 text-accent/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Promedio Calificaciones</p>
                  <p className="text-3xl font-bold text-success">{promedioCalificaciones}</p>
                </div>
                <TrendingUp className="h-10 w-10 text-success/60" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progreso en categoría actual */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Progreso en Categoría {datosActuales.categoria}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Puntos acumulados</span>
                <span className="text-lg font-bold text-primary">
                  {datosActuales.puntajeActual} / {datosActuales.puntajeMaximo} puntos
                </span>
              </div>
              <Progress value={porcentajeProgreso} className="h-3" />
              <p className="text-sm text-muted-foreground">
                Faltan {datosActuales.puntajeMaximo - datosActuales.puntajeActual} puntos para completar la categoría actual
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Categorías del escalafón */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Categorías del Escalafón Docente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {categorias.map((cat) => (
                <div 
                  key={cat.nombre}
                  className={`p-4 rounded-lg border-2 ${
                    cat.nombre === datosActuales.categoria 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border bg-card'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{cat.nombre}</h3>
                    {cat.nombre === datosActuales.categoria && (
                      <Badge variant="default">Actual</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{cat.descripcion}</p>
                  <p className="text-xs text-muted-foreground">{cat.puntosMax} puntos máximos</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Gráfico de calificaciones */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Historial de Calificaciones por Semestre</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={historialCalificaciones}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="semestre" 
                    stroke="#6b7280"
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis 
                    domain={[1, 7]} 
                    stroke="#6b7280"
                    style={{ fontSize: '12px' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="calificacion" 
                    stroke="hsl(215, 70%, 45%)" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(215, 70%, 45%)', r: 5 }}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-4">
              Escala de calificación: 1.0 a 7.0
            </p>
          </CardContent>
        </Card>

        {/* Tabla de evaluaciones detalladas */}
        <Card>
          <CardHeader>
            <CardTitle>Evaluaciones Detalladas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {evaluacionesDetalladas.map((evaluacion) => (
                <div 
                  key={evaluacion.id}
                  className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-semibold text-foreground mb-1">{evaluacion.fecha}</p>
                      <p className="text-sm text-muted-foreground">{evaluacion.evaluador}</p>
                    </div>
                    <Badge variant="default" className="text-lg px-3 py-1">
                      {evaluacion.calificacion}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground italic">{evaluacion.observaciones}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Escalafon;
