
import { Badge } from "@/components/ui/badge";

export default function VoteBadge() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Badge className="bg-campaign-yellow text-campaign-blue hover:bg-yellow-300 text-sm font-bold py-2 px-4 rounded-full shadow-lg border-2 border-campaign-blue">
        Vote Joe for City Council
      </Badge>
    </div>
  );
}
