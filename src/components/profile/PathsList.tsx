import { Book } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Path {
  id: number;
  name: string;
  active: boolean;
}

interface PathsListProps {
  paths: Path[];
  onPathToggle: (id: number) => void;
}

export function PathsList({ paths, onPathToggle }: PathsListProps) {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Your Paths</h2>
      <div className="space-y-3">
        {paths.map(path => (
          <div 
            key={path.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <Book className="w-5 h-5 text-indigo-600" />
              <span>{path.name}</span>
            </div>
            <Button 
              variant={path.active ? "default" : "outline"}
              size="sm"
              onClick={() => onPathToggle(path.id)}
            >
              {path.active ? 'Active' : 'Activate'}
            </Button>
          </div>
        ))}
        <Button variant="outline" className="w-full mt-4">
          Discover More Paths
        </Button>
      </div>
    </Card>
  );
}