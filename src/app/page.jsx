import utilities from "@/data/utilities.json";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {utilities.map((utility) => (
        <Link href={`/utility/${utility.id}`} key={utility.id}>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="text-xl flex justify-between items-center">
                <span>
                  {utility.icon} {utility.title}
                </span>
                <span className="text-muted-foreground text-sm">
                  {utility.unit}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">Rs {utility.price}</p>
              <p className="text-sm text-muted-foreground mt-2">
                Updated: {utility.lastUpdated}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}

      {/* Ad Placeholder */}
      <div className="col-span-full">
        <div className="border border-dashed rounded-lg p-4 text-center text-muted-foreground">
          Ad Space Placeholder
        </div>
      </div>
    </div>
  );
}
