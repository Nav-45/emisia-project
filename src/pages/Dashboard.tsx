import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const emissionsData = [
  { name: "Scope 1", value: 65.3, color: "#ef4444" },
  { name: "Scope 2", value: 24.2, color: "#f59e0b" },
  { name: "Scope 3", value: 10.5, color: "#10b981" },
];

const yearlyData = [
  { year: "2022", scope1: 45, scope2: 32, scope3: 18 },
  { year: "2023", scope1: 38, scope2: 28, scope3: 22 },
  { year: "2024", scope1: 42, scope2: 25, scope3: 20 },
  { year: "2025", scope1: 35, scope2: 22, scope3: 15 },
];

const suppliersData = [
  { name: "Electricity consumption", value: 2720, color: "#f472b6" },
  { name: "Compostable wrappers", value: 2500, color: "#f472b6" },
  { name: "Raw almonds (bulk)", value: 888, color: "#f472b6" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">sdfwdsa</h1>
          <p className="text-muted-foreground">Industry: Food and Beverage</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-1">Organisation Score</div>
            <div className="text-4xl font-bold text-primary">87</div>
            <div className="text-sm text-muted-foreground">out of 100</div>
          </div>
          <Button variant="eco" size="lg">
            Produce report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Scope Breakdown Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Scope breakdown (1, 2, 3) % of total emissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={emissionsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    startAngle={90}
                    endAngle={450}
                    dataKey="value"
                  >
                    {emissionsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              {emissionsData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <div className="text-2xl font-bold text-foreground">{emissionsData[0].value}%</div>
            </div>
          </CardContent>
        </Card>

        {/* Total Emissions */}
        <Card>
          <CardHeader>
            <CardTitle>Total emissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <div className="text-sm text-muted-foreground mb-2">tCO₂e</div>
              <div className="text-5xl font-bold text-foreground">7.210k</div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Emissions (tCO₂e) by year and scope</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={yearlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="scope1" stackId="a" fill="#ef4444" />
                    <Bar dataKey="scope2" stackId="a" fill="#f59e0b" />
                    <Bar dataKey="scope3" stackId="a" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <span className="text-sm text-muted-foreground">Scope 1</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <span className="text-sm text-muted-foreground">Scope 2</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-sm text-muted-foreground">Scope 3</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Suppliers Breakdown */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl">85% of your scope 3 emissions came from your top 10 suppliers</CardTitle>
          </div>
          <Button variant="outline" size="sm">
            Engage suppliers →
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {suppliersData.map((supplier, index) => (
              <div key={supplier.name} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">{supplier.name}</span>
                    <span className="text-sm font-bold text-foreground">{supplier.value.toLocaleString()} t CO₂e</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className="h-3 rounded-full" 
                      style={{ 
                        backgroundColor: supplier.color,
                        width: `${(supplier.value / Math.max(...suppliersData.map(s => s.value))) * 100}%`
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}