import { useState, useMemo } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function ROICalculator() {
  const [employees, setEmployees] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(3);

  const calculations = useMemo(() => {
    const hourlyRate = 400;
    const frostCost = 499;
    const monthlySavings = employees * hoursPerWeek * 4 * hourlyRate;
    const frostMonthlyCost = frostCost;
    const monthlyProfit = monthlySavings - frostMonthlyCost;
    const annualProfit = monthlyProfit * 12;

    return {
      hourlyRate,
      frostCost,
      monthlySavings: Math.round(monthlySavings),
      monthlyProfit: Math.round(monthlyProfit),
      annualProfit: Math.round(annualProfit),
      breakeven: Math.ceil(frostCost / (monthlySavings / (employees * hoursPerWeek * 4))),
    };
  }, [employees, hoursPerWeek]);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-card/50 to-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm mb-4">
            <TrendingUp className="h-4 w-4" />
            ROI Kalkylator
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Räkna ut din besparing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Se hur mycket ditt företag kan spara med Frost Bygg
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-border bg-card p-8 mb-8">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-semibold text-foreground">
                    Antal anställda
                  </label>
                  <span className="text-2xl font-bold text-accent">{employees}</span>
                </div>
                <Slider
                  value={[employees]}
                  onValueChange={(value) => setEmployees(value[0])}
                  min={1}
                  max={20}
                  step={1}
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Som arbetar med administration/tidrapportering
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-semibold text-foreground">
                    Timmar per vecka på administration
                  </label>
                  <span className="text-2xl font-bold text-accent">{hoursPerWeek}h</span>
                </div>
                <Slider
                  value={[hoursPerWeek]}
                  onValueChange={(value) => setHoursPerWeek(value[0])}
                  min={0.5}
                  max={10}
                  step={0.5}
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Per anställd för ROT-ansökningar, fakturor, tidsrapporter
                </p>
              </div>
            </div>

            <div className="border-t border-border mt-8 pt-8">
              <div className="grid gap-4 sm:grid-cols-3">
                <motion.div
                  key={`${calculations.monthlySavings}`}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="text-center p-4 rounded-lg bg-success/5 border border-success/20"
                >
                  <p className="text-xs text-muted-foreground mb-1">
                    Månadsbesparing
                  </p>
                  <p className="text-2xl font-bold text-success">
                    {calculations.monthlySavings.toLocaleString('sv-SE')} kr
                  </p>
                </motion.div>

                <motion.div
                  key={`${calculations.monthlyProfit}`}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="text-center p-4 rounded-lg bg-accent/5 border border-accent/20"
                >
                  <p className="text-xs text-muted-foreground mb-1">
                    Nettovinst/månad
                  </p>
                  <p className="text-2xl font-bold text-accent">
                    {calculations.monthlyProfit.toLocaleString('sv-SE')} kr
                  </p>
                </motion.div>

                <motion.div
                  key={`${calculations.annualProfit}`}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="text-center p-4 rounded-lg bg-green-500/5 border border-green-500/20"
                >
                  <p className="text-xs text-muted-foreground mb-1">
                    Per år
                  </p>
                  <p className="text-2xl font-bold text-green-600">
                    {calculations.annualProfit.toLocaleString('sv-SE')} kr
                  </p>
                </motion.div>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Break-even: {calculations.breakeven} dag{calculations.breakeven !== 1 ? 'ar' : ''}
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button variant="frost" size="lg" className="group">
              Starta gratis idag
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              30 dagars gratis provperiod. Ingen bindningstid.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
