import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  { id: 1, name: "Organic Almonds", category: "Nuts", emissions: "1.2 kg CO₂e", status: "Analyzed" },
  { id: 2, name: "Compostable Wrapper", category: "Packaging", emissions: "0.3 kg CO₂e", status: "Pending" },
  { id: 3, name: "Energy Bar Mix", category: "Food", emissions: "2.1 kg CO₂e", status: "Analyzed" },
  { id: 4, name: "Recycled Box", category: "Packaging", emissions: "0.8 kg CO₂e", status: "Draft" },
];

export default function ProductList() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Product List</h1>
          <p className="text-muted-foreground">Manage and track your product carbon footprints</p>
        </div>
        <Button variant="eco">Add New Product</Button>
      </div>

      <div className="grid gap-4">
        {products.map((product) => (
          <Card key={product.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-semibold text-foreground">{product.emissions}</p>
                    <p className="text-sm text-muted-foreground">Carbon footprint</p>
                  </div>
                  <Badge 
                    variant={product.status === "Analyzed" ? "default" : 
                            product.status === "Pending" ? "secondary" : "outline"}
                  >
                    {product.status}
                  </Badge>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}