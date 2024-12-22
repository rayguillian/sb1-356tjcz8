import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart } from 'lucide-react';

interface QuoteCardProps {
  quote: string;
  author: string;
}

export function QuoteCard({ quote, author }: QuoteCardProps) {
  return (
    <Card className="p-6 bg-white/70 backdrop-blur-sm">
      <div className="space-y-4">
        <p className="text-xl font-serif">"{quote}"</p>
        <p className="text-sm text-gray-600">― {author}</p>
        <div className="flex justify-end">
          <Button variant="ghost" size="sm">
            <Heart className="w-4 h-4 mr-2" />
            Save
          </Button>
        </div>
      </div>
    </Card>
  );
}