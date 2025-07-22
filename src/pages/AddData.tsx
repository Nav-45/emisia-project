import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText } from "lucide-react";

export default function AddData() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Add Data</h1>
        <p className="text-muted-foreground">Upload invoices or item-level data in .csv format.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Add Invoices
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Accepted formats: CSV (columns: item, quantity, unit)
          </p>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-border rounded-lg p-12 text-center">
            <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Choose file No file chosen</p>
              <Button variant="eco">Upload invoices</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}