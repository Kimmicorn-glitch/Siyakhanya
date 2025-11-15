// siyaKhanya — kimmy@siyaKhanya
import { ConsumptionChartCard } from '@/components/dashboard/consumption-chart-card';
import { DataAnalysisCard } from '@/components/dashboard/data-analysis-card';
import { Header } from '@/components/dashboard/header';
import { ScenarioBuilderCard } from '@/components/dashboard/scenario-builder-card';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-8 grid gap-8 grid-cols-1 lg:grid-cols-3 items-start">
        <div className="lg:col-span-1 flex flex-col gap-8">
          <ScenarioBuilderCard />
          <DataAnalysisCard />
        </div>
        <div className="lg:col-span-2">
          <ConsumptionChartCard />
        </div>
      </main>
      <footer className="py-4 text-center text-sm text-muted-foreground border-t">
        © siyaKhanya
      </footer>
    </div>
  );
}
