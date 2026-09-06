import { AppLayout } from "../components/layout/AppLayout";
import { Card } from "../components/ui/card";

const cards = [
  "Node",
  "npm",
  "Credentials",
  "Clients Ready"
];

export function Dashboard() {
  return (
    <AppLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">
            Plugin MCP
          </h1>

          <p className="text-muted-foreground mt-2">
            Official Notion MCP Manager
          </p>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
          {cards.map((card) => (
            <Card
              key={card}
              className="rounded-2xl p-6 backdrop-blur-xl"
            >
              <p className="text-sm text-muted-foreground">
                {card}
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                --
              </h2>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}