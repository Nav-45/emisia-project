import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProductDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Product Dashboard</h1>
        <p className="text-muted-foreground">Overview of product emissions and performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">24</div>
            <p className="text-sm text-muted-foreground">+3 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Avg Carbon Footprint</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">2.4 kg CO₂e</div>
            <p className="text-sm text-muted-foreground">-0.3 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Products Analyzed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">18</div>
            <p className="text-sm text-muted-foreground">75% completion rate</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}